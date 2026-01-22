import { ColorPalette, Dropdown } from "@wordpress/components";
// @ts-ignore
import { __experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients } from "@wordpress/block-editor";
import React, { FC, useMemo, useEffect, useState } from "react";
import { __ } from "@wordpress/i18n";

interface Props {
	className?: string;
	label?: string;
	onChange: (color: string) => void;
	color?: string;
	showDefaultPalette?: boolean;
	showCustomColorOnDefaultPallete?: boolean;
}

const MyColorPicker: FC<Props> = ({
	className = "",
	label = __("Color", "boostify-blocks"),
	// default value color - co the la cac gia tri hex string
	color = "#000",
	onChange,
	showDefaultPalette = true,
	showCustomColorOnDefaultPallete = true,
}) => {
	const [colorState, setColorState] = useState("");

	useEffect(() => {
		color && setColorState(color);
	}, [color]);

	const handleUpdateColor = (c: string) => {
		setColorState(c);
		onChange(c);
	};

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const defaultColorPallete = useMemo(() => {
		const customColors = window.wcbGlobalVariables?.customColorPallete;

		if (
			!customColors ||
			!customColors.length ||
			!showCustomColorOnDefaultPallete
		) {
			return colorGradientSettings?.colors || [];
		}

		const c = [
			...(colorGradientSettings?.colors || []),
			{
				name: "Customs",
				colors: window.wcbGlobalVariables.customColorPallete || [],
			},
		];

		return c;
	}, [colorGradientSettings, showCustomColorOnDefaultPallete]);

	return (
		<>
			<Dropdown
				className={`w-full ${className}`}
				contentClassName="my-popover-content-classname"
				// @ts-ignore
				popoverProps={{ placement: "left-start" }}
				renderToggle={({ isOpen, onToggle }) => (
					<div
						className={`w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors`}
						onClick={onToggle}
					>
						<div className="flex items-center gap-0.5">
							<div
								className={`w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer ${
									colorState ? "" : "bg-transparent"
								}`}
								style={{
									backgroundColor: colorState,
									backgroundImage: !colorState
										? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)"
										: undefined,
									backgroundSize: "10px 10px",
									backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0",
								}}
							></div>
							{/* <ResetButton onClick={() => handleUpdateColor("")} /> */}
						</div>
						{label && (
							<div>
								<span>{label}</span>
							</div>
						)}
					</div>
				)}
				renderContent={() => (
					<div>
						<div className="bg-white ">
							<ColorPalette
								className="block-editor-color-gradient-control__panel p-4"
								colors={showDefaultPalette ? defaultColorPallete : undefined}
								value={colorState}
								// @ts-ignore
								enableAlpha
								onChange={(color) => {
									handleUpdateColor(color || "");
								}}
								// @ts-ignore
								__experimentalHasMultipleOrigins
								__experimentalIsRenderedInSidebar
							/>
						</div>
					</div>
				)}
			/>
		</>
	);
};

export default MyColorPicker;
