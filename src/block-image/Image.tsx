/**
 * External dependencies
 */
import { get, isEmpty, map } from "lodash";

/**
 * WordPress dependencies
 */

import React, { FC } from "react";
import { isBlobURL } from "@wordpress/blob";
import {
	ExternalLink,
	PanelBody,
	ResizableBox,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarButton,
} from "@wordpress/components";
import { useViewportMatch, usePrevious } from "@wordpress/compose";
import { useSelect, useDispatch } from "@wordpress/data";
import {
	BlockControls,
	InspectorControls,
	RichText,
	// @ts-ignore
	__experimentalImageSizeControl as ImageSizeControl,
	// @ts-ignore
	__experimentalImageURLInputUI as ImageURLInputUI,
	// @ts-ignore
	MediaReplaceFlow,
	store as blockEditorStore,
	// @ts-ignore
	BlockAlignmentControl,
	// @ts-ignore
	__experimentalImageEditor as ImageEditor,
	// @ts-ignore
	__experimentalImageEditingProvider as ImageEditingProvider,
	// @ts-ignore
	__experimentalGetElementClassName,
	// @ts-ignore
	__experimentalUseBorderProps as useBorderProps,
} from "@wordpress/block-editor";
import {
	useEffect,
	useMemo,
	useState,
	useRef,
	useCallback,
} from "@wordpress/element";
import { __, sprintf, isRTL } from "@wordpress/i18n";
import { getFilename } from "@wordpress/url";
import {
	createBlock,
	getDefaultBlockName,
	switchToBlockType,
} from "@wordpress/blocks";
import {
	crop,
	overlayText,
	upload,
	caption as captionIcon,
} from "@wordpress/icons";
// @ts-ignore
import { store as noticesStore } from "@wordpress/notices";
import { store as coreStore } from "@wordpress/core-data";

/**
 * Internal dependencies
 */
import useClientWidth from "./use-client-width";
import { isExternalImage } from "./Edit";

/**
 * Module constants
 */
import { MIN_SIZE, ALLOWED_MEDIA_TYPES } from "./constants";
import { EditProps } from "../block-container/Edit";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbImagePanelSettings from "./WcbImagePanelSettings";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

type ImageProps = EditProps<WcbAttrs> & {
	temporaryURL: string;
	insertBlocksAfter: Function;
	onSelectImage: Function;
	onSelectURL: Function;
	onUploadError: Function;
	containerRef: any;
	isContentLocked: boolean;
};

