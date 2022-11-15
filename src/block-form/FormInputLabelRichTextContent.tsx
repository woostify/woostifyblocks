import { RichText } from "@wordpress/block-editor";
import React, { FC } from "react";

export interface Props {
	value: string;
	isRequired: boolean;
	className?: string;
}

export const FormInputLabelRichTextContent: FC<Props> = ({
	isRequired,
	value,
	className = "",
}) => {
	return (
		<RichText.Content
			value={value}
			className={`wcb-form__label ${className} ${isRequired ? "required" : ""}`}
			tagName="span"
		/>
	);
};
