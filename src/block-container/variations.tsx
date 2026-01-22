import { __ } from "@wordpress/i18n";
import React, { ReactNode } from "react";

import { FLEX_PROPERTIES_CONTROL_DEMO } from "../components/controls/MyFlexPropertiesControl/types";
import blokcContainerAttrs, { BlockWCBContainerAttrs } from "./attributes";
import {
	CONTAINER_CONTROL_DEMO,
	MyContainerControlData,
} from "./MyContainerControl";

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

const getContainerAttrsByFlexWrap = (
	flexWrap: React.CSSProperties["flexWrap"] = "nowrap",
	flexDirection: React.CSSProperties["flexDirection"] = "row"
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
		...(attrsDefault as any),
		general_flexProperties: {
			...FLEX_PROPERTIES_CONTROL_DEMO,
			flexDirection: {
				Desktop: flexDirection,
				Tablet: "column",
			},
			flexWrap: {
				Desktop: "wrap",
			},
			alignItems: { Desktop: "stretch" },
			justifyContent: { Desktop: "start" },
		},
	};
};

const getContainerBoxAttrsByWidth = (
	width: string
): {
	general_container: MyContainerControlData;
} => {
	return {
		general_container: {
			...CONTAINER_CONTROL_DEMO,
			containerWidthType: "Custom",
			customWidth: {
				Desktop: width,
				Tablet: width,
				Mobile: "100%",
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
		"wcb/container",
		{ general_container: MyContainerControlData } | undefined
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
				<div className="col-span-12 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [],
		scope: ["block"],
		isDefault: true,
		attributes: getContainerAttrsByFlexWrap("nowrap", "column"),
	},
	{
		name: "two-columns-equal",
		title: __("50 / 50"),
		description: __("Two columns; equal split"),
		icon: (
			<RenderIcon>
				<div className="col-span-6 row-span-2 bg-white"></div>
				<div className="col-span-6 row-span-2 bg-white"></div>
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("nowrap"),
	},
	{
		name: "two-columns-33-66",
		title: __("33 / 66"),
		description: __("Two columns; one-third, two-thirds split"),
		icon: (
			<RenderIcon>
				<div className="row-span-2 col-span-4 bg-white" />
				<div className="row-span-2 col-span-8 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("66.66%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("nowrap"),
	},
	{
		name: "two-columns-66-33",
		title: __("66 / 33"),
		description: __("Two columns; two-thirds, one-third split"),
		icon: (
			<RenderIcon>
				<div className="row-span-2 col-span-8 bg-white" />
				<div className="row-span-2 col-span-4 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("nowrap"),
	},
	{
		name: "three-columns-equal",
		title: __("33 / 33 / 33"),
		description: __("Three columns; equal split"),
		icon: (
			<RenderIcon>
				<div className="row-span-2 col-span-4 bg-white" />
				<div className="row-span-2 col-span-4 bg-white" />
				<div className="row-span-2 col-span-4 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("nowrap"),
	},
	{
		name: "four-columns-equal",
		title: __("25 / 25 / 25 / 25"),
		description: __("Three columns; equal split"),
		icon: (
			<RenderIcon>
				<div className="row-span-2 col-span-3 bg-white" />
				<div className="row-span-2 col-span-3 bg-white" />
				<div className="row-span-2 col-span-3 bg-white" />
				<div className="row-span-2 col-span-3 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("nowrap"),
	},
	{
		name: "three-columns-25-50-25",
		title: __("25 / 50 / 25"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="row-span-2 col-span-3 bg-white" />
				<div className="row-span-2 col-span-6 bg-white" />
				<div className="row-span-2 col-span-3 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("nowrap"),
	},

	// TWO ROW - FLEX WRAP
	{
		name: "two-rows-equal",
		title: __("100 / 100 / x2"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-12 bg-white" />
				<div className="col-span-12 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("100%")],
			["wcb/container", getContainerBoxAttrsByWidth("100%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-50-50-2full",
		title: __("50 / 50 / 100"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-6 bg-white" />
				<div className="col-span-6 bg-white" />
				<div className="col-span-12 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("100%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-33-33-33-50x2",
		title: __("33 x 3 / 50 x 2"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-6 bg-white" />
				<div className="col-span-6 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-33-66",
		title: __("33 / 66 / x2"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-4 bg-white" />
				<div className="col-span-8 bg-white" />
				<div className="col-span-8 bg-white" />
				<div className="col-span-4 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-50-50",
		title: __("50 / 50 / x2"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-6 bg-white" />
				<div className="col-span-6 bg-white" />
				<div className="col-span-6 bg-white" />
				<div className="col-span-6 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-66-33",
		title: __("66 / 33 / x2"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-8 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-8 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("66.66%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-25-50-25",
		title: __("25 / 50 / 25 / x2"),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-3 bg-white" />
				<div className="col-span-6 bg-white" />
				<div className="col-span-3 bg-white" />
				<div className="col-span-3 bg-white" />
				<div className="col-span-6 bg-white" />
				<div className="col-span-3 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
			["wcb/container", getContainerBoxAttrsByWidth("50%")],
			["wcb/container", getContainerBoxAttrsByWidth("25%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
	{
		name: "two-rows-33-equal",
		title: __("33 / 33 / 33 "),
		description: __("Three columns; wide center column"),
		icon: (
			<RenderIcon>
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
				<div className="col-span-4 bg-white" />
			</RenderIcon>
		),
		innerBlocks: [
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
];

export default variations;
