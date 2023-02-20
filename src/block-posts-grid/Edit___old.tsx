export default 1;
// import { get, pickBy } from "lodash";
// import { __ } from "@wordpress/i18n";
// import React, { useEffect, FC, useRef, useCallback, useMemo } from "react";
// import { WcbBlockPostsGridAttrs } from "./attributes";
// import HOCInspectorControls, {
// 	InspectorControlsTabs,
// } from "../components/HOCInspectorControls";
// import { EditProps } from "../block-container/Edit";
// import GlobalCss from "./GlobalCss";
// import "./editor.scss";
// import WcbPostsGridPanelSortingAndFiltering, {
// 	WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
// } from "./WcbPostsGridPanelSortingAndFiltering";
// import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
// import AdvancePanelCommon from "../components/AdvancePanelCommon";
// import WcbPostGridPanelPostContent, {
// 	WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
// } from "./WcbPostGridPanelPostContent";
// import WcbPostGridPanelPostMeta, {
// 	WCB_POST_GRID_PANEL_POST_META_DEMO,
// } from "./WcbPostGridPanelPostMeta";
// import WcbPostGridPanelPostFeaturedImage, {
// 	WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
// } from "./WcbPostGridPanelPostFeaturedImage";
// import WcbPostGridPanelReadMoreLink, {
// 	WCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
// } from "./WcbPostGridPanelReadMoreLink";
// import WcbPostGridPanelPagination, {
// 	WCB_POSTS_GRID_PAGINATION_PLANS_ICONS,
// 	WCB_POST_GRID_PANEL_PAGINATION_DEMO,
// } from "./WcbPostGridPanelPagination";
// import WcbPostGridPanel_StyleLayout, {
// 	WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
// } from "./WcbPostGridPanel_StyleLayout";
// import WcbPostGridPanel_StyleTitle, {
// 	WCB_POST_GRID_PANEL_STYLE_TITLE_DEMO,
// } from "./WcbPostGridPanel_StyleTitle";
// import WcbPostGridPanel_StyleExcerpt, {
// 	WCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO,
// } from "./WcbPostGridPanel_StyleExcerpt";
// import WcbPostGridPanel_StyleMeta, {
// 	WCB_POST_GRID_PANEL_STYLE_META_DEMO,
// } from "./WcbPostGridPanel_StyleMeta";
// import WcbPostGridPanel_StyleReadmoreLink, {
// 	WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
// } from "./WcbPostGridPanel_StyleReadmoreLink";
// import WcbPostGridPanel_StylePagination, {
// 	WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
// } from "./WcbPostGridPanel_StylePagination";
// import WcbPostGridPanel_StyleFeaturedImage, {
// 	WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
// } from "./WcbPostGridPanel_StyleFeaturedImage";
// import { PanelBody, Placeholder, Spinner } from "@wordpress/components";
// import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
// import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
// import WcbPostCard from "./WcbPostCard";
// import {
// 	useBlockProps,
// 	store as blockEditorStore,
// } from "@wordpress/block-editor";
// import { useSelect, useDispatch } from "@wordpress/data";
// import { store as coreStore } from "@wordpress/core-data";
// import { PostRoot } from "./types";
// import { CategoryRoot } from "./CategoryType";
// import { AuthorRoot } from "./AuthorType";
// import WcbPostGridPanel_StyleTaxonomy, {
// 	WCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO,
// } from "./WcbPostGridPanel_StyleTaxonomy";
// import MyCacheProvider from "../components/MyCacheProvider";
// import ServerSideRender from "@wordpress/server-side-render";
// import { Icon, file } from "@wordpress/icons";
// import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
// import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
// import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
// import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";

// const Edit: FC<EditProps<WcbBlockPostsGridAttrs>> = (props) => {
// 	const { attributes, setAttributes, clientId } = props;
// 	const {
// 		general_sortingAndFiltering,
// 		advance_responsiveCondition,
// 		advance_zIndex,
// 		uniqueId,
// 		general_postContent,
// 		general_postMeta,
// 		general_postFeaturedImage,
// 		general_readmoreLink,
// 		general_pagination,
// 		style_layout,
// 		style_title,
// 		style_excerpt,
// 		style_meta,
// 		style_readmoreLink,
// 		style_pagination,
// 		style_featuredImage,
// 		style_border,
// 		style_boxShadow,
// 		style_taxonomy,
// 	} = attributes;
// 	//  COMMON HOOKS
// 	// const { myCache, ref } = useCreateCacheEmotion();
// 	const ref = useRef<HTMLDivElement>(null);

