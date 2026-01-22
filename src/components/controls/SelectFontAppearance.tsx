import { __ } from "@wordpress/i18n";
import { CustomSelectControl } from "@wordpress/components";
import React, { useState, FC } from "react";

export interface FontAppearanceOptionsType extends CustomSelectControl.Option {}

export const FONT_APPEARANCE_OPTIONS: FontAppearanceOptionsType[] = [
	{
		key: "default",
		name: "Default",
		style: { fontWeight: undefined, fontStyle: undefined },
	},
	{
		key: "thin",
		name: "Thin",
		style: { fontWeight: "100", fontStyle: "normal" },
	},
	{
		key: "ExtraLight",
		name: "Extra Light",
		style: { fontWeight: "200", fontStyle: "normal" },
	},
	{
		key: "light",
		name: "Light",
		style: { fontWeight: "300", fontStyle: "normal" },
	},
	{
		key: "Regular",
		name: "Regular",
		style: { fontWeight: "400", fontStyle: "normal" },
	},
	{
		key: "Medium",
		name: "Medium",
		style: { fontWeight: "500", fontStyle: "normal" },
	},
	{
		key: "SemiBold",
		name: "Semi Bold",
		style: { fontWeight: "600", fontStyle: "normal" },
	},
	{
		key: "Bold",
		name: "Bold",
		style: { fontWeight: "700", fontStyle: "normal" },
	},
	{
		key: "ExtraBold",
		name: "Extra Bold",
		style: { fontWeight: "800", fontStyle: "normal" },
	},
	{
		key: "Black",
		name: "Black",
		style: { fontWeight: "900", fontStyle: "normal" },
	},
	//
	{
		key: "thin_italic",
		name: "Thin Italic",
		style: { fontWeight: "100", fontStyle: "italic" },
	},
	{
		key: "ExtraLight_italic",
		name: "Extra Light Italic",
		style: { fontWeight: "200", fontStyle: "italic" },
	},
	{
		key: "light_italic",
		name: "Light Italic",
		style: { fontWeight: "300", fontStyle: "italic" },
	},
	{
		key: "Regular_italic",
		name: "Regular Italic",
		style: { fontWeight: "400", fontStyle: "italic" },
	},
	{
		key: "Medium_italic",
		name: "Medium Italic",
		style: { fontWeight: "500", fontStyle: "italic" },
	},
	{
		key: "SemiBold_italic",
		name: "Semi Bold Italic",
		style: { fontWeight: "600", fontStyle: "italic" },
	},
	{
		key: "Bold_italic",
		name: "Bold Italic",
		style: { fontWeight: "700", fontStyle: "italic" },
	},
	{
		key: "ExtraBold_italic",
		name: "Extra Bold Italic",
		style: { fontWeight: "800", fontStyle: "italic" },
	},
	{
		key: "Black_italic",
		name: "Black Italic",
		style: { fontWeight: "900", fontStyle: "italic" },
	},
];

interface Props {
	onChange: CustomSelectControl.Props["onChange"];
	value: CustomSelectControl.Props["value"];
}

const SelectFontAppearance: FC<Props> = ({ onChange, value }) => {
	return (
		<CustomSelectControl
			//  @ts-ignore
			__nextUnconstrainedWidth
			label={__("Appearance", "boostify-blocks")}
			options={FONT_APPEARANCE_OPTIONS}
			onChange={onChange}
			value={value}
		/>
	);
};

export default SelectFontAppearance;
