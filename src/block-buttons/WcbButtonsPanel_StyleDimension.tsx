import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_BUTTONS_PANEL_STYLE_DIMENSION
	extends MyDimensionsNoGapControlData {}

export const WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO: WCB_BUTTONS_PANEL_STYLE_DIMENSION =
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
	};
interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTONS_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_BUTTONS_PANEL_STYLE_DIMENSION) => void;
}

const WcbButtonsPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_BUTTONS_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { margin, padding } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "wcb")}
		>
			<div className="space-y-5">
				<MyDimensionsNoGapControl
					dimensionControl={panelData}
					setAttrs__dimensions={(data) => setAttr__({ ...panelData, ...data })}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonsPanel_StyleDimension;
