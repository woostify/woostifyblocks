import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";

export interface WCB_POST_GRID_PANEL_PAGINATION {
	isShowPagination: boolean;
	pageLimit: number;
}

export const WCB_POST_GRID_PANEL_PAGINATION_DEMO: WCB_POST_GRID_PANEL_PAGINATION =
	{
		isShowPagination: true,
		pageLimit: 10,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_PAGINATION;
	setAttr__: (data: WCB_POST_GRID_PANEL_PAGINATION) => void;
}

const WcbPostGridPanelPagination: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_PAGINATION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isShowPagination, pageLimit } = panelData;

	const renderMore = () => {
		return (
			<>
				<RangeControl
					label={__("Page Limit", "wcb")}
					value={pageLimit}
					onChange={(e) => {
						setAttr__({ ...panelData, pageLimit: e || 10 });
					}}
					min={1}
					max={100}
					required
				/>
			</>
		);
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Pagination", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show pagination", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowPagination: checked })
					}
					checked={isShowPagination}
				/>

				{isShowPagination && renderMore()}
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelPagination;
