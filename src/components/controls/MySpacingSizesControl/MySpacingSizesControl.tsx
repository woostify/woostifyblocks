import React, { FC, useState, useMemo } from "react";
import { __ } from "@wordpress/i18n";
import "./styles.scss";
import SpacingInputControl from "./SpacingInputControl";
import { MyUnit } from "../MyUnitControl";
import MyLabelControl from "../MyLabelControl/MyLabelControl";

export interface Props {
	className?: string;
	label?: string;
	hasResponsive?: boolean;
	units?: MyUnit[];
	minCustomValue?: number;
	value: string;
	onChange: (e: string) => void;
}

const MySpacingSizesControl: FC<Props> = ({
	className = "",
	label = __("Margin bottom", "wcb"),
	hasResponsive = true,
	units,
	minCustomValue,
	value = "1rem",
	onChange = () => {},
}) => {
	return (
		<div className={`MySpacingSizesControl ${className}`}>
			<MyLabelControl hasResponsive={hasResponsive}>{label}</MyLabelControl>
			<SpacingInputControl
				value={value}
				onChange={onChange}
				minCustomValue={minCustomValue}
				units={units}
			/>
		</div>
	);
};

export default MySpacingSizesControl;
