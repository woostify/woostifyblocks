import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_COUNTDOWN_PANEL_STYLE_NUMBER {
	typography: MyTypographyControlData;
	textColor: string;
	marginBottom: HasResponsive<string>;
}

export const WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO: WCB_COUNTDOWN_PANEL_STYLE_NUMBER = {
	typography: {
		...TYPOGRAPHY_CONTROL_DEMO,
		fontSizes: { Desktop: "56px" },
		appearance: {
			...TYPOGRAPHY_CONTROL_DEMO.appearance,
			style: {
				...TYPOGRAPHY_CONTROL_DEMO.appearance.style,
				fontWeight: "400",
			},
		},
	},
	textColor: "inherit",
	marginBottom: { Desktop: "1px" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_STYLE_NUMBER;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_STYLE_NUMBER) => void;
}

const WcbCountdownPanel_StyleNumber: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO,
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
			title={__("Number", "wcb")}
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
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanel_StyleNumber;
