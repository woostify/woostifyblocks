import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyQueryControls, {
	MyQueryControlData,
	MY_QUERIES_DEMO_DATA,
} from "../components/controls/MyQueryControls/MyQueryControls";

export interface WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING {
	queries: MyQueryControlData;
}
export const WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING =
	{
		queries: MY_QUERIES_DEMO_DATA,
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
	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Sorting and filtering", "wcb")}
		>
			<MyQueryControls
				queriesControl={panelData.queries}
				setAttrs__queries={(queries) => {
					setAttr__({ ...panelData, queries });
				}}
			/>
		</PanelBody>
	);
};

export default WcbPostsGridPanelSortingAndFiltering;
