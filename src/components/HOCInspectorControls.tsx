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
	uniqueId?: string;
	tabDefaultActive?: InspectorControlsTabTitle;
	onChangeActive?: (tab: InspectorControlsTabTitle) => void;
}

const HOCInspectorControls: FC<Props> = ({
	renderTabPanels,
	tabs = INSPECTOR_CONTROLS_TABS,
	uniqueId = "",
	tabDefaultActive = "General",
	onChangeActive,
}) => {
	useEffect(() => {
		setTimeout(() => {
			const tabIsOpenEl = document.querySelector(
				".components-panel__body.is-opened"
			);
			if (!tabIsOpenEl) {
				return;
			}
			tabIsOpenEl.scrollIntoView({
				behavior: "smooth",
			});
		}, 500);
	}, []);

	// HIDDEN PANEL ADVANCE DEFAULT OF WP
	const handleTooglePanelAdvanceDefaultWp = () => {
		const advancedPanel = document.querySelector(
			".components-panel__body.block-editor-block-inspector__advanced"
		) as HTMLElement | null;
		const elAdvancesbtn = document.querySelector(
			".HOCInspectorControls__ative-tab"
		);
		const isAdvanceTabActive = !!elAdvancesbtn?.id.includes("-Advances");
		if (!advancedPanel) {
			return;
		}
		advancedPanel.style.display = isAdvanceTabActive ? "block" : "none";
	};

	const handleChageTab = (tabName: InspectorControlsTabs[number]["name"]) => {
		onChangeActive && onChangeActive(tabName);
		setTimeout(() => {
			handleTooglePanelAdvanceDefaultWp();
		}, 100);
	};

	const renderContent = () => {
		return (
			<TabPanel
				className={`wcb-inspectorControls__panel ${uniqueId}`}
				activeClass="HOCInspectorControls__ative-tab active-tab"
				tabs={tabs}
				onSelect={handleChageTab}
				initialTabName={tabDefaultActive}
			>
				{(tab: InspectorControlsTabs[number]) => {
					return (
						<div key={tab.name} className={tab.name}>
							{renderTabPanels(tab)}
						</div>
					);
				}}
			</TabPanel>
		);
	};

	const renderContent2 = () => {
		!!uniqueId &&
			setTimeout(() => {
				handleTooglePanelAdvanceDefaultWp();
			}, 100);
		return null;
	};

	return (
		<InspectorControls>
			{renderContent()}
			{renderContent2()}
		</InspectorControls>
	);
};

export default HOCInspectorControls;
