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

export interface WCB_HEADING_PANEL_HEADING {
	typography: MyTypographyControlData;
	textColor: TextColorControlData;
	textShadow: MyTextShadowControlData;
}

export const WCB_HEADING_PANEL_HEADING_DEMO: WCB_HEADING_PANEL_HEADING = {
	typography: TYPOGRAPHY_CONTROL_DEMO,
	textColor: TEXT_COLOR_CONTROL_DEMO,
	textShadow: MY_TEXT_SHADOW_CONTROL_DEMO,
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
	const { typography, textColor, textShadow } = panelHeading;

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Heading", "wcb")}
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
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelHeading;
