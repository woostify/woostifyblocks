import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_TESTIMONIALS_PANEL_RATING {
	isShowRating: boolean;
	ratingPosition: "top" | "middle" | "bottom";
}

export const WCB_TESTIMONIALS_PANEL_RATING_DEMO: WCB_TESTIMONIALS_PANEL_RATING =
	{
		isShowRating: true,
		ratingPosition: "top",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_RATING;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_RATING) => void;
}

const WcbTestimonialsPanelRating: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_RATING_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { ratingPosition, isShowRating } = panelData;

	const POSTION_PLANS: MyRadioItem<
		WCB_TESTIMONIALS_PANEL_RATING["ratingPosition"]
	>[] = [
		{ name: "top", icon: "Top" },
		{ name: "middle", icon: "Middle" },
		{ name: "bottom", icon: "Bottom" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Rating", "wcb")}
		>
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
		</PanelBody>
	);
};

export default WcbTestimonialsPanelRating;
