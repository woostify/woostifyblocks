import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_ICON_BOX_PANEL_LAYOUT {
	textAlignment: HasResponsive<TextAlignment>;
	headingTag: keyof HTMLElementTagNameMap;
	enablePrefix: boolean;
	enableTitle: boolean;
	enableDescription: boolean;
	enableCTAButton: boolean;
}

export const WCB_ICON_BOX_PANEL_LAYOUT_DEMO: WCB_ICON_BOX_PANEL_LAYOUT = {
	textAlignment: { Desktop: "center" },
	headingTag: "h4",
	enableDescription: true,
	enablePrefix: false,
	enableTitle: true,
	enableCTAButton: false,
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_LAYOUT;
	setAttr__: (data: WCB_ICON_BOX_PANEL_LAYOUT) => void;
}

const WcbIconBoxPanelLayout: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const {
		textAlignment,
		headingTag,
		enableDescription,
		enablePrefix,
		enableTitle,
		enableCTAButton,
	} = panelData;

	const { currentDeviceValue: TEXT_ALIGNMENT } = getValueFromAttrsResponsives(
		textAlignment,
		deviceType
	);

	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: {
				...textAlignment,
				[deviceType]: selected,
			},
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Layout", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<MyTextAlignControl
					textAlignment={TEXT_ALIGNMENT}
					onChange={handleChangeTextAlignment}
				/>

				<ToggleControl
					label={__("Enable prefix", "boostify-blocks")}
					checked={enablePrefix}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enablePrefix: checked });
					}}
				/>
				<ToggleControl
					label={__("Enable title", "boostify-blocks")}
					checked={enableTitle}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableTitle: checked });
					}}
				/>

				{enableTitle && (
					<MyHeadingTagControl
						tag={headingTag}
						onChange={(value) => {
							setAttr__({ ...panelData, headingTag: value });
						}}
					/>
				)}

				<ToggleControl
					label={__("Enable description", "boostify-blocks")}
					checked={enableDescription}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableDescription: checked });
					}}
				/>

				<ToggleControl
					label={__("Enable CTA button", "boostify-blocks")}
					checked={enableCTAButton}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableCTAButton: checked });
					}}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelLayout;
