import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import WCBDateTimePicker, {
	countdown_date
} from "../components/controls/WCBDateTimePicker/WCBDateTimePicker";

export interface WCB_COUNTDOWN_PANEL_DATE {
	enableLabel: boolean;
	date: countdown_date;
}

export const WCB_COUNTDOWN_PANEL_DATE_DEMO: WCB_COUNTDOWN_PANEL_DATE = {
	enableLabel: true,
	date: new Date().toJSON()
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_COUNTDOWN_PANEL_DATE;
	setAttr__: (data: WCB_COUNTDOWN_PANEL_DATE) => void;
}

const WcbCountdownPanelDate: FC<Props> = ({
	panelData = WCB_COUNTDOWN_PANEL_DATE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { enableLabel, date } =
		panelData;
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Timer End Date & Time", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable label", "wcb")}
					checked={enableLabel}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableLabel: checked });
					}}
				/>
				<WCBDateTimePicker
					date={date}
					onChange={(value) => {
						setAttr__({
							...panelData,
							date: value,
						});
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanelDate;
