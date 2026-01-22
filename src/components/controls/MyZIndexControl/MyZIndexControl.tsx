import { FormToggle, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import { HasResponsive } from "../MyBackgroundControl/types";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";

export type MyZIndexControlData = HasResponsive<number | undefined>;
export const Z_INDEX_DEMO: MyZIndexControlData = {
	Desktop: undefined,
};

interface Props {
	className?: string;
	zIndexControl: MyZIndexControlData;
	setAttrs__zIndex: (data: MyZIndexControlData) => void;
}
const MyZIndexControl: FC<Props> = ({
	className = "space-y-3",
	zIndexControl = Z_INDEX_DEMO,
	setAttrs__zIndex,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const Z_INDEX =
		zIndexControl[deviceType] !== undefined
			? zIndexControl[deviceType]
			: zIndexControl.Tablet !== undefined
			? zIndexControl.Tablet
			: zIndexControl.Desktop;

	const handleChangeZIndex = (value: number) => {
		setAttrs__zIndex({
			...zIndexControl,
			[deviceType]: value,
		});
	};

	return (
		<div className={className}>
			<RangeControl
				help={__(
					"Above setting will only take effect once you are on the live page, and not while you're editing.",
					"boostify-blocks"
				)}
				// @ts-ignore
				value={undefined}
				label={
					<MyLabelControl className="" hasResponsive>
						{__("Z-Index", "boostify-blocks")}
					</MyLabelControl>
				}
				allowReset
				max={1000}
				min={-100}
				initialPosition={Z_INDEX}
				onChange={handleChangeZIndex}
			/>
		</div>
	);
};

export default MyZIndexControl;
