import React, { useRef, FC, ReactNode, memo, useState, useEffect } from "react";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import createCache, { EmotionCache } from '@emotion/cache';
import { ResponsiveDevices } from "./controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import _ from "lodash";

interface Props {
	children: ReactNode;
	uniqueKey: string;
}

const useCreateEmotionCache = function (key = "wcb-custom-cache-key") {
	const [cache, setCache] = useState<any>(null);
	const useRefReact = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let observer: MutationObserver | null = null;
		let tries = 0;

		const createIframeCache = (iframe: HTMLIFrameElement) => {
			const iframeHead = iframe?.contentDocument?.head;
			if (!iframeHead) return;

			const newCache = createCache({
				key,
				container: iframeHead || useRefReact.current || undefined,
			});
			setCache(newCache);
		};

		const watchIframe = () => {
			const iframe = document.querySelector('iframe[name="editor-canvas"]') as HTMLIFrameElement | null;
			if (!iframe) {
				if (tries < 20) {
					tries++;
					setTimeout(watchIframe, 150); // retry for up to ~3s
				}
				return;
			}

			if (iframe.contentDocument?.readyState === "complete") {
				createIframeCache(iframe);
			} else {
				iframe.addEventListener("load", () => createIframeCache(iframe), {
					once: true,
				});
			}
		};

		// Initial attach
		watchIframe();

		// Watch for iframe changes (device switch)
		observer = new MutationObserver(() => {
			const iframe = document.querySelector('iframe[name="editor-canvas"]') as HTMLIFrameElement | null;
			if (iframe && iframe !== (cache as any)?.container?.ownerDocument?.defaultView?.frameElement) {
				tries = 0;
				watchIframe();
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });

		return () => observer?.disconnect();
	}, []);

	return { cache, useRefReact };
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
	const { cache, useRefReact } = useCreateEmotionCache("wcb-key-cache");
	
	if (!cache) {
		return <>{children}</>;
	}

	return (
		<CacheProvider value={cache}>
			<head hidden className="hidden" ref={ref}></head>
			{children}
		</CacheProvider>
	);
};

export default memo(MyCacheProvider);
