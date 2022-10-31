import { RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import MyDisclosure from "../MyDisclosure";

interface Props {
	className?: string;
	textShadowControl: MyTextShadowControlData;
	setAttrs__textShadow: (data: MyTextShadowControlData) => void;
}

export type MyTextShadowControlData = {
	color: string;
	horizontal: number;
	vertical: number;
	blur: number;
};

export const MY_TEXT_SHADOW_CONTROL_DEMO: MyTextShadowControlData = {
	color: "",
	blur: 0,
	horizontal: 0,
	vertical: 0,
};

const MyTextShadowControl: FC<Props> = ({
	textShadowControl = MY_TEXT_SHADOW_CONTROL_DEMO,
	setAttrs__textShadow,
	className,
}) => {
	const { blur, color, horizontal, vertical } = textShadowControl;

	const handleChangeColor = (colorHex: string) => {
		setAttrs__textShadow({
			...textShadowControl,
			color: colorHex,
		});
	};
	// custoM

	const setHorizontal = (value: number | undefined) => {
		setAttrs__textShadow({
			...textShadowControl,
			horizontal: value || 0,
		});
	};
	const setVertical = (value: number | undefined) => {
		setAttrs__textShadow({
			...textShadowControl,
			vertical: value || 0,
		});
	};
	const setBlur = (value: number | undefined) => {
		setAttrs__textShadow({
			...textShadowControl,
			blur: value || 0,
		});
	};

	const renderBlurRange = () => {
		return (
			<RangeControl
				label={__("Blur", "wcb")}
				value={blur}
				onChange={setBlur}
				min={0}
				max={100}
			/>
		);
	};

	const renderVerticalRange = () => {
		return (
			<RangeControl
				label={__("Vertical", "wcb")}
				value={vertical}
				onChange={setVertical}
				min={-100}
				max={100}
			/>
		);
	};
	const renderHorizontalRange = () => {
		return (
			<RangeControl
				label={__("Horizontal", "wcb")}
				className="mb-0"
				value={horizontal}
				onChange={setHorizontal}
				min={-100}
				max={100}
			/>
		);
	};

	const renderShadowColorPicker = () => {
		return (
			<MyColorPicker
				label={__("Color", "wcb")}
				onChange={handleChangeColor}
				color={color}
			/>
		);
	};

	return (
		<MyDisclosure label="Text shadow" className={className}>
			{renderShadowColorPicker()}
			{renderHorizontalRange()}
			{renderVerticalRange()}
			{renderBlurRange()}
		</MyDisclosure>
	);
};

export default MyTextShadowControl;
