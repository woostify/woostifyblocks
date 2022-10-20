import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	// @ts-ignore
	useInnerBlocksProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { get } from "lodash";
import React, { useEffect, FC, CSSProperties } from "react";
import { BlockWCBContainerAttrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import WithBackgroundSettings from "../components/WithBackgroundSettings";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import "./editor.scss";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import MyDimensionsControl from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyResponsiveConditionControl from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import MyZIndexControl from "../components/controls/MyZIndexControl/MyZIndexControl";
import MyContainerControl from "../components/controls/MyContainerControl/MyContainerControl";
import MyFlexPropertiesControl from "../components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import { withDispatch, useDispatch, useSelect } from "@wordpress/data";
import {
	createBlock,
	// @ts-ignore
	createBlocksFromInnerBlocksTemplate,
	// @ts-ignore
	store as blocksStore,
} from "@wordpress/blocks";

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

const Edit: FC<EditProps<BlockWCBContainerAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	//
	useEffect(() => {
		setAttributes({
			uniqueId: clientId.substring(2, 9).replace("-", ""),
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
						<PanelBody initialOpen={false} title={__("Typography", "wcb")}>
							<MyTypographyControl
								typographyControl={attributes.general_typography}
								setAttrs__typography={(data) =>
									setAttributes({ general_typography: data })
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

	const {
		general_container,
		general_flexProperties,
		styles_background,
		styles_dimensions,
		styles_border,
	} = attributes;
	const ALLOWED_BLOCKS = ["wcb/container-box"];

	// ====== CLASSES
	const WRAP_STYLES: React.CSSProperties = {
		// @ts-ignore
		"--lg-wcb-min-h": general_container.minHeight.Desktop,
		"--md-wcb-min-h": general_container.minHeight.Tablet,
		"--wcb-min-h": general_container.minHeight.Mobile,
		overflow: general_container.overflow,
	};

	const containerWidthTypeClass =
		general_container.containerWidthType === "Full Width"
			? "alignfull"
			: general_container.containerWidthType === "Boxed"
			? "alignwide"
			: "";

	const minHeightClass = `min-h-[var(--wcb-min-h)] md:min-h-[var(--md-wcb-min-h)] lg:min-h-[var(--lg-wcb-min-h)]`;
	// ====== END CLASSES

	const { colunmGap, rowGap } = styles_dimensions;
	const CONTENT_STYLES: React.CSSProperties = {
		// @ts-ignore
		"--wcb-gap-x": colunmGap.Mobile || colunmGap.Tablet || colunmGap.Desktop,
		"--wcb-gap-y": rowGap.Mobile || rowGap.Tablet || rowGap.Desktop,
		"--md-wcb-gap-x": colunmGap.Tablet || colunmGap.Desktop,
		"--md-wcb-gap-y": rowGap.Tablet || rowGap.Desktop,
		"--lg-wcb-gap-x": colunmGap.Desktop,
		"--lg-wcb-gap-y": rowGap.Desktop,
	};

	//
	const flexWrap = general_flexProperties?.flexWrap;
	const blockProps = useBlockProps({
		className: `flex flex-col md:flex-row relative w-full h-full
			gap-x-[var(--wcb-gap-x)]
			gap-y-[var(--wcb-gap-y)]
			md:gap-x-[var(--md-wcb-gap-x)]
			md:gap-y-[var(--md-wcb-gap-y)]
			lg:gap-x-[var(--lg-wcb-gap-x)]
			lg:gap-y-[var(--lg-wcb-gap-y)]
			${flexWrap?.Mobile ? `flex-${flexWrap?.Mobile}` : ""} 
			${flexWrap?.Tablet ? `md:flex-${flexWrap?.Tablet}` : ""}
			${flexWrap?.Desktop ? `lg:flex-${flexWrap?.Desktop}` : ""}
			`,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: () => null,
	});

	return (
		<>
			<WithBackgroundSettings
				backgroundControlAttrs={styles_background}
				borderControlAttrs={styles_border}
				wrapStyles={WRAP_STYLES}
				className={`${containerWidthTypeClass} ${minHeightClass} `}
			>
				<div {...innerBlocksProps} style={CONTENT_STYLES} />
			</WithBackgroundSettings>
			<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />
		</>
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
