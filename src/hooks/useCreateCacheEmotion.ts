import React, { useRef, useEffect } from "react";
import createCache from "@emotion/cache";

const useCreateCacheEmotion = (key = "wcb-custom-cache-key") => {
	// DIEU NAY GIUP EMOTION GLOBAL CSS DUOC IMPORT TRONG MOBILE IFRAME!!!
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!ref.current) {
			return;
		}
		const { ownerDocument } = ref.current;
		const { defaultView } = ownerDocument;

		// Set ownerDocument.title for example.
	}, []);
	const myCache = createCache({
		key,
		container: ref.current || undefined,
	});

	return {
		myCache,
		ref,
	};
};

export default useCreateCacheEmotion;
