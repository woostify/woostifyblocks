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
import { get } from "lodash";
import React, { FC, CSSProperties } from "react";
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
import getBoxShadowStyles from "../components/controls/MyBoxShadowControl/getBoxShadowStyles";
import GlobalCss from "./GlobalCss";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { useEffect, useRef } from "@wordpress/element";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

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

const XXXXXXX = document.createElement("code");
let X = 0;

const Edit: FC<EditProps<BlockWCBContainerAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

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
		styles_color,
		styles_boxShadow,
	} = attributes;
	const ALLOWED_BLOCKS = ["wcb/container-box"];

	// ====== WRAP CLASSES

	const containerWidthTypeClass =
		general_container.containerWidthType === "Full Width"
			? "alignfull"
			: general_container.containerWidthType === "Boxed"
			? "alignwide"
			: "";

	// ====== END WRAP CLASSES

	// MAIN STYLES - CLASSES
	const { colunmGap, rowGap, padding, margin } = styles_dimensions;
	const { Mobile: pMobile, Tablet: pTablet, Desktop: pDesktop } = padding;
	const { Mobile: mMobile, Tablet: mTablet, Desktop: mDesktop } = margin;
	//
	const { styles: boxShadowStyles, className: boxShadowClasses } =
		getBoxShadowStyles(styles_boxShadow);
	const MAIN_STYLES: React.CSSProperties = {
		// @ts-ignore
		"--wcb-gap-x": colunmGap.Mobile || colunmGap.Tablet || colunmGap.Desktop,
		"--wcb-gap-y": rowGap.Mobile || rowGap.Tablet || rowGap.Desktop,
		"--md-wcb-gap-x": colunmGap.Tablet || colunmGap.Desktop,
		"--md-wcb-gap-y": rowGap.Tablet || rowGap.Desktop,
		"--lg-wcb-gap-x": colunmGap.Desktop,
		"--lg-wcb-gap-y": rowGap.Desktop,
		// PADING
		"--wcb-pt": pMobile?.top || pTablet?.top || pDesktop?.top,
		"--md-wcb-pt": pTablet?.top || pDesktop?.top,
		"--lg-wcb-pt": pDesktop?.top,
		"--wcb-pb": pMobile?.bottom || pTablet?.bottom || pDesktop?.bottom,
		"--md-wcb-pb": pTablet?.bottom || pDesktop?.bottom,
		"--lg-wcb-pb": pDesktop?.bottom,
		"--wcb-pl": pMobile?.left || pTablet?.left || pDesktop?.left,
		"--md-wcb-pl": pTablet?.left || pDesktop?.left,
		"--lg-wcb-pl": pDesktop?.left,
		"--wcb-pr": pMobile?.right || pTablet?.right || pDesktop?.right,
		"--md-wcb-pr": pTablet?.right || pDesktop?.right,
		"--lg-wcb-pr": pDesktop?.right,
		// MARGIN
		"--wcb-mt": mMobile?.top || mTablet?.top || mDesktop?.top,
		"--md-wcb-mt": mTablet?.top || mDesktop?.top,
		"--lg-wcb-mt": mDesktop?.top,
		"--wcb-mb": mMobile?.bottom || mTablet?.bottom || mDesktop?.bottom,
		"--md-wcb-mb": mTablet?.bottom || mDesktop?.bottom,
		"--lg-wcb-mb": mDesktop?.bottom,
		"--wcb-ml": mMobile?.left || mTablet?.left || mDesktop?.left,
		"--md-wcb-ml": mTablet?.left || mDesktop?.left,
		"--lg-wcb-ml": mDesktop?.left,
		"--wcb-mr": mMobile?.right || mTablet?.right || mDesktop?.right,
		"--md-wcb-mr": mTablet?.right || mDesktop?.right,
		"--lg-wcb-mr": mDesktop?.right,
		// COLOR
		"--wcb-text-color": styles_color,
		//
		...boxShadowStyles,
	};
	//

	const blockProps = useBlockProps({
		className: `wcb-container__inner ${boxShadowClasses} `,
	});
	// END MAIN STYLES - CLASSES
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: () => null,
	});

	//
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!ref.current) {
			return;
		}
		const { ownerDocument } = ref.current;
		const { defaultView } = ownerDocument;
		// Set ownerDocument.title for example.
	}, []);

	const myCache = createCache({
		key: "wcb-custom-cache-key",
		container: ref.current || undefined,
	});

	const renderVideoBg = () => {
		if (
			styles_background.bgType !== "video" ||
			!styles_background.videoData?.mediaId
		) {
			return null;
		}
		const SRC = styles_background.videoData?.mediaUrl || "";
		return (
			<div className="wcb-container__video">
				<video
					autoPlay
					loop
					muted
					controls={false}
					title={SRC}
					data-id={styles_background.videoData.mediaId}
					src={SRC}
				></video>
			</div>
		);
	};

	const renderBgOverlay = () => {
		if (styles_background.overlayType === "none") {
			return null;
		}
		if (
			styles_background.bgType !== "video" &&
			styles_background.bgType !== "image"
		) {
			return null;
		}

		return <div className="wcb-container__overlay "></div>;
	};

	return (
		<CacheProvider value={myCache}>
			<div
				{...useBlockProps({ ref })}
				className={`wcb-container__wrap ${uniqueId} ${containerWidthTypeClass}`}
				id={uniqueId}
			>
				<GlobalCss {...attributes} />
				{/*  */}
				{/* <WithBackgroundSettings
				backgroundControlAttrs={styles_background}
				borderControlAttrs={styles_border}
				wrapStyles={WRAP_STYLES}
				className={`${containerWidthTypeClass} ${minHeightClass} `}
			> */}
				{renderVideoBg()}
				{renderBgOverlay()}
				<div {...innerBlocksProps} style={MAIN_STYLES} />
				{/* </WithBackgroundSettings> */}
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
