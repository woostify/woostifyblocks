import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../MyRadioGroup";

export type TextAlignment = CSSProperties["textAlign"];

interface Props {
	className?: string;
	textAlignment?: TextAlignment;
	onChange?: (select: TextAlignment) => void;
	hasResponsive?: boolean;
	label?: string;
}

const MyTextAlignControl: FC<Props> = ({
	onChange,
	textAlignment,
	className,
	hasResponsive,
	label = __("Alignment", "boostify-blocks"),
}) => {
	return (
		<MyRadioGroup
			className={className}
			// @ts-ignore
			onChange={onChange}
			value={textAlignment || ""}
			hasResponsive={hasResponsive}
			label={label}
		/>
	);
};

export default MyTextAlignControl;
