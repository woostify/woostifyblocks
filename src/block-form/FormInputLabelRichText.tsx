import { RichText } from "@wordpress/block-editor";
import React, { FC } from "react";

export interface Props {
	value: string;
	isRequired: boolean;
	className?: string;
	onChange: (value: string) => void;
}

export const FormInputLabelRichText: FC<Props> = ({
	isRequired,
	value,
	className = "",
	onChange,
}) => {
	return (
		<RichText
			onChange={onChange}
			value={value}
			className={`wcb-form__label ${className} ${isRequired ? "required" : ""}`}
			tagName="span"
		/>
	);
};
