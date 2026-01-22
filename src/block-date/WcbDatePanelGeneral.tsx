import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// @ts-ignore
	__experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { MyInputAutocomplete } from "./types";

export interface WCB_DATE_PANEL_GENERAL {
	additionalValidation: boolean;
	isRequired: boolean;
	max?: string;
	min?: string;
}

export const WCB_DATE_PANEL_GENERAL_DEMO: WCB_DATE_PANEL_GENERAL = {
	isRequired: false,
	additionalValidation: true,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_DATE_PANEL_GENERAL;
	setAttr__: (data: WCB_DATE_PANEL_GENERAL) => void;
}

const WcbDatePanelGenera: FC<Props> = ({
	panelData = WCB_DATE_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { additionalValidation, isRequired, max, min } = panelData;

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

				<ToggleControl
					label={__("Additional Validation", "boostify-blocks")}
					help={__("Helps to set range of calender", "boostify-blocks")}
					checked={additionalValidation}
					onChange={(isChecked) => {
						setAttr__({ ...panelData, additionalValidation: isChecked });
					}}
				/>

				{additionalValidation && (
					<>
						<InputControl
							label={__("Min", "boostify-blocks")}
							value={min}
							type="date"
							onChange={(nextValue) => {
								console.log(11, { nextValue });

								setAttr__({ ...panelData, min: nextValue });
							}}
						/>
						<InputControl
							label={__("Max", "boostify-blocks")}
							value={max}
							type="date"
							onChange={(nextValue) => {
								setAttr__({ ...panelData, max: nextValue });
							}}
						/>
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbDatePanelGenera;
