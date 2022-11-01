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

interface Props {
	panelData: WCB_HEADING_PANEL_BACKGROUND;
	setAttr__: (data: WCB_HEADING_PANEL_BACKGROUND) => void;
}

const WcbHeadingPanelBackground: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_BACKGROUND_DEMO,
	setAttr__,
}) => {
	const { background } = panelData;

	//
	return (
		<PanelBody initialOpen={false} title={__("Background", "wcb")}>
			<MyBackgroundNoImageControl
				backgroundControl={background}
				setAttrs__backgroundControl={(background) => setAttr__({ background })}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelBackground;
