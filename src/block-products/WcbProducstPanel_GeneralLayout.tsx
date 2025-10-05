import {
	PanelBody,
	SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import { ToggleControl } from "@wordpress/components";

export interface WCB_PRODUCTS_PANEL_GENERAL_LAYOUT {
	isCustomizerGeneralLayout: boolean;
}

export const WCB_PRODUCTS_PANEL_GENERAL_LAYOUT_DEMO: WCB_PRODUCTS_PANEL_GENERAL_LAYOUT =
	{
		isCustomizerGeneralLayout: false,
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

	const { isCustomizerGeneralLayout } = panelData;

	return (
		<PanelBody
			className={"space-y-5"}
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "wcb")}
		>
			<ToggleControl
				label={__("Custom style", "wcb")}
				onChange={(checked) =>
					setAttr__({ ...panelData, isCustomizerGeneralLayout: checked })
				}
				checked={isCustomizerGeneralLayout}
			/>
		</PanelBody>
	);
};

export default WcbProducstPanelGeneralLayout;
