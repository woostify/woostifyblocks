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
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "./types";

interface Props {
	className?: string;
	dimensionControl: MyDimensionsNoGapControlData;
	setAttrs__dimensions: (data: MyDimensionsNoGapControlData) => void;
}

const MyDimensionsNoGapControl: FC<Props> = ({
	className = "space-y-5",
	dimensionControl = MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
	setAttrs__dimensions,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const { margin: marginProps, padding: paddingProps } = dimensionControl;

	const margin =
		marginProps[deviceType] || marginProps.Tablet || marginProps.Desktop;
	const padding =
		paddingProps[deviceType] || paddingProps.Tablet || paddingProps.Desktop;
	//

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
			<BoxControl
				label={
					<MyLabelControl hasResponsive className="">
						{__("Padding", "wcb")}
					</MyLabelControl>
				}
				values={padding}
				onChange={handleChangePadding}
			/>
			<BoxControl
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Margin", "wcb")}
					</MyLabelControl>
				}
				values={margin}
				onChange={handleChangeMargin}
			/>
		</div>
	);
};

export default MyDimensionsNoGapControl;
