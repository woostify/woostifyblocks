import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../components/controls/MyRadioGroup";

export interface WCB_RADIO_PANEL_GENERAL {
	isRequired: boolean;
	layout: "square" | "round";
}

export const WCB_RADIO_PANEL_GENERAL_DEMO: WCB_RADIO_PANEL_GENERAL = {
	isRequired: false,
	layout: "round",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_RADIO_PANEL_GENERAL;
	setAttr__: (data: WCB_RADIO_PANEL_GENERAL) => void;
}

const WcbRadioPanelGeneral: FC<Props> = ({
	panelData = WCB_RADIO_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isRequired, layout } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<MyRadioGroup
					label={__("Layout", "boostify-blocks")}
					value={layout}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layout: value as WCB_RADIO_PANEL_GENERAL["layout"],
						});
					}}
					plans={[
						{ name: "square", icon: "Square" },
						{ name: "round", icon: "Round" },
					]}
					hasResponsive={false}
				/>
				<ToggleControl
					label={__("Required", "boostify-blocks")}
					checked={isRequired}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, isRequired: isChecked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbRadioPanelGeneral;
