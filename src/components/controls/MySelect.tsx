import { SelectControl } from "@wordpress/components";
import React, { FC } from "react";

interface Props extends SelectControl.Props<string> {}

const MySelect: FC<Props> = ({ label, ...props }) => {
	return (
		<div className="wcb-MySelect w-full flex justify-between items-center">
			<p>{label}</p>
			<SelectControl hideLabelFromVision {...props} />
		</div>
	);
};

export default MySelect;
