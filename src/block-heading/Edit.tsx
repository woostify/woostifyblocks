import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useRef, useCallback } from "react";
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
import GlobalCss from "./GlobalCss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbHeadingPanel_StyleBorder from "./WcbHeadingPanel_StyleBorder";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbBlockHeadingAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const ref = useRef<HTMLDivElement>(null);
	// const { myCache, ref } = useCreateCacheEmotion();

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
		styles_border,
		//
		general_content,
		advance_responsiveCondition,
		advance_zIndex,
		advance_motionEffect,
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
						{general_content.showSeparator && (
							<WcbHeadingPanelSeparator
								panelSeparator={styles_separator}
								setAttr__panelSeparator={(styles_separator) => {
									setAttributes({ styles_separator });
								}}
								onToggle={() => handleTogglePanel("Styles", "Separator")}
								initialOpen={tabStylesIsPanelOpen === "Separator"}
								opened={tabStylesIsPanelOpen === "Separator" || undefined}
							/>
						)}
						{general_content.showSubHeading && (
							<WcbHeadingPanelSubHeading
								panelData={styles_subHeading}
								setAttr__={(styles_subHeading) => {
									setAttributes({ styles_subHeading });
								}}
								onToggle={() => handleTogglePanel("Styles", "SubHeading")}
								initialOpen={tabStylesIsPanelOpen === "SubHeading"}
								opened={tabStylesIsPanelOpen === "SubHeading" || undefined}
							/>
						)}
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
						<WcbHeadingPanel_StyleBorder
							panelData={styles_border}
							setAttr__={(data) => {
								setAttributes({ styles_border: data });
							}}
							onToggle={() => handleTogglePanel("Styles", "_StyleBorder")}
							initialOpen={tabStylesIsPanelOpen === "_StyleBorder"}
							opened={tabStylesIsPanelOpen === "_StyleBorder" || undefined}
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
			advance_responsiveCondition,
			advance_zIndex,
			general_content,
			styles_background,
			styles_dimensions,
			styles_heading,
			styles_highlight,
			styles_link,
			styles_separator,
			styles_subHeading,
			uniqueId,
			styles_border,
			advance_motionEffect,
		};
	}, [
		advance_responsiveCondition,
		advance_zIndex,
		general_content,
		styles_background,
		styles_dimensions,
		styles_heading,
		styles_highlight,
		styles_link,
		styles_separator,
		styles_subHeading,
		uniqueId,
		styles_border,
		advance_motionEffect,
	]);

	const renderSeparator = () => {
		return general_content.showSeparator ? (
			<div className="wcb-heading__separator-wrap">
				<div className="wcb-heading__separator"></div>
			</div>
		) : null;
	};

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-heading__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				<HOCInspectorControls
					uniqueId={uniqueId}
					tabDefaultActive={tabIsOpen}
					renderTabPanels={renderTabBodyPanels}
				/>

				{/*  */}
				<GlobalCss {...WcbAttrsForSave()} />

				{general_content.separatorPosition === "top" && renderSeparator()}

				{general_content.showHeading ? (
					<RichText
						identifier="heading"
						tagName={general_content.headingTag || "h2"}
						className="wcb-heading__heading"
						value={heading}
						placeholder="Add heading"
						onChange={(heading) => setAttributes({ heading })}
					/>
				) : null}

				{general_content.separatorPosition === "middle" && renderSeparator()}

				{general_content.showSubHeading ? (
					<RichText
						identifier="subHeading"
						tagName="p"
						className="wcb-heading__subHeading"
						value={subHeading}
						onChange={(subHeading) => setAttributes({ subHeading })}
						placeholder="Add sub heading"
					/>
				) : null}

				{general_content.separatorPosition === "bottom" && renderSeparator()}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
