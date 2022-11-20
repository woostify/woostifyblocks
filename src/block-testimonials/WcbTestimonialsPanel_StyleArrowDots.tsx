import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
// @ts-ignore
import { __experimentalBorderRadiusControl as BorderRadiusControl } from "@wordpress/block-editor";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import {
	BorderRadiusSettings,
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyUnitControl from "../components/controls/MyUnitControl";
import MyDisclosure from "../components/controls/MyDisclosure";

export interface WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS {
	arrowSize: string;
	border: MyBorderControlData;
	dotsMarginTop: HasResponsive<string>;
}
export const WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS =
	{
		arrowSize: "1.75rem",
		border: MY_BORDER_CONTROL_DEMO,
		dotsMarginTop: { Desktop: "2rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS) => void;
}

const WcbTestimonialsPanel_StyleArrowDots: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { arrowSize, border, dotsMarginTop } = panelData;
	const { currentDeviceValue: currentDotsMarginTop } =
		getValueFromAttrsResponsives(dotsMarginTop, deviceType);
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Arrow & Dots", "wcb")}
		>
			<div className="space-y-5">
				<MyDisclosure defaultOpen label="Arrow settings">
					<MySpacingSizesControl
						onChange={(value) => {
							setAttr__({
								...panelData,
								arrowSize: value,
							});
						}}
						value={arrowSize || "2rem"}
						hasResponsive={false}
						label={__("Arrow size", "wcb")}
					/>

					<MyBorderControl
						borderControl={border}
						setAttrs__border={(border: MyBorderControlData) => {
							setAttr__({
								...panelData,
								border,
							});
						}}
					/>
				</MyDisclosure>

				<MyUnitControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							dotsMarginTop: {
								...dotsMarginTop,
								[deviceType]: value,
							},
						});
					}}
					value={currentDotsMarginTop || "2rem"}
					units={MY_GAP_UNITS}
					label={__("Dots Margin top", "wcb")}
					hasResponsive
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleArrowDots;
