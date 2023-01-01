import React, { FC, useState, useEffect } from "react";
import InputNumber from "./InputNumber";
import MyToggle from "./MyToggle";

interface Props {
	allSettings: typeof window.wcbGlobalVariables;
	onChange: (data: typeof window.wcbGlobalVariables) => void;
}

const SettingsPageTemplates: FC<Props> = ({ allSettings, onChange }) => {
	return (
		<div className="divide-y">
			<div className="pb-8">
				<MyToggle
					checked={!!allSettings.enableTemplatesButton}
					onChange={(checked) => {
						onChange({ ...allSettings, enableTemplatesButton: checked });
					}}
					label="Enable Templates Button"
					desc="Woostify comes with a stunning library of page templates and block patterns. This library is accessible with the Templates button while editing the page or post. Manage the visibility of that button with this option.."
					id="MyToggle_EnableTemplatesButton"
				/>
			</div>
		</div>
	);
};

export default SettingsPageTemplates;
