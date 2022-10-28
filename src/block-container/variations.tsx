import { __ } from "@wordpress/i18n";
import React, { ReactNode } from "react";
import {
	ContainerBox_Container_Control,
	CONTAINER_BOX_CONTAINER_CONTROL_DEMO,
} from "../block-container-box/ContainerControl";
import { FLEX_PROPERTIES_CONTROL_DEMO } from "../components/controls/MyFlexPropertiesControl/types";
import blokcContainerAttrs, { BlockWCBContainerAttrs } from "./attributes";

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
		...(attrsDefault as any),
		general_flexProperties: {
			...FLEX_PROPERTIES_CONTROL_DEMO,
			flexWrap: {
				Desktop: flexWrap,
				Tablet: "wrap",
				Mobile: "wrap",
			},
		},
	};
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
				<div className="col-span-12 row-span-2 bg-white"></div>
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
				<div className="col-span-6 row-span-2 bg-white"></div>
				<div className="col-span-6 row-span-2 bg-white"></div>
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
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
		],
		scope: ["block"],
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
				<div className="row-span-2 col-span-4 bg-white" />
				<div className="row-span-2 col-span-4 bg-white" />
				<div className="row-span-2 col-span-4 bg-white" />
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
			["wcb/container-box", undefined],
			["wcb/container-box", undefined],
			["wcb/container-box", undefined],
			["wcb/container-box", undefined],
		],
		scope: ["block"],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
		],
		scope: ["block"],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("100%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("100%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("100%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("66.66%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("50%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("25%")],
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
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
			["wcb/container-box", getContainerBoxAttrsByWidth("33.33%")],
		],
		scope: ["block"],
		attributes: getContainerAttrsByFlexWrap("wrap"),
	},
];

export default variations;
