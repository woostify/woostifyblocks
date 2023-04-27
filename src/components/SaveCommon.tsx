import React, { FC, ReactNode } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
// @ts-ignore
interface Props {
	className?: string;
	anchor?: string;
	uniqueId: string;
	HtmlTag?: React.ElementType<any>;
	children: ReactNode;
	attributes: Object;
}

const SaveCommon: FC<Props> = ({
	anchor,
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
			className={`wcb-cl-common ${className} ${uniqueId} wcb-update-div`}
			id={anchor || uniqueId || undefined}
			data-uniqueid={uniqueId}
			data-is-wcb-save-common
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
