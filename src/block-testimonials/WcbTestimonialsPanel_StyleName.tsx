import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyUnitControl from "../components/controls/MyUnitControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";

export interface WCB_TESTIMONIALS_PANEL_STYLE_NAME {
	typography: MyTypographyControlData;
	textColor: string;
	marginBottom: HasResponsive<string>;
}

export const WCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_NAME =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "",
		marginBottom: { Desktop: "0.25rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_NAME;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_NAME) => void;
}

const WcbTestimonialsPanel_StyleName: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_NAME_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, marginBottom } = panelData;
	const { currentDeviceValue: currentMarginBottom } =
		getValueFromAttrsResponsives(marginBottom, deviceType);
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Name", "wcb")}
		>
			<div className="space-y-5">
				<MyColorPicker
					label={__("Color", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textColor: value,
						});
					}}
					color={textColor}
					disableAlpha
				/>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>
				<MyUnitControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							marginBottom: {
								...marginBottom,
								[deviceType]: value,
							},
						});
					}}
					value={currentMarginBottom || ""}
					units={MY_GAP_UNITS}
					label={__("Margin bottom", "wcb")}
					hasResponsive
					className="flex-col space-y-2"
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleName;
