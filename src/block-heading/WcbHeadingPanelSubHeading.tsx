import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import MyTextColorControl, {
	TextColorControlData,
	TEXT_COLOR_CONTROL_DEMO,
} from "../components/controls/MyTextColorControl/MyTextColorControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";

export interface WCB_HEADING_PANEL_SUB_HEADING {
	typography: MyTypographyControlData;
	textColor: TextColorControlData;
}

export const WCB_HEADING_PANEL_SUB_HEADING_DEMO: WCB_HEADING_PANEL_SUB_HEADING =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: TEXT_COLOR_CONTROL_DEMO,
	};

interface Props {
	panelData: WCB_HEADING_PANEL_SUB_HEADING;
	setAttr__: (data: WCB_HEADING_PANEL_SUB_HEADING) => void;
}

const WcbHeadingPanelSubHeading: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_SUB_HEADING_DEMO,
	setAttr__,
}) => {
	const { typography, textColor } = panelData;

	//
	return (
		<PanelBody initialOpen={false} title={__("Sub Heading", "wcb")}>
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
				<MyTextColorControl
					textColorControl={textColor}
					setAttrs__textColorControl={(textColor) => {
						setAttr__({
							...panelData,
							textColor,
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelSubHeading;
