import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC, CSSProperties } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import { TYPOGRAPHY_CONTROL_DEMO } from "../components/controls/MyTypographyControl/types";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import {
	MyTypographyControlData,
} from "../components/controls/MyTypographyControl/types";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import {
    TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import MyTextAlignControl, {
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";

export interface WCB_SLIDER_PANEL_STYLE_CONTENT {
	typography: MyTypographyControlData;
	textColor: string;
	marginBottom: HasResponsive<string>;
	textAlignment: HasResponsive<TextAlignment>;
}

export const WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO: WCB_SLIDER_PANEL_STYLE_CONTENT =
	{
		typography: {
			...TYPOGRAPHY_CONTROL_DEMO,
			lineHeight: { Desktop: 1.75 },
		},
		textColor: "",
		marginBottom: { Desktop: "1.5rem" },
		textAlignment: { Desktop: "center" , Tablet: "center", Mobile: "center" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_PANEL_STYLE_CONTENT;
	setAttr__: (data: WCB_SLIDER_PANEL_STYLE_CONTENT) => void;
}

const WcbSlidersPanel_StyleContent: FC<Props> = ({
	panelData = WCB_SLIDER_PANEL_STYLE_CONTENT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, marginBottom, textAlignment } = panelData;
	const { currentDeviceValue: currentMarginBottom } =
		getValueFromAttrsResponsives(marginBottom, deviceType);

    const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
        textAlignment,
        deviceType
    );

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
			title={__("Content", "wcb")}
		>
			<div className="space-y-5">
				<MyTextAlignControl
                    textAlignment={TEXT_ALIGNMENT}
                    onChange={handleChangeTextAlignment}
                />
				
				<MyColorPicker
					label={__("Color", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textColor: value,
						});
					}}
					color={textColor}
					disableAlpha={true}
				/>

				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
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
					value={currentMarginBottom || ""}
					label={__("Margin bottom", "wcb")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbSlidersPanel_StyleContent;
