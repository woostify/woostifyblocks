import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { PLANS_FLEX_DIRECTIONS_DEMO } from "../components/controls/MyFlexPropertiesControl/types";
import MyRadioGroup from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_COUNTDOWN_PANEL_LAYOUT {
	textAlignment: HasResponsive<TextAlignment>;
	contentWidth: HasResponsive<string>;
	flexDirection: HasResponsive<CSSProperties["flexDirection"]>;
}

export const WCB_COUNTDOWN_PANEL_LAYOUT_PRESET_LEFT_DEMO: WCB_COUNTDOWN_PANEL_LAYOUT = {
	textAlignment: { Desktop: "left" },
	contentWidth: { Desktop: "100%" },
	flexDirection: { Desktop: "column" },
};
export const WCB_COUNTDOWN_PANEL_LAYOUT_PRESET_CENTER_DEMO: WCB_COUNTDOWN_PANEL_LAYOUT = {
	textAlignment: { Desktop: "center" },
	contentWidth: { Desktop: "100%" },
	flexDirection: { Desktop: "column" },
};

export const WCB_COUNTDOWN_PANEL_LAYOUT_DEMO: WCB_COUNTDOWN_PANEL_LAYOUT = {
	textAlignment: { Desktop: "center" },
	contentWidth: { Desktop: "100%" },
	flexDirection: { Desktop: "row" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_LAYOUT;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_LAYOUT) => void;
}

const WcbCountdownPanelLayout: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment, contentWidth, flexDirection } = panelData;

	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		textAlignment,
		deviceType
	);
	const { currentDeviceValue: CONTENT_WIDTH } = getValueFromAttrsResponsives(
		contentWidth,
		deviceType
	);

	const { currentDeviceValue: FLEX_DIRECTION } = getValueFromAttrsResponsives(
		flexDirection,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textAlignment: {
								...textAlignment,
								[deviceType]: value,
							},
						});
					}}
				/>

				<div>
					<MyRadioGroup
						label={__("Flex Direction", "boostify-blocks")}
						onChange={(value) => {
							setAttr__({
								...panelData,
								flexDirection: {
									...flexDirection,
									[deviceType]: value,
								},
							});
						}}
						plans={PLANS_FLEX_DIRECTIONS_DEMO}
						value={FLEX_DIRECTION}
					/>
					<HelpText>{__("Flex property between content and button.")}</HelpText>
				</div>

				<MySpacingSizesControl
					label={__("Content width", "boostify-blocks")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							contentWidth: {
								...contentWidth,
								[deviceType]: value,
							},
						});
					}}
					value={CONTENT_WIDTH || "100%"}
					units={[{ value: "%", label: "%", default: 100 }]}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanelLayout;
