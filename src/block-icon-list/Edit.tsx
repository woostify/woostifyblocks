import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps, 	// @ts-ignore
	useInnerBlocksProps, store as blockEditorStore} from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import React, { useEffect, FC, useRef, useCallback } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbIconBoxPanelLayout from "./WcbIconListPanelLayout";
import WcbIconBoxPanelIcon from "./WcbIconListPanelIcon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbTeamPanel_StyleTitle from "./WcbIconListPanel_StyleTitle";
import WcbTeamPanel_StyleDesignation from "./WcbIconListPanel_StyleDesignation";
import WcbIconBoxPanel_StyleSeparator from "./WcbIconListPanel_StyleSeparator";
import WcbIconBoxPanel_StyleDimension from "./WcbIconListPanel_StyleDimension";
import { MY_DIMENSIONS_NO_GAP_DEMO__EMPTY } from "../components/controls/MyDimensionsControl/types";
import { 
	WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_1, 
	WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_2, 
	WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_3,
	WCB_ICON_LIST_PANEL_STYLE_ICON_DEMO
} from "./WcbIconListPanel_StyleIcons";
import WcbIconBoxPanel_StyleIcons from "./WcbIconListPanel_StyleIcons";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import WcbIconListPanelPreset from "./WcbIconListPanelPreset";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_layout,
		general_icon,
		general_preset,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_separator,
		style_dimension,
		general_separator,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
	// const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbIconBoxPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							//
							setAttr__={handleChangeIcon}
							panelData={general_icon}
						/>

						<WcbIconBoxPanelLayout
							onToggle={() => handleTogglePanel("General", "Content", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Content" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Content" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_layout: data });
								// Update layout for all child blocks
								innerBlockClientIds.forEach((childId) => {
									updateBlockAttributes(childId, { general_layout: data });
								});
							}}
							panelData={general_layout}
						/>

						<WcbIconListPanelPreset
							onToggle={() => handleTogglePanel("General", "Preset")}
							initialOpen={
								tabGeneralIsPanelOpen === "Preset"
							}
							opened={tabGeneralIsPanelOpen === "Preset" || undefined}
							//
							setAttr__={(data) => {
								const { preset } = data;
								setAttributes({
									general_preset: data,
								});
								const newStyleIcon = preset === "wcb-icon-list-1"
									? WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_1
									: preset === "wcb-icon-list-2"
									? WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_2
									: preset === "wcb-icon-list-3"
									? WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_3
									: WCB_ICON_LIST_PANEL_STYLE_ICON_DEMO;
								
								setAttributes({
									style_Icon: newStyleIcon,
								});
								
								// Update layout for all child blocks with new preset
								innerBlockClientIds.forEach((childId) => {
									updateBlockAttributes(childId, { 
										style_Icon: newStyleIcon,
									});
								});
							}}
							panelData={general_preset}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						{general_icon.enableIcon && (
							<WcbIconBoxPanel_StyleIcons
								onToggle={() => handleTogglePanel("Styles", "_StyleIcons")}
								initialOpen={tabStylesIsPanelOpen === "_StyleIcons"}
								opened={tabStylesIsPanelOpen === "_StyleIcons" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_Icon: data });
									// Update icon for all child blocks
									innerBlockClientIds.forEach((childId) => {
										updateBlockAttributes(childId, { 
											style_Icon: data,
											});
										});
								}}
								panelData={style_Icon}
							/>
						)}
						{general_layout.enablePrefix && (
							<WcbTeamPanel_StyleDesignation
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleDesignation")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleDesignation"}
								opened={
									tabStylesIsPanelOpen === "_StyleDesignation" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_desination: data });
								}}
								panelData={style_desination}
							/>
						)}
						{general_layout.enableTitle && (
							<WcbTeamPanel_StyleTitle
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleTitle", true)
								}
								initialOpen={
									tabStylesIsPanelOpen === "_StyleTitle" ||
									tabStylesIsPanelOpen === "first"
								}
								opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_title: data });
									// Update title style for all child blocks
									innerBlockClientIds.forEach((childId) => {
										updateBlockAttributes(childId, { 
											style_title: data,
										});
									});
								}}
								panelData={style_title}
							/>
						)}

						{general_separator.enableSeparator && (
							<WcbIconBoxPanel_StyleSeparator
								onToggle={() => handleTogglePanel("Styles", "_StyleSeparator")}
								initialOpen={tabStylesIsPanelOpen === "_StyleSeparator"}
								opened={tabStylesIsPanelOpen === "_StyleSeparator" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_separator: data });
								}}
								panelData={style_separator}
							/>
						)}
						<WcbIconBoxPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
						/>
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_motionEffect={advance_motionEffect}
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	const ALLOWED_BLOCKS = ["wcb/icon"];
	const TEMPLATE = [
		["wcb/icon", {}],
		["wcb/icon", {}],
		["wcb/icon", {}],
	];

	const innerBlocksProps = useInnerBlocksProps({
		className: `wcb-icon-list__icon-wrap`,
	}, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE,
				renderAppender: () => <InnerBlocks.DefaultBlockAppender />
	});

	/**
	 * Retrieves the `updateBlockAttributes` action dispatcher from the block editor store.
	 * This function allows updating the attributes of a specific block within the editor.
	 *
	 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#updateblockattributes
	 */
	const { updateBlockAttributes } = useDispatch(blockEditorStore);

	// Get list clientId if child blocks
	const innerBlockClientIds = useSelect(
		(select: typeof wp.data.select) =>
			select(blockEditorStore).getBlockOrder
				? select(blockEditorStore).getBlockOrder(clientId)
				: [],
		[clientId]
	);

	// update icon for all child blocks
	const handleChangeIcon = (data) => {
		setAttributes({
			general_icon: data,
			style_Icon: {
				...style_Icon,
				dimensions: {
					...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
					margin: {
						Desktop: {
							...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
						},
					},
				},
			},
		});
		// Update icon for all child blocks
		innerBlockClientIds.forEach((childId) => {
			updateBlockAttributes(childId, { general_icon: data });
		});
	};

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_layout,
			general_preset,
			style_title,
			style_desination,
			style_description,
			style_Icon,
			style_separator,
			style_dimension,
			general_icon,
			general_separator,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_preset,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_separator,
		style_dimension,
		general_icon,
		general_separator,
		advance_motionEffect,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				<div {...innerBlocksProps} />
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
