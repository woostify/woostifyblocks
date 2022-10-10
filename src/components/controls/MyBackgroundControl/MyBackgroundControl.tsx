import {
	Button,
	ButtonGroup,
	Icon,
	Panel,
	PanelBody,
	PanelRow,
	// @ts-ignore
	__experimentalRadio as Radio,
	// @ts-ignore
	__experimentalRadioGroup as RadioGroup,
	// @ts-ignore
	GradientPicker,
	FocalPointPicker,
	SelectControl,
} from "@wordpress/components";
import React, { FC, useState, useEffect } from "react";
import MyColorPicker from "../MyColorPicker/MyColorPicker";
import { more, wordpress, addCard } from "@wordpress/icons";
import {
	PaintBrushIcon,
	PhotoIcon,
	FunnelIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import MyMediaUploadCheck, { MediaUploadData } from "../MyMediaUploadCheck";
import MySelect from "../MySelect";

interface Props {
	className?: string;
}

const imageAttachmentOptions: {
	value: ImageAttachment;
	label: string;
}[] = [
	{
		value: "fixed",
		label: "Fixed",
	},
	{
		value: "local",
		label: "Local",
	},
	{
		value: "scroll",
		label: "Scroll",
	},
];
export type ImageAttachment = "fixed" | "local" | "scroll";
export type BackgroundControlType = "color" | "gradient" | "image" | "video";

const MyBackgroundControl: FC<Props> = ({ className = "" }) => {
	const [type, setType] = useState<BackgroundControlType>("image");
	const [gradient, setGradient] = useState(null);
	const [color, setColor] = useState("");
	const [imageData, setImageData] = useState<MediaUploadData>({
		mediaId: 0,
		mediaUrl: "",
		mediaSrcSet: undefined,
	});
	const [focalPoint, setFocalPoint] = useState({
		x: 0.5,
		y: 0.5,
	});
	const [imageAttachment, setImageAttachment] =
		useState<ImageAttachment>("local");

	const FOCAL_STYLE = {
		backgroundImage: `url(${imageData.mediaUrl})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
	};

	const renderTypeGroupBtn = () => {
		return (
			<PanelRow className="w-full flex justify-between items-center">
				<p>Type</p>

				<ButtonGroup className="">
					<Button
						icon={<PaintBrushIcon strokeWidth={1} className="w-4 h-4" />}
						isSmall
						title="color"
						onClick={() => setType("color")}
						variant={type === "color" ? "secondary" : undefined}
					/>
					<Button
						icon={<FunnelIcon strokeWidth={1} className="w-4 h-4" />}
						onClick={() => setType("gradient")}
						title="gradient"
						isSmall
						variant={type === "gradient" ? "secondary" : undefined}
					/>
					<Button
						icon={<PhotoIcon strokeWidth={1} className="w-4 h-4" />}
						isSmall
						title="image"
						onClick={() => setType("image")}
						variant={type === "image" ? "secondary" : undefined}
					/>
					<Button
						icon={<VideoCameraIcon strokeWidth={1} className="w-4 h-4" />}
						onClick={() => setType("video")}
						title="video"
						isSmall
						variant={type === "video" ? "secondary" : undefined}
					/>
				</ButtonGroup>
			</PanelRow>
		);
	};

	const renderContent = () => {
		switch (type) {
			case "color":
				return renderContentColor();
			case "gradient":
				return renderContentGradient();
			case "image":
				return renderContentImage();
			default:
				return null;
		}
	};

	const renderContentImage = () => {
		return (
			<>
				<PanelRow className="w-full">
					<MyMediaUploadCheck
						mediaId={imageData.mediaId}
						mediaUrl={imageData.mediaUrl}
						onChange={(data) => setImageData(data)}
						mediaSrcSet={imageData.mediaSrcSet}
					/>
				</PanelRow>
				{imageData.mediaId ? (
					<>
						<PanelRow className="w-full">
							<div className="w-full ">
								<p>Image Position</p>
								<FocalPointPicker
									className="mt-2.5"
									url={imageData.mediaUrl}
									value={focalPoint}
									onDragStart={setFocalPoint}
									onDrag={setFocalPoint}
									onChange={setFocalPoint}
								/>
								{/* FOR DISPLAY */}
								{/* <div style={FOCAL_STYLE} /> */}
							</div>
						</PanelRow>

						<PanelRow className="w-full ">
							<MySelect
								label="Attachment"
								hideLabelFromVision
								options={imageAttachmentOptions}
								onChange={(selectedItem) =>
									setImageAttachment(
										(selectedItem as ImageAttachment) || "local"
									)
								}
							/>
						</PanelRow>
					</>
				) : null}
			</>
		);
	};

	const renderContentGradient = () => {
		return (
			<PanelRow className="w-full">
				<GradientPicker
					__nextHasNoMargin
					value={gradient}
					onChange={(currentGradient) => setGradient(currentGradient)}
					gradients={[
						{
							name: "JShine",
							gradient:
								"linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
							slug: "jshine",
						},
						{
							name: "Moonlit Asteroid",
							gradient:
								"linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
							slug: "moonlit-asteroid",
						},
						{
							name: "Rastafarie",
							gradient:
								"linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
							slug: "rastafari",
						},
					]}
				/>
			</PanelRow>
		);
	};

	const renderContentColor = () => {
		return (
			<PanelRow className="w-full">
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
