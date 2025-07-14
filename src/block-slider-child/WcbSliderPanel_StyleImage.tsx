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
import useGetImageSizeOptions from "../hooks/useGetImageSizeOptions";

export interface WCB_SLIDER_PANEL_IMAGE {
	image: MediaUploadData;
	imageSize: string;
	isShowImage: boolean;
	imagePosition: "top" | "left" | "bottom" | "right";
	stackOn: "none" | "tablet" | "mobile";
	imageAlignSelf: "flex-start" | "center" | "flex-end";
}

type TabsHere = "Setting" | "SelectImage";

export const WCB_SLIDER_PANEL_IMAGE_DEMO: WCB_SLIDER_PANEL_IMAGE = {
	image: INIT_IMAGE_DATA_UPLOAD_DEMO,
	imageSize: "thumbnail",
	isShowImage: true,
	imagePosition: "top",
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
		image,
		imagePosition,
		isShowImage,
		imageSize,
		stackOn,
		imageAlignSelf,
	} = panelData;
	//
	const { imageSizeOptions } = useGetImageSizeOptions();

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
		const POSTION_PLANS: MyRadioItem<WCB_SLIDER_PANEL_IMAGE["imagePosition"]>[] =[
			{ name: "top", icon: "Top" },
			{ name: "left", icon: "Left" },
			{ name: "right", icon: "Right" },
			{ name: "bottom", icon: "Bottom" },
		];
		const STACKON_PLANS: MyRadioItem<WCB_SLIDER_PANEL_IMAGE["stackOn"]>[] = [
			{ name: "none", icon: "None" },
			{ name: "tablet", icon: "Tablet" },
			{ name: "mobile", icon: "Mobile" },
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
							options={imageSizeOptions}
							label={__("Image size", "wcb")}
							onChange={(size) => {
								setAttr__({ ...panelData, imageSize: size });
							}}
						/>
						<MyRadioGroup
							label="Position"
							onChange={(selected) =>
								setAttr__({
									...panelData,
									imagePosition: selected as any,
								})
							}
							value={imagePosition}
							plans={POSTION_PLANS}
							hasResponsive={false}
						/>
						{(imagePosition === "left" || imagePosition === "right") && (
							<>
								<MyRadioGroup
									label="Stack on"
									onChange={(selected) =>
										setAttr__({
											...panelData,
											stackOn: selected as any,
										})
									}
									value={stackOn}
									plans={STACKON_PLANS}
									hasResponsive={false}
								/>
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
			title={__("Image", "wcb")}
		>
			<div className={"space-y-5"}>
				<TabPanel
					className={`wcb-bodyControls__panel`}
					activeClass="active-tab"
					initialTabName="Setting"
					tabs={TABS}
				>
					{renderTabContent}
				</TabPanel>
			</div>
		</PanelBody>
	);
};

export default WcbSliderPanelImage;
