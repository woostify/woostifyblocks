import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
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
}

export const WCB_HEADING_PANEL_CONTENT_DEMO: WCB_HEADING_PANEL_CONTENT = {
	textAlignment: { Desktop: "left" },
	headingTag: "h2",
	showHeading: true,
	showSeparator: false,
	showSubHeading: false,
};

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
			title={__("Content", "wcb")}
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
				label={__("Show Heading", "wcb")}
				checked={showHeading}
				onChange={toggleHeading}
			/>

			<ToggleControl
				label={__("Show Sub-heading", "wcb")}
				checked={showSubHeading}
				onChange={toggleSubHeading}
			/>
			<ToggleControl
				label={__("Show Separator", "wcb")}
				checked={showSeparator}
				onChange={toggleSeparator}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelContent;
