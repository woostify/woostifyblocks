import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyButtonPresetControl, {
	ButtonPreset,
} from "../components/controls/MyButtonPresetControl/MyButtonPresetControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_BUTTON_PANEL_PRESET {
	preset: ButtonPreset;
}

export const WCB_BUTTON_PANEL_PRESET_DEMO: WCB_BUTTON_PANEL_PRESET = {
	preset: "primary",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTON_PANEL_PRESET;
	setAttr__: (data: WCB_BUTTON_PANEL_PRESET) => void;
}

const WcbButtonPanelPreset: FC<Props> = ({
	panelData = WCB_BUTTON_PANEL_PRESET_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Preset", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyButtonPresetControl
					value={panelData.preset}
					onChange={(value) => {
						setAttr__({ ...panelData, preset: value });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonPanelPreset;
