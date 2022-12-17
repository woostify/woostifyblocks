import { get, isEmpty, map } from "lodash";
import {
	ExternalLink,
	PanelBody,
	TextareaControl,
	ToggleControl,
	// @ts-ignore
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
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
import { AlignmentMatrixControlValue, MySelectOption, Option } from "../types";
import MyTabs from "../components/controls/MyTabs";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";

export interface WCB_IMAGE_PANEL_SETTINGS {
	alignment: HasResponsive<TextAlignment>;
	sizeSlug: HasResponsive<string | undefined>;
	width: HasResponsive<number | undefined>;
	height: HasResponsive<number | undefined>;
	captionAlignment: HasResponsive<TextAlignment>;
	objectFit: HasResponsive<NonNullable<CSSProperties["objectFit"]>>;
	layout: "normal" | "overlay";
	contentAlignment: AlignmentMatrixControlValue;
}

export const WCB_IMAGE_PANEL_SETTINGS_DEMO: WCB_IMAGE_PANEL_SETTINGS = {
	alignment: { Desktop: "center" },
	captionAlignment: { Desktop: "center" },
	height: { Desktop: undefined },
	sizeSlug: { Desktop: undefined },
	width: { Desktop: undefined },
	objectFit: { Desktop: "initial" },
	layout: "normal",
	contentAlignment: "center center",
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
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
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

	const PLANS_LAYOUT: MyRadioItem<WCB_IMAGE_PANEL_SETTINGS["layout"]>[] = [
		{ name: "normal", icon: "Normal" },
		{ name: "overlay", icon: "Overlay" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Settings", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={handleChangeTextAlignment}
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
					label={__("Layout", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layout: value as WCB_IMAGE_PANEL_SETTINGS["layout"],
						});
					}}
				/>

				<div>
					<MyLabelControl className="mb-0" hasResponsive={false}>
						{__("Content alignment", "wcb")}
					</MyLabelControl>
					<AlignmentMatrixControl
						label={__("Content alignment", "wcb")}
						value={panelData.contentAlignment}
						onChange={(newAlignment: AlignmentMatrixControlValue) => {
							setAttr__({ ...panelData, contentAlignment: newAlignment });
						}}
					/>
				</div>

				<MyDisclosure
					label={"Dimensions"}
					hasResponsive
					defaultOpen
					isDisableButton
				>
					<ImageSizeControl
						onChangeImage={updateImage}
						onChange={({
							width,
							height,
						}: {
							width?: number;
							height?: number;
						}) => {
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
					label={__("Object Fit", "wcb")}
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

				<ToggleControl
					label={__("Enable caption", "wcb")}
					checked={enableCaption}
					onChange={toggleEnableCaption}
				/>
				{enableCaption && (
					<MyTextAlignControl
						textAlignment={CAPTION_ALIGNMENT}
						onChange={handleChangeCaptionAlignment}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbImagePanelSettings;
