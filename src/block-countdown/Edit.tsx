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
import WcbCountdownPanelLayout from "./WcbCountdownPanelLayout";
import WcbCountdownPanelDate from "./WcbCountdownPanelDate";
import WcbCountdownPanel_StyleTitle from "./WcbCountdownPanel_StyleTitle";
import WcbCountdownPanel_StyleNumber from "./WcbCountdownPanel_StyleNumber";
import WcbCountdownPanel_StyleDimension from "./WcbCountdownPanel_StyleDimension";
import WcbCountdownPanelPreset from "./WcbCountdownPanelPreset";
import { WcbAttrsForSave } from "./Save";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import '../../public/js/countdown/wcb-countdown.js';

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		daylabel,
		hrslabel,
		minlabel,
		seclabel,
		general_date,
		uniqueId,
		general_layout,
		style_label,
		style_number,
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

		var cd_date = general_date.date.split("T");
		const data = {
			'block_id': UNIQUE_ID,
			'endDateTime': cd_date[0],
			'showDays': true,
			'showHours': true,
			'showMinutes': true,
			'isFrontend': true,
			'timerEndAction': cd_date[1],
			'redirectURL': ''
		}
		WCBCountdown.init(`#${UNIQUE_ID} .wcb-countdown__content`, data);

	}, [UNIQUE_ID, attributes]);
	//
	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbCountdownPanelDate
							onToggle={() => handleTogglePanel("General", "Timer End Date & Time", true)}
							initialOpen={tabGeneralIsPanelOpen === "Timer End Date & Time" ||
								tabGeneralIsPanelOpen === "first"}
							opened={tabGeneralIsPanelOpen === "Timer End Date & Time" || undefined}
							//
							setAttr__={(data) => {
								return setAttributes({
									general_date: data
								});
							}}
							panelData={general_date}
						/>
						<WcbCountdownPanelLayout
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
						<WcbCountdownPanelPreset
							onToggle={() => handleTogglePanel("General", "Preset")}
							initialOpen={
								tabGeneralIsPanelOpen === "Preset"
							}
							opened={tabGeneralIsPanelOpen === "Preset" || undefined}
							//
							setAttr__={(data) => {
								if (!data.preset) {
									return setAttributes({
										general_preset: data,
									});
								}
								setAttributes({
									general_preset: data,
								});
							}}
							panelData={general_preset}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbCountdownPanel_StyleTitle
							onToggle={() => handleTogglePanel("Styles", "_StyleTitle", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleTitle" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_label: data });
							}}
							panelData={style_label}
						/>
						<WcbCountdownPanel_StyleNumber
							onToggle={() => handleTogglePanel("Styles", "_StyleNumber", true)}
							initialOpen={tabStylesIsPanelOpen === "_StyleTitle"}
							opened={tabStylesIsPanelOpen === "_StyleNumber" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_number: data });
							}}
							panelData={style_number}
						/>
						<WcbCountdownPanel_StyleDimension
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
			general_preset,
			general_date,
			style_dimension,
			style_label,
			style_number,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_preset,
		general_date,
		style_dimension,
		style_label,
		style_number,
		advance_motionEffect,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-countdown__wrap ${uniqueId}`}
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
		
				<div className={`wcb-countdown__content ${general_preset.preset}`}>
						<div className="wcb-countdown__box">
							<div className="wcb-countdown__number wcb-countdown-day"></div>
							<RichText
								tagName="div"
								value={daylabel}
								allowedFormats={[]}
								onChange={(content) => setAttributes({ daylabel: content })}
								className="wcb-countdown__label wcb-countdown__daylabel"
							/>
							</div>
						<div className="wcb-countdown__box">
							<div className="wcb-countdown__number wcb-countdown-hrs"></div>
							<RichText
								tagName="div"
								value={hrslabel}
								allowedFormats={[]}
								onChange={(content) => setAttributes({ hrslabel: content })}
								className="wcb-countdown__label wcb-countdown__hrslabel"
							/>
							</div><div className="wcb-countdown__box">
							<div className="wcb-countdown__number wcb-countdown-mins"></div>
							<RichText
								tagName="div"
								value={minlabel}
								allowedFormats={[]}
								onChange={(content) => setAttributes({ minlabel: content })}
								className="wcb-countdown__label wcb-countdown__minlabel"
							/>
							</div>
							<div className="wcb-countdown__box">
								<div className="wcb-countdown__number wcb-countdown-secs"></div>
								<RichText
									tagName="div"
									value={seclabel}
									allowedFormats={[]}
									onChange={(content) => setAttributes({ seclabel: content })}
									className="wcb-countdown__label wcb-countdown__seclabel"
								/>
							</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
