import React, { FC, ReactNode } from "react";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getBgImageStyleBySettings from "./controls/MyBackgroundControl/getBgImageStyleBySettings";
import { BackgroundControlData } from "./controls/MyBackgroundControl/MyBackgroundControl";
import { ResponsiveDevices } from "./controls/MyResponsiveToggle/MyResponsiveToggle";

interface Props {
	className?: string;
	backgroundControlAttrs: BackgroundControlData;
	children: ReactNode;
}

const WithBackgroundSettings: FC<Props> = ({
	className = "",
	backgroundControlAttrs,
	children,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
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
			deviceType,
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

	return (
		<div
			className={`WithBackgroundSettings wcb-block-wrapper relative --- p-8 rounded-2xl border border-slate-500 ${className}`}
			style={getStyleForBackground()}
		>
			{renderImageBg()}
			{renderVideoBg()}
			{renderBgOverlay()}
			<div className="relative z-[1]">{children}</div>
		</div>
	);
};

export default WithBackgroundSettings;
