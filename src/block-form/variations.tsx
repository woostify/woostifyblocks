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
		name: "test-full",
		title: __("Test Full Form"),
		description: __("Test Full Form"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/input", { label: "First Name" }],
			["wcb/email", { label: "Email" }],
			["wcb/phone", undefined],
			["wcb/toggle", undefined],
			["wcb/url", undefined],
			["wcb/checkbox", undefined],
			["wcb/radio", undefined],
			["wcb/select", undefined],
			["wcb/textarea", undefined],
			["wcb/hidden", undefined],
			["wcb/accept", undefined],
		],
		scope: ["block"],
		isDefault: true,
	},
	{
		name: "SimpleContactForm",
		title: __("Simple Contact Form"),
		description: __("Simple Contact Form"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/input", { label: "First Name" }],
			["wcb/input", { label: "Last Name" }],
			["wcb/email", { label: "Email" }],
			["wcb/textarea", { label: "Message" }],
		],
		scope: ["block"],
	},
	{
		name: "NewsletterForm",
		title: __("Newsletter Form"),
		description: __("Newsletter Form"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/input", { label: "Name" }],
			["wcb/email", { label: "Email" }],
			["wcb/radio", { label: "Some question with below listed option?" }],
			["wcb/input", { label: "Subject" }],
			["wcb/textarea", { label: "Message" }],
		],
		scope: ["block"],
	},
	{
		name: "SuggestionForm",
		title: __("Suggestion Form"),
		description: __("Suggestion Form"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/input", { label: "Name" }],
			["wcb/email", { label: "Email" }],
		],
		scope: ["block"],
	},
];

export default variations;
