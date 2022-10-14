import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import React, { FC, useEffect } from "react";

export type InspectorControlsTabTitle = "General" | "Styles" | "Advances";
export type InspectorControlsTabs = {
	name: InspectorControlsTabTitle;
	title: InspectorControlsTabTitle;
}[];

export const INSPECTOR_CONTROLS_TABS: InspectorControlsTabs = [
	{
		name: "General",
		title: "General",
	},
	{
		name: "Styles",
		title: "Styles",
	},
	{
		name: "Advances",
		title: "Advances",
	},
];

interface Props {
	renderTabPanels: (tab: InspectorControlsTabs[number]) => JSX.Element;
	tabs?: InspectorControlsTabs;
}

const HOCInspectorControls: FC<Props> = ({
	renderTabPanels,
	tabs = INSPECTOR_CONTROLS_TABS,
}) => {
	// HIDE THE ADVANCE TAB PANEL
	const handleChageTab = (tabName: InspectorControlsTabs[number]["name"]) => {
		const advancedPanel = document.querySelector(
			".components-panel__body.block-editor-block-inspector__advanced"
		) as HTMLElement | null;
		if (!advancedPanel) {
			return;
		}

		if (tabName === "Advances") {
			advancedPanel.style.display = "block";
		} else {
			advancedPanel.style.display = "none";
		}
	};

	return (
		<InspectorControls>
			<TabPanel
				className="wcb-inspectorControls__panel"
				activeClass="active-tab"
				tabs={tabs}
				onSelect={handleChageTab}
			>
				{(tab: InspectorControlsTabs[number]) => renderTabPanels(tab)}
			</TabPanel>
		</InspectorControls>
	);
};

export default HOCInspectorControls;
