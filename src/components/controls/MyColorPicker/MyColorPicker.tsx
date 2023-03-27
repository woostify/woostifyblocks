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
	label = __("Color", "wcb"),
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
								onChange={(color) => handleUpdateColor(color || "")}
								// @ts-ignore
								__experimentalHasMultipleOrigins
								__experimentalIsRenderedInSidebar
							/>
						</div>
					</div>
				)}
			/>
			{/* <Popover className={`relative w-full ${className}`}>
				{({ open }) => (
					<>
						<div className="flex justify-between items-center">
							<span className="flex-1">{label}</span>
							<div className="flex items-center">
								<ResetButton onClick={() => handleUpdateColor("")} />
								<Popover.Button
									className={`ml-0.5 w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 ${
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
								></Popover.Button>
							</div>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute right-0 z-50 mt-3">
								<div className="shadow-xl ring-1 ring-black/10 bg-white ">
									<ColorPalette
										className="block-editor-color-gradient-control__panel p-4"
										colors={colorGradientSettings?.colors}
										value={colorState}
										onChange={(color) => handleUpdateColor(color || "")}
										__experimentalHasMultipleOrigins
										__experimentalIsRenderedInSidebar
									/>
								 
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover> */}
		</>
	);
};

export default MyColorPicker;
