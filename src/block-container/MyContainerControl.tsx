import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useEffect } from "react";
import {} from "@wordpress/components";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import {
	MY_HORIZOLTAL_UNITS,
	MY_VERTICAL_UNITS,
} from "../components/controls/MyDimensionsControl/MyDimensionsControl";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE } from "../components/controls/MySpacingSizesControl/SpacingInputControl";
import HelpText from "../components/controls/HelpText";
// @ts-ignore
import { withColorContext, useSetting } from "@wordpress/block-editor";

export type MyContainerControlData = {
	containerWidthType: "Full Width" | "Boxed" | "Custom";
	contentWidthType: "Boxed" | "Full Width";
	customWidth: HasResponsive<string>;
	contentBoxWidth: HasResponsive<string>;
	minHeight: HasResponsive<string | undefined>;
	htmlTag: React.ElementType<any>;
	overflow: NonNullable<React.CSSProperties["overflow"]>;
};
export const CONTAINER_CONTROL_DEMO: MyContainerControlData = {
	containerWidthType: "Full Width",
	contentWidthType: "Boxed",
	// tai sao ko co Tablet? - vi muon th Tablet follow theo Desktop,
	customWidth: { Desktop: "100%", Mobile: "100%" },
	contentBoxWidth: { Desktop: "", Mobile: "" },
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
	showContainerWidthType: boolean;
}
const MyContainerControl: FC<Props> = ({
	className = "space-y-5",
	containerControl = CONTAINER_CONTROL_DEMO,
	setAttrs__container,
	showContainerWidthType,
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
	//

	useEffect(() => {
		if (!showContainerWidthType && containerWidthType !== "Custom") {
			handleChangeContainerWidthType("Custom");
		}
	}, [showContainerWidthType]);

	const handleChangeContainerWidthType = (value: string) => {
		setAttrs__container({
			...containerControl,
			containerWidthType: value as MyContainerControlData["containerWidthType"],
		});
	};

	const handleChangeContenWidthType = (value: string) => {
		setAttrs__container({
			...containerControl,
			contentWidthType: value as MyContainerControlData["contentWidthType"],
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

	const { currentDeviceValue: CUSTOM_WIDTH } = getValueFromAttrsResponsives(
		customWidthProps,
		deviceType
	);

	let { currentDeviceValue: CONTENT_BOX_WIDTH } = getValueFromAttrsResponsives(
		contentBoxWidthProps,
		deviceType
	);

	// defaultContentWidth là setting trong trang woosify setting
	// window.wcbLayoutGlobalSettings la global setting của full-site-editor or cua wootify theme neu co
	if (!CONTENT_BOX_WIDTH) {
		CONTENT_BOX_WIDTH =
			DEMO_WCB_GLOBAL_VARIABLES.defaultContentWidth ||
			window.wcbLayoutGlobalSettings.contentSize;
	}

	const { currentDeviceValue: MIN_HEIGHT } = getValueFromAttrsResponsives(
		minHeightProps,
		deviceType
	);

	const renderContainerWidthType = () => {
		const plans: MyRadioItem<MyContainerControlData["containerWidthType"]>[] =
			DEMO_CONTAINER_WIDTH.map((item) => ({
				name: item,
				icon: item === "Boxed" ? "Wide" : item,
			}));
		return (
			<MyRadioGroup
				plans={plans}
				label={__("Container Width", "wcb")}
				onChange={handleChangeContainerWidthType}
				contentClassName="capitalize mt-3"
				value={containerWidthType}
				hasResponsive={false}
			/>
		);
	};

	const renderContenWidthType = () => {
		const plans: MyRadioItem<MyContainerControlData["contentWidthType"]>[] =
			DEMO_CONTENT_WIDTH.map((item) => ({
				name: item,
				icon: item,
			}));
		return (
			<MyRadioGroup
				plans={plans}
				label={__("Content Width", "wcb")}
				onChange={handleChangeContenWidthType}
				contentClassName="capitalize mt-3"
				value={contentWidthType}
				hasResponsive={false}
			/>
		);
	};

	const renderOverflow = () => {
		const plans: MyRadioItem[] = DEMO_OVERFLOW.map((item) => ({
			name: item,
			icon: item,
		}));
		return (
			<MyRadioGroup
				plans={plans}
				label={__("Overflow", "wcb")}
				onChange={handleChangeOverflow}
				contentClassName="capitalize mt-3"
				value={overflow}
			/>
		);
	};

	const renderContentBoxWidth = () => {
		return (
			<div>
				<MySpacingSizesControl
					onChange={handleChangeContentBoxWidth}
					value={CONTENT_BOX_WIDTH || "0"}
					label={__("Content Box Width", "wcb")}
					hasResponsive={true}
					units={MY_HORIZOLTAL_UNITS}
					customUnitsValueSettings={MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE}
				/>
				<HelpText>
					{__(
						"Default content box width " +
							DEMO_WCB_GLOBAL_VARIABLES.defaultContentWidth
					)}
				</HelpText>
			</div>
		);
	};

	const renderCustomWidth = () => {
		return (
			<MySpacingSizesControl
				onChange={handleChangeCustomWidth}
				value={CUSTOM_WIDTH || "0"}
				label={__("Custom Width", "wcb")}
				hasResponsive={true}
				units={MY_HORIZOLTAL_UNITS}
				customUnitsValueSettings={MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE}
			/>
		);
	};

	const renderMinimumHeight = () => {
		return (
			<MySpacingSizesControl
				onChange={handleChangeMinHeight}
				value={MIN_HEIGHT || "0"}
				label={__("Minimum Height", "wcb")}
				hasResponsive={true}
				units={MY_VERTICAL_UNITS}
				customUnitsValueSettings={MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE}
			/>
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
			{showContainerWidthType && renderContainerWidthType()}
			{containerWidthType === "Custom" ? renderCustomWidth() : null}
			{/* {containerWidthType !== "Custom" ? renderContenWidthType() : null} */}
			{renderContenWidthType()}
			{/* {containerWidthType !== "Custom" && contentWidthType === "Boxed" */}
			{contentWidthType === "Boxed" ? renderContentBoxWidth() : null}
			{renderMinimumHeight()}
			{renderHTMLTag()}
			{renderOverflow()}
		</div>
	);
};

export default MyContainerControl;
