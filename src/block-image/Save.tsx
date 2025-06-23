import React from "react";
import { __ } from "@wordpress/i18n";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
import classnames from "classnames";
import { isEmpty } from "lodash";
import {
	RichText,
	useBlockProps,
	// @ts-ignore
	__experimentalGetElementClassName,
	// @ts-ignore
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	InnerBlocks,
} from "@wordpress/block-editor";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WcbAttrsForSave
	extends Omit<
		WcbAttrs,
		| "heading"
		| "alt"
		| "caption"
		| "href"
		| "url"
		| "id"
		| "linkClass"
		| "linkDestination"
		| "linkTarget"
		| "rel"
		| "sizeSlug"
		| "title"
		| "url"
	> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		alt,
		caption,
		href,
		id,
		linkClass,
		linkDestination,
		linkTarget,
		rel,
		title,
		url,
		general_settings,
		general_image,
		style_image,
		style_overlay,
		style_caption,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_settings: {
			...general_settings,
			// Make sure Height and Width are always object, not array
			height: typeof general_settings.height === 'object' && !Array.isArray(general_settings.height) 
				? general_settings.height 
				: { Desktop: undefined },
			width: typeof general_settings.width === 'object' && !Array.isArray(general_settings.width) 
				? general_settings.width 
				: { Desktop: undefined },
		},
		style_image,
		style_overlay,
		style_caption,
	};

	const { currentDeviceValue: align } = getValueFromAttrsResponsives(
		general_settings.alignment,
		"Desktop"
	);
	const { currentDeviceValue: WIDTH } = getValueFromAttrsResponsives(
		general_settings.width,
		"Desktop"
	);
	const { currentDeviceValue: HEIGHT } = getValueFromAttrsResponsives(
		general_settings.height,
		"Desktop"
	);
	//
	//

	const newRel = isEmpty(rel) ? undefined : rel;
	const borderProps = getBorderClassesAndStyles(attributes);

	const classes = classnames({
		[`align${align}`]: align,
		// [`size-${sizeSlug}`]: sizeSlug,
		// "is-resized": width || height,
		// "has-custom-border": !!borderProps.className || !isEmpty(borderProps.style),
	});

	const imageClasses = classnames(borderProps.className, {
		[`wp-image-${id}`]: !!id,
	});

	const image = (
		<img
			src={url}
			alt={alt || ""}
			className={imageClasses || undefined}
			style={borderProps.style}
			width={WIDTH}
			height={HEIGHT}
			title={title}
		/>
	);

	const figure = (
		<>
			{href ? (
				<a className={linkClass} href={href} target={linkTarget} rel={newRel}>
					{image}
				</a>
			) : (
				image
			)}
			{/ * Always render figure to avoid authentication errors */}
				<RichText.Content
					className={__experimentalGetElementClassName("caption")}
					tagName="figcaption"
				value={caption || ""}
				/>
		</>
	);
	
	const wrapBlockProps = useBlockProps.save({
		className: `woostify-container wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${classes}`.trim(),
		style: {
			display: "flex",
			justifyContent: attributes.general_settings?.alignment?.Desktop
		},
	});

	//

	const renderOverlay = () => {
		return (
			<div className="wcb-image__overlay-wrap">
				<div className="wcb-image__overlay-bg">
					<div className="wcb-image__overlay-content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	};

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
			HtmlTag="figure"
		>
			{figure}
			{general_settings.layout === "overlay" && renderOverlay()}
		</SaveCommon>
	);
}
