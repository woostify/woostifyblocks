import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_HEADING_PANEL_HEADING {
	textAlignment: HasResponsive<TextAlignment>;
	headingTag: keyof JSX.IntrinsicElements;
}

export const WCB_HEADING_PANEL_HEADING_DEMO: WCB_HEADING_PANEL_HEADING = {
	textAlignment: { Desktop: "left" },
	headingTag: "h2",
};

interface Props {
	panelData: WCB_HEADING_PANEL_HEADING;
	setAttr__: (data: WCB_HEADING_PANEL_HEADING) => void;
}

const WcbHeadingPanelHeading: FC<Props> = ({
	panelData = WCB_HEADING_PANEL_HEADING_DEMO,
	setAttr__,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment } = panelData;
	const TEXT_ALIGNMENT =
		textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

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
			className={"space-y-5"}
			initialOpen={false}
			title={__("Panel Heading", "wcb")}
		>
			<MyTextAlignControl
				textAlignment={TEXT_ALIGNMENT}
				onChange={handleChangeTextAlignment}
			/>
		</PanelBody>
	);
};

export default WcbHeadingPanelHeading;
