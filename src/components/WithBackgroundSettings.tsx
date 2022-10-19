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
	...props
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	const v_borderTopLeftRadius_desktop = "--" + _.uniqueId();
	const v_borderTopRightRadius_desktop = "--" + _.uniqueId();
	const v_borderBottomRightRadius_desktop = "--" + _.uniqueId();
	const v_borderBottomLeftRadius_desktop = "--" + _.uniqueId();
	//
	const v_borderTopLeftRadius_tablet = "--" + _.uniqueId();
	const v_borderTopRightRadius_tablet = "--" + _.uniqueId();
	const v_borderBottomRightRadius_tablet = "--" + _.uniqueId();
	const v_borderBottomLeftRadius_tablet = "--" + _.uniqueId();
	//
	const v_borderTopLeftRadius_mobile = "--" + _.uniqueId();
	const v_borderTopRightRadius_mobile = "--" + _.uniqueId();
	const v_borderBottomRightRadius_mobile = "--" + _.uniqueId();
	const v_borderBottomLeftRadius_mobile = "--" + _.uniqueId();
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

	let BORDER_STYLES: React.CSSProperties = {};
	let BORDER_RADIUS: React.CSSProperties = {};
	let BORDER_RADIUS_CLASSES = "";
	let BG_STYLES: React.CSSProperties = {};
	BG_STYLES = getStyleForBackground();

	if (borderControlAttrs) {
		BORDER_STYLES = getBorderStyleBySettings({
			deviceType,
			...borderControlAttrs,
		});
		const radiusDesktop = borderControlAttrs.radius?.Desktop;
		const radiusTablet = borderControlAttrs.radius?.Tablet;
		const radiusMobile = borderControlAttrs.radius?.Mobile;
		BORDER_RADIUS = {
			[v_borderTopLeftRadius_desktop]: radiusDesktop?.top,
			[v_borderTopRightRadius_desktop]: radiusDesktop?.right,
			[v_borderBottomLeftRadius_desktop]: radiusDesktop?.bottom,
			[v_borderBottomRightRadius_desktop]: radiusDesktop?.left,
			// @ts-ignore
			[v_borderTopLeftRadius_tablet]: radiusTablet?.top,
			[v_borderTopRightRadius_tablet]: radiusTablet?.right,
			[v_borderBottomLeftRadius_tablet]: radiusTablet?.bottom,
			[v_borderBottomRightRadius_tablet]: radiusTablet?.left,
			// @ts-ignore
			[v_borderTopLeftRadius_mobile]: radiusMobile?.top,
			[v_borderTopRightRadius_mobile]: radiusMobile?.right,
			[v_borderBottomLeftRadius_mobile]: radiusMobile?.bottom,
			[v_borderBottomRightRadius_mobile]: radiusMobile?.left,
		};
		BORDER_RADIUS_CLASSES = `rounded-tl-[var(--my-${v_borderTopLeftRadius_desktop})] rounded-tr-[var(--my-${v_borderTopRightRadius_desktop})] rounded-bl-[var(--my-${v_borderBottomLeftRadius_desktop})] rounded-br-[var(--my-${v_borderBottomRightRadius_desktop})]`;
	}
	return (
		<div
			className={`WithBackgroundSettings wcb-block-wrapper relative flex ${BORDER_RADIUS_CLASSES} ${className}`}
			style={{
				...BG_STYLES,
				...BORDER_STYLES,
				...BORDER_RADIUS,
				...wrapStyles,
			}}
			{...props}
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
