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
		<div className="w-16 h-12 flex items-center justify-center ">
			<div className="grid grid-rows-2 grid-cols-12 w-14 h-8 p-0.5 bg-[#007cba] gap-0.5 rounded-sm">
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
		name: "test-full",
		title: __("Test Full Form"),
		description: __("Test Full Form"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			// ["wcb/button", undefined],
			["wcb/button", undefined],
		],
		scope: ["block"],
		isDefault: true,
	},
];

export default variations;
