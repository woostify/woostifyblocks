import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HtmlTagsType } from "../block-common-css/types";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";

export interface WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE {
	isShowFeaturedImage: boolean;
}

export const WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE =
	{
		isShowFeaturedImage: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE;
	setAttr__: (data: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE) => void;
}

const WcbPostGridPanelPostFeaturedImage: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const { isShowFeaturedImage } = panelData;

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Featured image settings", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show featured image", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowFeaturedImage: checked })
					}
					checked={isShowFeaturedImage}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelPostFeaturedImage;
