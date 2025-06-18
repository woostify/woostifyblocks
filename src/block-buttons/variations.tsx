import { __ } from "@wordpress/i18n";
import React, { ReactNode } from "react";

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

const RenderIcon = (props) => {
	return (
		<div className="w-16 h-10 flex items-center justify-center ">
			<div className="grid grid-rows-2 grid-cols-12 w-full h-3.5 p-0.5 gap-1 rounded-sm">
				{props.children}
			</div>
		</div>
	);
};

export const variations: {
	name: string;
	title: string;
	description: string;
	icon: any;
	innerBlocks: ["wcb/button", {} | undefined][];
	scope: string[];
	isDefault?: boolean;
	attributes?: any;
}[] = [
	{
		name: "one-button",
		title: __("One button"),
		description: __("One button"),
		icon: (
			<RenderIcon>
				<div className="col-span-5 row-span-2 bg-[#007cba]"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/button", undefined],
		],
		scope: ["block"],
		isDefault: true,
	},
	{
		name: "two-buttons",
		title: __("Two buttons"),
		description: __("Two buttons"),
		icon: (
			<RenderIcon>
				<div className="col-span-5 row-span-2 bg-[#007cba]"></div>
				<div className="col-span-5 row-span-2 bg-[#007cba]"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/button", undefined],
			["wcb/button", undefined],
		],
		scope: ["block"],
		isDefault: true,
	},
	{
		name: "three-buttons",
		title: __("Three buttons"),
		description: __("Three buttons"),
		icon: (
			<RenderIcon>
				<div className="col-span-4 row-span-2 bg-[#007cba]"></div>
				<div className="col-span-4 row-span-2 bg-[#007cba]"></div>
				<div className="col-span-4 row-span-2 bg-[#007cba]"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/button", undefined],
			["wcb/button", undefined],
			["wcb/button", undefined],
		],
		scope: ["block"],
	},
];

export default variations;
