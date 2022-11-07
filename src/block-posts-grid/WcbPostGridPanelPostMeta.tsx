import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MyDisclosure from "../components/controls/MyDisclosure";
import MyHeadingTagControl from "../components/controls/MyHeadingTagControl/MyHeadingTagControl";
import { HtmlTagsType } from "../types";

export interface WCB_POST_GRID_PANEL_POST_META {
	isShowTitle: boolean;
	titleHtmlTag: HtmlTagsType;
	isShowAuthor: boolean;
	isShowDate: boolean;
	isShowComment: boolean;
	isShowTaxonomy: boolean;
	isShowMetaIcon: boolean;
}

export const WCB_POST_GRID_PANEL_POST_META_DEMO: WCB_POST_GRID_PANEL_POST_META =
	{
		isShowTitle: true,
		titleHtmlTag: "h4",
		isShowComment: true,
		isShowAuthor: true,
		isShowDate: true,
		isShowTaxonomy: true,
		isShowMetaIcon: true,
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_POST_GRID_PANEL_POST_META;
	setAttr__: (data: WCB_POST_GRID_PANEL_POST_META) => void;
}

const WcbPostGridPanelPostMeta: FC<Props> = ({
	panelData = WCB_POST_GRID_PANEL_POST_META_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const {
		isShowAuthor,
		isShowComment,
		isShowDate,
		isShowTaxonomy,
		isShowTitle,
		titleHtmlTag,
		isShowMetaIcon,
	} = panelData;

	const renderTaxonomy = () => {
		return (
			<MyDisclosure label="Taxonomy" defaultOpen>
				<ToggleControl
					label={__("Show taxonomy", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowTaxonomy: checked })
					}
					checked={isShowTaxonomy}
				/>
			</MyDisclosure>
		);
	};

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Post meta settings", "wcb")}
		>
			<div className={"space-y-5"}>
				<ToggleControl
					label={__("Show title", "wcb")}
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
					label={__("Show author", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowAuthor: checked })
					}
					checked={isShowAuthor}
				/>

				<ToggleControl
					label={__("Show date", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowDate: checked })
					}
					checked={isShowDate}
				/>

				<ToggleControl
					label={__("Show comment", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowComment: checked })
					}
					checked={isShowComment}
				/>

				{renderTaxonomy()}

				<ToggleControl
					label={__("Show Meta icon", "wcb")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowMetaIcon: checked })
					}
					checked={isShowMetaIcon}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelPostMeta;
