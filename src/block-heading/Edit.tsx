import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbBlockHeadingAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import WcbHeadingPanelContent from "./WcbHeadingPanelContent";
import WcbHeadingPanelHighlight from "./WcbHeadingPanelHighlight";
import WcbHeadingPanelHeading from "./WcbHeadingPanelHeading";
import WcbHeadingPanelSeparator from "./WcbHeadingPanelSeparator";
import WcbHeadingPanelSubHeading from "./WcbHeadingPanelSubHeading";
import WcbHeadingPanelLink from "./WcbHeadingPanelLink";
import WcbHeadingPanelBackground from "./WcbHeadingPanelBackground";
import WcbHeadingPanelDimension from "./WcbHeadingPanelDimension";
import "./editor.scss";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";

const Edit: FC<EditProps<WcbBlockHeadingAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { myCache, ref } = useCreateCacheEmotion();

	const {
		uniqueId,
		heading,
		subHeading,
		//
		styles_heading,
		styles_separator,
		styles_subHeading,
		styles_link,
		styles_highlight,
		styles_background,
		styles_dimensions,
		//
		general_content,
	} = attributes;

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	//
	const wrapBlockProps = useBlockProps({ ref });
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
					<WcbHeadingPanelContent
						panelContentData={attributes.general_content}
						setAttr__panelContentData={(general_content) => {
							setAttributes({ general_content });
						}}
						onToggle={() => handleTogglePanel("Styles", "Content", true)}
						initialOpen={
							tabGeneralIsPanelOpen === "Content" ||
							tabGeneralIsPanelOpen === "first"
						}
						opened={tabGeneralIsPanelOpen === "Content" || undefined}
					/>
				);
			case "Styles":
				return (
					<>
						<WcbHeadingPanelHeading
							panelHeading={styles_heading}
							setAttr__panelHeading={(styles_heading) => {
								setAttributes({ styles_heading });
							}}
							onToggle={() => handleTogglePanel("Styles", "Heading", true)}
							initialOpen={
								tabStylesIsPanelOpen === "Heading" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "Heading" || undefined}
						/>
						<WcbHeadingPanelSeparator
							panelSeparator={styles_separator}
							setAttr__panelSeparator={(styles_separator) => {
								setAttributes({ styles_separator });
							}}
							onToggle={() => handleTogglePanel("Styles", "Separator")}
							initialOpen={tabStylesIsPanelOpen === "Separator"}
							opened={tabStylesIsPanelOpen === "Separator" || undefined}
						/>
						<WcbHeadingPanelSubHeading
							panelData={styles_subHeading}
							setAttr__={(styles_subHeading) => {
								setAttributes({ styles_subHeading });
							}}
							onToggle={() => handleTogglePanel("Styles", "SubHeading")}
							initialOpen={tabStylesIsPanelOpen === "SubHeading"}
							opened={tabStylesIsPanelOpen === "SubHeading" || undefined}
						/>
						<WcbHeadingPanelLink
							panelData={styles_link}
							setAttr__={(styles_link) => {
								setAttributes({ styles_link });
							}}
							onToggle={() => handleTogglePanel("Styles", "Link")}
							initialOpen={tabStylesIsPanelOpen === "Link"}
							opened={tabStylesIsPanelOpen === "Link" || undefined}
						/>
						<WcbHeadingPanelHighlight
							panelData={styles_highlight}
							setAttr__={(styles_highlight) => {
								setAttributes({ styles_highlight });
							}}
							onToggle={() => handleTogglePanel("Styles", "Highlight")}
							initialOpen={tabStylesIsPanelOpen === "Highlight"}
							opened={tabStylesIsPanelOpen === "Highlight" || undefined}
						/>
						<WcbHeadingPanelBackground
							panelData={styles_background}
							setAttr__={(styles_background) => {
								setAttributes({ styles_background });
							}}
							onToggle={() => handleTogglePanel("Styles", "Background")}
							initialOpen={tabStylesIsPanelOpen === "Background"}
							opened={tabStylesIsPanelOpen === "Background" || undefined}
						/>
						<WcbHeadingPanelDimension
							panelData={styles_dimensions}
							setAttr__={(styles_dimensions) => {
								setAttributes({ styles_dimensions });
							}}
							onToggle={() => handleTogglePanel("Styles", "Dimension")}
							initialOpen={tabStylesIsPanelOpen === "Dimension"}
							opened={tabStylesIsPanelOpen === "Dimension" || undefined}
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
				className={`${wrapBlockProps?.className} wcb-heading__wrap ${UNIQUE_ID}`}
			>
				<HOCInspectorControls
					tabDefaultActive={tabIsOpen}
					renderTabPanels={renderTabBodyPanels}
				/>

				{/*  */}
				<GlobalCss {...attributes} />
				{general_content.showHeading ? (
					<RichText
						identifier="heading"
						tagName={general_content.headingTag || "h2"}
						className="wcb-heading__heading"
						value={heading}
						onChange={(heading) => setAttributes({ heading })}
					/>
				) : null}
				{general_content.showSeparator ? (
					<div className="wcb-heading__separator"></div>
				) : null}
				{general_content.showSubHeading ? (
					<RichText
						identifier="subHeading"
						tagName="p"
						className="wcb-heading__subHeading"
						value={subHeading}
						onChange={(subHeading) => setAttributes({ subHeading })}
					/>
				) : null}
			</div>
		</CacheProvider>
	);
};

export default Edit;
