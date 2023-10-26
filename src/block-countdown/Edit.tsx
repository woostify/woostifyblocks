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
import WcbCountdownPanelLayout, {
	WCB_COUNTDOWN_PANEL_LAYOUT_DEMO,
	WCB_COUNTDOWN_PANEL_LAYOUT_PRESET_CENTER_DEMO,
	WCB_COUNTDOWN_PANEL_LAYOUT_PRESET_LEFT_DEMO,
} from "./WcbCountdownPanelLayout";
import WcbCountdownPanelIcon from "./WcbCountdownPanelIcon";
import WcbCountdownPanelDate from "./WcbCountdownPanelDate";
import WcbCountdownPanel_StyleIcons from "./WcbCountdownPanel_StyleIcons";
import WcbCountdownPanel_StyleTitle from "./WcbCountdownPanel_StyleTitle";
import WcbCountdownPanel_StyleDescription from "./WcbCountdownPanel_StyleDescription";
import WcbCountdownPanel_StyleDimension from "./WcbCountdownPanel_StyleDimension";
import WcbCountdownPanelPreset from "./WcbCountdownPanelPreset";
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
		general_icon,
		general_date,
		day_label,
		hrs_label,
		min_label,
		sec_label,
		style_label,
		title,
		style_Icon,
		style_description,
		style_dimension,
		general_preset,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS
	// const { myCache, ref } = useCreateCacheEmotion("countdown");
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
			'block_id'            : UNIQUE_ID,
			'endDateTime'       : cd_date[0],
			'showDays'         : true,
			'showHours'       : true,
			'showMinutes' : true, 
			'isFrontend' : true, 
			'timerEndAction' : cd_date[1],
			'redirectURL' : ''
		}
		console.log(data);
		WCBCountdown.init('.wcb-countdown__content', data);

	}, [UNIQUE_ID, attributes]);
	//
	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbCountdownPanelPreset
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
										general_layout: WCB_COUNTDOWN_PANEL_LAYOUT_DEMO,
									});
								}
								setAttributes({
									general_preset: data,
									general_layout:
										data.preset === "preset-center"
											? WCB_COUNTDOWN_PANEL_LAYOUT_PRESET_CENTER_DEMO
											: WCB_COUNTDOWN_PANEL_LAYOUT_PRESET_LEFT_DEMO,
								});
							}}
							panelData={general_preset}
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
						<WcbCountdownPanelDate
							onToggle={() => handleTogglePanel("General", "Timer End Date & Time")}
							initialOpen={tabGeneralIsPanelOpen === "Timer End Date & Time"}
							opened={tabGeneralIsPanelOpen === "Timer End Date & Time" || undefined}
							//
							setAttr__={(data) => {
								return setAttributes({
									general_date: data
								});
							}}
							panelData={general_date}
						/>
						<WcbCountdownPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							//
							setAttr__={(data) => {
								if (
									data.iconPosition === "leftOfTitle" ||
									data.iconPosition === "left"
								) {
									return setAttributes({
										general_icon: data,
										general_layout: {
											...general_layout,
											textAlignment: {
												Desktop: "left",
												Tablet: "left",
												Mobile: "left",
											},
										}
									});
								}
								if (
									data.iconPosition === "rightOfTitle" ||
									data.iconPosition === "right"
								) {
									return setAttributes({
										general_icon: data,
										general_layout: {
											...general_layout,
											textAlignment: {
												Desktop: "right",
												Tablet: "right",
												Mobile: "right",
											},
										}
									});
								}

								return setAttributes({
									general_icon: data
								});
							}}
							panelData={general_icon}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						{general_icon.enableIcon && (
							<WcbCountdownPanel_StyleIcons
								onToggle={() => handleTogglePanel("Styles", "_StyleIcons")}
								initialOpen={tabStylesIsPanelOpen === "_StyleIcons"}
								opened={tabStylesIsPanelOpen === "_StyleIcons" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_Icon: data });
								}}
								panelData={style_Icon}
							/>
						)}

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
						<WcbCountdownPanel_StyleDescription
							onToggle={() => handleTogglePanel("Styles", "_StyleDescription")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDescription"}
							opened={tabStylesIsPanelOpen === "_StyleDescription" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_description: data });
							}}
							panelData={style_description}
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
			general_date,
			general_icon,
			style_description,
			style_dimension,
			style_Icon,
			style_label,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		general_icon,
		style_description,
		style_dimension,
		style_label,
		style_Icon,
		advance_motionEffect,
	]);

	// console.log(4, "---- COUNTDOWN edit  ---" + uniqueId);
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
				<div className="wcb-countdown__inner">
					<div className="wcb-countdown__content flex items-center">
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-day"></div>
							{general_date.enableLabel && (
								<RichText
									tagName={'span'}
									value={day_label}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ day_label: content })}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-hrs"></div>
							{general_date.enableLabel && (
								<RichText
									tagName={'span'}
									value={hrs_label}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ hrs_label: content })}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-mins"></div>
							{general_date.enableLabel && (
								<RichText
									tagName={'span'}
									value={min_label}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ min_label: content })}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-secs"></div>
							{general_date.enableLabel && (
								<RichText
									tagName={'span'}
									value={sec_label}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ sec_label: content })}
									className="wcb-countdown__label"
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
