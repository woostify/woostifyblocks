import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBoxShadowControl, {
	MyBoxShadowControlData,
} from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_IMAGE_PANEL_STYLE_OVERLAY {
	backgroundColor: string;
	backgroundColorHover: string;
}

export const WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO: WCB_IMAGE_PANEL_STYLE_OVERLAY =
	{
		backgroundColor: "",
		backgroundColorHover: "",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_IMAGE_PANEL_STYLE_OVERLAY;
	setAttr__: (data: WCB_IMAGE_PANEL_STYLE_OVERLAY) => void;
}

const WcbImagePanel_StyleOverlay: FC<Props> = ({
	panelData = WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { backgroundColor, backgroundColorHover } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Overlay", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<MyColorPicker
					color={backgroundColor}
					onChange={(color) => {
						setAttr__({ ...panelData, backgroundColor: color });
					}}
					label={__("Background color")}
				/>
				<MyColorPicker
					color={backgroundColorHover}
					onChange={(color) => {
						setAttr__({ ...panelData, backgroundColorHover: color });
					}}
					label={__("Background hover color")}
				/>
				<HelpText>
					{__(
						"Let's customize the opacity of the background right inside the color-picker popover",
						"boostify-blocks"
					)}
				</HelpText>
			</div>
		</PanelBody>
	);
};

export default WcbImagePanel_StyleOverlay;
