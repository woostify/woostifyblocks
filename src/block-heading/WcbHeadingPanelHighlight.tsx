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
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
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

export interface WCB_HEADING_PANEL_HIGHLIGHT {
	typography: MyTypographyControlData;
	textColor: string;
	bgColor: string;
	padding: HasResponsive<DimensionSettings>;
	border: MyBorderControlData;
}

export const WCB_HEADING_PANEL_HIGHLIGHT_DEMO: WCB_HEADING_PANEL_HIGHLIGHT = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
	textColor: "",
	bgColor: "",
	padding: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
	border: MY_BORDER_CONTROL_DEMO,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_HEADING_PANEL_HIGHLIGHT;
	setAttr__: (data: WCB_HEADING_PANEL_HIGHLIGHT) => void;
}

const WcbHeadingPanelHighlight: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_HIGHLIGHT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		typography,
		textColor,
		bgColor,
		padding: paddingProps,
		border,
	} = panelData;
	const padding =
		paddingProps[deviceType] || paddingProps.Tablet || paddingProps.Desktop;

	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Highlight", "boostify-blocks")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) =>
						setAttr__({ ...panelData, typography })
					}
				/>
				<MyDisclosure label="Custom styles">
					<MyColorPicker
						label="Color"
						color={textColor}
						onChange={(textColor) => setAttr__({ ...panelData, textColor })}
					/>
					<MyColorPicker
						label="Background"
						color={bgColor}
						onChange={(bgColor) => setAttr__({ ...panelData, bgColor })}
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
				</MyDisclosure>
				<MyDisclosure label="Border">
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(border: MyBorderControlData) => {
							setAttr__({
								...panelData,
								border,
							});
						}}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelHighlight;
