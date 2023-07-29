import {
	PanelBody,
	TextareaControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_FORM_PANEL_GENERAL {
	textAlignment: HasResponsive<TextAlignment>;
	isShowLabel: boolean;
	formStyle: "simple" | "underline" | "solid";
	confirmationType: "message" | "url-text";
	successMessageText: string;
	errorMessageText: string;
	successRedirectUrl: string;
}

export const WCB_FORM_PANEL_GENERAL_DEMO: WCB_FORM_PANEL_GENERAL = {
	textAlignment: { Desktop: "left" },
	isShowLabel: true,
	formStyle: "simple",
	confirmationType: "message",
	successMessageText: "The form has been submitted successfully!",
	errorMessageText:
		"There has been some error while submitting the form. Please verify all form fields again.",
	successRedirectUrl: "#",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_GENERAL;
	setAttr__: (data: WCB_FORM_PANEL_GENERAL) => void;
}

const WcbFormPanelGeneral: FC<Props> = ({
	panelData = WCB_FORM_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		textAlignment,
		isShowLabel,
		formStyle,
		confirmationType,
		errorMessageText,
		successMessageText,
		successRedirectUrl,
	} = panelData;
	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		textAlignment,
		deviceType
	);

	//
	const form_style_plans: MyRadioItem<WCB_FORM_PANEL_GENERAL["formStyle"]>[] = [
		{ name: "simple", icon: "Simple" },
		{ name: "underline", icon: "Underline" },
		{ name: "solid", icon: "Solid" },
	];
	const confirmationType_plans: MyRadioItem<
		WCB_FORM_PANEL_GENERAL["confirmationType"]
	>[] = [
		{ name: "message", icon: "Message" },
		{ name: "url-text", icon: "Url text" },
	];
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					checked={isShowLabel}
					label={__("Display label", "wcb")}
					onChange={(e) => {
						setAttr__({
							...panelData,
							isShowLabel: e,
						});
					}}
				/>

				<MyRadioGroup
					label="Style"
					value={formStyle}
					plans={form_style_plans}
					onChange={(value) => {
						setAttr__({
							...panelData,
							formStyle: value as any,
						});
					}}
					hasResponsive={false}
				/>

				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textAlignment: {
								...textAlignment,
								[deviceType]: value,
							},
						});
					}}
					hasResponsive={false}
				/>

				<MyRadioGroup
					label="Confirmation Type"
					value={confirmationType}
					plans={confirmationType_plans}
					onChange={(value) => {
						setAttr__({
							...panelData,
							confirmationType: value as any,
						});
					}}
					hasResponsive={false}
				/>

				{confirmationType === "message" && (
					<>
						<TextareaControl
							label={__("SUCCESS MESSAGE TEXT", "wcb")}
							help={__(
								"Enter a message you want to display after successfull form submission",
								"wcb"
							)}
							value={successMessageText}
							onChange={(value) => {
								setAttr__({
									...panelData,
									successMessageText: value,
								});
							}}
						/>
						<TextareaControl
							label={__("ERROR MESSAGE TEXT", "wcb")}
							help={__(
								"Enter a message you want to display after unsuccessfull form submission",
								"wcb"
							)}
							value={errorMessageText}
							onChange={(value) => {
								setAttr__({
									...panelData,
									errorMessageText: value,
								});
							}}
						/>
					</>
				)}

				{confirmationType === "url-text" && (
					<InputControl
						label={__("SUCCESS REDIRECT URL", "wcb")}
						value={successRedirectUrl}
						onChange={(value) => {
							setAttr__({
								...panelData,
								successRedirectUrl: value,
							});
						}}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbFormPanelGeneral;
