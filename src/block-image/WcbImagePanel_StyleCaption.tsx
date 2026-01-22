import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import MyTextColorControl, {
	TextColorControlData,
	TEXT_COLOR_CONTROL_DEMO,
} from "../components/controls/MyTextColorControl/MyTextColorControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_IMAGE_PANEL_STYLE_CAPTION {
	typography: MyTypographyControlData;
	textColor: string;
	margin: HasResponsive<DimensionSettings>;
}

export const WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO: WCB_IMAGE_PANEL_STYLE_CAPTION =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "",
		margin: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_IMAGE_PANEL_STYLE_CAPTION;
	setAttr__: (data: WCB_IMAGE_PANEL_STYLE_CAPTION) => void;
}

const WcbImagePanel_StyleCaption: FC<Props> = ({
	panelData = WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, margin } = panelData;
	const { currentDeviceValue: currentMargin } = getValueFromAttrsResponsives(
		margin,
		deviceType
	);
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Caption", "boostify-blocks")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>
				<MyColorPicker
					color={textColor}
					onChange={(textColor) => {
						setAttr__({
							...panelData,
							textColor,
						});
					}}
					disableAlpha
				/>

				<BoxControl
					label={
						<MyLabelControl hasResponsive className="">
							{__("Margin", "boostify-blocks")}
						</MyLabelControl>
					}
					values={currentMargin}
					onChange={(data) => {
						setAttr__({
							...panelData,
							margin: {
								...margin,
								[deviceType]: data,
							},
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbImagePanel_StyleCaption;
