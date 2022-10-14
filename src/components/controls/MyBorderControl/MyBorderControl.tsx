import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalBorderBoxControl as BorderBoxControl,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";

import { __ } from "@wordpress/i18n";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import {
	BorderMainSettings,
	BorderRadiusSettings,
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "./types";

interface Props {
	className?: string;
	borderControl: MyBorderControlData;
	setAttrs__border: (data: MyBorderControlData) => void;
}

const MyBorderControl: FC<Props> = ({
	className = "space-y-5",
	borderControl = MY_BORDER_CONTROL_DEMO,
	setAttrs__border,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const {
		mainSettings: mainSettingsProps,
		hoverColor: hoverColorProps,
		radius: radiusProps,
	} = borderControl;

	const handleChangeBorder = (newBorders: BorderMainSettings) => {
		setAttrs__border({
			...borderControl,
			mainSettings: newBorders,
		});
	};
	const handleChangeBorderHoverColor = (hoverColor: string) => {
		setAttrs__border({
			...borderControl,
			hoverColor,
		});
	};
	const handleChangeBorderRadius = (newRadius: BorderRadiusSettings) => {
		setAttrs__border({
			...borderControl,
			radius: { ...radiusProps, [deviceType]: newRadius },
		});
	};

	//
	const RADIUS: BorderRadiusSettings =
		radiusProps[deviceType] || radiusProps.Tablet || radiusProps.Desktop;

	return (
		<div className={className}>
			<BorderBoxControl
				label={__("Border")}
				onChange={handleChangeBorder}
				value={mainSettingsProps}
			/>
			<MyColorPicker
				label={__("Hover border color", "wcb")}
				onChange={handleChangeBorderHoverColor}
				color={hoverColorProps}
			/>

			<div>
				<MyLabelControl hasResponsive>
					{__("Border radius", "wcb")}
				</MyLabelControl>
				<BoxControl
					label=""
					values={RADIUS}
					allowReset={false}
					onChange={handleChangeBorderRadius}
				/>
			</div>
		</div>
	);
};

export default MyBorderControl;
