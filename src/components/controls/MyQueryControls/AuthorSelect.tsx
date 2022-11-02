import React from "react";
import { TreeSelect } from "@wordpress/components";
import { buildTermsTree } from "./terms";

export default function AuthorSelect({
	label,
	noOptionLabel,
	authorList,
	selectedAuthorId,
	onChange,
}) {
	if (!authorList) return null;
	const termsTree = buildTermsTree(authorList);
	return (
		<TreeSelect
			{...{ label, noOptionLabel, onChange }}
			tree={termsTree}
			selectedId={selectedAuthorId}
		/>
	);
}
