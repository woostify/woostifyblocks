import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";

export interface WCB_SELECT_PANEL_GENERAL {
	isRequired: boolean;
}

export const WCB_SELECT_PANEL_GENERAL_DEMO: WCB_SELECT_PANEL_GENERAL = {
	isRequired: false,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_SELECT_PANEL_GENERAL;
	setAttr__: (data: WCB_SELECT_PANEL_GENERAL) => void;
}

const WcbRadioPanelGeneral: FC<Props> = ({
	panelData = WCB_SELECT_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isRequired } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Required", "boostify-blocks")}
					checked={isRequired}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, isRequired: isChecked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbRadioPanelGeneral;
