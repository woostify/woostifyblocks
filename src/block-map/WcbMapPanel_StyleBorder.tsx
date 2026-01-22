import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_MAP_PANEL_STYLE_BORDER extends MyBorderControlData {}

export const WCB_MAP_PANEL_STYLE_BORDER_DEMO = MY_BORDER_CONTROL_DEMO;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_MAP_PANEL_STYLE_BORDER;
	setAttr__: (data: WCB_MAP_PANEL_STYLE_BORDER) => void;
}

const WcbMapPanel_StyleBorder: FC<Props> = ({
	panelData = WCB_MAP_PANEL_STYLE_BORDER_DEMO,
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

export default WcbMapPanel_StyleBorder;
