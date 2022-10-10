import { Button, ColorPicker } from "@wordpress/components";
import React, { FC, Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import ResetButton from "../ResetButton";

interface Props extends Omit<ColorPicker.Props, "onChangeComplete"> {
	className?: string;
	label?: string;
	onChange: (color: string) => void;
}

const MyColorPicker: FC<Props> = ({
	className = "",
	label = "Color",
	color,
	disableAlpha,
	oldHue,
	onChange,
}) => {
	const [colorState, setColorState] = useState("");

	useEffect(() => {
		color && setColorState(color);
	}, [color]);

	const handleUpdateColor = (c: string) => {
		setColorState(c);
		onChange(c);
	};

	return (
		<div className={className}>
			<Popover className="relative">
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
								<div className="shadow-xl ring-1 ring-black/10 bg-white">
									<ColorPicker
										onChangeComplete={(e) => handleUpdateColor(e.hex)}
										disableAlpha={disableAlpha}
										color={colorState}
										oldHue={oldHue}
									/>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
};

export default MyColorPicker;
