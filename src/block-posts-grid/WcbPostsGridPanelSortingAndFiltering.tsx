import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyQueryControls, {
	MyQueryControlData,
	MY_QUERIES_DEMO_DATA,
} from "../components/controls/MyQueryControls/MyQueryControls";
// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING {
	queries: MyQueryControlData;
	emptyMessage: string;
	numberOfColumn: HasResponsive<number>;
	isEqualHeight: boolean;
}
export const WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING =
	{
		queries: MY_QUERIES_DEMO_DATA,
		emptyMessage: "No post found!",
		numberOfColumn: { Desktop: 3 },
		isEqualHeight: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING;
	setAttr__: (data: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING) => void;
}

const WcbPostsGridPanelSortingAndFiltering: FC<Props> = ({
	panelData = WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { currentDeviceValue: currentNumberOfColumn } =
		getValueFromAttrsResponsives(panelData.numberOfColumn, deviceType);

	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Sorting and filtering", "boostify-blocks")}
		>
			<MyQueryControls
				queriesControl={panelData.queries}
				setAttrs__queries={(queries) => {
					setAttr__({ ...panelData, queries });
				}}
			/>

			{/*  */}
			<RangeControl
				label={
					<MyLabelControl hasResponsive>{__("Columns", "boostify-blocks")}</MyLabelControl>
				}
				value={currentNumberOfColumn || 1}
				onChange={(number) => {
					setAttr__({
						...panelData,
						numberOfColumn: {
							...panelData.numberOfColumn,
							[deviceType]: number || 2,
						},
					});
				}}
				min={1}
				max={6}
				required
			/>

			<ToggleControl
				label={__("Equal height", "boostify-blocks")}
				checked={panelData.isEqualHeight}
				onChange={(checked) => {
					setAttr__({ ...panelData, isEqualHeight: checked });
				}}
			/>

			<InputControl
				value={panelData.emptyMessage}
				label={__("Message when Posts Not Found", "boostify-blocks")}
				onChange={(nextValue) =>
					setAttr__({ ...panelData, emptyMessage: nextValue })
				}
			/>
		</PanelBody>
	);
};

export default WcbPostsGridPanelSortingAndFiltering;
