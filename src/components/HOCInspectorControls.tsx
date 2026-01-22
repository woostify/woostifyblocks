import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useEffect, memo, ReactNode } from "react";

export type InspectorControlsTabTitle = "General" | "Styles" | "Advances";
export type InspectorControlsTabs = TabPanel.Tab[];

export const INSPECTOR_CONTROLS_TABS: InspectorControlsTabs = [
	{
		name: "General",
		title: (
			<div className="flex flex-col items-center justify-center space-y-0.5">
				<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 fill-none">
					<path
						d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<div>{__("General", "boostify-blocks")}</div>
			</div>
		),
	},
	{
		name: "Styles",
		title: (
			<div className="flex flex-col items-center justify-center space-y-0.5">
				<svg className="w-5 h-5 fill-none" viewBox="0 0 24 24" fill="none">
					<path
						d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M11.47 6H16.47"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M11.47 18H15.47"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M11.47 13.95L16.47 14"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M11.47 10H14.47"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M8.44 7H2.53"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
				<div>{__("Styles", "boostify-blocks")}</div>
			</div>
		),
	},
	{
		name: "Advances",
		title: (
			<div className="flex flex-col items-center justify-center space-y-0.5">
				<svg className="w-5 h-5 fill-none" viewBox="0 0 24 24" fill="none">
					<path
						d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<div>{__("Advances", "boostify-blocks")}</div>
			</div>
		),
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

	const handleChageTab = (tabName: InspectorControlsTabTitle) => {
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

export default memo(HOCInspectorControls);
