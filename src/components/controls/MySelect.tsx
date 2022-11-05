import { SelectControl } from "@wordpress/components";
import React, { FC } from "react";
import MyLabelControl, {
	MyLabelControlProps,
} from "./MyLabelControl/MyLabelControl";

interface Props
	extends SelectControl.Props<string>,
		Pick<MyLabelControlProps, "hasResponsive" | "devices"> {}

const MySelect: FC<Props> = ({
	label = "My select",
	hasResponsive,
	devices,
	...props
}) => {
	return (
		<div className="wcb-MySelect w-full flex justify-between items-center">
			<MyLabelControl
				className="flex-1"
				hasResponsive={hasResponsive}
				devices={devices}
			>
				{label}
			</MyLabelControl>
			<div className="flex-1">
				<SelectControl hideLabelFromVision {...props} />
			</div>
		</div>
	);
};

export default MySelect;
