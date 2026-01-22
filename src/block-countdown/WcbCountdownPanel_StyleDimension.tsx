import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { Panel, PanelBody } from "@wordpress/components";
export interface WCB_COUNTDOWN_PANEL_STYLE_DIMENSION {
	gap_boxes: HasResponsive<string>;
	width_box: HasResponsive<string>;
	gap_number: HasResponsive<string>;
	background: ''
}

export const WCB_COUNTDOWN_PANEL_STYLE_DIMENSION_DEMO: WCB_COUNTDOWN_PANEL_STYLE_DIMENSION =
{
	gap_boxes: {
		Desktop: "40px",
		Tablet: "20px",
		Mobile: "10px"
	},
	width_box: {
		Desktop: "155px",
		Tablet: "120px",
		Mobile: "65px"
	},
	gap_number: {
		Desktop: "0px",
		Tablet: "0px",
		Mobile: "0px"
	},
	background: ""
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_STYLE_DIMENSION) => void;
}

const WcbCountdownPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { gap_boxes, width_box, gap_number, background } = panelData;
	const { currentDeviceValue: currentGapBox } = getValueFromAttrsResponsives(
		gap_boxes,
		deviceType,
	);

	const { currentDeviceValue: currentWidthBox } = getValueFromAttrsResponsives(
		width_box,
		deviceType,
	);

	const { currentDeviceValue: currentGapNumber } = getValueFromAttrsResponsives(
		gap_number,
		deviceType,
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Boxes", "boostify-blocks")}
		>
			<div className="space-y-5">
				<div>
					<MySpacingSizesControl
						onChange={(data) => {
							setAttr__({
								...panelData,
								gap_boxes: {
									...gap_boxes,
									[deviceType]: data,
								},
							});
						}}
						value={currentGapBox || "40"}
						label={__("Spacing between boxes", "boostify-blocks")}
					/>

					<MySpacingSizesControl
						onChange={(data) => {
							setAttr__({
								...panelData,
								width_box: {
									...width_box,
									[deviceType]: data,
								},
							});
						}}
						value={currentWidthBox || "150"}
						label={__("Width of a box", "boostify-blocks")}
					/>

					<MySpacingSizesControl
						onChange={(data) => {
							setAttr__({
								...panelData,
								gap_number: {
									...gap_number,
									[deviceType]: data,
								},
							});
						}}
						value={currentGapNumber || "0"}
						label={__("Spacing between number and label", "boostify-blocks")}
					/>

				</div>
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanel_StyleDimension;
