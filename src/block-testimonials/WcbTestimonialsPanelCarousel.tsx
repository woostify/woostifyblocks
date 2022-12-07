import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../components/controls/MyRadioGroup";

export interface WCB_TESTIMONIALS_PANEL_CAROUSEL {
	hoverpause: boolean;
	isAutoPlay: boolean;
	autoplaySpeed: number;
	rewind: boolean;
	animationDuration: number;
	adaptiveHeight: boolean;
	showArrowsDots: "Dot" | "Arrow" | "Both";
}

export const WCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO: WCB_TESTIMONIALS_PANEL_CAROUSEL =
	{
		animationDuration: 500,
		autoplaySpeed: 3000,
		hoverpause: true,
		isAutoPlay: true,
		rewind: true,
		adaptiveHeight: true,
		showArrowsDots: "Both",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_CAROUSEL;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_CAROUSEL) => void;
}

const WcbTestimonialsPanelCarousel: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_CAROUSEL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		animationDuration,
		autoplaySpeed,
		hoverpause,
		isAutoPlay,
		rewind,
		showArrowsDots,
		adaptiveHeight,
	} = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Carousel", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Pause on hover", "wcb")}
					checked={hoverpause}
					onChange={(checked) => {
						setAttr__({
							...panelData,
							hoverpause: checked,
						});
					}}
				/>
				<ToggleControl
					label={__("Autoplay", "wcb")}
					checked={isAutoPlay}
					onChange={(checked) => {
						setAttr__({
							...panelData,
							isAutoPlay: checked,
						});
					}}
				/>

				<RangeControl
					label={__("Autoplay speed (ms)", "wcb")}
					value={autoplaySpeed}
					onChange={(value) => {
						setAttr__({ ...panelData, autoplaySpeed: value || 2000 });
					}}
					min={100}
					max={15000}
				/>

				<ToggleControl
					label={__("Infinite loop", "wcb")}
					checked={rewind}
					onChange={(checked) => {
						setAttr__({
							...panelData,
							rewind: checked,
						});
					}}
				/>

				<ToggleControl
					label={__("Adaptive height", "wcb")}
					help={__(
						"Enables adaptive height for single slide horizontal carousels.",
						"wcb"
					)}
					checked={adaptiveHeight}
					onChange={(checked) => {
						setAttr__({
							...panelData,
							adaptiveHeight: checked,
						});
					}}
				/>

				<RangeControl
					label={__("Transition speed (ms)", "wcb")}
					value={animationDuration}
					onChange={(value) => {
						setAttr__({ ...panelData, animationDuration: value || 1 });
					}}
					min={100}
					max={5000}
				/>

				<MyRadioGroup
					label={__("Show arrows & dots", "wcb")}
					onChange={(value) => {
						setAttr__({
							...panelData,
							showArrowsDots: value as typeof showArrowsDots,
						});
					}}
					value={showArrowsDots}
					hasResponsive={false}
					plans={[
						{ name: "Dot", icon: "Dot" },
						{ name: "Arrow", icon: "Arrow" },
						{ name: "Both", icon: "Both" },
					]}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanelCarousel;
