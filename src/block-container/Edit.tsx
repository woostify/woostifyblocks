import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { get } from "lodash";
import React, { FC, useEffect, useRef, useState } from "react";
import { BlockWCBContainerAttrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import "./editor.scss";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import MyDimensionsControl from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyContainerControl from "./MyContainerControl";
import MyFlexPropertiesControl from "../components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl";
import {
	// @ts-ignore
	createBlocksFromInnerBlocksTemplate,
	// @ts-ignore
	store as blocksStore,
} from "@wordpress/blocks";
import GlobalCss from "./GlobalCss";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";
import { FLEX_PROPERTIES_CONTROL_DEMO } from "../components/controls/MyFlexPropertiesControl/types";
import { useSelect, useDispatch } from "@wordpress/data";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";

export type EditProps<T, C = any> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
	isSelected: boolean;
	context: C;
	className: string;
	insertBlocksAfter: Function;
	onReplace: Function;
};

export const getGapStyleFromGapjObj = ({ colunmGap, rowGap }) => {
	const MAIN_STYLES: React.CSSProperties = {
		// @ts-ignore
		"--wcb-gap-x": colunmGap.Mobile || colunmGap.Tablet || colunmGap.Desktop,
		"--wcb-gap-y": rowGap.Mobile || rowGap.Tablet || rowGap.Desktop,
		"--md-wcb-gap-x": colunmGap.Tablet || colunmGap.Desktop,
		"--md-wcb-gap-y": rowGap.Tablet || rowGap.Desktop,
		"--lg-wcb-gap-x": colunmGap.Desktop,
		"--lg-wcb-gap-y": rowGap.Desktop,
	};
	return MAIN_STYLES;
};

const Edit: FC<EditProps<BlockWCBContainerAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { uniqueId, containerClassName } = attributes;

	// const { myCache, ref } = useCreateCacheEmotion();
	const ref = useRef<HTMLDivElement>(null);
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	//
	useEffect(() => {
		setAttributes({
			uniqueId: "wcb-container-" + clientId.substring(2, 9).replace("-", ""),
		});
	}, []);

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
	const { general_container, styles_background, styles_dimensions } =
		attributes;
	const { containerWidthType, htmlTag } = general_container;
	useEffect(() => {
		let cl =
			containerWidthType === "Full Width"
				? "alignfull"
				: containerWidthType === "Boxed"
				? "alignwide"
				: "";

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
				initialOpen={tabStylesIsPanelOpen === "Color"}
				title={__("Color", "wcb")}
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
							title={__("Container", "wcb")}
							onToggle={() => handleTogglePanel("General", "Container", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "Container" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "Container" || undefined}
						>
							<MyContainerControl
								containerControl={attributes.general_container}
								setAttrs__container={(data) =>
									setAttributes({ general_container: data })
								}
								showContainerWidthType={!hasParent}
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

	const ALLOWED_BLOCKS = null;
	// const ALLOWED_BLOCKS = ["wcb/container-box"];

	// ====== END WRAP CLASSES

	// MAIN STYLES - CLASSES
	const { colunmGap, rowGap } = styles_dimensions;
	const GAPS_VARIABLES = getGapStyleFromGapjObj({ colunmGap, rowGap });
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

	const blockWrapProps = useBlockProps({
		ref,
		className: `wcb-container__wrap ${uniqueId} ${containerClassName}`.trim(),
	});
	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...blockWrapProps}
				className={`${blockWrapProps.className} `}
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

				<div
					{...innerBlocksProps}
					// className="wcb-container__inner"
					style={GAPS_VARIABLES}
				/>

				<HOCInspectorControls
					uniqueId={uniqueId}
					renderTabPanels={renderTabBodyPanels}
					onChangeActive={(tab) => {
						handleTogglePanel(tab);
					}}
					tabDefaultActive={tabIsOpen}
				/>
			</div>
		</MyCacheProvider>
	);
};

export interface TPlaceholder extends EditProps<BlockWCBContainerAttrs> {
	name: string;
	onSelect: () => void;
}

const Placeholder: FC<TPlaceholder> = ({
	attributes,
	setAttributes,
	name,
	clientId,
	onSelect,
}) => {
	// RESET FLEX PROPERTIES
	useEffect(() => {
		setAttributes({
			general_flexProperties: FLEX_PROPERTIES_CONTROL_DEMO,
		});
	}, []);

	const { blockType, defaultVariation, variations } = useSelect(
		(select) => {
			const { getBlockVariations, getBlockType, getDefaultBlockVariation } =
				select(blocksStore) as any;

			return {
				blockType: getBlockType(name),
				defaultVariation: getDefaultBlockVariation(name, "block"),
				variations: getBlockVariations(name, "block"),
			};
		},
		[name]
	);
	const { replaceInnerBlocks } = useDispatch(blockEditorStore);

	return (
		<div {...useBlockProps()}>
			<BlockVariationPicker
				icon={get(blockType, ["icon", "src"])}
				label={get(blockType, ["title"])}
				instructions={__("Select a variation to start with.")}
				onSelect={(nextVariation = defaultVariation) => {
					if (typeof nextVariation.attributes === "object") {
						setAttributes({ ...attributes, ...nextVariation.attributes });
					}
					if (nextVariation.innerBlocks) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks),
							true
						);
					}
					onSelect();
				}}
				variations={variations}
				allowSkip
			/>
		</div>
	);
};

const ContainerEdit = (props) => {
	const { clientId } = props;

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

	const [selectedVariant, setSelectedVariant] = useState(false);

	const Component =
		hasParent || hasInnerBlocks || selectedVariant ? Edit : Placeholder;

	return <Component {...props} onSelect={() => setSelectedVariant(true)} />;
};

export default ContainerEdit;
