import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../components/controls/MySelect";
import { Option } from "../types";

export interface WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_STYLE {
	style: "none" | "solid" | "double" | "dashed" | "dotted";
}

export interface WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_POSITION {
	position: "after-title" | "after-prefix" | "after-icon-image" | "after-description" | "";
}

export type WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR = WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_STYLE & WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_POSITION;

export const WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO: WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR = {
	style: "none",
	position: "",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR;
	setAttr__: (data: WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR) => void;
}

const WcbSlidersPanel_StyleSeparator: FC<Props> = ({
	panelData = WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { style, position } =
		panelData;
	
	const STYLE_DEMO: Option<WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_STYLE["style"]>[] =
		[
			{ value: "none", label: "None" },
			{ value: "solid", label: "Solid" },
			{ value: "double", label: "Double" },
			{ value: "dashed", label: "Dashed" },
			{ value: "dotted", label: "Dotted" },
		];

	const POSITION_DEMO: Option<WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_POSITION["position"]>[] =[
			{ value: "after-title", label: "After Title" },
			{ value: "after-prefix", label: "After Prefix" },
			{ value: "after-icon-image", label: "After Icon/Image" },
			{ value: "after-description", label: "After Description" },
			{ value: "", label: "None" },
		];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Separator", "wcb")}
		>
			<div className={"space-y-5"}>
				
				<MySelect
					label={__("Style", "Wcb")}
					options={STYLE_DEMO}
					value={style}
					onChange={(value) => {
						setAttr__({
							...panelData,
							style: value as WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_STYLE["style"],
						});
					}}
				/>

				<MySelect
					label={__("Position", "Wcb")}
					options={POSITION_DEMO}
					value={panelData.position}
					onChange={(value) => {
						setAttr__({
							...panelData,
							position: value as WCB_SLIDER_BOX_PANEL_STYLE_SPARATOR_POSITION["position"],
						});
					}}
				/>

			</div>
		</PanelBody>
	);
};

export default WcbSlidersPanel_StyleSeparator;
