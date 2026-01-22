import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
import { MyTabsForColor } from "../../../types";
import { PANEL_COLOR_TABS } from "../MyColorBackgroundColorControl/MyColorBackgroundColorControl";
import MyColorPicker from "../MyColorPicker/MyColorPicker";

export type MyLinkColorControlData = {
	[K in MyTabsForColor]: {
		color: string;
	};
};

export const MY_LINK_COLOR_CONTROL_DEMO: MyLinkColorControlData = {
	Normal: {
		color: "",
	},
	Hover: {
		color: "",
	},
};

interface Props {
	className?: string;
	linkColorControl: MyLinkColorControlData;
	setAttrs__linkColor: (data: MyLinkColorControlData) => void;
}

const MyLinkColorControl: FC<Props> = ({
	className = "",
	linkColorControl = MY_LINK_COLOR_CONTROL_DEMO,
	setAttrs__linkColor,
}) => {
	const handleChangeColor = (currentTab: MyTabsForColor, colorHex: string) => {
		setAttrs__linkColor({
			...linkColorControl,
			[currentTab]: {
				...linkColorControl[currentTab],
				color: colorHex,
			},
		});
	};

	const renderShadowColorPicker = (tab: TabPanel.Tab) => {
		const tabName = tab.name as MyTabsForColor;
		const { color } = linkColorControl[tabName];
		return (
			<MyColorPicker
				label={__("Color", "boostify-blocks")}
				onChange={(value) => handleChangeColor(tabName, value)}
				color={color}
			/>
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

export default MyLinkColorControl;
