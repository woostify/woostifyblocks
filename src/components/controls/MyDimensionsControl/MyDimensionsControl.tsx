import React, { FC } from "react";
import {
	RangeControl,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import {
	DimensionSettings,
	MyDimensionsControlData,
	MY_DIMENSIONS_CONTROL_DEMO,
} from "./types";

interface Props {
	className?: string;
	dimensionControl: MyDimensionsControlData;
	setAttrs__dimensions: (data: MyDimensionsControlData) => void;
}

const MyDimensionsControl: FC<Props> = ({
	className = "space-y-5",
	dimensionControl = MY_DIMENSIONS_CONTROL_DEMO,
	setAttrs__dimensions,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const {
		colunmGap: colunmGapProps,
		rowGap: rowGapProps,
		margin: marginProps,
		padding: paddingProps,
	} = dimensionControl;

	const colunmGap =
		colunmGapProps[deviceType] ||
		colunmGapProps.Tablet ||
		colunmGapProps.Desktop;
	const rowGap =
		rowGapProps[deviceType] || rowGapProps.Tablet || rowGapProps.Desktop;
	const margin =
		marginProps[deviceType] || marginProps.Tablet || marginProps.Desktop;
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
	const handleChangeMargin = (value: DimensionSettings) => {
		setAttrs__dimensions({
			...dimensionControl,
			margin: {
				...marginProps,
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

	return (
		<div className={className}>
			<RangeControl
				label={
					<MyLabelControl hasResponsive>{__("Row Gap", "wcb")}</MyLabelControl>
				}
				value={rowGap || 0}
				onChange={setRowGrap}
				min={0}
				max={100}
			/>
			<RangeControl
				label={
					<MyLabelControl hasResponsive>
						{__("Column Gap", "wcb")}
					</MyLabelControl>
				}
				value={colunmGap || 0}
				onChange={setColumnGap}
				min={0}
				max={100}
			/>
			<BoxControl
				label={
					<MyLabelControl hasResponsive>{__("Padding", "wcb")}</MyLabelControl>
				}
				values={padding}
				onChange={handleChangePadding}
			/>
			<BoxControl
				label={
					<MyLabelControl hasResponsive>{__("Margin", "wcb")}</MyLabelControl>
				}
				values={margin}
				onChange={handleChangeMargin}
			/>
		</div>
	);
};

export default MyDimensionsControl;
