import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	// @ts-ignore
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { BlockWCBContainerBoxAttrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import "./editor.scss";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import MyDimensionsControl from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyFlexPropertiesControl from "../components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl";
import ContainerControl from "./ContainerControl";
import { EditProps } from "../block-container/Edit";
import { CacheProvider } from "@emotion/react";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import GlobalCss from "./GlobalCss";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";

const Edit: FC<EditProps<BlockWCBContainerBoxAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId, general_container, styles_background } = attributes;
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const { myCache, ref } = useCreateCacheEmotion();

	//
	useEffect(() => {
		setAttributes({
			uniqueId:
				"wcb-container-box-" + clientId.substring(2, 9).replace("-", ""),
		});
	}, []);
	//

	const renderPanelBackground = () => {
		return (
			<PanelBody
				onToggle={() => handleTogglePanel("Styles", "Background", true)}
				initialOpen={
					tabStylesIsPanelOpen === "Background" ||
					tabStylesIsPanelOpen === "first"
				}
				opened={tabStylesIsPanelOpen === "Background" || undefined}
				title={__("Background", "wcb")}
			>
				<MyBackgroundControl
					backgroundControl={attributes.styles_background}
					setAttrs__backgroundControl={(data) =>
						setAttributes({ styles_background: data })
					}
				/>
			</PanelBody>
		);
	};

	const renderPanelColor = () => {
		return (
			<PanelBody
				onToggle={() => handleTogglePanel("Styles", "Color")}
				initialOpen={tabStylesIsPanelOpen === "Color"}
				opened={tabStylesIsPanelOpen === "Color" || undefined}
				className=""
				title={__("Color", "wcb")}
			>
				<MyColorPicker
					onChange={(color) => setAttributes({ styles_color: color })}
					color={attributes.styles_color}
				/>
			</PanelBody>
		);
	};

	const renderPanelBorder = () => {
		return (
			<PanelBody
				onToggle={() => handleTogglePanel("Styles", "Border")}
				initialOpen={tabStylesIsPanelOpen === "Border"}
				opened={tabStylesIsPanelOpen === "Border" || undefined}
				title={__("Border", "wcb")}
			>
				<MyBorderControl
					borderControl={attributes.styles_border}
					setAttrs__border={(data) => setAttributes({ styles_border: data })}
				/>
			</PanelBody>
		);
	};

	const renderPanelBoxShadow = () => {
		return (
			<PanelBody
				onToggle={() => handleTogglePanel("Styles", "Box Shadow")}
				initialOpen={tabStylesIsPanelOpen === "Box Shadow"}
				opened={tabStylesIsPanelOpen === "Box Shadow" || undefined}
				title={__("Box Shadow", "wcb")}
			>
				<MyBoxShadowControl
					boxShadowControl={attributes.styles_boxShadow}
					setAttrs__boxShadow={(data) =>
						setAttributes({ styles_boxShadow: data })
					}
				/>
			</PanelBody>
		);
	};

	const renderPanelDimensions = () => {
		return (
			<PanelBody
				onToggle={() => handleTogglePanel("Styles", "Dimension")}
				initialOpen={tabStylesIsPanelOpen === "Dimension"}
				opened={tabStylesIsPanelOpen === "Dimension" || undefined}
				title={__("Dimension", "wcb")}
			>
				<MyDimensionsControl
					dimensionControl={attributes.styles_dimensions}
					setAttrs__dimensions={(data) =>
						setAttributes({ styles_dimensions: data })
					}
				/>
			</PanelBody>
		);
	};

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<PanelBody
							onToggle={() => handleTogglePanel("General", "Container", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Container" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Container" || undefined}
							title={__("Container", "wcb")}
						>
							<ContainerControl
								containerControl={attributes.general_container}
								setAttrs__container={(data) =>
									setAttributes({ general_container: data })
								}
							/>
						</PanelBody>
						<PanelBody
							onToggle={() => handleTogglePanel("General", "Flex Properties")}
							initialOpen={tabGeneralIsPanelOpen === "Flex Properties"}
							opened={tabGeneralIsPanelOpen === "Flex Properties" || undefined}
							title={__("Flex Properties", "wcb")}
						>
							<MyFlexPropertiesControl
								flexPropertiesControl={attributes.general_flexProperties}
								setAttrs__flexProperties={(data) =>
									setAttributes({ general_flexProperties: data })
								}
							/>
						</PanelBody>
					</>
				);
			case "Styles":
				return (
					<>
						{renderPanelBackground()}
						{renderPanelColor()}
						{renderPanelBorder()}
						{renderPanelBoxShadow()}
						{renderPanelDimensions()}
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

	const renderInnerDiv = () => {
		const blockProps = useBlockProps({
			className: `wcb-container-box__inner`,
		});
		const innerBlocksProps = useInnerBlocksProps(blockProps, {
			renderAppender: () => <InnerBlocks.ButtonBlockAppender />,
		});
		return <div {...innerBlocksProps} />;
	};

	let {
		Desktop: customWidth_LG,
		Tablet: customWidth_MD,
		Mobile: customWidth,
	} = general_container.customWidth;
	customWidth = customWidth || customWidth_MD || customWidth_LG;
	customWidth_MD = customWidth_MD || customWidth_LG;

	const wrapBlockProps = useBlockProps({ ref });
	//
	const { htmlTag: HtmlTag = "div" } = general_container;
	return (
		<CacheProvider value={myCache}>
			<HOCInspectorControls
				tabDefaultActive={tabIsOpen}
				renderTabPanels={renderTabBodyPanels}
			/>

			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-container-box__wrap ${uniqueId}`}
				id={uniqueId}
				data-uniqueid={uniqueId}
			>
				{/*  */}
				<GlobalCss {...attributes} />

				{/*  */}
				<VideoBackgroundByBgControl
					bgType={styles_background.bgType}
					videoData={styles_background.videoData}
				/>
				<OverlayBackgroundByBgControl
					bgType={styles_background.bgType}
					overlayType={styles_background.overlayType}
				/>

				{/*  */}
				{renderInnerDiv()}
			</div>
		</CacheProvider>
	);
};

export default Edit;
