import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_COUNTDOWN_PANEL_STYLE_TITLE {
	typography: MyTypographyControlData;
	textColor: string;
}

export const WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO: WCB_COUNTDOWN_PANEL_STYLE_TITLE = {
	typography: {
		...TYPOGRAPHY_CONTROL_DEMO,
		fontSizes: { 
			Desktop: "14px",
			Tablet: "14px",
			Mobile: "11px" 
		},
		appearance: {
			...TYPOGRAPHY_CONTROL_DEMO.appearance,
			style: {
				...TYPOGRAPHY_CONTROL_DEMO.appearance.style,
				fontWeight: "400",
			},
		},
	},
	textColor: "inherit",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_STYLE_TITLE;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_STYLE_TITLE) => void;
}

const WcbCountdownPanel_StyleTitle: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_STYLE_TITLE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor } = panelData;

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Label", "wcb")}
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
						onChange={(color) => {
							setAttr__({
								...panelData,
								textColor: color,
							});
						}}
						color={textColor}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanel_StyleTitle;