// 	const wrapBlockProps = useBlockProps({ ref });

// 	const {
// 		tabIsOpen,
// 		tabAdvancesIsPanelOpen,
// 		tabGeneralIsPanelOpen,
// 		tabStylesIsPanelOpen,
// 		handleTogglePanel,
// 	} = useSetBlockPanelInfo(uniqueId);

// 	const UNIQUE_ID = wrapBlockProps.id;
// 	useEffect(() => {
// 		setAttributes({
// 			uniqueId: UNIQUE_ID,
// 		});
// 	}, [UNIQUE_ID]);
// 	//
// 	useEffect(() => {
// 		if (style_layout) {
// 			return;
// 		}
// 		const DEFAULT: Omit<WcbBlockPostsGridAttrs, "uniqueId"> = {
// 			general_sortingAndFiltering:
// 				WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
// 			general_postContent: WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
// 			general_postMeta: WCB_POST_GRID_PANEL_POST_META_DEMO,
// 			general_postFeaturedImage: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
// 			general_readmoreLink: WCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
// 			general_pagination: WCB_POST_GRID_PANEL_PAGINATION_DEMO,
// 			//
// 			style_layout: WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
// 			style_title: WCB_POST_GRID_PANEL_STYLE_TITLE_DEMO,
// 			style_excerpt: WCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO,
// 			style_taxonomy: WCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO,
// 			style_meta: WCB_POST_GRID_PANEL_STYLE_META_DEMO,
// 			style_readmoreLink: WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
// 			style_pagination: WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
// 			style_featuredImage: WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
// 			style_border: MY_BORDER_CONTROL_DEMO,
// 			style_boxShadow: MY_BOX_SHADOW_CONTROL_DEMO,
// 			//
// 			advance_responsiveCondition: RESPONSIVE_CONDITON_DEMO,
// 			advance_zIndex: Z_INDEX_DEMO,
// 		};

// 		setAttributes({ ...DEFAULT });
// 	}, [style_layout]);

// 	//
// 	// const { emptyMessage, queries } = general_sortingAndFiltering;
// 	// const {
// 	// 	isExcludeCurrentPost,
// 	// 	isOffsetStartingPost,
// 	// 	numberOfItems,
// 	// 	offsetPost,
// 	// 	order,
// 	// 	orderBy,
// 	// 	postType,
// 	// 	selectedAuthorId,
// 	// 	selectedTerms,
// 	// 	taxonomyRestbase,
// 	// 	taxonomySlug,
// 	// } = queries;
// 	// const { listPosts, categoriesList, authorList } = useSelect(
// 	// 	(select) => {
// 	// 		const {
// 	// 			getEntityRecords,
// 	// 			//  @ts-ignore
// 	// 			getUsers,
// 	// 		} = select(coreStore);
// 	// 		// const settings = select(blockEditorStore).getSettings();
// 	// 		const termIds =
// 	// 			selectedTerms && selectedTerms.length > 0
// 	// 				? selectedTerms.map((cat) => cat.id)
// 	// 				: [];

// 	// 		const listPostsQuery = pickBy(
// 	// 			{
// 	// 				[taxonomyRestbase]: termIds,
// 	// 				author: selectedAuthorId || undefined,
// 	// 				order: order || undefined,
// 	// 				orderby: orderBy || undefined,
// 	// 				per_page: numberOfItems || undefined,
// 	// 				offset: offsetPost || undefined,
// 	// 				_embed: "wp:featuredmedia",
// 	// 			},
// 	// 			(value) => typeof value !== "undefined"
// 	// 		);

// 	// 		return {
// 	// 			listPosts: getEntityRecords<PostRoot>(
// 	// 				"postType",
// 	// 				postType,
// 	// 				listPostsQuery
// 	// 			),
// 	// 			categoriesList: getEntityRecords<CategoryRoot>("taxonomy", "category", {
// 	// 				per_page: -1,
// 	// 				context: "view",
// 	// 			}),
// 	// 			authorList: getUsers({
// 	// 				per_page: -1,
// 	// 				context: "view",
// 	// 			}) as AuthorRoot[] | undefined,
// 	// 		};
// 	// 	},
// 	// 	[
// 	// 		isExcludeCurrentPost,
// 	// 		isOffsetStartingPost,
// 	// 		numberOfItems,
// 	// 		offsetPost,
// 	// 		order,
// 	// 		orderBy,
// 	// 		postType,
// 	// 		selectedAuthorId,
// 	// 		selectedTerms,
// 	// 		taxonomyRestbase,
// 	// 	]
// 	// );

