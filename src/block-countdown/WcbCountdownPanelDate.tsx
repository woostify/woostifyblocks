import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import WCBDateTimePicker, {
	countdown_date
} from "../components/controls/WCBDateTimePicker/WCBDateTimePicker";

export interface WCB_COUNTDOWN_PANEL_DATE {
	enableLabel: boolean;
	date: countdown_date;
	show_day: boolean;
	show_hour: boolean;
	show_minute: boolean;
}

export const WCB_COUNTDOWN_PANEL_DATE_DEMO: WCB_COUNTDOWN_PANEL_DATE = {
	enableLabel: true,
	date: new Date().toJSON(),
	show_day: true,
	show_hour: true,
	show_minute: true,
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
	const { enableLabel, date, show_day, show_hour, show_minute } = panelData;
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
				<ToggleControl
					label={__("Show Days", "wcb")}
					checked={show_day}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, show_day: checked });
					}}
				/>
				{!show_day && (
					<ToggleControl
						label={__("Show Hours", "wcb")}
						checked={show_hour}
						className="mb-0"
						onChange={(checked) => {
							setAttr__({ ...panelData, show_hour: checked });
						}}
					/>
				)}
				{!show_hour && (
					<ToggleControl
						label={__("Show Minutes", "wcb")}
						checked={show_minute}
						className="mb-0"
						onChange={(checked) => {
							setAttr__({ ...panelData, show_minute: checked });
						}}
					/>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbCountdownPanelDate;
