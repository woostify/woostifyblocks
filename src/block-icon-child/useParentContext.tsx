import { useSelect } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";

export const useParentContext = (clientId: string) => {
	const parentClientId = useSelect(
		(select) => {
			// @ts-ignore
			return select(blockEditorStore).getBlockRootClientId(clientId);
		},
		[clientId]
	);

	const parentBlock = useSelect(
		(select) => {
			if (!parentClientId) return null;
			// @ts-ignore
			return select(blockEditorStore).getBlock(parentClientId);
		},
		[parentClientId]
	);

	const isChildOfIconList = parentBlock?.name === "wcb/icon-list";
	
	return {
		parentClientId,
		parentBlock,
		isChildOfIconList,
		parentAttributes: parentBlock?.attributes || null
	};
}; 