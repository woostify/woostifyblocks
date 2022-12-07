import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyDisclosure from "../components/controls/MyDisclosure";

export interface WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS {
	arrowSize: string;
	border: MyBorderControlData;
	dotsMarginTop: HasResponsive<string>;
	color: string;
}
export const WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_ARROW_DOTS =
	{
		arrowSize: "1.25rem",
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				...MY_BORDER_CONTROL_DEMO.mainSettings,
				style: "solid",
				width: "1px",
				color: "#d1d5db",
			},
			hoverColor: "#6b7280",
			radius: { Desktop: "99px" },
		},
		dotsMarginTop: { Desktop: "1rem" },
		color: "#374151",
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
	const { arrowSize, border, dotsMarginTop, color } = panelData;
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

				<MySpacingSizesControl
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
					label={__("Dots Margin top", "wcb")}
				/>

				<MyColorPicker
					onChange={(value) => {
						setAttr__({
							...panelData,
							color: value,
						});
					}}
					color={color}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleArrowDots;
