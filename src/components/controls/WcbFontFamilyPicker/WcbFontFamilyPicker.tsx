import googleFonts from "./google-fonts.json";
import { __ } from "@wordpress/i18n";
import { loadGoogleFont } from "../../../utils";
import React, { FC, Fragment, useState, useEffect } from "react";
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

	const handleChangeFont = (newFont: string | null) => {
		setFontFamily(newFont || "");
		onChangeFontFamily(newFont || "");
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
			<MyLabelControl>{__("Font Family", "boostify-blocks")}</MyLabelControl>

			<MyCombobox
				value={fontFamily || ""}
				options={FONTS}
				onChange={handleChangeFont}
			/>
		</>
	);
};

export default WcbFontFamilyPicker;
