import React, { FC, ReactNode } from "react";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getBgImageStyleBySettings from "./controls/MyBackgroundControl/getBgImageStyleBySettings";
import { AttrsTypeForBackground } from "./controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "./controls/MyResponsiveToggle/MyResponsiveToggle";

interface Props {
	className?: string;
	attributes: AttrsTypeForBackground;
	children: ReactNode;
}

const HOCHasBackgroundSettings: FC<Props> = ({
	className = "",
	attributes,
	children,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//

	const getStyleForBackground = () => {
		let BG_STYLE: React.CSSProperties = {};
		// Backgroud color
		if (attributes.bgType === "color") {
			BG_STYLE = {
				backgroundColor: attributes.bgColor,
			};
			return BG_STYLE;
		}
		// Backgroud gradient
		if (attributes.bgType === "gradient") {
			BG_STYLE = {
				backgroundImage: attributes.gradient,
			};
			return BG_STYLE;
		}

		// Bakground video
		if (attributes.bgType === "video") {
			return {};
		}

		return BG_STYLE;
	};

	const renderVideoBg = () => {
		if (attributes.bgType !== "video" || !attributes.videoData?.mediaId) {
			return null;
		}
		const SRC = attributes.videoData?.mediaUrl || "";

		return (
			<div className="wcb-container__video-wrap absolute inset-0 z-0 overflow-hidden">
				<video
					autoPlay
					loop
					muted
					controls={false}
					className="absolute inset-0 w-full"
					title={SRC}
					data-id={attributes.videoData.mediaId}
					src={SRC}
				></video>
			</div>
		);
	};

	const renderImageBg = () => {
		if (attributes.bgType !== "image") {
			return null;
		}
		const BG_IMAGE_STLYE = getBgImageStyleBySettings({
			...attributes,
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
		if (attributes.overlayType === "none") {
			return null;
		}
		if (attributes.bgType !== "video" && attributes.bgType !== "image") {
			return null;
		}

		return (
			<div
				className="wcb-container__overlay-wrap absolute inset-0 z-0 "
				style={{
					backgroundColor:
						attributes.overlayType === "color"
							? attributes.overlayColor
							: undefined,
					backgroundImage:
						attributes.overlayType === "gradient"
							? attributes.overlayGradient
							: undefined,
				}}
			></div>
		);
	};

	return (
		<div
			className={`wcb-block-wrapper relative --- p-8 rounded-2xl border border-slate-500 ${className}`}
			style={getStyleForBackground()}
		>
			{renderImageBg()}
			{renderVideoBg()}
			{renderBgOverlay()}
			<div className="relative z-[1]">{children}</div>
		</div>
	);
};

export default HOCHasBackgroundSettings;
