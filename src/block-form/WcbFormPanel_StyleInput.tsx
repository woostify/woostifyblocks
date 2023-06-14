import {
	PanelBody,
	TabPanel,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

type TabsHere = "Normal" | "Hover" | "Active";
export interface WCB_FORM_PANEL_STYLE_INPUT {
	typography: MyTypographyControlData;
	textColor: string;
	bgAndPlaceholder: {
		[K in TabsHere]: {
			placeholderColor: string;
			backgroundColor: string;
		};
	};
	border: MyBorderControlData;
	padding: HasResponsive<DimensionSettings>;
}

export const WCB_FORM_PANEL_STYLE_INPUT_DEMO__SIMPLE: WCB_FORM_PANEL_STYLE_INPUT =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "",
		bgAndPlaceholder: {
			Active: { backgroundColor: "#fff", placeholderColor: "" },
			Hover: { backgroundColor: "#fff", placeholderColor: "" },
			Normal: { backgroundColor: "#fff", placeholderColor: "" },
		},
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				color: "#d1d5db",
				style: "solid",
				width: "1px",
			},
		},
		padding: {
			Desktop: {
				top: "0.5rem",
				left: "0.75rem",
				right: "0.75rem",
				bottom: "0.5rem",
			},
		},
	};

export const WCB_FORM_PANEL_STYLE_INPUT_DEMO__SOLID: WCB_FORM_PANEL_STYLE_INPUT =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "",
		bgAndPlaceholder: {
			Normal: { backgroundColor: "#f9fafb", placeholderColor: "" },
			Hover: { backgroundColor: "#f9fafb", placeholderColor: "" },
			Active: { backgroundColor: "#fff", placeholderColor: "" },
		},
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				color: "#f9fafb",
				style: "solid",
				width: "1px",
			},
		},
		padding: {
			Desktop: {
				top: "0.5rem",
				left: "0.75rem",
				right: "0.75rem",
				bottom: "0.5rem",
			},
		},
	};

export const WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE: WCB_FORM_PANEL_STYLE_INPUT =
	{
		typography: TYPOGRAPHY_CONTROL_DEMO,
		textColor: "",
		bgAndPlaceholder: {
			Normal: { backgroundColor: "#fff", placeholderColor: "" },
			Hover: { backgroundColor: "#fff", placeholderColor: "" },
			Active: { backgroundColor: "#fff", placeholderColor: "" },
		},
		border: {
			...MY_BORDER_CONTROL_DEMO,
			radius: {
				Desktop: {
					bottomLeft: "0",
					bottomRight: "0",
					topLeft: "0",
					topRight: "0",
				},
			},
			mainSettings: {
				bottom: {
					color: "#e5e7eb",
					style: "solid",
					width: "2px",
				},
				left: {
					color: "",
					style: "solid",
					width: "0",
				},
				right: {
					color: "",
					style: "solid",
					width: "0",
				},
				top: {
					color: "",
					style: "solid",
					width: "0",
				},
			},
		},
		padding: {
			Desktop: {
				top: "0.5rem",
				left: "0rem",
				right: "0rem",
				bottom: "0.5rem",
			},
		},
	};

export const WCB_FORM_PANEL_STYLE_INPUT_DEMO =
	WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE;
interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_STYLE_INPUT;
	setAttr__: (data: WCB_FORM_PANEL_STYLE_INPUT) => void;
}

const WcbFormPanel_StyleInput: FC<Props> = ({
	panelData = WCB_FORM_PANEL_STYLE_INPUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		textColor,
		typography,
		bgAndPlaceholder,
		border,
		padding: paddingProps,
	} = panelData;
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { currentDeviceValue: padding } = getValueFromAttrsResponsives(
		paddingProps,
		deviceType
	);

	const PanelTab: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Normal", title: __("Normal", "wcb") },
		{ name: "Hover", title: __("Hover", "wcb") },
		{ name: "Active", title: __("Active", "wcb") },
	];
	const initialTabName: TabsHere = "Normal";

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Input", "wcb")}
		>
			<div className={"space-y-4"}>
				<TabPanel
					className={`wcb-bodyControls__panel `}
					activeClass="active-tab"
					initialTabName={initialTabName}
					tabs={PanelTab}
				>
					{(tab) => (
						<div className="space-y-3.5">
							<MyColorPicker
								label={__("Placeholder color", "wcb")}
								color={bgAndPlaceholder[tab.name as TabsHere].placeholderColor}
								onChange={(value) => {
									setAttr__({
										...panelData,
										bgAndPlaceholder: {
											...bgAndPlaceholder,
											[tab.name]: {
												...(bgAndPlaceholder[tab.name] || []),
												placeholderColor: value,
											},
										},
									});
								}}
							/>
							<MyColorPicker
								label={__("Background color", "wcb")}
								color={bgAndPlaceholder[tab.name as TabsHere].backgroundColor}
								onChange={(value) => {
									setAttr__({
										...panelData,
										bgAndPlaceholder: {
											...bgAndPlaceholder,
											[tab.name as TabsHere]: {
												...(bgAndPlaceholder[tab.name] || []),
												backgroundColor: value,
											},
										},
									});
								}}
							/>
						</div>
					)}
				</TabPanel>
				<div className={"space-y-3.5"}>
					<MyDisclosure label="Color, Border & Padding" className="space-y-5">
						<MyColorPicker
							label={__("Color", "wcb")}
							color={textColor}
							onChange={(value) => {
								setAttr__({
									...panelData,
									textColor: value,
								});
							}}
						/>
						<MyBorderControl
							borderControl={border}
							setAttrs__border={(data) =>
								setAttr__({
									...panelData,
									border: data,
								})
							}
						/>

						<BoxControl
							label={
								<MyLabelControl className="" hasResponsive>
									{__("Padding", "wcb")}
								</MyLabelControl>
							}
							values={padding}
							onChange={(value: DimensionSettings) => {
								setAttr__({
									...panelData,
									padding: {
										...paddingProps,
										[deviceType]: value,
									},
								});
							}}
						/>
					</MyDisclosure>

					<MyTypographyControl
						typographyControl={typography}
						setAttrs__typography={(typography) => {
							setAttr__({
								...panelData,
								typography,
							});
						}}
					/>
				</div>
			</div>
		</PanelBody>
	);
};

export default WcbFormPanel_StyleInput;
