import { PanelBody, TabPanel, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyMediaUploadCheck, {
	MediaUploadData,
} from "../components/controls/MyMediaUploadCheck";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySelect from "../components/controls/MySelect";
import useGetDeviceType from "../hooks/useGetDeviceType";
import useGetImageSizeOptions from "../hooks/useGetImageSizeOptions";

export interface WCB_TESTIMONIALS_PANEL_IMAGES {
	images: MediaUploadData[];
	imageSize: string;
	isShowImage: boolean;
	imagePosition: "top" | "left" | "bottom" | "right";
}

type TabsHere = "Settings" | "SelectImages";

export const WCB_TESTIMONIALS_PANEL_IMAGES_DEMO: WCB_TESTIMONIALS_PANEL_IMAGES =
	{
		images: [],
		imageSize: "thumbnail",
		isShowImage: true,
		imagePosition: "bottom",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_IMAGES;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_IMAGES) => void;
	numberOfItems: number;
}

const WcbTestimonialsPanelImages: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_IMAGES_DEMO,
	setAttr__,
	numberOfItems = 1,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { images, imagePosition, isShowImage, imageSize } = panelData;
	//
	let CURRENT_IMAGES = [...Array(numberOfItems || 3).keys()].map(
		(_, index) => images[index] || INIT_IMAGE_DATA_UPLOAD_DEMO
	);
	//
	const { imageSizeOptions } = useGetImageSizeOptions();

	const renderSelectImage = () => {
		if (!isShowImage) {
			return (
				<HelpText>
					{__(
						'Please enable the "Show Image" field to select images for testimonials...',
						"boostify-blocks"
					)}
				</HelpText>
			);
		}

		return (
			<div className={"space-y-5"}>
				{CURRENT_IMAGES.map((imageData, index) => {
					return (
						<div key={index + "--" + imageData.mediaId}>
							<MyLabelControl hasResponsive={false}>
								{__("Image", "boostify-blocks")} {index + 1}
							</MyLabelControl>
							<MyMediaUploadCheck
								onChange={(data) => {
									setAttr__({
										...panelData,
										images: CURRENT_IMAGES.map((item, j) => {
											if (j === index) {
												return data;
											}
											return item;
										}),
									});
								}}
								imageData={imageData}
							/>
						</div>
					);
				})}
			</div>
		);
	};

	const renderSettingsImage = () => {
		const POSTION_PLANS: MyRadioItem<
			WCB_TESTIMONIALS_PANEL_IMAGES["imagePosition"]
		>[] = [
			{ name: "top", icon: "Top" },
			{ name: "left", icon: "Left" },
			{ name: "right", icon: "Right" },
			{ name: "bottom", icon: "Bottom" },
		];

		return (
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show image", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowImage: checked })
					}
					checked={isShowImage}
				/>

				{isShowImage ? (
					<MySelect
						value={imageSize}
						options={imageSizeOptions}
						label={__("Image size", "boostify-blocks")}
						onChange={(size) => {
							setAttr__({ ...panelData, imageSize: size });
						}}
					/>
				) : null}

				{isShowImage ? (
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
				) : null}
			</div>
		);
	};

	const renderTabContent = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabsHere;
		if (tabName === "SelectImages") {
			return renderSelectImage();
		}
		return renderSettingsImage();
	};

	const TABS: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Settings", title: __("Settings", "boostify-blocks") },
		{ name: "SelectImages", title: __("Select Images", "boostify-blocks") },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Images", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<TabPanel
					className={`wcb-bodyControls__panel`}
					activeClass="active-tab"
					initialTabName="Settings"
					tabs={TABS}
				>
					{renderTabContent}
				</TabPanel>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanelImages;
