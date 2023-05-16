import React, { FC } from "react";
import { useMemo } from "@wordpress/element";
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

export const MY_CUSTOM_UNITS_VALUE_SETTINGS = {
	px: { max: 1000, steps: 1 },
	"%": { max: 100, steps: 1 },
	vw: { max: 100, steps: 1 },
	vh: { max: 100, steps: 1 },
	em: { max: 50, steps: 0.1 },
	rm: { max: 50, steps: 0.1 },
	rem: { max: 50, steps: 0.1 },
};

export const MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE = {
	px: { max: 2000, steps: 1 },
	"%": { max: 100, steps: 1 },
	vw: { max: 100, steps: 1 },
	vh: { max: 100, steps: 1 },
	em: { max: 100, steps: 0.1 },
	rm: { max: 100, steps: 0.1 },
	rem: { max: 100, steps: 0.1 },
};

export interface SpacingInputControlProps {
	className?: string;
	value: string;
	onChange: (value: string) => void;
	minCustomValue?: number;
	units?: MyUnit[];
	customUnitsValueSettings?: typeof MY_CUSTOM_UNITS_VALUE_SETTINGS;
}

const SpacingInputControl: FC<SpacingInputControlProps> = ({
	value = "10px",
	onChange,
	minCustomValue = 0,
	units = MY_GAP_UNITS,
	className = "",
	customUnitsValueSettings = MY_CUSTOM_UNITS_VALUE_SETTINGS,
}) => {
	const selectedUnit =
		useMemo(() => parseQuantityAndUnitFromRawValue(value), [value])[1] ||
		units[0].value;

	const customRangeValue = parseFloat(value ?? "10");

	const handleCustomValueSliderChange = (next: number) => {
		const newValue = [next, selectedUnit].join("");
		onChange(newValue);
	};

	return (
		<div className={`${className} flex items-center space-x-2.5`}>
			<div className="flex-[1.5]">
				<RangeControl
					value={customRangeValue}
					min={minCustomValue}
					max={
						customUnitsValueSettings[
							selectedUnit as keyof typeof customUnitsValueSettings
						].max
					}
					step={
						customUnitsValueSettings[
							selectedUnit as keyof typeof customUnitsValueSettings
						].steps
					}
					// @ts-ignore
					withInputField={false}
					onChange={handleCustomValueSliderChange}
					className="m-0"
				/>
			</div>
			<div className="flex-1">
				<UnitControl
					onChange={(newSize: string, ...props) => {
						onChange(newSize);
					}}
					placeholder={`${parseInt(value || "")}`}
					value={value}
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
