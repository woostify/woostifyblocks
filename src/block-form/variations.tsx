import { __ } from "@wordpress/i18n";
import React, { ReactNode } from "react";
import { FormChildAllowed } from "./Edit";

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
	innerBlocks: [FormChildAllowed, {} | undefined][];
	scope: string[];
	isDefault?: boolean;
	attributes?: any;
}[] = [
	{
		name: "one-column-full",
		title: __("100"),
		description: __("One column"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/accept", undefined],
			["wcb/checkbox", undefined],
			["wcb/date", undefined],
			["wcb/email", undefined],
			["wcb/hidden", undefined],
			["wcb/input", undefined],
			["wcb/phone", undefined],
			["wcb/radio", undefined],
			["wcb/select", undefined],
			["wcb/textarea", undefined],
			["wcb/toggle", undefined],
			["wcb/url", undefined],
		],
		scope: ["block"],
		isDefault: true,
	},
];

export default variations;
