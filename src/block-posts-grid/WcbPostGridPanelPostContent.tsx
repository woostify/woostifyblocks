import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup from "../components/controls/MyRadioGroup";

export interface WCB_POST_GRID_PANEL_POST_CONTENT {
	isShowPostContent: boolean;
	contentType: "Full post" | "excerpt";
	excerptWordsNumber: number;
}

export const WCB_POST_GRID_PANEL_POST_CONTENT_DEMO: WCB_POST_GRID_PANEL_POST_CONTENT =
	{
		isShowPostContent: true,
		contentType: "excerpt",
		excerptWordsNumber: 10,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_POST_CONTENT;
	setAttr__: (data: WCB_POST_GRID_PANEL_POST_CONTENT) => void;
}

const WcbPostGridPanelPostContent: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_POST_CONTENT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { contentType, excerptWordsNumber, isShowPostContent } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Post content settings", "boostify-blocks")}
		>
			<div className="space-y-5">
				<ToggleControl
					label={__("Post content", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowPostContent: checked })
					}
					checked={isShowPostContent}
				/>

				{isShowPostContent ? (
					<MyRadioGroup
						label="SHOW:"
						labelClassName=""
						className="flex items-center justify-between space-x-3"
						contentClassName="flex-shrink-0 flex-1"
						onChange={(selected) =>
							setAttr__({ ...panelData, contentType: selected as any })
						}
						value={contentType}
						plans={[
							{ name: "Full post", icon: "Full post" },
							{ name: "excerpt", icon: "Excerpt" },
						]}
						hasResponsive={false}
					/>
				) : null}

				{isShowPostContent && contentType === "excerpt" ? (
					<RangeControl
						label={__("MAX NUMBER OF WORDS IN EXCERPT", "boostify-blocks")}
						value={excerptWordsNumber}
						onChange={(e) => {
							setAttr__({ ...panelData, excerptWordsNumber: e || 1 });
						}}
						min={1}
						max={100}
						required
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelPostContent;