// 	// console.log(11, { listPosts });

// 	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
// 		switch (tab.name) {
// 			case "General":
// 				return (
// 					<>
// 						<WcbPostsGridPanelSortingAndFiltering
// 							onToggle={() =>
// 								handleTogglePanel("General", "SortingAndFiltering", true)
// 							}
// 							initialOpen={
// 								tabGeneralIsPanelOpen === "SortingAndFiltering" ||
// 								tabGeneralIsPanelOpen === "first"
// 							}
// 							opened={
// 								tabGeneralIsPanelOpen === "SortingAndFiltering" || undefined
// 							}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_sortingAndFiltering: data });
// 							}}
// 							panelData={general_sortingAndFiltering}
// 						/>

// 						<WcbPostGridPanelPostContent
// 							onToggle={() => handleTogglePanel("General", "PostContent")}
// 							initialOpen={tabGeneralIsPanelOpen === "PostContent"}
// 							opened={tabGeneralIsPanelOpen === "PostContent" || undefined}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_postContent: data });
// 							}}
// 							panelData={general_postContent}
// 						/>

// 						<WcbPostGridPanelPostMeta
// 							onToggle={() => handleTogglePanel("General", "PostMeta")}
// 							initialOpen={tabGeneralIsPanelOpen === "PostMeta"}
// 							opened={tabGeneralIsPanelOpen === "PostMeta" || undefined}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_postMeta: data });
// 							}}
// 							panelData={general_postMeta}
// 						/>

// 						<WcbPostGridPanelPostFeaturedImage
// 							onToggle={() => handleTogglePanel("General", "PostFeaturedImage")}
// 							initialOpen={tabGeneralIsPanelOpen === "PostFeaturedImage"}
// 							opened={
// 								tabGeneralIsPanelOpen === "PostFeaturedImage" || undefined
// 							}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_postFeaturedImage: data });
// 							}}
// 							panelData={general_postFeaturedImage}
// 						/>

// 						<WcbPostGridPanelReadMoreLink
// 							onToggle={() => handleTogglePanel("General", "ReadMoreLink")}
// 							initialOpen={tabGeneralIsPanelOpen === "ReadMoreLink"}
// 							opened={tabGeneralIsPanelOpen === "ReadMoreLink" || undefined}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_readmoreLink: data });
// 							}}
// 							panelData={general_readmoreLink}
// 						/>

// 						<WcbPostGridPanelPagination
// 							onToggle={() => handleTogglePanel("General", "Pagination")}
// 							initialOpen={tabGeneralIsPanelOpen === "Pagination"}
// 							opened={tabGeneralIsPanelOpen === "Pagination" || undefined}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_pagination: data });
// 							}}
// 							panelData={general_pagination}
// 						/>
// 					</>
// 				);
// 			case "Styles":
// 				return (
// 					<>
// 						<WcbPostGridPanel_StyleLayout
// 							onToggle={() => handleTogglePanel("Styles", "StyleLayout", true)}
// 							initialOpen={
// 								tabStylesIsPanelOpen === "StyleLayout" ||
// 								tabStylesIsPanelOpen === "first"
// 							}
// 							opened={tabStylesIsPanelOpen === "StyleLayout" || undefined}
// 							//
// 							panelData={style_layout}
// 							setAttr__={(data) => setAttributes({ style_layout: data })}
// 						/>

// 						<WcbPostGridPanel_StyleFeaturedImage
// 							onToggle={() => handleTogglePanel("Styles", "StyleFeaturedImage")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleFeaturedImage"}
// 							opened={
// 								tabStylesIsPanelOpen === "StyleFeaturedImage" || undefined
// 							}
// 							//
// 							panelData={style_featuredImage}
// 							setAttr__={(data) => setAttributes({ style_featuredImage: data })}
// 							//
// 							imagePosition={general_postFeaturedImage.featuredImagePosition}
// 						/>

