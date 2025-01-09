import { PanelBody, ToggleControl, RangeControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ICON_BOX_PANEL_LAYOUT {
	textAlignment: HasResponsive<TextAlignment>;
	headingTag: keyof HTMLElementTagNameMap;
	enablePrefix: boolean;
	enableTitle: boolean;
	enableDescription: boolean;
	enableCTAButton: boolean;
	startNumber: number;
	endNumber: number;
	decimalNumber: number;
	numberPrefix: string;
}

export const WCB_ICON_BOX_PANEL_LAYOUT_DEMO: WCB_ICON_BOX_PANEL_LAYOUT = {
	textAlignment: { Desktop: "center" },
	headingTag: "h4",
	enableDescription: true,
	enablePrefix: false,
	enableTitle: true,
	enableCTAButton: false,
	startNumber: 0,
	endNumber: 80,
	decimalNumber: 80,
	numberPrefix: '',
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_LAYOUT;
	setAttr__: (data: WCB_ICON_BOX_PANEL_LAYOUT) => void;
}

const WcbIconBoxPanelLayout: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		textAlignment,
		headingTag,
		enableDescription,
		enablePrefix,
		enableTitle,
		enableCTAButton,
		startNumber,
		endNumber,
		decimalNumber,
		numberPrefix,
	} = panelData;

	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		textAlignment,
		deviceType
	);

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: {
				...textAlignment,
				[deviceType]: selected,
			},
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "wcb")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={handleChangeTextAlignment}
				/>

				<MyHeadingTagControl
					tag={headingTag}
					onChange={(value) => {
						setAttr__({ ...panelData, headingTag: value });
					}}
				/>

				<RangeControl
					label={__("Starting Number", "wcb")}
					value={startNumber}
					onChange={(value = 0) => {
						setAttr__({ ...panelData, startNumber: value});
					}}
					required
				/>

				<RangeControl
					label={__("Ending Number", "wcb")}
					value={endNumber}
					onChange={(value = 0) => {
						setAttr__({ ...panelData, endNumber: value});
					}}
					required
				/>

				<RangeControl
					label={__("Decimal Places", "wcb")}
					value={decimalNumber}
					onChange={(value = 80) => {
						setAttr__({ ...panelData, decimalNumber: value});
					}}
					required
				/>
				

				<TextControl
					label={__("Number Prefix", "wcb")}
					type="text"
					value={numberPrefix}
					onChange={(value) => {
						setAttr__({ ...panelData, numberPrefix: value });
					}}
				/>

				<ToggleControl
					label={__("Enable description", "wcb")}
					checked={enableDescription}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableDescription: checked });
					}}
				/>

			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelLayout;
