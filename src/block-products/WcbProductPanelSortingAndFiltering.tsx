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
import ProductCategoryControl from "./product-category-control";
import ProductTagControl from "./product-tag-control";
import MyDisclosure from "../components/controls/MyDisclosure";
import ProductAttributeTermControl from "./product-attribute-term-control";

export interface WCB_PRODUCTS_PANEL_SORTINGANDFILTERING {
	emptyMessage: string;
	numberOfColumn: HasResponsive<number>;
	isEqualHeight: boolean;
	isOnSale: boolean;
	stockStatus: string[];
	categories: string[];
	tags: string[];
	attributes: any[];
	keyword: string;
	catOperator: string;
	tagOperator: string;
	attrOperator: string;
	orderBy: string;
	order: string;
}
export const WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING =
	{
		emptyMessage: "No post found!",
		numberOfColumn: { Desktop: 3 },
		isEqualHeight: true,
		isOnSale: false,
		stockStatus: [],
		categories: [],
		tags: [],
		attributes: [],
		keyword: "",
		catOperator: "any",
		tagOperator: "any",
		attrOperator: "any",
		order: "",
		orderBy: "",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING;
	setAttr__: (data: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING) => void;
}

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

	const STOCK_STATUS_OPTIONS = get_STOCK_STATUS_OPTIONS();

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

					setAttr__({
						...panelData,
						order,
						orderBy,
					});
				}}
				options={PRESETS}
				value={PRESETS.find(
					(option) => option.key === `${panelData.orderBy}/${panelData.order}`
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
				checked={!!panelData.isOnSale}
				onChange={(isOnSale) => {
					setAttr__({
						...panelData,
						isOnSale,
					});
				}}
			/>

			<FormTokenField
				label={__("Stock status", "wcb")}
				onChange={(statusLabels) => {
					const __woocommerceStockStatus = statusLabels
						.map(getStockStatusIdByLabel)
						.filter(Boolean) as string[];

					setAttr__({
						...panelData,
						stockStatus: __woocommerceStockStatus,
					});
				}}
				suggestions={Object.values(STOCK_STATUS_OPTIONS)}
				// @ts-ignore
				validateInput={(value: string) =>
					Object.values(STOCK_STATUS_OPTIONS).includes(value)
				}
				value={
					panelData.stockStatus.map((key) => STOCK_STATUS_OPTIONS[key]) || []
				}
				__experimentalExpandOnFocus={true}
			/>
			{/*  */}
			<MyDisclosure label="PRODUCT ATTRIBUTES">
				<ProductAttributeTermControl
					selected={panelData.attributes}
					onChange={(value = []) => {
						const result = value.map(({ id, attr_slug: attributeSlug }) => ({
							id,
							attr_slug: attributeSlug,
						}));
						setAttr__({ ...panelData, attributes: result });
					}}
					operator={panelData.attrOperator}
					onOperatorChange={(value = "any") =>
						setAttr__({ ...panelData, attrOperator: value })
					}
					isCompact
				/>
			</MyDisclosure>

			<MyDisclosure label="PRODUCT CATEGORIES">
				<ProductCategoryControl
					selected={panelData.categories}
					operator={panelData.catOperator}
					onOperatorChange={(operator) => {
						setAttr__({
							...panelData,
							catOperator: operator,
						});
					}}
					onChange={(value) => {
						const ids = value.map(({ id }) => id);
						setAttr__({
							...panelData,
							categories: ids,
						});
					}}
				/>
			</MyDisclosure>

			<MyDisclosure label="PRODUCT TAGS">
				<ProductTagControl
					selected={panelData.tags}
					operator={panelData.tagOperator}
					onOperatorChange={(operator) => {
						setAttr__({
							...panelData,
							tagOperator: operator,
						});
					}}
					onChange={(value) => {
						const ids = value.map(({ id }) => id);
						setAttr__({
							...panelData,
							tags: ids,
						});
					}}
				/>
			</MyDisclosure>

			<InputControl
				value={panelData.keyword}
				label={__("KEYWORD", "wcb")}
				onChange={(nextValue) =>
					setAttr__({ ...panelData, keyword: nextValue })
				}
			/>

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
