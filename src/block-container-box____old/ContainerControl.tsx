import { FormToggle, RangeControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";

import {
	// @ts-ignore
	__experimentalRadio as Radio,
	// @ts-ignore
	__experimentalRadioGroup as RadioGroup,
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";

export type ContainerBox_Container_Control = {
	customWidth: HasResponsive<string>;
	minHeight: HasResponsive<string | undefined>;
	htmlTag: React.ElementType<any>;
	overflow: React.CSSProperties["overflow"];
};
export const CONTAINER_BOX_CONTAINER_CONTROL_DEMO: ContainerBox_Container_Control =
	{
		customWidth: { Desktop: "100%" },
		minHeight: { Desktop: undefined },
		htmlTag: "div",
		overflow: "visible",
	};

const DEMO_OVERFLOW: ContainerBox_Container_Control["overflow"][] = [
	"visible",
	"hidden",
	"auto",
];

interface Props {
	className?: string;
	containerControl: ContainerBox_Container_Control;
	setAttrs__container: (data: ContainerBox_Container_Control) => void;
}
const ContainerControl: FC<Props> = ({
	className = "space-y-5",
	containerControl = CONTAINER_BOX_CONTAINER_CONTROL_DEMO,
	setAttrs__container,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		minHeight: minHeightProps,
		customWidth: customWidthProps,
		htmlTag,
		overflow,
	} = containerControl;

	const handleChangeCustomWidth = (value: string) => {
		setAttrs__container({
			...containerControl,
			customWidth: {
				...customWidthProps,
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
	const handleChangeHtmlTag = (
		value: ContainerBox_Container_Control["htmlTag"]
	) => {
		setAttrs__container({
			...containerControl,
			htmlTag: value,
		});
	};
	const handleChangeOverflow = (
		value: ContainerBox_Container_Control["overflow"]
	) => {
		setAttrs__container({
			...containerControl,
			overflow: value,
		});
	};

	const CUSTOM_WIDTH =
		customWidthProps[deviceType] ||
		customWidthProps.Tablet ||
		customWidthProps.Desktop;

	const MIN_HEIGHT =
		minHeightProps[deviceType] ||
		minHeightProps.Tablet ||
		minHeightProps.Desktop;

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

	const renderCustomWidth = () => {
		const units = [
			{ value: "%", label: "%", default: 100 },
			{ value: "px", label: "px", default: 1140 },
			{ value: "rem", label: "rem", default: 10 },
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
					className="components-spacing-sizes-control__custom-value-input flex-grow ml-3"
					units={units}
					value={MIN_HEIGHT}
					onChange={handleChangeMinHeight}
					// size={"__unstable-large"}
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
			{renderCustomWidth()}
			{renderMinimumHeight()}
			{renderHTMLTag()}
			{renderOverflow()}
		</div>
	);
};

export default ContainerControl;
