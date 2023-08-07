import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { HtmlTagsType } from "../types";
// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";
import MySelect from "../components/controls/MySelect";

export interface WCB_PRODUCTS_PANEL_COTENT {
	// isShowAddToCartBtn: boolean;
	isShowPrice: boolean;
	isShowRating: boolean;
	isShowSKU: boolean;
	isShowSaleBadge: boolean;
	isShowTitle: boolean;
	isShowCategory: boolean;
	titleHtmlTag: HtmlTagsType;
	//
	saleBadgePosition: "Inside image" | "bottom";
	showSaleBadgeDiscoutPercent: boolean;
	taxonomyStyle: "Normal" | "Highlighted";
}

const SALE_POSITION_OPTIONS: MyRadioItem<
	WCB_PRODUCTS_PANEL_COTENT["saleBadgePosition"]
>[] = [
	{ name: "Inside image", icon: "Inside image" },
	{ name: "bottom", icon: "Bottom" },
];

export const WCB_PRODUCTS_PANEL_COTENT_DEMO: WCB_PRODUCTS_PANEL_COTENT = {
	// isShowAddToCartBtn: true,
	isShowPrice: true,
	isShowRating: true,
	isShowSaleBadge: true,
	isShowSKU: true,
	isShowCategory: true,
	showSaleBadgeDiscoutPercent: false,
	//
	isShowTitle: true,
	titleHtmlTag: "h4",
	saleBadgePosition: "Inside image",
	taxonomyStyle: "Highlighted",
};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_COTENT;
	setAttr__: (data: WCB_PRODUCTS_PANEL_COTENT) => void;
}

const WcbProductsPanelContent: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_COTENT_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		isShowTitle,
		titleHtmlTag,
		taxonomyStyle,
		showSaleBadgeDiscoutPercent,
		isShowPrice,
		isShowRating,
		isShowSKU,
		isShowSaleBadge,
		saleBadgePosition,
		isShowCategory,
	} = panelData;

	const renderSaleDisclosure = () => {
		return (
			<MyDisclosure label="Sale badge" defaultOpen>
				<ToggleControl
					label={__("Sale badge", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowSaleBadge: checked })
					}
					checked={isShowSaleBadge}
				/>

				<ToggleControl
					label={__("Show discount percentage", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, showSaleBadgeDiscoutPercent: checked })
					}
					checked={showSaleBadgeDiscoutPercent}
				/>

				<MyRadioGroup
					label="Position"
					onChange={(selected) =>
						setAttr__({
							...panelData,
							saleBadgePosition: selected as any,
						})
					}
					value={saleBadgePosition}
					plans={SALE_POSITION_OPTIONS}
					hasResponsive={false}
				/>

				{/* <MyRadioGroup
					label="Style"
					labelClassName=""
					className="flex items-center justify-between space-x-3"
					contentClassName="flex-shrink-0 flex-1"
					onChange={(selected) =>
						setAttr__({
							...panelData,
							taxonomyStyle: selected as any,
						})
					}
					value={taxonomyStyle}
					plans={[
						// "Normal" | "Highlighted"
						{ name: "Normal", icon: "Normal" },
						{ name: "Highlighted", icon: "Highlighted" },
					]}
					hasResponsive={false}
				/> */}
			</MyDisclosure>
		);
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Content", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Product category", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowCategory: checked })
					}
					checked={isShowCategory}
				/>

				<ToggleControl
					label={__("Product title", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowTitle: checked })
					}
					checked={isShowTitle}
				/>

				{isShowTitle ? (
					<MyHeadingTagControl
						tag={titleHtmlTag}
						label={__("Title HTML tag", "wcb")}
						onChange={(tag) => setAttr__({ ...panelData, titleHtmlTag: tag })}
					/>
				) : null}

				<ToggleControl
					label={__("Product price", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowPrice: checked })
					}
					checked={isShowPrice}
				/>

				{isShowSaleBadge ? (
					renderSaleDisclosure()
				) : (
					<ToggleControl
						label={__("Sale badge", "wcb")}
						onChange={(checked) =>
							setAttr__({ ...panelData, isShowSaleBadge: checked })
						}
						checked={isShowSaleBadge}
					/>
				)}

				<ToggleControl
					label={__("Product rating", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowRating: checked })
					}
					checked={isShowRating}
				/>

				{/* <ToggleControl
					label={__("Add to Cart button", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowAddToCartBtn: checked })
					}
					checked={isShowAddToCartBtn}
				/> */}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelContent;
