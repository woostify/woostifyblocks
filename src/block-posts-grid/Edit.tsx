import { __ } from "@wordpress/i18n";
import React, { useEffect, FC, useRef, useMemo } from "react";
import { WcbBlockPostsGridAttrs } from "./attributes";
import { settings } from "@wordpress/icons";
import {
	Dropdown,
	ToolbarButton,
	BaseControl,
	// @ts-ignore
	__experimentalNumberControl as NumberControl,
	ToggleControl,
} from "@wordpress/components";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import WcbPostsGridPanelSortingAndFiltering, {
	WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbPostsGridPanelSortingAndFiltering";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbPostGridPanelPostContent, {
	WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
} from "./WcbPostGridPanelPostContent";
import WcbPostGridPanelPostMeta, {
	WCB_POST_GRID_PANEL_POST_META_DEMO,
} from "./WcbPostGridPanelPostMeta";
import WcbPostGridPanelPostFeaturedImage, {
	WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
} from "./WcbPostGridPanelPostFeaturedImage";
import WcbPostGridPanelReadMoreLink, {
	WCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
} from "./WcbPostGridPanelReadMoreLink";
import WcbPostGridPanelPagination, {
	WCB_POST_GRID_PANEL_PAGINATION_DEMO,
} from "./WcbPostGridPanelPagination";
import WcbPostGridPanel_StyleLayout, {
	WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
} from "./WcbPostGridPanel_StyleLayout";
import WcbPostGridPanel_StyleTitle, {
	WCB_POST_GRID_PANEL_STYLE_TITLE_DEMO,
} from "./WcbPostGridPanel_StyleTitle";
import WcbPostGridPanel_StyleExcerpt, {
	WCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO,
} from "./WcbPostGridPanel_StyleExcerpt";
import WcbPostGridPanel_StyleMeta, {
	WCB_POST_GRID_PANEL_STYLE_META_DEMO,
} from "./WcbPostGridPanel_StyleMeta";
import WcbPostGridPanel_StyleReadmoreLink, {
	WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
} from "./WcbPostGridPanel_StyleReadmoreLink";
import WcbPostGridPanel_StylePagination, {
	WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
} from "./WcbPostGridPanel_StylePagination";
import WcbPostGridPanel_StyleFeaturedImage, {
	WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
} from "./WcbPostGridPanel_StyleFeaturedImage";
import { PanelBody, Placeholder, Spinner } from "@wordpress/components";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import MyBoxShadowControl from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { BlockControls, useBlockProps } from "@wordpress/block-editor";
import WcbPostGridPanel_StyleTaxonomy, {
	WCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO,
} from "./WcbPostGridPanel_StyleTaxonomy";
import MyCacheProvider from "../components/MyCacheProvider";
import ServerSideRender from "@wordpress/server-side-render";
import { Icon, file } from "@wordpress/icons";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";

