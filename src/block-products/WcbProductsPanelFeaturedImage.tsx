import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_PRODUCTS_PANEL_FEATURED_IMAGE {
	isShowFeaturedImage: boolean;
	featuredImageSize: string;
	featuredImagePosition: "top" | "background";
	linkCompleteBox: boolean;
}

export const WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO: WCB_PRODUCTS_PANEL_FEATURED_IMAGE =
	{
		isShowFeaturedImage: true,
		featuredImageSize: "large",
		featuredImagePosition: "top",
		linkCompleteBox: false,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_FEATURED_IMAGE;
	setAttr__: (data: WCB_PRODUCTS_PANEL_FEATURED_IMAGE) => void;
}

const WcbProductsPanelFeaturedImage: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		isShowFeaturedImage,
		featuredImageSize,
		featuredImagePosition,
		linkCompleteBox,
	} = panelData;

	const POSTION_PLANS: MyRadioItem<
		WCB_PRODUCTS_PANEL_FEATURED_IMAGE["featuredImagePosition"]
	>[] = [
		{ name: "top", icon: "Top" },
		{ name: "background", icon: "Background" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Product image settings", "wcb")}
		>
			<div className={"space-y-5 "}>
				<ToggleControl
					label={__("Show featured image", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowFeaturedImage: checked })
					}
					checked={isShowFeaturedImage}
				/>

				{isShowFeaturedImage ? (
					<MyRadioGroup
						label="Position"
						onChange={(selected) =>
							setAttr__({
								...panelData,
								featuredImagePosition: selected as any,
							})
						}
						value={featuredImagePosition}
						plans={POSTION_PLANS}
						hasResponsive={false}
						isWrap
					/>
				) : null}

				{isShowFeaturedImage ? (
					<ToggleControl
						label={__("Link Complete Box", "wcb")}
						onChange={(checked) =>
							setAttr__({ ...panelData, linkCompleteBox: checked })
						}
						checked={linkCompleteBox}
						help={__(
							"When enabled, the link to the article page will cover the entire card",
							"wcb"
						)}
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelFeaturedImage;
