import { get, pickBy } from "lodash";
import { PostRoot } from "./types";

export function getFeaturedImageDetails(post: PostRoot, size: string) {
	const image = get(post, ["_embedded", "wp:featuredmedia", "0"]);

	return {
		url: image?.media_details?.sizes?.[size]?.source_url ?? image?.source_url,
		alt: image?.alt_text,
	};
}
