import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../MyRadioGroup";

interface Props {
	className?: string;
	tag?: keyof JSX.IntrinsicElements;
	onChange?: (select: keyof JSX.IntrinsicElements) => void;
}

const TAGS_PLANS: MyRadioItem<keyof JSX.IntrinsicElements>[] = [
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

const MyHeadingTagControl: FC<Props> = ({ onChange, tag, className }) => {
	return (
		<MyRadioGroup
			className={className}
			// @ts-ignore
			onChange={onChange}
			value={tag}
			plans={TAGS_PLANS}
			isWrap
		/>
	);
};

export default MyHeadingTagControl;
