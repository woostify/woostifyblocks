import React, { FC, useCallback } from "react";
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
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
import { Option } from "../../../types";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_MAX_ITEMS = 100;
const MAX_CATEGORIES_SUGGESTIONS = 20;

export interface MyQueryControlData {
	postType: string;
	taxonomy: string;
	//
	selectedAuthorId: number;
	selectedTerms: any[];
	numberOfItems: number;
	numberOfColumn: number;
	offsetPost: number;
	order: Order;
	orderBy: Orderby;
	maxItems?: number;
	minItems?: number;
	//
	isExcludeCurrentPost: boolean;
	isOffsetStartingPost: boolean;
	//
}
interface Props {
	className?: string;
	queriesControl: MyQueryControlData;
	setAttrs__queries: (data: MyQueryControlData) => void;
}

export const MY_QUERIES_DEMO_DATA: MyQueryControlData = {
	postType: "post",
	taxonomy: "category",
	selectedAuthorId: 0,
	selectedTerms: [],
	numberOfItems: 10,
	order: "asc",
	orderBy: "date",
	maxItems: DEFAULT_MAX_ITEMS,
	minItems: DEFAULT_MIN_ITEMS,
	numberOfColumn: 2,
	isExcludeCurrentPost: true,
	isOffsetStartingPost: false,
	offsetPost: 0,
};

