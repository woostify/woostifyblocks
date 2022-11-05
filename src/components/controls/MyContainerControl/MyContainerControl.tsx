import { FormToggle, RangeControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import useGetDeviceType from "../../../hooks/useGetDeviceType";
import { HasResponsive } from "../MyBackgroundControl/types";
import MyLabelControl from "../MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../MyResponsiveToggle/MyResponsiveToggle";
import {
	// @ts-ignore
	__experimentalRadio as Radio,
	// @ts-ignore
	__experimentalRadioGroup as RadioGroup,
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

export type MyContainerControlData = {
	containerWidthType: "Full Width" | "Boxed" | "Custom";
	contentWidthType: "Boxed" | "Full Width";
	customWidth: HasResponsive<string>;
	contentBoxWidth: HasResponsive<string>;
	minHeight: HasResponsive<string | undefined>;
	htmlTag: React.ElementType<any>;
	overflow: React.CSSProperties["overflow"];
};
export const CONTAINER_CONTROL_DEMO: MyContainerControlData = {
	containerWidthType: "Boxed",
	contentWidthType: "Full Width",
	customWidth: { Desktop: "100%" },
	contentBoxWidth: { Desktop: "100%" },
	minHeight: { Desktop: undefined },
	htmlTag: "div",
	overflow: "visible",
};

const DEMO_CONTENT_WIDTH: MyContainerControlData["contentWidthType"][] = [
	"Full Width",
	"Boxed",
];
const DEMO_CONTAINER_WIDTH: MyContainerControlData["containerWidthType"][] = [
	"Full Width",
	"Boxed",
	"Custom",
];
const DEMO_OVERFLOW: MyContainerControlData["overflow"][] = [
	"visible",
	"hidden",
	"auto",
];

interface Props {
	className?: string;
	containerControl: MyContainerControlData;
	setAttrs__container: (data: MyContainerControlData) => void;
}
const MyContainerControl: FC<Props> = ({
	className = "space-y-5",
	containerControl = CONTAINER_CONTROL_DEMO,
	setAttrs__container,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		containerWidthType,
		contentWidthType,
		minHeight: minHeightProps,
		contentBoxWidth: contentBoxWidthProps,
		customWidth: customWidthProps,
		htmlTag,
		overflow,
	} = containerControl;
	const handleChangeContainerWidthType = (
		value: MyContainerControlData["containerWidthType"]
	) => {
		setAttrs__container({
			...containerControl,
			containerWidthType: value,
		});
	};
	const handleChangeContenWidthType = (
		value: MyContainerControlData["contentWidthType"]
	) => {
		setAttrs__container({
			...containerControl,
			contentWidthType: value,
		});
	};
	const handleChangeCustomWidth = (value: string) => {
		setAttrs__container({
			...containerControl,
			customWidth: {
				...customWidthProps,
				[deviceType]: value,
			},
		});
	};

	const handleChangeContentBoxWidth = (value: string) => {
		setAttrs__container({
			...containerControl,
			contentBoxWidth: {
				...contentBoxWidthProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeMinHeight = (value: string) => {
		setAttrs__container({
			...containerControl,
			minHeight: {
				...minHeightProps,
				[deviceType]: value,
			},
		});
	};
	const handleChangeHtmlTag = (value: MyContainerControlData["htmlTag"]) => {
		setAttrs__container({
			...containerControl,
			htmlTag: value,
		});
	};
	const handleChangeOverflow = (value: MyContainerControlData["overflow"]) => {
		setAttrs__container({
			...containerControl,
			overflow: value,
		});
	};

	const CUSTOM_WIDTH =
		customWidthProps[deviceType] ||
		customWidthProps.Tablet ||
		customWidthProps.Desktop;
	const CONTENT_BOX_WIDTH =
		contentBoxWidthProps[deviceType] ||
		contentBoxWidthProps.Tablet ||
		contentBoxWidthProps.Desktop;
	const MIN_HEIGHT =
		minHeightProps[deviceType] ||
		minHeightProps.Tablet ||
		minHeightProps.Desktop;

	const renderContainerWidthType = () => {
		return (
			<div>
				<p className="mb-2">{__("Container Width", "wcb")}</p>
				<RadioGroup
					onChange={handleChangeContainerWidthType}
					checked={containerWidthType}
				>
					{DEMO_CONTAINER_WIDTH.map((item) => {
						return (
							<Radio key={item} value={item}>
								{item}
							</Radio>
						);
					})}
				</RadioGroup>
			</div>
		);
	};

	const renderContenWidthType = () => {
		return (
			<div>
				<p className="mb-2">{__("Content Width", "wcb")}</p>
				<RadioGroup
					onChange={handleChangeContenWidthType}
					checked={contentWidthType}
				>
					{DEMO_CONTENT_WIDTH.map((item) => {
						return (
							<Radio key={item} value={item}>
								{item}
							</Radio>
						);
					})}
				</RadioGroup>
			</div>
		);
	};

	const renderOverflow = () => {
		return (
			<div>
				<p className="mb-2">{__("Overflow", "wcb")}</p>
				<RadioGroup onChange={handleChangeOverflow} checked={overflow}>
					{DEMO_OVERFLOW.map((item) => {
						return (
							<Radio className="capitalize" key={item} value={item}>
								{item}
							</Radio>
						);
					})}
				</RadioGroup>
			</div>
		);
	};

	const renderContentBoxWidth = () => {
		const units = [
			{ value: "px", label: "px", default: 1140 },
			{ value: "%", label: "%", default: 100 },
			{ value: "vw", label: "vw", default: 10 },
		];
		return (
			<div className="flex items-center justify-between">
				<MyLabelControl className="flex-shrink-0" hasResponsive>
					{__("Content Box Width", "wcb")}
				</MyLabelControl>
				<UnitControl
					className="flex-grow ml-3"
					units={units}
					value={CONTENT_BOX_WIDTH}
					onChange={handleChangeContentBoxWidth}
				/>
			</div>
		);
	};

	const renderCustomWidth = () => {
		const units = [
			{ value: "px", label: "px", default: 1140 },
			{ value: "%", label: "%", default: 100 },
			{ value: "vw", label: "vw", default: 10 },
		];
		return (
			<div className="flex items-center justify-between">
				<MyLabelControl className="flex-shrink-0" hasResponsive>
					{__("Custom Width", "wcb")}
				</MyLabelControl>
				<UnitControl
					className="flex-grow ml-3"
					units={units}
					value={CUSTOM_WIDTH}
					onChange={handleChangeCustomWidth}
				/>
			</div>
		);
	};

	const renderMinimumHeight = () => {
		const units = [
			{ value: "px", label: "px", default: 0 },
			{ value: "vh", label: "vh", default: 0 },
		];
		return (
			<div className="flex items-center justify-between">
				<MyLabelControl className="flex-shrink-0" hasResponsive>
					{__("Minimum Height", "wcb")}
				</MyLabelControl>
				<UnitControl
					className="flex-grow ml-3"
					units={units}
					value={MIN_HEIGHT}
					onChange={handleChangeMinHeight}
				/>
			</div>
		);
	};

	const renderHTMLTag = () => {
		const options: {
			label: React.ElementType<any>;
			value: React.ElementType<any>;
		}[] = [
			{ label: "div", value: "div" },
			{ label: "header", value: "header" },
			{ label: "footer", value: "footer" },
			{ label: "main", value: "main" },
			{ label: "article", value: "article" },
			{ label: "section", value: "section" },
			{ label: "aside", value: "aside" },
			{ label: "summary", value: "summary" },
			{ label: "figure", value: "figure" },
			{ label: "link", value: "link" },
			{ label: "nav", value: "nav" },
		];

		return (
			<div className="flow-root">
				<div className="flex justify-between items-center -mb-3">
					<MyLabelControl className="mb-4">
						{__("HTML Tag", "wcb")}
					</MyLabelControl>
					<SelectControl
						label={""}
						value={htmlTag as string}
						options={options as any}
						onChange={handleChangeHtmlTag as any}
						// @ts-ignore
						__nextHasNoMarginBottom={true}
						help={""}
					/>
				</div>
			</div>
		);
	};

	return (
		<div className={className}>
			{renderContainerWidthType()}
			{containerWidthType === "Custom" ? renderCustomWidth() : null}
			{containerWidthType === "Full Width" ? renderContenWidthType() : null}
			{containerWidthType === "Full Width" && contentWidthType === "Boxed"
				? renderContentBoxWidth()
				: null}
			{renderMinimumHeight()}
			{renderHTMLTag()}
			{renderOverflow()}
		</div>
	);
};

export default MyContainerControl;
