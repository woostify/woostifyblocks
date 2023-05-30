import { PanelBody, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";

type TabsHere = "Success" | "Error";

type A = {
	[K in TabsHere]: {
		color: string;
		backgroundColor: string;
		border: MyBorderControlData;
	};
};

export interface WCB_FORM_PANEL_STYLE_MESSAGES extends A {
	typography: MyTypographyControlData;
}

export const WCB_FORM_PANEL_STYLE_MESSAGES_DEMO: WCB_FORM_PANEL_STYLE_MESSAGES =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		Success: {
			color: "#0c4a6e",
			backgroundColor: "#f0f9ff",
			border: MY_BORDER_CONTROL_DEMO,
		},
		Error: {
			color: "#ef4444",
			backgroundColor: "#fef2f2",
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
	const PanelTab: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Success", title: __("Success", "wcb") },
		{ name: "Error", title: __("Error", "wcb") },
	];

	const initialTabName: TabsHere = "Success";
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Messages", "wcb")}
		>
			<div className="space-y-4">
				<MyTypographyControl
					typographyControl={panelData.typography || TYPOGRAPHY_CONTROL_DEMO}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>

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
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleMessages;
