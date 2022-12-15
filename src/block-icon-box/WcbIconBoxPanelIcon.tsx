import { PanelBody, TabPanel, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySelect from "../components/controls/MySelect";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { Option } from "../types";

export interface WCB_ICON_BOX_PANEL_ICON {
	enableIcon: boolean;
	icon: MyIcon;
	iconPosition:
		| "top"
		| "left"
		| "right"
		| "leftOfTitle"
		| "rightOfTitle"
		| "bellowTitle";
}

export const WCB_ICON_BOX_PANEL_ICON_DEMO: WCB_ICON_BOX_PANEL_ICON = {
	enableIcon: false,
	iconPosition: "left",
	icon: DEFAULT_MY_ICON,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_ICON;
	setAttr__: (data: WCB_ICON_BOX_PANEL_ICON) => void;
}

const WcbIconBoxPanelIcon: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { enableIcon, icon, iconPosition } = panelData;
	//
	const PLANS_DEMO: Option<WCB_ICON_BOX_PANEL_ICON["iconPosition"]>[] = [
		{ value: "top", label: "Top" },
		{ value: "left", label: "Left" },
		{ value: "right", label: "Right" },
		{ value: "leftOfTitle", label: "Left Of Title" },
		{ value: "rightOfTitle", label: "Right Of Title" },
		{ value: "bellowTitle", label: "Bellow Title" },
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

				<SelecIcon
					iconData={icon}
					onChange={(value) => {
						setAttr__({
							...panelData,
							icon: value,
						});
					}}
				/>

				<MySelect
					label={__("Position", "Wcb")}
					options={PLANS_DEMO}
					value={iconPosition}
					onChange={(value) => {
						setAttr__({
							...panelData,
							iconPosition: value as WCB_ICON_BOX_PANEL_ICON["iconPosition"],
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelIcon;
