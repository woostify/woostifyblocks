import { RadioGroup } from "@headlessui/react";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import ResetButton from "../components/controls/ResetButton";
import useGetDeviceType from "../hooks/useGetDeviceType";
export interface WCB_CTA_PANEL_PRESET {
	preset: "preset-left" | "preset-center" | "";
}

export const WCB_CTA_PANEL_PRESET_DEMO: WCB_CTA_PANEL_PRESET = {
	preset: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_CTA_PANEL_PRESET;
	setAttr__: (data: WCB_CTA_PANEL_PRESET) => void;
}

export const CTA_PRESET: {
	name: WCB_CTA_PANEL_PRESET["preset"];
	twClass: string;
}[] = [
	{ name: "preset-left", twClass: "" },
	{ name: "preset-center", twClass: "justify-center items-center" },
];

const WcbCtaPanelPreset: FC<Props> = ({
	panelData = WCB_CTA_PANEL_PRESET_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const setPreset = (preset: WCB_CTA_PANEL_PRESET["preset"]) => {
		setAttr__({ preset: preset });
	};

	const renderRadioPreset = () => {
		return (
			<RadioGroup value={panelData.preset} onChange={setPreset}>
				<RadioGroup.Label className="relative flex items-center justify-between ">
					<span>{__("Select Preset", "wcb")}</span>
					<ResetButton onClick={() => setPreset("")} />
				</RadioGroup.Label>
				<div className={"relative p-3 bg-slate-50 mt-3 rounded-lg"}>
					<div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
					<div className="relative grid grid-cols-2 gap-3">
						{CTA_PRESET.map((item) => {
							return (
								<RadioGroup.Option key={item.name} value={item.name}>
									{({ checked }) => (
										<div
											className={`relative flex items-center justify-center w-full p-3 cursor-pointer rounded-lg hover:ring-2 ring-offset-1 ring-sky-400 ${
												checked ? "bg-white ring-2" : "bg-white"
											} `}
										>
											<div
												className={`flex-1 flex flex-col gap-1 ${item.twClass}`}
											>
												<div className="rounded w-8/12 h-1 bg-gray-400 mb-0.5"></div>
												<div className="rounded w-10/12 h-0.5 bg-gray-300"></div>
												<div className="rounded w-7/12 h-0.5 bg-gray-300"></div>
												<div className="rounded w-3/12 h-2 bg-gray-500 mt-1"></div>
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
			title={__("Preset", "wcb")}
		>
			{renderRadioPreset()}
		</PanelBody>
	);
};

export default WcbCtaPanelPreset;
