import { RadioGroup } from "@headlessui/react";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import ResetButton from "../components/controls/ResetButton";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { ICON_PRESET } from "./types";
export interface WCB_ICON_PANEL_PRESET {
	preset: "wcb-icon-1" | "wcb-icon-2" | "wcb-icon-3" | "wcb-icon-4";
}

export const WCB_ICON_PANEL_PRESET_DEMO: WCB_ICON_PANEL_PRESET = {
	preset: "wcb-icon-1",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_PANEL_PRESET;
	setAttr__: (data: WCB_ICON_PANEL_PRESET) => void;
}

const WcbIconPanelPreset: FC<Props> = ({
	panelData = WCB_ICON_PANEL_PRESET_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const setPreset = (preset: WCB_ICON_PANEL_PRESET["preset"]) => {
		setAttr__({ preset: preset });
	};

	const renderRadioPreset = () => {
		return (
			<RadioGroup value={panelData.preset} onChange={setPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between ">
					<span>{__("Select Preset", "boostify-blocks")}</span>
					<ResetButton onClick={() => setPreset(WCB_ICON_PANEL_PRESET_DEMO.preset)} />
				</RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg"}>
					<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
					<div className="relative grid grid-cols-2 gap-3">
						{ICON_PRESET.map((item) => {
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
			title={__("Preset", "boostify-blocks")}
		>
			{renderRadioPreset()}
		</PanelBody>
	);
};

export default WcbIconPanelPreset;
