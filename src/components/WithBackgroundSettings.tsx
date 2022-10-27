import React, { FC, ReactNode } from "react";
import _ from "lodash";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getBgImageStyleBySettings from "./controls/MyBackgroundControl/getBgImageStyleBySettings";
import { BackgroundControlData } from "./controls/MyBackgroundControl/MyBackgroundControl";
import getBorderStyleBySettings from "./controls/MyBorderControl/getBorderStyleBySettings";
import { MyBorderControlData } from "./controls/MyBorderControl/types";
import { ResponsiveDevices } from "./controls/MyResponsiveToggle/MyResponsiveToggle";

interface Props {
	className?: string;
	contentClassName?: string;
	backgroundControlAttrs: BackgroundControlData;
	children: ReactNode;
	borderControlAttrs?: MyBorderControlData;
	wrapStyles?: React.CSSProperties;
	contentStyles?: React.CSSProperties;
}

const WithBackgroundSettings: FC<Props> = ({
	className = "",
	contentClassName = "",
	backgroundControlAttrs,
	children,
	borderControlAttrs,
	wrapStyles = {},
	contentStyles = {},
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//

	//

	const getStyleForBackground = () => {
		let BG_STYLE: React.CSSProperties = {};
		// Backgroud color
		if (backgroundControlAttrs.bgType === "color") {
			BG_STYLE = {
				backgroundColor: backgroundControlAttrs.color,
			};
			return BG_STYLE;
		}
		// Backgroud gradient
		if (backgroundControlAttrs.bgType === "gradient") {
			BG_STYLE = {
				backgroundImage: backgroundControlAttrs.gradient,
			};
			return BG_STYLE;
		}

		// Bakground video
		if (backgroundControlAttrs.bgType === "video") {
			return {};
		}

		return BG_STYLE;
	};

	const renderVideoBg = () => {
		if (
			backgroundControlAttrs.bgType !== "video" ||
			!backgroundControlAttrs.videoData?.mediaId
		) {
			return null;
		}
		const SRC = backgroundControlAttrs.videoData?.mediaUrl || "";

		return (
			<div className="wcb-container__video-wrap absolute inset-0 z-0 overflow-hidden">
				<video
					autoPlay
					loop
					muted
					controls={false}
					className="absolute inset-0 w-full"
					title={SRC}
					data-id={backgroundControlAttrs.videoData.mediaId}
					src={SRC}
				></video>
			</div>
		);
	};

	const renderImageBg = () => {
		if (backgroundControlAttrs.bgType !== "image") {
			return null;
		}
		const BG_IMAGE_STLYE = getBgImageStyleBySettings({
			...backgroundControlAttrs,
		});

		return (
			<div
				className="wcb-container__video-wrap absolute inset-0 z-0 overflow-hidden"
				style={BG_IMAGE_STLYE}
			></div>
		);
	};

	const renderBgOverlay = () => {
		if (backgroundControlAttrs.overlayType === "none") {
			return null;
		}
		if (
			backgroundControlAttrs.bgType !== "video" &&
			backgroundControlAttrs.bgType !== "image"
		) {
			return null;
		}

		return (
			<div
				className="wcb-container__overlay-wrap absolute inset-0 z-0 "
				style={{
					backgroundColor:
						backgroundControlAttrs.overlayType === "color"
							? backgroundControlAttrs.overlayColor
							: undefined,
					backgroundImage:
						backgroundControlAttrs.overlayType === "gradient"
							? backgroundControlAttrs.overlayGradient
							: undefined,
				}}
			></div>
		);
	};

	let BORDER_STYLES: React.CSSProperties = {};
	let BORDER_CLASSES = "";
	let BG_STYLES: React.CSSProperties = {};
	BG_STYLES = getStyleForBackground();

	if (borderControlAttrs) {
		const borderStyles = getBorderStyleBySettings(borderControlAttrs);
		BORDER_CLASSES = borderStyles.className;
		BORDER_STYLES = borderStyles.styles;
	}
	return (
		<div
			className={`WithBackgroundSettings wcb-block-wrapper relative flex ${BORDER_CLASSES} ${className}`}
			style={{
				...BG_STYLES,
				...BORDER_STYLES,
				...wrapStyles,
			}}
		>
			{renderImageBg()}
			{renderVideoBg()}
			{renderBgOverlay()}
			<div
				className={`relative z-[1] flex-1 ${contentClassName}`}
				style={contentStyles}
			>
				{children}
			</div>
		</div>
	);
};

export default WithBackgroundSettings;
