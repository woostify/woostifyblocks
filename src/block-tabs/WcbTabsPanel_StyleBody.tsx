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
import {
	MY_BORDER_CONTROL_DEMO,
	MyBorderControlData,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_TABS_PANEL_STYLE_BODY {
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	margin: HasResponsive<DimensionSettings>;
	color: string;
	backgroundColor: string;
	colorHover: string;
	backgroundColorHover: string;
	border: MyBorderControlData;
}

export const WCB_TABS_PANEL_STYLE_BODY_DEMO: WCB_TABS_PANEL_STYLE_BODY = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
	border: MY_BORDER_CONTROL_DEMO,
	margin: {
		Desktop: {
			top: "0rem",
			left: "0rem",
			right: "0rem",
			bottom: "1rem",
		},
	},
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
	{ name: "Hover", title: __("Hover", "boostify-blocks") },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TABS_PANEL_STYLE_BODY;
	setAttr__: (data: WCB_TABS_PANEL_STYLE_BODY) => void;
}

const WcbTabsPanel_StyleBody: FC<Props> = ({
	panelData = WCB_TABS_PANEL_STYLE_BODY_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		typography,
		padding,
		margin,
		backgroundColor,
		backgroundColorHover,
		color,
		colorHover,

		border,
	} = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);
	const { currentDeviceValue: currentMargin } = getValueFromAttrsResponsives(
		margin,
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
			title={__("Body", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(value) => {
						setAttr__({ ...panelData, typography: value });
					}}
				/>

				<MyDisclosure label={__("Colors", "boostify-blocks")}>
					<MyTabPanel tabs={PANEL_COLOR_TABS}>{renderColorTab}</MyTabPanel>
				</MyDisclosure>

				<MyDisclosure label={__("Border ", "boostify-blocks")}>
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(value) => {
							setAttr__({ ...panelData, border: value });
						}}
					/>
				</MyDisclosure>

				<MyDisclosure label={__("Dimension", "boostify-blocks")}>
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
					<BoxControl
						label={
							<MyLabelControl className="" hasResponsive>
								{__("Margin", "boostify-blocks")}
							</MyLabelControl>
						}
						values={currentMargin}
						onChange={(value) => {
							setAttr__({
								...panelData,
								margin: {
									...margin,
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

export default WcbTabsPanel_StyleBody;
