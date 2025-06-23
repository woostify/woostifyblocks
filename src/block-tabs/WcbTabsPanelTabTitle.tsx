import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC } from "react";
import MyRadioGroup, {
	ALIGNMENT_PLANS_DEMO,
	MyRadioItem,
} from "../components/controls/MyRadioGroup";
import { AlignmentH, MyPosition, Option } from "../types";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";
import MySelect from "../components/controls/MySelect";
import { BlockTabTitleItem } from "./types";

export interface WCB_TABS_PANEL_TAB_TITLE {
	enableIcon: boolean;
	iconPosition: MyPosition;
	textAlignment: AlignmentH;
	tabAlignment: AlignmentH;
	initOpenTab: string;
	icon: MyIcon;
}

export const WCB_TABS_PANEL_TAB_TITLE_DEMO: WCB_TABS_PANEL_TAB_TITLE = {
	textAlignment: "center",
	tabAlignment: "left",
	iconPosition: "left",
	initOpenTab: "",
	enableIcon: true,
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-checkmark-circle",
	},
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TABS_PANEL_TAB_TITLE;
	setAttr__: (data: WCB_TABS_PANEL_TAB_TITLE) => void;
	//
	tabTitles: BlockTabTitleItem[];
}

const WcbTabsPanelTabTitle: FC<Props> = ({
	panelData = WCB_TABS_PANEL_TAB_TITLE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		textAlignment,
		enableIcon,
		icon,
		initOpenTab,
		tabAlignment,
		iconPosition,
	} = panelData;

	const OPTION_INIT_OPEN_TAB_DEMO: Option<
		WCB_TABS_PANEL_TAB_TITLE["initOpenTab"]
	>[] = [
		{ value: "tab1", label: "Tab1" },
		{ value: "tab2", label: "Tab2" },
		{ value: "tab3", label: "Tab3" },
	];

	const PLANS_ICON_POS_DEMO: MyRadioItem<
		WCB_TABS_PANEL_TAB_TITLE["iconPosition"]
	>[] = [
		{ icon: "Left", name: "left" },
		{ icon: "Right", name: "right" },
		{ icon: "Top", name: "top" },
		{ icon: "Bottom", name: "bottom" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Tab title", "wcb")}
		>
			<div className={"space-y-5"}>
				<MySelect
					label={__("Init Open tab", "Wcb")}
					options={OPTION_INIT_OPEN_TAB_DEMO}
					value={initOpenTab}
					onChange={(value) => {
						setAttr__({
							...panelData,
							initOpenTab: value,
						});
					}}
				/>

				<MyRadioGroup
					hasResponsive={false}
					label={__("Tab Alignment", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							tabAlignment: value,
						});
					}}
					value={tabAlignment}
					plans={ALIGNMENT_PLANS_DEMO}
				/>
				<MyRadioGroup
					hasResponsive={false}
					label={__("Text Alignment", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							textAlignment: value,
						});
					}}
					value={textAlignment}
					plans={ALIGNMENT_PLANS_DEMO}
				/>

				<ToggleControl
					label="Enable Icon"
					checked={enableIcon}
					onChange={(checked) => {
						setAttr__({ ...panelData, enableIcon: checked });
					}}
				/>

				{enableIcon ? (
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

						<MyRadioGroup
							hasResponsive={false}
							label={__("Icon Position", "wcb")}
							onChange={(value) => {
								setAttr__({
									...panelData,
									iconPosition: value,
								});
							}}
							value={iconPosition}
							plans={PLANS_ICON_POS_DEMO}
						/>
					</>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbTabsPanelTabTitle;
