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

export interface WCB_URL_PANEL_GENERAL {
	autocomplete: MyInputAutocomplete;
	placeholder: string;
	isRequired: boolean;
}

export const WCB_URL_PANEL_GENERAL_DEMO: WCB_URL_PANEL_GENERAL = {
	autocomplete: "url",
	isRequired: false,
	placeholder: "https/example.net",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_URL_PANEL_GENERAL;
	setAttr__: (data: WCB_URL_PANEL_GENERAL) => void;
}

const WcbUrlPanelGeneral: FC<Props> = ({
	panelData = WCB_URL_PANEL_GENERAL_DEMO,
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
					<option value="url">{__("Url", "wcb")}</option>
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

export default WcbUrlPanelGeneral;
