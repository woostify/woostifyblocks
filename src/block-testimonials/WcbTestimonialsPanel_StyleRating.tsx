import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_TESTIMONIALS_PANEL_STYLE_RATING {
	marginBottom: HasResponsive<string>;
	color: string;
	ratingValue: number;
}

export const WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_RATING =
	{
		color: "#FF8B00",
		ratingValue: 5,
		marginBottom: { Desktop: "0.25rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_RATING;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_RATING) => void;
}

const WcbProductsPanel_StyleRating: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_RATING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { color, marginBottom, ratingValue } = panelData;

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
				<RangeControl
					label={__("Rating", "wcb")}
					value={ratingValue}
					onChange={(value = 5) => {
						setAttr__({
							...panelData,
							ratingValue: value,
						});
					}}
					min={1}
					max={5}
				/>

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

				<MyUnitControl
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

export default WcbProductsPanel_StyleRating;
