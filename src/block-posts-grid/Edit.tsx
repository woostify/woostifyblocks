import { get, pickBy } from "lodash";
import { __ } from "@wordpress/i18n";
import React, { useEffect, FC } from "react";
import { WcbBlockPostsGridAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import WcbPostsGridPanelSortingAndFiltering from "./WcbPostsGridPanelSortingAndFiltering";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbPostGridPanelPostContent from "./WcbPostGridPanelPostContent";
import WcbPostGridPanelPostMeta from "./WcbPostGridPanelPostMeta";
import WcbPostGridPanelPostFeaturedImage from "./WcbPostGridPanelPostFeaturedImage";
import WcbPostGridPanelReadMoreLink from "./WcbPostGridPanelReadMoreLink";
import WcbPostGridPanelPagination from "./WcbPostGridPanelPagination";
import WcbPostGridPanel_StyleLayout from "./WcbPostGridPanel_StyleLayout";
import WcbPostGridPanel_StyleTitle from "./WcbPostGridPanel_StyleTitle";
import WcbPostGridPanel_StyleExcerpt from "./WcbPostGridPanel_StyleExcerpt";
import WcbPostGridPanel_StyleMeta from "./WcbPostGridPanel_StyleMeta";
import WcbPostGridPanel_StyleReadmoreLink from "./WcbPostGridPanel_StyleReadmoreLink";
import WcbPostGridPanel_StylePagination from "./WcbPostGridPanel_StylePagination";
import WcbPostGridPanel_StyleFeaturedImage from "./WcbPostGridPanel_StyleFeaturedImage";
import { PanelBody } from "@wordpress/components";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import PostCard from "./PostCard";
import {
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { PostRoot } from "./types";
import { CategoryRoot } from "./CategoryType";
import { AuthorRoot } from "./AuthorType";

const Edit: FC<EditProps<WcbBlockPostsGridAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		general_sortingAndFiltering,
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_postContent,
		general_postMeta,
		general_postFeaturedImage,
		general_readmoreLink,
		general_pagination,
		style_layout,
		style_title,
		style_excerpt,
		style_meta,
		style_readmoreLink,
		style_pagination,
		style_featuredImage,
		style_border,
		style_boxShadow,
	} = attributes;
	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);
	//

	//

	const { emptyMessage, queries } = general_sortingAndFiltering;
	const {
		isExcludeCurrentPost,
		isOffsetStartingPost,
		numberOfColumn,
		numberOfItems,
		offsetPost,
		order,
		orderBy,
		postType,
		selectedAuthorId,
		selectedTerms,
		taxonomy,
	} = queries;
	const { listPosts, categoriesList, authorList } = useSelect(
		(select) => {
			const { getEntityRecords, getUsers } = select(coreStore);
			// const settings = select(blockEditorStore).getSettings();
			const catIds =
				selectedTerms && selectedTerms.length > 0
					? selectedTerms.map((cat) => cat.id)
					: [];
			const listPostsQuery = pickBy(
				{
					categories: catIds,
					author: selectedAuthorId || undefined,
					order: order || undefined,
					orderby: orderBy || undefined,
					per_page: numberOfItems || undefined,
					_embed: "wp:featuredmedia",
				},
				(value) => typeof value !== "undefined"
			);

			return {
				listPosts: getEntityRecords("postType", postType, listPostsQuery) as
					| PostRoot[]
					| undefined,
				categoriesList: getEntityRecords("taxonomy", "category", {
					per_page: -1,
					context: "view",
				}) as CategoryRoot[] | undefined,
				authorList: getUsers({
					per_page: -1,
					context: "view",
				}) as AuthorRoot[] | undefined,
			};
		},
		[
			isExcludeCurrentPost,
			isOffsetStartingPost,
			numberOfItems,
			offsetPost,
			order,
			orderBy,
			postType,
			selectedAuthorId,
			selectedTerms,
			taxonomy,
		]
	);

	console.log(123, { listPosts, categoriesList, authorList });
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbPostsGridPanelSortingAndFiltering
							onToggle={() =>
								handleTogglePanel("General", "SortingAndFiltering", true)
							}
							initialOpen={
								tabGeneralIsPanelOpen === "SortingAndFiltering" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={
								tabGeneralIsPanelOpen === "SortingAndFiltering" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ general_sortingAndFiltering: data });
							}}
							panelData={general_sortingAndFiltering}
						/>

						<WcbPostGridPanelPostContent
							onToggle={() => handleTogglePanel("General", "PostContent")}
							initialOpen={tabGeneralIsPanelOpen === "PostContent"}
							opened={tabGeneralIsPanelOpen === "PostContent" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_postContent: data });
							}}
							panelData={general_postContent}
						/>

						<WcbPostGridPanelPostMeta
							onToggle={() => handleTogglePanel("General", "PostMeta")}
							initialOpen={tabGeneralIsPanelOpen === "PostMeta"}
							opened={tabGeneralIsPanelOpen === "PostMeta" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_postMeta: data });
							}}
							panelData={general_postMeta}
						/>

						<WcbPostGridPanelPostFeaturedImage
							onToggle={() => handleTogglePanel("General", "PostFeaturedImage")}
							initialOpen={tabGeneralIsPanelOpen === "PostFeaturedImage"}
							opened={
								tabGeneralIsPanelOpen === "PostFeaturedImage" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ general_postFeaturedImage: data });
							}}
							panelData={general_postFeaturedImage}
						/>

						<WcbPostGridPanelReadMoreLink
							onToggle={() => handleTogglePanel("General", "ReadMoreLink")}
							initialOpen={tabGeneralIsPanelOpen === "ReadMoreLink"}
							opened={tabGeneralIsPanelOpen === "ReadMoreLink" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_readmoreLink: data });
							}}
							panelData={general_readmoreLink}
						/>

						<WcbPostGridPanelPagination
							onToggle={() => handleTogglePanel("General", "Pagination")}
							initialOpen={tabGeneralIsPanelOpen === "Pagination"}
							opened={tabGeneralIsPanelOpen === "Pagination" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_pagination: data });
							}}
							panelData={general_pagination}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbPostGridPanel_StyleLayout
							onToggle={() => handleTogglePanel("Styles", "StyleLayout", true)}
							initialOpen={
								tabStylesIsPanelOpen === "StyleLayout" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "StyleLayout" || undefined}
							//
							panelData={style_layout}
							setAttr__={(data) => setAttributes({ style_layout: data })}
						/>

						<WcbPostGridPanel_StyleTitle
							onToggle={() => handleTogglePanel("Styles", "StyleTitle")}
							initialOpen={tabStylesIsPanelOpen === "StyleTitle"}
							opened={tabStylesIsPanelOpen === "StyleTitle" || undefined}
							//
							panelData={style_title}
							setAttr__={(data) => setAttributes({ style_title: data })}
						/>

						<WcbPostGridPanel_StyleExcerpt
							onToggle={() => handleTogglePanel("Styles", "StyleExcerpt")}
							initialOpen={tabStylesIsPanelOpen === "StyleExcerpt"}
							opened={tabStylesIsPanelOpen === "StyleExcerpt" || undefined}
							//
							panelData={style_excerpt}
							setAttr__={(data) => setAttributes({ style_excerpt: data })}
						/>

						<WcbPostGridPanel_StyleMeta
							onToggle={() => handleTogglePanel("Styles", "StyleMeta")}
							initialOpen={tabStylesIsPanelOpen === "StyleMeta"}
							opened={tabStylesIsPanelOpen === "StyleMeta" || undefined}
							//
							panelData={style_meta}
							setAttr__={(data) => setAttributes({ style_meta: data })}
						/>

						<WcbPostGridPanel_StyleReadmoreLink
							onToggle={() => handleTogglePanel("Styles", "StyleReadmoreLink")}
							initialOpen={tabStylesIsPanelOpen === "StyleReadmoreLink"}
							opened={tabStylesIsPanelOpen === "StyleReadmoreLink" || undefined}
							//
							panelData={style_readmoreLink}
							setAttr__={(data) => setAttributes({ style_readmoreLink: data })}
						/>

						<WcbPostGridPanel_StylePagination
							onToggle={() => handleTogglePanel("Styles", "StylePagination")}
							initialOpen={tabStylesIsPanelOpen === "StylePagination"}
							opened={tabStylesIsPanelOpen === "StylePagination" || undefined}
							//
							panelData={style_pagination}
							setAttr__={(data) => setAttributes({ style_pagination: data })}
						/>

						<WcbPostGridPanel_StyleFeaturedImage
							onToggle={() => handleTogglePanel("Styles", "StyleFeaturedImage")}
							initialOpen={tabStylesIsPanelOpen === "StyleFeaturedImage"}
							opened={
								tabStylesIsPanelOpen === "StyleFeaturedImage" || undefined
							}
							//
							panelData={style_featuredImage}
							setAttr__={(data) => setAttributes({ style_featuredImage: data })}
						/>

						<PanelBody
							onToggle={() => handleTogglePanel("Styles", "StyleBorder")}
							initialOpen={tabStylesIsPanelOpen === "StyleBorder"}
							opened={tabStylesIsPanelOpen === "StyleBorder" || undefined}
							title={__("Border", "wcb")}
						>
							<MyBorderControl
								borderControl={style_border}
								setAttrs__border={(data) =>
									setAttributes({ style_border: data })
								}
							/>
						</PanelBody>

						<PanelBody
							onToggle={() => handleTogglePanel("Styles", "StyleBoxShadow")}
							initialOpen={tabStylesIsPanelOpen === "StyleBoxShadow"}
							opened={tabStylesIsPanelOpen === "StyleBoxShadow" || undefined}
							title={__("Box Shadow", "wcb")}
						>
							<MyBoxShadowControl
								boxShadowControl={style_boxShadow}
								setAttrs__boxShadow={(data) =>
									setAttributes({ style_boxShadow: data })
								}
							/>
						</PanelBody>
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_responsiveCondition={advance_responsiveCondition}
							advance_zIndex={advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	return (
		<CacheProvider value={myCache}>
			{/* CONTROL SETTINGS */}
			<HOCInspectorControls
				tabDefaultActive={tabIsOpen}
				renderTabPanels={renderTabBodyPanels}
			/>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-posts-grid__wrap ${UNIQUE_ID}`}
			>
				{/* CSS IN JS */}
				<GlobalCss {...attributes} />

				{/* CHILD CONTENT  */}
				<>
					{listPosts?.map((post) => (
						<PostCard
							key={post.id}
							postData={post}
							authors={authorList || []}
							categories={categoriesList || []}
						/>
					))}
				</>
			</div>
		</CacheProvider>
	);
};

export default Edit;
