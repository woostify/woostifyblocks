import { FormToggle } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyLabelControl from "../MyLabelControl/MyLabelControl";

export interface MyResponsiveConditionControlData {
	isHiddenOnDesktop: boolean;
	isHiddenOnTablet: boolean;
	isHiddenOnMobile: boolean;
}
export const RESPONSIVE_CONDITON_DEMO: MyResponsiveConditionControlData = {
	isHiddenOnDesktop: false,
	isHiddenOnTablet: false,
	isHiddenOnMobile: false,
};

interface Props {
	className?: string;
	responsiveConditionControl: MyResponsiveConditionControlData;
	setAttrs__responsiveCondition: (
		data: MyResponsiveConditionControlData
	) => void;
}
const MyResponsiveConditionControl: FC<Props> = ({
	className = "space-y-3",
	responsiveConditionControl = RESPONSIVE_CONDITON_DEMO,
	setAttrs__responsiveCondition,
}) => {
	const { isHiddenOnDesktop, isHiddenOnMobile, isHiddenOnTablet } =
		responsiveConditionControl;

	const toggleHiddenOnDesktop = () => {};
	const toggleHiddenOnTablet = () => {};
	const toggleHiddenOnMobile = () => {};
	return (
		<div className={className}>
			<div className="flex justify-between items-center">
				<p>{__("Hide on Desktop", "wcb")}</p>
				<FormToggle
					checked={isHiddenOnDesktop}
					onChange={toggleHiddenOnDesktop}
				/>
			</div>
			<div className="flex justify-between items-center">
				<p>{__("Hide on Tablet", "wcb")}</p>
				<FormToggle
					checked={isHiddenOnTablet}
					onChange={toggleHiddenOnTablet}
				/>
			</div>
			<div className="flex justify-between items-center">
				<p>{__("Hide on Mobile", "wcb")}</p>
				<FormToggle
					checked={isHiddenOnMobile}
					onChange={toggleHiddenOnMobile}
				/>
			</div>
		</div>
	);
};

export default MyResponsiveConditionControl;
