import React from "react";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";

export default function useGetImageSizeOptions() {
	const { imageSizes } = useSelect((select) => {
		// @ts-ignore
		const settings = select(blockEditorStore).getSettings();
		return {
			imageSizes: settings.imageSizes as any[],
		};
	}, []);

	const imageSizeOptions =
		imageSizes?.map(({ name, slug }) => ({
			value: slug,
			label: name,
		})) || [];

	return { imageSizeOptions };
}
