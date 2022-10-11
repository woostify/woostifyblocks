import { SelectControl } from "@wordpress/components";
import React, { FC } from "react";
import MyLabelControl, {
	MyLabelControlProps,
} from "./MyLabelControl/MyLabelControl";

interface Props
	extends SelectControl.Props<string>,
		Pick<MyLabelControlProps, "hasResponsive" | "devices"> {}

const MySelect: FC<Props> = ({ label, hasResponsive, devices, ...props }) => {
	return (
		<div className="wcb-MySelect w-full flex justify-between items-center">
			<MyLabelControl
				className=""
				hasResponsive={hasResponsive}
				devices={devices}
			>
				{label}
			</MyLabelControl>
			<SelectControl hideLabelFromVision {...props} />
		</div>
	);
};

export default MySelect;
