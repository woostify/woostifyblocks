import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
// @ts-ignore
import { __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";
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
	enableLink: boolean;
	link: string;
	openInNewWindow: boolean;
	addNofollowToLink: boolean;
}

export const WCB_ICON_PANEL_ICON_DEMO: WCB_ICON_PANEL_ICON = {
	size: { Desktop: 20 },
	alignment: { Desktop: "center" },
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-star-filled",
	},
	enableLink: false,
	link: "",
	openInNewWindow: false,
	addNofollowToLink: true,
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

	const { icon, alignment, size, enableLink, link, openInNewWindow, addNofollowToLink } =
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
	const url = panelData.link;
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "boostify-blocks")}
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
						<MyLabelControl hasResponsive>{__("Size", "boostify-blocks")}</MyLabelControl>
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

				<ToggleControl
					label={__("Link", "boostify-blocks")}
					checked={enableLink}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableLink: checked });
					}}
				/>

				{
					enableLink && (
						<>
							<LinkControl
								className="WcbButtonPanelContent__inline-link-input"
								value={{ url }}
								onChange={({
									url: newURL = "",
								}) => {
									setAttr__({
										...panelData,
										link: newURL,
									});
								}}
								onRemove={() => {
									setAttr__({
										...panelData,
										link: "",
										openInNewWindow: false,
										addNofollowToLink: false,
									});
								}}
							/>

							<ToggleControl
								label={__('Add "nofollow" to link', "boostify-blocks")}
								checked={addNofollowToLink}
								onChange={(checked) => {
									setAttr__({ ...panelData, addNofollowToLink: checked });
								}}
							/>
			
							<ToggleControl
								label={__("Open in new windown", "boostify-blocks")}
								checked={openInNewWindow}
								onChange={(checked) => {
									setAttr__({ ...panelData, openInNewWindow: checked });
								}}
							/>
							
						</>
					)
				}
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelIcon;
