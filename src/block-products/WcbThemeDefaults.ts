import {
    WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
} from "../block-products/WcbProductsPanel_StyleLayout";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { getThemeDefaults } from "../utils/themeDefaults";
import { WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO } from "./WcbProducstPanelSortingAndFiltering";
import { WCB_PRODUCTS_PANEL_COTENT_DEMO } from "./WcbProductsPanelContent";
import {  WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO } from "./WcbProductsPanelFeaturedImage";
import { WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO } from "./WcbProductsPanel_StyleFeaturedImage";
import { WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO } from "./WcbProductsPanel_StyleSaleBadge";
import { WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO } from "./WcbProductsPanel_StyleTitle";
import { WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO } from "./WcbProductsPanel_StylePrice";
  
export function buildStyleLayoutDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO>) {
    const theme = getThemeDefaults();
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
        ...(attr || {}),
        numberOfColumn: {
            Desktop: 
                theme.product_per_row?.desktop ?? 
                attr?.numberOfColumn?.Desktop ?? 
                WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Desktop,
            Tablet:  
                theme.product_per_row?.tablet ?? 
                attr?.numberOfColumn?.Tablet ?? 
                WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Tablet,
            Mobile:  
                theme.product_per_row?.mobile ??
                attr?.numberOfColumn?.Mobile ?? 
                WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.numberOfColumn.Mobile,
        },
        textAlignment: 
            theme.shop_archive_product_content?.align ??
            attr?.textAlignment ?? 
            WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO.textAlignment,
    };
}
  
export function buildStyleBorderDefault(attr?: Partial<typeof MY_BORDER_CONTROL_DEMO>) {
    const theme = getThemeDefaults();
    const style = theme.shop_archive_border?.style;
    const color = theme.shop_archive_border?.color;
    const widthPx = theme.shop_archive_border?.width != null ? 
        `${theme.shop_archive_border.width}px` : undefined;
    const base = (attr?.mainSettings ?? MY_BORDER_CONTROL_DEMO.mainSettings) as any;
    const resolved = style && style !== "none"
        ? { 
            color: color ?? base.color, 
            style: style ?? base.style, 
            width: widthPx ?? base.width }
        : base;
    return { ...MY_BORDER_CONTROL_DEMO, ...(attr || {}), mainSettings: resolved };
}

// Build general_sortingAndFiltering with theme numberOfItems
export function buildSortingAndFilteringDefault(
    attr?: Partial<typeof WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO>
) {
    const theme = getThemeDefaults();
    return {
        ...WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO,
        ...(attr || {}),
        numberOfItems:
            theme.product_per_page ||
            (attr?.numberOfItems as number | undefined) ||
            WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO.numberOfItems,
    };
}

export function buildGeneralContractDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_COTENT_DEMO>) {
    const theme = getThemeDefaults();
    const content = theme.shop_archive_product_content;
    const toBool = (v: any, def: boolean): boolean =>
        v === undefined ? def : v === true || v === '1' || v === 1;
    return {
        ...WCB_PRODUCTS_PANEL_COTENT_DEMO,
        ...(attr || {}),
        isShowTitle: toBool(
            content?.title_flag,
            attr?.isShowTitle ?? WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowTitle
        ),
        isShowCategory: toBool(
            content?.category_flag,
            attr?.isShowCategory ?? WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowCategory
        ),
        isShowRating: toBool(
            content?.rating_flag,
            attr?.isShowRating ?? WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowRating
        ),
        isShowPrice: toBool(
            content?.price_flag,
            attr?.isShowPrice ?? WCB_PRODUCTS_PANEL_COTENT_DEMO.isShowPrice
        ),
    };
}

export function buildGeneralFeaturedImageDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO>) {
    const theme = getThemeDefaults();
    const content = theme.shop_archive_product_image;
    return {
        ...WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
        ...(attr || {}),
        hoverType: 
            content?.hover ?? 
            attr?.hoverType ?? 
            WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO.hoverType,
    };
}

export function buildStyleFeaturedImageDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO>) {
    const theme = getThemeDefaults();
    const style = theme.shop_archive_product_image?.style;
    const color = theme.shop_archive_product_image?.color;
    const widthPx = theme.shop_archive_product_image?.width != null ? 
        `${theme.shop_archive_product_image.width}px` : undefined;

    const base = (attr?.border?.mainSettings ?? WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO.border.mainSettings) as any;
    const resolved = style && style !== "none"
        ? { 
            color: color ?? base.color, 
            style: style ?? base.style, 
            width: widthPx ?? base.width }
        : base;

    return { 
        ...WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO, ...(attr || {}),
        border: { ...WCB_PRODUCTS_PANEL_STYLE_FEATURED_IMAGE_DEMO.border, ...(attr?.border || {}), mainSettings: resolved } 
    };
}

export function buildStyleSaleBadgeDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO>) {
    const theme = getThemeDefaults();
    const saleTag = theme.shop_archive_sale_tag;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO,
        ...(attr || {}),
        backgroundColor: 
            saleTag?.bg_color ?? 
            attr?.backgroundColor ?? 
            WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.backgroundColor,
        textColor: 
            saleTag?.text_color ?? 
            attr?.textColor ?? 
            WCB_PRODUCTS_PANEL_STYLE_SALE_BADGE_DEMO.textColor,
    };
}

export function buildStyleTitleDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO>) {
    const theme = getThemeDefaults();
    const general = theme.shop_archive_general_design;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO,
        ...(attr || {}),
        textColor: 
            general?.title_color ?? 
            attr?.textColor ?? 
            WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.textColor,
        typography: {
            ...WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography,
            ...(attr?.typography || {}),
            fontSizes: {
                Desktop: 
                    (general?.title_font_size != null ? `${general.title_font_size.desktop}px` : undefined) ??
                    attr?.typography?.fontSizes?.Desktop ??
                    WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Desktop,
                Tablet: 
                    (general?.title_font_size != null ? `${general.title_font_size.tablet}px` : undefined) ??
                    attr?.typography?.fontSizes?.Tablet ??
                    WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Tablet,
                Mobile: 
                    (general?.title_font_size != null ? `${general.title_font_size.mobile}px` : undefined) ??
                    attr?.typography?.fontSizes?.Mobile ??
                    WCB_PRODUCTS_PANEL_STYLE_TITLE_DEMO.typography.fontSizes.Mobile,
            },
        },
    };
}

export function buildStylePriceDefault(attr?: Partial<typeof WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO>) {
    const theme = getThemeDefaults();
    const general = theme.shop_archive_general_design;
    return {
        ...WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO,
        ...(attr || {}),
        textColor: 
            general?.price_color ?? 
            attr?.textColor ??
            WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.textColor,
        typography: {
            ...WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography,
            ...(attr?.typography || {}),
            fontSizes: {
                Desktop: 
                    (general?.price_font_size != null ? `${general.price_font_size.desktop}px` : undefined) ??
                    attr?.typography?.fontSizes?.Desktop ??
                    WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Desktop,
                Tablet: 
                    (general?.price_font_size != null ? `${general.price_font_size.tablet}px` : undefined) ??
                    attr?.typography?.fontSizes?.Tablet ??
                    WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Tablet,
                Mobile: 
                    (general?.price_font_size != null ? `${general.price_font_size.mobile}px` : undefined) ??
                    attr?.typography?.fontSizes?.Mobile ??
                    WCB_PRODUCTS_PANEL_STYLE_PRICE_DEMO.typography.fontSizes.Mobile,
            },
        },
    };
}