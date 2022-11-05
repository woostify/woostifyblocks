import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbBlockPostsGridAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import WcbPostsGridPanelSortingAndFiltering from "./WcbPostsGridPanelSortingAndFiltering";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbPostGridPanelPostContent from "./WcbPostGridPanelPostContent";
import WcbPostGridPanelPostMeta from "./WcbPostGridPanelPostMeta";
import WcbPostGridPanelPostFeaturedImage from "./WcbPostGridPanelPostFeaturedImage";
import WcbPostGridPanelReadMoreLink from "./WcbPostGridPanelReadMoreLink";
import WcbPostGridPanelPagination from "./WcbPostGridPanelPagination";

const Edit: FC<EditProps<WcbBlockPostsGridAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		general_sortingAndFiltering,
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_postContent,
		general_postMeta,
		general_postFeaturedImage,
		general_readmoreLink,
		general_pagination,
	} = attributes;
	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });

	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbPostsGridPanelSortingAndFiltering
							onToggle={() =>
								handleTogglePanel("General", "SortingAndFiltering", true)
							}
							initialOpen={
								tabGeneralIsPanelOpen === "SortingAndFiltering" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={
								tabGeneralIsPanelOpen === "SortingAndFiltering" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ general_sortingAndFiltering: data });
							}}
							panelData={general_sortingAndFiltering}
						/>

						<WcbPostGridPanelPostContent
							onToggle={() => handleTogglePanel("General", "PostContent")}
							initialOpen={tabGeneralIsPanelOpen === "PostContent"}
							opened={tabGeneralIsPanelOpen === "PostContent" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_postContent: data });
							}}
							panelData={general_postContent}
						/>

						<WcbPostGridPanelPostMeta
							onToggle={() => handleTogglePanel("General", "PostMeta")}
							initialOpen={tabGeneralIsPanelOpen === "PostMeta"}
							opened={tabGeneralIsPanelOpen === "PostMeta" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_postMeta: data });
							}}
							panelData={general_postMeta}
						/>

						<WcbPostGridPanelPostFeaturedImage
							onToggle={() => handleTogglePanel("General", "PostFeaturedImage")}
							initialOpen={tabGeneralIsPanelOpen === "PostFeaturedImage"}
							opened={
								tabGeneralIsPanelOpen === "PostFeaturedImage" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ general_postFeaturedImage: data });
							}}
							panelData={general_postFeaturedImage}
						/>

						<WcbPostGridPanelReadMoreLink
							onToggle={() => handleTogglePanel("General", "ReadMoreLink")}
							initialOpen={tabGeneralIsPanelOpen === "ReadMoreLink"}
							opened={tabGeneralIsPanelOpen === "ReadMoreLink" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_readmoreLink: data });
							}}
							panelData={general_readmoreLink}
						/>

						<WcbPostGridPanelPagination
							onToggle={() => handleTogglePanel("General", "Pagination")}
							initialOpen={tabGeneralIsPanelOpen === "Pagination"}
							opened={tabGeneralIsPanelOpen === "Pagination" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_pagination: data });
							}}
							panelData={general_pagination}
						/>
					</>
				);
			case "Styles":
				return <></>;
			case "Advances":
				return (
					<>
						<AdvancePanelCommon
							advance_responsiveCondition={
								attributes.advance_responsiveCondition
							}
							advance_zIndex={attributes.advance_zIndex}
							handleTogglePanel={handleTogglePanel}
							setAttributes={setAttributes}
							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
						/>
					</>
				);

			default:
				return <div></div>;
		}
	};

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-default__wrap ${UNIQUE_ID}`}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					tabDefaultActive={tabIsOpen}
					renderTabPanels={renderTabBodyPanels}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...attributes} />

				{/* CHILD CONTENT  */}
				<div className="h-32 bg-slate-200 my-5">CHILD CONTENT </div>
			</div>
		</CacheProvider>
	);
};

export default Edit;
