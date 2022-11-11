import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../MyRadioGroup";

export type TextAlignment = CSSProperties["textAlign"];

interface Props {
	className?: string;
	textAlignment?: TextAlignment;
	onChange?: (select: TextAlignment) => void;
	hasResponsive?: boolean;
}

const MyTextAlignControl: FC<Props> = ({
	onChange,
	textAlignment,
	className,
	hasResponsive,
}) => {
	return (
		<MyRadioGroup
			className={className}
			// @ts-ignore
			onChange={onChange}
			value={textAlignment || ""}
			hasResponsive={hasResponsive}
		/>
	);
};

export default MyTextAlignControl;
