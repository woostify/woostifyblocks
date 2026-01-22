/**
 * External dependencies
 */
import React, { useEffect, useState, FC } from "react";
import { __, _n, sprintf } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import classNames from "classnames";

/**
 * Internal dependencies
 */
import "./style.scss";
import SearchListControl from "../search-list-control/search-list-control";
import { formatError, getProductTags } from "../utils";
import SearchListItem from "../search-list-control/item";
import {
	SearchListItemsType,
	SearchListItemType,
} from "../search-list-control/types";
import { WError } from "../product-category-control";

export type ProductTaxOperator = "any" | "all" | "not_in";

export const PRODUCT_TAGS_OPERATOR_OPTIONS: {
	label: string;
	value: ProductTaxOperator;
}[] = [
	{
		label: __("Any selected tags", "boostify-blocks"),
		value: "any",
	},
	{
		label: __("All selected tags", "boostify-blocks"),
		value: "all",
	},
	{
		label: __("Not in all selected tags", "boostify-blocks"),
		value: "not_in",
	},
];

interface ProductTag extends SearchListItemType {}
interface Props {
	onChange?: (data: SearchListItemsType) => void;
	selected?: ProductTag["id"][];
	isCompact?: boolean;
	isSingle?: boolean;
	showReviewCount?: boolean;
	operator: ProductTaxOperator;
	onOperatorChange?: (o: ProductTaxOperator) => void;
}

const ProductTagControl: FC<Props> = ({
	onChange = () => {},
	selected = [],
	isCompact = true,
	isSingle = false,
	showReviewCount = false,
	onOperatorChange,
	operator = "any",
}) => {
	const [tags, setTags] = useState<ProductTag[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<WError | null>(null);

	useEffect(() => {
		setIsLoading(true);
		getProductTags({ selected: [], search: "" })
			.then((tags) => {
				setTags(tags as ProductTag[]);
				setIsLoading(false);
				setError(null);
			})
			.catch(async (e) => {
				const error = await formatError(e);
				setTags([]);
				setIsLoading(false);
				setError(error);
			});
	}, []);

	const renderItem = (args) => {
		const { item, search, depth = 0 } = args;

		const accessibleName = !item.breadcrumbs.length
			? item.name
			: `${item.breadcrumbs.join(", ")}, ${item.name}`;

		const listItemAriaLabel = showReviewCount
			? sprintf(
					/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
					_n(
						"%1$s, has %2$d review",
						"%1$s, has %2$d reviews",
						item.review_count,
						"boostify-blocks"
					),
					accessibleName,
					item.review_count
			  )
			: sprintf(
					/* translators: %1$s is the item name, %2$d is the count of products for the item. */
					_n(
						"%1$s, has %2$d product",
						"%1$s, has %2$d products",
						item.count,
						"boostify-blocks"
					),
					accessibleName,
					item.count
			  );

		const listItemCountLabel = showReviewCount
			? sprintf(
					/* translators: %d is the count of reviews. */
					_n("%d review", "%d reviews", item.review_count, "boostify-blocks"),
					item.review_count
			  )
			: sprintf(
					/* translators: %d is the count of products. */
					_n("%d product", "%d products", item.count, "boostify-blocks"),
					item.count
			  );
		return (
			<SearchListItem
				className={classNames(
					"woocommerce-product-categories__item",
					"has-count",
					{
						"is-searching": search.length > 0,
						"is-skip-level": depth === 0 && item.parent !== 0,
					}
				)}
				{...args}
				countLabel={listItemCountLabel}
				aria-label={listItemAriaLabel}
			/>
		);
	};

	const messages = {
		clear: __("Clear all product tags", "boostify-blocks"),
		list: __("Product Tags", "boostify-blocks"),
		noItems: __("Your store doesn't have any product tags.", "boostify-blocks"),
		search: __("Search for product tags", "boostify-blocks"),
		selected: (n) =>
			sprintf(
				/* translators: %d is the count of selected tags. */
				_n("%d tag selected", "%d tags selected", n, "boostify-blocks"),
				n
			),
		updated: __("Tag search results updated.", "boostify-blocks"),
	};

	if (error) {
		return (
			<code className="text-red-500 text-sm p-5">{JSON.stringify(error)}</code>
		);
	}

	return (
		<>
			<SearchListControl
				className="woocommerce-product-categories"
				list={tags}
				isLoading={isLoading}
				// @ts-ignore
				selected={selected
					.map((id) => tags.find((tag) => tag.id === id))
					.filter(Boolean)}
				onChange={(search) => {
					onChange(search);
				}}
				renderItem={renderItem}
				messages={messages}
				isCompact={isCompact}
				isHierarchical
				isSingle={isSingle}
			/>
			{!!onOperatorChange && (
				<div hidden={selected.length < 1}>
					<SelectControl
						className="woocommerce-product-categories__operator"
						label={__("Display products matching", "boostify-blocks")}
						help={__("Select the operator of the tag items.", "boostify-blocks")}
						value={operator}
						onChange={onOperatorChange}
						options={PRODUCT_TAGS_OPERATOR_OPTIONS}
					/>
				</div>
			)}
		</>
	);
};

export default ProductTagControl;
