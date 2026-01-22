import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import MySelect from "../components/controls/MySelect";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import MyRadioGroup, { MyRadioItem } from "../components/controls/MyRadioGroup";

export interface WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE {
	isShowFeaturedImage: boolean;
	featuredImageSize: string;
	featuredImagePosition: "top" | "left" | "right" | "background";
	linkCompleteBox: boolean;
}

export const WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE_DEMO: WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE =
	{
		isShowFeaturedImage: true,
		featuredImageSize: "large",
		featuredImagePosition: "top",
		linkCompleteBox: false,
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
	const {
		isShowFeaturedImage,
		featuredImageSize,
		featuredImagePosition,
		linkCompleteBox,
	} = panelData;

	const { imageSizes } = useSelect((select) => {
		const settings = select(blockEditorStore).getSettings();
		return {
			imageSizes: settings.imageSizes as any[],
		};
	}, []);

	const imageSizeOptions =
		imageSizes?.map(({ name, slug }) => ({
			value: slug,
			label: name,
		})) || [];

	const POSTION_PLANS: MyRadioItem<
		WCB_POST_GRID_PANEL_POST_FEATURED_IMAGE["featuredImagePosition"]
	>[] = [
		{ name: "top", icon: "Top" },
		// { name: "left", icon: "Left" },
		// { name: "right", icon: "Right" },
		{ name: "background", icon: "Background" },
	];

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("Featured image settings", "boostify-blocks")}
		>
			<div className={"space-y-5 "}>
				<ToggleControl
					label={__("Show featured image", "boostify-blocks")}
					onChange={(checked) =>
						setAttr__({ ...panelData, isShowFeaturedImage: checked })
					}
					checked={isShowFeaturedImage}
				/>

				{isShowFeaturedImage ? (
					<MySelect
						value={featuredImageSize}
						options={imageSizeOptions}
						label={__("Image size", "boostify-blocks")}
						onChange={(size) => {
							setAttr__({ ...panelData, featuredImageSize: size });
						}}
					/>
				) : null}

				{isShowFeaturedImage ? (
					<MyRadioGroup
						label="Position"
						// labelClassName=""
						// className="flex items-center justify-between space-x-3"
						// contentClassName="flex-shrink-0 flex-1"
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
						label={__("Link Complete Box", "boostify-blocks")}
						onChange={(checked) =>
							setAttr__({ ...panelData, linkCompleteBox: checked })
						}
						checked={linkCompleteBox}
						help={__(
							"When enabled, the link to the article page will cover the entire card",
							"boostify-blocks"
						)}
					/>
				) : null}
			</div>
		</PanelBody>
	);
};

export default WcbPostGridPanelPostFeaturedImage;
