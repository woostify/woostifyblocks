import { TextAlignment} from "../components/controls/MyTextAlignControl/MyTextAlignControl";

export type ThemeDefaults = {
    product_per_row?: { desktop?: number; tablet?: number; mobile?: number };
    product_per_page?: number;
    shop_archive_border?: { style?: string; width?: number; color?: string };
    shop_archive_product_content?: {
        title_flag?: boolean;
        category_flag?: string;
        rating_flag?: string;
        price_flag?: string;
        quantity_flag?: string;
        equal_flag?: string;
        align?: TextAlignment;
        min_height?: number;
    };
    shop_archive_product_image?: {
        style?: string;
        width?: number;
        color?: string;
        hover?: "swap" | "zoom" | "none";
    };
    shop_archive_sale_tag?: {
        bg_color?: string;
        text_color?: string;
        position?: string;
    };
    shop_archive_out_of_stock?: {
        bg_color?: string;
        text_color?: string;
        position?: string;
    };
    shop_archive_general_design?: {
        title_color?: string;
        title_font_size?: {
            desktop?: number;
            tablet?: number;
            mobile?: number;
        };
        price_color?: string;
        price_font_size?: {
            desktop?: number;
            tablet?: number;
            mobile?: number;
        };
    };
    shop_archive_add_to_cart_btn?: {
        text_color?: string;
        bg_color?: string;
        hover_text_color?: string;
        hover_bg_color?: string;
        border_radius?: number;
        position?: string;
    };
    shop_archive_wishlist_btn?: {
        position?: 'top-right' | 'bottom-right' | 'none';
        style?:  'yith' | 'ti';
    };
    shop_quick_view_btn?: {
        enabled?: boolean;
        position?: 'bottom-image' | 'top-right' | 'center-image' | 'none';
        show_icon?: boolean;
        bg_color?: string;
        text_color?: string;
        hover_bg_color?: string;
        hover_text_color?: string;
        border_radius?: number;
    };
};
  
export function getThemeDefaults(): ThemeDefaults {
    // @ts-ignore
    const win = window as any;
    return win?.WCB_THEME_DEFAULTS || {};
}
