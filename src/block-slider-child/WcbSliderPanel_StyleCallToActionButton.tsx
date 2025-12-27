import { PanelBody, TabPanel, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import SelecIcon, {
	MyIcon,
	DEFAULT_MY_ICON,
} from "../components/controls/SelectIcon/SelecIcon";

export interface WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON extends MyDimensionsNoGapControlData, MyBorderControlData {
	typographyText: MyTypographyControlData;
	colorText: string;
	hoverColorText: string;
	normalBackground: BackgroundNoImageControlData;
	hoverBackground: BackgroundNoImageControlData;
}



export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#121314",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_2: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
		radius: {
			Desktop: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Tablet: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Mobile: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_3: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#121314",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
		radius: {
			Desktop: {
				bottomLeft: "155px",
				bottomRight: "155px",
				topLeft: "155px",
				topRight: "155px",
			},
			Tablet: {
				bottomLeft: "120px",
				bottomRight: "120px",
				topLeft: "120px",
				topRight: "120px",
			},
			Mobile: {
				bottomLeft: "65px",
				bottomRight: "65px",
				topLeft: "65px",
				topRight: "65px",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_4: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
		radius: {
			Desktop: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Tablet: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Mobile: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_5: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#909090" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_6: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#909090" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
		radius: {
			Desktop: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Tablet: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Mobile: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_7: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#909090" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
		radius: {
			Desktop: {
				bottomLeft: "155px",
				bottomRight: "155px",
				topLeft: "155px",
				topRight: "155px",
			},
			Tablet: {
				bottomLeft: "120px",
				bottomRight: "120px",
				topLeft: "120px",
				topRight: "120px",
			},
			Mobile: {
				bottomLeft: "65px",
				bottomRight: "65px",
				topLeft: "65px",
				topRight: "65px",
			},
		},
	};

export const WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_PRESET_8: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON =
	{
		typographyText: {
			...TYPOGRAPHY_CONTROL_DEMO,
		},
		colorText: "#fff",
		hoverColorText: "#fff",
		normalBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#909090" },
		hoverBackground: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#121314" },
		...MY_BORDER_CONTROL_DEMO,
		mainSettings: {
			...MY_BORDER_CONTROL_DEMO.mainSettings,
			style: "solid",
			width: "1px",
			color: "#333333",
		},
		hoverColor: "#121314",
		...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
		padding: {
			Desktop: {
				top: "0.4rem",
				left: "0.8rem",
				right: "0.8rem",
				bottom: "0.4rem",
			},
		},
		radius: {
			Desktop: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Tablet: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
			Mobile: {
				bottomLeft: "10px",
				bottomRight: "10px",
				topLeft: "10px",
				topRight: "10px",
			},
		},
	};


type TabsHere = "normal" | "hover";
const PanelTab: {
	name: TabsHere;
	title: string;
}[] = [
	{ name: "normal", title: __("Normal", "wcb") },
	{ name: "hover", title: __("Hover", "wcb") },
];

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON;
	setAttr__: (data: WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON) => void;
}

const WcbSliderPanelCallToActionButton: FC<Props> = ({
	panelData = WCB_SLIDER_PANEL_STYLE_CALL_TO_ACTION_BUTTON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { 
		hoverBackground, 
		normalBackground, 
		typographyText, 
		colorText, 
		hoverColorText, 
		mainSettings, 
		hoverColor, 
		radius
	} = panelData;		
	
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Call To Action", "wcb")}
		>
			<div className={"space-y-5"}>
				<PanelBody
					initialOpen={initialOpen}
					onToggle={onToggle}
					opened={opened}
					title={__("Text", "wcb")}
				>
					<div className={"space-y-4"}>
						<MyTypographyControl
							typographyControl={typographyText}
							setAttrs__typography={(typography) => {
								setAttr__({
									...panelData,
									typographyText: typography,
								});
							}}
						/>

						<MyDisclosure defaultOpen label={__("Colors", "wcb")}>
							<MyColorPicker
								onChange={(color) => {
									setAttr__({ ...panelData, colorText: color });
								}}
								color={colorText}
								label={__("Color", "wcb")}
							/>

							<MyColorPicker
								onChange={(color) => {
									setAttr__({ ...panelData, hoverColorText: color });
								}}
								color={hoverColorText}
								label={__("Hover color", "wcb")}
							/>
						</MyDisclosure>
					</div>
				</PanelBody>
				<PanelBody
						initialOpen={initialOpen}
						onToggle={onToggle}
						opened={opened}
						title={__("Background", "wcb")}
					>
					<TabPanel
						className={`wcb-bodyControls__panel `}
						activeClass="active-tab"
						initialTabName={"normal"}
						tabs={PanelTab}
					>
						{(tab) => {
							if (tab.name === "normal") {
								return (
									<MyBackgroundNoImageControl
										backgroundControl={normalBackground}
										setAttrs__backgroundControl={(data) => {
											setAttr__({ ...panelData, normalBackground: data });
										}}
									/>
								);
							} else {
								return (
									<MyBackgroundNoImageControl
										backgroundControl={hoverBackground}
										setAttrs__backgroundControl={(data) => {
											setAttr__({ ...panelData, hoverBackground: data });
										}}
									/>
								);
							}
						}}
					</TabPanel>
				</PanelBody>
				<PanelBody
					initialOpen={initialOpen}
					onToggle={onToggle}
					opened={opened}
					title={__("Border", "wcb")}
				>
					<MyBorderControl
						borderControl={{
							mainSettings: mainSettings,
							hoverColor: hoverColor,
							radius: radius || { Desktop: "0", Tablet: "0", Mobile: "0" },
						}}
						setAttrs__border={(data) => {
							setAttr__({
								...panelData,
								mainSettings: data.mainSettings,
								hoverColor: data.hoverColor,
								radius: data.radius,
							});
						}}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={initialOpen}
						onToggle={onToggle}
						opened={opened}
						title={__("Dimension", "wcb")}
					>
						<div className="space-y-5">
							<MyDimensionsNoGapControl
								dimensionControl={panelData}
								setAttrs__dimensions={(data) => setAttr__({ ...panelData, ...data })}
							/>
						</div>
				</PanelBody>
			</div>
		</PanelBody>
	);
};

export default WcbSliderPanelCallToActionButton;
