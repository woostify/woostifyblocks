import React from "react";
import { buildTermsTree } from "./terms";
import { useMemo } from "@wordpress/element";
import { TreeSelect } from "@wordpress/components";

export default function CategorySelect({
	label,
	noOptionLabel,
	categoriesList,
	selectedCategoryId,
	onChange,
	...props
}) {
	const termsTree = useMemo(() => {
		return buildTermsTree(categoriesList);
	}, [categoriesList]);

	return (
		<TreeSelect
			{...{ label, noOptionLabel, onChange }}
			tree={termsTree}
			selectedId={selectedCategoryId}
			{...props}
		/>
	);
}