// 						<WcbPostGridPanel_StyleTitle
// 							onToggle={() => handleTogglePanel("Styles", "StyleTitle")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleTitle"}
// 							opened={tabStylesIsPanelOpen === "StyleTitle" || undefined}
// 							//
// 							panelData={style_title}
// 							setAttr__={(data) => setAttributes({ style_title: data })}
// 						/>

// 						<WcbPostGridPanel_StyleExcerpt
// 							onToggle={() => handleTogglePanel("Styles", "StyleExcerpt")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleExcerpt"}
// 							opened={tabStylesIsPanelOpen === "StyleExcerpt" || undefined}
// 							//
// 							panelData={style_excerpt}
// 							setAttr__={(data) => setAttributes({ style_excerpt: data })}
// 						/>

// 						<WcbPostGridPanel_StyleTaxonomy
// 							onToggle={() => handleTogglePanel("Styles", "StyleTaxonomy")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleTaxonomy"}
// 							opened={tabStylesIsPanelOpen === "StyleTaxonomy" || undefined}
// 							//
// 							panelData={style_taxonomy}
// 							setAttr__={(data) => setAttributes({ style_taxonomy: data })}
// 						/>

// 						<WcbPostGridPanel_StyleMeta
// 							onToggle={() => handleTogglePanel("Styles", "StyleMeta")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleMeta"}
// 							opened={tabStylesIsPanelOpen === "StyleMeta" || undefined}
// 							//
// 							panelData={style_meta}
// 							setAttr__={(data) => setAttributes({ style_meta: data })}
// 						/>

// 						<WcbPostGridPanel_StyleReadmoreLink
// 							onToggle={() => handleTogglePanel("Styles", "StyleReadmoreLink")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleReadmoreLink"}
// 							opened={tabStylesIsPanelOpen === "StyleReadmoreLink" || undefined}
// 							//
// 							panelData={style_readmoreLink}
// 							setAttr__={(data) => setAttributes({ style_readmoreLink: data })}
// 						/>

// 						<WcbPostGridPanel_StylePagination
// 							onToggle={() => handleTogglePanel("Styles", "StylePagination")}
// 							initialOpen={tabStylesIsPanelOpen === "StylePagination"}
// 							opened={tabStylesIsPanelOpen === "StylePagination" || undefined}
// 							//
// 							panelData={style_pagination}
// 							setAttr__={(data) => setAttributes({ style_pagination: data })}
// 						/>

// 						<PanelBody
// 							onToggle={() => handleTogglePanel("Styles", "StyleBorder")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleBorder"}
// 							opened={tabStylesIsPanelOpen === "StyleBorder" || undefined}
// 							title={__("Border", "wcb")}
// 						>
// 							<MyBorderControl
// 								borderControl={style_border}
// 								setAttrs__border={(data) =>
// 									setAttributes({ style_border: data })
// 								}
// 							/>
// 						</PanelBody>

// 						<PanelBody
// 							onToggle={() => handleTogglePanel("Styles", "StyleBoxShadow")}
// 							initialOpen={tabStylesIsPanelOpen === "StyleBoxShadow"}
// 							opened={tabStylesIsPanelOpen === "StyleBoxShadow" || undefined}
// 							title={__("Box Shadow", "wcb")}
// 						>
// 							<MyBoxShadowControl
// 								boxShadowControl={style_boxShadow}
// 								setAttrs__boxShadow={(data) =>
// 									setAttributes({ style_boxShadow: data })
// 								}
// 							/>
// 						</PanelBody>
// 					</>
// 				);
// 			case "Advances":
// 				return (
// 					<>
// 						<AdvancePanelCommon
// 							advance_responsiveCondition={advance_responsiveCondition}
// 							advance_zIndex={advance_zIndex}
// 							handleTogglePanel={handleTogglePanel}
// 							setAttributes={setAttributes}
// 							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
// 						/>
// 					</>
// 				);

// 			default:
// 				return <div></div>;
// 		}
// 	};

// 	// const renderPaginationIcon = (isLeft = false) => {
// 	// 	const iconName = general_pagination.iconName;
// 	// 	if (iconName === "none") {
// 	// 		return null;
// 	// 	}
// 	// 	const svgIcon = WCB_POSTS_GRID_PAGINATION_PLANS_ICONS.filter(
// 	// 		(item) => item.name === iconName
// 	// 	)[0]?.icon;
// 	// 	if (!svgIcon) {
// 	// 		return null;
// 	// 	}
// 	// 	return (
// 	// 		<div
// 	// 			className={isLeft ? "rotate-180" : ""}
// 	// 			dangerouslySetInnerHTML={{ __html: svgIcon }}
// 	// 		></div>
// 	// 	);
// 	// };

