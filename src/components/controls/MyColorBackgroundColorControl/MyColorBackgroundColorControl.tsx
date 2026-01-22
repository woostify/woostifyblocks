import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
import { MyTabsForColor } from "../../../types";
import MyColorPicker from "../MyColorPicker/MyColorPicker";

export type MyColorBackgroundColorControlData = {
	[K in MyTabsForColor]: {
		color?: string;
		backgroundColor?: string;
	};
};

export const PANEL_COLOR_TABS: {
	name: MyTabsForColor;
	title: string;
}[] = [
	{ name: "Normal", title: __("Normal", "boostify-blocks") },
	{ name: "Hover", title: __("Hover", "boostify-blocks") },
];

export const MY_COLOR_BGCOLOR_CONTROL_DEMO = {
	Normal: {
		color: "",
		backgroundColor: "",
	},
	Hover: {
		color: "",
		backgroundColor: "",
	},
};

export const MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO = {
	Normal: {
		color: "#fff",
		backgroundColor: "#0ea5e9",
	},
	Hover: {
		color: "#fff",
		backgroundColor: "#0284c7",
	},
};

interface Props {
	className?: string;
	controlData: MyColorBackgroundColorControlData;
	setAttrs__control: (data: MyColorBackgroundColorControlData) => void;
}

const MyColorBackgroundColorControl: FC<Props> = ({
	className = "",
	controlData = MY_COLOR_BGCOLOR_CONTROL_DEMO,
	setAttrs__control,
}) => {
	const handleChangeColor = (currentTab: MyTabsForColor, colorHex: string) => {
		setAttrs__control({
			...controlData,
			[currentTab]: {
				...controlData[currentTab],
				color: colorHex,
			},
		});
	};
	const handleChangeBackgroundColor = (
		currentTab: MyTabsForColor,
		colorHex: string
	) => {
		setAttrs__control({
			...controlData,
			[currentTab]: {
				...controlData[currentTab],
				backgroundColor: colorHex,
			},
		});
	};

	const renderShadowColorPicker = (tab: TabPanel.Tab) => {
		const tabName = tab.name as MyTabsForColor;
		const { color, backgroundColor } = controlData[tabName];
		return (
			<div className="space-y-3.5">
				{typeof color !== undefined ? (
					<MyColorPicker
						label={__("Color", "boostify-blocks")}
						onChange={(value) => handleChangeColor(tabName, value)}
						color={color}
					/>
				) : null}
				{typeof backgroundColor !== undefined ? (
					<MyColorPicker
						label={__("Background color", "boostify-blocks")}
						onChange={(value) => handleChangeBackgroundColor(tabName, value)}
						color={backgroundColor}
					/>
				) : null}
			</div>
		);
	};

	return (
		<TabPanel
			className={`wcb-bodyControls__panel ${className}`}
			activeClass="active-tab"
			initialTabName="Normal"
			tabs={PANEL_COLOR_TABS}
		>
			{renderShadowColorPicker}
		</TabPanel>
	);
};

export default MyColorBackgroundColorControl;
