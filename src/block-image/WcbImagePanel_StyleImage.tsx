import {
	PanelBody,
	// @ts-ignore
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyBoxShadowControl, {
	MyBoxShadowControlData,
} from "../components/controls/MyBoxShadowControl/MyBoxShadowControl";
import { MY_BOX_SHADOW_CONTROL_DEMO } from "../components/controls/MyBoxShadowControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_IMAGE_PANEL_STYLE_IMAGE {
	border: MyBorderControlData;
	boxShadow: MyBoxShadowControlData;
	padding: HasResponsive<DimensionSettings>;
	margin: HasResponsive<DimensionSettings>;
}

export const WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO: WCB_IMAGE_PANEL_STYLE_IMAGE = {
	border: MY_BORDER_CONTROL_DEMO,
	boxShadow: MY_BOX_SHADOW_CONTROL_DEMO,
	padding: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
	margin: {
		Desktop: {
			top: "",
			left: "",
			right: "",
			bottom: "",
		},
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_IMAGE_PANEL_STYLE_IMAGE;
	setAttr__: (data: WCB_IMAGE_PANEL_STYLE_IMAGE) => void;
}

const WcbImagePanel_StyleImage: FC<Props> = ({
	panelData = WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { border, boxShadow, padding, margin } = panelData;
	const { currentDeviceValue: currentPadding } = getValueFromAttrsResponsives(
		padding,
		deviceType
	);
	const { currentDeviceValue: currentMargin } = getValueFromAttrsResponsives(
		margin,
		deviceType
	);
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Image", "wcb")}
		>
			<div className={"space-y-4"}>
				<MyDisclosure defaultOpen label={__("Border", "wcb")}>
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(data) => {
							setAttr__({
								...panelData,
								border: data,
							});
						}}
					/>
				</MyDisclosure>
				<MyDisclosure label={__("Box shadow", "wcb")}>
					<MyBoxShadowControl
						boxShadowControl={boxShadow}
						setAttrs__boxShadow={(data) => {
							setAttr__({
								...panelData,
								boxShadow: data,
							});
						}}
					/>
				</MyDisclosure>

				<BoxControl
					label={
						<MyLabelControl hasResponsive className="">
							{__("Margin", "wcb")}
						</MyLabelControl>
					}
					values={currentMargin}
					onChange={(data) => {
						setAttr__({
							...panelData,
							margin: {
								...margin,
								[deviceType]: data,
							},
						});
					}}
				/>
				<BoxControl
					label={
						<MyLabelControl hasResponsive className="">
							{__("Padding", "wcb")}
						</MyLabelControl>
					}
					values={currentPadding}
					onChange={(data) => {
						setAttr__({
							...panelData,
							padding: {
								...padding,
								[deviceType]: data,
							},
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbImagePanel_StyleImage;
