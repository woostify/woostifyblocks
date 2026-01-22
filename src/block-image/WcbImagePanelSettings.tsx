import {
	ExternalLink,
	PanelBody,
	TextareaControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import { __experimentalImageSizeControl as ImageSizeControl } from "@wordpress/block-editor";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySelect from "../components/controls/MySelect";
import { MySelectOption, Option } from "../types";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export type Alignment = "left" | "right" | "center" | "wide" | "full" | "none";

export interface WCB_IMAGE_PANEL_SETTINGS {
	alignment: HasResponsive<Alignment>;
	sizeSlug: HasResponsive<string | undefined>;
	width: HasResponsive<number | undefined>;
	height: HasResponsive<number | undefined>;
	captionAlignment: HasResponsive<TextAlignment>;
	objectFit: HasResponsive<NonNullable<CSSProperties["objectFit"]>>;
	hoverImage: "static" | "zoomin" | "slide" | "grayscale" | "blur";
	layout: "normal" | "overlay";
	contentAlignment: CSSProperties["justifyItems"];
}

export const WCB_IMAGE_PANEL_SETTINGS_DEMO: WCB_IMAGE_PANEL_SETTINGS = {
	alignment: { Desktop: "center" },
	captionAlignment: { Desktop: "center" },
	height: { Desktop: undefined },
	sizeSlug: { Desktop: undefined },
	width: { Desktop: undefined },
	objectFit: { Desktop: "initial" },
	hoverImage: "static",
	layout: "normal",
	contentAlignment: "center",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_IMAGE_PANEL_SETTINGS;
	setAttr__: (data: WCB_IMAGE_PANEL_SETTINGS) => void;
	//
	updateImage: (data) => void;
	setAttributes: (data) => void;
	alt: string;
	naturalWidth: number;
	naturalHeight: number;
	imageSizeOptions: any;
	isResizable: boolean;
	enableCaption: boolean;
	toggleEnableCaption: (checked: boolean) => void;
}

const WcbImagePanelSettings: FC<Props> = ({
	panelData = WCB_IMAGE_PANEL_SETTINGS_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
	//
	updateImage,
	setAttributes,
	imageSizeOptions,
	isResizable,
	naturalHeight,
	naturalWidth,
	alt,
	enableCaption,
	toggleEnableCaption,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { alignment, captionAlignment, objectFit } = panelData;

	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		alignment,
		deviceType
	);
	const { currentDeviceValue: CAPTION_ALIGNMENT } =
		getValueFromAttrsResponsives(captionAlignment, deviceType);

	const { currentDeviceValue: currentWidth } = getValueFromAttrsResponsives(
		panelData.width,
		deviceType
	);
	const { currentDeviceValue: currentHeight } = getValueFromAttrsResponsives(
		panelData.height,
		deviceType
	);
	const { currentDeviceValue: currentSizeSlug } = getValueFromAttrsResponsives(
		panelData.sizeSlug,
		deviceType
	);
	const { currentDeviceValue: currentObjectFit } = getValueFromAttrsResponsives(
		objectFit,
		deviceType
	);
	//

	//
	const handleChangeImageAlignment = (selected: Alignment) => {
		setAttr__({
			...panelData,
			alignment: {
				...alignment,
				[deviceType]: selected,
			},
		});
	};
	const handleChangeCaptionAlignment = (
		selected: CSSProperties["textAlign"]
	) => {
		setAttr__({
			...panelData,
			captionAlignment: {
				...captionAlignment,
				[deviceType]: selected,
			},
		});
	};
	//

	const OBJECT_FIT_OPTIONS: MySelectOption<
		NonNullable<CSSProperties["objectFit"]>
	>[] = [
		{ value: "initial", label: "Default" },
		{ value: "fill", label: "Fill" },
		{ value: "cover", label: "Cover" },
		{ value: "contain", label: "Contain" },
	];

	const HOVER_IMAGE_OPTIONS: MySelectOption<
		NonNullable<WCB_IMAGE_PANEL_SETTINGS["hoverImage"]>>[] = [
		{ value: "static", label: "Static" },
		{ value: "zoomin", label: "Zoom In" },
		{ value: "slide", label: "Slide" },
		{ value: "grayscale", label: "Grayscale" },
		{ value: "blur", label: "Blur" },
	];

	const PLANS_LAYOUT: MyRadioItem<WCB_IMAGE_PANEL_SETTINGS["layout"]>[] = [
		{ name: "normal", icon: "Normal" },
		{ name: "overlay", icon: "Overlay" },
	];

	const PLANS_CONTENT_ALIGNMENT: MyRadioItem<
		NonNullable<WCB_IMAGE_PANEL_SETTINGS["contentAlignment"]>
	>[] = [
		{ name: "flex-start", icon: "Top" },
		{ name: "center", icon: "Middle" },
		{ name: "flex-end", icon: "Bottom" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Settings", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<MyRadioGroup
					onChange={handleChangeImageAlignment}
					value={TEXT_ALIGNMENT}
					label={"Alignment"}
				/>

				<TextareaControl
					// @ts-ignore
					__nextHasNoMarginBottom
					label={__("Alt text (alternative text)")}
					value={alt}
					onChange={(data) => {
						setAttributes({ alt: data });
					}}
					help={
						<>
							<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
								{__("Describe the purpose of the image")}
							</ExternalLink>
							{__("Leave empty if the image is purely decorative.")}
						</>
					}
				/>

				<MyRadioGroup
					plans={PLANS_LAYOUT}
					value={panelData.layout}
					hasResponsive={false}
					label={__("Layout", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layout: value as WCB_IMAGE_PANEL_SETTINGS["layout"],
						});
					}}
				/>

				{panelData.layout === "overlay" && (
					<MyRadioGroup
						plans={PLANS_CONTENT_ALIGNMENT}
						value={panelData.contentAlignment}
						hasResponsive={false}
						label={__("Content alignment", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({
								...panelData,
								contentAlignment:
									value as WCB_IMAGE_PANEL_SETTINGS["contentAlignment"],
							});
						}}
					/>
				)}

				<MyDisclosure
					label={"Dimensions"}
					hasResponsive
					defaultOpen
					isDisableButton
				>
					<ImageSizeControl
						onChangeImage={updateImage}
						onChange={({ width, height }) => {
							if (
								typeof width === "undefined" &&
								typeof height === "undefined"
							) {
								setAttr__({
									...panelData,
									width: { ...panelData.width, [deviceType]: undefined },
									height: { ...panelData.height, [deviceType]: undefined },
								});
							} else {
								const W: Partial<WCB_IMAGE_PANEL_SETTINGS> = width
									? {
											width: {
												...panelData.width,
												[deviceType]: width,
											},
									  }
									: {};
								const H: Partial<WCB_IMAGE_PANEL_SETTINGS> = height
									? {
											height: {
												...panelData.height,
												[deviceType]: height,
											},
									  }
									: {};

								setAttr__({ ...panelData, ...W, ...H });
							}
						}}
						slug={currentSizeSlug}
						width={currentWidth}
						height={currentHeight}
						imageSizeOptions={imageSizeOptions}
						isResizable={isResizable}
						imageWidth={naturalWidth}
						imageHeight={naturalHeight}
					/>
				</MyDisclosure>

				<MySelect
					label={__("Object Fit", "boostify-blocks")}
					hasResponsive
					onChange={(value) => {
						setAttr__({
							...panelData,
							objectFit: {
								...objectFit,
								[deviceType]: value,
							},
						});
					}}
					value={currentObjectFit}
					options={OBJECT_FIT_OPTIONS}
				/>

				<MySelect
					label={__("On Hover Image", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							hoverImage: value as WCB_IMAGE_PANEL_SETTINGS["hoverImage"],
						});
					}}
					value={panelData.hoverImage}
					options={HOVER_IMAGE_OPTIONS}
				/>

				{panelData.layout !== "overlay" && (
					<ToggleControl
						label={__("Enable caption", "boostify-blocks")}
						checked={enableCaption}
						onChange={toggleEnableCaption}
					/>
				)}
				{panelData.layout !== "overlay" && enableCaption && (
					<MyTextAlignControl
						textAlignment={CAPTION_ALIGNMENT}
						onChange={handleChangeCaptionAlignment}
						label={__("Caption alignment", "boostify-blocks")}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbImagePanelSettings;
