import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ICON_PANEL_STYLE_ICON {
	color: string;
	hoverColor: string;
}

export const WCB_ICON_PANEL_STYLE_ICON_DEMO: WCB_ICON_PANEL_STYLE_ICON = {
	color: "#fff",
	hoverColor: "",
};

export const WCB_ICON_PANEL_STYLE_ICON_LIGHT_DEMO: WCB_ICON_PANEL_STYLE_ICON = {
	color: "#d1d5db",
	hoverColor: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_PANEL_STYLE_ICON;
	setAttr__: (data: WCB_ICON_PANEL_STYLE_ICON) => void;
}

const WcbIconPanel_StyleIcon: FC<Props> = ({
	panelData = WCB_ICON_PANEL_STYLE_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { color, hoverColor } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "wcb")}
		>
			<div className={"space-y-5"}>

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
			</div>
		</PanelBody>
	);
};

export default WcbIconPanel_StyleIcon;