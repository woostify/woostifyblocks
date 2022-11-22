import { RadioGroup } from "@headlessui/react";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/solid";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
import CheckIcon from "../../CheckIcon";
import ResetButton from "../ResetButton";

export type ButtonPreset =
	| "primary"
	| "secondary"
	| "white"
	| "with_leading_icon"
	| "with_trailing_icons"
	| "round"
	| "circular"
	| "";

const BUTTON_PRESET: {
	name: ButtonPreset;
	btnTwClass: string;
}[] = [
	{
		name: "primary",
		btnTwClass: " px-6 py-2 text-white bg-cyan-600 ring-cyan-600",
	},
	{
		name: "secondary",
		btnTwClass: " px-6 py-2 text-cyan-700 bg-cyan-100 ring-cyan-100",
	},
	{
		name: "white",
		btnTwClass: " px-6 py-2 text-gray-900 bg-white ring-gray-300",
	},
	{
		name: "with_leading_icon",
		btnTwClass: " px-6 py-2 text-white bg-cyan-600 ring-cyan-600",
	},
	{
		name: "with_trailing_icons",
		btnTwClass: " px-6 py-2 text-white bg-cyan-600 ring-cyan-600",
	},
	{
		name: "round",
		btnTwClass: " px-6 py-2 text-white bg-cyan-600 ring-cyan-600 !rounded-full",
	},
	{
		name: "circular",
		btnTwClass: " text-white bg-cyan-600 ring-cyan-600 !rounded-full w-10 h-10",
	},
];

interface Props {
	className?: string;
	value: ButtonPreset;
	onChange: (data: ButtonPreset) => void;
}

const MyButtonPresetControl: FC<Props> = ({
	className = "",
	onChange,
	value,
}) => {
	const setShadowPreset = (preClass: ButtonPreset) => {
		onChange && onChange(preClass);
	};

	// RENDER
	const renderRadioPresetShadow = () => {
		return (
			<RadioGroup value={value} onChange={setShadowPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between">
					<span>{__("Select Preset", "wcb")}</span>
					<ResetButton onClick={() => setShadowPreset("")} />
				</RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg"}>
					<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
					<div className="relative grid grid-cols-1 gap-3">
						{BUTTON_PRESET.map((item) => {
							return (
								<RadioGroup.Option key={item.name} value={item.name}>
									{({ checked }) => (
										<div
											className={`relative flex items-center justify-center w-full p-2.5 cursor-pointer rounded-lg ${
												checked
													? "bg-white ring-2 ring-offset-1 ring-sky-300"
													: "bg-white"
											} `}
										>
											<div
												className={`${item.btnTwClass} inline-flex items-center justify-center font-medium rounded-lg leading-6 text-sm ring-1 space-x-2`}
											>
												{item.name === "with_leading_icon" && (
													<HeartIcon className="w-5 h-5" />
												)}
												{item.name === "circular" && (
													<PlusIcon className="w-5 h-5" />
												)}
												{item.name !== "circular" && <span>Button</span>}
												{item.name === "with_trailing_icons" && (
													<HeartIcon className="w-5 h-5" />
												)}
											</div>
											{checked && (
												<div className="shrink-0 text-sky-500 absolute right-2">
													<CheckIcon className="h-6 w-6" />
												</div>
											)}
										</div>
									)}
								</RadioGroup.Option>
							);
						})}
					</div>
				</div>
			</RadioGroup>
		);
	};

	return <div className="space-y-5">{renderRadioPresetShadow()}</div>;
};

export default MyButtonPresetControl;
