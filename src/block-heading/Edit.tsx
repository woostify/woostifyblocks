import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { WcbBlockHeadingAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import MyResponsiveConditionControl from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import MyZIndexControl from "../components/controls/MyZIndexControl/MyZIndexControl";
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
	} = attributes;

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
						/>
						<WcbHeadingPanelSeparator
							panelSeparator={styles_separator}
							setAttr__panelSeparator={(styles_separator) => {
								setAttributes({ styles_separator });
							}}
						/>
						<WcbHeadingPanelSubHeading
							panelData={styles_subHeading}
							setAttr__={(styles_subHeading) => {
								setAttributes({ styles_subHeading });
							}}
						/>
						<WcbHeadingPanelLink
							panelData={styles_link}
							setAttr__={(styles_link) => {
								setAttributes({ styles_link });
							}}
						/>
						<WcbHeadingPanelHighlight
							panelData={styles_highlight}
							setAttr__={(styles_highlight) => {
								setAttributes({ styles_highlight });
							}}
						/>
						<WcbHeadingPanelBackground
							panelData={styles_background}
							setAttr__={(styles_background) => {
								setAttributes({ styles_background });
							}}
						/>
						<WcbHeadingPanelDimension
							panelData={styles_dimensions}
							setAttr__={(styles_dimensions) => {
								setAttributes({ styles_dimensions });
							}}
						/>
					</>
				);
			case "Advances":
				return (
					<>
						<PanelBody
							initialOpen={false}
							title={__("Responsive Conditions", "wcb")}
						>
							<MyResponsiveConditionControl
								responsiveConditionControl={
									attributes.advance_responsiveCondition
								}
								setAttrs__responsiveCondition={(data) =>
									setAttributes({ advance_responsiveCondition: data })
								}
							/>
						</PanelBody>
						<PanelBody initialOpen={false} title={__("Z-Index", "wcb")}>
							<MyZIndexControl
								zIndexControl={attributes.advance_zIndex}
								setAttrs__zIndex={(data) =>
									setAttributes({ advance_zIndex: data })
								}
							/>
						</PanelBody>
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
				<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />

				{/*  */}
				<GlobalCss {...attributes} />
				<RichText
					identifier="heading"
					tagName="h2"
					className="wcb-heading__heading"
					value={heading}
					onChange={(heading) => setAttributes({ heading })}
				/>
				<div className="wcb-heading__separator"></div>
				<RichText
					identifier="subHeading"
					tagName="p"
					className="wcb-heading__subHeading"
					value={subHeading}
					onChange={(subHeading) => setAttributes({ subHeading })}
				/>
			</div>
		</CacheProvider>
	);
};

export default Edit;
