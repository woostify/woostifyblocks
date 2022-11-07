import {
	PanelBody,
	TabPanel,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
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

type PostGridPagiantionType = {
	[K in MyTabsForActive]: {
		color?: string;
		backgroundColor?: string;
		border: MyBorderControlData;
	};
};

const MY_POST_GRID_MAIN_STYLE_DEMO: PostGridPagiantionType = {
	Normal: {
		color: "",
		backgroundColor: "",
		border: MY_BORDER_CONTROL_DEMO,
	},
	Active: {
		color: "",
		backgroundColor: "",
		border: MY_BORDER_CONTROL_DEMO,
	},
};

export interface WCB_POST_GRID_PANEL_STYLE_PAGINATION {
	mainStyle: PostGridPagiantionType;
	marginTop: HasResponsive<string>;
}

export const WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO: WCB_POST_GRID_PANEL_STYLE_PAGINATION =
	{
		mainStyle: MY_POST_GRID_MAIN_STYLE_DEMO,
		marginTop: { Desktop: "1rem" },
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
	const { mainStyle, marginTop } = panelData;
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
