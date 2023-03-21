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

export interface WCB_CTA_PANEL_STYLE_DIMENSION
	extends MyDimensionsNoGapControlData {
	gap: HasResponsive<string>;
}

export const WCB_CTA_PANEL_STYLE_DIMENSION_DEMO: WCB_CTA_PANEL_STYLE_DIMENSION =
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
				top: "",
				left: "",
				right: "",
				bottom: "",
			},
		},
		gap: { Desktop: "1.75rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_CTA_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_CTA_PANEL_STYLE_DIMENSION) => void;
}

const WcbCtaPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_CTA_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { gap } = panelData;
	const { currentDeviceValue: currentColgap } = getValueFromAttrsResponsives(
		gap,
		deviceType
	);
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
				<div>
					<MySpacingSizesControl
						onChange={(data) => {
							setAttr__({
								...panelData,
								gap: {
									...gap,
									[deviceType]: data,
								},
							});
						}}
						value={currentColgap || "0"}
						label={__("Gap between content & button", "wcb")}
					/>
					<HelpText>
						{__("Spacing between content and button.", "wcb")}
					</HelpText>
				</div>
			</div>
		</PanelBody>
	);
};

export default WcbCtaPanel_StyleDimension;
