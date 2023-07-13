import { __ } from "@wordpress/i18n";
import React, { FC, Fragment, useState, useEffect, CSSProperties } from "react";
import { RadioGroup } from "@headlessui/react";
import MyLabelControl from "./MyLabelControl/MyLabelControl";
import { Tooltip } from "@wordpress/components";
import { AlignmentH } from "../../types";

export interface MyRadioItem<T = string> {
	label?: string;
	name: T;
	icon: string;
}

interface Props<T = string> {
	className?: string;
	labelClassName?: string;
	contentClassName?: string;
	value?: T;
	onChange?: (slected: T) => void;
	plans?: MyRadioItem[];
	label?: string;
	hasResponsive?: boolean;
	isWrap?: boolean;
}

export const PLANS_DEMO: MyRadioItem<
	NonNullable<CSSProperties["textAlign"]>
>[] = [
	{
		name: "left",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
	},
	{
		name: "center",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
	},
	{
		name: "right",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
	},
];

export const ALIGNMENT_PLANS_DEMO: MyRadioItem<AlignmentH>[] = [
	{
		name: "left",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
	},
	{
		name: "center",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
	},
	{
		name: "right",
		icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
	},
];

function MyRadioGroup<T>({
	onChange = () => {},
	value,
	className = "",
	plans = PLANS_DEMO,
	label = __("Alignment", "wcb"),
	hasResponsive = true,
	isWrap = false,
	labelClassName,
	contentClassName = "mt-3",
}: Props<T>) {
	const [selected, setSelected] = useState(value || plans[0].name);

	useEffect(() => {
		if (selected !== value) {
			setSelected(value || "");
		}
	}, [value]);

	const handleChangeRadio = (value) => {
		setSelected(value);
		onChange(value);
	};

	return (
		<RadioGroup
			className={className}
			value={selected}
			onChange={handleChangeRadio}
		>
			<RadioGroup.Label className="">
				<MyLabelControl
					className={labelClassName}
					hasResponsive={hasResponsive}
				>
					{label}
				</MyLabelControl>
			</RadioGroup.Label>
			<div
				className={`${contentClassName} relative flex gap-1 ${
					isWrap ? "flex-wrap" : ""
				}`}
			>
				{plans.map((item) => {
					return (
						<RadioGroup.Option key={item.name} value={item.name} as={Fragment}>
							{({ checked }) => (
								<div
									className={`relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg ${
										checked
											? "bg-sky-50 border-sky-400 text-sky-500"
											: "text-neutral-500 border-slate-300 hover:border-slate-500"
									}`}
								>
									<Tooltip
										position="top center"
										// @ts-ignore
										delay={400}
										text={
											item.name.charAt(0).toUpperCase() + item.name.slice(1)
										}
									>
										<div className="absolute inset-0 z-[1]"></div>
									</Tooltip>
									<div
										className="text-xs leading-5"
										dangerouslySetInnerHTML={{ __html: item.icon }}
									></div>
								</div>
							)}
						</RadioGroup.Option>
					);
				})}
			</div>
		</RadioGroup>
	);
}

export default MyRadioGroup;
