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
import WcbIconBoxPanelLayout from "./WcbIconListPanelLayout";
import WcbIconBoxPanelIcon from "./WcbIconListPanelIcon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbTeamPanel_StyleTitle from "./WcbIconListPanel_StyleTitle";
import WcbTeamPanel_StyleDesignation from "./WcbIconListPanel_StyleDesignation";
import WcbIconBoxPanel_StyleIcons from "./WcbIconListPanel_StyleIcons";
import MyIconFull from "../components/controls/MyIconFull";
import WcbIconBoxPanel_StyleSeparator from "./WcbIconListPanel_StyleSeparator";
import WcbIconBoxPanel_StyleDimension from "./WcbIconListPanel_StyleDimension";
import { MY_DIMENSIONS_NO_GAP_DEMO__EMPTY } from "../components/controls/MyDimensionsControl/types";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		heading_1,
		heading_2,
		heading_3,
		uniqueId,
		general_layout,
		general_icon,
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
							setAttr__={(data) => {
								return setAttributes({
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
							}}
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
							}}
							panelData={general_layout}
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_layout,
			heading_1,
			heading_2,
			heading_3,
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
		heading_1,
		heading_2,
		heading_3,
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

	const renderIcon = () => {
		return (
			<div className="wcb-icon-list__icon-wrap">
				<div className="wcb-icon-list__icon">
					<MyIconFull icon={general_icon.icon} />
				</div>
			</div>
		);
	};


	const HeadingTag = general_layout.headingTag;
	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-icon-list__wrap ${uniqueId}`}
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
				<div className="wcb-icon-list__content">
					<div className="wcb-icon-list__content-title-wrap">
						{general_icon.iconPosition === "leftOfTitle" && renderIcon()}
						<div className="wcb-icon-list__content-title">
							{general_layout.enableTitle && (
								<RichText
									tagName={HeadingTag}
									value={heading_1}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ heading_1: content })}
									placeholder={__("Heading of box")}
									className="wcb-icon-box__heading"
								/>
							)}
						</div>
						{(general_icon.iconPosition === "rightOfTitle") &&
							renderIcon()}
					</div>

					<div className="wcb-icon-list__content-title-wrap">
						{general_icon.iconPosition === "leftOfTitle" && renderIcon()}
						<div className="wcb-icon-list__content-title">
							{general_layout.enableTitle && (
								<RichText
									tagName={HeadingTag}
									value={heading_2}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ heading_2: content })}
									placeholder={__("Heading of box")}
									className="wcb-icon-box__heading"
								/>
							)}
						</div>
						{(general_icon.iconPosition === "rightOfTitle") &&
							renderIcon()}
					</div>

					<div className="wcb-icon-list__content-title-wrap">
						{general_icon.iconPosition === "leftOfTitle" && renderIcon()}
						<div className="wcb-icon-list__content-title">

							{general_layout.enableTitle && (
								<RichText
									tagName={HeadingTag}
									value={heading_3}
									allowedFormats={["core/bold", "core/italic"]}
									onChange={(content) => setAttributes({ heading_3: content })}
									placeholder={__("Heading of box")}
									className="wcb-icon-box__heading"
								/>
							)}
						</div>
						{(general_icon.iconPosition === "rightOfTitle") &&
							renderIcon()}
					</div>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
