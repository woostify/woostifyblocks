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
			title={__("General", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<SelectControl
					label={__("Autocomplete", "boostify-blocks")}
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
					<option value="off">{__("Off", "boostify-blocks")}</option>
					<option value="name">{__("Full Name", "boostify-blocks")}</option>
					<optgroup label={__("Name Breakdown", "boostify-blocks")}>
						<option value="honorific-prefix">{__("Prefix", "boostify-blocks")}</option>
						<option value="given-name">{__("First Name", "boostify-blocks")}</option>
						<option value="additional-name">{__("Middle Name", "boostify-blocks")}</option>
						<option value="family-name">{__("Last Name", "boostify-blocks")}</option>
						<option value="honorific-suffix">{__("Suffix", "boostify-blocks")}</option>
					</optgroup>
					<option value="username">{__("Username", "boostify-blocks")}</option>
					<option value="nickname">{__("Nickname", "boostify-blocks")}</option>
					<option value="organization">{__("Company Name", "boostify-blocks")}</option>
					<option value="organization-title">{__("Job Title", "boostify-blocks")}</option>
					<optgroup label={__("Address Lines", "boostify-blocks")}>
						<option value="address-line1">{__("Address Line 1", "boostify-blocks")}</option>
						<option value="address-line2">{__("Address Line 2", "boostify-blocks")}</option>
						<option value="address-line3">{__("Address Line 3", "boostify-blocks")}</option>
					</optgroup>
					<option value="country-name">{__("Country", "boostify-blocks")}</option>
					<option value="postal-code">{__("Postal / ZIP Code", "boostify-blocks")}</option>
				</SelectControl>

				<InputControl
					label={__("PLACEHOLDER", "boostify-blocks")}
					value={placeholder}
					onChange={(nextValue) => {
						setAttr__({ ...panelData, placeholder: nextValue });
					}}
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

export default WcbInputPanelGeneral;
