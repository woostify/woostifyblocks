import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbButtonPanelPreset from "./WcbButtonPanelPreset";
import WcbButtonPanelContent, {
	WCB_BUTTON_PANEL_CONTENT_DEMO_CIRCULAR,
	WCB_BUTTON_PANEL_CONTENT_DEMO_COMMON_NO_ICON,
	WCB_BUTTON_PANEL_CONTENT_DEMO_with_leading_icon,
	WCB_BUTTON_PANEL_CONTENT_DEMO_with_trailing_icons,
} from "./WcbButtonPanelContent";
import WcbButtonPanel_StyleText, {
	WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_PRIMARY,
	WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_SECONDARY,
	WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_WHITE,
} from "./WcbButtonPanel_StyleText";
import WcbButtonPanel_StyleIcon, {
	WCB_BUTTON_PANEL_STYLE_ICON_DEMO,
} from "./WcbButtonPanel_StyleIcon";
import WcbButtonPanel_StyleBackground, {
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_PRIMARY,
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_SECONDARY,
	WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_WHITE,
} from "./WcbButtonPanel_StyleBackground";
import WcbButtonPanel_StyleBorder, {
	WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_PRIMARY,
	WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_ROUND,
	WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_SECONDARY,
	WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_WHITE,
} from "./WcbButtonPanel_StyleBorder";
import WcbButtonPanel_StyleBoxshadow from "./WcbButtonPanel_StyleBoxshadow";
import WcbButtonPanel_StyleDemension, {
	WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_CIRCULAR,
	WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_PRIMARY,
} from "./WcbButtonPanel_StyleDimension";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import Button from "./Button";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_preset,
		general_content,
		content,
		style_text,
		style_icon,
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
	} = attributes;
	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);

	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbButtonPanelPreset
							onToggle={() => handleTogglePanel("General", "Preset", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Preset" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Preset" || undefined}
							//
							setAttr__={(data) => {
								const { preset } = data;
								setAttributes({ general_preset: data });
								const enableIcon =
									preset === "with_leading_icon" ||
									preset === "with_trailing_icons" ||
									preset === "circular"
										? true
										: false;
								setAttributes({
									style_text:
										preset === "white"
											? WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_WHITE
											: preset === "secondary"
											? WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_SECONDARY
											: WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_PRIMARY,
									style_icon: WCB_BUTTON_PANEL_STYLE_ICON_DEMO,
									style_background:
										preset === "white"
											? WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_WHITE
											: preset === "secondary"
											? WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_SECONDARY
											: WCB_BUTTON_PANEL_STYLE_BACKGROUND_DEMO_PRIMARY,
									style_border:
										preset === "white"
											? WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_WHITE
											: preset === "secondary"
											? WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_SECONDARY
											: preset === "round" || preset === "circular"
											? WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_ROUND
											: WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_PRIMARY,
									// style_boxshadow: WCB_BUTTON_PANEL_STYLE_BOXSHADOW_DEMO,
									style_dimension:
										preset === "circular"
											? WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_CIRCULAR
											: WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_PRIMARY,
									general_content:
										preset === "circular"
											? WCB_BUTTON_PANEL_CONTENT_DEMO_CIRCULAR
											: preset === "with_leading_icon"
											? WCB_BUTTON_PANEL_CONTENT_DEMO_with_leading_icon
											: preset === "with_trailing_icons"
											? WCB_BUTTON_PANEL_CONTENT_DEMO_with_trailing_icons
											: WCB_BUTTON_PANEL_CONTENT_DEMO_COMMON_NO_ICON,
								});
							}}
							panelData={general_preset}
						/>

						<WcbButtonPanelContent
							onToggle={() => handleTogglePanel("General", "Content")}
							initialOpen={tabGeneralIsPanelOpen === "Content"}
							opened={tabGeneralIsPanelOpen === "Content" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									general_content: data,
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={general_content}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbButtonPanel_StyleText
							onToggle={() => handleTogglePanel("Styles", "_StyleText", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleText" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleText" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_text: data,
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={style_text}
						/>

						<WcbButtonPanel_StyleIcon
							onToggle={() => handleTogglePanel("Styles", "_StyleIcon")}
							initialOpen={tabStylesIsPanelOpen === "_StyleIcon"}
							opened={tabStylesIsPanelOpen === "_StyleIcon" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_icon: data,
									general_preset: { ...general_preset, preset: "" },
								});
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
									general_preset: { ...general_preset, preset: "" },
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
									general_preset: { ...general_preset, preset: "" },
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
									general_preset: { ...general_preset, preset: "" },
								});
							}}
							panelData={style_boxshadow}
						/>

						<WcbButtonPanel_StyleDemension
							onToggle={() => handleTogglePanel("Styles", "StyleDemension")}
							initialOpen={tabStylesIsPanelOpen === "StyleDemension"}
							opened={tabStylesIsPanelOpen === "StyleDemension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									style_dimension: data,
									general_preset: { ...general_preset, preset: "" },
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

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-button__wrap ${UNIQUE_ID} `}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>
				{/* CSS IN JS */}
				<GlobalCss {...attributes} />
				{/* CHILD CONTENT  */}
				<Button
					attributes={attributes}
					isEdit
					onChangeText={(content) => {
						setAttributes({ content });
					}}
				/>
			</div>
		</CacheProvider>
	);
};

export default Edit;
