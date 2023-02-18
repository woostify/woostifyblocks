import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useState, useMemo } from "react";
import ServerSideRender from "@wordpress/server-side-render";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbProducstPanelSortingAndFiltering, {
	WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
} from "./WcbProducstPanelSortingAndFiltering";
import {
	Button,
	PanelBody,
	Placeholder,
	Spinner,
	Tip,
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
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { RESPONSIVE_CONDITON_DEMO } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { Z_INDEX_DEMO } from "../components/controls/MyZIndexControl/MyZIndexControl";

interface Props extends EditProps<WcbAttrs> {}

const Edit: FC<Props> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
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

	const UNIQUE_ID = wrapBlockProps.id;

	//

	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);

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
			style_title: WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
			advance_responsiveCondition: RESPONSIVE_CONDITON_DEMO,
			advance_zIndex: Z_INDEX_DEMO,
			general_sortingAndFiltering: WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
			general_content: WCB_PRODUCTS_PANEL_COTENT_DEMO,
			general_featuredImage: WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
			general_addToCartBtn: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
			general_pagination: WCB_PRODUCTS_PANEL_PAGINATION_DEMO,
		};

		setAttributes({ ...DEFAULT });
	}, [style_layout]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
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
						<WcbProductsPanelFeaturedImage
							onToggle={() => handleTogglePanel("General", "PostFeaturedImage")}
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
					</>
				);
			case "Styles":
				return (
					<>
						<WcbProductsPanel_StyleLayout
							onToggle={() => handleTogglePanel("Styles", "_StyleLayout", true)}
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

						{general_featuredImage.isShowFeaturedImage && (
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

						{general_content.isShowTitle && (
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

						{general_content.isShowSaleBadge && (
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

						{general_content.isShowRating && (
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

						{general_content.isShowPrice && (
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

						{general_addToCartBtn.isShowButton && (
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

						{general_pagination.isShowPagination && (
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
							<MyBorderControl
								borderControl={style_border}
								setAttrs__border={(data) =>
									setAttributes({ style_border: data })
								}
							/>
						</PanelBody>
					</>
				);
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
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
		};
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
	]);

	const WcbAttrsForServerSide = useMemo(() => {
		return {
			uniqueId,
			general_sortingAndFiltering,
			general_content,
			general_featuredImage,
			general_addToCartBtn,
			general_pagination,
		};
	}, [
		uniqueId,
		general_sortingAndFiltering,
		general_content,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-products__wrap ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				{uniqueId && !!style_layout && <GlobalCss {...WcbAttrsForSave()} />}

				{/* CHILD CONTENT  */}
				{uniqueId && !!style_layout && (
					<ServerSideRender
						block="wcb/products"
						attributes={WcbAttrsForServerSide}
						EmptyResponsePlaceholder={EmptyPlaceholder}
						LoadLoadingResponsePlaceholder={LoadingPlaceholder}
					/>
				)}
			</div>
		</MyCacheProvider>
	);
};

export default withSpokenMessages(Edit);

const EmptyPlaceholder = () => (
	<Placeholder
		icon={<Icon icon={file} />}
		label={__("Woostify block Products", "wcb")}
		className="wc-block-products-grid wc-block-products-category"
	>
		{__("No products were found that matched your selection.", "wcb")}
	</Placeholder>
);
const LoadingPlaceholder = () => (
	<div>
		<Spinner />
	</div>
);
