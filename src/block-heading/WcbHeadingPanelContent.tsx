import { FormToggle, PanelBody } from "@wordpress/components";
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
	headingTag: keyof JSX.IntrinsicElements;
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

interface Props {
	panelContentData: WCB_HEADING_PANEL_CONTENT;
	setAttr__panelContentData: (data: WCB_HEADING_PANEL_CONTENT) => void;
}

const WcbHeadingPanelContent: FC<Props> = ({
	panelContentData = WCB_HEADING_PANEL_CONTENT_DEMO,
	setAttr__panelContentData,
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
	const handleChangeTag = (selected: keyof JSX.IntrinsicElements) => {
		setAttr__panelContentData({
			...panelContentData,
			headingTag: selected,
		});
	};
	const toggleHeading = (e: React.FormEvent<HTMLInputElement>) => {
		setAttr__panelContentData({
			...panelContentData,
			showHeading: e.currentTarget.checked,
		});
	};
	const toggleSubHeading = (e: React.FormEvent<HTMLInputElement>) => {
		setAttr__panelContentData({
			...panelContentData,
			showSubHeading: e.currentTarget.checked,
		});
	};
	const toggleSeparator = (e: React.FormEvent<HTMLInputElement>) => {
		setAttr__panelContentData({
			...panelContentData,
			showSeparator: e.currentTarget.checked,
		});
	};
	//

	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={false}
			title={__("Content", "wcb")}
		>
			<MyTextAlignControl
				textAlignment={TEXT_ALIGNMENT}
				onChange={handleChangeTextAlignment}
			/>
			{/*  */}
			<MyHeadingTagControl tag={headingTag} onChange={handleChangeTag} />
			{/*  */}
			<div className="flex justify-between items-center">
				<p>{__("Show Heading", "wcb")}</p>
				<FormToggle checked={showHeading} onChange={toggleHeading} />
			</div>
			<div className="flex justify-between items-center">
				<p>{__("Show Sub-heading", "wcb")}</p>
				<FormToggle checked={showSubHeading} onChange={toggleSubHeading} />
			</div>
			{/*  */}
			<div className="flex justify-between items-center">
				<p>{__("Show Separator", "wcb")}</p>
				<FormToggle checked={showSeparator} onChange={toggleSeparator} />
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelContent;
