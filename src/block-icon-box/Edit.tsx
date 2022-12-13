import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
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
import WcbTeamPanelLayout from "./WcbTeamPanelLayout";
import WcbTeamPanelImages from "./WcbTeamPanelImages";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbTeamPanel_StyleTitle from "./WcbTeamPanel_StyleTitle";
import WcbTeamPanel_StyleDesignation from "./WcbTeamPanel_StyleDesignation";
import WcbTeamPanel_StyleDescription from "./WcbTeamPanel_StyleDescription";
import WcbTeamPanel_StyleSocialIcons from "./WcbTeamPanel_StyleSocialIcons";
import MyIcon from "../components/controls/MyIcon";
import WcbTeamPanel_StyleImage from "./WcbTeamPanel_StyleImage";
import MyIconFull from "../components/controls/MyIconFull";

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
		general_image,
		style_title,
		style_desination,
		style_description,
		style_socialIcons,
		style_image,
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
						<WcbTeamPanelLayout
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

						<WcbTeamPanelImages
							onToggle={() => handleTogglePanel("General", "Images")}
							initialOpen={tabGeneralIsPanelOpen === "Images"}
							opened={tabGeneralIsPanelOpen === "Images" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_image: data });
							}}
							panelData={general_image}
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
						{general_image.isShowImage && (
							<WcbTeamPanel_StyleImage
								onToggle={() => handleTogglePanel("Styles", "_StyleImage")}
								initialOpen={tabStylesIsPanelOpen === "_StyleImage"}
								opened={tabStylesIsPanelOpen === "_StyleImage" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_image: data });
								}}
								panelData={style_image}
							/>
						)}
						<WcbTeamPanel_StyleSocialIcons
							onToggle={() => handleTogglePanel("Styles", "_StyleSocialIcons")}
							initialOpen={tabStylesIsPanelOpen === "_StyleSocialIcons"}
							opened={tabStylesIsPanelOpen === "_StyleSocialIcons" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_socialIcons: data });
							}}
							panelData={style_socialIcons}
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
			general_image,
			general_layout,
			style_title,
			style_desination,
			style_description,
			style_socialIcons,
			style_image,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_image,
		general_layout,
		style_title,
		style_desination,
		style_description,
		style_socialIcons,
		style_image,
	]);

	const renderImage = () => {
		return general_image.isShowImage && general_image?.image?.mediaId ? (
			<img
				className="wcb-icon-box__image"
				src={general_image.image.mediaUrl}
				alt=""
			/>
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

				{(general_image.imagePosition === "left" ||
					general_image.imagePosition === "top") &&
					renderImage()}
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
				</div>

				{(general_image.imagePosition === "right" ||
					general_image.imagePosition === "bottom") &&
					renderImage()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
