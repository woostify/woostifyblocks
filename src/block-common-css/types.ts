import React from "react";

export interface Option<T = string> {
	label: string;
	value: T;
}

export type HtmlTagsType = React.ElementType<any>;
