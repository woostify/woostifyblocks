import { Button } from "@wordpress/components";
import React, { FC } from "react";

interface Props extends Button.ButtonProps {}

const MyButton: FC<Props> = ({ className, ...props }) => {
	return <Button className={`rounded-md ${className}`} {...props} />;
};

export default MyButton;
