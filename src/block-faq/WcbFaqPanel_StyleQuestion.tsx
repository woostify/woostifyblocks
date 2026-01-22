import { PanelBody, TabPanel } from "@wordpress/components";
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
import MyTabPanel from "../components/controls/MyTabPanel/MyTabPanel";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_FAQ_PANEL_STYLE_QUESTION {
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	color: string;
	backgroundColor: string;
	colorHover: string;
	backgroundColorHover: string;
}

export const WCB_FAQ_PANEL_STYLE_QUESTION_DEMO: WCB_FAQ_PANEL_STYLE_QUESTION = {
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
	backgroundColorHover: "",
	color: "",
	colorHover: "",
};

type TabHere = "Normal" | "Hover";

export const PANEL_COLOR_TABS: {
	name: TabHere;
	title: string;
}[] = [
	{ name: "Normal", title: __("Normal", "boostify-blocks") },
	{ name: "Hover", title: __("Hover/Active", "boostify-blocks") },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_STYLE_QUESTION;
	setAttr__: (data: WCB_FAQ_PANEL_STYLE_QUESTION) => void;
}

const WcbFaqPanel_StyleQuestion: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_STYLE_QUESTION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		typography,
		padding,
		backgroundColor,
		backgroundColorHover,
		color,
		colorHover,
	} = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);

	const renderColorTab = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabHere;
		if (tabName === "Normal") {
			return (
				<div className="space-y-4">
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
				</div>
			);
		}
		if (tabName === "Hover") {
			return (
				<div className="space-y-4">
					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, colorHover: value });
						}}
						color={colorHover}
					/>
					<MyColorPicker
						label={__("Background color", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({ ...panelData, backgroundColorHover: value });
						}}
						color={backgroundColorHover}
					/>
				</div>
			);
		}
		return <div></div>;
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Question", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(value) => {
						setAttr__({ ...panelData, typography: value });
					}}
				/>

				<MyDisclosure defaultOpen label={__("Colors & Padding", "boostify-blocks")}>
					<MyTabPanel tabs={PANEL_COLOR_TABS}>{renderColorTab}</MyTabPanel>

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

export default WcbFaqPanel_StyleQuestion;
