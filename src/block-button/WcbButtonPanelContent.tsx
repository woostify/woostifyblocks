import {
	Dashicon,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import { __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";
import React, { FC, CSSProperties } from "react";
import { MyIconKey } from "../components/controls/MyIcon";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";

export interface WCB_BUTTON_PANEL_CONTENT {
	enableIcon: boolean;
	icon: MyIcon;
	iconPosition: "top" | "left" | "right" | "bottom";
	link: string;
	openInNewWindow: boolean;
	isHiddenText: boolean;
	addNofollowToLink: boolean;
}

export const WCB_BUTTON_PANEL_CONTENT_DEMO_COMMON_NO_ICON: WCB_BUTTON_PANEL_CONTENT =
	{
		enableIcon: false,
		iconPosition: "left",
		link: "",
		openInNewWindow: false,
		isHiddenText: false,
		addNofollowToLink: true,
		icon: DEFAULT_MY_ICON,
	};

export const WCB_BUTTON_PANEL_CONTENT_DEMO_with_leading_icon: WCB_BUTTON_PANEL_CONTENT =
	{
		enableIcon: true,
		iconPosition: "left",
		link: "#",
		openInNewWindow: false,
		isHiddenText: false,
		addNofollowToLink: true,
		icon: DEFAULT_MY_ICON,
	};
export const WCB_BUTTON_PANEL_CONTENT_DEMO_with_trailing_icons: WCB_BUTTON_PANEL_CONTENT =
	{
		enableIcon: true,
		iconPosition: "right",
		link: "#",
		openInNewWindow: false,
		isHiddenText: false,
		addNofollowToLink: true,
		icon: DEFAULT_MY_ICON,
	};

export const WCB_BUTTON_PANEL_CONTENT_DEMO_CIRCULAR: WCB_BUTTON_PANEL_CONTENT =
	{
		enableIcon: true,
		iconPosition: "left",
		link: "#",
		openInNewWindow: false,
		isHiddenText: true,
		addNofollowToLink: true,
		icon: DEFAULT_MY_ICON,
	};

export const WCB_BUTTON_PANEL_CONTENT_DEMO =
	WCB_BUTTON_PANEL_CONTENT_DEMO_COMMON_NO_ICON;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTON_PANEL_CONTENT;
	setAttr__: (data: WCB_BUTTON_PANEL_CONTENT) => void;
}

const WcbButtonPanelContent: FC<Props> = ({
	panelData = WCB_BUTTON_PANEL_CONTENT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		addNofollowToLink,
		enableIcon,
		icon,
		iconPosition,
		isHiddenText,
		link,
		openInNewWindow
	} = panelData;

	const PLANS_DEMO: MyRadioItem<WCB_BUTTON_PANEL_CONTENT["iconPosition"]>[] = [
		{ name: "left", icon: "Left" },
		{ name: "right", icon: "Right" },
		{ name: "top", icon: "Top" },
		{ name: "bottom", icon: "Bottom" },
	];

	const url = panelData.link;
	const opensInNewTab = panelData.openInNewWindow;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Content", "boostify-blocks")}
			className="WcbButtonPanelContent"
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable Icon", "boostify-blocks")}
					checked={enableIcon}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/>

				{
					enableIcon && (
						<>
							<SelecIcon
								iconData={icon}
								onChange={(value) => {
									setAttr__({
										...panelData,
										icon: value,
									});
								}}
							/>

							<MyRadioGroup
								label={__("Icon position", "boostify-blocks")}
								value={iconPosition}
								onChange={(value) => {
									setAttr__({
										...panelData,
										iconPosition: value as typeof iconPosition,
									});
								}}
								hasResponsive={false}
								plans={PLANS_DEMO}
							/>
						</>
					)
				}

				<div>
					<MyLabelControl className="mb-0">{__("Link", "boostify-blocks")}</MyLabelControl>

					<LinkControl
						className="WcbButtonPanelContent__inline-link-input"
						value={{ url }}
						onChange={({
							url: newURL = "",
						}) => {
							setAttr__({
								...panelData,
								link: newURL,
							});
						}}
						onRemove={() => {
							setAttr__({
								...panelData,
								link: "",
								openInNewWindow: false,
								addNofollowToLink: false,
							});
						}}
					/>
				</div>

				{/* <TextControl
					label={__("Link", "boostify-blocks")}
					type="text"
					value={link}
					onChange={(value) => {
						setAttr__({ ...panelData, link: value });
					}}
				/>

				<ToggleControl
					label={__("Open in new window", "boostify-blocks")}
					checked={openInNewWindow}
					onChange={(checked) => {
						setAttr__({ ...panelData, openInNewWindow: checked });
					}}
				/> */}

				<ToggleControl
					label={__('Add "nofollow" to link', "boostify-blocks")}
					checked={addNofollowToLink}
					onChange={(checked) => {
						setAttr__({ ...panelData, addNofollowToLink: checked });
					}}
				/>

				<ToggleControl
					label={__("Hidden text", "boostify-blocks")}
					checked={isHiddenText}
					onChange={(checked) => {
						setAttr__({ ...panelData, isHiddenText: checked });
					}}
				/>
				<ToggleControl
					label={__("Open in new windown", "boostify-blocks")}
					checked={openInNewWindow}
					onChange={(checked) => {
						setAttr__({ ...panelData, openInNewWindow: checked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonPanelContent;
