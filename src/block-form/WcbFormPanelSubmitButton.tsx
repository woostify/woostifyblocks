import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_FORM_PANEL_SUBMIT_BUTTON {
	textAlignment: HasResponsive<TextAlignment>;
}

export const WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO: WCB_FORM_PANEL_SUBMIT_BUTTON = {
	textAlignment: { Desktop: "left" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_SUBMIT_BUTTON;
	setAttr__: (data: WCB_FORM_PANEL_SUBMIT_BUTTON) => void;
}

const WcbFormPanelSubmitButton: FC<Props> = ({
	panelData = WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment } = panelData;
	const TEXT_ALIGNMENT =
		textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Submit button", "wcb")}
		>
			<div className={"space-y-5"}>
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
			</div>
		</PanelBody>
	);
};

export default WcbFormPanelSubmitButton;
