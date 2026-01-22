import React, { FC, ReactNode, memo } from "react";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import { ResponsiveDevices } from "./controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import _ from "lodash";

interface Props {
	children: ReactNode;
	uniqueKey: string;
}

const MyCacheProvider: FC<Props> = ({ children, uniqueKey = "uniqueid" }) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	if (deviceType === "Desktop") {
		return <>{children}</>;
	}

	const KEY = uniqueKey
		.replace(/[0-9]/g, "")
		.replace(/ /g, "")
		.toLocaleLowerCase();

	const { myCache, ref } = useCreateCacheEmotion("wcb-key-cache");

	return (
		<CacheProvider value={myCache}>
			<head hidden className="hidden" ref={ref}></head>
			{children}
		</CacheProvider>
	);
};

export default memo(MyCacheProvider);
