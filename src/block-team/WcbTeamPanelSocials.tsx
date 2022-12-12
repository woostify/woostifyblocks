import {
	Dashicon,
	PanelBody,
	RangeControl,
	TabPanel,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties, useEffect } from "react";
import HelpText from "../components/controls/HelpText";
import { MyIconKey } from "../components/controls/MyIcon";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import SelecIcon, {
	DEFAULT_MY_ICON,
	MyIcon,
} from "../components/controls/SelectIcon/SelecIcon";

export interface TeamSociaItem {
	icon: MyIcon;
	url: string;
}

export interface WCB_TEAM_PANEL_SOCIALS {
	enableSocials: boolean;
	openLinkInNewTab: boolean;
	numberOfItems: number;
	socials: TeamSociaItem[];
}

export const DEFAULT_MY_TEAM_SOCIAL: TeamSociaItem = {
	url: "#",
	icon: {
		...DEFAULT_MY_ICON,
		iconName: "lni-twitter-original",
	},
};

export const WCB_TEAM_PANEL_SOCIALS_DEMO: WCB_TEAM_PANEL_SOCIALS = {
	enableSocials: true,
	openLinkInNewTab: false,
	numberOfItems: 4,
	socials: [
		DEFAULT_MY_TEAM_SOCIAL,
		{
			url: "#",
			icon: {
				...DEFAULT_MY_ICON,
				iconName: "lni-facebook-oval",
			},
		},
		{
			url: "#",
			icon: {
				...DEFAULT_MY_ICON,
				iconName: "lni-instagram-filled",
			},
		},
		{
			url: "#",
			icon: {
				...DEFAULT_MY_ICON,
				iconName: "lni-atlassian",
			},
		},
	],
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TEAM_PANEL_SOCIALS;
	setAttr__: (data: WCB_TEAM_PANEL_SOCIALS) => void;
}
type TabsHere = "Settings" | "Socials";

const WcbTeamPanelSocials: FC<Props> = ({
	panelData = WCB_TEAM_PANEL_SOCIALS_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { enableSocials, numberOfItems, openLinkInNewTab, socials } = panelData;
	const TABS: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Settings", title: __("Settings", "wcb") },
		{ name: "Socials", title: __("Socials", "wcb") },
	];

	const renderSettings = () => {
		return (
			<div className="space-y-5">
				<ToggleControl
					label={__("Enable Socials", "wcb")}
					checked={enableSocials}
					onChange={(checked) => {
						setAttr__({ ...panelData, enableSocials: checked });
					}}
				/>
				{enableSocials && (
					<>
						<ToggleControl
							label={__("Open Links in New Window", "wcb")}
							checked={openLinkInNewTab}
							onChange={(checked) => {
								setAttr__({ ...panelData, openLinkInNewTab: checked });
							}}
						/>
						<RangeControl
							label="Number of items"
							value={numberOfItems}
							onChange={(value) => {
								let NEWS_SOCIALS: TeamSociaItem[] = [
									...Array(value || 1).keys(),
								].map((_, index) => socials[index] || DEFAULT_MY_TEAM_SOCIAL);

								setAttr__({
									...panelData,
									numberOfItems: value || 1,
									socials: NEWS_SOCIALS,
								});
							}}
							min={1}
							max={10}
						/>
					</>
				)}
			</div>
		);
	};

	const renderSocials = () => {
		if (!enableSocials) {
			return (
				<HelpText>
					{__(
						'Please enable the "Enable Socials" field to settings socials...',
						"wcb"
					)}
				</HelpText>
			);
		}
		return (
			<div className="space-y-5">
				{socials.map((social, index) => {
					return (
						<div key={index + "--"}>
							<MyLabelControl>
								{`${__("Social", "wcb")} ${index + 1}`}
							</MyLabelControl>
							<div className="p-3 border rounded-lg space-y-3">
								<SelecIcon
									iconData={social.icon}
									onChange={(value) => {
										setAttr__({
											...panelData,
											socials: socials.map((item, j) => {
												if (j === index) {
													return {
														...item,
														icon: value,
													};
												}
												return item;
											}),
										});
									}}
								/>
								<TextControl
									label={__("Social URL", "wcb")}
									placeholder="https://example.com"
									value={social.url}
									type="text"
									onChange={(value) => {
										setAttr__({
											...panelData,
											socials: socials.map((item, j) => {
												if (j === index) {
													return {
														...item,
														url: value,
													};
												}
												return item;
											}),
										});
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const renderTabContent = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabsHere;
		if (tabName === "Socials") {
			return renderSocials();
		}
		return renderSettings();
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Socials", "wcb")}
		>
			<div className={"space-y-5"}>
				<TabPanel
					className={`wcb-bodyControls__panel`}
					activeClass="active-tab"
					initialTabName="Settings"
					tabs={TABS}
				>
					{renderTabContent}
				</TabPanel>
			</div>
		</PanelBody>
	);
};

export default WcbTeamPanelSocials;
