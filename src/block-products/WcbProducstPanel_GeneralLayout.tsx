import {
	PanelBody,
	SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";

export interface WCB_PRODUCTS_PANEL_GENERAL_LAYOUT {
	generalLayout: "customizer" | "custom";
}

export const WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT =
	{
		generalLayout: "customizer",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT;
	setAttr__: (data: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT) => void;
}

const WcbProducstPanelGeneralLayout: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {

	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "wcb")}
		>
			<SelectControl
				label={__("Design", "wcb")}
				value={panelData.generalLayout}
				options={[
					{
						label: __("Inherit from Thems Settings", "wcb"),
						value: "customizer",
					},
					{
						label: __("Custom", "wcb"),
						value: "custom",
					},
				]}
				onChange={(generalLayout) => setAttr__({ ...panelData, generalLayout })}
			/>
		</PanelBody>
	);
};

export default WcbProducstPanelGeneralLayout;
