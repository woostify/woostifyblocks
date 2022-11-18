import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { MyInputAutocomplete } from "./types";

export interface WCB_INPUT_PANEL_GENERAL {
	autocomplete: MyInputAutocomplete;
	placeholder: string;
	isRequired: boolean;
}

export const WCB_INPUT_PANEL_GENERAL_DEMO: WCB_INPUT_PANEL_GENERAL = {
	autocomplete: "name",
	isRequired: false,
	placeholder: "Firt name",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_INPUT_PANEL_GENERAL;
	setAttr__: (data: WCB_INPUT_PANEL_GENERAL) => void;
}

const WcbInputPanelGeneral: FC<Props> = ({
	panelData = WCB_INPUT_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { autocomplete, isRequired, placeholder } = panelData;

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
					<option value="name">{__("Full Name", "wcb")}</option>
					<optgroup label={__("Name Breakdown", "wcb")}>
						<option value="honorific-prefix">{__("Prefix", "wcb")}</option>
						<option value="given-name">{__("First Name", "wcb")}</option>
						<option value="additional-name">{__("Middle Name", "wcb")}</option>
						<option value="family-name">{__("Last Name", "wcb")}</option>
						<option value="honorific-suffix">{__("Suffix", "wcb")}</option>
					</optgroup>
					<option value="username">{__("Username", "wcb")}</option>
					<option value="nickname">{__("Nickname", "wcb")}</option>
					<option value="organization">{__("Company Name", "wcb")}</option>
					<option value="organization-title">{__("Job Title", "wcb")}</option>
					<optgroup label={__("Address Lines", "wcb")}>
						<option value="address-line1">{__("Address Line 1", "wcb")}</option>
						<option value="address-line2">{__("Address Line 2", "wcb")}</option>
						<option value="address-line3">{__("Address Line 3", "wcb")}</option>
					</optgroup>
					<option value="country-name">{__("Country", "wcb")}</option>
					<option value="postal-code">{__("Postal / ZIP Code", "wcb")}</option>
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

export default WcbInputPanelGeneral;
