import React from "react";
import { useSelect } from "@wordpress/data";

const useGetDeviceType = () => {
	const { deviceType } = useSelect((select) => {
		const { __experimentalGetPreviewDeviceType: getPreviewDeviceType } =
			select("core/edit-post") || false;

		if (!getPreviewDeviceType) {
			return {
				deviceType: null,
			};
		}

		return {
			// @ts-ignore
			deviceType: getPreviewDeviceType(),
		};
	}, []);

	return deviceType;
};

export default useGetDeviceType;
