import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties, useState } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyQueryControls from "../components/controls/MyQueryControls/MyQueryControls";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING {
	textAlignment: HasResponsive<TextAlignment>;
	headingTag: keyof JSX.IntrinsicElements;
}
export const WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING =
	{
		textAlignment: { Desktop: "left" },
		headingTag: "h2",
	};

interface Props {
	panelData: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING;
	setAttr__: (data: WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING) => void;
}

const WcbPostsGridPanelSortingAndFiltering: FC<Props> = ({
	panelData = WCB_POSTS_GRID_PANEL_SORTINGANDFILTERING_DEMO,
	setAttr__,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
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
			initialOpen
			title={__("Sorting and filtering", "wcb")}
		>
			<MyQueryControls />

			{/* <MyTextAlignControl
				textAlignment={TEXT_ALIGNMENT}
				onChange={handleChangeTextAlignment}
			/> */}
		</PanelBody>
	);
};

export default WcbPostsGridPanelSortingAndFiltering;
