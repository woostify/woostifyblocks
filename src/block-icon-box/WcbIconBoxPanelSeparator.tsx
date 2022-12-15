import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySelect from "../components/controls/MySelect";
import useGetDeviceType from "../hooks/useGetDeviceType";
import { Option } from "../types";

export interface WCB_ICON_BOX_PANEL_SEPARATOR {
	enableSeparator: boolean;
	position: "afterIcon" | "afterPrefix" | "afterTitle" | "afterDescription";
}

export const WCB_ICON_BOX_PANEL_SEPARATOR_DEMO: WCB_ICON_BOX_PANEL_SEPARATOR = {
	enableSeparator: true,
	position: "afterTitle",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_SEPARATOR;
	setAttr__: (data: WCB_ICON_BOX_PANEL_SEPARATOR) => void;
}

const WcbIconBoxPanelSeparator: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_SEPARATOR_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { enableSeparator, position } = panelData;
	const PLANS_DEMO: Option<WCB_ICON_BOX_PANEL_SEPARATOR["position"]>[] = [
		{ value: "afterIcon", label: "After Icon" },
		{ value: "afterPrefix", label: "After Prefix" },
		{ value: "afterTitle", label: "After Title" },
		{ value: "afterDescription", label: "After Description" },
	];
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Separator", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable separator", "wcb")}
					checked={enableSeparator}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableSeparator: checked });
					}}
				/>

				<MySelect
					label={__("Position", "Wcb")}
					options={PLANS_DEMO}
					value={position}
					onChange={(value) => {
						setAttr__({
							...panelData,
							position: value as WCB_ICON_BOX_PANEL_SEPARATOR["position"],
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelSeparator;
