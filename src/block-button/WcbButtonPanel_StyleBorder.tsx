import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_BUTTON_PANEL_STYLE_BORDER extends MyBorderControlData {}

export const WCB_BUTTON_PANEL_STYLE_BORDER_DEMO: WCB_BUTTON_PANEL_STYLE_BORDER =
	{
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			color: "#38bdf8",
			style: "solid",
			width: "1px",
		},
	};

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
