import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import MyBackgroundNoImageControl, {
	BackgroundNoImageControlData,
	STYLES_BG_NO_IMAGE_DEMO,
} from "../components/controls/MyBackgroundControl/MyBackgroundNoImageControl";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyBorderControl from "../components/controls/MyBorderControl/MyBorderControl";
import {
	MyBorderControlData,
	MY_BORDER_CONTROL_DEMO,
} from "../components/controls/MyBorderControl/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_FAQ_PANEL_STYLE_CONTAINER {
	background: BackgroundNoImageControlData;
	border: MyBorderControlData;
	rowGap: HasResponsive<string>;
	colunmGap: HasResponsive<string>;
	equalHeight: boolean;
}

export const WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO_SIMPLE: WCB_FAQ_PANEL_STYLE_CONTAINER =
	{
		background: STYLES_BG_NO_IMAGE_DEMO,
		border: MY_BORDER_CONTROL_DEMO,
		equalHeight: true,
		colunmGap: { Desktop: "1rem" },
		rowGap: { Desktop: "1rem" },
	};

export const WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO_SOLID: WCB_FAQ_PANEL_STYLE_CONTAINER =
	{
		background: {
			...STYLES_BG_NO_IMAGE_DEMO,
			bgType: "color",
			color: "#f5f5f5",
		},
		border: {
			...MY_BORDER_CONTROL_DEMO,
			mainSettings: {
				...MY_BORDER_CONTROL_DEMO.mainSettings,
				color: "#f5f5f5",
				style: "solid",
				width: "1px",
			},
		},
		equalHeight: true,
		colunmGap: { Desktop: "1rem" },
		rowGap: { Desktop: "1rem" },
	};
export const WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO =
	WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO_SIMPLE;
interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_STYLE_CONTAINER;
	setAttr__: (data: WCB_FAQ_PANEL_STYLE_CONTAINER) => void;
}

const WcbFaqPanel_StyleContainer: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_STYLE_CONTAINER_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const { background, border, colunmGap, equalHeight, rowGap } = panelData;
	const { currentDeviceValue: currentRowGap } = getValueFromAttrsResponsives(
		rowGap,
		deviceType
	);
	const { currentDeviceValue: currentColunmGap } = getValueFromAttrsResponsives(
		colunmGap,
		deviceType
	);

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Container", "boostify-blocks")}
		>
			<div className={"space-y-3.5"}>
				<MyDisclosure defaultOpen label={__("Background", "boostify-blocks")}>
					<MyBackgroundNoImageControl
						backgroundControl={background}
						setAttrs__backgroundControl={(value) => {
							setAttr__({ ...panelData, background: value });
						}}
					/>
				</MyDisclosure>
				<MyDisclosure label={__("Border ", "boostify-blocks")}>
					<MyBorderControl
						borderControl={border}
						setAttrs__border={(value) => {
							setAttr__({ ...panelData, border: value });
						}}
					/>
				</MyDisclosure>
				<MyDisclosure label={__("Dimension", "boostify-blocks")}>
					<MySpacingSizesControl
						onChange={(value) => {
							setAttr__({
								...panelData,
								rowGap: {
									...rowGap,
									[deviceType]: value,
								},
							});
						}}
						value={currentRowGap || "0"}
						label={__("Row Gap", "boostify-blocks")}
					/>
					<div>
						<MySpacingSizesControl
							onChange={(value) => {
								setAttr__({
									...panelData,
									colunmGap: {
										...colunmGap,
										[deviceType]: value,
									},
								});
							}}
							value={currentColunmGap || "0"}
							label={__("Column Gap", "boostify-blocks")}
						/>
						<HelpText>
							{__(
								"Applicable in case the style of the FAQ is set to Grid",
								"boostify-blocks"
							)}
						</HelpText>
					</div>

					<ToggleControl
						label="Equal height"
						help={__(
							"Applicable in case the style of the FAQ is set to Grid",
							"boostify-blocks"
						)}
						checked={equalHeight}
						onChange={(checked) => {
							setAttr__({
								...panelData,
								equalHeight: checked,
							});
						}}
					/>
				</MyDisclosure>
			</div>
		</PanelBody>
	);
};

export default WcbFaqPanel_StyleContainer;
