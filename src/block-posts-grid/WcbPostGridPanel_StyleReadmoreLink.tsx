import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorBackgroundColorControl, {
	MyColorBackgroundColorControlData,
	MY_COLOR_BGCOLOR_CONTROL_DEMO,
	MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
} from "../components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl";
import { MyTabsForColor } from "../types";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_POST_GRID_PANEL_STYLE_READMORE_LINK {
	colorAndBackgroundColor: MyColorBackgroundColorControlData;
	typography: MyTypographyControlData;
	padding: HasResponsive<DimensionSettings>;
	border: MyBorderControlData;
	marginBottom: HasResponsive<string>;
}

export const WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO: WCB_POST_GRID_PANEL_STYLE_READMORE_LINK =
	{
		colorAndBackgroundColor: MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
		typography: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		padding: {
			Desktop: {
				top: "10px",
				left: "20px",
				right: "20px",
				bottom: "10px",
			},
		},
		border: MY_BORDER_CONTROL_DEMO,
		marginBottom: { Desktop: "0" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_STYLE_READMORE_LINK;
	setAttr__: (data: WCB_POST_GRID_PANEL_STYLE_READMORE_LINK) => void;
}

const WcbPostGridPanel_StyleReadmoreLink: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		typography,
		padding: paddingProps,
		border,
		colorAndBackgroundColor,
		marginBottom = { Desktop: "1rem" },
	} = panelData;

	const { currentDeviceValue: MARGIN_BOTTOM } = getValueFromAttrsResponsives(
		marginBottom,
		deviceType
	);
	const { currentDeviceValue: padding } = getValueFromAttrsResponsives(
		paddingProps,
		deviceType
	);
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Read more link", "boostify-blocks")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) =>
						setAttr__({ ...panelData, typography })
					}
				/>

				<MyDisclosure defaultOpen label="Color & Background">
					<MyColorBackgroundColorControl
						controlData={colorAndBackgroundColor}
						setAttrs__control={(data) => {
							setAttr__({ ...panelData, colorAndBackgroundColor: data });
						}}
					/>
				</MyDisclosure>

				<MyDisclosure label="Border & Dimensions">
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(border: MyBorderControlData) => {
							setAttr__({
								...panelData,
								border,
							});
						}}
					/>
					<BoxControl
						label={
							<MyLabelControl className="" hasResponsive>
								{__("Padding", "boostify-blocks")}
							</MyLabelControl>
						}
						values={padding}
						onChange={(value: DimensionSettings) => {
							setAttr__({
								...panelData,
								padding: {
									...paddingProps,
									[deviceType]: value,
								},
							});
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
						value={MARGIN_BOTTOM || ""}
						units={MY_GAP_UNITS}
						label={__("Margin bottom", "boostify-blocks")}
						hasResponsive
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleReadmoreLink;
