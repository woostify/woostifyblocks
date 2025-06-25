import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC, useEffect } from "react";
import MyTypographyControl from "../components/controls/MyTypographyControl/MyTypographyControl";
import {
	MyTypographyControlData,
	TYPOGRAPHY_CONTROL_DEMO,
} from "../components/controls/MyTypographyControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ICON_LIST_PANEL_STYLE_TITLE {
	typography: MyTypographyControlData;
	textColor: string;
	textColorHover: string;
	marginBottom: HasResponsive<string>;
}

export const WCB_ICON_LIST_PANEL_STYLE_TITLE_DEMO: WCB_ICON_LIST_PANEL_STYLE_TITLE =
{
	typography: TYPOGRAPHY_CONTROL_DEMO,
	textColor: "#171717",
	textColorHover: "#171717",
	marginBottom: { Desktop: "" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_LIST_PANEL_STYLE_TITLE;
	setAttr__: (data: WCB_ICON_LIST_PANEL_STYLE_TITLE) => void;
}

const WcbIconListPanel_StyleTitle: FC<Props> = ({
	panelData = WCB_ICON_LIST_PANEL_STYLE_TITLE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { typography, textColor, textColorHover, marginBottom } = panelData;

	// Normalize typography appearance.style to ensure it's always an object
	useEffect(() => {
		let needsUpdate = false;
		let updatedTypography = { ...typography };

		// Fix appearance.style if it's an array
		if (typography?.appearance?.style && Array.isArray(typography.appearance.style)) {
			updatedTypography.appearance = {
				...typography.appearance,
				style: {},
			};
			needsUpdate = true;
		}

		// Fix lineHeight if it's an array
		if (typography?.lineHeight && Array.isArray(typography.lineHeight)) {
			updatedTypography.lineHeight = { Desktop: undefined };
			needsUpdate = true;
		}

		// Fix letterSpacing if it's an array
		if (typography?.letterSpacing && Array.isArray(typography.letterSpacing)) {
			updatedTypography.letterSpacing = { Desktop: undefined };
			needsUpdate = true;
		}

		if (needsUpdate) {
			setAttr__({
				...panelData,
				typography: updatedTypography,
			});
		}
	}, [typography?.appearance?.style, typography?.lineHeight, typography?.letterSpacing, panelData, setAttr__]);

	const { currentDeviceValue: MARGIN_BOTTOM } = getValueFromAttrsResponsives(
		marginBottom,
		deviceType
	);
	//
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Title", "wcb")}
		>
			<div className="space-y-2.5">
				<MyTypographyControl
					typographyControl={typography}
					setAttrs__typography={(typography) => {
						setAttr__({
							...panelData,
							typography,
						});
					}}
				/>

				<MyDisclosure defaultOpen label="More styles">
					<MyColorPicker
						onChange={(color) => {
							setAttr__({
								...panelData,
								textColor: color,
							});
						}}
						color={textColor}
					/>

					<MyColorPicker
						label={__("Hover color", "wcb")}
						onChange={(value) => {
							setAttr__({ ...panelData, textColorHover: value });
						}}
						color={textColorHover}
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
						value={MARGIN_BOTTOM || "0rem"}
						label={__("Margin bottom", "wcb")}
						hasResponsive
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbIconListPanel_StyleTitle;
