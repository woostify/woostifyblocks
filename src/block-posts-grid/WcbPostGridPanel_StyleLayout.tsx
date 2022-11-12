import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import MyUnitControl from "../components/controls/MyUnitControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyDimensionsNoMarginControl from "../components/controls/MyDimensionsControl/MyDimensionsNoMarginControl";
import {
	MyDimensionsNoMarginControlData,
	MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
} from "../components/controls/MyDimensionsControl/types";

export interface WCB_POST_GRID_PANEL_STYLE_LAYOUT
	extends MyDimensionsNoMarginControlData {
	textAlignment: TextAlignment;
	backgroundColor: string;
}

export const WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO: WCB_POST_GRID_PANEL_STYLE_LAYOUT =
	{
		...MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO,
		textAlignment: "left",
		backgroundColor: "#fafafa",
		padding: {
			Desktop: {
				bottom: "1rem",
				top: "1rem",
				left: "1rem",
				right: "1rem",
			},
		},
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_STYLE_LAYOUT;
	setAttr__: (data: WCB_POST_GRID_PANEL_STYLE_LAYOUT) => void;
}

const WcbPostGridPanel_StyleLayout: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_STYLE_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment, backgroundColor, colunmGap, padding, rowGap } =
		panelData;

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: selected,
		});
	};

	const handleChangeBgColor = (color: string) => {
		setAttr__({
			...panelData,
			backgroundColor: color,
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={textAlignment}
					onChange={handleChangeTextAlignment}
					hasResponsive={false}
				/>

				<MyColorPicker
					label={__("Background color", "wcb")}
					onChange={handleChangeBgColor}
					color={backgroundColor}
				/>

				<MyDimensionsNoMarginControl
					dimensionControl={{ colunmGap, padding, rowGap }}
					setAttrs__dimensions={(data) => {
						setAttr__({
							...panelData,
							...data,
						});
					}}
					paddingLabel={__("Padding content", "wcb")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanel_StyleLayout;
