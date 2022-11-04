import googleFonts from "./google-fonts.json";
import { __ } from "@wordpress/i18n";
import { loadGoogleFont } from "../../../utils";
import React, { FC, Fragment, useState, useEffect } from "react";
import { SelectControl } from "@wordpress/components";
import MyCombobox from "../MyCombobox";
import MyLabelControl from "../MyLabelControl/MyLabelControl";

interface Props {
	onChangeFontFamily: (font: string) => void;
	selectedFont?: string;
}

const WcbFontFamilyPicker: FC<Props> = ({
	onChangeFontFamily,
	selectedFont,
}) => {
	const [fontFamily, setFontFamily] = useState(selectedFont);
	useEffect(() => {
		setFontFamily(selectedFont);
	}, [selectedFont]);

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

	const handleChangeFont = (newFont: string) => {
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
	};

	const FONTS = [
		{
			value: "",
			label: "Default",
		},
		...systemFonts,
		...googleFontsList,
	];
	return (
		<>
			<MyLabelControl>{__("Font Family", "wcb")}</MyLabelControl>
			<MyCombobox
				value={FONTS.filter((item) => item.value === fontFamily)[0]}
				options={FONTS}
				onChange={handleChangeFont}
			/>

			{/* <SelectControl
					label={__("Font Family", "wcb")}
					value={fontFamily}
					onChange={handleChangeFont}
				>
					<option value="">{__("Default", "wcb")}</option>
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
				</SelectControl> */}
		</>
	);
};

export default WcbFontFamilyPicker;
