import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyBoxShadowControl, {
	MyBoxShadowControlData,
} from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";

export interface WCB_ICON_PANEL_STYLE_BOXSHADOW
	extends MyBoxShadowControlData {}

export const WCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO: WCB_ICON_PANEL_STYLE_BOXSHADOW =
	{
		...MY_BOX_SHADOW_CONTROL_DEMO,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_PANEL_STYLE_BOXSHADOW;
	setAttr__: (data: WCB_ICON_PANEL_STYLE_BOXSHADOW) => void;
}

const WcbIconPanel_StyleBoxshadow: FC<Props> = ({
	panelData = WCB_ICON_PANEL_STYLE_BOXSHADOW_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Box shadow", "boostify-blocks")}
		>
			<MyBoxShadowControl
				boxShadowControl={panelData}
				setAttrs__boxShadow={(data) => setAttr__({ ...data })}
			/>
		</PanelBody>
	);
};

export default WcbIconPanel_StyleBoxshadow;
