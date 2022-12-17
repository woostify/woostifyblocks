import { get, isEmpty, map } from "lodash";
import {
	ExternalLink,
	PanelBody,
	TextareaControl,
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

export interface WCB_IMAGE_PANEL_SETTINGS {
	textAlignment: HasResponsive<TextAlignment>;
	sizeSlug: HasResponsive<string | undefined>;
	width: HasResponsive<number | undefined>;
	height: HasResponsive<number | undefined>;
}

export const WCB_IMAGE_PANEL_SETTINGS_DEMO: WCB_IMAGE_PANEL_SETTINGS = {
	textAlignment: { Desktop: "left" },
	height: { Desktop: undefined },
	sizeSlug: { Desktop: undefined },
	width: { Desktop: undefined },
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
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment } = panelData;

	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		textAlignment,
		deviceType
	);

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
	//

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: {
				...textAlignment,
				[deviceType]: selected,
			},
		});
	};
	//

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
			</div>
		</PanelBody>
	);
};

export default WcbImagePanelSettings;
