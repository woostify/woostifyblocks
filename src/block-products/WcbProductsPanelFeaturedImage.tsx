import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_PRODUCTS_PANEL_FEATURED_IMAGE {
	isShowFeaturedImage: boolean;
	featuredImageSize: string;
	featuredImagePosition: "top" | "background";
	linkCompleteBox: boolean;
	hoverType?: "swap" | "zoom" | "none";
}

export const WCB_PRODUCTS_PANEL_FEATURED_IMAGE_DEMO: WCB_PRODUCTS_PANEL_FEATURED_IMAGE =
	{
		isShowFeaturedImage: true,
		featuredImageSize: "large",
		featuredImagePosition: "top",
		linkCompleteBox: false,
		hoverType: "none",
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
		hoverType,
	} = panelData;

	const POSTION_PLANS: MyRadioItem<
		WCB_PRODUCTS_PANEL_FEATURED_IMAGE["featuredImagePosition"]
	>[] = [
		{ name: "top", icon: "Top" },
		{ name: "background", icon: "Background" },
	];

	const HOVER_PLANS: MyRadioItem<
		NonNullable<WCB_PRODUCTS_PANEL_FEATURED_IMAGE["hoverType"]>
	>[] = [
		{ name: "none", icon: "None" },
		{ name: "swap", icon: "Swap" },
		{ name: "zoom", icon: "Zoom" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Product image settings", "boostify-blocks")}
		>
			<div className={"space-y-5 "}>
				<ToggleControl
					label={__("Product image", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowFeaturedImage: checked })
					}
					checked={isShowFeaturedImage}
				/>

				{/* {isShowFeaturedImage ? (
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
				) : null} */}

				{isShowFeaturedImage ? (
					<ToggleControl
						label={__("Link to Product Page", "boostify-blocks")}
						onChange={(checked) =>
							setAttr__({ ...panelData, linkCompleteBox: checked })
						}
						checked={linkCompleteBox}
						help={__("Links the image to the single product listing", "boostify-blocks")}
					/>
				) : null}

				{isShowFeaturedImage ? (
					<MyRadioGroup
						label="Hover"
						onChange={(selected) =>
							setAttr__({
								...panelData,
								hoverType: selected as any,
							})
						}
						value={hoverType}
						plans={HOVER_PLANS}
						hasResponsive={false}
						isWrap
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelFeaturedImage;
