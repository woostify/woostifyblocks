import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_FAQ_PANEL_GENERAL {
	layout: "accordion" | "grid";
	headingTag: keyof HTMLElementTagNameMap;
	collapseOtherItems: boolean;
	expandFirstItem: boolean;
	enableToggle: boolean;
	enableSchemaSupport: boolean;
	enableSeparator: boolean;
	columns: HasResponsive<number>;
	textAlignment: TextAlignment;
}

export const WCB_FAQ_PANEL_GENERAL_DEMO: WCB_FAQ_PANEL_GENERAL = {
	layout: "accordion",
	headingTag: "div",
	collapseOtherItems: true,
	columns: { Desktop: 2 },
	enableSchemaSupport: true,
	enableSeparator: true,
	enableToggle: true,
	expandFirstItem: true,
	textAlignment: "left",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_FAQ_PANEL_GENERAL;
	setAttr__: (data: WCB_FAQ_PANEL_GENERAL) => void;
}

const WcbFaqPanelGeneral: FC<Props> = ({
	panelData = WCB_FAQ_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	const {
		textAlignment,
		collapseOtherItems,
		columns,
		enableSchemaSupport,
		enableSeparator,
		enableToggle,
		expandFirstItem,
		headingTag,
		layout,
	} = panelData;

	const { currentDeviceValue: COLUMNS } = getValueFromAttrsResponsives(
		columns,
		deviceType
	);

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: selected,
		});
	};
	//

	const PLANS_DEMO: MyRadioItem<WCB_FAQ_PANEL_GENERAL["layout"]>[] = [
		{ icon: "Accordion", name: "accordion" },
		{ icon: "Grid", name: "grid" },
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
					hasResponsive={false}
					label={__("Layout", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							layout: value as WCB_FAQ_PANEL_GENERAL["layout"],
						});
					}}
					value={layout}
					plans={PLANS_DEMO}
				/>

				<ToggleControl
					label="Collapse other items"
					help={"Collapse other items"}
					checked={collapseOtherItems}
					onChange={(checked) => {
						setAttr__({ ...panelData, collapseOtherItems: checked });
					}}
				/>
				<ToggleControl
					label="Expand First Item"
					help={"Expand First Item"}
					checked={expandFirstItem}
					onChange={(checked) => {
						setAttr__({ ...panelData, expandFirstItem: checked });
					}}
				/>
				<ToggleControl
					label="Enable Toggle"
					help={"Enable Toggle"}
					checked={enableToggle}
					onChange={(checked) => {
						setAttr__({ ...panelData, enableToggle: checked });
					}}
				/>

				<ToggleControl
					label="Enable Schema Support"
					help={"Enable Schema Support"}
					checked={enableSchemaSupport}
					onChange={(checked) => {
						setAttr__({ ...panelData, enableSchemaSupport: checked });
					}}
				/>
				<ToggleControl
					label="Enable Separator"
					help={"Enable Separator"}
					checked={enableSeparator}
					onChange={(checked) => {
						setAttr__({ ...panelData, enableSeparator: checked });
					}}
				/>

				<RangeControl
					label={
						<MyLabelControl hasResponsive className="">
							{__("Columns", "wcb")}
						</MyLabelControl>
					}
					value={COLUMNS || 2}
					onChange={(value) => {
						setAttr__({
							...panelData,
							columns: {
								...columns,
								[deviceType]: value,
							},
						});
					}}
					min={1}
					max={6}
				/>

				<MyHeadingTagControl
					tag={headingTag}
					onChange={(value) => {
						setAttr__({ ...panelData, headingTag: value });
					}}
				/>

				<MyTextAlignControl
					textAlignment={textAlignment}
					onChange={handleChangeTextAlignment}
					hasResponsive={false}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbFaqPanelGeneral;
