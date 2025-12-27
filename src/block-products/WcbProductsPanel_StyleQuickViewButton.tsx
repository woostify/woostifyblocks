import { __ } from "@wordpress/i18n";
import React, { FC } from "react";


export interface WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON {
	enabled: boolean;
	position: 'bottom-image' | 'top-right' | 'center-image' | 'none';
	show_icon: boolean;
	bg_color: string;
	text_color: string;
	hover_bg_color: string;
	hover_text_color: string;
	border_radius: number;
}

export const WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON_DEMO: WCB_PRODUCTS_PANEL_STYLE_QUICKVIEW_BUTTON =
	{
		enabled: false,
		position: "bottom-image",
		show_icon: true,
		bg_color: "#ffffff",
		text_color: "#000000",
		hover_bg_color: "#f5f5f5",
		hover_text_color: "#333333",
		border_radius: 0,
	};
