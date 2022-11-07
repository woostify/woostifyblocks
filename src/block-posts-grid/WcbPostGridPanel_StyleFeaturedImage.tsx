import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";

export interface WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE {
	marginBottom: HasResponsive<string>;
	backgroundOverlay: string;
	overlayOpacity: number;
}

export const WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO: WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE =
	{
		marginBottom: { Desktop: "1rem" },
		backgroundOverlay: "",
		overlayOpacity: 50,
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
	const { marginBottom, backgroundOverlay, overlayOpacity } = panelData;
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

				<RangeControl
					value={overlayOpacity}
					label={
						<MyLabelControl className="" hasResponsive>
							{__("Overlay opacity", "wcb")}
						</MyLabelControl>
					}
					allowReset
					max={100}
					min={0}
					initialPosition={overlayOpacity}
					onChange={(value) => {
						setAttr__({ ...panelData, overlayOpacity: value || 50 });
					}}
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
