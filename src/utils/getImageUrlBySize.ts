import React from "react";
import { MediaUploadData } from "../components/controls/MyMediaUploadCheck";

export default function getImageUrlBySize(
	image: MediaUploadData,
	size: string
) {
	if (!image.sizes) {
		return image.mediaUrl;
	}

	if (image.sizes[size]) {
		return image.sizes[size].url;
	}

	if (!image.sizes[size]) {
		return (
			image.sizes["large"]?.url || image.sizes["full"]?.url || image.mediaUrl
		);
	}
}
