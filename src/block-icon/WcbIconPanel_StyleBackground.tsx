import { PanelBody, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

export interface WCB_ICON_PANEL_STYLE_BACKGROUND {
	normal: BackgroundNoImageControlData;
	hover: BackgroundNoImageControlData;
}

export const WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_1: WCB_ICON_PANEL_STYLE_BACKGROUND =
	{
		normal: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#2B2B2B" },
		hover: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#2B2B2B" },
	};
export const WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_3: WCB_ICON_PANEL_STYLE_BACKGROUND =
	{
		normal: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#2B2B2B" },
		hover: { ...STYLES_BG_NO_IMAGE_DEMO, color: "#2B2B2B" },
	};
export const WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO_WHITE: WCB_ICON_PANEL_STYLE_BACKGROUND =
	{
		normal: STYLES_BG_NO_IMAGE_DEMO,
		hover: STYLES_BG_NO_IMAGE_DEMO,
	};

export const WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO =
WCB_ICON_PANEL_STYLE_BACKGROUND_PRESET_1;
interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_PANEL_STYLE_BACKGROUND;
	setAttr__: (data: WCB_ICON_PANEL_STYLE_BACKGROUND) => void;
}

type TabsHere = "normal" | "hover";
const PanelTab: {
	name: TabsHere;
	title: string;
}[] = [
	{ name: "normal", title: __("Normal", "boostify-blocks") },
	{ name: "hover", title: __("Hover", "boostify-blocks") },
];

const WcbIconPanel_StyleBackground: FC<Props> = ({
	panelData = WCB_ICON_PANEL_STYLE_BACKGROUND_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { hover, normal } = panelData;
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Background", "boostify-blocks")}
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
								backgroundControl={normal}
								setAttrs__backgroundControl={(data) => {
									setAttr__({ ...panelData, normal: data });
								}}
							/>
						);
					} else {
						return (
							<MyBackgroundNoImageControl
								backgroundControl={hover}
								setAttrs__backgroundControl={(data) => {
									setAttr__({ ...panelData, hover: data });
								}}
							/>
						);
					}
				}}
			</TabPanel>
		</PanelBody>
	);
};

export default WcbIconPanel_StyleBackground;
