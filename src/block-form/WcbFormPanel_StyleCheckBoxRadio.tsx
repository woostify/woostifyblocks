import {
	Notice,
	PanelBody,
	RangeControl,
	TabPanel,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

type TabsHere = "Normal" | "Active";
export interface WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE {
	colors: {
		[K in TabsHere]: {
			// color: string;
			backgroundColor: string;
		};
	};
	border: MyBorderControlData;
	checkboxRadioSize: HasResponsive<string>;
	toggleSize: HasResponsive<number>;
}

export const WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE: WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE =
	{
		colors: {
			Normal: { backgroundColor: "" },
			Active: { backgroundColor: "#0284c7" },
		},
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				color: "#d1d5db",
				style: "solid",
				width: "1px",
			},
			radius: {
				Desktop: {
					bottomLeft: "0.25rem",
					bottomRight: "0.25rem",
					topLeft: "0.25rem",
					topRight: "0.25rem",
				},
			},
		},
		checkboxRadioSize: { Desktop: "1rem" },
		toggleSize: { Desktop: 1 },
	};

export const WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SOLID: WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE =
	{
		colors: {
			Normal: { backgroundColor: "#e5e7eb" },
			Active: { backgroundColor: "#374151" },
		},
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				color: "",
				style: "solid",
				width: "0px",
			},
			radius: {
				Desktop: {
					bottomLeft: "0.25rem",
					bottomRight: "0.25rem",
					topLeft: "0.25rem",
					topRight: "0.25rem",
				},
			},
		},
		checkboxRadioSize: { Desktop: "1rem" },
		toggleSize: { Desktop: 1 },
	};

export const WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO =
	WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE;

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE;
	setAttr__: (data: WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE) => void;
}

const WcbFormPanel_StyleCheckBoxRadio: FC<Props> = ({
	panelData = WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { border, checkboxRadioSize, colors, toggleSize } = panelData;
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { currentDeviceValue: checkboxRadioSizeCurrent } =
		getValueFromAttrsResponsives(checkboxRadioSize, deviceType);
	const { currentDeviceValue: toggleSizeCurrent } =
		getValueFromAttrsResponsives(toggleSize, deviceType);

	const PanelTab: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Normal", title: __("Normal", "boostify-blocks") },
		{ name: "Active", title: __("Active", "boostify-blocks") },
	];
	const initialTabName: TabsHere = "Normal";

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Checkbox/Toogle/Radio", "boostify-blocks")}
		>
			<div className={"space-y-4"}>
				<MyDisclosure label="Sizes" defaultOpen className="space-y-5">
					<MySpacingSizesControl
						value={checkboxRadioSizeCurrent || "1rem"}
						label={__("Checkbox/Radio size", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({
								...panelData,
								checkboxRadioSize: {
									...checkboxRadioSize,
									[deviceType]: value,
								},
							});
						}}
					/>
					<RangeControl
						label={__("Toggle size", "boostify-blocks")}
						value={toggleSizeCurrent || 1}
						step={0.1}
						onChange={(value) =>
							setAttr__({
								...panelData,
								toggleSize: {
									...toggleSize,
									[deviceType]: value,
								},
							})
						}
						min={1}
						max={10}
					/>
				</MyDisclosure>

				<MyDisclosure label="Colors">
					<TabPanel
						className={`wcb-bodyControls__panel `}
						activeClass="active-tab"
						initialTabName={initialTabName}
						tabs={PanelTab}
					>
						{(tab) => (
							<div className="space-y-4">
								<MyColorPicker
									label={__("Color", "boostify-blocks")}
									color={colors[tab.name as TabsHere].backgroundColor}
									onChange={(value) => {
										setAttr__({
											...panelData,
											colors: {
												...colors,
												[tab.name as TabsHere]: {
													...colors[tab.name],
													backgroundColor: value,
												},
											},
										});
									}}
								/>
								{/* <MyColorPicker
									label={__("Element color", "boostify-blocks")}
									color={colors[tab.name as TabsHere].color}
									onChange={(value) => {
										setAttr__({
											...panelData,
											colors: {
												...colors,
												[tab.name as TabsHere]: {
													...colors[tab.name],
													color: value,
												},
											},
										});
									}}
								/> */}
							</div>
						)}
					</TabPanel>
				</MyDisclosure>

				<MyDisclosure label="Border" className="space-y-2.5">
					<div className="space-y-5">
						<MyBorderControl
							borderControl={border}
							setAttrs__border={(data) =>
								setAttr__({
									...panelData,
									border: data,
								})
							}
						/>
					</div>
					<HelpText>
						{__(
							"Border radius will be applied to Radio & Toggle only when the layout for those blocks is set to Square.",
							"boostify-blocks"
						)}
					</HelpText>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbFormPanel_StyleCheckBoxRadio;
