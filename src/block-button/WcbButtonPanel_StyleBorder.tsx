import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_BUTTON_PANEL_STYLE_BORDER extends MyBorderControlData {}

export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_ROUND: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		radius: {
			Desktop: {
				bottomLeft: "100px",
				bottomRight: "100px",
				topLeft: "100px",
				topRight: "100px",
			},
		},
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_WHITE: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#d1d5db",
		},
		hoverColor: "#9ca3af",
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_SECONDARY: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#e0f2fe",
		},
		hoverColor: "#bae6fd",
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_PRIMARY: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#0284c7",
		},
		hoverColor: "#0369a1",
	};

export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO =
	WCB_BUTTON_PANEL_STYLE_BORDER_DEMO_PRIMARY;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTON_PANEL_STYLE_BORDER;
	setAttr__: (data: WCB_BUTTON_PANEL_STYLE_BORDER) => void;
}

const WcbButtonPanel_StyleBorder: FC<Props> = ({
	panelData = WCB_BUTTON_PANEL_STYLE_BORDER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Border", "boostify-blocks")}
		>
			<MyBorderControl
				borderControl={panelData}
				setAttrs__border={(data) => {
					setAttr__({
						...data,
					});
				}}
			/>
		</PanelBody>
	);
};

export default WcbButtonPanel_StyleBorder;
