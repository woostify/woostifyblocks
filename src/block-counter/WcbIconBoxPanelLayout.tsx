import { PanelBody, ToggleControl, RangeControl, TextControl, SelectControl } from "@wordpress/components";
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
	type: string;
	startNumber: string;
	endNumber: string;
	decimalNumber: string;
	numberPrefix: string;
	numberSuffix: string;
	thousand: string;
	animationDuration: string;
}

export const WCB_ICON_BOX_PANEL_LAYOUT_DEMO: WCB_ICON_BOX_PANEL_LAYOUT = {
	textAlignment: { Desktop: "center" },
	headingTag: "h4",
	enableDescription: true,
	enablePrefix: false,
	enableTitle: true,
	enableCTAButton: false,
	type: 'number',
	startNumber: '0',
	endNumber: '80',
	decimalNumber: '0',
	numberPrefix: '',
	numberSuffix: '%',
	thousand: '',
	animationDuration: '1500',
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
		type,
		startNumber,
		endNumber,
		decimalNumber,
		numberPrefix,
		numberSuffix,
		thousand,
		animationDuration,
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
			title={__("Layout", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={handleChangeTextAlignment}
				/>

				<SelectControl
					label="Type"
					value={type}
					options={[
						{ label: 'Number', value: 'number' },
						{ label: 'Circle', value: 'circle' },
						{ label: 'Bar', value: 'bar' },
					]}
					onChange={(value) => {
						setAttr__({ ...panelData, type: value });
					}}
				/>

				{/* <MyHeadingTagControl
					tag={headingTag}
					onChange={(value) => {
						setAttr__({ ...panelData, headingTag: value });
					}}
				/> */}

				<TextControl
					label={__("Starting Number", "boostify-blocks")}
					type="number"
					value={startNumber}
					onChange={(value) => {
						setAttr__({ ...panelData, startNumber: value});
					}}
				/>

				<TextControl
					label={__("Ending Number", "boostify-blocks")}
					type="number"
					value={endNumber}
					onChange={(value) => {
						setAttr__({ ...panelData, endNumber: value});
					}}
				/>
				
				<TextControl
					label={__("Decimal Places", "boostify-blocks")}
					type="number"
					value={decimalNumber}
					onChange={(value) => {
						setAttr__({ ...panelData, decimalNumber: value });
					}}
				/>

				<TextControl
					label={__("Number Prefix", "boostify-blocks")}
					type="text"
					value={numberPrefix}
					onChange={(value) => {
						setAttr__({ ...panelData, numberPrefix: value });
					}}
				/>

				<TextControl
					label={__("Number Suffix", "boostify-blocks")}
					type="text"
					value={numberSuffix}
					onChange={(value) => {
						setAttr__({ ...panelData, numberSuffix: value });
					}}
				/>

				<TextControl
					label={__("Animation Duration", "boostify-blocks")}
					type="number"
					value={animationDuration}
					onChange={(value) => {
						setAttr__({ ...panelData, animationDuration: value });
					}}
				/>

				<SelectControl
					label="Thousand(s)"
					value={thousand}
					options={[
						{ label: 'None', value: '' },
						{ label: 'Comma', value: ',' },
						{ label: 'Whitespace', value: ' ' },
						{ label: 'Apostrophe', value: '\'' },
					]}
					onChange={(value) => {
						setAttr__({ ...panelData, thousand: value });
					}}
				/>

				<ToggleControl
					label={__("Enable description", "boostify-blocks")}
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
