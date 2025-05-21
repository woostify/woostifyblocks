import classnames from "classnames";
import { get } from "lodash";
import { getBlobByURL, isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { Placeholder } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import {
	BlockIcon,
	InnerBlocks,
	MediaPlaceholder,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useRef, useState } from "@wordpress/element";
import { image as icon } from "@wordpress/icons";
// @ts-ignore
import { store as noticesStore } from "@wordpress/notices";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import Image from "./Image";
import {
	LINK_DESTINATION_ATTACHMENT,
	LINK_DESTINATION_CUSTOM,
	LINK_DESTINATION_MEDIA,
	LINK_DESTINATION_NONE,
	ALLOWED_MEDIA_TYPES,
} from "./constants";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import { WCB_HEADING_PANEL_CONTENT_DEMO } from "../block-heading/WcbHeadingPanelContent";
import { WCB_HEADING_PANEL_DIMENSION_DEMO } from "../block-heading/WcbHeadingPanelDimension";
import { WCB_HEADING_PANEL_SEPARATOR_DEMO } from "../block-heading/WcbHeadingPanelSeparator";
import { DEFAULT_BORDER_MAIN_SINGLE_SIDE } from "../components/controls/MyBorderControl/types";
import { WcbBlockHeadingAttrs } from "../block-heading/attributes";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";
import {
	MediaUploadData,
} from "../components/controls/MyMediaUploadCheck";

// Much of this description is duplicated from MediaPlaceholder.
const placeholder = (content) => {
	return (
		<Placeholder
			className="block-editor-media-placeholder"
			// @ts-ignore
			withIllustration={true}
			icon={icon}
			label={__("Image")}
			instructions={__(
				"Upload an image file, pick one from your media library, or add one with a URL."
			)}
		>
			{content}
		</Placeholder>
	);
};

export const pickRelevantMediaFiles = (image, size) => {
	const imageProps = Object.fromEntries(
		Object.entries(image ?? {}).filter(([key]) =>
			["alt", "id", "link", "caption"].includes(key)
		)
	);

	imageProps.url =
		get(image, ["sizes", size, "url"]) ||
		get(image, ["media_details", "sizes", size, "source_url"]) ||
		image.url;
	return imageProps;
};

const isTemporaryImage = (id, url) => !id && isBlobURL(url);

export const isExternalImage = (id, url) => url && !id && !isBlobURL(url);

function hasDefaultSize(image, defaultSize) {
	return (
		"url" in (image?.sizes?.[defaultSize] ?? {}) ||
		"source_url" in (image?.media_details?.sizes?.[defaultSize] ?? {})
	);
}

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const {
		attributes,
		setAttributes,
		isSelected,
		className,
		insertBlocksAfter,
		onReplace,
		context,
		clientId,
	} = props;
	//
	const {
		url = "",
		alt,
		caption,
		id,
		advance_responsiveCondition,
		advance_zIndex,
		href,
		linkClass,
		linkDestination,
		linkTarget,
		rel,
		title,
		uniqueId,
		general_settings,
		general_image,
		style_image,
		style_overlay,
		style_caption,
	} = attributes;

	const [temporaryURL, setTemporaryURL] = useState<string>();
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const altRef = useRef();
	useEffect(() => {
		// @ts-ignore
		altRef.current = alt;
	}, [alt]);

	const captionRef = useRef();
	useEffect(() => {
		// @ts-ignore
		captionRef.current = caption;
	}, [caption]);

	const ref = useRef();
	const { imageDefaultSize, mediaUpload, isContentLocked } = useSelect(
		(select) => {
			// @ts-ignore
			const { getSettings, __unstableGetContentLockingParent } =
				select(blockEditorStore);
			const settings = getSettings();
			return {
				imageDefaultSize: settings.imageDefaultSize,
				mediaUpload: settings.mediaUpload,
				isContentLocked: !!__unstableGetContentLockingParent(clientId),
			};
		},
		[]
	);

	const { createErrorNotice } = useDispatch(noticesStore);

	function onUploadError(message) {
		// @ts-ignore
		createErrorNotice(message, { type: "snackbar" });
		setAttributes({
			id: undefined,
			url: undefined,
			// @ts-ignore
			src: undefined,
		});
		setTemporaryURL(undefined);
	}

	function onSelectImage(media) {
		if (!media || !media.url) {
			setAttributes({
				url: undefined,
				alt: undefined,
				id: undefined,
				title: undefined,
				caption: undefined,
			});

			return;
		}

		if (isBlobURL(media.url)) {
			setTemporaryURL(media.url);
			return;
		}

		setTemporaryURL(undefined);

		let mediaAttributes = pickRelevantMediaFiles(media, imageDefaultSize);

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if (captionRef.current && !get(mediaAttributes, ["caption"])) {
			const { caption: omittedCaption, ...restMediaAttributes } =
				mediaAttributes;
			mediaAttributes = restMediaAttributes;
		}

		let additionalAttributes: Partial<WcbAttrs>;
		// Reset the dimension attributes if changing to a different image.
		if (!media.id || media.id !== id) {
			const siseSlugggg = hasDefaultSize(media, imageDefaultSize)
				? imageDefaultSize
				: "full";
			additionalAttributes = {
				general_settings: {
					...general_settings,
					width: { Desktop: undefined, Tablet: undefined, Mobile: undefined },
					height: { Desktop: undefined, Tablet: undefined, Mobile: undefined },
					// Fallback to size "full" if there's no default image size.
					// It means the image is smaller, and the block will use a full-size URL.
					sizeSlug: {
						Desktop: siseSlugggg,
						Tablet: siseSlugggg,
						Mobile: siseSlugggg,
					},
				},
			};
		} else {
			// Keep the same url when selecting the same file, so "Image Size"
			// option is not changed.
			additionalAttributes = { url };
		}

		const mediaUploadData: MediaUploadData = {
			mediaId: media.id || 0,
			mediaUrl: media.url,
			mediaSrcSet: media.srcset || "",
			sizes: media.sizes || media.media_details?.sizes || {},
		};

		// Check if default link setting should be used.
		let linkDestination = attributes.linkDestination;
		if (!linkDestination) {
			// Use the WordPress option to determine the proper default.
			// The constants used in Gutenberg do not match WP options so a little more complicated than ideal.
			// TODO: fix this in a follow up PR, requires updating media-text and ui component.
			switch (
				window?.wp?.media?.view?.settings?.defaultProps?.link ||
				LINK_DESTINATION_NONE
			) {
				case "file":
				case LINK_DESTINATION_MEDIA:
					linkDestination = LINK_DESTINATION_MEDIA;
					break;
				case "post":
				case LINK_DESTINATION_ATTACHMENT:
					linkDestination = LINK_DESTINATION_ATTACHMENT;
					break;
				case LINK_DESTINATION_CUSTOM:
					linkDestination = LINK_DESTINATION_CUSTOM;
					break;
				case LINK_DESTINATION_NONE:
					linkDestination = LINK_DESTINATION_NONE;
					break;
			}
		}

		// Check if the image is linked to it's media.
		let href;
		switch (linkDestination) {
			case LINK_DESTINATION_MEDIA:
				href = media.url;
				break;
			case LINK_DESTINATION_ATTACHMENT:
				href = media.link;
				break;
		}
		mediaAttributes.href = href;

		setAttributes({
			...mediaAttributes,
			...additionalAttributes,
			linkDestination,
			general_image: {
			...general_image,
			image: mediaUploadData,
    },
		});
	}

	function onSelectURL(newURL) {
		if (newURL !== url) {
			setAttributes({
				url: newURL,
				id: undefined,
			});
		}
	}

	let isTemp = isTemporaryImage(id, url);

	// Upload a temporary image on mount.
	useEffect(() => {
		if (!isTemp) {
			return;
		}

		const file = getBlobByURL(url);

		if (file) {
			mediaUpload({
				filesList: [file],
				onFileChange: ([img]) => {
					onSelectImage(img);
				},
				allowedTypes: ALLOWED_MEDIA_TYPES,
				onError: (message) => {
					isTemp = false;
					onUploadError(message);
				},
			});
		}
	}, []);

	// If an image is temporary, revoke the Blob url when it is uploaded (and is
	// no longer temporary).
	useEffect(() => {
		if (isTemp) {
			setTemporaryURL(url);
			return;
		}
		revokeBlobURL(temporaryURL || "");
	}, [isTemp, url]);

	const isExternal = isExternalImage(id, url);
	const src = isExternal ? url : undefined;
	const mediaPreview = !!url ? (
		<img
			alt={__("Edit image")}
			title={__("Edit image")}
			className={"edit-image-preview"}
			src={url}
		/>
	) : null;

	const { currentDeviceValue: align } = getValueFromAttrsResponsives(
		general_settings.alignment,
		deviceType
	);
	const classes = classnames(className, {
		// [`align${align}`]: align,
		"is-transient": temporaryURL,
		// "is-resized": !!width || !!height,
		// [`size-${sizeSlug}`]: sizeSlug,
	});

	const wrapBlockProps = useBlockProps({
		ref,
		className: classes,
	});
	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//
	//
	//
	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_settings,
			style_image,
			style_overlay,
			style_caption
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_settings,
		style_image,
		style_overlay,
		style_caption,
	]);

	const renderOverlay = () => {
		const InitWcbBlockHeadingAttrs: Partial<WcbBlockHeadingAttrs> = {
			heading: "Title of content",
			subHeading: "Description of content",
			styles_separator: {
				...WCB_HEADING_PANEL_SEPARATOR_DEMO,
				width: { Desktop: "20%" },
				border: {
					...DEFAULT_BORDER_MAIN_SINGLE_SIDE,
					color: "#334155",
				},
			},
			general_content: {
				...WCB_HEADING_PANEL_CONTENT_DEMO,
				textAlignment: { Desktop: "center" },
				showSeparator: true,
				showSubHeading: true,
				headingTag: "h3",
			},
			styles_dimensions: {
				...WCB_HEADING_PANEL_DIMENSION_DEMO,
				dimension: {
					...WCB_HEADING_PANEL_DIMENSION_DEMO.dimension,
					margin: {
						Desktop: {
							bottom: "1rem",
							top: "1rem",
							left: "1rem",
							right: "1rem",
						},
					},
				},
			},
		};
		return (
			<div className="wcb-image__overlay-wrap">
				<div className="wcb-image__overlay-bg">
					<div className="wcb-image__overlay-content">
						<InnerBlocks
							allowedBlocks={[]}
							template={[["wcb/heading", InitWcbBlockHeadingAttrs]]}
						/>
					</div>
				</div>
			</div>
		);
	};

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<figure
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				<>
					{(temporaryURL || url) && (
						<>
							<Image
								className="wcb-image__image"
								temporaryURL={temporaryURL || ""}
								attributes={attributes}
								setAttributes={setAttributes}
								isSelected={isSelected}
								insertBlocksAfter={insertBlocksAfter}
								onReplace={onReplace}
								onSelectImage={onSelectImage}
								onSelectURL={onSelectURL}
								onUploadError={onUploadError}
								containerRef={ref}
								context={context}
								clientId={clientId}
								isContentLocked={isContentLocked}
							/>
							{general_settings.layout === "overlay" && renderOverlay()}
						</>
					)}
					{/* {!url && !isContentLocked && (
						// @ts-ignore
						<BlockControls group="block">
							<BlockAlignmentToolbar
								value={align as any}
								onChange={updateAlignment}
							/>
						</BlockControls>
					)} */}

					<MediaPlaceholder
						icon={<BlockIcon icon={icon} />}
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						onError={onUploadError}
						// @ts-ignore
						placeholder={placeholder}
						accept="image/*"
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={{ id, src } as any}
						mediaPreview={mediaPreview || undefined}
						disableMediaButtons={temporaryURL || url}
					/>
				</>
			</figure>
		</MyCacheProvider>
	);
};

export default Edit;
