import React, { FC, useState, useEffect } from "react";
import InputNumber from "./InputNumber";

interface Props {
	allSettings: typeof window.wcbGlobalVariables;
	onChange: (data: typeof window.wcbGlobalVariables) => void;
}

const SettingsPageEditorOptions: FC<Props> = ({ allSettings, onChange }) => {
	return (
		<div className="divide-y">
			<div className="pb-8">
				<InputNumber
					label="Default Content Width"
					desc="This setting will apply to Container Block's default Content Width."
					id="DefaultContentWidth"
					value={parseInt(allSettings.defaultContentWidth || "")}
					onChange={(e) => {
						onChange({ ...allSettings, defaultContentWidth: e + "px" });
					}}
				/>
			</div>
			<div className="py-8">
				<InputNumber
					label="Container Padding"
					desc="This setting will apply default padding in the Container Block."
					id="ContainerPadding"
					placeholder="10"
				/>
			</div>
			<div className="py-8">
				<InputNumber
					label="Container Elements Gap"
					desc="This setting will apply default Row & Column Gaps in the Container Block."
					id="ContainerElementsGap"
					placeholder="10"
				/>
			</div>
		</div>
	);
};

export default SettingsPageEditorOptions;
