import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import MyLabelControl from "./MyLabelControl/MyLabelControl";
import { __ } from "@wordpress/i18n";

export interface MyUnit {
	value: string;
	label: string;
	default?: string | number;
}

interface Props {
	className?: string;
	units?: MyUnit[];
	label?: string;
	hasResponsive?: boolean;
	onChange: (value: string) => void;
	value: string;
}

const MyUnitControl: FC<Props> = ({
	className = "",
	label = __("Column Gap", "boostify-blocks"),
	hasResponsive,
	onChange,
	value,
	units = [
		{ value: "px", label: "px", default: 32 },
		{ value: "rem", label: "rem", default: 2 },
		{ value: "%", label: "%", default: 10 },
	],
}) => {
	return (
		<div className={`flex items-center justify-center space-x-2`}>
			<MyLabelControl className="flex-[2.2]" hasResponsive={hasResponsive}>
				{label}
			</MyLabelControl>
			<div className="flex-1">
				<UnitControl
					onChange={onChange}
					value={value}
					label=""
					units={units}
					// size={"__unstable-large"}
				/>
			</div>
		</div>
	);
};

export default MyUnitControl;
