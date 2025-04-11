import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_BUTTON_PANEL_STYLE_BORDER extends MyBorderControlData {}

export const WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_1: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		radius: {
			Desktop: {
				bottomLeft: "155px",
				bottomRight: "155px",
				topLeft: "155px",
				topRight: "155px",
			},
			Tablet: {
				bottomLeft: "120px",
				bottomRight: "120px",
				topLeft: "120px",
				topRight: "120px",
			},
			Mobile: {
				bottomLeft: "65px",
				bottomRight: "65px",
				topLeft: "65px",
				topRight: "65px",
			},
		},
		hoverColor: "",
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_2: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		radius: {
			Desktop: {
				bottomLeft: "155px",
				bottomRight: "155px",
				topLeft: "155px",
				topRight: "155px",
			},
			Tablet: {
				bottomLeft: "120px",
				bottomRight: "120px",
				topLeft: "120px",
				topRight: "120px",
			},
			Mobile: {
				bottomLeft: "65px",
				bottomRight: "65px",
				topLeft: "65px",
				topRight: "65px",
			},
		},
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "",
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_3: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: MY_BORDER_CONTROL_DEMO.mainSettings,
		hoverColor: "",
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_4: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "",
	};
export const WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_5: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: MY_BORDER_CONTROL_DEMO.mainSettings,
		hoverColor: "",
	};

export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO =
WCB_BUTTON_PANEL_STYLE_BORDER_PRESET_1;

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
			title={__("Border", "wcb")}
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
