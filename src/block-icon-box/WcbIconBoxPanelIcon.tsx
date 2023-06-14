import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MySelect from "../components/controls/MySelect";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";
import { Option } from "../types";

export interface WCB_ICON_BOX_PANEL_ICON {
	enableIcon: boolean;
	icon: MyIcon;
	iconPosition:
		| "top"
		| "left"
		| "right"
		| "leftOfTitle"
		| "rightOfTitle"
		| "bellowTitle";
	stackOn: "none" | "tablet" | "mobile";
	verticalAlignment: "top" | "middle";
}

export const WCB_ICON_BOX_PANEL_ICON_DEMO: WCB_ICON_BOX_PANEL_ICON = {
	enableIcon: true,
	iconPosition: "top",
	stackOn: "none",
	verticalAlignment: "top",
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-checkmark-circle",
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_ICON_BOX_PANEL_ICON;
	setAttr__: (data: WCB_ICON_BOX_PANEL_ICON) => void;
}

const WcbIconBoxPanelIcon: FC<Props> = ({
	panelData = WCB_ICON_BOX_PANEL_ICON_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { enableIcon, icon, iconPosition, stackOn, verticalAlignment } =
		panelData;
	//
	const PLANS_DEMO: Option<WCB_ICON_BOX_PANEL_ICON["iconPosition"]>[] = [
		{ value: "top", label: "Top" },
		{ value: "left", label: "Left" },
		{ value: "right", label: "Right" },
		{ value: "leftOfTitle", label: "Left Of Title" },
		{ value: "rightOfTitle", label: "Right Of Title" },
		{ value: "bellowTitle", label: "Bellow Title" },
	];
	const STACK_ON_DEMO: Option<WCB_ICON_BOX_PANEL_ICON["stackOn"]>[] = [
		{ value: "none", label: "None" },
		{ value: "tablet", label: "Tablet" },
		{ value: "mobile", label: "Mobile" },
	];
	const VERTICAL_DEMO: Option<WCB_ICON_BOX_PANEL_ICON["verticalAlignment"]>[] =
		[
			{ value: "top", label: "Top" },
			{ value: "middle", label: "Middle" },
		];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Icon", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Enable Icon", "wcb")}
					checked={enableIcon}
					className="mb-0"
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/>

				{enableIcon && (
					<>
						<SelecIcon
							iconData={icon}
							onChange={(value) => {
								setAttr__({
									...panelData,
									icon: value,
								});
							}}
						/>

						<MySelect
							label={__("Position", "Wcb")}
							options={PLANS_DEMO}
							value={iconPosition}
							onChange={(value) => {
								let newData: WCB_ICON_BOX_PANEL_ICON = {
									...panelData,
									iconPosition:
										value as WCB_ICON_BOX_PANEL_ICON["iconPosition"],
								};
								if (iconPosition !== "left" && iconPosition !== "right") {
									newData = {
										...panelData,
										iconPosition:
											value as WCB_ICON_BOX_PANEL_ICON["iconPosition"],
										stackOn: "none",
									};
								}

								setAttr__(newData);
							}}
						/>
						{(iconPosition === "left" || iconPosition === "right") && (
							<MySelect
								label={__("Stack On", "Wcb")}
								options={STACK_ON_DEMO}
								value={stackOn}
								onChange={(value) => {
									setAttr__({
										...panelData,
										stackOn: value as WCB_ICON_BOX_PANEL_ICON["stackOn"],
									});
								}}
							/>
						)}
						{(iconPosition === "left" ||
							iconPosition === "right" ||
							iconPosition === "leftOfTitle" ||
							iconPosition === "rightOfTitle") && (
							<MySelect
								label={__("Vertical Alignment", "Wcb")}
								options={VERTICAL_DEMO}
								value={verticalAlignment}
								onChange={(value) => {
									setAttr__({
										...panelData,
										verticalAlignment:
											value as WCB_ICON_BOX_PANEL_ICON["verticalAlignment"],
									});
								}}
							/>
						)}
					</>
				)}
			</div>
		</PanelBody>
	);
};

export default WcbIconBoxPanelIcon;
