import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
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
import WcbIconBoxPanelLayout from "./WcbIconBoxPanelLayout";
import WcbIconBoxPanelIcon from "./WcbIconBoxPanelIcon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbTeamPanel_StyleTitle from "./WcbTeamPanel_StyleTitle";
import WcbTeamPanel_StyleDesignation from "./WcbTeamPanel_StyleDesignation";
import WcbTeamPanel_StyleDescription from "./WcbTeamPanel_StyleDescription";
import WcbIconBoxPanel_StyleIcons from "./WcbIconBoxPanel_StyleIcons";
import MyIconFull from "../components/controls/MyIconFull";
import WcbIconBoxPanel_StyleDimension from "./WcbIconBoxPanel_StyleDimension";
import { MY_DIMENSIONS_NO_GAP_DEMO__EMPTY } from "../components/controls/MyDimensionsControl/types";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		endNumber,
		description,
		designation,
		uniqueId,
		general_layout,
		general_icon,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_dimension,
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
						<WcbIconBoxPanelLayout
							onToggle={() => handleTogglePanel("General", "Layout", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Layout" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Layout" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_layout: data });
							}}
							panelData={general_layout}
						/>

						<WcbIconBoxPanelIcon
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
										},
										style_Icon: {
											...style_Icon,
											dimensions: {
												...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
												margin: {
													Desktop: {
														...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
														right: "1rem",
													},
												},
											},
										},
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
										},
										style_Icon: {
											...style_Icon,
											dimensions: {
												...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
												margin: {
													Desktop: {
														...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
														left: "1rem",
													},
												},
											},
										},
									});
								}

								return setAttributes({
									general_icon: data,
									style_Icon: {
										...style_Icon,
										dimensions: {
											...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY,
											margin: {
												Desktop: {
													...MY_DIMENSIONS_NO_GAP_DEMO__EMPTY.margin.Desktop,
													top: "1rem",
													bottom: "1rem",
												},
											},
										},
									},
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
							<WcbIconBoxPanel_StyleIcons
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
								}}
								panelData={style_title}
							/>
						)}

						{general_layout.enableDescription && (
							<WcbTeamPanel_StyleDescription
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleDescription")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleDescription"}
								opened={
									tabStylesIsPanelOpen === "_StyleDescription" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_description: data });
								}}
								panelData={style_description}
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_layout,
			style_title,
			style_desination,
			style_description,
			style_Icon,
			style_dimension,
			general_icon,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_title,
		style_desination,
		style_description,
		style_Icon,
		style_dimension,
		general_icon,
		advance_motionEffect,
	]);

	const renderIcon = () => {
		return (
			<>
				{general_icon.enableIcon && (
					<div className="wcb-icon-box__icon-wrap">
						<div className="wcb-icon-box__icon">
							<MyIconFull icon={general_icon.icon} />
						</div>
					</div>
				)}
			</>
		);
	};

	const HeadingTag = general_layout.headingTag;

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-icon-box__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{(general_icon.iconPosition === "top" ||
					general_icon.iconPosition === "left") &&
					renderIcon()}

				{/* CHILD CONTENT  */}
				<div className="wcb-icon-box__content">
					<div className="wcb-icon-box__content-title-wrap">
						{general_icon.iconPosition === "leftOfTitle" && renderIcon()}
						<div className="wcb-icon-box__content-title">
							{general_layout.enablePrefix && (
								<RichText
									tagName="div"
									value={designation}
									allowedFormats={[]}
									onChange={(content) =>
										setAttributes({ designation: content })
									}
									placeholder={__("Write a Prefix")}
									className="wcb-icon-box__designation"
								/>
							)}

							{general_layout.enableTitle && (
								<div className="wcb-icon-box__number">
									<span>
										{ general_layout.numberPrefix }
									</span>
									{ general_layout.endNumber }
									<span>
										{ general_layout.numberSuffix}
									</span>
								</div>
							)}
						</div>
						{(general_icon.iconPosition === "rightOfTitle" ||
							general_icon.iconPosition === "bellowTitle") &&
							renderIcon()}
					</div>

					{general_layout.enableDescription && (
						<RichText
							tagName="div"
							value={description}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(content) => setAttributes({ description: content })}
							placeholder={__("Description of box ...")}
							className="wcb-icon-box__description"
						/>
					)}

					{general_layout.enableCTAButton && (
						<InnerBlocks allowedBlocks={[]} template={[["wcb/button", {}]]} />
					)}
				</div>

				{general_icon.iconPosition === "right" && renderIcon()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
