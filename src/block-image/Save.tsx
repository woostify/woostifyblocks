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
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_settings,
	};

	const { currentDeviceValue: align } = getValueFromAttrsResponsives(
		general_settings.alignment,
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
			alt={alt}
			className={imageClasses || undefined}
			style={borderProps.style}
			// width={width}
			// height={height}
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
			{!RichText.isEmpty(caption) && (
				<RichText.Content
					className={__experimentalGetElementClassName("caption")}
					tagName="figcaption"
					value={caption}
				/>
			)}
		</>
	);

	//
	//
	//
	//
	const blockProps = useBlockProps.save({
		className: "wcb-image__wrap " + classes,
	});
	//
	//
	return (
		<SaveCommon
			attributes={newAttrForSave}
			className="wcb-default__wrap"
			uniqueId={uniqueId}
			HtmlTag="figure"
			{...blockProps}
		>
			{figure}
		</SaveCommon>
	);
}
