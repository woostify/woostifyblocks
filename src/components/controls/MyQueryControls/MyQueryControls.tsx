import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import {
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
import AuthorSelect from "./AuthorSelect";
import HelpText from "../HelpText";

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_MAX_ITEMS = 100;
const MAX_CATEGORIES_SUGGESTIONS = 20;

export interface MyQueryControlData {
	postType: string;
	taxonomySlug: string;
	taxonomyRestbase: string;
	//
	selectedAuthorId: number;
	selectedTerms: any[];
	numberOfItems: number;
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
	taxonomySlug: "category",
	taxonomyRestbase: "categories",
	selectedAuthorId: 0,
	selectedTerms: [],
	numberOfItems: 10,
	order: "asc",
	orderBy: "date",
	maxItems: DEFAULT_MAX_ITEMS,
	minItems: DEFAULT_MIN_ITEMS,
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
		taxonomySlug = "category",
		taxonomyRestbase = "categories",
		//
		selectedAuthorId = [],
		selectedTerms = [],
		numberOfItems = 10,
		order = "asc",
		orderBy = "date",
		maxItems = DEFAULT_MAX_ITEMS,
		minItems = DEFAULT_MIN_ITEMS,
		//
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
			}: // @ts-ignore
			SelectCoreTypes = select(coreStore) as SelectCoreTypes;

			// const settings = select(blockEditorStore).getSettings();
			const termList = getEntityRecords(
				"taxonomy",
				taxonomySlug,
				CATEGORIES_LIST_QUERY
			) as any[] | undefined;
			const termSuggestionList = termList?.map((item) => item.name) as
				| any[]
				| undefined;
			return {
				postTypesList: getPostTypes() as any[] | undefined,
				authorList: getUsers(USERS_LIST_QUERY) as any[] | undefined,
				taxonomiesList: getTaxonomies() as any[] | undefined,
				termSuggestionList,
				termList,
			};
		},
		[taxonomySlug]
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

	const getTaxonomySlugsAvailablsesByPostType = (type = postType): string[] => {
		return (
			postTypesList?.filter((item) => {
				return item?.slug === type;
			})[0]?.taxonomies || []
		);
	};

	const taxonomySlugsAvailables = getTaxonomySlugsAvailablsesByPostType();

	const taxonomyOptions: Option[] =
		taxonomiesList
			?.filter((item) => {
				return taxonomySlugsAvailables.includes(item?.slug);
			})
			?.map((item) => ({
				label: item.name,
				value: item.slug,
			})) || [];

	const taxonomyLabel = taxonomyOptions?.filter(
		(item) => item.value === (taxonomySlug || taxonomySlugsAvailables[0])
	)[0]?.label;

	//
	const handlePostTypeChange = (postType: string) => {
		const taxonomySlug =
			getTaxonomySlugsAvailablsesByPostType(postType)[0] || "";
		const taxonomyRestbase =
			taxonomiesList?.filter((item) => item.slug === taxonomySlug)[0]
				?.rest_base || "";
		setAttrs__queries({
			...queriesControl,
			postType,
			taxonomySlug,
			taxonomyRestbase,
			selectedTerms: [],
		});
	};

	const handleTaxonomyChange = (taxonomySlug: string) => {
		const taxonomyRestbase =
			taxonomiesList?.filter((item) => item.slug === taxonomySlug)[0]
				?.rest_base || "";
		setAttrs__queries({
			...queriesControl,
			taxonomySlug,
			taxonomyRestbase,
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

		console.log(111, { termSuggestions, tokens });

		const hasNoSuggestion = tokens.some(
			(token) => typeof token === "string" && !termSuggestions[token]
		);
		if (hasNoSuggestion) {
			return;
		}
		const selectedTerms = tokens.map((token) => {
			return typeof token === "string"
				? termSuggestions[token]
					? {
							id: termSuggestions[token].id,
							name: termSuggestions[token].name,
							slug: termSuggestions[token].slug,
							taxonomy: termSuggestions[token].taxonomy,
							link: termSuggestions[token].link,
							count: termSuggestions[token].count,
					  }
					: null
				: token;
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
					label={__("Post type", "boostify-blocks")}
					value={postType}
					options={postTypeOptions}
					onChange={handlePostTypeChange}
				/>
			) : null}

			{taxonomyOptions && taxonomyOptions.length ? (
				<MySelect
					label={__("Taxonomy", "boostify-blocks")}
					value={taxonomySlug}
					options={taxonomyOptions}
					onChange={handleTaxonomyChange}
				/>
			) : null}

			{termSuggestionList && termSuggestionList.length ? (
				<div>
					<FormTokenField
						label={__(taxonomyLabel, "boostify-blocks")}
						// @ts-ignore
						__experimentalExpandOnFocus
						value={
							selectedTerms &&
							selectedTerms.map((item) => ({
								...item,
								value: item.name || item.value,
							}))
						}
						placeholder={__("All", "boostify-blocks")}
						suggestions={termSuggestionList}
						onChange={handleSelectTerms}
						maxSuggestions={MAX_CATEGORIES_SUGGESTIONS}
						__experimentalShowHowTo={false}
					/>
					<HelpText>{__("Multiple values can be selected", "boostify-blocks")}</HelpText>
				</div>
			) : null}
			{/*  ---------------------------- */}

			{/* ------- */}
			<SelectControl
				label={__("Order by", "boostify-blocks")}
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
				label={__("Author", "boostify-blocks")}
				noOptionLabel={__("All")}
				selectedAuthorId={selectedAuthorId}
				onChange={handleAuthorChange}
			/>

			{/*  */}
			<ToggleControl
				onChange={handleToogleExcludeCurrentPost}
				checked={isExcludeCurrentPost}
				label={__("Exclude Current Post", "boostify-blocks")}
			/>

			{/*  */}
			<ToggleControl
				label={__("Offset starting post", "boostify-blocks")}
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
					label={__("Offset By", "boostify-blocks")}
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
				label={__("Number of items", "boostify-blocks")}
				value={numberOfItems}
				onChange={handleNumberOfItemsChange}
				min={minItems}
				max={maxItems}
				required
			/>
		</>
	);
};

export default MyQueryControls;
