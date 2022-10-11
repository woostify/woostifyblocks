import {
	Panel,
	PanelBody,
	PanelRow,
	// @ts-ignore
	GradientPicker,
} from "@wordpress/components";
import React, {
	FC,
	useState,
	useEffect,
	ReactNode,
	ComponentType,
} from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import { wordpress } from "@wordpress/icons";
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

interface Props {
	className?: string;
}

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

const MyBackgroundControl: FC<Props> = ({ className = "" }) => {
	const [bgType, setBgType] = useState<BackgroundControlType>("color");
	const [gradient, setGradient] = useState(null);
	const [color, setColor] = useState("");
	//
	const [overlayType, setOverlayType] = useState<BgImageOverlayType>("none");
	const [overlayGradient, setOverlayGradient] = useState(null);
	const [overlayColor, setOverlayColor] = useState("");
	//
	const [imageData, setImageData] = useState<MediaUploadData>({
		mediaId: 0,
		mediaUrl: "",
		mediaSrcSet: undefined,
	});
	const [videoData, setVideoData] = useState<VideoMediaUploadData>({
		mediaId: 0,
		mediaUrl: "",
	});
	const [focalPoint, setFocalPoint] = useState<BgImageFocalPoint>({
		x: 0.5,
		y: 0.5,
	});
	const [bgImageAttachment, setBgImageAttachment] =
		useState<BgImageAttachment>("local");
	const [bgImageRepeat, setBgImageRepeat] =
		useState<BgImageRepeat>("no-repeat");
	const [bgImageSize, setBgImageSize] = useState<BgImageSize>("cover");

	const FOCAL_STYLE = {
		backgroundImage: `url(${imageData.mediaUrl})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
	};

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
					bgImageAttachment={bgImageAttachment}
					bgImageRepeat={bgImageRepeat}
					focalPoint={focalPoint}
					imageData={imageData}
					setBgImageAttachment={setBgImageAttachment}
					setBgImageRepeat={setBgImageRepeat}
					setBgImageSize={setBgImageSize}
					setFocalPoint={setFocalPoint}
					setImageData={setImageData}
					bgImageSize={bgImageSize}
				/>
				{imageData.mediaId ? <>{renderOverlaySettings()}</> : null}
			</>
		);
	};

	const renderContentGradient = () => {
		return (
			<PanelRow className="w-full pt-2.5">
				<GradientPicker
					__nextHasNoMargin
					value={gradient}
					onChange={(currentGradient) => setGradient(currentGradient)}
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
			<Panel>
				<PanelBody title="Background" initialOpen={true}>
					<>
						{renderTypeGroupBtn()}
						{renderContent()}
					</>
				</PanelBody>
			</Panel>
		</div>
	);
};

export default MyBackgroundControl;
