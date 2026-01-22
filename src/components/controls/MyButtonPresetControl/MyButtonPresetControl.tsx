import { RadioGroup } from "@headlessui/react";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Dropdown } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
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
		btnTwClass: " px-5 py-2 text-white bg-sky-600 ring-sky-600",
	},
	{
		name: "secondary",
		btnTwClass: " px-5 py-2 text-sky-600 bg-sky-100 ring-sky-100",
	},
	{
		name: "white",
		btnTwClass: " px-5 py-2 text-gray-900 bg-white ring-gray-300",
	},
	{
		name: "round",
		btnTwClass: " px-5 py-2 text-white bg-sky-600 ring-sky-600 !rounded-full",
	},
	{
		name: "with_leading_icon",
		btnTwClass: " px-5 py-2 text-white bg-sky-600 ring-sky-600",
	},
	{
		name: "with_trailing_icons",
		btnTwClass: " px-5 py-2 text-white bg-sky-600 ring-sky-600",
	},

	{
		name: "circular",
		btnTwClass: " text-white bg-sky-600 ring-sky-600 !rounded-full w-10 h-10",
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
	const setPreset = (preset: ButtonPreset) => {
		onChange && onChange(preset);
	};

	const renderButton = (item: typeof BUTTON_PRESET[number]) => {
		return (
			<div
				className={`${item.btnTwClass} flex-shrink-0 inline-flex items-center justify-center font-medium leading-6 text-sm ring-1 space-x-1.5 select-none`}
			>
				{item.name === "with_leading_icon" && (
					<HeartIcon className="flex-shrink-0 w-5 h-5" />
				)}
				{item.name === "circular" && (
					<HeartIcon className="flex-shrink-0 w-5 h-5" />
				)}
				{item.name !== "circular" && <span>Button</span>}
				{item.name === "with_trailing_icons" && (
					<HeartIcon className="flex-shrink-0 w-5 h-5" />
				)}
			</div>
		);
	};

	// RENDER
	const renderRadioPresetShadow = () => {
		return (
			<RadioGroup value={value} onChange={setPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between">
					<span>{__("Select Preset", "boostify-blocks")}</span>
					<ResetButton onClick={() => setPreset("")} />
				</RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg w-80"}>
					<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.95))]"></div>
					<div className="relative grid grid-cols-2 gap-3">
						{BUTTON_PRESET.map((item, index) => {
							return (
								<RadioGroup.Option key={item.name} value={item.name}>
									{({ checked }) => (
										<div
											className={`relative flex items-center justify-center w-full p-4 cursor-pointer rounded-lg hover:ring-2 ring-offset-1 ring-sky-400 ${
												checked ? "bg-white ring-2" : "bg-white"
											} `}
										>
											{renderButton(item)}
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

	const selectedPreset = BUTTON_PRESET.filter((item) => item.name === value)[0];
	return (
		<Dropdown
			position="middle left"
			className="w-full"
			renderToggle={({ isOpen, onToggle }) => (
				<div className="flex items-center space-x-4">
					<div
						className="flex items-center space-x-4 p-2.5 ring-2 ring-slate-200 rounded-lg min-h-[60px] hover:ring-slate-300 cursor-pointer select-none"
						onClick={onToggle}
					>
						<span className="flex-shrink-0">{__("Preset:", "boostify-blocks")}</span>
						{selectedPreset ? (
							renderButton(selectedPreset)
						) : (
							<strong>{__("None", "boostify-blocks")}</strong>
						)}
					</div>
					<ResetButton onClick={() => setPreset("")} />
				</div>
			)}
			renderContent={() => renderRadioPresetShadow()}
		/>
	);
};

export default MyButtonPresetControl;
