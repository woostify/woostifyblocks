import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

export interface WCB_TESTIMONIALS_PANEL_STYLE_COMPANY {
	typography: MyTypographyControlData;
	textColor: string;
}
export const WCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_COMPANY =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "#6b7280",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_COMPANY;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_COMPANY) => void;
}

const WcbTestimonialsPanel_StyleCompany: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_COMPANY_DEMO,
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
			title={__("Company", "wcb")}
		>
			<div className="space-y-5">
				<MyColorPicker
					label={__("Color", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textColor: value,
						});
					}}
					color={textColor}
					disableAlpha
				/>

				<MyTypographyControl
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

export default WcbTestimonialsPanel_StyleCompany;
