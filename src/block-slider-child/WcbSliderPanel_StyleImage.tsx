import { PanelBody, TabPanel, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyMediaUploadCheck, {
	MediaUploadData,
} from "../components/controls/MyMediaUploadCheck";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySelect from "../components/controls/MySelect";
import useGetDeviceType from "../hooks/useGetDeviceType";
import SelecIcon, { MyIcon, DEFAULT_MY_ICON, } from "../components/controls/SelectIcon/SelecIcon";
import { Option } from "../types";

export interface WCB_SLIDER_PANEL_IMAGE {
	enableIcon: boolean;
	icon: MyIcon;
	iconPosition:
		| "top"
		| "left"
		| "right"
		| "leftOfTitle"
		| "rightOfTitle"
		| "bellowTitle";
	image: MediaUploadData;
	imageSize: string;
	isShowImage: boolean;
	imagePosition: "above-title" | "blow-title" | "left" | "bottom" | "right";
	stackOn: "none" | "tablet" | "mobile";
	imageAlignSelf: "flex-start" | "center" | "flex-end";
}

type TabsHere = "Setting" | "SelectImage";

export const WCB_SLIDER_PANEL_IMAGE_DEMO: WCB_SLIDER_PANEL_IMAGE = {
	enableIcon: false,
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-checkmark-circle",
	},
	iconPosition: "top",
	image: INIT_IMAGE_DATA_UPLOAD_DEMO,
	imageSize: "thumbnail",
	isShowImage: true,
	imagePosition: "above-title",
	stackOn: "none",
	imageAlignSelf: "center",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_PANEL_IMAGE;
	setAttr__: (data: WCB_SLIDER_PANEL_IMAGE) => void;
}

const WcbSliderPanelImage: FC<Props> = ({
	panelData = WCB_SLIDER_PANEL_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		enableIcon = false,
		icon,
		iconPosition,
		image,
		imagePosition,
		isShowImage = true,
		imageSize,
		imageAlignSelf,
	} = panelData;
	//
	//
	const PLANS_DEMO: Option<WCB_SLIDER_PANEL_IMAGE["iconPosition"]>[] = [
		{ value: "top", label: "Top" },
		{ value: "left", label: "Left" },
		{ value: "right", label: "Right" },
		{ value: "leftOfTitle", label: "Left Of Title" },
		{ value: "rightOfTitle", label: "Right Of Title" },
		{ value: "bellowTitle", label: "Bellow Title" },
	];

	const renderSelectImage = () => {
		if (!isShowImage) {
			return (
				<HelpText>
					{__(
						'Please enable the "Show Image" field to select images for testimonials...',
						"wcb"
					)}
				</HelpText>
			);
		}

		return (
			<div className={"space-y-5"}>
				<div>
					<MyLabelControl hasResponsive={false}>
						{__("Choose Image", "wcb")}
					</MyLabelControl>
					<MyMediaUploadCheck
						imageData={image}
						onChange={(data) => {
							setAttr__({
								...panelData,
								image: data,
							});
						}}
					/>
				</div>
			</div>
		);
	};

	const renderSettingsImage = () => {
		const IMAGE_SIZE_OPTIONS = [
			{ label: "Thumbnail", value: "thumbnail" },
			{ label: "Full", value: "full" },
		];

		const POSITION_OPTIONS = [
			{ label: "Above Title", value: "above-title" },
			{ label: "Below Title", value: "blow-title" },
			{ label: "Left", value: "left" },
			{ label: "Right", value: "right" },
			{ label: "Bottom", value: "bottom" },
		];

		const ALIGNSELF_PLANS: MyRadioItem<
			WCB_SLIDER_PANEL_IMAGE["imageAlignSelf"]
		>[] = [
			{ name: "flex-start", icon: "Flex start" },
			{ name: "center", icon: "Center" },
			{ name: "flex-end", icon: "Flex end" },
		];

		return (
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show image", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowImage: checked })
					}
					checked={isShowImage}
				/>

				{isShowImage ? (
					<>
						<MySelect
							value={imageSize}
							options={IMAGE_SIZE_OPTIONS}
							label={__("Image size", "wcb")}
							onChange={(size) => {
								setAttr__({ ...panelData, imageSize: size });
							}}
						/>
						<MySelect
							label="Position"
							onChange={(selected) =>
								setAttr__({
									...panelData,
									imagePosition: selected as any,
								})
							}
							value={imagePosition}
							options={POSITION_OPTIONS}
						/>
						{(imagePosition === "left" || imagePosition === "right") && (
							<>
								<MyRadioGroup
									label="Image align self"
									onChange={(selected) =>
										setAttr__({
											...panelData,
											imageAlignSelf: selected as any,
										})
									}
									value={imageAlignSelf}
									plans={ALIGNSELF_PLANS}
									hasResponsive={false}
								/>
							</>
						)}
					</>
				) : null}
			</div>
		);
	};

	const renderTabContent = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabsHere;
		if (tabName === "SelectImage") {
			return renderSelectImage();
		}
		return renderSettingsImage();
	};

	const TABS: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Setting", title: __("Setting", "wcb") },
		{ name: "SelectImage", title: __("Select Image", "wcb") },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Image/Icon", "wcb")}
		>
			<div className={"space-y-5"}>

				{/* TODO: Will continue to coding when merge phase 1
				<ToggleControl
					label={__("Enable Icon", "wcb")}
					checked={enableIcon}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/> */}

				{enableIcon ? (
					<>
						<SelecIcon
							iconData={icon}
							onChange={(value) => {
								setAttr__({
									...panelData,
									icon: value,
								});
							}}
						/>
						<MySelect
							label={__("Position", "wcb")}
							options={PLANS_DEMO}
							value={iconPosition}
							onChange={(value) => {
								let newData: WCB_SLIDER_PANEL_IMAGE = {
									...panelData,
									iconPosition:
										value as WCB_SLIDER_PANEL_IMAGE["iconPosition"],
								};
								if (iconPosition !== "left" && iconPosition !== "right") {
									newData = {
										...panelData,
										iconPosition:
											value as WCB_SLIDER_PANEL_IMAGE["iconPosition"],
										stackOn: "none",
									};
								}
								setAttr__(newData);
							}}
						/>
					</>
				) : (
					<TabPanel
						className={`wcb-bodyControls__panel`}
						activeClass="active-tab"
						initialTabName="Setting"
						tabs={TABS}
					>
						{renderTabContent}
					</TabPanel>
				)}


			</div>
		</PanelBody>
	);
};

export default WcbSliderPanelImage;
