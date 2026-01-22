import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
// @ts-ignore
import { __experimentalInputControl as InputControl } from "@wordpress/components";

export interface WCB_POST_GRID_PANEL_READMORE_LINK {
	isShowReadmore: boolean;
	isOpenInNewTab: boolean;
	text: string;
}

export const WCB_POST_GRID_PANEL_READMORE_LINK_DEMO: WCB_POST_GRID_PANEL_READMORE_LINK =
	{
		isShowReadmore: true,
		isOpenInNewTab: false,
		text: "Read more",
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_READMORE_LINK;
	setAttr__: (data: WCB_POST_GRID_PANEL_READMORE_LINK) => void;
}

const WcbPostGridPanelReadMoreLink: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_READMORE_LINK_DEMO,
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
			title={__("Read more link", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show Read more link", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowReadmore: checked })
					}
					checked={isShowReadmore}
				/>

				{isShowReadmore ? (
					<ToggleControl
						label={__("Open links in new tab", "boostify-blocks")}
						onChange={(checked) =>
							setAttr__({ ...panelData, isOpenInNewTab: checked })
						}
						checked={isOpenInNewTab}
					/>
				) : null}

				{isShowReadmore ? (
					<InputControl
						value={text}
						label={__("Text", "boostify-blocks")}
						onChange={(nextValue) =>
							setAttr__({ ...panelData, text: nextValue || "" })
						}
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelReadMoreLink;
