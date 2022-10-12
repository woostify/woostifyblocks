import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import React, { FC } from "react";

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
	return (
		<InspectorControls>
			<TabPanel
				className="wcb-inspectorControls__panel"
				activeClass="active-tab"
				tabs={tabs}
			>
				{(tab: InspectorControlsTabs[number]) => renderTabPanels(tab)}
			</TabPanel>
		</InspectorControls>
	);
};

export default HOCInspectorControls;
