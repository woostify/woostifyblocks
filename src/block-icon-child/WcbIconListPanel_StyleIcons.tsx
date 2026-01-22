import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import {
	MyDimensionsNoGapControlData,
	MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";
import MyDimensionsNoGapControl from "../components/controls/MyDimensionsControl/MyDimensionsNoGapControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_ICON_LIST_PANEL_STYLE_ICON {
	color: string;
	hoverColor: string;
	iconSize: HasResponsive<string>;
	dimensions: MyDimensionsNoGapControlData;
	border: MyBorderControlData;
}

export const WCB_ICON_LIST_PANEL_STYLE_ICON_DEMO: WCB_ICON_LIST_PANEL_STYLE_ICON =
	{
		color: "#334155",
		hoverColor: "",
		iconSize: { 
			Desktop: "1.5rem" ,
			Tablet: "1.5rem",
			Mobile: "1.5rem",
		},
		dimensions: {
			...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
			margin: {
				Desktop: {
					top: "",
					left: "",
					right: "",
					bottom: "",
				},
			},
			padding: {
				Desktop: {
					bottom: "",
					left: "",
					right: "",
					top: "",
				},
			},
		},
		border: MY_BORDER_CONTROL_DEMO,
	};

export const WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_1: WCB_ICON_LIST_PANEL_STYLE_ICON =
	{
		color: "#0170B9",
		hoverColor: "",
		iconSize: { 
			Desktop: "1.5rem",
			Tablet: "1.5rem",
			Mobile: "1.5rem",
		},
		dimensions: {
			...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
			margin: {
				Desktop: {
					top: "",
					left: "",
					right: "",
					bottom: "",
				},
			},
			padding: {
				Desktop: {
					bottom: "",
					left: "",
					right: "",
					top: "",
				},
			},
		},
		border: MY_BORDER_CONTROL_DEMO,
	};

export const WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_2: WCB_ICON_LIST_PANEL_STYLE_ICON =
	{
		color: "#0170B9",
		hoverColor: "",
		iconSize: { 
			Desktop: "1.5rem",
			Tablet: "1.5rem",
			Mobile: "1.5rem",
		},
		dimensions: {
			...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
			margin: {
				Desktop: {
					top: "",
					left: "",
					right: "",
					bottom: "",
				},
			},
			padding: {
				Desktop: {
					bottom: "0.6rem",
					left: "0.6rem",
					right: "0.6rem",
					top: "0.6rem",
				},
				Tablet: {
					bottom: "0.6rem",
					left: "0.6rem",
					right: "0.6rem",
					top: "0.6rem",
				},
				Mobile: {
					bottom: "0.6rem",
					left: "0.6rem",
					right: "0.6rem",
					top: "0.6rem",
				}
			},
		},
		border: {
			mainSettings: {
				color: "#0170B9",
				style: "solid",
				width: "0.18rem",
			},
			hoverColor: undefined,
			radius: {
				Desktop: {
					bottomLeft: "50%",
					bottomRight: "50%",
					topLeft: "50%",
					topRight: "50%",
				},
				Tablet: {
					bottomLeft: "50%",
					bottomRight: "50%",
					topLeft: "50%",
					topRight: "50%",
				},
				Mobile: {
					bottomLeft: "50%",
					bottomRight: "50%",
					topLeft: "50%",
					topRight: "50%",
				},
			},
		},
	};

export const WCB_ICON_LIST_PANEL_STYLE_ICON_PRESET_3: WCB_ICON_LIST_PANEL_STYLE_ICON =
	{
		color: "#0170B9",
		hoverColor: "",
		iconSize: { 
			Desktop: "1.5rem",
			Tablet: "1.5rem",
			Mobile: "1.5rem",
		},
		dimensions: {
			...MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
			margin: {
				Desktop: {
					top: "",
					left: "",
					right: "",
					bottom: "",
				},
			},
			padding: {
				Desktop: {
					bottom: "0.4rem",
					left: "0.4rem",
					right: "0.4rem",
					top: "0.4rem",
				},
				Tablet: {
					bottom: "0.4rem",
					left: "0.4rem",
					right: "0.4rem",
					top: "0.4rem",
				},
				Mobile: {
					bottom: "0.4rem",
					left: "0.4rem",
					right: "0.4rem",
					top: "0.4rem",
				},
			},
		},
		border: {
			mainSettings: {
				color: "#0170B9",
				style: "solid",
				width: "0.4rem",
			},
			hoverColor: undefined,
			radius: {
				Desktop: {
					bottomLeft: "50%",
					bottomRight: "50%",
					topLeft: "50%",
					topRight: "50%",
				},
				Tablet: {
					bottomLeft: "50%",
					bottomRight: "50%",
					topLeft: "50%",
					topRight: "50%",
				},
				Mobile: {
					bottomLeft: "50%",
					bottomRight: "50%",
					topLeft: "50%",
					topRight: "50%",
				},
			},
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_LIST_PANEL_STYLE_ICON;
	setAttr__: (data: WCB_ICON_LIST_PANEL_STYLE_ICON) => void;
}

const WcbIconListPanel_StyleIcons: FC<Props> = ({
	panelData = WCB_ICON_LIST_PANEL_STYLE_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { color, hoverColor, iconSize, dimensions, border } = panelData;
	const { currentDeviceValue: currentIconSize } = getValueFromAttrsResponsives(
		iconSize,
		deviceType
	);

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							iconSize: {
								...iconSize,
								[deviceType]: value,
							},
						});
					}}
					value={currentIconSize || ""}
					label={__("Icon size", "boostify-blocks")}
					hasResponsive
				/>

				<MyColorPicker
					onChange={(color) => {
						setAttr__({
							...panelData,
							color: color,
						});
					}}
					color={color}
				/>
				<MyColorPicker
					onChange={(color) => {
						setAttr__({
							...panelData,
							hoverColor: color,
						});
					}}
					color={hoverColor}
					label={__("Hover color", "boostify-blocks")}
				/>

				<div className="space-y-4">
					<MyDisclosure label="Border">
						<MyBorderControl
							borderControl={border}
							setAttrs__border={(data) => {
								setAttr__({ ...panelData, border: data });
							}}
						/>
					</MyDisclosure>
					<MyDisclosure label="Dimensions">
						<MyDimensionsNoGapControl
							dimensionControl={dimensions}
							setAttrs__dimensions={(data) => {
								setAttr__({ ...panelData, dimensions: data });
							}}
						/>
					</MyDisclosure>
				</div>
			</div>
		</PanelBody>
	);
};

export default WcbIconListPanel_StyleIcons;
