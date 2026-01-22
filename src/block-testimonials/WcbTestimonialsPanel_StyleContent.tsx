import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import { TYPOGRAPHY_CONTROL_DEMO } from "../components/controls/MyTypographyControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { WCB_TESTIMONIALS_PANEL_STYLE_NAME } from "./WcbTestimonialsPanel_StyleName";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export const WCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_NAME =
	{
		typography: {
			...TYPOGRAPHY_CONTROL_DEMO,
			lineHeight: { Desktop: 1.75 },
		},
		textColor: "",
		marginBottom: { Desktop: "1.5rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_NAME;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_NAME) => void;
}

const WcbTestimonialsPanel_StyleContent: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_CONTENT_DEMO,
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
			title={__("Content", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MyColorPicker
					label={__("Color", "boostify-blocks")}
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

				<MySpacingSizesControl
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
					label={__("Margin bottom", "boostify-blocks")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleContent;
