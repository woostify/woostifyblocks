import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
// @ts-ignore
import { get } from "lodash";
import React, { FC, useEffect } from "react";
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
import MyResponsiveConditionControl from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import MyZIndexControl from "../components/controls/MyZIndexControl/MyZIndexControl";
import MyContainerControl from "../components/controls/MyContainerControl/MyContainerControl";
import MyFlexPropertiesControl from "../components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import { useDispatch, useSelect } from "@wordpress/data";
import {
	// @ts-ignore
	createBlocksFromInnerBlocksTemplate,
	// @ts-ignore
	store as blocksStore,
} from "@wordpress/blocks";
import GlobalCss from "./GlobalCss";
import { CacheProvider } from "@emotion/react";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import VideoBackgroundByBgControl from "../components/VideoBackgroundByBgControl";
import OverlayBackgroundByBgControl from "../components/OverlayBackgroundByBgControl";

export type EditProps<T> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
};

export type ContainerLayout =
	| "layout-1"
	| "layout-2"
	| "layout-3"
	| "layout-4"
	| "layout-5"
	| "layout-6"
	| "layout-7"
	| "layout-8"
	| "layout-9";

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
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	const { myCache, ref } = useCreateCacheEmotion();

	//
	useEffect(() => {
		setAttributes({
			uniqueId: "wcb-container-" + clientId.substring(2, 9).replace("-", ""),
		});
	}, []);
	//

	const renderPanelColor = () => {
		return (
			<PanelBody initialOpen={false} className="" title={__("Color", "wcb")}>
				<MyColorPicker
					onChange={(color) => setAttributes({ styles_color: color })}
					color={attributes.styles_color}
				/>
			</PanelBody>
		);
	};

	const renderPanelBackground = () => {
		return (
			<PanelBody initialOpen={false} title={__("Background", "wcb")}>
				<MyBackgroundControl
					backgroundControl={attributes.styles_background}
					setAttrs__backgroundControl={(data) =>
						setAttributes({ styles_background: data })
					}
				/>
			</PanelBody>
		);
	};

	const renderPanelBorder = () => {
		return (
			<PanelBody initialOpen={false} title={__("Border", "wcb")}>
				<MyBorderControl
					borderControl={attributes.styles_border}
					setAttrs__border={(data) => setAttributes({ styles_border: data })}
				/>
			</PanelBody>
		);
	};

	const renderPanelBoxShadow = () => {
		return (
			<PanelBody initialOpen={false} title={__("Box Shadow", "wcb")}>
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
			<PanelBody initialOpen={false} title={__("Dimension", "wcb")}>
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
						<PanelBody initialOpen={false} title={__("Container", "wcb")}>
							<MyContainerControl
								containerControl={attributes.general_container}
								setAttrs__container={(data) =>
									setAttributes({ general_container: data })
								}
							/>
						</PanelBody>
						<PanelBody initialOpen={false} title={__("Flex Properties", "wcb")}>
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

	const { general_container, styles_background, styles_dimensions } =
		attributes;
	const ALLOWED_BLOCKS = ["wcb/container-box"];

	// ====== WRAP CLASSES
	const { htmlTag: HtmlTag = "div", containerWidthType } = general_container;
	const containerWidthTypeClass =
		containerWidthType === "Full Width"
			? "alignfull"
			: containerWidthType === "Boxed"
			? "alignwide"
			: "";
	// ====== END WRAP CLASSES

	// MAIN STYLES - CLASSES
	const { colunmGap, rowGap } = styles_dimensions;
	const GAPS_VARIABLES = getGapStyleFromGapjObj({ colunmGap, rowGap });
	//

	const blockProps = useBlockProps({
		className: `wcb-container__inner`,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: () => null,
	});
	//

	const blockWrapProps = useBlockProps({
		ref,
		className: `wcb-container__wrap ${uniqueId} ${containerWidthTypeClass}`,
	});
	return (
		<CacheProvider value={myCache}>
			<div
				{...blockWrapProps}
				className={`${blockWrapProps.className} `}
				id={uniqueId}
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

				<div {...innerBlocksProps} style={GAPS_VARIABLES} />
				<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />
			</div>
		</CacheProvider>
	);
};

const Placeholder = ({ attributes, setAttributes, name, clientId }) => {
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
				}}
				variations={variations}
				allowSkip
			/>
		</div>
	);
};

const ContainerEdit = (props) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		(select) =>
			(select(blockEditorStore) as any).getBlocks(clientId).length > 0,
		[clientId]
	);
	const Component = hasInnerBlocks ? Edit : Placeholder;

	return <Component {...props} />;
};

export default ContainerEdit;
