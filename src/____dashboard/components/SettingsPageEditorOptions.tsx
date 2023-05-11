import React, { FC, useState, useEffect } from "react";
import InputNumber from "./InputNumber";
import MyToggle from "./MyToggle";
import { Wcb_theme_layout_global_settings } from "../App";

interface Props {
	allSettings: typeof window.wcbGlobalVariables;
	onChange: (data: typeof window.wcbGlobalVariables) => void;
	themeLayoutGlobal?: Wcb_theme_layout_global_settings;
}

const SettingsPageEditorOptions: FC<Props> = ({
	allSettings,
	onChange,
	themeLayoutGlobal,
}) => {
	return (
		<div className="divide-y">
			<div className="pb-8">
				<InputNumber
					label="Default Content Width"
					desc={
						`This setting will apply to Container Block's default Content Width.` +
						(themeLayoutGlobal?.contentSize
							? `<br /><i>(The content width default from Full Site Editor's Global Styles: ${themeLayoutGlobal?.contentSize})</i>`
							: "")
					}
					id="InputNumber_DefaultContentWidth"
					value={String(parseInt(allSettings.defaultContentWidth || ""))}
					onChange={(e) => {
						const newV = e
							? e + "px"
							: themeLayoutGlobal?.contentSize || "1000px";

						onChange({
							...allSettings,
							defaultContentWidth: newV,
						});
					}}
				/>
			</div>
			{/* <div className="py-8 wcb-field-disabled">
				<InputNumber
					label="Container Padding"
					desc="This setting will apply default padding in the Container Block."
					id="InputNumber_ContainerPadding"
					placeholder="10"
				/>
			</div> */}
			{/* <div className="py-8">
				<InputNumber
					label="Container Elements Gap"
					desc="This setting will apply default Row & Column Gaps in the Container Block."
					id="InputNumber_ContainerElementsGap"
					placeholder="10"
					value={String(parseInt(allSettings.containerElementsGap || ""))}
					onChange={(e) => {
						onChange({ ...allSettings, containerElementsGap: e + "px" });
					}}
				/>
			</div> */}
			{/* <div className="py-8">
				<MyToggle
					checked
					onChange={(checked) => {}}
					label="Collapse Panels"
					desc='Enable the "Collapse Panels" option if you want to Collapse all other Panels in your Blocks Settings except for the one which is clicked This way you have only one Panel of Settings in front of you to Focus on.'
					id="MyToggle_CollapsePanels"
				/>
			</div> */}
			<div className="py-8 wcb-field-disabled">
				<MyToggle
					checked={allSettings.enableCopyPasteStyles === "true"}
					disabled={!!"wcb-field-disabled"}
					onChange={(checked) => {
						onChange({
							...allSettings,
							enableCopyPasteStyles: checked ? "true" : "false",
						});
					}}
					label="Copy Paste Styles"
					desc='Enable the "Copy Paste Styles" option to have the ability to copy & paste Woostify & Core Gutenberg Blocks Styles.'
					id="MyToggle_CopyPasteStyles"
				/>
			</div>
		</div>
	);
};

export default SettingsPageEditorOptions;
