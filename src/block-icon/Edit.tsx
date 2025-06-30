import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useRef } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbIconPanelIcon from "./WcbIconPanelIcon";
import WcbIconPanelPreset from "./WcbIconPanelPreset";
import MyIconFull from "../components/controls/MyIconFull";

import WcbIconPanel_StyleIcon, {
	WCB_ICON_PANEL_STYLE_ICON_DEMO,
	WCB_ICON_PANEL_STYLE_ICON_LIGHT_DEMO,
} from "./WcbIconPanel_StyleIcon";

import WcbIconPanel_StyleBorder, {
	WCB_ICON_PANEL_STYLE_BORDER_DEMO_ROUND,
	WCB_ICON_PANEL_STYLE_BORDER_DEMO_WHITE,
	WCB_ICON_PANEL_STYLE_BORDER_DEMO_SECONDARY,
	WCB_ICON_PANEL_STYLE_BORDER_DEMO_PRIMARY
} from "./WcbIconPanel_StyleBorder";
import WcbIconPanel_StyleBackground, {
	WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_1,
	WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_3,
	WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO_WHITE,
} from "./WcbIconPanel_StyleBackground";
import WcbIconPanel_StyleBoxshadow from "./WcbIconPanel_StyleBoxshadow";
import WcbIconPanel_StyleDimension from "./WcbIconPanel_StyleDimension";
import { WcbAttrsForSave } from "./Save";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_icon,
		style_icon,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		general_preset,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);
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

	}, [UNIQUE_ID, attributes]);
	//
	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbIconPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							//
							setAttr__={(data) => {
								return setAttributes({
									general_icon: data,
									general_preset: { ...general_preset, preset: "wcb-icon-1" },
								});
							}}
							panelData={general_icon}
						/>
						
						<WcbIconPanelPreset
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
								setAttributes({
									style_border:
										preset === "wcb-icon-1"
											? WCB_ICON_PANEL_STYLE_BORDER_DEMO_ROUND
											: preset === "wcb-icon-2"
											? WCB_ICON_PANEL_STYLE_BORDER_DEMO_WHITE
											: preset === "wcb-icon-3"
											? WCB_ICON_PANEL_STYLE_BORDER_DEMO_SECONDARY
											: preset === "wcb-icon-4"
											? WCB_ICON_PANEL_STYLE_BORDER_DEMO_PRIMARY
											: WCB_ICON_PANEL_STYLE_BORDER_DEMO_ROUND,
									style_background:
										preset === "wcb-icon-1"
										? WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_1
										: preset === "wcb-icon-3"
										? WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_3
										: WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO_WHITE,
									style_icon:
										preset === "wcb-icon-1" || preset === "wcb-icon-3"
											? WCB_ICON_PANEL_STYLE_ICON_DEMO
											: WCB_ICON_PANEL_STYLE_ICON_LIGHT_DEMO,
								});
							}}
							panelData={general_preset}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbIconPanel_StyleIcon
							onToggle={() => handleTogglePanel("Styles", "_StyleIcon", true)}
							initialOpen={tabStylesIsPanelOpen === "_StyleTitle"}
							opened={tabStylesIsPanelOpen === "_StyleIcon" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ 
									style_icon: data,
									general_preset: { ...general_preset, preset: "wcb-icon-1" },
								});
							}}
							panelData={style_icon}
						/>

						<WcbIconPanel_StyleBackground
							onToggle={() => handleTogglePanel("Styles", "_StyleBackground")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBackground"}
							opened={tabStylesIsPanelOpen === "_StyleBackground" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_background: data,
									general_preset: { ...general_preset, preset: "wcb-icon-1" },
								});
							}}
							panelData={style_background}
						/>

						<WcbIconPanel_StyleBorder
							onToggle={() => handleTogglePanel("Styles", "_StyleBorder")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBorder"}
							opened={tabStylesIsPanelOpen === "_StyleBorder" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_border: data,
									general_preset: { ...general_preset, preset: "wcb-icon-1" },
								});
							}}
							panelData={style_border}
						/>

						<WcbIconPanel_StyleBoxshadow
							onToggle={() => handleTogglePanel("Styles", "_StyleBoxshadow")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBoxshadow"}
							opened={tabStylesIsPanelOpen === "_StyleBoxshadow" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_boxshadow: data,
									general_preset: { ...general_preset, preset: "wcb-icon-1" },
								});
							}}
							panelData={style_boxshadow}
						/>

						<WcbIconPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ 
									style_dimension: data,
									general_preset: { ...general_preset, preset: "wcb-icon-1" },
								});
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_icon,
			general_preset,
			style_background,
			style_icon,
			style_border,
			style_boxshadow,
			style_dimension,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_icon,
		general_preset,
		style_background,
		style_icon,
		style_border,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-icon__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* ICON CONTENT  */}
				<div className="wcb-icon__content">
					<MyIconFull icon={general_icon.icon} />
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
