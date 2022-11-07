import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
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

export interface WCB_POST_GRID_PANEL_STYLE_META {
	typography: MyTypographyControlData;
	textColor: string;
	taxonomyTextColor: string;
	taxonomyBgColor: string;
	marginBottom: HasResponsive<string>;
}

export const WCB_POST_GRID_PANEL_STYLE_META_DEMO: WCB_POST_GRID_PANEL_STYLE_META =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "",
		taxonomyBgColor: "",
		taxonomyTextColor: "",
		marginBottom: { Desktop: "1rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_STYLE_META;
	setAttr__: (data: WCB_POST_GRID_PANEL_STYLE_META) => void;
}

const WcbPostGridPanel_StyleMeta: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_STYLE_META_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		typography,
		textColor,
		marginBottom,
		taxonomyBgColor,
		taxonomyTextColor,
	} = panelData;
	const MARGIN_BOTTOM =
		marginBottom[deviceType] || marginBottom.Tablet || marginBottom.Desktop;
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Meta", "wcb")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>

				<MyDisclosure defaultOpen label="More styles">
					<MyColorPicker
						label={__("Meta color", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								textColor: color,
							});
						}}
						color={textColor}
					/>

					<MyColorPicker
						label={__("Taxonomy color", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								taxonomyTextColor: color,
							});
						}}
						color={taxonomyTextColor}
					/>

					<MyColorPicker
						label={__("Taxonomy background", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								taxonomyBgColor: color,
							});
						}}
						color={taxonomyBgColor}
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
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleMeta;
