import { useSelect } from '@wordpress/data';
// @ts-ignore
import { store as blockEditorStore } from '@wordpress/block-editor';
import { WcbAttrs as SliderAttrs } from '../block-slider/attributes';

interface ParentContextReturn {
	isChildOfSlider: boolean;
	parentAttributes: SliderAttrs | null;
	parentClientId: string | null;
}

export const useParentContext = (clientId: string): ParentContextReturn => {
	return useSelect((select: any) => {
		const { getBlockParents, getBlock } = select(blockEditorStore);
		
		// Get all parent block IDs
		const parentIds = getBlockParents(clientId);
		
		// Find the immediate parent (slider block)
		const parentClientId = parentIds.length > 0 ? parentIds[parentIds.length - 1] : null;
		
		if (!parentClientId) {
			return {
				isChildOfSlider: false,
				parentAttributes: null,
				parentClientId: null,
			};
		}
		
		// Get parent block data
		const parentBlock = getBlock(parentClientId);
		
		// Check if parent is a slider block
		const isChildOfSlider = parentBlock?.name === 'wcb/slider';
		
		return {
			isChildOfSlider,
			parentAttributes: isChildOfSlider ? parentBlock.attributes : null,
			parentClientId: isChildOfSlider ? parentClientId : null,
		};
	}, [clientId]);
}; 