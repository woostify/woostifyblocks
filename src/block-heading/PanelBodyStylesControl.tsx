import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBorderControl as BorderControl,
} from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { WcbBlokcHeadingAttrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyDimensionsControl from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import { EditProps } from "../block-container/Edit";
import { BorderMainSingleSide } from "../components/controls/MyBorderControl/types";
import MyTextColorControl from "../components/controls/MyTextColorControl/MyTextColorControl";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import MyTextShadowControl from "../components/controls/MyTextShadowControl/MyTextShadowControl";

const PanelBodyStylesControl: FC<EditProps<WcbBlokcHeadingAttrs>> = ({
	attributes,
	clientId,
	setAttributes,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { styles_separatorBorder, styles_typography } = attributes;

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
						typographyControl={attributes.styles_typography}
						setAttrs__typography={(data) =>
							setAttributes({ styles_typography: data })
						}
					/>
					<MyTextColorControl
						textColorControl={attributes.styles_textColor}
						setAttrs__textColorControl={(data) =>
							setAttributes({ styles_textColor: data })
						}
					/>
					<MyTextShadowControl
						textShadowControl={attributes.styles_textShadow}
						setAttrs__textShadow={(data) =>
							setAttributes({ styles_textShadow: data })
						}
					/>
				</div>
			</PanelBody>
		);
	};

	return (
		<>
			{renderPanelHeading()}
			{renderPanelSeparatorBorder()}
			{/* {renderPanelBackground()}
			{renderPanelColor()}
			{renderPanelDimensions()} */}
		</>
	);
};

export default PanelBodyStylesControl;
