import { PanelRow, FocalPointPicker } from "@wordpress/components";
import React, { FC } from "react";
import { __ } from "@wordpress/i18n";
import MyMediaUploadCheck, { MediaUploadData } from "../MyMediaUploadCheck";
import MySelect from "../MySelect";
import {
	BG_ATTACHMENT_OPTIONS,
	BgImageAttachment,
	BgImageRepeat,
	BG_REPEAT_OPTIONS,
	BgImageSize,
	BG_SIZE_OPTIONS,
	BgImageFocalPoint,
} from "./types";
import MyLabelControl from "../MyLabelControl/MyLabelControl";

interface Props {
	imageData: MediaUploadData;
	setImageData: (value: MediaUploadData) => void;
	focalPoint: BgImageFocalPoint;
	setFocalPoint: (value: BgImageFocalPoint) => void;
	bgImageAttachment: BgImageAttachment;
	setBgImageAttachment: (value: BgImageAttachment) => void;
	bgImageRepeat: BgImageRepeat;
	setBgImageRepeat: (value: BgImageRepeat) => void;
	bgImageSize: BgImageSize;
	setBgImageSize: (value: BgImageSize) => void;
}

const ControlBgImage: FC<Props> = ({
	imageData,
	setImageData,
	focalPoint,
	setFocalPoint,
	bgImageAttachment,
	setBgImageAttachment,
	bgImageRepeat,
	bgImageSize,
	setBgImageRepeat,
	setBgImageSize,
}) => {
	const renderContentImage = () => {
		return (
			<>
				<PanelRow className="w-full">
					<div className="w-full">
						<MyLabelControl hasResponsive>{__("Image", "boostify-blocks")}</MyLabelControl>
						<MyMediaUploadCheck
							onChange={(data) => setImageData(data)}
							imageData={imageData}
						/>
					</div>
				</PanelRow>
				{imageData.mediaId ? (
					<>
						<PanelRow className="w-full">
							<div className="w-full ">
								<MyLabelControl hasResponsive>
									{__("Image Position", "boostify-blocks")}
								</MyLabelControl>
								<FocalPointPicker
									className="mt-2.5"
									url={imageData.mediaUrl}
									value={focalPoint}
									// @ts-ignore
									onDragStart={setFocalPoint}
									onDrag={setFocalPoint}
									onChange={setFocalPoint}
								/>
							</div>
						</PanelRow>

						{/* Background attachment select setting */}
						<PanelRow className="w-full ">
							<MySelect
								label={__("Attachment", "boostify-blocks")}
								hasResponsive
								hideLabelFromVision
								options={BG_ATTACHMENT_OPTIONS}
								defaultValue={bgImageAttachment}
								value={bgImageAttachment}
								onChange={(value) =>
									setBgImageAttachment((value as BgImageAttachment) || "local")
								}
							/>
						</PanelRow>

						{/* Background repeat select setting */}
						<PanelRow className="w-full ">
							<MySelect
								label={__("Repeat", "boostify-blocks")}
								hasResponsive
								hideLabelFromVision
								defaultValue={bgImageRepeat}
								value={bgImageRepeat}
								options={BG_REPEAT_OPTIONS}
								onChange={(value) =>
									setBgImageRepeat((value as BgImageRepeat) || "no-repeat")
								}
							/>
						</PanelRow>

						{/* Background Size select setting */}
						<PanelRow className="w-full ">
							<MySelect
								label={__("Size", "boostify-blocks")}
								hasResponsive
								hideLabelFromVision
								defaultValue={bgImageSize}
								value={bgImageSize}
								options={BG_SIZE_OPTIONS}
								onChange={(value) =>
									setBgImageSize((value as BgImageSize) || "cover")
								}
							/>
						</PanelRow>
					</>
				) : null}
			</>
		);
	};

	return renderContentImage();
};

export default ControlBgImage;
