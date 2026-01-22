import { Notice, PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_FORM_PANEL_GOOGLE_RECAPTCHA {
	enableReCaptcha: boolean;
	version: "v2" | "v3";
}

export const WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO: WCB_FORM_PANEL_GOOGLE_RECAPTCHA =
	{
		enableReCaptcha: false,
		version: "v2",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_GOOGLE_RECAPTCHA;
	setAttr__: (data: WCB_FORM_PANEL_GOOGLE_RECAPTCHA) => void;
}

const WcbFormPanelGoogleRecaptcha: FC<Props> = ({
	panelData = WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { enableReCaptcha, version } = panelData;

	const reCaptcha_plans: MyRadioItem<
		WCB_FORM_PANEL_GOOGLE_RECAPTCHA["version"]
	>[] = [
		{ name: "v2", icon: "V2" },
		{ name: "v3", icon: "V3" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Google reCAPTCHA", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					checked={enableReCaptcha}
					label={__("Enable reCAPTCHA", "boostify-blocks")}
					onChange={(e) => {
						setAttr__({
							...panelData,
							enableReCaptcha: e,
						});
					}}
				/>

				{enableReCaptcha && (
					<>
						<MyRadioGroup
							label="Select Version"
							value={version}
							plans={reCaptcha_plans}
							onChange={(value) => {
								setAttr__({
									...panelData,
									version: value as WCB_FORM_PANEL_GOOGLE_RECAPTCHA["version"],
								});
							}}
							hasResponsive={false}
						/>
						<Notice status="warning" className="m-0" isDismissible={false}>
							<strong>{__("P.S. ", "boostify-blocks")}</strong>
							{__(
								" Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page.",
								"boostify-blocks"
							)}
						</Notice>
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbFormPanelGoogleRecaptcha;
