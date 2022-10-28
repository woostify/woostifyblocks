import React, { FC } from "react";
import { BackgroundControlData } from "./controls/MyBackgroundControl/MyBackgroundControl";

interface Props {
	overlayType: BackgroundControlData["overlayType"];
	bgType: BackgroundControlData["bgType"];
}

const OverlayBackgroundByBgControl: FC<Props> = ({ overlayType, bgType }) => {
	if (overlayType === "none") {
		return null;
	}
	if (bgType !== "video" && bgType !== "image") {
		return null;
	}

	return <div className="wcb-OverlayBackgroundByBgControl"></div>;
};

export default OverlayBackgroundByBgControl;
