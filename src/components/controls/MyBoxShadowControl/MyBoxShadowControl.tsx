import { RadioGroup } from "@headlessui/react";
import {
	// @ts-ignore
	__experimentalRadio as WPRadio,
	// @ts-ignore
	__experimentalRadioGroup as WPRadioGroup,
} from "@wordpress/components";
import { RangeControl, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
import CheckIcon from "../../CheckIcon";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import MyDisclosure from "../MyDisclosure";
import ResetButton from "../ResetButton";
import {
	MY_BOX_SHADOW_CONTROL_DEMO,
	TwShadowPreset,
	TW_SHADOW_PRESET,
} from "./types";

interface Props {
	className?: string;
	boxShadowControl: MyBoxShadowControlData;
	setAttrs__boxShadow: (data: MyBoxShadowControlData) => void;
}

export type BoxShadowPostion = "inset" | "outset";
type TabsHere = "Normal" | "Hover";

export const BOX_SHADOW_POSITON: BoxShadowPostion[] = ["outset", "inset"];

export type MyBoxShadowControlData = {
	[K in TabsHere]: {
		presetClass: TwShadowPreset;
		color: string;
		horizontal: number;
		vertical: number;
		blur: number;
		spread: number;
		position: BoxShadowPostion;
	};
};

const PanelTab: {
	name: TabsHere;
	title: string;
}[] = [
	{ name: "Normal", title: __("Normal", "wcb") },
	{ name: "Hover", title: __("Hover", "wcb") },
];
const MyBoxShadowControl: FC<Props> = ({
	className = "",
	boxShadowControl = MY_BOX_SHADOW_CONTROL_DEMO,
	setAttrs__boxShadow,
}) => {
	//
	const [currentTab, setCurrentTab] = useState<TabsHere>("Normal");
	//
	const { color, presetClass, horizontal, vertical, blur, spread, position } =
		boxShadowControl[currentTab];

	//
	const setShadowPreset = (preClass: TwShadowPreset) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				presetClass: preClass,
			},
		});
	};
	const handleChangeColor = (colorHex: string) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				color: colorHex,
			},
		});
	};
	// custoM
	const handleChangePosition = (bPosition: BoxShadowPostion) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				position: bPosition,
				presetClass: "",
			},
		});
	};
	const setHorizontal = (value: number | undefined) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				horizontal: value,
				presetClass: "",
			},
		});
	};
	const setVertical = (value: number | undefined) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				vertical: value,
				presetClass: "",
			},
		});
	};
	const setBlur = (value: number | undefined) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				blur: value,
				presetClass: "",
			},
		});
	};
	const setSpread = (value: number | undefined) => {
		setAttrs__boxShadow({
			...boxShadowControl,
			[currentTab]: {
				...boxShadowControl[currentTab],
				spread: value,
				presetClass: "",
			},
		});
	};

	// RENDER
	const renderRadioPresetShadow = () => {
		return (
			<RadioGroup value={presetClass} onChange={setShadowPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between">
					<span>{__("Select Preset", "wcb")}</span>
					<ResetButton onClick={() => setShadowPreset("")} />
				</RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg"}>
					<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
					<div className="relative grid grid-cols-3 gap-3 ">
						{TW_SHADOW_PRESET.map((item) => {
							return (
								<RadioGroup.Option key={item} value={item}>
									{({ checked }) => (
										<div
											className={`${item} flex items-center justify-center w-full h-20 cursor-pointer rounded-lg ${
												checked ? "bg-sky-50 " : "bg-white"
											} ${
												item === "shadow-inner" ? "ring-1 ring-black/5" : ""
											}`}
										>
											{checked && (
												<div className="shrink-0 text-sky-500">
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
	const renderSpreadRange = () => {
		return (
			<RangeControl
				label={__("Spread", "wcb")}
				value={spread}
				onChange={setSpread}
				min={-100}
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
	const renderPositionRadioGroup = () => {
		return (
			<div className="flex items-center justify-between">
				<p>{__("Position", "wcb")}</p>
				<WPRadioGroup onChange={handleChangePosition} checked={position}>
					{BOX_SHADOW_POSITON.map((item) => (
						<WPRadio value={item} key={item} className="capitalize">
							{item}
						</WPRadio>
					))}
				</WPRadioGroup>
			</div>
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

	const renderContentSettings = () => {
		return (
			<div className="space-y-5">
				{renderRadioPresetShadow()}
				{renderShadowColorPicker()}
				<MyDisclosure>
					{renderHorizontalRange()}
					{renderVerticalRange()}
					{renderBlurRange()}
					{renderSpreadRange()}
					{renderPositionRadioGroup()}
				</MyDisclosure>
			</div>
		);
	};

	return (
		<TabPanel
			className={`wcb-bodyControls__panel ${className}`}
			activeClass="active-tab"
			onSelect={(tab) => setCurrentTab(tab as TabsHere)}
			initialTabName="Normal"
			tabs={PanelTab}
		>
			{(_) => renderContentSettings()}
		</TabPanel>
	);
};

export default MyBoxShadowControl;
