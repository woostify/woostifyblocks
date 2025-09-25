import {
    WCB_PRODUCTS_PANEL_STYLE_LAYOUT_DEMO,
} from "../block-products/WcbProductsPanel_StyleLayout";
import { MY_BORDER_CONTROL_DEMO } from "../components/controls/MyBorderControl/types";
import { getThemeDefaults } from "../utils/themeDefaults";
import { WCB_PRODUCTS_PANEL_SORTINGANDFILTERING_DEMO } from "./WcbProducstPanelSortingAndFiltering";
import { WCB_PRODUCTS_PANEL_COTENT_DEMO } from "./WcbProductsPanelContent";
  
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