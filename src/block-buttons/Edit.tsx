import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	// @ts-ignore
	useInnerBlocksProps,
	// @ts-ignore
	__experimentalBlockVariationPicker as BlockVariationPicker,
	store as blockEditorStore,
	InnerBlocks,
} from "@wordpress/block-editor";
import { get } from "lodash";
import React, { useEffect, FC, useCallback, useRef } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps, TPlaceholder } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbButtonsPanelGeneral, {
	BtnGroupSizes,
} from "./WcbButtonsPanelGeneral";
import { useSelect, useDispatch } from "@wordpress/data";
import {
	// @ts-ignore
	createBlocksFromInnerBlocksTemplate,
	// @ts-ignore
	store as blocksStore,
} from "@wordpress/blocks";
import WcbButtonsPanel_StyleText from "./WcbButtonsPanel_StyleText";
import WcbButtonsPanel_StyleDimension, {
	WCB_BUTTONS_PANEL_STYLE_DIMENSION,
} from "./WcbButtonsPanel_StyleDimension";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { DimensionSettings } from "../components/controls/MyDimensionsControl/types";
import { WcbAttrsForSave } from "./Save";
import MyCacheProvider from "../components/MyCacheProvider";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_text,
		style_dimension,
		advance_motionEffect,
	} = attributes;
	//  COMMON HOOKS

	const ref = useRef<HTMLDivElement>(null);

	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);

	const getPaddingBySize = (size?: BtnGroupSizes): DimensionSettings => {
		switch (size) {
			case "default":
				return {
					top: "12px",
					left: "24px",
					right: "24px",
					bottom: "12px",
				};
			case "xs":
				return {
					top: "4px",
					left: "8px",
					right: "8px",
					bottom: "4px",
				};
			case "sm":
				return {
					top: "8px",
					left: "16px",
					right: "16px",
					bottom: "8px",
				};
			case "md":
				return {
					top: "14px",
					left: "28px",
					right: "28px",
					bottom: "14px",
				};
			case "lg":
				return {
					top: "20px",
					left: "40px",
					right: "40px",
					bottom: "20px",
				};
			case "xl":
				return {
					top: "28px",
					left: "64px",
					right: "64px",
					bottom: "28px",
				};

			default:
				return {
					top: "12px",
					left: "24px",
					right: "24px",
					bottom: "12px",
				};
		}
	};

	const getButtonSizeDimension = (
		size: HasResponsive<BtnGroupSizes>
	): WCB_BUTTONS_PANEL_STYLE_DIMENSION => {
		const {
			value_Desktop: size_desktop,
			value_Tablet: size_tablet,
			value_Mobile: size_mobile,
		} = getValueFromAttrsResponsives(size);

		return {
			...style_dimension,
			padding: {
				Desktop: getPaddingBySize(size_desktop),
				Tablet: getPaddingBySize(size_tablet),
				Mobile: getPaddingBySize(size_mobile),
			},
		};
	};

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
								if (
									JSON.stringify(data.size) !==
									JSON.stringify(general_general.size)
								) {
									setAttributes({
										general_general: data,
										style_dimension: getButtonSizeDimension(data.size),
									});
								} else {
									setAttributes({ general_general: data });
								}
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
							advance_motionEffect={advance_motionEffect}
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			style_dimension,
			style_text,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_dimension,
		style_text,
		advance_motionEffect,
	]);
	
	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`wcb-buttons__wrap ${uniqueId} ${wrapBlockProps.className}`}
				data-uniqueid={uniqueId}
			>
				{/*  */}
				<GlobalCss {...WcbAttrsForSave()} />
				{/*  */}

				<div {...innerBlocksProps} />

				<HOCInspectorControls
					uniqueId={uniqueId}
					renderTabPanels={renderTabBodyPanels}
				/>
			</div>
		</MyCacheProvider>
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

console.log("buttons__inner____");

export default ButtonsEdit;