// 	const WcbAttrsForServerSide = useMemo(() => {
// 		return {
// 			uniqueId,
// 			general_sortingAndFiltering,
// 			general_pagination,
// 			general_postContent,
// 			general_postFeaturedImage,
// 			general_postMeta,
// 			general_readmoreLink,
// 		};
// 	}, [
// 		uniqueId,
// 		general_sortingAndFiltering,
// 		general_pagination,
// 		general_postContent,
// 		general_postFeaturedImage,
// 		general_postMeta,
// 		general_readmoreLink,
// 	]);

// 	return (
// 		<MyCacheProvider uniqueKey={clientId}>
// 			{/* CONTROL SETTINGS */}
// 			<HOCInspectorControls
// 				tabDefaultActive={tabIsOpen}
// 				renderTabPanels={renderTabBodyPanels}
// 				uniqueId={uniqueId}
// 			/>
// 			<div
// 				{...wrapBlockProps}
// 				// className={`${wrapBlockProps?.className} wcb-posts-grid__wrap ${UNIQUE_ID}`}
// 				// data-uniqueid={UNIQUE_ID}
// 			>
// 				{/* CSS IN JS */}
// 				{uniqueId && !!general_sortingAndFiltering && (
// 					<GlobalCss {...attributes} />
// 				)}

// 				{uniqueId && style_layout && (
// 					<ServerSideRender
// 						block="wcb/posts-grid"
// 						attributes={WcbAttrsForServerSide}
// 						EmptyResponsePlaceholder={EmptyPlaceholder}
// 						LoadLoadingResponsePlaceholder={LoadingPlaceholder}
// 					/>
// 				)}

// 				{/* CHILD CONTENT  */}
// 				{/* <>
// 					<div className="wcb-posts-grid__list-posts">
// 						{listPosts && categoriesList && authorList && listPosts.length
// 							? listPosts?.map((post) => (
// 									<WcbPostCard
// 										key={post.id}
// 										postData={post}
// 										authors={authorList || []}
// 										categories={categoriesList || []}
// 										postMetaSettings={general_postMeta}
// 										postContentSettings={general_postContent}
// 										featuredImageSettings={general_postFeaturedImage}
// 										general_readmoreLink={general_readmoreLink}
// 									/>
// 							  ))
// 							: null}
// 					</div>

// 					{!listPosts?.length ? (
// 						<div className="py-5">
// 							<p className="wcb-posts-grid__emptyMessage ">{emptyMessage}</p>
// 						</div>
// 					) : null}

// 					{general_pagination.isShowPagination ? (
// 						<div className="wcb-posts-grid__pagination">
// 							<a href="" className="page-numbers prev">
// 								{renderPaginationIcon()}
// 								{!!general_pagination.previousText && (
// 									<span>{general_pagination.previousText}</span>
// 								)}
// 							</a>
// 							<div className="wcb-posts-grid__pagination-number">
// 								<a className="page-numbers" href="">
// 									{__("1", "wcb")}
// 								</a>
// 								<span className="page-numbers current">{__("2", "wcb")}</span>
// 								<a className="page-numbers" href="">
// 									{__("3", "wcb")}
// 								</a>
// 								<span className="page-numbers dots">{__("...", "wcb")}</span>
// 								<a className="page-numbers" href="">
// 									{__("8", "wcb")}
// 								</a>
// 							</div>
// 							<a href="" className="page-numbers next">
// 								{!!general_pagination.nextText && (
// 									<span>{general_pagination.nextText}</span>
// 								)}
// 								{renderPaginationIcon()}
// 							</a>
// 						</div>
// 					) : null}
// 				</>   */}
// 			</div>
// 		</MyCacheProvider>
// 	);
// };

// export default Edit;

// const EmptyPlaceholder = () => (
// 	<Placeholder
// 		icon={<Icon icon={file} />}
// 		label={__("Woostify block Products", "wcb")}
// 		className="wc-block-products-grid wc-block-products-category"
// 	>
// 		{__("No products were found that matched your selection.", "wcb")}
// 	</Placeholder>
// );
// const LoadingPlaceholder = () => (
// 	<div>
// 		<Spinner />
// 	</div>
// );
