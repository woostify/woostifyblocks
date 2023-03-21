import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";

export interface WCB_BUTTONS_PANEL_STYLE_TEXT {
	typography: MyTypographyControlData;
}

export const WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO: WCB_BUTTONS_PANEL_STYLE_TEXT = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTONS_PANEL_STYLE_TEXT;
	setAttr__: (data: WCB_BUTTONS_PANEL_STYLE_TEXT) => void;
}

const WcbButtonsPanel_StyleText: FC<Props> = ({
	panelData = WCB_BUTTONS_PANEL_STYLE_TEXT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography } = panelData;
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Text", "wcb")}
		>
			<div className={"space-y-4"}>
				<MyTypographyControl
					disclosureDefaultOpen
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonsPanel_StyleText;
