import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
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
import WcbCtaPanelLayout, {
	WCB_CTA_PANEL_LAYOUT_DEMO,
	WCB_CTA_PANEL_LAYOUT_PRESET_CENTER_DEMO,
	WCB_CTA_PANEL_LAYOUT_PRESET_LEFT_DEMO,
} from "./WcbCtaPanelLayout";
import WcbCtaPanel_StyleTitle from "./WcbCtaPanel_StyleTitle";
import WcbCtaPanel_StyleDescription from "./WcbCtaPanel_StyleDescription";
import WcbCtaPanel_StyleDimension from "./WcbCtaPanel_StyleDimension";
import WcbCtaPanelPreset from "./WcbCtaPanelPreset";
import { WcbAttrsForSave } from "./Save";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_layout,
		description,
		style_title,
		title,
		style_description,
		style_dimension,
		general_preset,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS
	// const { myCache, ref } = useCreateCacheEmotion("cta");
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
	}, [UNIQUE_ID]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbCtaPanelPreset
							onToggle={() => handleTogglePanel("General", "Preset", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Preset" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Preset" || undefined}
							//
							setAttr__={(data) => {
								if (!data.preset) {
									return setAttributes({
										general_preset: data,
										general_layout: WCB_CTA_PANEL_LAYOUT_DEMO,
									});
								}
								setAttributes({
									general_preset: data,
									general_layout:
										data.preset === "preset-center"
											? WCB_CTA_PANEL_LAYOUT_PRESET_CENTER_DEMO
											: WCB_CTA_PANEL_LAYOUT_PRESET_LEFT_DEMO,
								});
							}}
							panelData={general_preset}
						/>

						<WcbCtaPanelLayout
							onToggle={() => handleTogglePanel("General", "Layout")}
							initialOpen={tabGeneralIsPanelOpen === "Layout"}
							opened={tabGeneralIsPanelOpen === "Layout" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({
									general_layout: data,
									general_preset: {
										preset: "",
									},
								});
							}}
							panelData={general_layout}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbCtaPanel_StyleTitle
							onToggle={() => handleTogglePanel("Styles", "_StyleTitle", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleTitle" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_title: data });
							}}
							panelData={style_title}
						/>
						<WcbCtaPanel_StyleDescription
							onToggle={() => handleTogglePanel("Styles", "_StyleDescription")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDescription"}
							opened={tabStylesIsPanelOpen === "_StyleDescription" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_description: data });
							}}
							panelData={style_description}
						/>
						<WcbCtaPanel_StyleDimension
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_layout,
			style_description,
			style_dimension,
			style_title,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_description,
		style_dimension,
		style_title,
		advance_motionEffect,
	]);

	// console.log(4, "---- CTA edit  ---" + uniqueId);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-cta__wrap ${uniqueId}`}
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
				<div className="wcb-cta__inner">
					<div className="wcb-cta__content">
						<RichText
							tagName={attributes.general_layout.headingTag || "h3"}
							value={attributes.title}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(content) => setAttributes({ title: content })}
							placeholder={__("Call to action")}
							className="wcb-cta__title"
						/>
						<RichText
							tagName="p"
							value={attributes.description}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(content) => setAttributes({ description: content })}
							placeholder={
								"Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..."
							}
							className="wcb-cta__description"
						/>
					</div>
					<div className="wcb-cta__buttons">
						<InnerBlocks
							allowedBlocks={[]}
							template={[["wcb/buttons", {}, [["wcb/button", {}]]]]}
						/>
					</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
