import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import HelpText from "../components/controls/HelpText";

export interface WCB_FAQ_PANEL_STYLE_ICON {
	size: HasResponsive<number>;
	color: string;
	activeColor: string;
	colGap: HasResponsive<string>;
}

export const WCB_FAQ_PANEL_STYLE_ICON_DEMO: WCB_FAQ_PANEL_STYLE_ICON = {
	size: { Desktop: 20 },
	color: "",
	activeColor: "",
	colGap: { Desktop: "1rem" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_STYLE_ICON;
	setAttr__: (data: WCB_FAQ_PANEL_STYLE_ICON) => void;
}

const WcbFaqPanel_StyleIcon: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_STYLE_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { size, color, activeColor, colGap } = panelData;
	const { currentDeviceValue: currentSize } = getValueFromAttrsResponsives(
		size,
		deviceType
	);
	const { currentDeviceValue: currentColgap } = getValueFromAttrsResponsives(
		colGap,
		deviceType
	);
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "wcb")}
		>
			<div className={"space-y-5"}>
				<RangeControl
					label={
						<MyLabelControl hasResponsive>{__("Size", "wcb")}</MyLabelControl>
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
					label={__("Color", "wcb")}
				/>

				<MyColorPicker
					onChange={(color) => {
						setAttr__({ ...panelData, activeColor: color });
					}}
					color={activeColor}
					label={__("Active color", "wcb")}
				/>

				<div>
					<MySpacingSizesControl
						onChange={(data) => {
							setAttr__({
								...panelData,
								colGap: {
									...colGap,
									[deviceType]: data,
								},
							});
						}}
						value={currentColgap || "0"}
						label={__("Gap between text & icon", "wcb")}
					/>
					<HelpText>
						{__("Spacing between text and icon if any.", "wcb")}
					</HelpText>
				</div>
			</div>
		</PanelBody>
	);
};

export default WcbFaqPanel_StyleIcon;
