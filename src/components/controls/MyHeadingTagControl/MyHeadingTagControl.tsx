import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HtmlTagsType } from "../../../types";
import MyRadioGroup, { MyRadioItem } from "../MyRadioGroup";

interface Props {
	className?: string;
	tag?: keyof HTMLElementTagNameMap | HtmlTagsType;
	onChange?: (select: keyof HTMLElementTagNameMap) => void;
	label?: string;
}

const TAGS_PLANS: MyRadioItem<keyof HTMLElementTagNameMap>[] = [
	{
		name: "h1",
		icon: "H1",
	},
	{
		name: "h2",
		icon: "H2",
	},
	{
		name: "h3",
		icon: "H3",
	},
	{
		name: "h4",
		icon: "H4",
	},
	{
		name: "h5",
		icon: "H5",
	},
	{
		name: "h6",
		icon: "H6",
	},
	{
		name: "div",
		icon: "DIV",
	},
	{
		name: "p",
		icon: "P",
	},
];

const MyHeadingTagControl: FC<Props> = ({
	onChange,
	tag,
	className,
	label = __("Heading tag", "wcb"),
}) => {
	return (
		<MyRadioGroup
			label={label}
			className={className}
			// @ts-ignore
			onChange={onChange}
			value={tag as string}
			plans={TAGS_PLANS as any[]}
			isWrap
			hasResponsive={false}
		/>
	);
};

export default MyHeadingTagControl;