const Image: FC<ImageProps> = ({
	temporaryURL,
	attributes,
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onReplace,
	onSelectImage,
	onSelectURL,
	onUploadError,
	containerRef,
	context,
	clientId,
	isContentLocked,
}) => {
	const {
		url = "",
		alt,
		caption,
		align,
		id,
		href,
		rel,
		linkClass,
		linkDestination,
		title,
		linkTarget,
		advance_responsiveCondition,
		advance_zIndex,
		general_settings,
		uniqueId,
	} = attributes;
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const imageRef = useRef<HTMLImageElement>(null);
	const prevCaption = usePrevious(caption);
	const [showCaption, setShowCaption] = useState(!!caption);
	const { allowResize = true } = context;
	// @ts-ignore
	const { getBlock } = useSelect(blockEditorStore);

	const { image, multiImageSelection } = useSelect(
		(select) => {
			// @ts-ignore
			const { getMedia } = select(coreStore);
			// @ts-ignore
			const { getMultiSelectedBlockClientIds, getBlockName } =
				select(blockEditorStore);
			const multiSelectedClientIds = getMultiSelectedBlockClientIds();
			return {
				image: id && isSelected ? getMedia(id, { context: "view" }) : null,
				multiImageSelection:
					multiSelectedClientIds.length &&
					multiSelectedClientIds.every(
						(_clientId) => getBlockName(_clientId) === "core/image"
					),
			};
		},
		[id, isSelected, clientId]
	);
	// @ts-ignore
	const { canInsertCover, imageEditing, imageSizes, maxWidth, mediaUpload } =
		useSelect(
			(select) => {
				// @ts-ignore
				const { getBlockRootClientId, getSettings, canInsertBlockType } =
					select(blockEditorStore);

				const rootClientId = getBlockRootClientId(clientId);
				const settings = Object.fromEntries(
					Object.entries(getSettings()).filter(([key]) =>
						["imageEditing", "imageSizes", "maxWidth", "mediaUpload"].includes(
							key
						)
					)
				);

				return {
					...settings,
					canInsertCover: canInsertBlockType("core/cover", rootClientId),
				};
			},
			[clientId]
		);
	const { replaceBlocks, toggleSelection } = useDispatch(blockEditorStore);
	const { createErrorNotice, createSuccessNotice } = useDispatch(noticesStore);
	const isLargeViewport = useViewportMatch("medium");
	const isWideAligned = ["wide", "full"].includes(align);
	// @ts-ignore
	const [{ loadedNaturalWidth, loadedNaturalHeight }, setLoadedNaturalSize] =
		useState({});
	const [isEditingImage, setIsEditingImage] = useState(false);
	const [externalBlob, setExternalBlob] = useState();
	const clientWidth = useClientWidth(containerRef, [align]);
	const isResizable =
		allowResize && !isContentLocked && !(isWideAligned && isLargeViewport);
	const imageSizeOptions = map(
		imageSizes.filter(({ slug }) =>
			get(image, ["media_details", "sizes", slug, "source_url"])
		),
		({ name, slug }) => ({ value: slug, label: name })
	);

	// If an image is externally hosted, try to fetch the image data. This may
	// fail if the image host doesn't allow CORS with the domain. If it works,
	// we can enable a button in the toolbar to upload the image.
	useEffect(() => {
		if (!isExternalImage(id, url) || !isSelected || externalBlob) {
			return;
		}

		window
			.fetch(url)
			.then((response) => response.blob())
			// @ts-ignore
			.then((blob) => setExternalBlob(blob))
			// Do nothing, cannot upload.
			.catch(() => {});
	}, [id, url, isSelected, externalBlob]);

	// We need to show the caption when changes come from
	// history navigation(undo/redo).
	useEffect(() => {
		if (caption && !prevCaption) {
			setShowCaption(true);
		}
	}, [caption, prevCaption]);

	// Focus the caption when we click to add one.
	const captionRef = useCallback(
		(node) => {
			if (node && !caption) {
				node.focus();
			}
		},
		[caption]
	);

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// width and height is otherwise lost when switching between alignments.
	// See: https://github.com/WordPress/gutenberg/pull/37210.
	const { naturalWidth, naturalHeight } = useMemo(() => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth || loadedNaturalWidth || undefined,
			naturalHeight:
				imageRef.current?.naturalHeight || loadedNaturalHeight || undefined,
		};
	}, [loadedNaturalWidth, loadedNaturalHeight, imageRef.current?.complete]);

	function onResizeStart() {
		toggleSelection(false);
	}

	function onResizeStop() {
		toggleSelection(true);
	}

	function onImageError() {
		// Check if there's an embed block that handles this URL, e.g., instagram URL.
		// See: https://github.com/WordPress/gutenberg/pull/11472
	}

	function onSetHref(props) {
		setAttributes(props);
	}

	function onSetTitle(value) {
		// This is the HTML title attribute, separate from the media object
		// title.
		setAttributes({ title: value });
	}

	function updateAlt(newAlt) {
		setAttributes({ alt: newAlt });
	}

	function updateImage(newSizeSlug) {
		const newUrl = get(image, [
			"media_details",
			"sizes",
			newSizeSlug,
			"source_url",
		]);
		if (!newUrl) {
			return null;
		}

		setAttributes({
			url: newUrl,
			general_settings: {
				...general_settings,
				width: {
					Desktop: undefined,
					Tablet: undefined,
					Mobile: undefined,
				},
				height: {
					Desktop: undefined,
					Tablet: undefined,
					Mobile: undefined,
				},
				sizeSlug: {
					...general_settings.sizeSlug,
					[deviceType]: newSizeSlug,
				},
			},
		});
	}

	function uploadExternal() {
		mediaUpload({
			filesList: [externalBlob],
			onFileChange([img]) {
				onSelectImage(img);

				if (isBlobURL(img.url)) {
					return;
				}

				setExternalBlob(undefined);
				createSuccessNotice(__("Image uploaded."), {
					type: "snackbar",
				});
			},
			allowedTypes: ALLOWED_MEDIA_TYPES,
			onError(message) {
				createErrorNotice(message, { type: "snackbar" });
			},
		});
	}

	function updateAlignment(nextAlign) {
		const extraUpdatedAttributes = ["wide", "full"].includes(nextAlign)
			? { width: undefined, height: undefined }
			: {};
		setAttributes({
			...extraUpdatedAttributes,
			align: nextAlign,
		});
	}

	useEffect(() => {
		if (!isSelected) {
			setIsEditingImage(false);
			if (!caption) {
				setShowCaption(false);
			}
		}
	}, [isSelected, caption]);

	const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
	const allowCrop = !multiImageSelection && canEditImage && !isEditingImage;

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbImagePanelSettings
							onToggle={() => handleTogglePanel("General", "General", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "General" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "General" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_settings: data });
							}}
							panelData={general_settings}
							//
							imageSizeOptions={imageSizeOptions}
							isResizable={isResizable}
							naturalHeight={naturalHeight}
							naturalWidth={naturalWidth}
							setAttributes={setAttributes}
							updateImage={updateImage}
							alt={alt}
						/>
					</>
				);
			case "Styles":
				return <></>;
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	const controls = (
		<>
			{/* @ts-ignore */}
			<BlockControls group="block">
				{!isContentLocked && (
					<BlockAlignmentControl value={align} onChange={updateAlignment} />
				)}
				{!isContentLocked && (
					<ToolbarButton
						onClick={() => {
							setShowCaption(!showCaption);
							if (showCaption && caption) {
								setAttributes({ caption: undefined });
							}
						}}
						icon={captionIcon}
						isPressed={showCaption}
						label={showCaption ? __("Remove caption") : __("Add caption")}
					/>
				)}
				{!multiImageSelection && !isEditingImage && (
					<ImageURLInputUI
						url={href || ""}
						onChangeUrl={onSetHref}
						linkDestination={linkDestination}
						mediaUrl={(image && image.source_url) || url}
						mediaLink={image && image.link}
						linkTarget={linkTarget}
						linkClass={linkClass}
						rel={rel}
					/>
				)}
				{allowCrop && (
					<ToolbarButton
						onClick={() => setIsEditingImage(true)}
						icon={crop}
						label={__("Crop")}
					/>
				)}
				{externalBlob && (
					<ToolbarButton
						onClick={uploadExternal}
						icon={upload}
						label={__("Upload external image")}
					/>
				)}
				{/* {!multiImageSelection && canInsertCover && (
					<ToolbarButton
						icon={overlayText}
						label={__("Add text over image")}
						onClick={switchToCover}
					/>
				)} */}
			</BlockControls>
			{!multiImageSelection && !isEditingImage && (
				// @ts-ignore
				<BlockControls group="other">
					<MediaReplaceFlow
						mediaId={id}
						mediaURL={url}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						accept="image/*"
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						onError={onUploadError}
					/>
				</BlockControls>
			)}

			{/* @ts-ignore */}
			<InspectorControls __experimentalGroup="advanced">
				<TextControl
					label={__("Title attribute")}
					value={title || ""}
					onChange={onSetTitle}
					help={
						<>
							{__("Describe the role of this image on the page.")}
							<ExternalLink href="https://www.w3.org/TR/html52/dom.html#the-title-attribute">
								{__(
									"(Note: many devices and browsers do not display this text.)"
								)}
							</ExternalLink>
						</>
					}
				/>
			</InspectorControls>

			{/* ------------MY --------------- */}
			{/* CONTROL SETTINGS */}
			<HOCInspectorControls
				renderTabPanels={renderTabBodyPanels}
				uniqueId={uniqueId}
			/>
		</>
	);

	//
	const { currentDeviceValue: WIDTH } = getValueFromAttrsResponsives(
		general_settings.width,
		deviceType
	);
	const { currentDeviceValue: HEIGHT } = getValueFromAttrsResponsives(
		general_settings.height,
		deviceType
	);
	const { currentDeviceValue: SIZE_SLUG } = getValueFromAttrsResponsives(
		general_settings.sizeSlug,
		deviceType
	);
	//

	const filename = getFilename(url);
	let defaultedAlt;

	if (alt) {
		defaultedAlt = alt;
	} else if (filename) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__("This image has an empty alt attribute; its file name is %s"),
			filename
		);
	} else {
		defaultedAlt = __("This image has an empty alt attribute");
	}

	const borderProps = useBorderProps(attributes);
	// @ts-ignore
	const isRounded = attributes.className?.includes("is-style-rounded");
	const hasCustomBorder =
		!!borderProps.className || !isEmpty(borderProps.style);

	let img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
		<>
			<img
				src={temporaryURL || url}
				alt={defaultedAlt}
				onError={() => onImageError()}
				onLoad={(event) => {
					setLoadedNaturalSize({
						// @ts-ignore
						loadedNaturalWidth: event.target?.naturalWidth,
						// @ts-ignore
						loadedNaturalHeight: event.target?.naturalHeight,
					});
				}}
				ref={imageRef}
				className={borderProps.className}
				style={borderProps.style}
			/>
			{temporaryURL && <Spinner />}
		</>
		/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
	);

	let imageWidthWithinContainer;
	let imageHeightWithinContainer;

	if (clientWidth && naturalWidth && naturalHeight) {
		const exceedMaxWidth = naturalWidth > clientWidth;
		const ratio = naturalHeight / naturalWidth;
		imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
		imageHeightWithinContainer = exceedMaxWidth
			? clientWidth * ratio
			: naturalHeight;
	}

	if (canEditImage && isEditingImage) {
		img = (
			<ImageEditor
				borderProps={isRounded ? undefined : borderProps}
				url={url}
				width={WIDTH}
				height={HEIGHT}
				clientWidth={clientWidth}
				naturalHeight={naturalHeight}
				naturalWidth={naturalWidth}
			/>
		);
	} else if (!isResizable || !imageWidthWithinContainer) {
		img = <div style={{ width: WIDTH, height: HEIGHT }}>{img}</div>;
	} else {
		const currentWidth = WIDTH || imageWidthWithinContainer;
		const currentHeight = HEIGHT || imageHeightWithinContainer;

		const ratio = naturalWidth / naturalHeight;
		const minWidth = naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * ratio;
		const minHeight =
			naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / ratio;

		// With the current implementation of ResizableBox, an image needs an
		// explicit pixel value for the max-width. In absence of being able to
		// set the content-width, this max-width is currently dictated by the
		// vanilla editor style. The following variable adds a buffer to this
		// vanilla style, so 3rd party themes have some wiggleroom. This does,
		// in most cases, allow you to scale the image beyond the width of the
		// main column, though not infinitely.
		// @todo It would be good to revisit this once a content-width variable
		// becomes available.
		const maxWidthBuffer = maxWidth * 2.5;

		let showRightHandle = false;
		let showLeftHandle = false;

		/* eslint-disable no-lonely-if */
		// See https://github.com/WordPress/gutenberg/issues/7584.
		if (align === "center") {
			// When the image is centered, show both handles.
			showRightHandle = true;
			showLeftHandle = true;
		} else if (isRTL()) {
			// In RTL mode the image is on the right by default.
			// Show the right handle and hide the left handle only when it is
			// aligned left. Otherwise always show the left handle.
			if (align === "left") {
				showRightHandle = true;
			} else {
				showLeftHandle = true;
			}
		} else {
			// Show the left handle and hide the right handle only when the
			// image is aligned right. Otherwise always show the right handle.
			if (align === "right") {
				showLeftHandle = true;
			} else {
				showRightHandle = true;
			}
		}
		/* eslint-enable no-lonely-if */

		img = (
			<ResizableBox
				size={{
					width: WIDTH || "auto",
					height: HEIGHT && !hasCustomBorder ? HEIGHT : "auto",
				}}
				showHandle={isSelected}
				minWidth={minWidth}
				maxWidth={maxWidthBuffer}
				minHeight={minHeight}
				maxHeight={maxWidthBuffer / ratio}
				lockAspectRatio
				enable={{
					top: false,
					right: showRightHandle,
					bottom: true,
					left: showLeftHandle,
				}}
				onResizeStart={onResizeStart}
				onResizeStop={(event, direction, elt, delta) => {
					onResizeStop();

					setAttributes({
						general_settings: {
							...general_settings,
							width: {
								...general_settings.width,
								[deviceType]: parseInt(currentWidth + delta.width, 10),
							},
							height: {
								...general_settings.height,
								[deviceType]: parseInt(currentHeight + delta.height, 10),
							},
						},
					});
				}}
				resizeRatio={align === "center" ? 2 : 1}
			>
				{img}
			</ResizableBox>
		);
	}

	return (
		<ImageEditingProvider
			id={id}
			url={url}
			naturalWidth={naturalWidth}
			naturalHeight={naturalHeight}
			clientWidth={clientWidth}
			onSaveImage={(imageAttributes) => {
				setAttributes(imageAttributes);
			}}
			isEditing={isEditingImage}
			onFinishEditing={() => setIsEditingImage(false)}
		>
			{/* Hide controls during upload to avoid component remount,
				which causes duplicated image upload. */}
			{!temporaryURL && controls}
			{img}
			{showCaption && (!RichText.isEmpty(caption) || isSelected) && (
				<RichText
					className={__experimentalGetElementClassName("caption")}
					ref={captionRef}
					tagName="figcaption"
					aria-label={__("Image caption text")}
					placeholder={__("Add caption")}
					value={caption}
					onChange={(value) => setAttributes({ caption: value })}
					inlineToolbar
					// @ts-ignore
					__unstableOnSplitAtEnd={() =>
						insertBlocksAfter(createBlock(getDefaultBlockName() || ""))
					}
				/>
			)}
		</ImageEditingProvider>
	);
};

export default Image;
