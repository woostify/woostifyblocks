import { __ } from "@wordpress/i18n";

export type Order = "asc" | "desc";
export type Orderby =
	| "none"
	| "ID"
	| "author"
	| "title"
	| "name"
	| "date"
	| "modified"
	| "parent"
	| "rand"
	| "comment_count"
	| "menu_order"
	| "meta_value"
	| "meta_value_num";

export interface SelectCoreTypes {
	canUser: Function;
	canUserEditEntityRecord: Function;
	getAuthors: Function;
	getAutosave: Function;
	getAutosaves: Function;
	getBlockPatternCategories: Function;
	getBlockPatterns: Function;
	getCachedResolvers: Function;
	getComment: Function;
	getComments: Function;
	getCurrentTheme: Function;
	getCurrentUser: Function;
	getEditedEntityRecord: Function;
	getEmbedPreview: Function;
	getEntitiesByKind: Function;
	getEntitiesConfig: Function;
	getEntity: Function;
	getEntityConfig: Function;
	getEntityRecord: Function;
	getEntityRecordEdits: Function;
	getEntityRecordNonTransientEdits: Function;
	getEntityRecords: Function;
	getGlobalStyles: Function;
	getGlobalStylesVariations: Function;
	getIsResolving: Function;
	getLastEntityDeleteError: Function;
	getLastEntitySaveError: Function;
	getMedia: Function;
	getMediaItems: Function;
	getMenu: Function;
	getMenuItem: Function;
	getMenuItems: Function;
	getMenuLocation: Function;
	getMenuLocations: Function;
	getMenus: Function;
	getPlugin: Function;
	getPlugins: Function;
	getPostType: Function;
	getPostTypes: Function;
	getRawEntityRecord: Function;
	getRedoEdit: Function;
	getReferenceByDistinctEdits: Function;
	getResolutionError: Function;
	getResolutionState: Function;
	getSidebar: Function;
	getSidebars: Function;
	getSite: Function;
	getSites: Function;
	getTaxonomies: Function;
	getTaxonomy: Function;
	getTheme: Function;
	getThemeSupports: Function;
	getThemes: Function;
	getUndoEdit: Function;
	getUnstableBase: Function;
	getUnstableBases: Function;
	getUser: Function;
	getUserQueryResults: Function;
	getUsers: Function;
	getWidget: Function;
	getWidgetType: Function;
	getWidgetTypes: Function;
	getWidgets: Function;
	hasEditsForEntityRecord: Function;
	hasEntityRecords: Function;
	hasFetchedAutosaves: Function;
	hasFinishedResolution: Function;
	hasRedo: Function;
	hasResolutionFailed: Function;
	hasStartedResolution: Function;
	hasUndo: Function;
	isAutosavingEntityRecord: Function;
	isDeletingEntityRecord: Function;
	isPreviewEmbedFallback: Function;
	isRequestingEmbedPreview: Function;
	isResolving: Function;
	isSavingEntityRecord: Function;
	__experimentalGetCurrentGlobalStylesId: Function;
	__experimentalGetCurrentThemeBaseGlobalStyles: Function;
	__experimentalGetCurrentThemeGlobalStylesVariations: Function;
	__experimentalGetDirtyEntityRecords: Function;
	__experimentalGetEntitiesBeingSaved: Function;
	__experimentalGetEntityRecordNoResolver: Function;
	__experimentalGetTemplateForLink: Function;
}

export const OrderByOptions: {
	label: string;
	value: Orderby;
}[] = [
	{ label: "Date", value: "date" },
	{ label: "Title", value: "title" },
	{ label: "Random", value: "rand" },
	{ label: "Menu order", value: "menu_order" },
];
export const OrderOptions: {
	label: string;
	value: Order;
}[] = [
	{ label: "ASC", value: "asc" },
	{ label: "DESC", value: "desc" },
];

export const MY_ORDER_OPTIONS = [
	{
		label: __("Newest to oldest"),
		value: "date/desc",
	},
	{
		label: __("Oldest to newest"),
		value: "date/asc",
	},
	{
		label: __("A → Z"),
		value: "title/asc",
	},
	{
		label: __("Z → A"),
		value: "title/desc",
	},
	{
		label: __("Random / asc"),
		value: "rand/asc",
	},
	{
		label: __("Random / desc"),
		value: "rand/desc",
	},
	//
	{
		label: __("Menu order / asc"),
		value: "menu_order/asc",
	},
	{
		label: __("Menu order / desc"),
		value: "menu_order/desc",
	},
];

export const CATEGORIES_LIST_QUERY = {
	per_page: -1,
	context: "view",
};
export const USERS_LIST_QUERY = {
	per_page: -1,
	// has_published_posts: ["post"],
	context: "view",
};
