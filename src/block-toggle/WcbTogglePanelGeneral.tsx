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
import { MyInputAutocomplete } from "./types";

export interface WCB_TOGGLE_PANEL_GENERAL {
	trueState: string;
	falseState: string;
	layout: "square" | "round";
	isDefaultON: boolean;
	isRequired: boolean;
}

export const WCB_TOGGLE_PANEL_GENERAL_DEMO: WCB_TOGGLE_PANEL_GENERAL = {
	isRequired: false,
	falseState: "off",
	trueState: "on",
	isDefaultON: true,
	layout: "round",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TOGGLE_PANEL_GENERAL;
	setAttr__: (data: WCB_TOGGLE_PANEL_GENERAL) => void;
}

const WcbTogglePanelGeneral: FC<Props> = ({
	panelData = WCB_TOGGLE_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { falseState, isDefaultON, isRequired, layout, trueState } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<InputControl
					label={__("TRUE STATE", "boostify-blocks")}
					value={trueState}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, trueState: nextValue });
					}}
				/>
				<InputControl
					label={__("False STATE", "boostify-blocks")}
					value={falseState}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, falseState: nextValue });
					}}
				/>

				<MyRadioGroup
					label={__("Layout", "boostify-blocks")}
					value={layout}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layout: value as WCB_TOGGLE_PANEL_GENERAL["layout"],
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
				<ToggleControl
					label={__("Default state ON", "boostify-blocks")}
					checked={isDefaultON}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, isDefaultON: isChecked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTogglePanelGeneral;
