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

export interface WCB_TEAM_PANEL_IMAGES {
	image: MediaUploadData;
	imageSize: string;
	isShowImage: boolean;
	imagePosition: "top" | "left" | "bottom" | "right";
	stackOn: "none" | "tablet" | "mobile";
	imageAlignSelf: "flex-start" | "center" | "flex-end";
}

type TabsHere = "Settings" | "SelectImages";

export const WCB_TEAM_PANEL_IMAGES_DEMO: WCB_TEAM_PANEL_IMAGES = {
	image: INIT_IMAGE_DATA_UPLOAD_DEMO,
	imageSize: "thumbnail",
	isShowImage: true,
	imagePosition: "top",
	stackOn: "none",
	imageAlignSelf: "center",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TEAM_PANEL_IMAGES;
	setAttr__: (data: WCB_TEAM_PANEL_IMAGES) => void;
}

const WcbTeamPanelImages: FC<Props> = ({
	panelData = WCB_TEAM_PANEL_IMAGES_DEMO,
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
						"boostify-blocks"
					)}
				</HelpText>
			);
		}

		return (
			<div className={"space-y-5"}>
				<div>
					<MyLabelControl hasResponsive={false}>
						{__("Choose Image", "boostify-blocks")}
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
		const POSTION_PLANS: MyRadioItem<WCB_TEAM_PANEL_IMAGES["imagePosition"]>[] =
			[
				{ name: "top", icon: "Top" },
				{ name: "left", icon: "Left" },
				{ name: "right", icon: "Right" },
				{ name: "bottom", icon: "Bottom" },
			];
		const STACKON_PLANS: MyRadioItem<WCB_TEAM_PANEL_IMAGES["stackOn"]>[] = [
			{ name: "none", icon: "None" },
			{ name: "tablet", icon: "Tablet" },
			{ name: "mobile", icon: "Mobile" },
		];
		const ALIGNSELF_PLANS: MyRadioItem<
			WCB_TEAM_PANEL_IMAGES["imageAlignSelf"]
		>[] = [
			{ name: "flex-start", icon: "Flex start" },
			{ name: "center", icon: "Center" },
			{ name: "flex-end", icon: "Flex end" },
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
					<>
						<MySelect
							value={imageSize}
							options={imageSizeOptions}
							label={__("Image size", "boostify-blocks")}
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

export default WcbTeamPanelImages;
