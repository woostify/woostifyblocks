import React, { FC } from "react";
import InputNumber from "./InputNumber";
import MyToggle from "./MyToggle";
import { Wcb_theme_layout_global_settings } from "../../types";
import debounce from "lodash/debounce";

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
	const debounce_fun = debounce(function (data: Props["allSettings"]) {
		console.log("Function debounced after 300ms!", { data });
		onChange(data);
	}, 300);

	// ----------------
	let subStr = "";

	if (!!themeLayoutGlobal?.contentSize) {
		if (!!themeLayoutGlobal?.contentSizeOfWoostify) {
			subStr = `<br /><i>(The content width default from Woostify theme customizer: ${themeLayoutGlobal?.contentSize})</i>`;
		} else {
			subStr = `<br /><i>(The content width default from Full Site Editor's Global Styles: ${themeLayoutGlobal?.contentSize})</i>`;
		}
		subStr =
			"<br /><i> Leave it blank to always use the default value </i>" + subStr;
	}

	console.log( allSettings );
	

	return (
		<div className="divide-y">
			<div className="pb-8">
				<InputNumber
					label="Default Content Width"
					desc={
						`This setting will apply to Container Block's default Content Width.` +
						subStr
					}
					id="InputNumber_DefaultContentWidth"
					defaultValue={String(parseInt(allSettings.defaultContentWidth || ""))}
					placeholder={`${parseInt(themeLayoutGlobal?.contentSize || "650")}`}
					onChange={(e) => {
						const newV = e ? e + "px" : "";
						debounce_fun({
							...allSettings,
							defaultContentWidth: newV,
						});
					}}
				/>
			</div>
			<div className="py-8">
				<MyToggle
					label="Button - Inherit From Theme"
					desc='Enable the "Inherit From Theme" option to make all buttons in Spectra blocks across your website inherit their styles from the theme.'
					id="MyToggle_ButtonInheritFromTheme"
					checked={allSettings.buttonInheritFromTheme === "true"}
					onChange={(checked) => {
						debounce_fun({
							...allSettings,
							buttonInheritFromTheme: checked ? "true" : "false",
						});
					}}
				/>
			</div>
			<div className="py-8">
				<InputNumber
					label="Container Padding"
					desc="This setting will apply default padding in the Container Block."
					id="InputNumber_ContainerPadding"
					placeholder="10"
					value={String(parseInt(allSettings.containerPadding || ""))}
					onChange={(e) => {
						onChange({ ...allSettings, containerPadding: e + "px" });
					}}
				/>
			</div>
			<div className="py-8">
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
			</div>
			<div className="py-8">
				<InputNumber
					label="Blocks Editor Spacing"
					desc="This setting will apply spacing in between all blocks inside block editor."
					id="InputNumber_BlocksEditorSpacing"
					placeholder="0"
					value={String(parseInt(allSettings.blocksEditorSpacing || ""))}
					onChange={(e) => {
						onChange({ ...allSettings, blocksEditorSpacing: e + "px" });
					}}
				/>
			</div>
			{/* <div className="py-8">
				<MyToggle
					checked
					onChange={(checked) => {}}
					label="Collapse Panels"
					desc='Enable the "Collapse Panels" option if you want to Collapse all other Panels in your Blocks Settings except for the one which is clicked This way you have only one Panel of Settings in front of you to Focus on.'
					id="MyToggle_CollapsePanels"
				/>
			</div> */}
			{/* <div className="py-8 wcb-field-disabled">
				<MyToggle
					checked={allSettings.enableCopyPasteStyles === "true"}
					disabled={!!"wcb-field-disabled"}
					onChange={(checked) => {
						debounce_fun({
							...allSettings,
							enableCopyPasteStyles: checked ? "true" : "false",
						});
					}}
					label="Copy Paste Styles"
					desc='Enable the "Copy Paste Styles" option to have the ability to copy & paste Woostify & Core Gutenberg Blocks Styles.'
					id="MyToggle_CopyPasteStyles"
				/>
			</div> */}
		</div>
	);
};

export default SettingsPageEditorOptions;
