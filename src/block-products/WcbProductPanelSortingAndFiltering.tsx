import {
	CustomSelectControl,
	FormTokenField,
	PanelBody,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";

// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import {
	ProductQueryBlock,
	ProductQueryBlockQuery,
	QueryBlockQuery,
} from "./types";
import {
	QUERY_DEFAULT_ATTRIBUTES,
	get_STOCK_STATUS_OPTIONS,
} from "./constants";

export interface WCB_PRODUCTS_PANEL_SORTINGANDFILTERING {
	queries: ProductQueryBlockQuery;
	emptyMessage: string;
	numberOfColumn: HasResponsive<number>;
	isEqualHeight: boolean;
}
export const WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING =
	{
		queries: QUERY_DEFAULT_ATTRIBUTES.query,
		emptyMessage: "No post found!",
		numberOfColumn: { Desktop: 3 },
		isEqualHeight: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	setAttr__: (data: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING) => void;
}

/**
 * Gets the id of a specific stock status from its text label
 *
 * In theory, we could use a `saveTransform` function on the
 * `FormFieldToken` component to do the conversion. However, plugins
 * can add custom stock statii which don't conform to our naming
 * conventions.
 */
function getStockStatusIdByLabel(statusLabel: FormTokenField.Value) {
	const label =
		typeof statusLabel === "string" ? statusLabel : statusLabel.value;

	return Object.entries(get_STOCK_STATUS_OPTIONS()).find(
		([, value]) => value === label
	)?.[0];
}

const WcbProductPanelSortingAndFiltering: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { currentDeviceValue: currentNumberOfColumn } =
		getValueFromAttrsResponsives(panelData.numberOfColumn, deviceType);

	const query = panelData.queries;
	const STOCK_STATUS_OPTIONS = get_STOCK_STATUS_OPTIONS();
	console.log(888, { STOCK_STATUS_OPTIONS });

	const renderPopularPresets = () => {
		const PRESETS = [
			{
				key: "title/asc",
				name: __("Sorted by title", "woo-gutenberg-products-block"),
			},
			{ key: "date/desc", name: __("Newest", "woo-gutenberg-products-block") },
			{
				key: "popularity/desc",
				name: __("Best Selling", "woo-gutenberg-products-block"),
			},
			{
				key: "rating/desc",
				name: __("Top Rated", "woo-gutenberg-products-block"),
			},
		];
		return (
			<CustomSelectControl
				label={__("Arrange products by popular pre-sets.", "wcb")}
				onChange={(option) => {
					if (!option.selectedItem?.key) return;

					const [orderBy, order] = option.selectedItem?.key?.split("/") as [
						ProductQueryBlockQuery["orderBy"],
						ProductQueryBlockQuery["order"]
					];

					// setQueryAttribute(props, { order, orderBy });
				}}
				options={PRESETS}
				value={PRESETS.find(
					(option) => option.key === `${query.orderBy}/${query.order}`
				)}
			/>
		);
	};

	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Sorting and filtering", "wcb")}
		>
			{renderPopularPresets()}

			<ToggleControl
				label={__("Show only products on sale", "wcb")}
				checked={query.__woocommerceOnSale || false}
				onChange={(__woocommerceOnSale) => {
					// setQueryAttribute( props, {
					// 	__woocommerceOnSale,
					// } );
				}}
			/>

			<FormTokenField
				label={__("Stock status", "wcb")}
				onChange={(statusLabels) => {
					const __woocommerceStockStatus = statusLabels
						.map(getStockStatusIdByLabel)
						.filter(Boolean) as string[];

					// setQueryAttribute( props, {
					// 	__woocommerceStockStatus,
					// } );
				}}
				suggestions={Object.values(STOCK_STATUS_OPTIONS)}
				validateInput={(value: string) =>
					Object.values(STOCK_STATUS_OPTIONS).includes(value)
				}
				value={
					query?.__woocommerceStockStatus?.map(
						(key) => STOCK_STATUS_OPTIONS[key]
					) || []
				}
				__experimentalExpandOnFocus={true}
			/>
			{/*  */}

			{/*  */}
			<RangeControl
				label={
					<MyLabelControl hasResponsive>{__("Columns", "wcb")}</MyLabelControl>
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
				label={__("Equal height", "wcb")}
				checked={panelData.isEqualHeight}
				onChange={(checked) => {
					setAttr__({ ...panelData, isEqualHeight: checked });
				}}
			/>

			<InputControl
				value={panelData.emptyMessage}
				label={__("Message when Posts Not Found", "wcb")}
				onChange={(nextValue) =>
					setAttr__({ ...panelData, emptyMessage: nextValue })
				}
			/>
		</PanelBody>
	);
};

export default WcbProductPanelSortingAndFiltering;
