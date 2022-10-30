import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties, Fragment } from "react";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import {
	FLEX_ALIGNITEMS_DEMO,
	FLEX_DIRECTIONS_DEMO,
	FLEX_JUSTIFY_CONTENT_DEMO,
	FLEX_PROPERTIES_CONTROL_DEMO,
	FLEX_WRAP_DEMO,
	MyFlexPropertiesControlData,
} from "./types";
import { RadioGroup } from "@headlessui/react";
import MyRadioGroup from "../MyRadioGroup";

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

	const FLEX_DIRECTION =
		flexDirectionProps[deviceType] ||
		flexDirectionProps.Tablet ||
		flexDirectionProps.Desktop;
	const ALIGN_ITEMS =
		alignItemsProps[deviceType] ||
		alignItemsProps.Tablet ||
		alignItemsProps.Desktop;
	const JUSTIFY_CONTENT =
		justifyContentProps[deviceType] ||
		justifyContentProps.Tablet ||
		justifyContentProps.Desktop;
	const FLEX_WRAP =
		flexWrapProps[deviceType] || flexWrapProps.Tablet || flexWrapProps.Desktop;

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
				plans={FLEX_DIRECTIONS_DEMO}
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
				plans={FLEX_ALIGNITEMS_DEMO}
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
				plans={FLEX_JUSTIFY_CONTENT_DEMO}
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
				plans={FLEX_WRAP_DEMO}
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
