import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_HEADING_PANEL_HEADING {
	textAlignment: HasResponsive<TextAlignment>;
	headingTag: keyof HTMLElementTagNameMap;
}

export const WCB_HEADING_PANEL_HEADING_DEMO: WCB_HEADING_PANEL_HEADING = {
	textAlignment: { Desktop: "left" },
	headingTag: "h2",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_HEADING_PANEL_HEADING;
	setAttr__: (data: WCB_HEADING_PANEL_HEADING) => void;
}

const WcbHeadingPanelHeading: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_HEADING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment } = panelData;

	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		textAlignment,
		deviceType
	);

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: {
				...textAlignment,
				[deviceType]: selected,
			},
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Panel Heading", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={handleChangeTextAlignment}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelHeading;
