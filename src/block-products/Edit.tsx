import { __ } from "@wordpress/i18n";
import { BlockControls, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useMemo } from "react";
import ServerSideRender from "@wordpress/server-side-render";
import { WcbAttrs } from "./attributes";
import { settings } from "@wordpress/icons";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import {
	Dropdown,
	ToolbarButton,
	BaseControl,
	// @ts-ignore
	__experimentalNumberControl as NumberControl,
	ToggleControl,
} from "@wordpress/components";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbProducstPanelSortingAndFiltering, {
	WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbProducstPanelSortingAndFiltering";
import {
	PanelBody,
	Placeholder,
	Spinner,
	withSpokenMessages,
} from "@wordpress/components";
import WcbProductsPanelContent, {
	WCB_PRODUCTS_PANEL_COTENT_DEMO,
} from "./WcbProductsPanelContent";
import WcbProductsPanelFeaturedImage, {
	WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanelFeaturedImage";
import WcbProductsPanelButton, {
	WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanelButton";
import WcbProductsPanelPagination, {
	WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
} from "./WcbProductsPanelPagination";
import WcbProductsPanel_StyleTitle, {
	WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
} from "./WcbProductsPanel_StyleTitle";
import WcbProductsPanel_StyleFeaturedImage, {
	WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
} from "./WcbProductsPanel_StyleFeaturedImage";
import WcbProductsPanel_StyleLayout, {
	WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
} from "./WcbProductsPanel_StyleLayout";
import WcbProductsPanel_StyleAddToCartBtn, {
	WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
} from "./WcbProductsPanel_StyleAddToCartBtn";
import WcbProductsPanel_StylePagination, {
	WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
} from "./WcbProductsPanel_StylePagination";
import { Icon, file } from "@wordpress/icons";
import WcbProductsPanel_StyleSaleBadge, {
	WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
} from "./WcbProductsPanel_StyleSaleBadge";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import WcbProductsPanel_StylePrice, {
	WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
} from "./WcbProductsPanel_StylePrice";
import WcbProductsPanel_StyleRating, {
	WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
} from "./WcbProductsPanel_StyleRating";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import WcbProductsPanel_StyleCategory, {
	WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
} from "./WcbProductsPanel_StyleCategory";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { MY_MOTION_EFFECT_DEMO } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";

interface Props extends EditProps<WcbAttrs> {}

const Edit: FC<Props> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		className,
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		uniqueId,
		general_content,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
		style_title,
		style_featuredImage,
		style_layout,
		style_addToCardBtn,
		style_pagination,
		style_saleBadge,
		style_border,
		style_price,
		style_rating,
		advance_motionEffect,
		style_category,
	} = attributes;
	//  COMMON HOOKS
	const wrapBlockProps = useBlockProps();
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
		if (uniqueId) return;
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//

	useEffect(() => {
		if (style_layout) {
			return;
		}
		const DEFAULT: Omit<WcbAttrs, "uniqueId"> = {
			style_addToCardBtn: WCB_PRODUCTS_PANEL_STYLE_ADD_TO_CART_BTN_DEMO,
			style_border: MY_BORDER_CONTROL_DEMO,
			style_featuredImage: WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO,
			style_layout: WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
			style_pagination: WCB_PRODUCTS_PANEL_STYLE_PAGINATION_DEMO,
			style_price: WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
			style_rating: WCB_PRODUCTS_PANEL_STYLE_RATING_DEMO,
			style_saleBadge: WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
			style_category: WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO,
			style_title: WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
			general_sortingAndFiltering: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
			general_content: WCB_PRODUCTS_PANEL_COTENT_DEMO,
			general_featuredImage: WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
			general_addToCartBtn: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
			general_pagination: WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
			advance_responsiveCondition: RESPONSIVE_CONDITON_DEMO,
			advance_zIndex: Z_INDEX_DEMO,
			advance_motionEffect: MY_MOTION_EFFECT_DEMO,
		};

		setAttributes({ ...DEFAULT });
	}, [style_layout]);
	//
	useEffect(() => {
		if (!advance_motionEffect) {
			setAttributes({ advance_motionEffect: MY_MOTION_EFFECT_DEMO });
		}
	}, [advance_motionEffect]);
	useEffect(() => {
		if (!style_category) {
			setAttributes({ style_category: WCB_PRODUCTS_PANEL_STYLE_CATEGORY_DEMO });
		}
	}, [style_category]);
	//

	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						{general_sortingAndFiltering && (
							<WcbProducstPanelSortingAndFiltering
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
						{general_content && (
							<WcbProductsPanelContent
								onToggle={() => handleTogglePanel("General", "Content")}
								initialOpen={tabGeneralIsPanelOpen === "Content"}
								opened={tabGeneralIsPanelOpen === "Content" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ general_content: data });
								}}
								panelData={general_content}
							/>
						)}
						{general_featuredImage && (
							<WcbProductsPanelFeaturedImage
								onToggle={() =>
									handleTogglePanel("General", "PostFeaturedImage")
								}
								initialOpen={tabGeneralIsPanelOpen === "PostFeaturedImage"}
								opened={
									tabGeneralIsPanelOpen === "PostFeaturedImage" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ general_featuredImage: data });
								}}
								panelData={general_featuredImage}
							/>
						)}
						{general_addToCartBtn && (
							<WcbProductsPanelButton
								onToggle={() => handleTogglePanel("General", "Button")}
								initialOpen={tabGeneralIsPanelOpen === "Button"}
								opened={tabGeneralIsPanelOpen === "Button" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ general_addToCartBtn: data });
								}}
								panelData={general_addToCartBtn}
							/>
						)}
						{general_pagination && (
							<WcbProductsPanelPagination
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
							<WcbProductsPanel_StyleLayout
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleLayout", true)
								}
								initialOpen={
									tabStylesIsPanelOpen === "_StyleLayout" ||
									tabStylesIsPanelOpen === "first"
								}
								opened={tabStylesIsPanelOpen === "_StyleLayout" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_layout: data });
								}}
								panelData={style_layout}
							/>
						)}

						{general_featuredImage?.isShowFeaturedImage && style_featuredImage && (
							<WcbProductsPanel_StyleFeaturedImage
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleFeaturedImage")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleFeaturedImage"}
								opened={
									tabStylesIsPanelOpen === "_StyleFeaturedImage" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_featuredImage: data });
								}}
								panelData={style_featuredImage}
								imagePosition="top"
							/>
						)}

						{general_content?.isShowCategory && style_category && (
							<WcbProductsPanel_StyleCategory
								onToggle={() => handleTogglePanel("Styles", "_StyleCategory")}
								initialOpen={tabStylesIsPanelOpen === "_StyleCategory"}
								opened={tabStylesIsPanelOpen === "_StyleCategory" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_category: data });
								}}
								panelData={style_category}
							/>
						)}

						{general_content?.isShowTitle && style_title && (
							<WcbProductsPanel_StyleTitle
								onToggle={() => handleTogglePanel("Styles", "_StyleTitle")}
								initialOpen={tabStylesIsPanelOpen === "_StyleTitle"}
								opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_title: data });
								}}
								panelData={style_title}
							/>
						)}

						{general_content?.isShowSaleBadge && style_saleBadge && (
							<WcbProductsPanel_StyleSaleBadge
								onToggle={() => handleTogglePanel("Styles", "_StyleSaleBadge")}
								initialOpen={tabStylesIsPanelOpen === "_StyleSaleBadge"}
								opened={tabStylesIsPanelOpen === "_StyleSaleBadge" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_saleBadge: data });
								}}
								panelData={style_saleBadge}
							/>
						)}

						{general_content?.isShowRating && style_rating && (
							<WcbProductsPanel_StyleRating
								onToggle={() => handleTogglePanel("Styles", "_StyleRating")}
								initialOpen={tabStylesIsPanelOpen === "_StyleRating"}
								opened={tabStylesIsPanelOpen === "_StyleRating" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_rating: data });
								}}
								panelData={style_rating}
							/>
						)}

						{general_content?.isShowPrice && style_price && (
							<WcbProductsPanel_StylePrice
								onToggle={() => handleTogglePanel("Styles", "_StylePrice")}
								initialOpen={tabStylesIsPanelOpen === "_StylePrice"}
								opened={tabStylesIsPanelOpen === "_StylePrice" || undefined}
								//
								setAttr__={(data) => {
									setAttributes({ style_price: data });
								}}
								panelData={style_price}
							/>
						)}

						{general_addToCartBtn?.isShowButton && style_addToCardBtn && (
							<WcbProductsPanel_StyleAddToCartBtn
								onToggle={() =>
									handleTogglePanel("Styles", "_StyleAddToCartBtn")
								}
								initialOpen={tabStylesIsPanelOpen === "_StyleAddToCartBtn"}
								opened={
									tabStylesIsPanelOpen === "_StyleAddToCartBtn" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_addToCardBtn: data });
								}}
								panelData={style_addToCardBtn}
							/>
						)}

						{general_pagination?.isShowPagination && style_pagination && (
							<WcbProductsPanel_StylePagination
								onToggle={() => handleTogglePanel("Styles", "_StylePagination")}
								initialOpen={tabStylesIsPanelOpen === "_StylePagination"}
								opened={
									tabStylesIsPanelOpen === "_StylePagination" || undefined
								}
								//
								setAttr__={(data) => {
									setAttributes({ style_pagination: data });
								}}
								panelData={style_pagination}
							/>
						)}

						<PanelBody
							onToggle={() => handleTogglePanel("Styles", "StyleBorder")}
							initialOpen={tabStylesIsPanelOpen === "StyleBorder"}
							opened={tabStylesIsPanelOpen === "StyleBorder" || undefined}
							title={__("Border", "wcb")}
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
					</>
				);
			case "Advances":
				return (
					<>
						{advance_responsiveCondition && advance_zIndex && (
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
		if (!general_sortingAndFiltering || !style_layout || !general_pagination) {
			return null;
		}

		const itemPerPage = general_sortingAndFiltering?.numberOfItems || 9;
		const columnDesktop = style_layout?.numberOfColumn.Desktop || 1;
		const isShowPagination = general_pagination?.isShowPagination;
		const maxPageShow = general_pagination?.pageLimit || 0;

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
							{general_sortingAndFiltering && (
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
												numberOfItems: Number(value || 1),
											},
										});
									}}
									step="1"
									value={itemPerPage}
									isDragEnabled={false}
								/>
							)}
						</BaseControl>
						<BaseControl id="2">
							{style_layout && (
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
											style_layout: {
												...style_layout,
												numberOfColumn: {
													...style_layout.numberOfColumn,
													Desktop: Number(value || 1),
												},
											},
										});
									}}
									step="1"
									value={columnDesktop}
									isDragEnabled={false}
								/>
							)}
						</BaseControl>
						<BaseControl id="3">
							{general_pagination && (
								<ToggleControl
									label={__("Show pagination", "wcb")}
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
							)}
						</BaseControl>
						{isShowPagination && (
							<BaseControl
								id="4"
								help={__(
									"Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).",
									"wcb"
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

	const WcbAttrsForSave = useCallback((): Required<WcbAttrsForSave> | null => {
		const cs: WcbAttrsForSave = {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_sortingAndFiltering,
			general_content,
			general_featuredImage,
			general_addToCartBtn,
			general_pagination,
			style_title,
			style_featuredImage,
			style_layout,
			style_addToCardBtn,
			style_pagination,
			style_saleBadge,
			style_border,
			style_price,
			style_rating,
			advance_motionEffect,
			style_category,
		};
		if (Object.values(cs).some((item) => !item)) {
			return null;
		}
		return cs as Required<WcbAttrsForSave>;
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		general_content,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
		style_title,
		style_featuredImage,
		style_layout,
		style_addToCardBtn,
		style_pagination,
		style_saleBadge,
		style_border,
		style_price,
		style_rating,
		advance_motionEffect,
		style_category,
	]);

	const WcbAttrsForServerSide = useMemo(() => {
		return {
			className,
			uniqueId,
			general_sortingAndFiltering,
			general_content,
			general_featuredImage,
			general_addToCartBtn,
			general_pagination,
		};
	}, [
		uniqueId,
		className,
		general_sortingAndFiltering,
		general_content,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
	]);

	const WcbAttrsForSaveValue = WcbAttrsForSave();
	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${
					wrapBlockProps.className
				} wcb-block-products-editor-swithToScrollSnapX__${style_layout?.swithToScrollSnapX.toString()}`}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* @ts-ignore */}
				<BlockControls group="block">{renderToobar()}</BlockControls>

				{/* CSS IN JS */}
				{!!uniqueId &&
					!!style_layout &&
					!!style_price &&
					WcbAttrsForSaveValue && <GlobalCss {...WcbAttrsForSaveValue} />}

				{/* CHILD CONTENT  */}
				{uniqueId && !!style_layout && !!style_price && (
					<ServerSideRender
						block="wcb/products"
						attributes={WcbAttrsForServerSide}
						EmptyResponsePlaceholder={EmptyPlaceholder}
						LoadLoadingResponsePlaceholder={LoadingPlaceholder}
						httpMethod="POST"
					/>
				)}
			</div>
		</MyCacheProvider>
	);
};

export default withSpokenMessages(Edit);

const EmptyPlaceholder = () => (
	// <Placeholder
	// 	icon={<Icon icon={file} />}
	// 	label={__("Woostify block Products", "wcb")}
	// 	className="wc-block-products-grid wc-block-products-category"
	// >
	// 	{__("No products were found that matched your selection.", "wcb")}
	// </Placeholder>
	<></>
);
const LoadingPlaceholder = () => (
	<div>
		<Spinner />
	</div>
);
