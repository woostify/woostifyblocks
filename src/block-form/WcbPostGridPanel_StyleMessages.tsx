import { PanelBody, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";

type TabsHere = "Success" | "Error";

export type WCB_FORM_PANEL_STYLE_MESSAGES = {
	[K in TabsHere]: {
		color: string;
		backgroundColor: string;
		border: MyBorderControlData;
	};
};

export const WCB_FORM_PANEL_STYLE_MESSAGES_DEMO: WCB_FORM_PANEL_STYLE_MESSAGES =
	{
		Success: {
			color: "",
			backgroundColor: "",
			border: MY_BORDER_CONTROL_DEMO,
		},
		Error: {
			color: "",
			backgroundColor: "",
			border: MY_BORDER_CONTROL_DEMO,
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_STYLE_MESSAGES;
	setAttr__: (data: WCB_FORM_PANEL_STYLE_MESSAGES) => void;
}

const WcbPostGridPanel_StyleMessages: FC<Props> = ({
	panelData = WCB_FORM_PANEL_STYLE_MESSAGES_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const PanelTab: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Success", title: __("Success", "wcb") },
		{ name: "Error", title: __("Error", "wcb") },
	];

	const { Error, Success } = panelData;
	//
	const initialTabName: TabsHere = "Success";
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Messages", "wcb")}
		>
			<TabPanel
				className={`wcb-bodyControls__panel `}
				activeClass="active-tab"
				initialTabName={initialTabName}
				tabs={PanelTab}
			>
				{(tab) => (
					<div className="space-y-5">
						<MyColorPicker
							label={__("Text color", "wcb")}
							color={panelData[tab.name as TabsHere].color}
							onChange={(value) => {
								setAttr__({
									...panelData,
									[tab.name]: {
										...panelData[tab.name],
										color: value,
									},
								});
							}}
						/>
						<MyColorPicker
							label={__("Background color", "wcb")}
							color={panelData[tab.name as TabsHere].backgroundColor}
							onChange={(value) => {
								setAttr__({
									...panelData,
									[tab.name]: {
										...panelData[tab.name],
										backgroundColor: value,
									},
								});
							}}
						/>

						<MyDisclosure defaultOpen label="Border">
							<MyBorderControl
								borderControl={panelData[tab.name as TabsHere].border}
								setAttrs__border={(border: MyBorderControlData) => {
									setAttr__({
										...panelData,
										[tab.name]: {
											border,
										},
									});
								}}
							/>
						</MyDisclosure>
					</div>
				)}
			</TabPanel>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleMessages;
