import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";

import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";

export interface WCB_ICON_PANEL_ICON {
	size: HasResponsive<number>;
	alignment: HasResponsive<TextAlignment>;
	icon: MyIcon;
}

export const WCB_ICON_PANEL_ICON_DEMO: WCB_ICON_PANEL_ICON = {
	size: { Desktop: 20 },
	alignment: { Desktop: "center" },
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-star-filled",
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_PANEL_ICON;
	setAttr__: (data: WCB_ICON_PANEL_ICON) => void;
}

const WcbIconBoxPanelIcon: FC<Props> = ({
	panelData = WCB_ICON_PANEL_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { icon, alignment, size } =
		panelData;
	//
	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		alignment,
		deviceType
	);
	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			alignment: {
				...alignment,
				[deviceType]: selected,
			},
		});
	};
	//
	
	const { currentDeviceValue: currentSize } = getValueFromAttrsResponsives(
		size,
		deviceType
	);

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

				<RangeControl
					label={
						<MyLabelControl hasResponsive>{__("Size", "wcb")}</MyLabelControl>
					}
					value={currentSize || 16}
					onChange={(value) => {
						setAttr__({
							...panelData,
							size: {
								...size,
								[deviceType]: value,
							},
						});
					}}
					min={2}
					max={200}
				/>

				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={handleChangeTextAlignment}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelIcon;
