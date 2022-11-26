import { Dashicon, PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import SelecIcon from "../components/controls/SelectIcon/SelecIcon";
import useGetDeviceType from "../hooks/useGetDeviceType";

export interface WCB_FAQ_PANEL_ICON {
	enableIcon: boolean;
	iconName?: Dashicon.Icon;
	inactiveIconName?: Dashicon.Icon;
	iconPosition: "top" | "left" | "right" | "bottom";
}

export const WCB_FAQ_PANEL_ICON_DEMO: WCB_FAQ_PANEL_ICON = {
	enableIcon: true,
	iconName: "heart",
	inactiveIconName: "hammer",
	iconPosition: "left",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_ICON;
	setAttr__: (data: WCB_FAQ_PANEL_ICON) => void;
}

const WcbFaqPanelIcon: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { enableIcon, iconName, iconPosition, inactiveIconName } = panelData;

	const PLANS_DEMO: MyRadioItem<WCB_FAQ_PANEL_ICON["iconPosition"]>[] = [
		{ name: "left", icon: "Left" },
		{ name: "right", icon: "Right" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable Icon", "wcb")}
					checked={enableIcon}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/>
				{enableIcon && (
					<>
						<SelecIcon
							label={__("Active Icon:", "wcb")}
							value={iconName}
							onChange={(value) => {
								setAttr__({
									...panelData,
									iconName: value,
								});
							}}
						/>

						<SelecIcon
							label={__("Inactive Icon:", "wcb")}
							value={inactiveIconName}
							onChange={(value) => {
								setAttr__({
									...panelData,
									inactiveIconName: value,
								});
							}}
						/>

						<MyRadioGroup
							label={__("Icon position", "wcb")}
							value={iconPosition}
							onChange={(value) => {
								setAttr__({
									...panelData,
									iconPosition: value as typeof iconPosition,
								});
							}}
							hasResponsive={false}
							plans={PLANS_DEMO}
						/>
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbFaqPanelIcon;
