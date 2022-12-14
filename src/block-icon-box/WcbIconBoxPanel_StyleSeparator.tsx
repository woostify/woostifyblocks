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
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ICON_BOX_PANEL_STYLE_SEPARATOR {
	border: BorderMainSingleSide;
	width: HasResponsive<string>;
}

export const WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO: WCB_ICON_BOX_PANEL_STYLE_SEPARATOR =
	{
		border: DEFAULT_BORDER_MAIN_SINGLE_SIDE,
		width: { Desktop: "10%" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_STYLE_SEPARATOR;
	setAttr__: (data: WCB_ICON_BOX_PANEL_STYLE_SEPARATOR) => void;
}

const WcbIconBoxPanel_StyleSeparator: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { border, width: widthProps } = panelData;

	const { currentDeviceValue: CUSTOM_WIDTH } = getValueFromAttrsResponsives(
		widthProps,
		deviceType
	);

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
						setAttr__({
							...panelData,
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
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Separator", "wcb")}
		>
			<div className="space-y-5">
				{renderCustomWidth()}
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
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanel_StyleSeparator;
