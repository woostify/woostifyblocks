import googleFonts from "./google-fonts.json";
import { __ } from "@wordpress/i18n";
import { loadGoogleFont } from "../../../utils";
import React, { Fragment, useState } from "react";
import { SelectControl } from "@wordpress/components";

const WcbFontFamilyPicker = (props) => {
	const { selectedFont, onChangeFontFamily } = props;
	const [fontFamily, setFontFamily] = useState("");
	const systemFonts = [
		{ value: "Arial", label: "Arial" },
		{ value: "Helvetica", label: "Helvetica" },
		{ value: "Times New Roman", label: "Times New Roman" },
		{ value: "Georgia", label: "Georgia" },
	];

	const googleFontsList: {
		value: string;
		label: string;
	}[] = [];

	Object.keys(googleFonts).forEach((k) => {
		googleFontsList.push({ value: k, label: k });
	});
	return (
		<div>
			<Fragment>
				<SelectControl
					label={__("Font Family", "wcb")}
					value={fontFamily}
					onChange={(newFont) => {
						setFontFamily(newFont);
						onChangeFontFamily(newFont);
						googleFontsList.some((font) => {
							if (font.value === newFont) {
								loadGoogleFont(newFont);
								return true;
							}
							return false;
						});
						loadGoogleFont("");
					}}
				>
					<option value="">{__("Select font", "wcb")}</option>
					{systemFonts.length > 0 && (
						<optgroup label={__("System fonts", "wcb")}>
							{systemFonts.map((option, index) => (
								<option
									key={`${option.label}-${option.value}-${index}`}
									value={option.value}
								>
									{option.label}
								</option>
							))}
						</optgroup>
					)}
					{googleFontsList.length > 0 && (
						<optgroup label={__("Google fonts", "wcb")}>
							{googleFontsList.map((option, index) => (
								<option
									key={`${option.label}-${option.value}-${index}`}
									value={option.value}
								>
									{option.label}
								</option>
							))}
						</optgroup>
					)}
				</SelectControl>
			</Fragment>
		</div>
	);
};

export default WcbFontFamilyPicker;
