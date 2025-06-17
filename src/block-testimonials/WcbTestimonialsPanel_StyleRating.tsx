import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export const WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_RATING =
	{
		color: "#FF8B00",
		marginBottom: { Desktop: "0.25rem" },
	};
export interface WCB_TESTIMONIALS_PANEL_STYLE_RATING {
	marginBottom: HasResponsive<string>;
	color: string;
}

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_RATING;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_RATING) => void;
}

const WcbTestimonialsPanel_StyleRating: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { color, marginBottom } = panelData;

	const { currentDeviceValue: MARGIN_BOTTOM } = getValueFromAttrsResponsives(
		marginBottom,
		deviceType
	);

	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Rating", "wcb")}
		>
			<div className="space-y-2.5">

				<MyColorPicker
					label={__("Color", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							color: value,
						});
					}}
					color={color}
				/>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							marginBottom: {
								...marginBottom,
								[deviceType]: value,
							},
						});
					}}
					value={MARGIN_BOTTOM || ""}
					units={MY_GAP_UNITS}
					label={__("Margin bottom", "wcb")}
					hasResponsive
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleRating;
