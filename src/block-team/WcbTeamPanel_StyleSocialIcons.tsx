import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_TEAM_PANEL_STYLE_SOCIALICONS {
	color: string;
	hoverColor: string;
	iconSize: HasResponsive<string>;
	iconSpacing: HasResponsive<string>;
}

export const WCB_TEAM_PANEL_STYLE_SOCIALICONS_DEMO: WCB_TEAM_PANEL_STYLE_SOCIALICONS =
	{
		color: "#334155",
		hoverColor: "",
		iconSize: { Desktop: "1.25rem" },
		iconSpacing: { Desktop: "1.25rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TEAM_PANEL_STYLE_SOCIALICONS;
	setAttr__: (data: WCB_TEAM_PANEL_STYLE_SOCIALICONS) => void;
}

const WcbTeamPanel_StyleSocialIcons: FC<Props> = ({
	panelData = WCB_TEAM_PANEL_STYLE_SOCIALICONS_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { color, hoverColor, iconSize, iconSpacing } = panelData;
	const { currentDeviceValue: currentIconSize } = getValueFromAttrsResponsives(
		iconSize,
		deviceType
	);
	const { currentDeviceValue: currentIconSpacing } =
		getValueFromAttrsResponsives(iconSpacing, deviceType);
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Social icons", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							iconSize: {
								...iconSize,
								[deviceType]: value,
							},
						});
					}}
					value={currentIconSize || ""}
					label={__("Icon size", "boostify-blocks")}
					hasResponsive
				/>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							iconSpacing: {
								...iconSpacing,
								[deviceType]: value,
							},
						});
					}}
					value={currentIconSpacing || ""}
					label={__("Icon spacing", "boostify-blocks")}
					hasResponsive
				/>

				<MyColorPicker
					onChange={(color) => {
						setAttr__({
							...panelData,
							color: color,
						});
					}}
					color={color}
				/>
				<MyColorPicker
					onChange={(color) => {
						setAttr__({
							...panelData,
							hoverColor: color,
						});
					}}
					color={hoverColor}
					label={__("Hover color", "boostify-blocks")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTeamPanel_StyleSocialIcons;
