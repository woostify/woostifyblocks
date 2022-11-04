import { FormToggle, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";

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
	className = "space-y-4",
	responsiveConditionControl = RESPONSIVE_CONDITON_DEMO,
	setAttrs__responsiveCondition,
}) => {
	const { isHiddenOnDesktop, isHiddenOnMobile, isHiddenOnTablet } =
		responsiveConditionControl;

	const toggleHiddenOnDesktop = (e: boolean) => {
		setAttrs__responsiveCondition({
			...responsiveConditionControl,
			isHiddenOnDesktop: e,
		});
	};
	const toggleHiddenOnTablet = (e: boolean) => {
		setAttrs__responsiveCondition({
			...responsiveConditionControl,
			isHiddenOnTablet: e,
		});
	};
	const toggleHiddenOnMobile = (e: boolean) => {
		setAttrs__responsiveCondition({
			...responsiveConditionControl,
			isHiddenOnMobile: e,
		});
	};
	return (
		<div className={className}>
			<ToggleControl
				label={__("Hide on Desktop", "wcb")}
				checked={isHiddenOnDesktop}
				onChange={toggleHiddenOnDesktop}
				className="mb-0"
			/>
			<ToggleControl
				label={__("Hide on Tablet", "wcb")}
				checked={isHiddenOnTablet}
				onChange={toggleHiddenOnTablet}
			/>
			<ToggleControl
				label={__("Hide on Mobile", "wcb")}
				checked={isHiddenOnMobile}
				onChange={toggleHiddenOnMobile}
			/>
		</div>
	);
};

export default MyResponsiveConditionControl;
