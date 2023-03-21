import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN {
	isShowButton: boolean;
	position: "bottom" | "inside image";
}

export const WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN =
	{
		isShowButton: true,
		position: "bottom",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN;
	setAttr__: (data: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN) => void;
}

const WcbProductsPanelButton: FC<Props> = ({
	panelData = WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { position, isShowButton } = panelData;

	const POSTION_PLANS: MyRadioItem<
		WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN["position"]
	>[] = [
		{ name: "inside image", icon: "Inside image" },
		{ name: "bottom", icon: "Bottom" },
	];
	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Add to Cart button", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Add to Cart button", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowButton: checked })
					}
					checked={isShowButton}
				/>

				{isShowButton ? (
					<MyRadioGroup
						label="Position"
						onChange={(selected) =>
							setAttr__({
								...panelData,
								position: selected as any,
							})
						}
						value={position}
						plans={POSTION_PLANS}
						hasResponsive={false}
						isWrap
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelButton;
