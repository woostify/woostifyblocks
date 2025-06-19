import { PanelBody, ToggleControl, RangeControl, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import HelpText from "../components/controls/HelpText";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
export interface WCB_TESTIMONIALS_PANEL_RATING {
	ratings: any[];
	isShowRating: boolean;
	ratingPosition: "top" | "middle" | "bottom";
}

export const WCB_TESTIMONIALS_PANEL_RATING_DEMO: WCB_TESTIMONIALS_PANEL_RATING =
	{
		ratings: [5, 3, 4],
		isShowRating: true,
		ratingPosition:  "top"
	};

type TabsHere = "Settings" | "NumberStars";

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_RATING;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_RATING) => void;
	numberOfItems: number;
}

const WcbTestimonialsPanelRating: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_RATING_DEMO,
	setAttr__,
	numberOfItems = 1,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { ratings, ratingPosition, isShowRating } = panelData;

	//
	let CURRENT_RATING = [...Array(numberOfItems || 3).keys()].map(
		(_, index) => ratings[index]
	);
	//

	const POSTION_PLANS: MyRadioItem<
		WCB_TESTIMONIALS_PANEL_RATING["ratingPosition"]
	>[] = [
		{ name: "top", icon: "Top" },
		{ name: "middle", icon: "Middle" },
		{ name: "bottom", icon: "Bottom" },
	];

	const renderSelectRating = () => {
		if (!isShowRating) {
			return (
				<HelpText>
					{__(
						'Please enable the "Show Rating" for testimonials...',
						"wcb"
					)}
				</HelpText>
			);
		}

		return (
			<div className={"space-y-5"}>
				{CURRENT_RATING.map((ratingValue, index) => {
					return (
						<div key={index + "--rating"}>
							<MyLabelControl hasResponsive={false}>
								{__("Number star", "wcb")} {index + 1}
							</MyLabelControl>
							<RangeControl
								label=''
								value={ratings[index]}
								onChange={(value = 5) => {
									setAttr__({
										...panelData,
										ratings: CURRENT_RATING.map((item, j) => {
											if (j === index) {
												return value;
											}
											return item;
										}),
									});
								}}
								min={1}
								max={5}
							/>
						</div>
					);
				})}
			</div>
		);
	};

	const renderSettingsRating = () => {
		const POSTION_PLANS: MyRadioItem<
			WCB_TESTIMONIALS_PANEL_RATING["ratingPosition"]
		>[] = [
			{ name: "top", icon: "Top" },
			{ name: "middle", icon: "Middle" },
			{ name: "bottom", icon: "Bottom" },
		];

		return (
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show rating", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowRating: checked })
					}
					checked={isShowRating}
				/>

				{isShowRating ? (
					<MyRadioGroup
						label="Position"
						onChange={(selected) =>
							setAttr__({
								...panelData,
								ratingPosition: selected as any,
							})
						}
						value={ratingPosition}
						plans={POSTION_PLANS}
						hasResponsive={false}
					/>
				) : null}
			</div>
		);
	};

	const renderTabContent = (tab: TabPanel.Tab) => {
		const tabName = tab.name as TabsHere;
		if (tabName === "NumberStars") {
			return renderSelectRating();
		}
		return renderSettingsRating();
	};

	const TABS: {
		name: TabsHere;
		title: string;
	}[] = [
		{ name: "Settings", title: __("Settings", "wcb") },
		{ name: "NumberStars", title: __("Number Stars", "wcb") },
	];
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Rating", "wcb")}
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

export default WcbTestimonialsPanelRating;
