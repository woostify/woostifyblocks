import React, { FC } from "react";
import { BackgroundControlData } from "./controls/MyBackgroundControl/MyBackgroundControl";
import { VideoMediaUploadData } from "./controls/MyVideoUploadCheck";

interface Props {
	videoData: VideoMediaUploadData;
	bgType: BackgroundControlData["bgType"];
}

const VideoBackgroundByBgControl: FC<Props> = ({ videoData, bgType }) => {
	if (bgType !== "video" || !videoData?.mediaId) {
		return null;
	}
	const SRC = videoData?.mediaUrl || "";
	return (
		<div className="wcb-VideoBackgroundByBgControl">
			<video
				autoPlay
				loop
				muted
				controls={false}
				title={SRC}
				data-id={videoData.mediaId}
				src={SRC}
			></video>
		</div>
	);
};

export default VideoBackgroundByBgControl;
