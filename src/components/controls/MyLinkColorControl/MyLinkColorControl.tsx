import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";

type TabsHere = "Normal" | "Hover";

const PanelTab: {
	name: TabsHere;
	title: string;
}[] = [
	{ name: "Normal", title: __("Normal", "wcb") },
	{ name: "Hover", title: __("Hover", "wcb") },
];

export type MyLinkColorControlData = {
	[K in TabsHere]: {
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
	const [currentTab, setCurrentTab] = useState<TabsHere>("Normal");
	const { color } = linkColorControl[currentTab];

	const handleChangeColor = (colorHex: string) => {
		setAttrs__linkColor({
			...linkColorControl,
			[currentTab]: {
				...linkColorControl[currentTab],
				color: colorHex,
			},
		});
	};

	const renderShadowColorPicker = () => {
		return (
			<MyColorPicker
				label={__("Color", "wcb")}
				onChange={handleChangeColor}
				color={color}
			/>
		);
	};

	return (
		<TabPanel
			className={`wcb-bodyControls__panel ${className}`}
			activeClass="active-tab"
			onSelect={(tab) => setCurrentTab(tab as TabsHere)}
			initialTabName="Normal"
			tabs={PanelTab}
		>
			{(_) => renderShadowColorPicker()}
		</TabPanel>
	);
};

export default MyLinkColorControl;
