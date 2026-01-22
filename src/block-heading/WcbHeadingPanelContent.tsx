import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_HEADING_PANEL_CONTENT {
	textAlignment: HasResponsive<TextAlignment>;
	headingTag: keyof HTMLElementTagNameMap;
	showHeading: boolean;
	showSubHeading: boolean;
	showSeparator: boolean;
	separatorPosition: "top" | "middle" | "bottom";
}

export const WCB_HEADING_PANEL_CONTENT_DEMO: WCB_HEADING_PANEL_CONTENT = {
	textAlignment: { Desktop: "left" },
	headingTag: "h2",
	showHeading: true,
	showSeparator: false,
	showSubHeading: false,
	separatorPosition: "middle",
};

const PLANS_SEPARATOR_POSTION: MyRadioItem<
	WCB_HEADING_PANEL_CONTENT["separatorPosition"]
>[] = [
	{ name: "top", icon: "Top" },
	{ name: "middle", icon: "Middle" },
	{ name: "bottom", icon: "Bottom" },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelContentData: WCB_HEADING_PANEL_CONTENT;
	setAttr__panelContentData: (data: WCB_HEADING_PANEL_CONTENT) => void;
}

const WcbHeadingPanelContent: FC<Props> = ({
	panelContentData = WCB_HEADING_PANEL_CONTENT_DEMO,
	setAttr__panelContentData,
	onToggle,
	opened,
	initialOpen,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		textAlignment,
		headingTag,
		showHeading,
		showSeparator,
		showSubHeading,
		separatorPosition,
	} = panelContentData;
	const TEXT_ALIGNMENT =
		textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__panelContentData({
			...panelContentData,
			textAlignment: {
				...textAlignment,
				[deviceType]: selected,
			},
		});
	};
	const handleChangeTag = (selected: keyof HTMLElementTagNameMap) => {
		setAttr__panelContentData({
			...panelContentData,
			headingTag: selected,
		});
	};
	const toggleHeading = (e: boolean) => {
		setAttr__panelContentData({
			...panelContentData,
			showHeading: e,
		});
	};
	const toggleSubHeading = (e: boolean) => {
		setAttr__panelContentData({
			...panelContentData,
			showSubHeading: e,
		});
	};
	const toggleSeparator = (e: boolean) => {
		setAttr__panelContentData({
			...panelContentData,
			showSeparator: e,
		});
	};
	//

	return (
		<PanelBody
			className={"space-y-5"}
			title={__("Content", "boostify-blocks")}
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
		>
			<MyTextAlignControl
				textAlignment={TEXT_ALIGNMENT}
				onChange={handleChangeTextAlignment}
			/>
			{/*  */}
			<MyHeadingTagControl tag={headingTag} onChange={handleChangeTag} />
			{/*  */}
			<ToggleControl
				label={__("Show Heading", "boostify-blocks")}
				checked={showHeading}
				onChange={toggleHeading}
			/>

			<ToggleControl
				label={__("Show Sub-heading", "boostify-blocks")}
				checked={showSubHeading}
				onChange={toggleSubHeading}
			/>
			<ToggleControl
				label={__("Show Separator", "boostify-blocks")}
				checked={showSeparator}
				onChange={toggleSeparator}
			/>
			{showSeparator && (
				<MyRadioGroup
					plans={PLANS_SEPARATOR_POSTION}
					value={separatorPosition}
					hasResponsive={false}
					label={__("Separator position", "boostify-blocks")}
					onChange={(value) => {
						setAttr__panelContentData({
							...panelContentData,
							separatorPosition:
								value as WCB_HEADING_PANEL_CONTENT["separatorPosition"],
						});
					}}
				/>
			)}
		</PanelBody>
	);
};

export default WcbHeadingPanelContent;
