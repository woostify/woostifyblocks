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
import MyIcon from "../components/controls/MyIcon";
import MyIconFull from "../components/controls/MyIconFull";
import WcbIconBoxPanel_StyleSeparator from "./WcbIconBoxPanel_StyleSeparator";
import WcbIconBoxPanel_StyleDimension from "./WcbIconBoxPanel_StyleDimension";
import WcbIconBoxPanelSeparator from "./WcbIconBoxPanelSeparator";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		heading,
		description,
		designation,
		uniqueId,
		general_layout,
		general_icon,
		style_title,
		style_desination,
		style_description,
		style_socialIcons,
		style_separator,
		style_dimension,
		general_separator,
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
								setAttributes({ general_icon: data });
							}}
							panelData={general_icon}
						/>
						<WcbIconBoxPanelSeparator
							onToggle={() => handleTogglePanel("General", "Separator")}
							initialOpen={tabGeneralIsPanelOpen === "Separator"}
							opened={tabGeneralIsPanelOpen === "Separator" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_separator: data });
							}}
							panelData={general_separator}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbTeamPanel_StyleTitle
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
						<WcbIconBoxPanel_StyleIcons
							onToggle={() => handleTogglePanel("Styles", "_StyleIcons")}
							initialOpen={tabStylesIsPanelOpen === "_StyleIcons"}
							opened={tabStylesIsPanelOpen === "_StyleIcons" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_socialIcons: data });
							}}
							panelData={style_socialIcons}
						/>
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
						<WcbTeamPanel_StyleDesignation
							onToggle={() => handleTogglePanel("Styles", "_StyleDesignation")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDesignation"}
							opened={tabStylesIsPanelOpen === "_StyleDesignation" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_desination: data });
							}}
							panelData={style_desination}
						/>
						<WcbTeamPanel_StyleDescription
							onToggle={() => handleTogglePanel("Styles", "_StyleDescription")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDescription"}
							opened={tabStylesIsPanelOpen === "_StyleDescription" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_description: data });
							}}
							panelData={style_description}
						/>

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
			style_socialIcons,
			style_separator,
			style_dimension,
			general_icon,
			general_separator,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		style_title,
		style_desination,
		style_description,
		style_socialIcons,
		style_separator,
		style_dimension,
		general_icon,
		general_separator,
	]);

	const renderIcon = () => {
		return general_icon.enableIcon ? (
			<MyIconFull icon={general_icon.icon} />
		) : null;
	};

	const HeadingTag = general_layout.headingTag;

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-icon-box__wrap ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{(general_icon.iconPosition === "left" ||
					general_icon.iconPosition === "top") &&
					renderIcon()}

				{/* CHILD CONTENT  */}
				<div className="wcb-icon-box__content">
					<RichText
						tagName="div"
						value={designation}
						allowedFormats={[]}
						onChange={(content) => setAttributes({ designation: content })}
						placeholder={__("Designation...")}
						className="wcb-icon-box__designation"
					/>
					<RichText
						tagName={HeadingTag}
						value={heading}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(content) => setAttributes({ heading: content })}
						placeholder={__("Heading...")}
						className="wcb-icon-box__heading"
					/>
					<div className="wcb-icon-box__separator"></div>
					<RichText
						tagName="div"
						value={description}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(content) => setAttributes({ description: content })}
						placeholder={__("Description...")}
						className="wcb-icon-box__description"
					/>

					<InnerBlocks allowedBlocks={[]} template={[["wcb/button", {}]]} />
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
