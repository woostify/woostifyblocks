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
	MyDimensionsControlData,
	MY_DIMENSIONS_CONTROL_DEMO,
} from "./types";
import MySpacingSizesControl from "../MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";

interface Props {
	className?: string;
	dimensionControl: MyDimensionsControlData;
	setAttrs__dimensions: (data: MyDimensionsControlData) => void;
}

export const MY_GAP_UNITS = [
	{ value: "px", label: "px", default: 32, step: 1 },
	{ value: "rem", label: "rem", default: 2, step: 0.01 },
	{ value: "em", label: "em", default: 2, step: 0.01 },
	{ value: "%", label: "%", default: 50, step: 0.1 },
];

export const MY_HORIZOLTAL_UNITS = [
	{ value: "px", label: "px", default: 32, step: 1 },
	{ value: "rem", label: "rem", default: 2, step: 0.01 },
	{ value: "em", label: "em", default: 2, step: 0.01 },
	{ value: "%", label: "%", default: 20, step: 0.1 },
	{ value: "vw", label: "vw", default: 20, step: 0.1 },
];
export const MY_VERTICAL_UNITS = [
	{ value: "px", label: "px", default: 32, step: 1 },
	{ value: "rem", label: "rem", default: 2, step: 0.01 },
	{ value: "em", label: "em", default: 2, step: 0.01 },
	{ value: "%", label: "%", default: 20, step: 0.1 },
	{ value: "vh", label: "vh", default: 20, step: 0.1 },
];

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

	const { currentDeviceValue: colunmGap } = getValueFromAttrsResponsives(
		colunmGapProps,
		deviceType
	);

	const { currentDeviceValue: rowGap } = getValueFromAttrsResponsives(
		rowGapProps,
		deviceType
	);

	const { currentDeviceValue: margin } = getValueFromAttrsResponsives(
		marginProps,
		deviceType
	);

	const { currentDeviceValue: padding } = getValueFromAttrsResponsives(
		paddingProps,
		deviceType
	);

	//
	const setRowGrap = (value: string) => {
		setAttrs__dimensions({
			...dimensionControl,
			rowGap: {
				...rowGapProps,
				[deviceType]: value,
			},
		});
	};
	const setColumnGap = (value: string) => {
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
			<MySpacingSizesControl
				onChange={setRowGrap}
				value={rowGap || "0"}
				label={__("Row Gap", "boostify-blocks")}
			/>
			<MySpacingSizesControl
				onChange={setColumnGap}
				value={colunmGap || "0"}
				label={__("Column Gap", "boostify-blocks")}
			/>

			<BoxControl
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Padding", "boostify-blocks")}
					</MyLabelControl>
				}
				values={padding}
				onChange={handleChangePadding}
			/>
			<BoxControl
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Margin", "boostify-blocks")}
					</MyLabelControl>
				}
				values={margin}
				onChange={handleChangeMargin}
				inputProps={{ min: -2000 }}
			/>
		</div>
	);
};

export default MyDimensionsControl;
