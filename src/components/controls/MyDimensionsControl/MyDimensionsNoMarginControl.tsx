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
import MySpacingSizesControl from "../MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";

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

	const { currentDeviceValue: colunmGap } = getValueFromAttrsResponsives(
		colunmGapProps,
		deviceType
	);

	const { currentDeviceValue: rowGap } = getValueFromAttrsResponsives(
		rowGapProps,
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
			<MySpacingSizesControl
				onChange={setRowGrap}
				value={rowGap || "0"}
				label={__("Row Gap", "wcb")}
			/>
			<MySpacingSizesControl
				onChange={setColumnGap}
				value={colunmGap || "0"}
				label={__("Column Gap", "wcb")}
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
