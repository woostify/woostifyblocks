import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";

export interface WCB_HEADING_PANEL_BACKGROUND {
	background: BackgroundNoImageControlData;
}

export const WCB_HEADING_PANEL_BACKGROUND_DEMO: WCB_HEADING_PANEL_BACKGROUND = {
	background: STYLES_BG_NO_IMAGE_DEMO,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_HEADING_PANEL_BACKGROUND;
	setAttr__: (data: WCB_HEADING_PANEL_BACKGROUND) => void;
}

const WcbHeadingPanelBackground: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_BACKGROUND_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { background } = panelData;

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Background", "boostify-blocks")}
		>
			<MyBackgroundNoImageControl
				backgroundControl={background}
				setAttrs__backgroundControl={(background) => setAttr__({ background })}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelBackground;
