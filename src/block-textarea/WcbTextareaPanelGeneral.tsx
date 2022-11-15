import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { MyInputAutocomplete } from "./types";

export interface WCB_TEXAREA_PANEL_GENERAL {
	autocomplete: MyInputAutocomplete;
	placeholder: string;
	isRequired: boolean;
	rows: number;
}

export const WCB_TEXAREA_PANEL_GENERAL_DEMO: WCB_TEXAREA_PANEL_GENERAL = {
	autocomplete: "off",
	isRequired: false,
	placeholder: "Textarea",
	rows: 6,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TEXAREA_PANEL_GENERAL;
	setAttr__: (data: WCB_TEXAREA_PANEL_GENERAL) => void;
}

const WcbTextareaPanelGeneral: FC<Props> = ({
	panelData = WCB_TEXAREA_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { autocomplete, isRequired, placeholder, rows } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<SelectControl
					label={__("Autocomplete", "wcb")}
					value={autocomplete}
					onChange={(selection) => {
						setAttr__({
							...panelData,
							autocomplete: selection,
						});
					}}
					// @ts-ignore
					__nextHasNoMarginBottom
				>
					<option value="off">{__("Off", "wcb")}</option>
					<option value="street-address">{__("Address", "wcb")}</option>
				</SelectControl>

				<InputControl
					label={__("PLACEHOLDER", "wcb")}
					value={placeholder}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, placeholder: nextValue });
					}}
				/>

				<RangeControl
					label={__("Number of lines", "wcb")}
					value={rows}
					onChange={(value) => {
						setAttr__({ ...panelData, rows: value || 2 });
					}}
					min={2}
					max={100}
				/>

				<ToggleControl
					label={__("Required", "wcb")}
					checked={isRequired}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, isRequired: isChecked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTextareaPanelGeneral;
