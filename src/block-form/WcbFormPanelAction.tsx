import {
	Notice,
	PanelBody,
	TabPanel,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";

type TabsHere = "To" | "CC" | "BCC";

export type WCB_FORM_PANEL_ACTION = {
	main: {
		[K in TabsHere]: {
			email: string;
		};
	};
	subject: string;
};

export const WCB_FORM_PANEL_ACTION_DEMO: WCB_FORM_PANEL_ACTION = {
	main: {
		To: { email: "" },
		BCC: { email: "" },
		CC: { email: "" },
	},
	subject: "Wootify subject",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_ACTION;
	setAttr__: (data: WCB_FORM_PANEL_ACTION) => void;
}

const WcbFormPanelAction: FC<Props> = ({
	panelData = WCB_FORM_PANEL_ACTION_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { subject, main } = panelData;

	const PanelTab: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "To", title: __("To", "wcb") },
		{ name: "CC", title: __("CC", "wcb") },
		{ name: "BCC", title: __("BCC", "wcb") },
	];
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Action", "wcb")}
		>
			<div className="space-y-5">
				<Notice status="warning" className="m-0" isDismissible={false}>
					<strong>{__("Note: ", "wcb")}</strong>
					{__(
						" It is required to enter an email ID to receive the data submitted via Form. Else you will not receive any data.",
						"wcb"
					)}
				</Notice>
				<TabPanel
					className={`wcb-bodyControls__panel `}
					activeClass="active-tab"
					initialTabName="To"
					tabs={PanelTab}
				>
					{(tab) => (
						<InputControl
							label={__("Email", "wcb")}
							type="email"
							placeholder={__("email@example.com", "wcb")}
							value={main[tab.name as TabsHere].email}
							onChange={(nextValue) => {
								setAttr__({
									...panelData,
									main: {
										...main,
										[tab.name]: {
											...main[tab.name],
											email: nextValue,
										},
									},
								});
							}}
						/>
					)}
				</TabPanel>

				<InputControl
					label={__("SUBJECT", "wcb")}
					value={subject}
					onChange={(nextValue) => {
						setAttr__({
							...panelData,
							subject: nextValue,
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbFormPanelAction;
