/**
 * External dependencies
 */
import React from "react";
import { __, _n, sprintf } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import { withInstanceId } from "@wordpress/compose";
import classNames from "classnames";

/**
 * Internal dependencies
 */
import SearchListItem from "../search-list-control/item";
import ExpandableSearchListItem from "../expandable-search-list-item/expandable-search-list-item";
import { SearchListControl } from "../search-list-control/search-list-control";
import withAttributes from "../hocs/with-attributes";
import { ProductTaxOperator } from "../product-tag-control";

export const PRODUCT_ATTRS_OPERATOR_OPTIONS: {
	label: string;
	value: ProductTaxOperator;
}[] = [
	{
		label: __("Any selected attributes", "boostify-blocks"),
		value: "any",
	},
	{
		label: __("All selected attributes", "boostify-blocks"),
		value: "all",
	},
	{
		label: __("Not in all selected attributes", "boostify-blocks"),
		value: "not_in",
	},
];

const ProductAttributeTermControl = ({
	attributes,
	error,
	expandedAttribute,
	onChange,
	onExpandAttribute,
	onOperatorChange,
	instanceId,
	isCompact,
	isLoading,
	operator,
	selected = [],
	termsAreLoading,
	termsList,
}) => {
	const renderItem = (args) => {
		const { item, search, depth = 0 } = args;
		const classes = [
			"woocommerce-product-attributes__item",
			"woocommerce-search-list__item",
			{
				"is-searching": search.length > 0,
				"is-skip-level": depth === 0 && item.parent !== 0,
			},
		];

		if (!item.breadcrumbs.length) {
			const isSelected = expandedAttribute === item.id;
			return (
				<ExpandableSearchListItem
					{...args}
					className={classNames(...classes, {
						"is-selected": isSelected,
					})}
					isSelected={isSelected}
					item={item}
					isLoading={termsAreLoading}
					disabled={item.count === "0"}
					onSelect={({ id }) => {
						return () => {
							onChange([]);
							onExpandAttribute(id);
						};
					}}
					name={`attributes-${instanceId}`}
					countLabel={sprintf(
						/* translators: %d is the count of terms. */
						_n("%d term", "%d terms", item.count, "boostify-blocks"),
						item.count
					)}
					aria-label={sprintf(
						/* translators: %1$s is the item name, %2$d is the count of terms for the item. */
						_n(
							"%1$s, has %2$d term",
							"%1$s, has %2$d terms",
							item.count,
							"boostify-blocks"
						),
						item.name,
						item.count
					)}
				/>
			);
		}

		const itemName = `${item.breadcrumbs[0]}: ${item.name}`;

		return (
			<SearchListItem
				{...args}
				name={`terms-${instanceId}`}
				className={classNames(...classes, "has-count")}
				countLabel={sprintf(
					/* translators: %d is the count of products. */
					_n("%d product", "%d products", item.count, "boostify-blocks"),
					item.count
				)}
				aria-label={sprintf(
					/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
					_n(
						"%1$s, has %2$d product",
						"%1$s, has %2$d products",
						item.count,
						"boostify-blocks"
					),
					itemName,
					item.count
				)}
			/>
		);
	};

	const currentTerms = termsList[expandedAttribute] || [];
	const currentList = [...attributes, ...currentTerms];

	const messages = {
		clear: __("Clear all product attributes", "boostify-blocks"),
		list: __("Product Attributes", "boostify-blocks"),
		noItems: __("Your store doesn't have any product attributes.", "boostify-blocks"),
		search: __("Search for product attributes", "boostify-blocks"),
		selected: (n) =>
			sprintf(
				/* translators: %d is the count of attributes selected. */
				_n("%d attribute selected", "%d attributes selected", n, "boostify-blocks"),
				n
			),
		updated: __("Product attribute search results updated.", "boostify-blocks"),
	};

	if (error) {
		return <code>{JSON.stringify(error)}</code>;
	}

	return (
		<>
			<SearchListControl
				className="woocommerce-product-attributes"
				list={currentList}
				isLoading={isLoading}
				selected={selected
					.map(({ id }) =>
						currentList.find((currentListItem) => currentListItem.id === id)
					)
					.filter(Boolean)}
				onChange={onChange}
				renderItem={renderItem}
				messages={messages}
				isCompact={isCompact}
				isHierarchical
				isSingle={false}
			/>
			{!!onOperatorChange && (
				<div hidden={selected.length < 1}>
					<SelectControl
						className="woocommerce-product-attributes__operator"
						label={__("Display products matching", "boostify-blocks")}
						help={__("Select the operator of the attribute items.", "boostify-blocks")}
						value={operator}
						onChange={onOperatorChange}
						options={PRODUCT_ATTRS_OPERATOR_OPTIONS}
					/>
				</div>
			)}
		</>
	);
};

export default withAttributes(withInstanceId(ProductAttributeTermControl));
