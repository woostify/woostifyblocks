import {
	Panel,
	PanelBody,
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
	BackgroundControlType,
	BgImageAttachment,
	BgImageRepeat,
	BgImageSize,
	GRADIENT_DEFAULT,
	BgImageOverlayType,
	BgImageFocalPoint,
} from "./types";
import MyTabs from "../MyTabs";
import { Tab } from "@headlessui/react";
import MyVideoUploadCheck, {
	VideoMediaUploadData,
} from "../MyVideoUploadCheck";
import ControlBgImage from "./ControlBgImage";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../../../hooks/useGetDeviceType";

const BG_TYPES: {
	name: BackgroundControlType;
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

interface Props {
	className?: string;
	bgType: BackgroundControlType;
	setBgType: (value: BackgroundControlType) => void;
	gradient: string;
	setGradient: (value: string) => void;
	color: string;
	setColor: (value: string) => void;
	//
	overlayType: BgImageOverlayType;
	setOverlayType: (value: BgImageOverlayType) => void;
	overlayGradient: string;
	setOverlayGradient: (value: string) => void;
	overlayColor: string;
	setOverlayColor: (value: string) => void;
	//
	imageData_Desktop: MediaUploadData;
	setImageData_Desktop: (value: MediaUploadData) => void;
	imageData_Tablet?: MediaUploadData;
	setImageData_Tablet: (value: MediaUploadData) => void;
	imageData_Mobile?: MediaUploadData;
	setImageData_Mobile: (value: MediaUploadData) => void;
	//
	focalPoint_Desktop: BgImageFocalPoint;
	setFocalPoint_Desktop: (value: BgImageFocalPoint) => void;
	focalPoint_Tablet?: BgImageFocalPoint;
	setFocalPoint_Tablet: (value: BgImageFocalPoint) => void;
	focalPoint_Mobile?: BgImageFocalPoint;
	setFocalPoint_Mobile: (value: BgImageFocalPoint) => void;
	//
	bgImageAttachment_Desktop: BgImageAttachment;
	setBgImageAttachment_Desktop: (value: BgImageAttachment) => void;
	bgImageAttachment_Tablet?: BgImageAttachment;
	setBgImageAttachment_Tablet: (value: BgImageAttachment) => void;
	bgImageAttachment_Mobile?: BgImageAttachment;
	setBgImageAttachment_Mobile: (value: BgImageAttachment) => void;
	//
	bgImageRepeat_Desktop: BgImageRepeat;
	setBgImageRepeat_Desktop: (value: BgImageRepeat) => void;
	bgImageRepeat_Tablet?: BgImageRepeat;
	setBgImageRepeat_Tablet: (value: BgImageRepeat) => void;
	bgImageRepeat_Mobile?: BgImageRepeat;
	setBgImageRepeat_Mobile: (value: BgImageRepeat) => void;
	//
	bgImageSize_Desktop: BgImageSize;
	setBgImageSize_Desktop: (value: BgImageSize) => void;
	bgImageSize_Tablet?: BgImageSize;
	setBgImageSize_Tablet: (value: BgImageSize) => void;
	bgImageSize_Mobile?: BgImageSize;
	setBgImageSize_Mobile: (value: BgImageSize) => void;
	//
	videoData: VideoMediaUploadData;
	setVideoData: (value: VideoMediaUploadData) => void;
}

const MyBackgroundControl: FC<Props> = ({
	className = "",
	bgImageAttachment_Desktop = "local",
	bgImageAttachment_Tablet,
	bgImageAttachment_Mobile,
	bgImageRepeat_Desktop = "no-repeat",
	bgImageRepeat_Mobile,
	bgImageRepeat_Tablet,
	bgImageSize_Desktop = "cover",
	bgImageSize_Mobile,
	bgImageSize_Tablet,
	bgType = "color",
	color,
	focalPoint_Desktop = INIT_FOCAL_POINT_DEMO,
	focalPoint_Tablet,
	focalPoint_Mobile,
	gradient,
	imageData_Desktop = INIT_IMAGE_DATA_UPLOAD_DEMO,
	imageData_Mobile,
	imageData_Tablet,
	overlayColor,
	overlayGradient,
	overlayType,
	videoData = INIT_VIDEO_DATA_UPLOAD_DEMO,
	setBgImageAttachment_Desktop,
	setBgImageAttachment_Mobile,
	setBgImageAttachment_Tablet,
	setBgImageRepeat_Desktop,
	setBgImageRepeat_Mobile,
	setBgImageRepeat_Tablet,
	setBgImageSize_Desktop,
	setBgImageSize_Mobile,
	setBgImageSize_Tablet,
	setBgType,
	setColor,
	setFocalPoint_Desktop,
	setFocalPoint_Mobile,
	setFocalPoint_Tablet,
	setGradient,
	setImageData_Desktop,
	setImageData_Mobile,
	setImageData_Tablet,
	setOverlayColor,
	setOverlayGradient,
	setOverlayType,
	setVideoData,
}) => {
	//
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	let IMAGE_DATA = imageData_Desktop,
		FUNC_SET_IMAGE_DATA = setImageData_Desktop,
		FOCAL_POINT = focalPoint_Desktop,
		FUNC_SET_FOCAL_POINT = setFocalPoint_Desktop,
		IMAGE_ATTACMENT = bgImageAttachment_Desktop,
		FUNC_SET_IMAGE_ATTACMENT = setBgImageAttachment_Desktop,
		IMAGE_REPEAT = bgImageRepeat_Desktop,
		FUNC_SET_IMAGE_REPEAT = setBgImageRepeat_Desktop,
		IMAGE_SIZE: BgImageSize = bgImageSize_Desktop,
		FUNC_SET_IMAGE_SIZE = setBgImageSize_Desktop;
	//
	switch (deviceType) {
		case "Tablet":
			IMAGE_DATA = imageData_Tablet?.mediaId
				? imageData_Tablet
				: imageData_Desktop;
			FUNC_SET_IMAGE_DATA = setImageData_Tablet;
			//
			FOCAL_POINT = focalPoint_Tablet || focalPoint_Desktop;
			FUNC_SET_FOCAL_POINT = setFocalPoint_Tablet;
			//
			IMAGE_ATTACMENT = bgImageAttachment_Tablet || bgImageAttachment_Desktop;
			FUNC_SET_IMAGE_ATTACMENT = setBgImageAttachment_Tablet;
			//
			IMAGE_REPEAT = bgImageRepeat_Tablet || bgImageRepeat_Desktop;
			FUNC_SET_IMAGE_REPEAT = setBgImageRepeat_Tablet;
			//
			IMAGE_SIZE = bgImageSize_Tablet || bgImageSize_Desktop;
			FUNC_SET_IMAGE_SIZE = setBgImageSize_Tablet;
			break;
		case "Mobile":
			IMAGE_DATA = imageData_Mobile?.mediaId
				? imageData_Mobile
				: imageData_Tablet?.mediaId
				? imageData_Tablet
				: imageData_Desktop;
			FUNC_SET_IMAGE_DATA = setImageData_Mobile;
			//
			FOCAL_POINT =
				focalPoint_Mobile || focalPoint_Tablet || focalPoint_Desktop;
			FUNC_SET_FOCAL_POINT = setFocalPoint_Mobile;
			//
			IMAGE_ATTACMENT =
				bgImageAttachment_Mobile ||
				bgImageAttachment_Tablet ||
				bgImageAttachment_Desktop;
			FUNC_SET_IMAGE_ATTACMENT = setBgImageAttachment_Mobile;
			//
			IMAGE_REPEAT =
				bgImageRepeat_Mobile || bgImageRepeat_Tablet || bgImageRepeat_Desktop;
			FUNC_SET_IMAGE_REPEAT = setBgImageRepeat_Mobile;
			//
			IMAGE_SIZE =
				bgImageSize_Mobile || bgImageSize_Tablet || bgImageSize_Desktop;
			FUNC_SET_IMAGE_SIZE = setBgImageSize_Mobile;
			break;

		default:
			break;
	}
	//
	// const FOCAL_STYLE = {
	// 	backgroundImage: `url(${IMAGE_DATA.mediaUrl})`,
	// 	backgroundPosition: `${FOCAL_POINT.x * 100}% ${FOCAL_POINT.y * 100}%`,
	// };

	const renderTypeGroupBtn = () => {
		return (
			<PanelRow className="w-full flex justify-between items-center">
				<p className="flex-1">{__("Type", "wcb")}</p>
				<div className="flex gap-1">
					{BG_TYPES.map((item) => {
						const active = item.name === bgType;
						return (
							<div
								className={`p-2 rounded-lg border  ${
									active
										? "text-sky-600 bg-sky-50 border-sky-400"
										: "border-slate-300 hover:border-slate-500 cursor-pointer"
								}`}
								onClick={() => setBgType(item.name)}
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
					onChangeSelected={(index) => setOverlayType(OVERLAY_TYPES[index])}
				>
					<Tab.Panel
						className={"absolute -inset-1.5 bg-white z-10"}
					></Tab.Panel>
					<Tab.Panel>
						<MyColorPicker
							onChange={(overlayColor) => setOverlayColor(overlayColor)}
							color={overlayColor}
						/>
					</Tab.Panel>
					<Tab.Panel>
						<GradientPicker
							__nextHasNoMargin
							value={overlayGradient}
							onChange={(currentGradient) =>
								setOverlayGradient(currentGradient)
							}
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
						onChange={(data) => setVideoData(data)}
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
					bgImageAttachment={IMAGE_ATTACMENT}
					bgImageRepeat={IMAGE_REPEAT}
					focalPoint={FOCAL_POINT}
					imageData={IMAGE_DATA}
					bgImageSize={IMAGE_SIZE}
					setBgImageAttachment={FUNC_SET_IMAGE_ATTACMENT}
					setBgImageRepeat={FUNC_SET_IMAGE_REPEAT}
					setBgImageSize={FUNC_SET_IMAGE_SIZE}
					setFocalPoint={FUNC_SET_FOCAL_POINT}
					setImageData={FUNC_SET_IMAGE_DATA}
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
					onChange={(currentGradient) => {
						setGradient(currentGradient);
					}}
					gradients={GRADIENT_DEFAULT}
				/>
			</PanelRow>
		);
	};

	const renderContentColor = () => {
		return (
			<PanelRow className="w-full pt-2">
				<MyColorPicker onChange={(color) => setColor(color)} color={color} />
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
