import {
	PanelRow,
	// @ts-ignore
	GradientPicker,
} from "@wordpress/components";
import React, { FC, ComponentType } from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import { __ } from "@wordpress/i18n";
import {
	PaintBrushIcon,
	PhotoIcon,
	FunnelIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { MediaUploadData } from "../MyMediaUploadCheck";
import {
	BackgroundType,
	BgImageAttachment,
	BgImageRepeat,
	BgImageSize,
	GRADIENT_DEFAULT,
	BgImageOverlayType,
	BgImageFocalPoint,
	HasResponsive,
} from "./types";
import MyTabs from "../MyTabs";
import { Tab } from "@headlessui/react";
import MyVideoUploadCheck, {
	VideoMediaUploadData,
} from "../MyVideoUploadCheck";
import ControlBgImage from "./ControlBgImage";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";

const BG_TYPES_PLANS: {
	name: BackgroundType;
	icon: ComponentType<any>;
}[] = [
	{ name: "color", icon: PaintBrushIcon },
	{ name: "gradient", icon: FunnelIcon },
	{ name: "image", icon: PhotoIcon },
	{ name: "video", icon: VideoCameraIcon },
];

const OVERLAY_TYPES: BgImageOverlayType[] = ["none", "color", "gradient"];
//
export const INIT_IMAGE_DATA_UPLOAD_DEMO: MediaUploadData = {
	mediaId: 0,
	mediaUrl: "",
	mediaSrcSet: undefined,
};
export const INIT_VIDEO_DATA_UPLOAD_DEMO: VideoMediaUploadData = {
	mediaId: 0,
	mediaUrl: "",
};
export const INIT_FOCAL_POINT_DEMO: BgImageFocalPoint = {
	x: 0.5,
	y: 0.5,
};

export interface BackgroundControlData {
	bgType: BackgroundType;
	gradient: string;
	color: string;
	overlayType: BgImageOverlayType;
	overlayGradient: string;
	overlayColor: string;
	//
	bgImageAttachment: HasResponsive<BgImageAttachment>;
	imageData: HasResponsive<MediaUploadData>;
	focalPoint: HasResponsive<BgImageFocalPoint>;
	bgImageRepeat: HasResponsive<BgImageRepeat>;
	bgImageSize: HasResponsive<BgImageSize>;
	//
	videoData: VideoMediaUploadData;
	//
}

interface Props {
	className?: string;
	backgroundControl: BackgroundControlData;
	setAttrs__backgroundControl: (data: BackgroundControlData) => void;
	bgTypesPlans?: typeof BG_TYPES_PLANS;
}

export const STYLES_BG_DEMO: BackgroundControlData = {
	bgImageAttachment: { Desktop: "local" },
	bgImageRepeat: { Desktop: "no-repeat" },
	bgImageSize: { Desktop: "cover" },
	bgType: "color",
	color: "",
	focalPoint: { Desktop: INIT_FOCAL_POINT_DEMO },
	gradient:
		"linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)",
	imageData: { Desktop: INIT_IMAGE_DATA_UPLOAD_DEMO },
	overlayColor: "#9437374d",
	overlayGradient:
		"linear-gradient(104deg,rgba(93,207,232,0.72) 0%,rgba(245,120,128,0.69) 100%)",
	overlayType: "none",
	videoData: INIT_VIDEO_DATA_UPLOAD_DEMO,
};

const MyBackgroundControl: FC<Props> = ({
	className = "",
	backgroundControl = STYLES_BG_DEMO,
	setAttrs__backgroundControl,
	bgTypesPlans = BG_TYPES_PLANS,
}) => {
	//
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const {
		bgImageAttachment,
		bgImageRepeat,
		bgImageSize,
		bgType,
		color,
		focalPoint,
		gradient,
		imageData,
		overlayColor,
		overlayGradient,
		overlayType,
		videoData,
	} = backgroundControl;

	//
	const IMAGE_ATTACMENT: BgImageAttachment =
		bgImageAttachment[deviceType] ||
		bgImageAttachment.Tablet ||
		bgImageAttachment.Desktop;
	const IMAGE_REPEAT: BgImageRepeat =
		bgImageRepeat[deviceType] || bgImageRepeat.Tablet || bgImageRepeat.Desktop;
	const IMAGE_SIZE: BgImageSize =
		bgImageSize[deviceType] || bgImageSize.Tablet || bgImageSize.Desktop;
	const FOCAL_POINT: BgImageFocalPoint =
		focalPoint[deviceType] || focalPoint.Tablet || focalPoint.Desktop;
	const IMAGE_DATA: MediaUploadData =
		imageData[deviceType] || imageData.Tablet || imageData.Desktop;
	//

	const handleChangeBgType = (type: BackgroundType) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			bgType: type,
		});
	};
	const handleChangeColor = (color: string) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			color,
		});
	};
	const handleChangeGradient = (gradient: string) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			gradient,
		});
	};
	const handleChangeImageData = (value: MediaUploadData) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			imageData: { ...imageData, [deviceType]: value },
		});
	};
	const handleChangeFocalPoint = (value: BgImageFocalPoint) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			focalPoint: { ...focalPoint, [deviceType]: value },
		});
	};
	const handleChangeBgImageSize = (value: BgImageSize) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			bgImageSize: { ...bgImageSize, [deviceType]: value },
		});
	};
	const handleChangeBgImageRepeat = (value: BgImageRepeat) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			bgImageRepeat: { ...bgImageRepeat, [deviceType]: value },
		});
	};
	const handleChangeBgImageAttachment = (value: BgImageAttachment) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			bgImageAttachment: { ...bgImageAttachment, [deviceType]: value },
		});
	};
	const handleChangeVideoData = (videoData: VideoMediaUploadData) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			videoData,
		});
	};
	const handleChangeOverlayGradient = (overlayGradient: string) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			overlayGradient,
		});
	};
	const handleChangeOverlayColor = (overlayColor: string) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			overlayColor,
		});
	};
	const handleChangeOverlayType = (index: number) => {
		setAttrs__backgroundControl({
			...backgroundControl,
			overlayType: OVERLAY_TYPES[index],
		});
	};

	//

	const renderTypeGroupBtn = () => {
		return (
			<PanelRow className="w-full flex justify-between items-center">
				<p className="flex-1">{__("Type", "wcb")}</p>
				<div className="flex gap-1">
					{bgTypesPlans.map((item) => {
						const active = item.name === bgType;
						return (
							<div
								key={item.name}
								className={`p-2 rounded-lg border  ${
									active
										? "text-sky-600 bg-sky-50 border-sky-400"
										: "border-slate-300 hover:border-slate-500 cursor-pointer"
								}`}
								onClick={() => handleChangeBgType(item.name)}
								title={item.name}
							>
								<item.icon className="w-4 h-4" />
							</div>
						);
					})}
				</div>
			</PanelRow>
		);
	};

	const renderOverlaySettings = () => {
		return (
			<PanelRow className="w-full ">
				<MyTabs
					tabs={OVERLAY_TYPES}
					label={__("Overlay Type", "wcb")}
					tabSelected={overlayType}
					onChangeSelected={handleChangeOverlayType}
				>
					<Tab.Panel
						className={"absolute -inset-1.5 bg-white z-10"}
					></Tab.Panel>
					<Tab.Panel>
						<MyColorPicker
							onChange={handleChangeOverlayColor}
							color={overlayColor}
						/>
					</Tab.Panel>
					<Tab.Panel>
						<GradientPicker
							__nextHasNoMargin
							value={overlayGradient}
							onChange={handleChangeOverlayGradient}
							gradients={GRADIENT_DEFAULT}
						/>
					</Tab.Panel>
				</MyTabs>
			</PanelRow>
		);
	};

	const renderContent = () => {
		switch (bgType) {
			case "color":
				return renderContentColor();
			case "gradient":
				return renderContentGradient();
			case "image":
				return renderContentImage();
			case "video":
				return renderContentVideo();
			default:
				return null;
		}
	};

	const renderContentVideo = () => {
		return (
			<>
				<PanelRow className="w-full">
					<MyVideoUploadCheck
						mediaId={videoData.mediaId}
						mediaUrl={videoData.mediaUrl}
						onChange={handleChangeVideoData}
					/>
				</PanelRow>
				{videoData.mediaId ? <>{renderOverlaySettings()}</> : null}
			</>
		);
	};

	const renderContentImage = () => {
		return (
			<>
				<ControlBgImage
					bgImageRepeat={IMAGE_REPEAT}
					focalPoint={FOCAL_POINT}
					imageData={IMAGE_DATA}
					bgImageSize={IMAGE_SIZE}
					bgImageAttachment={IMAGE_ATTACMENT}
					//
					setBgImageAttachment={handleChangeBgImageAttachment}
					setBgImageRepeat={handleChangeBgImageRepeat}
					setBgImageSize={handleChangeBgImageSize}
					setFocalPoint={handleChangeFocalPoint}
					setImageData={handleChangeImageData}
				/>
				{IMAGE_DATA.mediaId ? <>{renderOverlaySettings()}</> : null}
			</>
		);
	};

	const renderContentGradient = () => {
		return (
			<PanelRow className="w-full pt-2.5">
				<GradientPicker
					__nextHasNoMargin
					value={gradient}
					onChange={handleChangeGradient}
					gradients={GRADIENT_DEFAULT}
				/>
			</PanelRow>
		);
	};

	const renderContentColor = () => {
		return (
			<PanelRow className="w-full pt-2">
				<MyColorPicker onChange={handleChangeColor} color={color} />
			</PanelRow>
		);
	};

	return (
		<div className={className}>
			<>
				{renderTypeGroupBtn()}
				{renderContent()}
			</>
		</div>
	);
};

export default MyBackgroundControl;
