import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { plus } from "@wordpress/icons";
import { Button, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useState, useEffect, FC } from "react";
import MyButton from "./MyButton";

interface Props extends MediaUploadData {
	className?: string;
	onChange: (T: Omit<Props, "onChange">) => void;
}

export interface MediaUploadData {
	mediaId: number;
	mediaUrl: string;
	mediaSrcSet?: string;
}

const MyMediaUploadCheck: FC<Props> = ({
	className = "",
	mediaId,
	mediaSrcSet,
	mediaUrl,
	onChange,
}) => {
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
							className={`h-auto rounded-lg ring-1 ring-black/10 ${
								mediaId == 0
									? "editor-post-featured-image__toggle hover:bg-slate-100"
									: "editor-post-featured-image__preview"
							}`}
							onClick={open}
						>
							{mediaId == 0 && (
								<div className="text-center flex flex-col items-center justify-center">
									<Icon icon={plus} className="text-slate-700" />
									<span className="mt-0.5">{__("Choose an image", "wcb")}</span>
								</div>
							)}
							{!!mediaUrl && (
								<img
									src={mediaUrl}
									className="w-full block"
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
