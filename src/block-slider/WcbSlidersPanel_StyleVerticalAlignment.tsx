import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../components/controls/MySelect";
import { Option } from "../types";

export interface WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT {
	verticalAlignment: "top" | "middle" | "bottom";
}

export const WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO: WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT = {
	verticalAlignment: "middle",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT;
	setAttr__: (data: WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT) => void;
}

const WcbSlidersPanel_StyleVerticalAlignment: FC<Props> = ({
	panelData = WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { verticalAlignment } =
		panelData;
	
	const VERTICAL_DEMO: Option<WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT["verticalAlignment"]>[] =
		[
			{ value: "top", label: "Top" },
			{ value: "middle", label: "Middle" },
			{ value: "bottom", label: "Bottom" },
		];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Content", "wcb")}
		>
			<div className={"space-y-5"}>
				
				<MySelect
					label={__("Vertical Alignment", "Wcb")}
					options={VERTICAL_DEMO}
					value={verticalAlignment}
					onChange={(value) => {
						setAttr__({
							...panelData,
							verticalAlignment:
								value as WCB_SLIDERS_BOX_PANEL_STYLE_VERTICAL_ALIGNMENT["verticalAlignment"],
						});
					}}
				/>
					
			</div>
		</PanelBody>
	);
};

export default WcbSlidersPanel_StyleVerticalAlignment;
