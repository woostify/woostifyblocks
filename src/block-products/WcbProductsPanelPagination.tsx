import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MaxPageToShowInput from "../components/controls/MaxPageToShowInput";
export interface WCB_PRODUCTS_PANEL_PAGINATION {
	isShowPagination: boolean;
	pageLimit: number;
	previousText: string;
	nextText: string;
	iconName: "none" | "arrow" | "chevron" | "chevron-double";
}

export const WCB_PRODUCTS_PANEL_PAGINATION_DEMO: WCB_PRODUCTS_PANEL_PAGINATION =
	{
		isShowPagination: true,
		pageLimit: 0,
		previousText: "",
		nextText: "",
		iconName: "arrow",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_PAGINATION;
	setAttr__: (data: WCB_PRODUCTS_PANEL_PAGINATION) => void;
}

export const WCB_POSTS_GRID_PAGINATION_PLANS_ICONS: MyRadioItem<
	WCB_PRODUCTS_PANEL_PAGINATION["iconName"]
>[] = [
	{
		name: "none",
		icon: `None`,
	},
	{
		name: "arrow",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
			  </svg>`,
	},
	{
		name: "chevron",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			  </svg> `,
	},
	{
		name: "chevron-double",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			  </svg>`,
	},
];

const WcbProductsPanelPagination: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isShowPagination, pageLimit, iconName, nextText, previousText } =
		panelData;

	const renderRadioIcons = () => {
		return (
			<MyRadioGroup
				label={__("Prev & Next Icons", "wcb")}
				onChange={(name) => {
					setAttr__({ ...panelData, iconName: name as any });
				}}
				plans={WCB_POSTS_GRID_PAGINATION_PLANS_ICONS}
				value={iconName}
				hasResponsive={false}
			/>
		);
	};

	const renderMore = () => {
		return (
			<>
				<MaxPageToShowInput
					value={pageLimit}
					onChange={(value) => {
						if (isNaN(value) || value < 0) {
							return;
						}
						setAttr__({ ...panelData, pageLimit: Number(value || 10) });
					}}
				/>

				<InputControl
					value={panelData.previousText}
					label={__("Previous text", "wcb")}
					onChange={(nextValue) =>
						setAttr__({ ...panelData, previousText: nextValue })
					}
				/>

				<InputControl
					value={panelData.nextText}
					label={__("Next text", "wcb")}
					onChange={(nextValue) =>
						setAttr__({ ...panelData, nextText: nextValue })
					}
				/>

				{renderRadioIcons()}
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

export default WcbProductsPanelPagination;
