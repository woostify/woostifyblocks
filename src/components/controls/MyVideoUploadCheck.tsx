import { more, plus, captureVideo } from "@wordpress/icons";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useState, useEffect, FC } from "react";
import MyButton from "./MyButton";

interface Props extends VideoMediaUploadData {
	className?: string;
	onChange: (T: Omit<Props, "onChange">) => void;
}

export interface VideoMediaUploadData {
	mediaId: number;
	mediaUrl: string;
}

const MyVideoUploadCheck: FC<Props> = ({
	className = "",
	mediaId,
	mediaUrl,
	onChange,
}) => {
	const removeMedia = () => {
		onChange({
			mediaId: 0,
			mediaUrl: "",
		});
	};

	const onSelectMedia = (media) => {
		onChange({
			mediaId: media.id,
			mediaUrl: media.url,
		});
	};

	return (
		<div className={`editor-post-featured-image my-3 w-full ${className}`}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectMedia}
					value={mediaId}
					allowedTypes={["video"]}
					render={({ open }) => (
						<Button
							className={`h-auto rounded-lg ring-1 ring-black/10 editor-post-featured-image__toggle flex items-center justify-center ${
								mediaId == 0 ? "editor-post-featured-image__toggle" : ""
							}`}
							onClick={open}
						>
							{mediaId == 0 && (
								<div className="text-center flex flex-col items-center justify-center">
									<Icon icon={plus} className="text-slate-700" />
									<span className="mt-0.5">{__("Choose an video", "wcb")}</span>
								</div>
							)}
							{!!mediaUrl && <Icon icon={captureVideo} />}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{mediaId !== 0 && (
				<div className="flex justify-between gap-2 mt-2">
					<MediaUploadCheck>
						<MediaUpload
							title={__("Replace Video", "wcb")}
							value={mediaId}
							onSelect={onSelectMedia}
							allowedTypes={["video"]}
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
							title={__("Remove Video", "wcb")}
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

export default MyVideoUploadCheck;
