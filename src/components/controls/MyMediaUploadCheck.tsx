import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { plus } from "@wordpress/icons";
import { Button, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useState, useEffect, FC } from "react";
import MyButton from "./MyButton";

interface Props {
	imageData: MediaUploadData;
	className?: string;
	btnClass?: string;
	defaultBtnClass?: string;
	onChange: (T: MediaUploadData) => void;
}

export interface MediaUploadDataSizeItem {
	height: number;
	width: number;
	orientation: string;
	url: string;
}
export interface MediaUploadData {
	mediaId: number;
	mediaUrl: string;
	mediaSrcSet?: string;
	sizes?: {
		full?: MediaUploadDataSizeItem;
		large?: MediaUploadDataSizeItem;
		medium?: MediaUploadDataSizeItem;
		thumbnail?: MediaUploadDataSizeItem;
	};
}

export const DEFAULT_MEDIA_UPLOAD: MediaUploadData = {
	mediaId: 0,
	mediaUrl: "",
	mediaSrcSet: undefined,
};

const MyMediaUploadCheck: FC<Props> = ({
	className = "text-gray-700",
	btnClass = "ring-1 ring-neutral-200",
	defaultBtnClass = "hover:bg-slate-100",
	imageData,
	onChange,
}) => {
	const { mediaId, mediaUrl, mediaSrcSet, sizes } = imageData;

	const removeMedia = () => {
		onChange({
			mediaId: 0,
			mediaUrl: "",
			mediaSrcSet: undefined,
		});
	};

	const onSelectMedia = (media) => {
		onChange({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaSrcSet: `${media.url} ${media.width}w, ${media.sizes?.medium?.url} ${media.sizes?.medium?.width}w, ${media.sizes?.full?.url} ${media.sizes?.full?.width}w, ${media.sizes?.large?.url} ${media.sizes?.large?.width}w`,
			sizes: media.sizes,
		});
	};

	return (
		<div className={`editor-post-featured-image w-full ${className}`}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectMedia}
					value={mediaId}
					allowedTypes={["image"]}
					render={({ open }) => (
						<Button
							className={`h-auto rounded-lg text-inherit ${btnClass} ${
								mediaId == 0
									? "editor-post-featured-image__toggle " + defaultBtnClass
									: "editor-post-featured-image__preview"
							}`}
							onClick={open}
						>
							{mediaId == 0 && (
								<div className="text-center flex flex-col items-center justify-center rounded-lg">
									<Icon icon={plus} className="text-inherit" />
									<span className="mt-0.5">{__("Choose an image", "wcb")}</span>
								</div>
							)}
							{!!mediaUrl && (
								<img
									src={mediaUrl}
									className="w-full block rounded-lg"
									sizes="250px"
									srcSet={mediaSrcSet || undefined}
								/>
							)}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{mediaId !== 0 && (
				<div className="flex justify-between gap-2 mt-2">
					<MediaUploadCheck>
						<MediaUpload
							title={__("Replace image", "wcb")}
							value={mediaId}
							onSelect={onSelectMedia}
							allowedTypes={["image"]}
							render={({ open }) => (
								<MyButton
									className="flex-1 my-0 flex justify-center"
									onClick={open}
									variant="secondary"
								>
									{__("Replace", "wcb")}
								</MyButton>
							)}
						/>
					</MediaUploadCheck>
					<MediaUploadCheck>
						<MyButton
							className="flex-1 my-0"
							onClick={removeMedia}
							isDestructive
						>
							{__("Remove", "wcb")}
						</MyButton>
					</MediaUploadCheck>
				</div>
			)}
		</div>
	);
};

export default MyMediaUploadCheck;
