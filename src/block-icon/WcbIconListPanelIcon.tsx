import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../components/controls/MySelect";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";
import { Option } from "../types";

export interface WCB_ICON_LIST_PANEL_ICON {
	enableIcon: boolean;
	icon: MyIcon;
	iconPosition: "leftOfTitle" | "rightOfTitle"
	stackOn: "none" | "tablet" | "mobile";
	verticalAlignment: "top" | "middle";
}

export const WCB_ICON_LIST_PANEL_ICON_DEMO: WCB_ICON_LIST_PANEL_ICON = {
	enableIcon: true,
	iconPosition: "leftOfTitle",
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-checkmark-circle",
	},
	stackOn: "none",
	verticalAlignment: "top",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_LIST_PANEL_ICON;
	setAttr__: (data: WCB_ICON_LIST_PANEL_ICON) => void;
}

const WcbIconListPanelIcon: FC<Props> = ({
	panelData = WCB_ICON_LIST_PANEL_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { enableIcon, icon, iconPosition } =
		panelData;
	//
	const PLANS_DEMO: Option<WCB_ICON_LIST_PANEL_ICON["iconPosition"]>[] = [
		{ value: "leftOfTitle", label: "Left Of Title" },
		{ value: "rightOfTitle", label: "Right Of Title" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "wcb")}
		>
			<div className={"space-y-5"}>
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
						let newData: WCB_ICON_LIST_PANEL_ICON = {
							...panelData,
							iconPosition:
								value as WCB_ICON_LIST_PANEL_ICON["iconPosition"],
						};
						setAttr__(newData);
					}}
				/>	
			</div>
		</PanelBody>
	);
};

export default WcbIconListPanelIcon;
