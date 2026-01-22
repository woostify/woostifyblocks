import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyBackgroundControl, {
	BackgroundControlData,
	STYLES_BG_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundControl";
import MyDisclosure from "../components/controls/MyDisclosure";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";

export interface WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER {
	background: BackgroundControlData;
	border: MyBorderControlData;
}
export const WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO: WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER =
	{
		background: STYLES_BG_DEMO,
		border: MY_BORDER_CONTROL_DEMO,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER) => void;
}

const WcbTestimonialsPanel_StyleBackground: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_STYLE_BACKGROUND_BORDER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { background, border } = panelData;
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Background & Border", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MyDisclosure defaultOpen label="Background">
					<MyBackgroundControl
						backgroundControl={background}
						setAttrs__backgroundControl={(data) =>
							setAttr__({ ...panelData, background: data })
						}
					/>
				</MyDisclosure>
				<MyDisclosure defaultOpen label="Border">
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(data) =>
							setAttr__({ ...panelData, border: data })
						}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanel_StyleBackground;
