import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import {
	PLANS_FLEX_ALIGNITEMS_DEMO,
	PLANS_FLEX_DIRECTIONS_DEMO,
	PLANS_FLEX_JUSTIFY_CONTENT_DEMO,
	FLEX_PROPERTIES_CONTROL_DEMO,
	PLANS_FLEX_WRAP_DEMO,
	MyFlexPropertiesControlData,
} from "./types";
import MyRadioGroup from "../MyRadioGroup";
import getValueFromAttrsResponsives from "../../../utils/getValueFromAttrsResponsives";

interface Props {
	className?: string;
	flexPropertiesControl: MyFlexPropertiesControlData;
	setAttrs__flexProperties: (data: MyFlexPropertiesControlData) => void;
}
const MyFlexPropertiesControl: FC<Props> = ({
	className = "space-y-5",
	flexPropertiesControl = FLEX_PROPERTIES_CONTROL_DEMO,
	setAttrs__flexProperties,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		flexDirection: flexDirectionProps,
		alignItems: alignItemsProps,
		justifyContent: justifyContentProps,
		flexWrap: flexWrapProps,
	} = flexPropertiesControl;

	const { currentDeviceValue: FLEX_DIRECTION } = getValueFromAttrsResponsives(
		flexDirectionProps,
		deviceType
	);

	const { currentDeviceValue: ALIGN_ITEMS } = getValueFromAttrsResponsives(
		alignItemsProps,
		deviceType
	);

	const { currentDeviceValue: JUSTIFY_CONTENT } = getValueFromAttrsResponsives(
		justifyContentProps,
		deviceType
	);

	const { currentDeviceValue: FLEX_WRAP } = getValueFromAttrsResponsives(
		flexWrapProps,
		deviceType
	);

	//
	const handleChangeFlexDirectionType = (
		value: CSSProperties["flexDirection"]
	) => {
		setAttrs__flexProperties({
			...flexPropertiesControl,
			flexDirection: {
				...flexDirectionProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeAlignItems = (value: CSSProperties["alignItems"]) => {
		setAttrs__flexProperties({
			...flexPropertiesControl,
			alignItems: {
				...alignItemsProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeJustifyContent = (
		value: CSSProperties["justifyContent"]
	) => {
		setAttrs__flexProperties({
			...flexPropertiesControl,
			justifyContent: {
				...justifyContentProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeFlexWrap = (value: CSSProperties["flexWrap"]) => {
		setAttrs__flexProperties({
			...flexPropertiesControl,
			flexWrap: {
				...flexWrapProps,
				[deviceType]: value,
			},
		});
	};

	//
	const renderFlexDirectionType = () => {
		return (
			<MyRadioGroup
				label={__("Flex Direction", "wcb")}
				// @ts-ignore
				onChange={handleChangeFlexDirectionType}
				plans={PLANS_FLEX_DIRECTIONS_DEMO}
				value={FLEX_DIRECTION}
			/>
		);
	};

	const renderFlexAlignItems = () => {
		return (
			<MyRadioGroup
				label={__("Align Items", "wcb")}
				// @ts-ignore
				onChange={handleChangeAlignItems}
				plans={PLANS_FLEX_ALIGNITEMS_DEMO}
				value={ALIGN_ITEMS}
			/>
		);
	};

	const renderFlexJustifyContent = () => {
		return (
			<MyRadioGroup
				label={__("Justify Content", "wcb")}
				// @ts-ignore
				onChange={handleChangeJustifyContent}
				plans={PLANS_FLEX_JUSTIFY_CONTENT_DEMO}
				value={JUSTIFY_CONTENT}
			/>
		);
	};

	const renderFlexWrap = () => {
		return (
			<MyRadioGroup
				label={__("Flex Wrap", "wcb")}
				// @ts-ignore
				onChange={handleChangeFlexWrap}
				plans={PLANS_FLEX_WRAP_DEMO}
				value={FLEX_WRAP}
			/>
		);
	};

	return (
		<div className={className}>
			{renderFlexDirectionType()}
			{renderFlexAlignItems()}
			{renderFlexJustifyContent()}
			{renderFlexWrap()}
		</div>
	);
};

export default MyFlexPropertiesControl;
