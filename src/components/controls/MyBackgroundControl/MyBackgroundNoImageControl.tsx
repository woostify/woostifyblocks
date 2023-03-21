import {
	PanelRow,
	// @ts-ignore
	GradientPicker,
} from "@wordpress/components";
import React, { FC, ComponentType } from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import { __ } from "@wordpress/i18n";
import { PaintBrushIcon, FunnelIcon } from "@heroicons/react/24/outline";

import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import { BackgroundType, GRADIENT_DEFAULT } from "../MyBackgroundControl/types";

const BG_TYPES_PLANS: {
	name: BackgroundType;
	icon: ComponentType<any>;
}[] = [
	{ name: "color", icon: PaintBrushIcon },
	{ name: "gradient", icon: FunnelIcon },
];

export interface BackgroundNoImageControlData {
	bgType: BackgroundType;
	gradient: string;
	color: string;
}

interface Props {
	className?: string;
	backgroundControl: BackgroundNoImageControlData;
	setAttrs__backgroundControl: (data: BackgroundNoImageControlData) => void;
	bgTypesPlans?: typeof BG_TYPES_PLANS;
}

export const STYLES_BG_NO_IMAGE_DEMO: BackgroundNoImageControlData = {
	bgType: "color",
	color: "",
	gradient:
		"linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)",
};

const MyBackgroundNoImageControl: FC<Props> = ({
	className = "",
	backgroundControl = STYLES_BG_NO_IMAGE_DEMO,
	setAttrs__backgroundControl,
	bgTypesPlans = BG_TYPES_PLANS,
}) => {
	//
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const { bgType, color, gradient } = backgroundControl;

	//

	const handleChangeBgType = (type: BackgroundType) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			bgType: type,
		});
	};
	const handleChangeColor = (color: string) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			color,
		});
	};
	const handleChangeGradient = (gradient: string) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			gradient,
		});
	};

	//

	const renderTypeGroupBtn = () => {
		return (
			<PanelRow className="w-full flex justify-between items-center">
				<p className="flex-1">{__("Type", "wcb")}</p>
				<div className="flex gap-1">
					{bgTypesPlans.map((item) => {
						const active = item.name === bgType;
						return (
							<div
								key={item.name}
								className={`p-2 rounded-lg border  ${
									active
										? "text-sky-600 bg-sky-50 border-sky-400"
										: "border-slate-300 hover:border-slate-500 cursor-pointer"
								}`}
								onClick={() => handleChangeBgType(item.name)}
								title={item.name}
							>
								<item.icon className="w-4 h-4" />
							</div>
						);
					})}
				</div>
			</PanelRow>
		);
	};

	const renderContent = () => {
		switch (bgType) {
			case "color":
				return renderContentColor();
			case "gradient":
				return renderContentGradient();
			default:
				return null;
		}
	};

	const renderContentGradient = () => {
		return (
			<PanelRow className="w-full pt-2.5">
				<GradientPicker
					__nextHasNoMargin
					value={gradient}
					onChange={handleChangeGradient}
					gradients={GRADIENT_DEFAULT}
				/>
			</PanelRow>
		);
	};

	const renderContentColor = () => {
		return (
			<PanelRow className="w-full pt-2">
				<MyColorPicker onChange={handleChangeColor} color={color} />
			</PanelRow>
		);
	};

	return (
		<div className={className}>
			<>
				{renderTypeGroupBtn()}
				{renderContent()}
			</>
		</div>
	);
};

export default MyBackgroundNoImageControl;
