import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	store as blockEditorStore,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { FC, useEffect, useRef, useCallback } from "react";
import { BlockWCBContainerAttrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import MyDimensionsControl from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyContainerControl, {
	CONTAINER_CONTROL_DEMO,
} from "./MyContainerControl";
import MyFlexPropertiesControl from "../components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl";
import GlobalCss from "./GlobalCss";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import { useSelect } from "@wordpress/data";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import { ContainerEditProps } from "./Edit";

const ContainerEdit: FC<ContainerEditProps<BlockWCBContainerAttrs>> = (
	props
) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		uniqueId,
		containerClassName,
		advance_responsiveCondition,
		advance_zIndex,
		general_container,
		general_flexProperties,
		styles_background,
		styles_border,
		styles_boxShadow,
		styles_color,
		styles_dimensions,
		advance_motionEffect,
	} = attributes;

	//
	useEffect(() => {
		if (uniqueId) {
			return;
		}
		setAttributes({ align: "full" });
	}, [uniqueId]);

	//

	const ref = useRef<HTMLDivElement>(null);
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const { hasInnerBlocks, hasParent } = useSelect(
		(select) => {
			return {
				hasParent:
					// @ts-ignore
					select(blockEditorStore).getBlockParents(clientId).length > 0,
				// @ts-ignore
				hasInnerBlocks: select(blockEditorStore).getBlocks(clientId).length > 0,
			};
		},
		[clientId]
	);

	const { containerWidthType } = general_container;
	useEffect(() => {
		let cl = "";
		if (hasParent) {
			cl = "is_wcb_container_child";
		}
		setAttributes({ containerClassName: cl });
	}, [hasParent, containerWidthType]);
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
				title={__("Background", "boostify-blocks")}
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
				initialOpen={tabStylesIsPanelOpen === "Color"}
				title={__("Color", "boostify-blocks")}
				onToggle={() => handleTogglePanel("Styles", "Color")}
				opened={tabStylesIsPanelOpen === "Styles" || undefined}
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
				title={__("Border", "boostify-blocks")}
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
				title={__("Box Shadow", "boostify-blocks")}
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
				title={__("Dimension", "boostify-blocks")}
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
							title={__("Container", "boostify-blocks")}
							onToggle={() => handleTogglePanel("General", "Container", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Container" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Container" || undefined}
						>
							<MyContainerControl
								containerControl={attributes.general_container}
								setAttrs__container={(data) => {
									let newData = { general_container: data };
									if (data.containerWidthType === "Boxed") {
										// @ts-ignore
										newData = { ...newData, align: "wide" };
									} else if (data.containerWidthType === "Full Width") {
										// @ts-ignore
										newData = { ...newData, align: "full" };
									} else {
										// @ts-ignore
										newData = { ...newData, align: "" };
									}

									setAttributes(newData);
								}}
								showContainerWidthType={!hasParent}
							/>
						</PanelBody>
						<PanelBody
							onToggle={() => handleTogglePanel("General", "Flex Properties")}
							initialOpen={tabGeneralIsPanelOpen === "Flex Properties"}
							opened={tabGeneralIsPanelOpen === "Flex Properties" || undefined}
							title={__("Flex Properties", "boostify-blocks")}
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

	const ALLOWED_BLOCKS = null;
	// const ALLOWED_BLOCKS = ["wcb/container-box"];

	// ====== END WRAP CLASSES

	// MAIN STYLES - CLASSES
	const { colunmGap, rowGap } = styles_dimensions;
	// const GAPS_VARIABLES = getGapStyleFromGapjObj({ colunmGap, rowGap });
	const GAPS_VARIABLES = {};
	//

	const blockProps = useBlockProps({
		className: `wcb-container__inner is-layout-flow`,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: () => {
			if (!hasInnerBlocks) {
				return <InnerBlocks.ButtonBlockAppender />;
			}
			return isSelected ? <InnerBlocks.DefaultBlockAppender /> : null;
		},
	});
	//

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			containerClassName,
			general_container,
			general_flexProperties,
			styles_background,
			styles_border,
			styles_boxShadow,
			styles_color,
			styles_dimensions,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		containerClassName,
		general_container,
		general_flexProperties,
		styles_background,
		styles_border,
		styles_boxShadow,
		styles_color,
		styles_dimensions,
		advance_motionEffect,
	]);
	//

	const blockWrapProps = useBlockProps({
		ref,
		className: `wcb-container__wrap ${uniqueId} ${containerClassName}`.trim(),
	});

	// make uniqueid
	const UNIQUE_ID = blockWrapProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div {...blockWrapProps} data-uniqueid={uniqueId}>
				{/*  */}
				{uniqueId && <GlobalCss {...WcbAttrsForSave()} />}

				<VideoBackgroundByBgControl
					bgType={styles_background.bgType}
					videoData={styles_background.videoData}
				/>
				<OverlayBackgroundByBgControl
					bgType={styles_background.bgType}
					overlayType={styles_background.overlayType}
				/>

				<div {...innerBlocksProps} id={undefined} style={GAPS_VARIABLES} />

				<HOCInspectorControls
					uniqueId={uniqueId}
					renderTabPanels={renderTabBodyPanels}
				/>
			</div>
		</MyCacheProvider>
	);
};

export default ContainerEdit;
