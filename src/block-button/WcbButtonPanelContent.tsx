import {
	Dashicon,
	Dropdown,
	Icon,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import ResetButton from "../components/controls/ResetButton";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { ICONS_KEYS } from "./types";

export interface WCB_BUTTON_PANEL_CONTENT {
	enableIcon: boolean;
	iconName?: Dashicon.Icon;
	iconPosition: "top" | "left" | "right" | "bottom";
	link: string;
	openInNewWindow: boolean;
	isHiddenText: boolean;
	addNofollowToLink: boolean;
}

export const WCB_BUTTON_PANEL_CONTENT_DEMO: WCB_BUTTON_PANEL_CONTENT = {
	enableIcon: true,
	iconName: "admin-media",
	iconPosition: "left",
	link: "#",
	openInNewWindow: false,
	isHiddenText: false,
	addNofollowToLink: true,
};

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
		iconName,
		iconPosition,
		isHiddenText,
		link,
		openInNewWindow,
	} = panelData;

	const PLANS_DEMO: MyRadioItem<WCB_BUTTON_PANEL_CONTENT["iconPosition"]>[] = [
		{ name: "left", icon: "Left" },
		{ name: "right", icon: "Right" },
		{ name: "top", icon: "Top" },
		{ name: "bottom", icon: "Bottom" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Content", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable Icon", "wcb")}
					checked={enableIcon}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/>

				<Dropdown
					position="middle left"
					className="w-full"
					renderToggle={({ isOpen, onToggle }) => (
						<div className="flex items-center space-x-4">
							<button
								className="py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg "
								onClick={onToggle}
							>
								<span className="mr-3">{__("Icon:", "wcb")}</span>
								{iconName ? (
									<Dashicon size={20} icon={iconName} />
								) : (
									<strong>{__("None", "wcb")}</strong>
								)}
							</button>
							<ResetButton
								onClick={() => {
									setAttr__({
										...panelData,
										iconName: undefined,
									});
								}}
							/>
						</div>
					)}
					renderContent={({ onToggle, onClose }) => (
						<div className="p-2.5 max-h-96 w-72 overflow-auto bg-gray-900 grid grid-cols-3 gap-2">
							{ICONS_KEYS.map((item) => (
								<div
									key={item}
									className={`h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer ${
										item === iconName ? "ring-2" : ""
									}`}
									onClick={() => {
										setAttr__({
											...panelData,
											iconName: item === iconName ? undefined : item,
										});
										// onClose();
									}}
								>
									<div className="grid">
										<div className="text-center overflow-hidden ">
											<Dashicon size={16} icon={item} />
											<p className="block mt-2.5 truncate text-gray-300 text-xs">
												{item}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				/>

				<MyRadioGroup
					label={__("Icon position", "wcb")}
					value={iconPosition}
					onChange={(value) => {
						setAttr__({
							...panelData,
							iconPosition: value as typeof iconPosition,
						});
					}}
					plans={PLANS_DEMO}
				/>

				<TextControl
					label={__("Link", "wcb")}
					type="text"
					value={link}
					onChange={(value) => {
						setAttr__({ ...panelData, link: value });
					}}
				/>

				<ToggleControl
					label={__("Open in new window", "wcb")}
					checked={openInNewWindow}
					onChange={(checked) => {
						setAttr__({ ...panelData, openInNewWindow: checked });
					}}
				/>

				<ToggleControl
					label={__('Add "nofollow" to link', "wcb")}
					checked={addNofollowToLink}
					onChange={(checked) => {
						setAttr__({ ...panelData, addNofollowToLink: checked });
					}}
				/>

				<ToggleControl
					label={__("Hidden text", "wcb")}
					checked={isHiddenText}
					onChange={(checked) => {
						setAttr__({ ...panelData, isHiddenText: checked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonPanelContent;
