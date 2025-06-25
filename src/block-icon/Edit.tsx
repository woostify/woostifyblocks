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
import WcbIconPanel_StyleIcon from "./WcbIconPanel_StyleIcon";
import WcbIconPanelPreset from "./WcbIconPanelPreset";
import WcbButtonPanel_StyleBorder, {
	WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_1,
	WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_2,
	WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_3,
	WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_4,
	WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_5,
} from "./WcbButtonPanel_StyleBorder";
import WcbButtonPanel_StyleBackground, {
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_PRESET_1,
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_PRESET_3,
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_WHITE,
} from "./WcbButtonPanel_StyleBackground";
import WcbButtonPanel_StyleBoxshadow from "./WcbButtonPanel_StyleBoxshadow";
import { WcbAttrsForSave } from "./Save";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	if (props.attributes.cover) {
		return (
			<div
				className="flex justify-center items-center"
				style={{ width: "100%", height: "100%" }}
			>
				<div
					className="svg-container"
					style={{
						width: "400px",
						height: "300px",
					}}
					dangerouslySetInnerHTML={{ __html: props.attributes.cover }}
				></div>
			</div>
		);
	}
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
											? WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_1
											: preset === "wcb-icon-2"
											? WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_2
											: preset === "wcb-icon-3"
											? WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_3
											: preset === "wcb-icon-4"
											? WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_4
											: WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_5,
									style_background:
										preset === "wcb-icon-1"
										? WCB_BUTTON_PANEL_STYLE_BACKGROUND_PRESET_1
										: preset === "wcb-icon-3"
										? WCB_BUTTON_PANEL_STYLE_BACKGROUND_PRESET_3
										: WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_WHITE,
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
								setAttributes({ style_icon: data });
							}}
							panelData={style_icon}
						/>

						<WcbButtonPanel_StyleBackground
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

						<WcbButtonPanel_StyleBorder
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

						<WcbButtonPanel_StyleBoxshadow
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

				{/* CHILD CONTENT  */}

			</div>
		</MyCacheProvider>
	);
};

export default Edit;
