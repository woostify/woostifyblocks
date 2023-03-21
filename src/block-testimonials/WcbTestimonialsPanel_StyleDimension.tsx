import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import React, { FC } from "react";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export interface WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION {
	padding: HasResponsive<DimensionSettings>;
}
export const WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION =
	{
		padding: {
			Desktop: {
				top: "1rem",
				left: "1rem",
				right: "1rem",
				bottom: "1rem",
			},
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION) => void;
}

const WcbTestimonialsPanel_StyleDimension: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_DIMENSION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { padding } = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Dimension", "wcb")}
		>
			<div className="space-y-5">
				<BoxControl
					label={
						<MyLabelControl className="" hasResponsive>
							{__("Padding", "wcb")}
						</MyLabelControl>
					}
					values={currentPadding}
					onChange={(value: DimensionSettings) => {
						setAttr__({
							...panelData,
							padding: {
								...padding,
								[deviceType]: value,
							},
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleDimension;
