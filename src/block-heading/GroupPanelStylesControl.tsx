import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBorderControl as BorderControl,
} from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { WcbBlokcHeadingAttrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyDimensionsControl from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import { EditProps } from "../block-container/Edit";
import { BorderMainSingleSide } from "../components/controls/MyBorderControl/types";
import MyTextColorControl from "../components/controls/MyTextColorControl/MyTextColorControl";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import MyTextShadowControl from "../components/controls/MyTextShadowControl/MyTextShadowControl";
import MyLinkColorControl from "../components/controls/MyLinkColorControl/MyLinkColorControl";
import WcbHeadingPanelHighlight from "./WcbHeadingPanelHighlight";
import MyBackgroundNoImageControl from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";

const GroupPanelStylesControl: FC<EditProps<WcbBlokcHeadingAttrs>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		styles_separatorBorder,
		styles_typography,
		styles_textColor,
		styles_textShadow,
		styles_textColor_subHeading,
		styles_typography_subHeading,
		styles_linkColor,
	} = attributes;

	//
	const renderPanelHeading = () => {
		return (
			<PanelBody
				className={""}
				initialOpen={false}
				title={__("Heading", "wcb")}
			>
				<div className="space-y-2.5">
					<MyTypographyControl
						typographyControl={styles_typography}
						setAttrs__typography={(data) =>
							setAttributes({ styles_typography: data })
						}
					/>
					<MyTextColorControl
						textColorControl={styles_textColor}
						setAttrs__textColorControl={(data) =>
							setAttributes({ styles_textColor: data })
						}
					/>
					<MyTextShadowControl
						textShadowControl={styles_textShadow}
						setAttrs__textShadow={(data) =>
							setAttributes({ styles_textShadow: data })
						}
					/>
				</div>
			</PanelBody>
		);
	};

	const renderPanelSubHeading = () => {
		return (
			<PanelBody
				className={""}
				initialOpen={false}
				title={__("Sub Heading", "wcb")}
			>
				<div className="space-y-2.5">
					<MyTypographyControl
						typographyControl={styles_typography_subHeading}
						setAttrs__typography={(data) =>
							setAttributes({ styles_typography_subHeading: data })
						}
					/>
					<MyTextColorControl
						textColorControl={styles_textColor_subHeading}
						setAttrs__textColorControl={(data) =>
							setAttributes({ styles_textColor_subHeading: data })
						}
					/>
				</div>
			</PanelBody>
		);
	};

	const renderPanelSeparatorBorder = () => {
		return (
			<PanelBody initialOpen={false} title={__("Separtor", "wcb")}>
				<BorderControl
					label={__("Separtor")}
					onChange={(data: BorderMainSingleSide) => {
						console.log(1, { data });
					}}
					// value={border}
				/>
			</PanelBody>
		);
	};

	const renderPanelLinkColor = () => {
		return (
			<PanelBody initialOpen={false} title={__("Link color", "wcb")}>
				<MyLinkColorControl
					linkColorControl={styles_linkColor}
					setAttrs__linkColor={(data) =>
						setAttributes({ styles_linkColor: data })
					}
				/>
			</PanelBody>
		);
	};

	const renderPanelHightLight = () => {
		return (
			<WcbHeadingPanelHighlight
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
		);
	};

	const renderPanelBackground = () => {
		return (
			<PanelBody initialOpen={false} title={__("Background", "wcb")}>
				<MyBackgroundNoImageControl
				// backgroundControl={attributes.styles_background}
				// setAttrs__backgroundControl={(data) =>
				// 	setAttributes({ styles_background: data })
				// }
				/>
			</PanelBody>
		);
	};

	const renderPanelDimensions = () => {
		return (
			<PanelBody initialOpen={false} title={__("Dimension", "wcb")}>
				<MyDimensionsNoGapControl
					dimensionControl={attributes.styles_dimensions}
					setAttrs__dimensions={(data) =>
						setAttributes({ styles_dimensions: data })
					}
				/>
			</PanelBody>
		);
	};

	return (
		<>
			{renderPanelHeading()}
			{renderPanelSeparatorBorder()}
			{renderPanelSubHeading()}
			{renderPanelLinkColor()}
			{renderPanelHightLight()}
			{renderPanelBackground()}
			{renderPanelDimensions()}
		</>
	);
};

export default GroupPanelStylesControl;
