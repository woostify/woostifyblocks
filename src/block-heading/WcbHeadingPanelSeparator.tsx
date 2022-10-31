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
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_HEADING_PANEL_SEPARATOR {
	border: BorderMainSingleSide;
	width: HasResponsive<string>;
}

export const WCB_HEADING_PANEL_SEPARATOR_DEMO: WCB_HEADING_PANEL_SEPARATOR = {
	border: DEFAULT_BORDER_MAIN_SINGLE_SIDE,
	width: { Desktop: "10%" },
};

interface Props {
	panelSeparator: WCB_HEADING_PANEL_SEPARATOR;
	setAttr__panelSeparator: (data: WCB_HEADING_PANEL_SEPARATOR) => void;
}

const WcbHeadingPanelSeparator: FC<Props> = ({
	panelSeparator = WCB_HEADING_PANEL_SEPARATOR_DEMO,
	setAttr__panelSeparator,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { border, width: widthProps } = panelSeparator;

	const CUSTOM_WIDTH =
		widthProps[deviceType] || widthProps.Tablet || widthProps.Desktop;

	const renderCustomWidth = () => {
		const units = [
			{ value: "px", label: "px", default: 100 },
			{ value: "%", label: "%", default: 10 },
			{ value: "vw", label: "vw", default: 10 },
		];
		return (
			<div className="flex items-center justify-between">
				<MyLabelControl className="flex-shrink-0" hasResponsive>
					{__("Custom Width", "wcb")}
				</MyLabelControl>
				<UnitControl
					className="flex-grow ml-3"
					units={units}
					value={CUSTOM_WIDTH}
					onChange={(value) => {
						setAttr__panelSeparator({
							...panelSeparator,
							width: {
								...widthProps,
								[deviceType]: value,
							},
						});
					}}
				/>
			</div>
		);
	};
	//
	return (
		<PanelBody initialOpen={false} title={__("Separator", "wcb")}>
			<div className="space-y-5">
				{renderCustomWidth()}
				<BorderControl
					label={__("Border styles")}
					onChange={(border: BorderMainSingleSide) => {
						setAttr__panelSeparator({
							...panelSeparator,
							border,
						});
					}}
					value={border}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbHeadingPanelSeparator;
