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
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorBackgroundColorControl, {
	MyColorBackgroundColorControlData,
	MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
} from "../components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON {
	colorAndBackgroundColor: MyColorBackgroundColorControlData;
	padding: HasResponsive<DimensionSettings>;
	border: MyBorderControlData;
}

export const WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO: WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON =
	{
		colorAndBackgroundColor: MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
		padding: {
			Desktop: {
				top: "10px",
				left: "20px",
				right: "20px",
				bottom: "10px",
			},
		},
		border: MY_BORDER_CONTROL_DEMO,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON;
	setAttr__: (data: WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON) => void;
}

const WcbPostGridPanel_StyleSubmitButton: FC<Props> = ({
	panelData = WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { padding: paddingProps, border, colorAndBackgroundColor } = panelData;

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
			title={__("Submit button", "wcb")}
		>
			<div className="space-y-2.5">
				<MyDisclosure defaultOpen label="Colors">
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
								{__("Padding", "wcb")}
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
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleSubmitButton;
