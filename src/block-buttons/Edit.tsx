import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
	RichText,
	InnerBlocks,
} from "@wordpress/block-editor";
import { get } from "lodash";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps, TPlaceholder } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbButtonsPanelGeneral from "./WcbButtonsPanelGeneral";
import { useSelect, useDispatch } from "@wordpress/data";
import {
	// @ts-ignore
	createBlocksFromInnerBlocksTemplate,
	// @ts-ignore
	store as blocksStore,
} from "@wordpress/blocks";
import WcbButtonsPanel_StyleText from "./WcbButtonsPanel_StyleText";
import WcbButtonsPanel_StyleDimension from "./WcbButtonsPanel_StyleDimension";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_text,
		style_dimension,
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
	useEffect(() => {}, []);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbButtonsPanelGeneral
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
					</>
				);
			case "Styles":
				return (
					<>
						<WcbButtonsPanel_StyleText
							onToggle={() => handleTogglePanel("Styles", "_StyleText", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleText" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleText" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_text: data });
							}}
							panelData={style_text}
						/>
						<WcbButtonsPanel_StyleDimension
							onToggle={() => handleTogglePanel("Styles", "_StyleDimension")}
							initialOpen={tabStylesIsPanelOpen === "_StyleDimension"}
							opened={tabStylesIsPanelOpen === "_StyleDimension" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_dimension: data });
							}}
							panelData={style_dimension}
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

	const {} = attributes;
	const ALLOWED_BLOCKS = ["wcb/button"];

	const blockProps = useBlockProps({
		className: `wcb-buttons__inner`,
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		renderAppender: () =>
			isSelected ? <InnerBlocks.DefaultBlockAppender /> : false,
	});
	//

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`wcb-buttons__wrap ${uniqueId} ${wrapBlockProps.className} `}
				data-uniqueid={uniqueId}
			>
				{/*  */}
				<GlobalCss {...attributes} />
				{/*  */}

				<div {...innerBlocksProps} />

				<HOCInspectorControls
					uniqueId={uniqueId}
					renderTabPanels={renderTabBodyPanels}
					onChangeActive={(tab) => {
						handleTogglePanel(tab);
					}}
					tabDefaultActive={tabIsOpen}
				/>
			</div>
		</CacheProvider>
	);
};

const Placeholder: FC<TPlaceholder> = ({
	attributes,
	setAttributes,
	name,
	clientId,
}) => {
	useEffect(() => {}, []);

	const { blockType, defaultVariation, variations } = useSelect(
		(select) => {
			const { getBlockVariations, getBlockType, getDefaultBlockVariation } =
				select(blocksStore) as any;

			return {
				blockType: getBlockType(name),
				defaultVariation: getDefaultBlockVariation(name, "block"),
				variations: getBlockVariations(name, "block"),
			};
		},
		[name]
	);
	const { replaceInnerBlocks } = useDispatch(blockEditorStore);

	return (
		<div {...useBlockProps()}>
			<BlockVariationPicker
				icon={get(blockType, ["icon", "src"])}
				label={get(blockType, ["title"])}
				instructions={__("Select a variation to start with.")}
				onSelect={(nextVariation = defaultVariation) => {
					if (typeof nextVariation.attributes === "object") {
						setAttributes({ ...attributes, ...nextVariation.attributes });
					}
					if (nextVariation.innerBlocks) {
						replaceInnerBlocks(
							clientId,
							createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks),
							true
						);
					}
				}}
				variations={variations}
				allowSkip
			/>
		</div>
	);
};

const ButtonsEdit = (props) => {
	const { clientId } = props;
	const hasInnerBlocks = useSelect(
		(select) =>
			(select(blockEditorStore) as any).getBlocks(clientId).length > 0,
		[clientId]
	);
	const Component = hasInnerBlocks ? Edit : Placeholder;

	return <Component {...props} />;
};

export default ButtonsEdit;
