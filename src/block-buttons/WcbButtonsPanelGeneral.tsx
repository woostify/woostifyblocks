import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import HelpText from "../components/controls/HelpText";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export type BtnGroupAlignment =
	| "justify-start"
	| "justify-center"
	| "justify-end"
	| "child-flex-1";

export interface WCB_BUTTONS_PANEL_GENERAL {
	alignment: HasResponsive<BtnGroupAlignment>;
	stackOrientation: "none" | "Desktop" | "Tablet" | "Mobile";
	gap: HasResponsive<string>;
}

export const WCB_BUTTONS_PANEL_GENERAL_DEMO: WCB_BUTTONS_PANEL_GENERAL = {
	alignment: { Desktop: "justify-start" },
	stackOrientation: "Mobile",
	gap: { Desktop: "1rem" },
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_BUTTONS_PANEL_GENERAL;
	setAttr__: (data: WCB_BUTTONS_PANEL_GENERAL) => void;
}

const WcbButtonsPanelGeneral: FC<Props> = ({
	panelData = WCB_BUTTONS_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { alignment, stackOrientation, gap } = panelData;
	const { currentDeviceValue: currentAlignment } = getValueFromAttrsResponsives(
		alignment,
		deviceType
	);
	const { currentDeviceValue: currentGap } = getValueFromAttrsResponsives(
		gap,
		deviceType
	);

	const PLANS_alignment: MyRadioItem<BtnGroupAlignment>[] = [
		{
			name: "justify-start",
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 4.5H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12 9.5H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M21 14.5H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M21 19.5H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
		},
		{
			name: "justify-center",
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
		},
		{
			name: "justify-end",
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
		},
		{
			name: "child-flex-1",
			label: "Stretch items",
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`,
		},
	];

	const PLANS_stackOrientation: MyRadioItem<
		WCB_BUTTONS_PANEL_GENERAL["stackOrientation"]
	>[] = [
		{
			name: "none",
			icon: `None`,
		},
		{
			name: "Desktop",
			icon: `Desktop`,
		},
		{
			name: "Tablet",
			icon: `Tablet`,
		},
		{
			name: "Mobile",
			label: "Stretch items",
			icon: `Mobile`,
		},
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyRadioGroup
					onChange={(value) => {
						setAttr__({
							...panelData,
							alignment: {
								...alignment,
								[deviceType]: value,
							},
						});
					}}
					value={currentAlignment || ""}
					plans={PLANS_alignment}
					hasResponsive
					label={__("Overall Alignment", "wcb")}
				/>

				<div>
					<MyRadioGroup
						onChange={(value) => {
							setAttr__({
								...panelData,
								stackOrientation: value as typeof stackOrientation,
							});
						}}
						value={stackOrientation || ""}
						plans={PLANS_stackOrientation}
						hasResponsive={false}
						label={__("Stack Orientation", "wcb")}
					/>
					<HelpText>
						{__(
							"Note: Choose on what breakpoint the buttons will stack.",
							"wcb"
						)}
					</HelpText>
				</div>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							gap: {
								...gap,
								[deviceType]: value,
							},
						});
					}}
					value={currentGap || "0"}
					label={__("Gap", "wcb")}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbButtonsPanelGeneral;
