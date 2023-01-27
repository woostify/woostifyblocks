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
interface ProductTag extends SearchListItemType {}
interface Props {
	onChange?: (data: SearchListItemsType) => void;
	selected?: ProductTag["id"][];
	isCompact?: boolean;
	isSingle?: boolean;
	showReviewCount?: boolean;
}

const ProductTagControl: FC<Props> = ({
	onChange = () => {},
	selected = [],
	isCompact = true,
	isSingle = true,
	showReviewCount = false,
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
						"wcb"
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
						"wcb"
					),
					accessibleName,
					item.count
			  );

		const listItemCountLabel = showReviewCount
			? sprintf(
					/* translators: %d is the count of reviews. */
					_n("%d review", "%d reviews", item.review_count, "wcb"),
					item.review_count
			  )
			: sprintf(
					/* translators: %d is the count of products. */
					_n("%d product", "%d products", item.count, "wcb"),
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
		clear: __("Clear all product categories", "wcb"),
		list: __("Product Categories", "wcb"),
		noItems: __("Your store doesn't have any product categories.", "wcb"),
		search: __("Search for product categories", "wcb"),
		selected: (n) =>
			sprintf(
				/* translators: %d is the count of selected categories. */
				_n("%d category selected", "%d categories selected", n, "wcb"),
				n
			),
		updated: __("Category search results updated.", "wcb"),
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
		</>
	);
};

export default ProductTagControl;
