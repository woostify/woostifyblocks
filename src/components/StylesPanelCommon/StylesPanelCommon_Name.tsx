import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import MyColorPicker from "../controls/MyColorPicker/MyColorPicker";

export interface WCB_STYLES_PANEL_COMMON_NAME {
	textColor: string;
}

export const WCB_STYLES_PANEL_COMMON_NAME_DEMO: WCB_STYLES_PANEL_COMMON_NAME = {
	textColor: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_STYLES_PANEL_COMMON_NAME;
	setAttr__: (data: WCB_STYLES_PANEL_COMMON_NAME) => void;
}

const StylesPanelCommon_Name: FC<Props> = ({
	panelData = WCB_STYLES_PANEL_COMMON_NAME_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Name", "wcb")}
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
					color={panelData.textColor}
				/>
			</div>
		</PanelBody>
	);
};

export default StylesPanelCommon_Name;
