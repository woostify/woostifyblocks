import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	// @ts-ignore
	__experimentalBorderControl as BorderControl,
	// @ts-ignore
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import React, { useEffect, FC } from "react";
import {
	BorderMainSingleSide,
	DEFAULT_BORDER_MAIN_SINGLE_SIDE,
} from "../components/controls/MyBorderControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";

export interface WCB_ICON_LIST_PANEL_STYLE_SEPARATOR {
	border: BorderMainSingleSide;
	width: HasResponsive<string>;
	marginBottom: HasResponsive<string>;
}

export const WCB_ICON_LIST_PANEL_STYLE_SEPARATOR_DEMO: WCB_ICON_LIST_PANEL_STYLE_SEPARATOR =
	{
		border: {
			...DEFAULT_BORDER_MAIN_SINGLE_SIDE,
			color: "#334155",
		},
		width: { Desktop: "40%" },
		marginBottom: { Desktop: "1rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_LIST_PANEL_STYLE_SEPARATOR;
	setAttr__: (data: WCB_ICON_LIST_PANEL_STYLE_SEPARATOR) => void;
}

const WcbIconListPanel_StyleSeparator: FC<Props> = ({
	panelData = WCB_ICON_LIST_PANEL_STYLE_SEPARATOR_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { border, width: widthProps, marginBottom } = panelData;

	const { currentDeviceValue: MARGIN_BOTTOM } = getValueFromAttrsResponsives(
		marginBottom,
		deviceType
	);

	const { currentDeviceValue: CUSTOM_WIDTH } = getValueFromAttrsResponsives(
		widthProps,
		deviceType
	);

	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Separator", "boostify-blocks")}
		>
			<div className="space-y-5">
				<MySpacingSizesControl
					value={CUSTOM_WIDTH || ""}
					onChange={(value) => {
						setAttr__({
							...panelData,
							width: {
								...widthProps,
								[deviceType]: value,
							},
						});
					}}
					label={__("Custom Width", "boostify-blocks")}
				/>
				<BorderControl
					label={__("Border styles")}
					onChange={(border: BorderMainSingleSide) => {
						setAttr__({
							...panelData,
							border,
						});
					}}
					withSlider
					value={border}
				/>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							marginBottom: {
								...marginBottom,
								[deviceType]: value,
							},
						});
					}}
					value={MARGIN_BOTTOM || ""}
					label={__("Margin bottom", "boostify-blocks")}
					hasResponsive
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconListPanel_StyleSeparator;
