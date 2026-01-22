import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import {
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_FAQ_PANEL_STYLE_ANSWER {
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	color: string;
	backgroundColor: string;
}

export const WCB_FAQ_PANEL_STYLE_ANSWER_DEMO: WCB_FAQ_PANEL_STYLE_ANSWER = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
	padding: {
		Desktop: {
			top: "1rem",
			left: "1rem",
			right: "1rem",
			bottom: "1rem",
		},
	},
	backgroundColor: "",
	color: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_STYLE_ANSWER;
	setAttr__: (data: WCB_FAQ_PANEL_STYLE_ANSWER) => void;
}

const WcbFaqPanel_StyleAnswer: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_STYLE_ANSWER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, padding, backgroundColor, color } = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Answer", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(value) => {
						setAttr__({ ...panelData, typography: value });
					}}
				/>

				<MyDisclosure defaultOpen label={__("Colors & Padding", "boostify-blocks")}>
					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, color: value });
						}}
						color={color}
					/>
					<MyColorPicker
						label={__("Background color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, backgroundColor: value });
						}}
						color={backgroundColor}
					/>

					<BoxControl
						label={
							<MyLabelControl className="" hasResponsive>
								{__("Padding", "boostify-blocks")}
							</MyLabelControl>
						}
						values={currentPadding}
						onChange={(value) => {
							setAttr__({
								...panelData,
								padding: {
									...padding,
									[deviceType]: value,
								},
							});
						}}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbFaqPanel_StyleAnswer;
