import React, { FC } from "react";
import {
	WCB_SLIDER_PANEL_STYLE_NAME,
} from "../block-slider/WcbSliderPanel_StyleName";
import {
	WCB_SLIDER_PANEL_STYLE_COMPANY,
} from "../block-slider/WcbSliderPanel_StyleCompany";
import {
	WCB_SLIDER_PANEL_STYLE_IMAGE,
} from "../block-slider/WcbSliderPanel_StyleImage";
import {
	WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER,
} from "../block-slider/WcbSliderPanel_StyleBackground";

interface Props {
	uniqueId: string;
	style_name?: WCB_SLIDER_PANEL_STYLE_NAME;
	style_content?: WCB_SLIDER_PANEL_STYLE_NAME; // reusing name styles for content
	style_company?: WCB_SLIDER_PANEL_STYLE_COMPANY;
	style_image?: WCB_SLIDER_PANEL_STYLE_IMAGE;
	style_backgroundAndBorder?: WCB_SLIDER_PANEL_STYLE_BACKGROUND_BORDER;
}

const GlobalCss: FC<Props> = ({
	uniqueId,
	style_name,
	style_content,
	style_company,
	style_image,
	style_backgroundAndBorder,
}) => {
	// Generate basic CSS styles
	let css = '';

	// Base star styles
	css += `
		.${uniqueId} .wcb-star {
			color: #fbbf24;
			font-size: 1rem;
		}
		.${uniqueId} .wcb-star:not(.active) {
			color: #d1d5db;
		}
		.${uniqueId} .wcb-slider-child__rating {
			margin-bottom: 1rem;
		}
	`;

	// Name styles
	if (style_name) {
		const { textColor, typography } = style_name;
		css += `
			.${uniqueId} .wcb-slider-child__name {
				${textColor ? `color: ${textColor};` : ''}
				${typography?.appearance?.style?.fontWeight ? `font-weight: ${typography.appearance.style.fontWeight};` : ''}
				${typography?.appearance?.style?.fontSize ? `font-size: ${typography.appearance.style.fontSize}px;` : ''}
				margin-bottom: 0.25rem;
			}
		`;
	}

	// Content styles
	if (style_content) {
		const { textColor, typography } = style_content;
		css += `
			.${uniqueId} .wcb-slider-child__content {
				${textColor ? `color: ${textColor};` : ''}
				${typography?.appearance?.style?.fontWeight ? `font-weight: ${typography.appearance.style.fontWeight};` : ''}
				${typography?.appearance?.style?.fontSize ? `font-size: ${typography.appearance.style.fontSize}px;` : ''}
				margin-bottom: 1rem;
			}
		`;
	}

	// Company styles
	if (style_company) {
		const { textColor, typography } = style_company;
		css += `
			.${uniqueId} .wcb-slider-child__company {
				${textColor ? `color: ${textColor};` : 'color: #6b7280;'}
				${typography?.appearance?.style?.fontWeight ? `font-weight: ${typography.appearance.style.fontWeight};` : ''}
				${typography?.appearance?.style?.fontSize ? `font-size: ${typography.appearance.style.fontSize}px;` : ''}
			}
		`;
	}

	// Image styles
	if (style_image) {
		css += `
			.${uniqueId} .wcb-slider-child__item-image img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				object-fit: cover;
			}
		`;
	}

	// Background styles
	if (style_backgroundAndBorder) {
		const { background, border } = style_backgroundAndBorder;
		css += `
			.${uniqueId} .wcb-slider-child__item {
				padding: 1rem;
				${background?.color ? `background-color: ${background.color};` : ''}
				${border?.color ? `border: 1px solid ${border.color};` : ''}
			}
		`;
	}

	return css ? <style>{css}</style> : null;
};

export default GlobalCss; 