const MyQueryControls: FC<Props> = ({
	queriesControl = MY_QUERIES_DEMO_DATA,
	setAttrs__queries,
	className,
}) => {
	const {
		postType = "post",
		taxonomy = "category",
		//
		selectedAuthorId = [],
		selectedTerms = [],
		numberOfItems = 10,
		order = "ASC",
		orderBy = "date",
		maxItems = DEFAULT_MAX_ITEMS,
		minItems = DEFAULT_MIN_ITEMS,
		//
		numberOfColumn = 2,
		isExcludeCurrentPost = true,
		isOffsetStartingPost = false,
		offsetPost = 0,
	} = queriesControl;

	const {
		authorList,
		postTypesList,
		taxonomiesList,
		termSuggestionList,
		termList,
	} = useSelect(
		(select) => {
			const {
				getEntityRecords,
				getUsers,
				getTaxonomies,
				getPostTypes,
			}: SelectCoreTypes = select(coreStore) as SelectCoreTypes;

			// const settings = select(blockEditorStore).getSettings();
			const termList: any[] | undefined = getEntityRecords(
				"taxonomy",
				taxonomy,
				CATEGORIES_LIST_QUERY
			);
			const termSuggestionList = termList?.map((item) => item.name);
			return {
				postTypesList: getPostTypes(),
				authorList: getUsers(USERS_LIST_QUERY),
				taxonomiesList: getTaxonomies(),
				termSuggestionList,
				termList,
			};
		},
		[taxonomy]
	);

	const postTypeOptions: Option[] =
		postTypesList
			?.filter((item) => {
				return item?.slug !== "attachment" && item?.viewable;
			})
			?.map((item) => ({
				label: item.name,
				value: item.slug,
			})) || [];

	const getTaxonomiesAvailablsesByPostType = (type = postType): string[] => {
		return (
			postTypesList?.filter((item) => {
				return item?.slug === type;
			})[0]?.taxonomies || []
		);
	};

	const taxonomiesAvailables = getTaxonomiesAvailablsesByPostType();

	const taxonomyOptions: Option[] =
		taxonomiesList
			?.filter((item) => {
				return taxonomiesAvailables.includes(item?.slug);
			})
			?.map((item) => ({
				label: item.name,
				value: item.slug,
			})) || [];

	const taxonomyValue = taxonomy || taxonomiesAvailables[0];
	const taxonomyLabel = taxonomyOptions?.filter(
		(item) => item.value === taxonomyValue
	)[0]?.label;

	//
	const handlePostTypeChange = (postType: string) => {
		setAttrs__queries({
			...queriesControl,
			postType,
			taxonomy: getTaxonomiesAvailablsesByPostType(postType)[0] || "",
			selectedTerms: [],
		});
	};

	const handleTaxonomyChange = (taxonomy: string) => {
		setAttrs__queries({
			...queriesControl,
			taxonomy,
			selectedTerms: [],
		});
	};

	const handleSelectTerms = (tokens: string[]) => {
		const termSuggestions =
			termList?.reduce(
				(accumulator, category) => ({
					...accumulator,
					[category.name]: category,
				}),
				{}
			) ?? {};
		const hasNoSuggestion = tokens.some(
			(token) => typeof token === "string" && !termSuggestions[token]
		);
		if (hasNoSuggestion) {
			return;
		}
		const selectedTerms = tokens.map((token) => {
			return typeof token === "string" ? termSuggestions[token] : token;
		});
		if (selectedTerms.includes(null)) {
			return false;
		}
		setAttrs__queries({
			...queriesControl,
			selectedTerms,
		});
	};

	const handleOrderChange = (order: Order) => {
		setAttrs__queries({
			...queriesControl,
			order,
		});
	};

	const handleOrderByChange = (orderBy: Orderby) => {
		setAttrs__queries({
			...queriesControl,
			orderBy,
		});
	};

	const handleAuthorChange = (authorId: number) => {
		setAttrs__queries({
			...queriesControl,
			selectedAuthorId: authorId,
		});
	};

	const handleNumberOfColumnChange = (numberOfColumn: number) => {
		setAttrs__queries({
			...queriesControl,
			numberOfColumn,
		});
	};

	const handleNumberOfItemsChange = (numberOfItems: number) => {
		setAttrs__queries({
			...queriesControl,
			numberOfItems,
		});
	};

	const handleOffsetPostChange = (number: number) => {
		setAttrs__queries({
			...queriesControl,
			offsetPost: number,
		});
	};

	const handleToogleExcludeCurrentPost = (checked: boolean) => {
		setAttrs__queries({
			...queriesControl,
			isExcludeCurrentPost: checked,
		});
	};

	const handleToogleOffsetStartingPost = (checked: boolean) => {
		setAttrs__queries({
			...queriesControl,
			isOffsetStartingPost: checked,
		});
	};

	return (
		<>
			{postTypeOptions && postTypeOptions.length ? (
				<MySelect
					label={__("Post type", "wcb")}
					value={postType}
					options={postTypeOptions}
					onChange={handlePostTypeChange}
				/>
			) : null}

			{taxonomyOptions && taxonomyOptions.length ? (
				<MySelect
					label={__("Taxonomy", "wcb")}
					value={taxonomy}
					options={taxonomyOptions}
					onChange={handleTaxonomyChange}
				/>
			) : null}

			{termSuggestionList && termSuggestionList.length ? (
				<FormTokenField
					label={__(taxonomyLabel, "wcb")}
					value={
						selectedTerms &&
						selectedTerms.map((item) => ({
							id: item.id,
							value: item.name || item.value,
						}))
					}
					suggestions={termSuggestionList}
					onChange={handleSelectTerms}
					maxSuggestions={MAX_CATEGORIES_SUGGESTIONS}
				/>
			) : null}
			{/*  ---------------------------- */}

			{/* ------- */}
			<SelectControl
				label={__("Order by", "wcb")}
				value={`${orderBy}/${order}`}
				options={MY_ORDER_OPTIONS}
				onChange={(value) => {
					const [newOrderBy, newOrder] = value.split("/");
					if (newOrder !== order) {
						handleOrderChange(newOrder as Order);
					}
					if (newOrderBy !== orderBy) {
						handleOrderByChange(newOrderBy as Orderby);
					}
				}}
			/>

			{/*  */}
			<AuthorSelect
				authorList={authorList}
				label={__("Author", "wcb")}
				noOptionLabel={__("All")}
				selectedAuthorId={selectedAuthorId}
				onChange={handleAuthorChange}
			/>

			{/*  */}
			<ToggleControl
				onChange={handleToogleExcludeCurrentPost}
				checked={isExcludeCurrentPost}
				label={__("Exclude Current Post", "wcb")}
			/>

			{/*  */}
			<ToggleControl
				label={__("Offset starting post", "wcb")}
				onChange={handleToogleOffsetStartingPost}
				checked={isOffsetStartingPost}
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

			{isOffsetStartingPost ? (
				<NumberControl
					label={__("Offset By", "wcb")}
					labelPosition="edeg"
					min={0}
					value={offsetPost}
					onChange={handleOffsetPostChange}
					isShiftStepEnabled={true}
					shiftStep={10}
				/>
			) : null}

			{/*  */}
			<RangeControl
				label={__("Number of items", "wcb")}
				value={numberOfItems}
				onChange={handleNumberOfItemsChange}
				min={minItems}
				max={maxItems}
				required
			/>

			{/*  */}
			<RangeControl
				label={__("Columns", "wcb")}
				value={numberOfColumn}
				onChange={handleNumberOfColumnChange}
				min={minItems}
				max={numberOfItems <= 6 ? numberOfItems : 6}
				required
			/>
		</>
	);
};

export default MyQueryControls;
