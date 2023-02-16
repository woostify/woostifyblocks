import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { HtmlTagsType } from "../types";
// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";
import MyRadioGroup from "../components/controls/MyRadioGroup";
import MySelect from "../components/controls/MySelect";

export interface WCB_PRODUCTS_PANEL_COTENT {
	// isShowAddToCartBtn: boolean;
	isShowPrice: boolean;
	isShowRating: boolean;
	isShowSKU: boolean;
	isShowSaleBadge: boolean;
	isShowTitle: boolean;
	titleHtmlTag: HtmlTagsType;
	//
	taxonomyPosition: "Inside featured image" | "Below featured image";
	taxonomyStyle: "Normal" | "Highlighted";
}

const TAXONOMY_POSITION_OPTIONS: {
	value: WCB_PRODUCTS_PANEL_COTENT["taxonomyPosition"];
	label: string;
}[] = [
	{ value: "Inside featured image", label: "Inside featured image" },
	{ value: "Below featured image", label: "Below featured image" },
];

export const WCB_PRODUCTS_PANEL_COTENT_DEMO: WCB_PRODUCTS_PANEL_COTENT = {
	// isShowAddToCartBtn: true,
	isShowPrice: true,
	isShowRating: true,
	isShowSaleBadge: true,
	isShowSKU: true,
	//
	isShowTitle: true,
	titleHtmlTag: "h4",
	taxonomyPosition: "Below featured image",
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
		taxonomyPosition,
		isShowPrice,
		isShowRating,
		isShowSKU,
		isShowSaleBadge,
	} = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Content", "wcb")}
		>
			<div className={"space-y-5"}>
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

				{/* <ToggleControl
					label={__("Product SKU", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowSKU: checked })
					}
					checked={isShowSKU}
				/> */}

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
