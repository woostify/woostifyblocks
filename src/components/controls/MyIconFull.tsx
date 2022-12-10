import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyIcon from "./MyIcon";
import { DEFAULT_MY_ICON, MyIcon as MyIconType } from "./SelectIcon/SelecIcon";

interface Props extends React.HTMLAttributes<HTMLElement> {
	icon: MyIconType;
}

const MyIconFull: FC<Props> = ({
	icon = DEFAULT_MY_ICON,
	className = "",
	...props
}) => {
	const renderIcon = () => {
		const classes = `wcb-icon-full ${className}`.trim();
		if (!icon) {
			return <span>{__("None", "wcb")}</span>;
		}
		if (icon.type === "icon" && icon.iconName) {
			return <MyIcon className={`${classes}`} icon={icon.iconName} />;
		}
		if (icon.type === "svg") {
			return (
				<div
					className={`${classes} is-svg wcb-icon-full--svg`}
					dangerouslySetInnerHTML={{ __html: icon.svgCode }}
				></div>
			);
		}
		if (icon.type === "image" && icon.imageData?.mediaId) {
			return (
				<div className={`${classes} is-image wcb-icon-full--image`}>
					<img src={icon.imageData.mediaUrl} alt="" />
				</div>
			);
		}
		return <span>{__("None", "wcb")}</span>;
	};

	return renderIcon();
};

export default MyIconFull;
