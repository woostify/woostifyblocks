import React, { FC, ReactNode } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
interface Props {
	className?: string;
	uniqueId: string;
	HtmlTag?: keyof JSX.IntrinsicElements;
	children: ReactNode;
	attributes: Object;
}

const SaveCommon: FC<Props> = ({
	className = "",
	uniqueId = "",
	HtmlTag = "div",
	children,
	attributes = {},
	...props
}) => {
	let blockJson = "";
	try {
		blockJson = _.escape(JSON.stringify(attributes));
	} catch (error) {
		console.log("attributes JSON.stringify error on SAVE function", {
			error,
			className,
			attributes,
		});
	}

	return (
		<HtmlTag
			{...props}
			className={`${className} ${uniqueId} wcb-update-div`}
			id={uniqueId}
		>
			{children}
			{/*  */}
			<div data-wcb-global-styles={uniqueId}></div>
			<pre data-wcb-block-attrs={uniqueId} style={{ display: "none" }}>
				{blockJson}
			</pre>
		</HtmlTag>
	);
};

export default SaveCommon;