const Edit: FC<EditProps<WcbBlockPostsGridAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		anchor,
		align,
		className,
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
		style_taxonomy,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS
	const ref = useRef<HTMLDivElement>(null);

	const wrapBlockProps = useBlockProps({ ref });

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		if (uniqueId) {
			return;
		}
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//
	//
	useEffect(() => {
		if (style_layout) {
			return;
		}

		const DEFAULT: Omit<WcbBlockPostsGridAttrs, "uniqueId"> = {
			general_sortingAndFiltering:
				WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
			general_postContent: WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
			general_postMeta: WCB_POST_GRID_PANEL_POST_META_DEMO,
			general_postFeaturedImage: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
			general_readmoreLink: WCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
			general_pagination: WCB_POST_GRID_PANEL_PAGINATION_DEMO,
			//
			style_layout: WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
			style_title: WCB_POST_GRID_PANEL_STYLE_TITLE_DEMO,
			style_excerpt: WCB_POST_GRID_PANEL_STYLE_EXCERPT_DEMO,
			style_taxonomy: WCB_POST_GRID_PANEL_STYLE_TAXONOMY_DEMO,
			style_meta: WCB_POST_GRID_PANEL_STYLE_META_DEMO,
			style_readmoreLink: WCB_POST_GRID_PANEL_STYLE_READMORE_LINK_DEMO,
			style_pagination: WCB_POST_GRID_PANEL_STYLE_PAGINATION_DEMO,
			style_featuredImage: WCB_POST_GRID_PANEL_STYLE_FEATURED_IMAGE_DEMO,
			style_border: MY_BORDER_CONTROL_DEMO,
			style_boxShadow: MY_BOX_SHADOW_CONTROL_DEMO,
			//
			advance_responsiveCondition: RESPONSIVE_CONDITON_DEMO,
			advance_zIndex: Z_INDEX_DEMO,
			advance_motionEffect: MY_MOTION_EFFECT_DEMO,
		};

		setAttributes({ ...DEFAULT });
	}, [style_layout]);

	useEffect(() => {
		if (!advance_motionEffect) {
			setAttributes({ advance_motionEffect: MY_MOTION_EFFECT_DEMO });
		}
	}, [advance_motionEffect]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						{general_sortingAndFiltering && (
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
						)}

						{general_postContent && (
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
						)}

						{general_postMeta && (
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
						)}

						{general_postFeaturedImage && (
							<WcbPostGridPanelPostFeaturedImage
								onToggle={() =>
									handleTogglePanel("General", "PostFeaturedImage")
								}
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
						)}

						{general_readmoreLink && (
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
						)}

						{general_pagination && (
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
						)}
					</>
				);
			case "Styles":
				return (
					<>
						{style_layout && (
							<WcbPostGridPanel_StyleLayout
								onToggle={() =>
									handleTogglePanel("Styles", "StyleLayout", true)
								}
								initialOpen={
									tabStylesIsPanelOpen === "StyleLayout" ||
									tabStylesIsPanelOpen === "first"
								}
								opened={tabStylesIsPanelOpen === "StyleLayout" || undefined}
								//
								panelData={style_layout}
								setAttr__={(data) => setAttributes({ style_layout: data })}
							/>
						)}

						{style_featuredImage && (
							<WcbPostGridPanel_StyleFeaturedImage
								onToggle={() =>
									handleTogglePanel("Styles", "StyleFeaturedImage")
								}
								initialOpen={tabStylesIsPanelOpen === "StyleFeaturedImage"}
								opened={
									tabStylesIsPanelOpen === "StyleFeaturedImage" || undefined
								}
								//
								panelData={style_featuredImage}
								setAttr__={(data) =>
									setAttributes({ style_featuredImage: data })
								}
								//
								imagePosition={
									general_postFeaturedImage?.featuredImagePosition || "top"
								}
							/>
						)}

						{style_title && (
							<WcbPostGridPanel_StyleTitle
								onToggle={() => handleTogglePanel("Styles", "StyleTitle")}
								initialOpen={tabStylesIsPanelOpen === "StyleTitle"}
								opened={tabStylesIsPanelOpen === "StyleTitle" || undefined}
								//
								panelData={style_title}
								setAttr__={(data) => setAttributes({ style_title: data })}
							/>
						)}

						{style_excerpt && (
							<WcbPostGridPanel_StyleExcerpt
								onToggle={() => handleTogglePanel("Styles", "StyleExcerpt")}
								initialOpen={tabStylesIsPanelOpen === "StyleExcerpt"}
								opened={tabStylesIsPanelOpen === "StyleExcerpt" || undefined}
								//
								panelData={style_excerpt}
								setAttr__={(data) => setAttributes({ style_excerpt: data })}
							/>
						)}

						{style_taxonomy && (
							<WcbPostGridPanel_StyleTaxonomy
								onToggle={() => handleTogglePanel("Styles", "StyleTaxonomy")}
								initialOpen={tabStylesIsPanelOpen === "StyleTaxonomy"}
								opened={tabStylesIsPanelOpen === "StyleTaxonomy" || undefined}
								//
								panelData={style_taxonomy}
								setAttr__={(data) => setAttributes({ style_taxonomy: data })}
							/>
						)}

						{style_meta && (
							<WcbPostGridPanel_StyleMeta
								onToggle={() => handleTogglePanel("Styles", "StyleMeta")}
								initialOpen={tabStylesIsPanelOpen === "StyleMeta"}
								opened={tabStylesIsPanelOpen === "StyleMeta" || undefined}
								//
								panelData={style_meta}
								setAttr__={(data) => setAttributes({ style_meta: data })}
							/>
						)}

						{style_readmoreLink && (
							<WcbPostGridPanel_StyleReadmoreLink
								onToggle={() =>
									handleTogglePanel("Styles", "StyleReadmoreLink")
								}
								initialOpen={tabStylesIsPanelOpen === "StyleReadmoreLink"}
								opened={
									tabStylesIsPanelOpen === "StyleReadmoreLink" || undefined
								}
								//
								panelData={style_readmoreLink}
								setAttr__={(data) =>
									setAttributes({ style_readmoreLink: data })
								}
							/>
						)}

						{style_pagination && (
							<WcbPostGridPanel_StylePagination
								onToggle={() => handleTogglePanel("Styles", "StylePagination")}
								initialOpen={tabStylesIsPanelOpen === "StylePagination"}
								opened={tabStylesIsPanelOpen === "StylePagination" || undefined}
								//
								panelData={style_pagination}
								setAttr__={(data) => setAttributes({ style_pagination: data })}
							/>
						)}

						<PanelBody
							onToggle={() => handleTogglePanel("Styles", "StyleBorder")}
							initialOpen={tabStylesIsPanelOpen === "StyleBorder"}
							opened={tabStylesIsPanelOpen === "StyleBorder" || undefined}
							title={__("Border", "boostify-blocks")}
						>
							{style_border && (
								<MyBorderControl
									borderControl={style_border}
									setAttrs__border={(data) =>
										setAttributes({ style_border: data })
									}
								/>
							)}
						</PanelBody>

						<PanelBody
							onToggle={() => handleTogglePanel("Styles", "StyleBoxShadow")}
							initialOpen={tabStylesIsPanelOpen === "StyleBoxShadow"}
							opened={tabStylesIsPanelOpen === "StyleBoxShadow" || undefined}
							title={__("Box Shadow", "boostify-blocks")}
						>
							{style_boxShadow && (
								<MyBoxShadowControl
									boxShadowControl={style_boxShadow}
									setAttrs__boxShadow={(data) =>
										setAttributes({ style_boxShadow: data })
									}
								/>
							)}
						</PanelBody>
					</>
				);
			case "Advances":
				return (
					<>
						{advance_zIndex && advance_responsiveCondition && (
							<AdvancePanelCommon
								advance_motionEffect={advance_motionEffect}
								advance_responsiveCondition={advance_responsiveCondition}
								advance_zIndex={advance_zIndex}
								handleTogglePanel={handleTogglePanel}
								setAttributes={setAttributes}
								tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
							/>
						)}
					</>
				);

			default:
				return <div></div>;
		}
	};

	const renderToobar = () => {
		if (
			!general_sortingAndFiltering ||
			!general_sortingAndFiltering ||
			!general_pagination
		) {
			return null;
		}

		const itemPerPage = general_sortingAndFiltering.queries.numberOfItems;
		const columnDesktop =
			general_sortingAndFiltering.numberOfColumn.Desktop || 1;
		const isShowPagination = general_pagination.isShowPagination;
		const maxPageShow = general_pagination.pageLimit;

		return (
			<Dropdown
				contentClassName="block-library-query-toolbar__popover"
				renderToggle={({ onToggle }) => (
					<ToolbarButton
						icon={settings}
						label={__("Display settings")}
						onClick={onToggle}
					/>
				)}
				renderContent={() => (
					<>
						<BaseControl id="1">
							<NumberControl
								__unstableInputWidth="60px"
								label={__("Items per Page")}
								labelPosition="edge"
								min={1}
								max={100}
								onChange={(value) => {
									if (isNaN(value) || value < 1 || value > 100) {
										return;
									}
									setAttributes({
										general_sortingAndFiltering: {
											...general_sortingAndFiltering,
											queries: {
												...general_sortingAndFiltering.queries,
												numberOfItems: Number(value || 1),
											},
										},
									});
								}}
								step="1"
								value={itemPerPage}
								isDragEnabled={false}
							/>
						</BaseControl>
						<BaseControl id="2">
							<NumberControl
								__unstableInputWidth="60px"
								label={__("Column in Desktop")}
								labelPosition="edge"
								min={0}
								max={100}
								onChange={(value) => {
									if (isNaN(value) || value < 0 || value > 100) {
										return;
									}
									setAttributes({
										general_sortingAndFiltering: {
											...general_sortingAndFiltering,
											numberOfColumn: {
												...general_sortingAndFiltering.numberOfColumn,
												Desktop: Number(value || 1),
											},
										},
									});
								}}
								step="1"
								value={columnDesktop}
								isDragEnabled={false}
							/>
						</BaseControl>
						<BaseControl id="3">
							<ToggleControl
								label={__("Show pagination", "boostify-blocks")}
								onChange={(checked) =>
									setAttributes({
										general_pagination: {
											...general_pagination,
											isShowPagination: checked,
										},
									})
								}
								checked={isShowPagination}
							/>
						</BaseControl>
						{isShowPagination && (
							<BaseControl
								id="4"
								help={__(
									"Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).",
									"boostify-blocks"
								)}
							>
								<NumberControl
									id={"maxPageInputId"}
									__unstableInputWidth="60px"
									label={__("Max page to show")}
									labelPosition="edge"
									min={0}
									onChange={(value) => {
										if (isNaN(value) || value < 0) {
											return;
										}
										setAttributes({
											general_pagination: {
												...general_pagination,
												pageLimit: value,
												isShowPagination: true,
											},
										});
									}}
									step="1"
									value={maxPageShow}
									isDragEnabled={false}
								/>
							</BaseControl>
						)}
					</>
				)}
			/>
		);
	};

	const WcbAttrsForGlobalCss =
		useMemo((): Required<WcbBlockPostsGridAttrs> | null => {
			const cs: WcbBlockPostsGridAttrs = {
				uniqueId,
				general_sortingAndFiltering,
				advance_responsiveCondition,
				advance_zIndex,
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
				style_taxonomy,
				advance_motionEffect,
			};
			if (Object.values(cs).some((item) => !item)) {
				return null;
			}

			return cs as Required<WcbBlockPostsGridAttrs>;
		}, [
			uniqueId,
			general_sortingAndFiltering,
			advance_responsiveCondition,
			advance_zIndex,
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
			style_taxonomy,
			advance_motionEffect,
		]);

	const WcbAttrsForServerSide = useMemo(() => {
		return {
			uniqueId,
			className,
			general_sortingAndFiltering,
			general_pagination,
			general_postContent,
			general_postFeaturedImage,
			general_postMeta,
			general_readmoreLink,
		};
	}, [
		uniqueId,
		className,
		general_sortingAndFiltering,
		general_pagination,
		general_postContent,
		general_postFeaturedImage,
		general_postMeta,
		general_readmoreLink,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div {...wrapBlockProps}>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					tabDefaultActive={tabIsOpen}
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* @ts-ignore */}
				<BlockControls group="block">{renderToobar()}</BlockControls>

				{/* CSS IN JS */}
				{uniqueId && !!style_layout && WcbAttrsForGlobalCss && (
					<GlobalCss {...WcbAttrsForGlobalCss} />
				)}

				{uniqueId && !!style_layout && (
					<ServerSideRender
						block="wcb/posts-grid"
						attributes={{ ...WcbAttrsForServerSide }}
						EmptyResponsePlaceholder={EmptyPlaceholder}
						LoadLoadingResponsePlaceholder={LoadingPlaceholder}
						httpMethod="POST"
					/>
				)}
			</div>
		</MyCacheProvider>
	);
};

export default Edit;

const EmptyPlaceholder = () => (
	<Placeholder
		icon={<Icon icon={file} />}
		label={__("Woostify block Products", "boostify-blocks")}
		className="wc-block-products-grid wc-block-products-category"
	>
		{__("No products were found that matched your selection.", "boostify-blocks")}
	</Placeholder>
);
const LoadingPlaceholder = () => (
	<div>
		<Spinner />
	</div>
);
