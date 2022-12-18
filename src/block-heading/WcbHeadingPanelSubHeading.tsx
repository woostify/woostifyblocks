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
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_HEADING_PANEL_SUB_HEADING {
	typography: MyTypographyControlData;
	textColor: TextColorControlData;
	marginBottom: HasResponsive<string>;
}

export const WCB_HEADING_PANEL_SUB_HEADING_DEMO: WCB_HEADING_PANEL_SUB_HEADING =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: TEXT_COLOR_CONTROL_DEMO,
		marginBottom: { Desktop: "" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_HEADING_PANEL_SUB_HEADING;
	setAttr__: (data: WCB_HEADING_PANEL_SUB_HEADING) => void;
}

const WcbHeadingPanelSubHeading: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_SUB_HEADING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, marginBottom } = panelData;
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
			title={__("Sub heading", "wcb")}
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
				<MyTextColorControl
					textColorControl={textColor}
					setAttrs__textColorControl={(textColor) => {
						setAttr__({
							...panelData,
							textColor,
						});
					}}
				/>

				<MySpacingSizesControl
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
					label={__("Margin bottom", "wcb")}
					hasResponsive
				/>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelSubHeading;
