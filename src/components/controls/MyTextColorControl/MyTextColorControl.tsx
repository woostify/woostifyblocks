import {
	PanelRow,
	// @ts-ignore
	GradientPicker,
} from "@wordpress/components";
import React, { FC, ComponentType } from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import { __ } from "@wordpress/i18n";
import { PaintBrushIcon, FunnelIcon } from "@heroicons/react/24/outline";

import { GRADIENT_DEFAULT } from "../MyBackgroundControl/types";
import MyDisclosure from "../MyDisclosure";

export type TextColorType = "color" | "gradient";

const TEXT_COLOR_TYPES: {
	name: TextColorType;
	icon: ComponentType<any>;
}[] = [
	{ name: "color", icon: PaintBrushIcon },
	{ name: "gradient", icon: FunnelIcon },
];

export interface TextColorControlData {
	colorType: TextColorType;
	gradient: string;
	color: string;
}

export const TEXT_COLOR_CONTROL_DEMO: TextColorControlData = {
	color: "",
	colorType: "color",
	gradient:
		"linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)",
};

interface Props {
	className?: string;
	textColorControl: TextColorControlData;
	setAttrs__textColorControl: (data: TextColorControlData) => void;
}

const MyTextColorControl: FC<Props> = ({
	setAttrs__textColorControl,
	textColorControl = TEXT_COLOR_CONTROL_DEMO,
	className,
}) => {
	const { color, colorType, gradient } = textColorControl || {};

	const handleChangeBgType = (type: TextColorType) => {
		setAttrs__textColorControl({
			...textColorControl,
			colorType: type,
		});
	};
	const handleChangeColor = (color: string) => {
		setAttrs__textColorControl({
			...textColorControl,
			color,
		});
	};
	const handleChangeGradient = (gradient: string) => {
		setAttrs__textColorControl({
			...textColorControl,
			gradient,
		});
	};

	const renderTypeGroupBtn = () => {
		return (
			<div className="w-full flex justify-between items-center">
				<p className="flex-1">{__("Text color", "boostify-blocks")}</p>
				<div className="flex gap-1">
					{TEXT_COLOR_TYPES.map((item, index) => {
						const active = item.name === colorType;
						return (
							<div
								key={index + item.name}
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
			</div>
		);
	};

	const renderContent = () => {
		switch (colorType) {
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
			<MyDisclosure label="Text color">
				{renderTypeGroupBtn()}
				{renderContent()}
			</MyDisclosure>
		</div>
	);
};

export default MyTextColorControl;
