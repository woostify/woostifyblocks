import React, { FC } from "react";
import { get, pickBy } from "lodash";
import { __ } from "@wordpress/i18n";
import { dateI18n, format, getSettings } from "@wordpress/date";
import {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	// @ts-ignore
	__experimentalImageSizeControl as ImageSizeControl,
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { pin, list, grid } from "@wordpress/icons";
import { store as noticeStore } from "@wordpress/notices";
import { useInstanceId } from "@wordpress/compose";
import CategorySelect from "./CategorySelect";
import AuthorSelect from "./AuthorSelect";
import {
	FormToggle,
	FormTokenField,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
// @ts-ignore
import { __experimentalNumberControl as NumberControl } from "@wordpress/components";
import {
	CATEGORIES_LIST_QUERY,
	MY_ORDER_OPTIONS,
	Order,
	Orderby,
	SelectCoreTypes,
	USERS_LIST_QUERY,
} from "./types";
import MySelect from "../MySelect";
import HelpText from "../HelpText";
import MyLabelControl from "../MyLabelControl/MyLabelControl";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_MAX_ITEMS = 100;
const MAX_CATEGORIES_SUGGESTIONS = 20;

interface MyQueryControlData {
	postType: string;
	taxonomy: string;
	//
	selectedAuthorId;
	selectedCategoryId;
	selectedCategories;
	numberOfItems;
	order;
	orderBy;
	maxItems;
	minItems;
	//
	featuredImageSizeSlug: string;
	//
}
interface Props {
	className?: string;
	queriesControl: MyQueryControlData;
	setAttrs__queries: (data: MyQueryControlData) => void;
}

export const MY_QUERIES_DEMO_DATA: MyQueryControlData = {
	// postType,
	// 	taxonomy,
	// 	//
	// 	featuredImageSizeSlug,
	// 	selectedAuthorId,
	// 	selectedCategoryId,
	// 	selectedCategories,
	// 	numberOfItems,
	// 	order,
	// 	orderBy,
	// 	maxItems = DEFAULT_MAX_ITEMS,
	// 	minItems = DEFAULT_MIN_ITEMS,
	// 	//
};

const MyQueryControls: FC<Props> = ({
	queriesControl = MY_QUERIES_DEMO_DATA,
	setAttrs__queries,
	className,
}) => {
	const {
		postType,
		taxonomy,
		//
		featuredImageSizeSlug,
		selectedAuthorId,
		selectedCategoryId,
		selectedCategories,
		numberOfItems,
		order,
		orderBy,
		maxItems = DEFAULT_MAX_ITEMS,
		minItems = DEFAULT_MIN_ITEMS,
		//
	} = queriesControl;

	const {
		typesList,
		authorList,
		categoriesList,
		defaultImageHeight,
		defaultImageWidth,
		imageSizes,
		latestPosts,
		taxonomyList,
	} = useSelect((select) => {
		const {
			getEntityRecords,
			getUsers,
			getPostTypes,
			getTaxonomies,
		}: SelectCoreTypes = select(coreStore) as SelectCoreTypes;

		const settings = select(blockEditorStore).getSettings();
		const catIds =
			selectedCategoryId && selectedCategoryId.length > 0
				? selectedCategoryId
				: [];
		const latestPostsQuery = pickBy(
			{
				categories: catIds,
				author: selectedAuthorId,
				order,
				orderby: orderBy,
				per_page: numberOfItems,
				_embed: "wp:featuredmedia",
			},
			(value) => typeof value !== "undefined"
		);

		return {
			defaultImageWidth: get(
				settings.imageDimensions,
				[featuredImageSizeSlug, "width"],
				0
			),
			defaultImageHeight: get(
				settings.imageDimensions,
				[featuredImageSizeSlug, "height"],
				0
			),
			imageSizes: settings.imageSizes,
			latestPosts: getEntityRecords("postType", "post", latestPostsQuery),
			categoriesList: getEntityRecords(
				"taxonomy",
				"category",
				CATEGORIES_LIST_QUERY
			),
			authorList: getUsers(USERS_LIST_QUERY),
			//
			typesList: getPostTypes(),
			taxonomyList: getTaxonomies(),
		};
	}, []);

	const postTypeOptions =
		typesList
			?.filter((item) => {
				return item?.slug !== "attachment" && item?.viewable;
			})
			?.map((item) => ({
				label: item.name,
				value: item.slug,
			})) || [];

	const taxonomyOptions =
		taxonomyList
			?.filter((item) => {
				return item?.types && item?.types?.length && item?.visibility?.public;
			})
			?.map((item) => ({
				label: item.name,
				value: item.slug,
			})) || [];
	//

	const categorySuggestions =
		categoriesList?.reduce(
			(accumulator, category) => ({
				...accumulator,
				[category.name]: category,
			}),
			{}
		) ?? {};
	//
	const onNumberOfItemsChange = (number: number) => {};
	const onAuthorChange = () => {};
	const onCategoryChange = () => {};
	const onOrderChange = (newOrder: Order) => {};
	const onOrderByChange = (newOrderBy: Orderby) => {};
	const onPostTypeChange = (postType: string) => {};
	const onTaxonomyChange = (postType: string) => {};
	const handleSelectCategories = (tokens) => {
		const hasNoSuggestion = tokens.some(
			(token) => typeof token === "string" && !categorySuggestions[token]
		);
		if (hasNoSuggestion) {
			return;
		}
		const allCategories = tokens.map((token) => {
			return typeof token === "string" ? categorySuggestions[token] : token;
		});
		if (allCategories.includes(null)) {
			return false;
		}
		onCategoryChange({ categories: allCategories });
	};
	//
	return (
		<>
			<MySelect
				label={__("Post type")}
				value={postType}
				options={postTypeOptions}
				onChange={(value) => {
					onPostTypeChange(value);
				}}
			/>

			<MySelect
				label={__("Taxonomy")}
				value={taxonomy}
				options={taxonomyOptions}
				onChange={(value) => {
					onTaxonomyChange(value);
				}}
			/>

			{/* ------- */}
			{onOrderChange && onOrderByChange && (
				<SelectControl
					label={__("Order by")}
					value={`${orderBy}/${order}`}
					options={MY_ORDER_OPTIONS}
					onChange={(value) => {
						const [newOrderBy, newOrder] = value.split("/");
						if (newOrder !== order) {
							onOrderChange(newOrder as Order);
						}
						if (newOrderBy !== orderBy) {
							onOrderByChange(newOrderBy as Orderby);
						}
					}}
				/>
			)}

			{categorySuggestions && (
				<FormTokenField
					key="query-controls-categories-select"
					label={__("Categories")}
					value={
						selectedCategories &&
						selectedCategories.map((item) => ({
							id: item.id,
							value: item.name || item.value,
						}))
					}
					suggestions={Object.keys(categorySuggestions)}
					onChange={handleSelectCategories}
					maxSuggestions={MAX_CATEGORIES_SUGGESTIONS}
				/>
			)}

			{onAuthorChange && (
				<AuthorSelect
					key="query-controls-author-select"
					authorList={authorList}
					label={__("Author")}
					noOptionLabel={__("All")}
					selectedAuthorId={selectedAuthorId}
					onChange={onAuthorChange}
				/>
			)}

			{/*  */}
			<ToggleControl label={__("Exclude Current Post", "wcb")} />

			{/*  */}
			<ToggleControl
				label={__("Offset starting post", "wcb")}
				help={
					<>
						{__(
							"Note: Enabling this will disable the Pagination. Setting the offset parameter overrides/ignores the paged parameter and breaks pagination."
						)}
						<a
							href="https://developer.wordpress.org/reference/classes/wp_query/#pagination-parameters:~:text=Warning%3A%20Setting%20the%20offset%20parameter%20overrides/ignores%20the%20paged%20parameter%20and%20breaks%20pagination.%20The%20%27offset%27%20parameter%20is%20ignored%20when%20%27posts_per_page%27%3D%3E%2D1%20(show%20all%20posts)%20is%20used."
							target="_blank"
							rel="noopener noreferrer"
						>
							Read more{" "}
						</a>
					</>
				}
			/>

			<NumberControl
				label={__("Offset By")}
				labelPosition="edeg"
				min={0}
				isShiftStepEnabled={true}
				value={1}
				shiftStep={10}
			/>

			{/*  */}
			{onNumberOfItemsChange && (
				<RangeControl
					key="query-controls-range-control"
					label={__("Number of items")}
					value={numberOfItems}
					onChange={onNumberOfItemsChange}
					min={minItems}
					max={maxItems}
					required
				/>
			)}
		</>
	);
};

export default MyQueryControls;
