import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_COUNTDOWN_PANEL_STYLE_NUMBER {
	typography: MyTypographyControlData;
	textColor: string;
}

export const WCB_COUNTDOWN_PANEL_STYLE_NUMBER_DEMO: WCB_COUNTDOWN_PANEL_STYLE_NUMBER = {
	typography: {
		...TYPOGRAPHY_CONTROL_DEMO,
		fontSizes: {
			Desktop: "56px",
			Tablet: "38px",
			Mobile: "20px"
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
	const { typography, textColor } = panelData;

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Number", "boostify-blocks")}
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

export default WcbCountdownPanel_StyleNumber;
