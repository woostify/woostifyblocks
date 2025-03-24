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
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_POST_GRID_PANEL_STYLE_META {
	authorTypography: MyTypographyControlData;
	dateTypography: MyTypographyControlData;
	authorColor: string;
	dateTextColor: string;
	marginBottom: HasResponsive<string>;
}

export const WCB_POST_GRID_PANEL_STYLE_META_DEMO: WCB_POST_GRID_PANEL_STYLE_META =
	{
		authorTypography: {
			...TYPOGRAPHY_CONTROL_DEMO,
			fontSizes: { Desktop: "14px" },
			textDecoration: "none",
			appearance: {
				...TYPOGRAPHY_CONTROL_DEMO.appearance,
				style: {
					...TYPOGRAPHY_CONTROL_DEMO.appearance.style,
					fontWeight: "500",
				},
			},
		},
		dateTypography: {
			...TYPOGRAPHY_CONTROL_DEMO,
			fontSizes: { Desktop: "14px" },
		},
		authorColor: "#171717",
		dateTextColor: "#a3a3a3",
		marginBottom: { Desktop: "2rem" },
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
		authorTypography,
		dateTypography,
		authorColor,
		dateTextColor,
		marginBottom,
	} = panelData;

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
			title={__("Meta", "wcb")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					label="Author typography"
					typographyControl={authorTypography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							authorTypography: typography,
						});
					}}
				/>
				<MyTypographyControl
					label="Date typography"
					typographyControl={dateTypography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							dateTypography: typography,
						});
					}}
				/>

				<MyDisclosure defaultOpen label="More styles">
					<MyColorPicker
						label={__("Author color", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								authorColor: color,
							});
						}}
						color={authorColor}
					/>
					<MyColorPicker
						label={__("Date/comment color", "wcb")}
						onChange={(color) => {
							setAttr__({
								...panelData,
								dateTextColor: color,
							});
						}}
						color={dateTextColor}
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

export default WcbPostGridPanel_StyleMeta;
