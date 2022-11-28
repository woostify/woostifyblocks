import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbFaqPanelGeneral from "./WcbFaqPanelGeneral";
import WcbFaqPanelIcon from "./WcbFaqPanelIcon";
import WcbFaqPanel_StyleContainer from "./WcbFaqPanel_StyleContainer";
import WcbFaqPanel_StyleQuestion from "./WcbFaqPanel_StyleQuestion";
import WcbFaqPanel_StyleAnswer from "./WcbFaqPanel_StyleAnswer";
import WcbFaqPanel_StyleIcon from "./WcbFaqPanel_StyleIcon";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_general,
		general_icon,
		style_container,
		style_question,
		style_icon,
		style_answer,
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
						<WcbFaqPanelGeneral
							onToggle={() => handleTogglePanel("General", "General", true)}
							initialOpen={
								tabGeneralIsPanelOpen === "General" ||
								tabGeneralIsPanelOpen === "first"
							}
							opened={tabGeneralIsPanelOpen === "General" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_general: data });
							}}
							panelData={general_general}
						/>
						<WcbFaqPanelIcon
							onToggle={() => handleTogglePanel("General", "Icon")}
							initialOpen={tabGeneralIsPanelOpen === "Icon"}
							opened={tabGeneralIsPanelOpen === "Icon" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ general_icon: data });
							}}
							panelData={general_icon}
						/>
					</>
				);
			case "Styles":
				return (
					<>
						<WcbFaqPanel_StyleContainer
							onToggle={() =>
								handleTogglePanel("Styles", "_StyleContainer", true)
							}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleContainer" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleContainer" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_container: data });
							}}
							panelData={style_container}
						/>

						<WcbFaqPanel_StyleQuestion
							onToggle={() => handleTogglePanel("Styles", "_StyleQuestion")}
							initialOpen={tabStylesIsPanelOpen === "_StyleQuestion"}
							opened={tabStylesIsPanelOpen === "_StyleQuestion" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_question: data });
							}}
							panelData={style_question}
						/>

						<WcbFaqPanel_StyleIcon
							onToggle={() => handleTogglePanel("Styles", "_StyleIcon")}
							initialOpen={tabStylesIsPanelOpen === "_StyleIcon"}
							opened={tabStylesIsPanelOpen === "_StyleIcon" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_icon: data });
							}}
							panelData={style_icon}
						/>

						<WcbFaqPanel_StyleAnswer
							onToggle={() => handleTogglePanel("Styles", "_StyleAnswer")}
							initialOpen={tabStylesIsPanelOpen === "_StyleAnswer"}
							opened={tabStylesIsPanelOpen === "_StyleAnswer" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_answer: data });
							}}
							panelData={style_answer}
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

	// INNER BLOCK
	const blockProps = useBlockProps({
		className: `wcb-faq__inner`,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["wcb/faq-child"],
		renderAppender: () => false,
	});

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-faq__wrap p-5 ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />

				{/* CSS IN JS */}
				<GlobalCss {...attributes} />

				{/* CHILD CONTENT  */}
				<div {...innerBlocksProps} />
			</div>
		</CacheProvider>
	);
};

export default Edit;