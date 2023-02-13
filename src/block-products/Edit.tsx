import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback, useState } from "react";
import ServerSideRender from "@wordpress/server-side-render";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbProducstPanelSortingAndFiltering from "./WcbProducstPanelSortingAndFiltering";
import {
	Button,
	Placeholder,
	Tip,
	withSpokenMessages,
} from "@wordpress/components";
import WcbProductsPanelContent from "./WcbProductsPanelContent";
import WcbProductsPanelFeaturedImage from "./WcbProductsPanelFeaturedImage";
import WcbProductsPanelButton from "./WcbProductsPanelButton";
import WcbProductsPanelPagination from "./WcbProductsPanelPagination";
import WcbProductsPanel_StyleTitle from "./WcbProductsPanel_StyleTitle";
import WcbProductsPanel_StyleFeaturedImage from "./WcbProductsPanel_StyleFeaturedImage";
import WcbProductsPanel_StyleLayout from "./WcbProductsPanel_StyleLayout";
import WcbProductsPanel_StyleAddToCartBtn from "./WcbProductsPanel_StyleAddToCartBtn";
import WcbProductsPanel_StylePagination from "./WcbProductsPanel_StylePagination";

interface Props extends EditProps<WcbAttrs> {}

const Edit: FC<Props> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		uniqueId,
		general_content,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
		style_title,
		style_featuredImage,
		style_layout,
		style_addToCardBtn,
		style_pagiantion,
	} = attributes;
	//  COMMON HOOKS
	const wrapBlockProps = useBlockProps();
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;

	//

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
						<WcbProducstPanelSortingAndFiltering
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
						<WcbProductsPanelContent
							onToggle={() => handleTogglePanel("General", "Content")}
							initialOpen={tabGeneralIsPanelOpen === "Content"}
							opened={tabGeneralIsPanelOpen === "Content" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_content: data });
							}}
							panelData={general_content}
						/>
						<WcbProductsPanelFeaturedImage
							onToggle={() => handleTogglePanel("General", "PostFeaturedImage")}
							initialOpen={tabGeneralIsPanelOpen === "PostFeaturedImage"}
							opened={
								tabGeneralIsPanelOpen === "PostFeaturedImage" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ general_featuredImage: data });
							}}
							panelData={general_featuredImage}
						/>
						<WcbProductsPanelButton
							onToggle={() => handleTogglePanel("General", "Button")}
							initialOpen={tabGeneralIsPanelOpen === "Button"}
							opened={tabGeneralIsPanelOpen === "Button" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_addToCartBtn: data });
							}}
							panelData={general_addToCartBtn}
						/>
						<WcbProductsPanelPagination
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
				return (
					<>
						<WcbProductsPanel_StyleLayout
							onToggle={() => handleTogglePanel("Styles", "_StyleLayout", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleLayout" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleLayout" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_layout: data });
							}}
							panelData={style_layout}
						/>
						<WcbProductsPanel_StyleTitle
							onToggle={() => handleTogglePanel("Styles", "_StyleTitle")}
							initialOpen={tabStylesIsPanelOpen === "_StyleTitle"}
							opened={tabStylesIsPanelOpen === "_StyleTitle" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_title: data });
							}}
							panelData={style_title}
						/>

						<WcbProductsPanel_StyleFeaturedImage
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleFeaturedImage")
							}
							initialOpen={tabStylesIsPanelOpen === "_StyleFeaturedImage"}
							opened={
								tabStylesIsPanelOpen === "_StyleFeaturedImage" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ style_featuredImage: data });
							}}
							panelData={style_featuredImage}
							imagePosition="top"
						/>
						<WcbProductsPanel_StyleAddToCartBtn
							onToggle={() => handleTogglePanel("Styles", "_StyleAddToCartBtn")}
							initialOpen={tabStylesIsPanelOpen === "_StyleAddToCartBtn"}
							opened={
								tabStylesIsPanelOpen === "_StyleAddToCartBtn" || undefined
							}
							//
							setAttr__={(data) => {
								setAttributes({ style_addToCardBtn: data });
							}}
							panelData={style_addToCardBtn}
						/>
						<WcbProductsPanel_StylePagination
							onToggle={() => handleTogglePanel("Styles", "_StylePagination")}
							initialOpen={tabStylesIsPanelOpen === "_StylePagination"}
							opened={tabStylesIsPanelOpen === "_StylePagination" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_pagiantion: data });
							}}
							panelData={style_pagiantion}
						/>
					</>
				);
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_sortingAndFiltering,
			general_content,
			general_featuredImage,
			general_addToCartBtn,
			general_pagination,
			style_title,
			style_featuredImage,
			style_layout,
			style_addToCardBtn,
			style_pagiantion,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_sortingAndFiltering,
		general_content,
		general_featuredImage,
		general_addToCartBtn,
		general_pagination,
		style_title,
		style_featuredImage,
		style_layout,
		style_addToCardBtn,
		style_pagiantion,
	]);

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-products__wrap ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				{/* <ProductsQueries /> */}
				<h2> This is Products ... </h2>
				<ServerSideRender block="wcb/products" attributes={attributes} />
			</div>
		</MyCacheProvider>
	);
};

export default withSpokenMessages(Edit);
