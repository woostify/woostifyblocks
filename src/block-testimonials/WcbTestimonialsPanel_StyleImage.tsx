import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
// @ts-ignore
import { __experimentalBorderRadiusControl as BorderRadiusControl } from "@wordpress/block-editor";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import { BorderRadiusSettings } from "../components/controls/MyBorderControl/types";
import { Option } from "../types";
import MySelect from "../components/controls/MySelect";

export interface WCB_TESTIMONIALS_PANEL_STYLE_IMAGE {
	padding: HasResponsive<DimensionSettings>;
	imageSize: HasResponsive<string>;
	radius: HasResponsive<BorderRadiusSettings>;
	objectFit: CSSProperties["objectFit"];
}
export const WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_IMAGE =
	{
		padding: {
			Desktop: {
				top: "1rem",
				left: "1rem",
				right: "1rem",
				bottom: "1rem",
			},
		},
		imageSize: {
			Desktop: "3.5rem",
		},
		radius: {
			Desktop: "100px",
			Tablet: "100px",
			Mobile: "100px",
		},
		objectFit: "cover",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_IMAGE;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_IMAGE) => void;
}

const WcbTestimonialsPanel_StyleImage: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { padding, imageSize, radius, objectFit } = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);
	const { currentDeviceValue: currentRadius } = getValueFromAttrsResponsives(
		radius,
		deviceType
	);
	const { currentDeviceValue: currentImageSize } = getValueFromAttrsResponsives(
		imageSize,
		deviceType
	);

	const OBJECT_FIT_DEMO: Option<
		WCB_TESTIMONIALS_PANEL_STYLE_IMAGE["objectFit"]
	>[] = [
		{ value: "none", label: "None" },
		{ value: "cover", label: "Cover" },
		{ value: "contain", label: "Contain" },
		{ value: "fill", label: "Fill" },
	];

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Image", "wcb")}
		>
			<div className="space-y-5">
				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							imageSize: {
								...imageSize,
								[deviceType]: value,
							},
						});
					}}
					value={currentImageSize || "2rem"}
					hasResponsive
					label={__("Image size", "wcb")}
				/>

				<MySelect
					label={__("Object Fit", "Wcb")}
					options={OBJECT_FIT_DEMO}
					value={objectFit}
					onChange={(value) => {
						setAttr__({
							...panelData,
							objectFit:
								value as WCB_TESTIMONIALS_PANEL_STYLE_IMAGE["objectFit"],
						});
					}}
				/>

				<BorderRadiusControl
					values={currentRadius}
					onChange={(value: BorderRadiusSettings) => {
						setAttr__({
							...panelData,
							radius: {
								...radius,
								[deviceType]: value,
							},
						});
					}}
					label={
						<MyLabelControl className="" hasResponsive>
							{__("Border radius", "wcb")}
						</MyLabelControl>
					}
				/>

				<BoxControl
					label={
						<MyLabelControl className="" hasResponsive>
							{__("Padding", "wcb")}
						</MyLabelControl>
					}
					values={currentPadding}
					onChange={(value: DimensionSettings) => {
						setAttr__({
							...panelData,
							padding: {
								...padding,
								[deviceType]: value,
							},
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleImage;
