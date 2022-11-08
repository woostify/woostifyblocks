import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import {
	DimensionSettings,
	MyDimensionsNoMarginControlData,
	MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
} from "./types";
import MyUnitControl from "../MyUnitControl";

interface Props {
	className?: string;
	dimensionControl: MyDimensionsNoMarginControlData;
	setAttrs__dimensions: (data: MyDimensionsNoMarginControlData) => void;
	paddingLabel?: string;
}

const MyDimensionsNoMarginControl: FC<Props> = ({
	className = "space-y-5",
	dimensionControl = MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
	setAttrs__dimensions,
	paddingLabel = __("Padding", "wcb"),
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const {
		colunmGap: colunmGapProps,
		rowGap: rowGapProps,
		padding: paddingProps,
	} = dimensionControl;

	const colunmGap =
		colunmGapProps[deviceType] ||
		colunmGapProps.Tablet ||
		colunmGapProps.Desktop;
	const rowGap =
		rowGapProps[deviceType] || rowGapProps.Tablet || rowGapProps.Desktop;

	const padding =
		paddingProps[deviceType] || paddingProps.Tablet || paddingProps.Desktop;
	//
	const setRowGrap = (value: number) => {
		setAttrs__dimensions({
			...dimensionControl,
			rowGap: {
				...rowGapProps,
				[deviceType]: value,
			},
		});
	};
	const setColumnGap = (value: number) => {
		setAttrs__dimensions({
			...dimensionControl,
			colunmGap: {
				...colunmGapProps,
				[deviceType]: value,
			},
		});
	};

	const handleChangePadding = (value: DimensionSettings) => {
		setAttrs__dimensions({
			...dimensionControl,
			padding: {
				...paddingProps,
				[deviceType]: value,
			},
		});
	};

	const MY_GAP_UNITS = [
		{ value: "px", label: "px", default: 32 },
		{ value: "rem", label: "rem", default: 2 },
	];

	return (
		<div className={className}>
			<MyUnitControl
				onChange={setRowGrap}
				value={rowGap}
				units={MY_GAP_UNITS}
				label={__("Row Gap", "wcb")}
				hasResponsive
			/>

			<MyUnitControl
				onChange={setColumnGap}
				value={colunmGap}
				units={MY_GAP_UNITS}
				label={__("Column Gap", "wcb")}
				hasResponsive
			/>

			<BoxControl
				label={
					<MyLabelControl className="" hasResponsive>
						{paddingLabel}
					</MyLabelControl>
				}
				values={padding}
				onChange={handleChangePadding}
			/>
		</div>
	);
};

export default MyDimensionsNoMarginControl;