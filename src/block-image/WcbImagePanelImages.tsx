import { PanelBody, TabPanel, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { INIT_IMAGE_DATA_UPLOAD_DEMO } from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyMediaUploadCheck, {
	MediaUploadData,
} from "../components/controls/MyMediaUploadCheck";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import useGetImageSizeOptions from "../hooks/useGetImageSizeOptions";

export interface WCB_IMAGE_PANEL_IMAGES {
	image: MediaUploadData;
	isShowImage: boolean;
}

type TabsHere = "Settings" | "SelectImages";

export const WCB_IMAGE_PANEL_IMAGES_DEMO: WCB_IMAGE_PANEL_IMAGES = {
	image: INIT_IMAGE_DATA_UPLOAD_DEMO,
	isShowImage: true,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_IMAGE_PANEL_IMAGES;
	setAttr__: (data: WCB_IMAGE_PANEL_IMAGES) => void;
}

const WcbImagePanelImages: FC<Props> = ({
	panelData = WCB_IMAGE_PANEL_IMAGES_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		image,
		isShowImage,
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

	const TABS: {
		name: TabsHere;
		title: string;
	}[] = [
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
					initialTabName="SelectImages"
					tabs={TABS}
				>
					{renderSelectImage}
				</TabPanel>
			</div>
		</PanelBody>
	);
};

export default WcbImagePanelImages;
