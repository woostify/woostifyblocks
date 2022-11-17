import React, { FC } from "react";
import { useState, useMemo, useEffect } from "@wordpress/element";
import {
	RangeControl,
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
	// @ts-ignore
	__experimentalParseQuantityAndUnitFromRawValue as parseQuantityAndUnitFromRawValue,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { MY_GAP_UNITS } from "../MyDimensionsControl/MyDimensionsControl";
import { MyUnit } from "../MyUnitControl";

const MY_CUSTOM_UNITS_VALUE_SETTINGS = {
	px: { max: 300, steps: 1 },
	"%": { max: 100, steps: 1 },
	vw: { max: 100, steps: 1 },
	vh: { max: 100, steps: 1 },
	em: { max: 10, steps: 0.1 },
	rm: { max: 10, steps: 0.1 },
	rem: { max: 10, steps: 0.1 },
};

interface Props {
	className?: string;
	value: string;
	onChange: (value: string) => void;
	minCustomValue?: number;
	units?: MyUnit[];
}

const SpacingInputControl: FC<Props> = ({
	value = "10px",
	onChange,
	minCustomValue = 0,
	units = MY_GAP_UNITS,
	className = "",
}) => {
	const [currentValue, setCurrentValue] = useState(value);

	useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	const selectedUnit =
		useMemo(
			() => parseQuantityAndUnitFromRawValue(currentValue),
			[currentValue]
		)[1] || units[0].value;

	const customRangeValue = parseFloat(currentValue ?? "10");

	const handleCustomValueSliderChange = (next: number) => {
		const newValue = [next, selectedUnit].join("");
		onChange(newValue);
		setCurrentValue(newValue);
	};

	return (
		<div className={`${className} flex items-center space-x-2.5`}>
			<div className="flex-[1.5]">
				<RangeControl
					value={customRangeValue}
					min={minCustomValue}
					max={
						MY_CUSTOM_UNITS_VALUE_SETTINGS[
							selectedUnit as keyof typeof MY_CUSTOM_UNITS_VALUE_SETTINGS
						].max
					}
					step={
						MY_CUSTOM_UNITS_VALUE_SETTINGS[
							selectedUnit as keyof typeof MY_CUSTOM_UNITS_VALUE_SETTINGS
						].steps
					}
					withInputField={false}
					onChange={handleCustomValueSliderChange}
					className="m-0"
				/>
			</div>
			<div className="flex-1">
				<UnitControl
					onChange={(newSize: string) => {
						setCurrentValue(newSize);
						onChange(newSize);
					}}
					value={currentValue}
					units={units}
					min={minCustomValue}
					hideLabelFromVision={true}
					// size={"__unstable-large"}
				/>
			</div>
		</div>
	);
};

export default SpacingInputControl;