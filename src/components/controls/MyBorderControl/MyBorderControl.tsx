import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";
// @ts-ignore
import { __experimentalBorderRadiusControl as BorderRadiusControl } from "@wordpress/block-editor";
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
	className = "space-y-4",
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
				colors={[]}
				enableAlpha={false}
				// enableStyle={ showBorderStyle }
				popoverOffset={40}
				popoverPlacement="left-start"
				__experimentalHasMultipleOrigins={true}
				__experimentalIsRenderedInSidebar={true}
				size={"__unstable-large"}
				className="wcb-BorderBoxControl"
			/>

			<MyColorPicker
				label={__("Hover border color", "wcb")}
				onChange={handleChangeBorderHoverColor}
				color={hoverColorProps}
			/>

			<div className="MyBorderControl__BorderRadiusControl">
				<MyLabelControl className="mb-2" hasResponsive>
					{__("Border radius", "wcb")}
				</MyLabelControl>
				<BorderRadiusControl
					values={RADIUS}
					onChange={(value) => {
						handleChangeBorderRadius(value);
					}}
					label={""}
					// label={
					// 	<MyLabelControl className="" hasResponsive>
					// 		{__("Border radius", "wcb")}
					// 	</MyLabelControl>
					// }
				/>
			</div>
		</div>
	);
};

export default MyBorderControl;
