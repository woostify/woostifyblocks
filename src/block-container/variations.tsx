/**
 * WordPress dependencies
 */
import { Path, SVG } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { ReactNode } from "react";
import blokcContainerBoxAttrs, {
	BlockWCBContainerBoxAttrs,
} from "../block-container-box/attributes";
import {
	ContainerBox_Container_Control,
	CONTAINER_BOX_CONTAINER_CONTROL_DEMO,
} from "../block-container-box/ContainerControl";
import {
	FLEX_PROPERTIES_CONTROL_DEMO,
	MyFlexPropertiesControlData,
} from "../components/controls/MyFlexPropertiesControl/types";
import blokcContainerAttrs, {
	AttrsGenericType,
	BlockWCBContainerAttrs,
} from "./attributes";

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

const RenderIcon = (props) => {
	return (
		<div className="w-16 h-12 flex items-center justify-center">
			<div className="flex flex-wrap w-14 h-8 border border-[#007cba] rounded-sm">
				{props.children}
			</div>
		</div>
	);
};

const getContainerAttrsByFlexWrap = (
	flexWrap: React.CSSProperties["flexWrap"] = "nowrap"
): BlockWCBContainerAttrs => {
	const attrsDefault = Object.keys(blokcContainerAttrs).reduce(
		(previousValue, currentValue, currentIndex: number) => {
			return {
				...previousValue,
				[currentValue]: blokcContainerAttrs[currentValue].default,
			};
		},
		{}
	);
	return {
		...attrsDefault,
		general_flexProperties: {
			...FLEX_PROPERTIES_CONTROL_DEMO,
			flexWrap: {
				Desktop: flexWrap,
			},
		},
	} as any;
};

const getContainerBoxAttrsByWidth = (
	width: string
): {
	general_container: ContainerBox_Container_Control;
} => {
	return {
		general_container: {
			...CONTAINER_BOX_CONTAINER_CONTROL_DEMO,
			customWidth: {
				Desktop: width,
			},
		},
	};
};

export const variations: {
	name: string;
	title: string;
	description: string;
	icon: any;
	innerBlocks: [
		"wcb/container-box",
		{ general_container: ContainerBox_Container_Control } | undefined
	][];
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
				<div className="flex-1 border border-[#007cba]"></div>
			</RenderIcon>
		),
		innerBlocks: [["wcb/container-box", getContainerBoxAttrsByWidth("100%")]],
		scope: ["block"],
		isDefault: true,
	},
	{
		name: "two-columns-equal",
		title: __("50 / 50"),
		description: __("Two columns; equal split"),
		icon: (
			<RenderIcon>
				<div className="flex-1 border border-[#007cba]"></div>
				<div className="flex-1 border border-[#007cba]"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
		],
		scope: ["block"],
		// attributes: {}
	},
	{
		name: "two-columns-one-third-two-thirds",
		title: __("33 / 66"),
		description: __("Two columns; one-third, two-thirds split"),
		icon: (
			<RenderIcon>
				<div className="border border-[#007cba] w-1/3" />
				<div className="flex-1 border border-[#007cba]" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
		],
		scope: ["block"],
	},
	{
		name: "two-columns-two-thirds-one-third",
		title: __("66 / 33"),
		description: __("Two columns; two-thirds, one-third split"),
		icon: (
			<RenderIcon>
				<div className="flex-1 border border-[#007cba]" />
				<div className="border border-[#007cba] w-1/3" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
	},
	{
		name: "three-columns-equal",
		title: __("33 / 33 / 33"),
		description: __("Three columns; equal split"),
		icon: (
			<RenderIcon>
				<div className="flex-1 border border-[#007cba]" />
				<div className="flex-1 border border-[#007cba]" />
				<div className="flex-1 border border-[#007cba]" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container-box", undefined],
			["wcb/container-box", undefined],
			["wcb/container-box", undefined],
		],
		scope: ["block"],
	},
	{
		name: "three-columns-wider-center",
		title: __("25 / 50 / 25"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="border border-[#007cba] w-1/4" />
				<div className="border border-[#007cba] w-2/4" />
				<div className="flex-1 border border-[#007cba] " />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
		],
		scope: ["block"],
	},
	{
		name: "layout-wider-center",
		title: __("25 / 50 / 25"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="border border-[#007cba] w-1/3" />
				<div className="border border-[#007cba] w-2/3" />
				<div className="border border-[#007cba] w-2/3" />
				<div className="border border-[#007cba] w-1/3" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
];

export default variations;
