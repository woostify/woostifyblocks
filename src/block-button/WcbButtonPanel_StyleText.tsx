import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyDisclosure from "../components/controls/MyDisclosure";

export interface WCB_BUTTON_PANEL_STYLE_TEXT {
	typography: MyTypographyControlData;
	color: string;
	hoverColor: string;
}

export const WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_PRIMARY: WCB_BUTTON_PANEL_STYLE_TEXT =
	{
		typography: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		color: "#fff",
		hoverColor: "#fff",
	};

export const WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_SECONDARY: WCB_BUTTON_PANEL_STYLE_TEXT =
	{
		...WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_PRIMARY,
		color: "#0284c7",
		hoverColor: "#0284c7",
	};

export const WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_WHITE: WCB_BUTTON_PANEL_STYLE_TEXT =
	{
		...WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_PRIMARY,
		color: "#111827",
		hoverColor: "#111827",
	};

export const WCB_BUTTON_PANEL_STYLE_TEXT_DEMO =
	WCB_BUTTON_PANEL_STYLE_TEXT_DEMO_PRIMARY;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTON_PANEL_STYLE_TEXT;
	setAttr__: (data: WCB_BUTTON_PANEL_STYLE_TEXT) => void;
}

const WcbButtonPanel_StyleText: FC<Props> = ({
	panelData = WCB_BUTTON_PANEL_STYLE_TEXT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, color, hoverColor } = panelData;
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Text", "wcb")}
		>
			<div className={"space-y-4"}>
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>

				<MyDisclosure defaultOpen label={__("Colors", "wcb")}>
					<MyColorPicker
						onChange={(color) => {
							setAttr__({ ...panelData, color });
						}}
						color={color}
						label={__("Color", "wcb")}
					/>

					<MyColorPicker
						onChange={(color) => {
							setAttr__({ ...panelData, hoverColor: color });
						}}
						color={hoverColor}
						label={__("Hover color", "wcb")}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbButtonPanel_StyleText;
