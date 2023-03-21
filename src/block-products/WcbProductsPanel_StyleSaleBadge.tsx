import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyDisclosure from "../components/controls/MyDisclosure";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE {
	typography: MyTypographyControlData;
	textColor: string;
	backgroundColor: string;
	marginBottom: HasResponsive<string>;
}

export const WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE =
	{
		typography: {
			...TYPOGRAPHY_CONTROL_DEMO,
			fontSizes: { Desktop: "12px" },
			textDecoration: "none",
			appearance: {
				...TYPOGRAPHY_CONTROL_DEMO.appearance,
				style: {
					...TYPOGRAPHY_CONTROL_DEMO.appearance.style,
					fontWeight: "500",
				},
			},
		},
		backgroundColor: "#0c4a6e",
		textColor: "#f0f9ff",
		marginBottom: { Desktop: "0.65rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE;
	setAttr__: (data: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE) => void;
}

const WcbProductsPanel_StyleSaleBadge: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, marginBottom, backgroundColor } = panelData;

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
			title={__("Sale badge", "wcb")}
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
						label={__("Color", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								textColor: color,
							});
						}}
						color={textColor}
					/>

					<MyColorPicker
						label={__("Background", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								backgroundColor: color,
							});
						}}
						color={backgroundColor}
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
						className="flex-col space-y-2"
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanel_StyleSaleBadge;
