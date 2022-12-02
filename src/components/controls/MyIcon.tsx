import React, { FC } from "react";
import unicodesMap from "../../../public/lineicons-free-basic/icon-font/unicodesMap.json";

export type MyIconKey = keyof typeof unicodesMap;

interface Props extends React.HTMLAttributes<HTMLElement> {
	icon: MyIconKey;
	size?: number;
}

const MyIcon: FC<Props> = ({
	icon = "lni-image",
	className,
	size,
	...props
}) => {
	return <i {...props} className={`lni ${icon} ${className}`}></i>;
};

export default MyIcon;
