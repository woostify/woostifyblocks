import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { MyPosition } from "../types";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_FORM_PANEL_SUBMIT_BUTTON {
	textAlignment: HasResponsive<"start" | "center" | "end">;
	position: HasResponsive<MyPosition>;
}

export const WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO: WCB_FORM_PANEL_SUBMIT_BUTTON = {
	textAlignment: { Desktop: "start" },
	position: { Desktop: "bottom" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FORM_PANEL_SUBMIT_BUTTON;
	setAttr__: (data: WCB_FORM_PANEL_SUBMIT_BUTTON) => void;
}

const WcbFormPanelSubmitButton: FC<Props> = ({
	panelData = WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		textAlignment: textAlignmentProp,
		position: positionProp = { Desktop: "bottom" },
	} = panelData;

	const { currentDeviceValue: position } = getValueFromAttrsResponsives(
		positionProp,
		deviceType
	);
	const { currentDeviceValue: textAlignment } = getValueFromAttrsResponsives(
		textAlignmentProp,
		deviceType
	);

	const alignment_plan: MyRadioItem<"start" | "center" | "end">[] = [
		{ name: "start", icon: "Start" },
		{ name: "center", icon: "Center" },
		{ name: "end", icon: "End" },
	];

	const position_plan: MyRadioItem<MyPosition>[] = [
		{ name: "bottom", icon: "Bottom" },
		{ name: "top", icon: "Top" },
		{ name: "left", icon: "Left" },
		{ name: "right", icon: "Right" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Submit button", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyRadioGroup
					label="Position"
					value={position}
					plans={position_plan}
					onChange={(value) => {
						setAttr__({
							...panelData,
							position: {
								...(positionProp || {}),
								[deviceType]: value,
							},
						});
					}}
					hasResponsive={true}
				/>

				<MyRadioGroup
					label="ALIGNMENT"
					value={textAlignment}
					plans={alignment_plan}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textAlignment: {
								...textAlignmentProp,
								[deviceType]: value,
							},
						});
					}}
					hasResponsive={true}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbFormPanelSubmitButton;
