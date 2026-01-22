import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import MyTextColorControl, {
	TextColorControlData,
	TEXT_COLOR_CONTROL_DEMO,
} from "../components/controls/MyTextColorControl/MyTextColorControl";
import MyTextShadowControl, {
	MyTextShadowControlData,
	MY_TEXT_SHADOW_CONTROL_DEMO,
} from "../components/controls/MyTextShadowControl/MyTextShadowControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export interface WCB_HEADING_PANEL_HEADING {
	typography: MyTypographyControlData;
	textColor: TextColorControlData;
	textShadow: MyTextShadowControlData;
	marginBottom: HasResponsive<string>;
}

export const WCB_HEADING_PANEL_HEADING_DEMO: WCB_HEADING_PANEL_HEADING = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
	textColor: TEXT_COLOR_CONTROL_DEMO,
	textShadow: MY_TEXT_SHADOW_CONTROL_DEMO,
	marginBottom: { Desktop: "" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelHeading: WCB_HEADING_PANEL_HEADING;
	setAttr__panelHeading: (data: WCB_HEADING_PANEL_HEADING) => void;
}

const WcbHeadingPanelHeading: FC<Props> = ({
	panelHeading = WCB_HEADING_PANEL_HEADING_DEMO,
	setAttr__panelHeading,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, textShadow, marginBottom } = panelHeading;
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
			title={__("Heading", "boostify-blocks")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__panelHeading({
							...panelHeading,
							typography,
						});
					}}
				/>
				<MyTextColorControl
					textColorControl={textColor}
					setAttrs__textColorControl={(textColor) => {
						setAttr__panelHeading({
							...panelHeading,
							textColor,
						});
					}}
				/>
				<MyTextShadowControl
					textShadowControl={textShadow}
					setAttrs__textShadow={(textShadow) => {
						setAttr__panelHeading({
							...panelHeading,
							textShadow,
						});
					}}
				/>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__panelHeading({
							...panelHeading,
							marginBottom: {
								...marginBottom,
								[deviceType]: value,
							},
						});
					}}
					value={MARGIN_BOTTOM || ""}
					label={__("Margin bottom", "boostify-blocks")}
					hasResponsive
				/>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelHeading;
