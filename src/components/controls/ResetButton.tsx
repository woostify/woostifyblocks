import React, { FC } from "react";
import { rotateLeft } from "@wordpress/icons";
import { Button } from "@wordpress/components";

interface Props extends Button.ButtonProps {}

const ResetButton: FC<Props> = ({
	onClick,
	className = "text-slate-700",
	isSmall = true,
	...props
}) => {
	return (
		<Button
			className={className}
			onClick={onClick}
			icon={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-5 h-5"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"></path>
				</svg>
			}
			isSmall={isSmall}
			{...props}
		></Button>
	);
};

export default ResetButton;
