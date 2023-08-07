import { RadioGroup } from "@headlessui/react";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import ResetButton from "../components/controls/ResetButton";
import useGetDeviceType from "../hooks/useGetDeviceType";
export interface WCB_FAQ_PANEL_PRESET {
	preset:
		| "grid-simple"
		| "grid-solid"
		| "carousel-simple"
		| "carousel-solid"
		| "";
}

export const WCB_FAQ_PANEL_PRESET_DEMO: WCB_FAQ_PANEL_PRESET = {
	preset: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_PRESET;
	setAttr__: (data: WCB_FAQ_PANEL_PRESET) => void;
}

export const CTA_PRESET: {
	name: WCB_FAQ_PANEL_PRESET["preset"];
	twClass: string;
}[] = [
	{ name: "carousel-simple", twClass: "" },
	{ name: "carousel-solid", twClass: "justify-center items-center" },
	{ name: "grid-simple", twClass: "justify-center items-center" },
	{ name: "grid-solid", twClass: "justify-center items-center" },
];

const WcbFaqPanelPreset: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_PRESET_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const setPreset = (preset: WCB_FAQ_PANEL_PRESET["preset"]) => {
		setAttr__({ preset: preset });
	};

	const renderPresetItem = (item: typeof CTA_PRESET[number]) => {
		if (item.name === "carousel-simple") {
			return (
				<div className="flex-1 flex flex-col gap-1.5 ">
					<div className="border border-slate-300 p-1.5 rounded-md">
						<div className="flex justify-between mb-1.5">
							<div className="rounded w-8/12 h-0.5 bg-gray-400 "></div>
							<div className=" w-1/12 bg-gray-400 "></div>
						</div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-7/12 h-0.5 bg-gray-300"></div>
					</div>
					<div className="border border-slate-300 p-1.5 rounded">
						<div className="flex justify-between ">
							<div className="rounded w-8/12 h-0.5 bg-gray-400 "></div>
							<div className=" w-1/12 bg-gray-400 "></div>
						</div>
					</div>
				</div>
			);
		}
		if (item.name === "carousel-solid") {
			return (
				<div className="flex-1 flex flex-col gap-1.5 ">
					<div className="p-1.5 border border-slate-100 bg-slate-100  rounded">
						<div className="flex justify-between mb-1.5">
							<div className="rounded w-8/12 h-0.5 bg-gray-400 "></div>
							<div className=" w-1/12 bg-gray-400 "></div>
						</div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-7/12 h-0.5 bg-gray-300"></div>
					</div>
					<div className="p-1.5 border border-slate-100 bg-slate-100  rounded">
						<div className="flex justify-between ">
							<div className="rounded w-8/12 h-0.5 bg-gray-400 "></div>
							<div className=" w-1/12 bg-gray-400 "></div>
						</div>
					</div>
				</div>
			);
		}
		if (item.name === "grid-simple") {
			return (
				<div className="flex-1 grid grid-cols-2 gap-1.5 ">
					<div className="border border-slate-300 p-1.5 py-2 rounded-md">
						<div className="flex justify-between mb-1.5">
							<div className="rounded w-9/12 h-0.5 bg-gray-400 "></div>
						</div>
						<div className="rounded w-12/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-11/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-8/12 h-0.5 bg-gray-300"></div>
					</div>
					<div className="border border-slate-300 p-1.5 py-2 rounded-md">
						<div className="flex justify-between mb-1.5">
							<div className="rounded w-9/12 h-0.5 bg-gray-400 "></div>
						</div>
						<div className="rounded w-12/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-11/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-8/12 h-0.5 bg-gray-300"></div>
					</div>
				</div>
			);
		}
		if (item.name === "grid-solid") {
			return (
				<div className="flex-1 grid grid-cols-2 gap-1.5 ">
					<div className="border border-slate-100 bg-slate-100 p-1.5 py-2 rounded-md">
						<div className="flex justify-between mb-1.5">
							<div className="rounded w-9/12 h-0.5 bg-gray-400 "></div>
						</div>
						<div className="rounded w-12/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-11/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-8/12 h-0.5 bg-gray-300"></div>
					</div>
					<div className="border border-slate-100 bg-slate-100 p-1.5 py-2 rounded-md">
						<div className="flex justify-between mb-1.5">
							<div className="rounded w-9/12 h-0.5 bg-gray-400 "></div>
						</div>
						<div className="rounded w-12/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-10/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-11/12 h-0.5 bg-gray-300 mb-0.5"></div>
						<div className="rounded w-8/12 h-0.5 bg-gray-300"></div>
					</div>
				</div>
			);
		}
		return <div></div>;
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
											className={`relative flex items-center justify-center w-full p-2 cursor-pointer rounded-lg hover:ring-2 ring-offset-1 ring-sky-400 ${
												checked ? "bg-white ring-2" : "bg-white"
											} `}
										>
											{renderPresetItem(item)}
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

export default WcbFaqPanelPreset;
