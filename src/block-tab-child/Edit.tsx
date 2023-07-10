import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	store as blockEditorStore,
	// @ts-ignore
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import React, { useEffect, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import { WCB_FAQ_PANEL_ICON } from "../block-faq/WcbFaqPanelIcon";
import { WCB_FAQ_PANEL_GENERAL } from "../block-faq/WcbFaqPanelGeneral";
import { useSelect } from "@wordpress/data";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<
	EditProps<
		WcbAttrs,
		{
			"wcb/faq_icon"?: WCB_FAQ_PANEL_ICON;
			"wcb/faq_general"?: WCB_FAQ_PANEL_GENERAL;
		}
	>
> = (props) => {
	const { attributes, setAttributes, clientId, context, isSelected } = props;
	const { uniqueId, defaultExtend } = attributes;

	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	//
	const blockIndex: number = useSelect(
		(select) => select(blockEditorStore).getBlockIndex(clientId),
		[clientId]
	);

	//
	useEffect(() => {
		console.log(12, "------ FAQ CHILD setAttributes ON useEffect --------");
		// setAttributes({
		// 	enableSeparator: context["wcb/faq_general"]?.enableSeparator,
		// });
	}, [context["wcb/faq_general"], context["wcb/faq_icon"], blockIndex]);

	//
	const MY_TEMPLATE = [
		[
			"core/paragraph",
			{
				placeholder:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
				content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
			},
		],
	];
	const blockProps = useBlockProps({
		className: `wcb-tab-child__inner`,
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: null,
		template: MY_TEMPLATE,
		// renderAppender: () => {
		// 	if (!hasInnerBlocks) {
		// 		return <InnerBlocks.ButtonBlockAppender />;
		// 	}
		// 	return isSelected ? <InnerBlocks.DefaultBlockAppender /> : null;
		// },
	});

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-tab-child__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				<div {...innerBlocksProps} id={undefined} />
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
