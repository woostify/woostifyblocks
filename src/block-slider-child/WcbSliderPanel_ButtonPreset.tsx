import { RadioGroup } from "@headlessui/react";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import ResetButton from "../components/controls/ResetButton";
import { SLIDER_BUTTON_PRESET } from "../block-slider-child/types";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";
// @ts-ignore
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import {DEFAULT_MEDIA_UPLOAD} from "../components/controls/MyMediaUploadCheck";
import { Option } from "../types";
import MySelect from "../components/controls/MySelect";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { get } from "lodash";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";

export interface WCB_SLIDER_BUTTON_PANEL_PRESET {
	preset: "wcb-button-1" | "wcb-button-2" | "wcb-button-3" | "wcb-button-4" | "wcb-button-5" | "wcb-button-6" | "wcb-button-7" | "wcb-button-8" | "";
	enableIcon: boolean;
	icon: MyIcon;
	link: string;
	openInNewWindow?: boolean;
	iconPosition:
		| "beforeTitle"
		| "afterTitle";
	iconSpacing: HasResponsive<string>;
}

export const WCB_SLIDER_BUTTON_PANEL_PRESET_DEMO: WCB_SLIDER_BUTTON_PANEL_PRESET = {
	preset: "wcb-button-1",
	enableIcon: false,
	icon: {
		iconName: "lni-arrow-right",
		...DEFAULT_MY_ICON,
	},
	link: "",
	openInNewWindow: false,
	iconPosition: "afterTitle",
	iconSpacing: { Desktop: "5px" },
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
	const { enableIcon, icon, openInNewWindow, link, iconPosition, iconSpacing } = panelData;

	const setPreset = (preset: WCB_SLIDER_BUTTON_PANEL_PRESET["preset"]) => {
		if (preset === "wcb-button-4" || preset === "wcb-button-8") {
			setAttr__({
				...panelData,
				enableIcon: true,
			});
		}
		setAttr__({ ...panelData, preset });
	};

	const ICON_POSITION_DEMO: Option<WCB_SLIDER_BUTTON_PANEL_PRESET["iconPosition"]>[] = [
		{ value: "beforeTitle", label: "Before Text" },
		{ value: "afterTitle", label: "After Text" },
	];

	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { currentDeviceValue: currentIconSpacing } = getValueFromAttrsResponsives(
		iconSpacing,
		deviceType
	);

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
			<div className="space-y-5">
				{renderRadioPreset()}

				<ToggleControl
					label={__("Show Icon", "wcb")}
					checked={enableIcon}
					onChange={(checked) => {
						if (checked === true) {
							setAttr__({ 
								...panelData, 
								preset: "wcb-button-4",
								enableIcon: checked
							});
						} else {
							setAttr__({ 
								...panelData, 
								preset: "wcb-button-1",
								enableIcon: checked
							});
						}
					}}
				/>

				{enableIcon && (
					<SelecIcon
						iconData={icon ?? {
								type: "icon",
								iconName: "lni-arrow-right",
								imageData: DEFAULT_MEDIA_UPLOAD,
								svgCode: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
							  </svg>`,
						}}
						onChange={(value) => {
							setAttr__({
								...panelData,
								icon: value,
							});
						}}
					/>
				)}


				<LinkControl
					className="WcbButtonPanelContent__inline-link-input"
					value={{ url: link }}
					onChange={({
						url: newURL = "",
					}) => {
						setAttr__({
							...panelData,
							link: newURL,
						});
					}}
					onRemove={() => {
						setAttr__({
							...panelData,
							link: "",
							openInNewWindow: false,
						});
					}}
				/>

				<ToggleControl
					label={__("Open in new tab", "wcb")}
					checked={openInNewWindow}
					onChange={(checked) => {
						setAttr__({ 
							...panelData,
							openInNewWindow: checked 
						});
					}}
				/>

				{enableIcon && (
					<>
						<MySelect
							label={__("Icon Position", "Wcb")}
							options={ICON_POSITION_DEMO}
							value={iconPosition}
							onChange={(value) => {
								let newData: WCB_SLIDER_BUTTON_PANEL_PRESET = {
									...panelData,
									iconPosition:
										value as WCB_SLIDER_BUTTON_PANEL_PRESET["iconPosition"],
								};
								setAttr__(newData);
							}}
						/>

						<MySpacingSizesControl
							onChange={(value) => {
								setAttr__({
									...panelData,
									iconSpacing: {
										...iconSpacing,
										[deviceType]: value,
									},
								});
							}}
							value={currentIconSpacing || "0"}
							label={"Icon Spacing"}
							hasResponsive
						/>
					</>
				)}

			</div>
		</PanelBody>
	);
};

export default WcbSliderButtonPanelPreset;
