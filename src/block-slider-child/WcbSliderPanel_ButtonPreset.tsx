import { RadioGroup } from "@headlessui/react";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import ResetButton from "../components/controls/ResetButton";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { SLIDER_BUTTON_PRESET } from "../block-slider-child/types";
export interface WCB_SLIDER_BUTTON_PANEL_PRESET {
	preset: "wcb-button-1" | "wcb-button-2" | "wcb-button-3" | "wcb-button-4" | "wcb-button-5" | "wcb-button-6" | "wcb-button-7" | "wcb-button-8";
}

export const WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO: WCB_SLIDER_BUTTON_PANEL_PRESET = {
	preset: "wcb-button-1",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_BUTTON_PANEL_PRESET;
	setAttr__: (data: WCB_SLIDER_BUTTON_PANEL_PRESET) => void;
}

const WcbSliderButtonPanelPreset: FC<Props> = ({
	panelData = WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const setPreset = (preset: WCB_SLIDER_BUTTON_PANEL_PRESET["preset"]) => {
		setAttr__({ preset: preset });
	};

	const renderRadioPreset = () => {
		return (
			<RadioGroup value={panelData.preset} onChange={setPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between ">
					<span>{__("Select Preset", "wcb")}</span>
					<ResetButton onClick={() => setPreset(WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO.preset)} />
				</RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg"}>
					<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
					<div className="relative grid grid-cols-2 gap-3">
						{SLIDER_BUTTON_PRESET.map((item) => {
							return (
								<RadioGroup.Option key={item.name} value={item.name}>
									{({ checked }) => (
										<div
											className={`relative flex items-center justify-center w-full p-3 cursor-pointer rounded-lg hover:ring-2 ring-offset-1 ring-sky-400 ${
												checked ? "bg-white ring-2" : "bg-white"
											} `}
										>
											<div
												className={`flex-1 flex flex-col gap-1`}
												dangerouslySetInnerHTML={{ __html: item.icon }}
											>
											</div>
										</div>
									)}
								</RadioGroup.Option>
							);
						})}
					</div>
				</div>
			</RadioGroup>
		);
	};
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Call To Action", "wcb")}
		>
			{renderRadioPreset()}
		</PanelBody>
	);
};

export default WcbSliderButtonPanelPreset;
