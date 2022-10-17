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
			<RadioGroup
				value={FLEX_DIRECTION}
				onChange={handleChangeFlexDirectionType}
			>
				<RadioGroup.Label className="">
					<MyLabelControl hasResponsive>
						{__("Flex Direction", "wcb")}
					</MyLabelControl>
				</RadioGroup.Label>
				<div className="mt-3 relative flex gap-1.5">
					{FLEX_DIRECTIONS_DEMO.map((item) => {
						return (
							<RadioGroup.Option
								key={item.name}
								value={item.name}
								as={Fragment}
							>
								{({ checked }) => (
									<div
										title={item.name}
										className={`flex flex-1 items-center justify-center p-1 max-w-xs bg-white border rounded-lg cursor-pointer ${
											checked
												? "bg-sky-50 border-sky-400 text-sky-500"
												: "text-slate-300 border-slate-300 hover:border-slate-400"
										}`}
									>
										<div
											className="scale-75"
											dangerouslySetInnerHTML={{ __html: item.icon }}
										></div>
									</div>
								)}
							</RadioGroup.Option>
						);
					})}
				</div>
			</RadioGroup>
		);
	};

	const renderFlexAlignItems = () => {
		return (
			<RadioGroup value={ALIGN_ITEMS} onChange={handleChangeAlignItems}>
				<RadioGroup.Label className="">
					<MyLabelControl hasResponsive>
						{__("Align Items", "wcb")}
					</MyLabelControl>
				</RadioGroup.Label>
				<div className="mt-3 relative flex gap-1.5">
					{FLEX_ALIGNITEMS_DEMO.map((item) => {
						return (
							<RadioGroup.Option
								key={item.name}
								value={item.name}
								as={Fragment}
							>
								{({ checked }) => (
									<div
										title={item.name}
										className={`flex flex-1 items-center justify-center p-1 max-w-xs bg-white border rounded-lg cursor-pointer ${
											checked
												? "bg-sky-50 border-sky-400 text-sky-500"
												: "text-slate-300 border-slate-300 hover:border-slate-400"
										}`}
										dangerouslySetInnerHTML={{ __html: item.icon }}
									></div>
								)}
							</RadioGroup.Option>
						);
					})}
				</div>
			</RadioGroup>
		);
	};

	const renderFlexJustifyContent = () => {
		return (
			<RadioGroup value={JUSTIFY_CONTENT} onChange={handleChangeJustifyContent}>
				<RadioGroup.Label className="">
					<MyLabelControl hasResponsive>
						{__("Justify Content", "wcb")}
					</MyLabelControl>
				</RadioGroup.Label>
				<div className="mt-3 relative grid grid-cols-4 gap-1.5">
					{FLEX_JUSTIFY_CONTENT_DEMO.map((item) => {
						return (
							<RadioGroup.Option
								key={item.name}
								value={item.name}
								as={Fragment}
							>
								{({ checked }) => (
									<div
										title={item.name}
										className={`flex flex-1 items-center justify-center p-1 max-w-xs bg-white border rounded-lg cursor-pointer ${
											checked
												? "bg-sky-50 border-sky-400 text-sky-500"
												: "text-slate-300 border-slate-300 hover:border-slate-400"
										}`}
										dangerouslySetInnerHTML={{ __html: item.icon }}
									></div>
								)}
							</RadioGroup.Option>
						);
					})}
				</div>
			</RadioGroup>
		);
	};

	const renderFlexWrap = () => {
		return (
			<RadioGroup value={FLEX_WRAP} onChange={handleChangeFlexWrap}>
				<RadioGroup.Label className="">
					<MyLabelControl hasResponsive>
						{__("Flex Wrap", "wcb")}
					</MyLabelControl>
				</RadioGroup.Label>
				<div className="mt-3 relative grid grid-cols-4 gap-1.5">
					{FLEX_WRAP_DEMO.map((item) => {
						return (
							<RadioGroup.Option
								key={item.name}
								value={item.name}
								as={Fragment}
							>
								{({ checked }) => (
									<div
										title={item.name}
										className={`flex flex-1 items-center justify-center p-1 max-w-xs bg-white border rounded-lg cursor-pointer ${
											checked
												? "bg-sky-50 border-sky-400 text-sky-500"
												: "text-slate-300 border-slate-300 hover:border-slate-400"
										}`}
										dangerouslySetInnerHTML={{ __html: item.icon }}
									></div>
								)}
							</RadioGroup.Option>
						);
					})}
				</div>
			</RadioGroup>
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
