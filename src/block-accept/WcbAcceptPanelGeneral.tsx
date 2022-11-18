import {
	PanelBody,
	SelectControl,
	TextareaControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { MyInputAutocomplete } from "./types";

export interface WCB_ACCEPT_PANEL_GENERAL {
	acceptanceText: string;
	isRequired: boolean;
	enablePrivacyLink: boolean;
	linkLabel: string;
	linkHref: string;
	openInNewTab: boolean;
}

export const WCB_ACCEPT_PANEL_GENERAL_DEMO: WCB_ACCEPT_PANEL_GENERAL = {
	isRequired: false,
	acceptanceText: "I have read and agree to the Privacy Policy.",
	enablePrivacyLink: true,
	linkHref: "#",
	linkLabel: "Privacy Policy",
	openInNewTab: true,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ACCEPT_PANEL_GENERAL;
	setAttr__: (data: WCB_ACCEPT_PANEL_GENERAL) => void;
}

const WcbAcceptPanelGeneral: FC<Props> = ({
	panelData = WCB_ACCEPT_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		acceptanceText,
		enablePrivacyLink,
		isRequired,
		linkHref,
		linkLabel,
		openInNewTab,
	} = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<TextareaControl
					label="ACCEPTANCE TEXT"
					value={acceptanceText}
					onChange={(value) => {
						setAttr__({ ...panelData, acceptanceText: value });
					}}
				/>

				<ToggleControl
					label={__("Required", "wcb")}
					checked={isRequired}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, isRequired: isChecked });
					}}
				/>
				<ToggleControl
					label={__("Enable Privacy Link", "wcb")}
					checked={enablePrivacyLink}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, enablePrivacyLink: isChecked });
					}}
				/>

				{enablePrivacyLink && (
					<>
						<InputControl
							label={__("LINK LABEL", "wcb")}
							value={linkLabel}
							onChange={(nextValue) => {
								setAttr__({ ...panelData, linkLabel: nextValue });
							}}
						/>
						<InputControl
							label={__("LINK", "wcb")}
							value={linkHref}
							type="date"
							onChange={(nextValue) => {
								setAttr__({ ...panelData, linkHref: nextValue });
							}}
						/>

						<ToggleControl
							label={__("Open in new tab", "wcb")}
							checked={openInNewTab}
							onChange={(isChecked) => {
								setAttr__({ ...panelData, openInNewTab: isChecked });
							}}
						/>
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbAcceptPanelGeneral;
