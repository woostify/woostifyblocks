import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE {
	marginBottom: HasResponsive<string>;
	backgroundOverlay: string;
}

export const WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO: WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE =
	{
		marginBottom: { Desktop: "0" },
		backgroundOverlay: "#FFFFFFE6",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE;
	setAttr__: (data: WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE) => void;
}

const WcbPostGridPanel_StyleFeaturedImage: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { marginBottom, backgroundOverlay } = panelData;
	const MARGIN_BOTTOM =
		marginBottom[deviceType] || marginBottom.Tablet || marginBottom.Desktop;
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Featured image", "wcb")}
		>
			<div className="space-y-5">
				<MyColorPicker
					label={__("Background overlay", "wcb")}
					onChange={(color) => {
						setAttr__({
							...panelData,
							backgroundOverlay: color,
						});
					}}
					color={backgroundOverlay}
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
					value={MARGIN_BOTTOM}
					units={MY_GAP_UNITS}
					label={__("Margin bottom", "wcb")}
					hasResponsive
					className="flex-col space-y-2"
				/>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleFeaturedImage;
