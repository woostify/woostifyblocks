import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { MyInputAutocomplete } from "./types";

export interface WCB_PHONE_PANEL_GENERAL {
	autocomplete: MyInputAutocomplete;
	placeholder: string;
	pattern: string;
	isRequired: boolean;
}

export const WCB_PHONE_PANEL_GENERAL_DEMO: WCB_PHONE_PANEL_GENERAL = {
	autocomplete: "tel-national",
	isRequired: false,
	placeholder: "123 45 678",
	pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PHONE_PANEL_GENERAL;
	setAttr__: (data: WCB_PHONE_PANEL_GENERAL) => void;
}

const WcbPhonePanelGeneral: FC<Props> = ({
	panelData = WCB_PHONE_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { autocomplete, isRequired, placeholder, pattern } = panelData;

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
					<option value="tel-national">{__("Phone", "wcb")}</option>
				</SelectControl>

				<SelectControl
					label={__("Pattern", "wcb")}
					value={pattern}
					onChange={(selection) => {
						setAttr__({
							...panelData,
							pattern: selection,
						});
					}}
					// @ts-ignore
					__nextHasNoMarginBottom
				>
					<option value="">{__("None", "wcb")}</option>
					<option value="[0-9]{3}-?[0-9]{2}-?[0-9]{3}">123-45-678</option>
					<option value="[0-9]{3}-?[0-9]{3}-?[0-9]{4}">123-456-7890</option>
					<option value="[0-9]{3}s?[0-9]{3}s?[0-9]{4}">123 456 7890</option>
				</SelectControl>

				<InputControl
					label={__("PLACEHOLDER", "wcb")}
					value={placeholder}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, placeholder: nextValue });
					}}
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

export default WcbPhonePanelGeneral;
