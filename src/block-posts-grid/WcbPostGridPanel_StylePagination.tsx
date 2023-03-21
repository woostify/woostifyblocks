import {
	PanelBody,
	TabPanel,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { MyTabsForActive } from "../types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyUnitControl from "../components/controls/MyUnitControl";
import { MY_GAP_UNITS } from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import MyRadioGroup from "../components/controls/MyRadioGroup";

type PostGridPagiantionType = {
	[K in MyTabsForActive]: {
		color?: string;
		backgroundColor?: string;
		border: MyBorderControlData;
	};
};

const MY_POST_GRID_MAIN_STYLE_PAGINATION_DEMO: PostGridPagiantionType = {
	Normal: {
		color: "#171717",
		backgroundColor: "#fff",
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				color: "#cbd5e1",
				style: "solid",
				width: "1px",
			},
		},
	},
	Active: {
		color: "#fff",
		backgroundColor: "#0ea5e9",
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				color: "#0ea5e9",
				style: "solid",
				width: "1px",
			},
		},
	},
};

export interface WCB_POST_GRID_PANEL_STYLE_PAGINATION {
	mainStyle: PostGridPagiantionType;
	marginTop: HasResponsive<string>;
	justifyContent: CSSProperties["justifyContent"];
}

export const WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO: WCB_POST_GRID_PANEL_STYLE_PAGINATION =
	{
		mainStyle: MY_POST_GRID_MAIN_STYLE_PAGINATION_DEMO,
		marginTop: { Desktop: "2rem" },
		justifyContent: "left",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_STYLE_PAGINATION;
	setAttr__: (data: WCB_POST_GRID_PANEL_STYLE_PAGINATION) => void;
}

const WcbPostGridPanel_StylePagination: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { mainStyle, marginTop, justifyContent } = panelData;
	console.log(1, { mainStyle });

	const MARGIN_TOP =
		marginTop[deviceType] || marginTop.Tablet || marginTop.Desktop;
	//
	//

	const PANEL_PAGINATION_TABS: {
		name: MyTabsForActive;
		title: string;
	}[] = [
		{ name: "Normal", title: __("Normal", "wcb") },
		{ name: "Active", title: __("Active", "wcb") },
	];

	const renderTabContent = (tab: TabPanel.Tab) => {
		const tabName = tab.name as MyTabsForActive;
		const { color, backgroundColor, border } = mainStyle[tabName];
		return (
			<div className="space-y-3.5">
				<MyColorPicker
					label={__("Color", "wcb")}
					onChange={(value) =>
						setAttr__({
							...panelData,
							mainStyle: {
								...mainStyle,
								[tabName]: {
									...mainStyle[tabName],
									color: value,
								},
							},
						})
					}
					color={color}
				/>
				<MyColorPicker
					label={__("Background color", "wcb")}
					onChange={(value) =>
						setAttr__({
							...panelData,
							mainStyle: {
								...mainStyle,
								[tabName]: {
									...mainStyle[tabName],
									backgroundColor: value,
								},
							},
						})
					}
					color={backgroundColor}
				/>

				<MyBorderControl
					borderControl={border}
					setAttrs__border={(border: MyBorderControlData) => {
						setAttr__({
							...panelData,
							mainStyle: {
								...mainStyle,
								[tabName]: {
									...mainStyle[tabName],
									border,
								},
							},
						});
					}}
				/>
			</div>
		);
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Pagination", "wcb")}
		>
			<div className="space-y-4">
				<TabPanel
					className={`wcb-bodyControls__panel`}
					activeClass="active-tab"
					initialTabName="Normal"
					tabs={PANEL_PAGINATION_TABS}
				>
					{renderTabContent}
				</TabPanel>

				<MyRadioGroup
					label={__("Justify content", "wcb")}
					hasResponsive={false}
					onChange={(value) => {
						setAttr__({
							...panelData,
							justifyContent: value,
						});
					}}
					value={justifyContent}
				/>

				<MyUnitControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							marginTop: {
								...marginTop,
								[deviceType]: value,
							},
						});
					}}
					value={MARGIN_TOP}
					units={MY_GAP_UNITS}
					label={__("Margin Top", "wcb")}
					hasResponsive
				/>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StylePagination;
