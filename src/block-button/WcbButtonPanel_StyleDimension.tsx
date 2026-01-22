import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_BUTTON_PANEL_STYLE_DIMENSION
	extends MyDimensionsNoGapControlData {
	colGap: HasResponsive<string>;
}

export const WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_CIRCULAR: WCB_BUTTON_PANEL_STYLE_DIMENSION =
	{
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "12px",
				left: "12px",
				right: "12px",
				bottom: "12px",
			},
		},
		margin: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
		colGap: { Desktop: "" },
	};

export const WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_PRIMARY: WCB_BUTTON_PANEL_STYLE_DIMENSION =
	{
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
		margin: {
			Desktop: {
				top: "0",
				left: "0",
				right: "0",
				bottom: "0",
			},
		},
		colGap: { Desktop: "8px" },
	};

export const WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO =
	WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO_PRIMARY;
interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTON_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_BUTTON_PANEL_STYLE_DIMENSION) => void;
}

const WcbButtonPanel_StyleDemension: FC<Props> = ({
	panelData = WCB_BUTTON_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { colGap } = panelData;
	const { currentDeviceValue: currentColgap } = getValueFromAttrsResponsives(
		colGap,
		deviceType
	);
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MyDimensionsNoGapControl
					dimensionControl={panelData}
					setAttrs__dimensions={(data) => setAttr__({ ...panelData, ...data })}
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
						label={__("Gap between text & icon", "boostify-blocks")}
					/>
					<HelpText>
						{__("Spacing between text and icon if any.", "boostify-blocks")}
					</HelpText>
				</div>
			</div>
		</PanelBody>
	);
};

export default WcbButtonPanel_StyleDemension;
