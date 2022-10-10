import React, { FC } from "react";
import { rotateLeft } from "@wordpress/icons";
import { Button } from "@wordpress/components";

interface Props extends Button.ButtonProps {}

const ResetButton: FC<Props> = ({
	onClick,
	className,
	isSmall = true,
	...props
}) => {
	return (
		<Button
			className={className}
			onClick={onClick}
			icon={rotateLeft}
			isSmall={isSmall}
			{...props}
		></Button>
	);
};

export default ResetButton;
