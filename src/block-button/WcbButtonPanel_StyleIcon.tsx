import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";

export interface WCB_BUTTON_PANEL_STYLE_ICON {
	size: HasResponsive<number>;
	color: string;
	hoverColor: string;
}

export const WCB_BUTTON_PANEL_STYLE_ICON_DEMO: WCB_BUTTON_PANEL_STYLE_ICON = {
	size: { Desktop: 20 },
	color: "#fff",
	hoverColor: "#fff",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTON_PANEL_STYLE_ICON;
	setAttr__: (data: WCB_BUTTON_PANEL_STYLE_ICON) => void;
}

const WcbButtonPanel_StyleIcon: FC<Props> = ({
	panelData = WCB_BUTTON_PANEL_STYLE_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { size, color, hoverColor } = panelData;
	const { currentDeviceValue: currentSize } = getValueFromAttrsResponsives(
		size,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<RangeControl
					label={
						<MyLabelControl hasResponsive>{__("Size", "boostify-blocks")}</MyLabelControl>
					}
					value={currentSize || 16}
					onChange={(value) => {
						setAttr__({
							...panelData,
							size: {
								...size,
								[deviceType]: value,
							},
						});
					}}
					min={2}
					max={200}
				/>

				<MyColorPicker
					onChange={(color) => {
						setAttr__({ ...panelData, color });
					}}
					color={color}
					label={__("Color", "boostify-blocks")}
				/>

				<MyColorPicker
					onChange={(color) => {
						setAttr__({ ...panelData, hoverColor: color });
					}}
					color={hoverColor}
					label={__("Hover color", "boostify-blocks")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonPanel_StyleIcon;
