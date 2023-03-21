import React, { FC, useEffect, useState } from "react";
import { ComboboxControl } from "@wordpress/components";

interface MyComboboxItem {
	label: string;
	value: string;
}
interface Props {
	options: MyComboboxItem[];
	value: string;
	onChange: (value: string) => void;
	label?: string;
}

const MyComboboxControl: FC<Props> = ({ onChange, options, value, label }) => {
	const [fontSize, setFontSize] = useState(value || "");
	const [filteredOptions, setFilteredOptions] = useState(options);

	useEffect(() => {
		setFontSize(value || "");
	}, [value]);

	return (
		<ComboboxControl
			label={label}
			value={fontSize}
			onChange={(value) => {
				setFontSize(value || "");
				onChange(value || "");
			}}
			options={filteredOptions}
			onFilterValueChange={(inputValue) =>
				setFilteredOptions(
					options.filter((option) =>
						option.label.toLowerCase().startsWith(inputValue.toLowerCase())
					)
				)
			}
		/>
	);
};

export default MyComboboxControl;
