import React, { useRef, useEffect, useState } from "react";
import createCache, { EmotionCache } from "@emotion/cache";

const useCreateCacheEmotion = (key = "wcb-custom-cache-key") => {
	// DIEU NAY GIUP EMOTION GLOBAL CSS DUOC IMPORT TRONG MOBILE IFRAME!!!
	const ref = useRef<HTMLDivElement>(null);

	const cache = createCache({
		key,
		container: ref.current || undefined,
	});

	return {
		myCache: cache,
		ref,
	};
};

export default useCreateCacheEmotion;
