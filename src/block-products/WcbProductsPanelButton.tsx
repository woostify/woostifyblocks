import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";

export interface WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN {
	isShowReadmore: boolean;
	isOpenInNewTab: boolean;
	text: string;
}

export const WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN_DEMO: WCB_PRODUCTS_PANEL_ADD_TO_CART_BTN =
	{
		isShowReadmore: true,
		isOpenInNewTab: false,
		text: "Read more",
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
	const { isOpenInNewTab, isShowReadmore, text } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Add to Cart button", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show Read more link", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowReadmore: checked })
					}
					checked={isShowReadmore}
				/>

				{isShowReadmore ? (
					<ToggleControl
						label={__("Open links in new tab", "wcb")}
						onChange={(checked) =>
							setAttr__({ ...panelData, isOpenInNewTab: checked })
						}
						checked={isOpenInNewTab}
					/>
				) : null}

				{isShowReadmore ? (
					<InputControl
						value={text}
						label={__("Text", "wcb")}
						onChange={(nextValue) =>
							setAttr__({ ...panelData, text: nextValue || "" })
						}
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbProductsPanelButton;
