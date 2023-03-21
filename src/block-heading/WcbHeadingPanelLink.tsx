import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyLinkColorControl, {
	MyLinkColorControlData,
	MY_LINK_COLOR_CONTROL_DEMO,
} from "../components/controls/MyLinkColorControl/MyLinkColorControl";

export interface WCB_HEADING_PANEL_LINK {
	linkColor: MyLinkColorControlData;
}

export const WCB_HEADING_PANEL_LINK_DEMO: WCB_HEADING_PANEL_LINK = {
	linkColor: MY_LINK_COLOR_CONTROL_DEMO,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_HEADING_PANEL_LINK;
	setAttr__: (data: WCB_HEADING_PANEL_LINK) => void;
}

const WcbHeadingPanelLink: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_LINK_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { linkColor } = panelData;
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Link color", "wcb")}
		>
			<MyLinkColorControl
				linkColorControl={linkColor}
				setAttrs__linkColor={(linkColor) => setAttr__({ linkColor })}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelLink;
