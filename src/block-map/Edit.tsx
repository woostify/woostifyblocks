import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useCallback } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import AdvancePanelCommon from "../components/AdvancePanelCommon";
import WcbMapPanelGeneral from "./WcbMapPanelGeneral";
import MyCacheProvider from "../components/MyCacheProvider";
import { WcbAttrsForSave } from "./Save";
import WcbMapPanel_StyleBorder from "./WcbMapPanel_StyleBorder";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_general,
		style_border,
		advance_motionEffect,
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

	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbMapPanelGeneral
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
						<WcbMapPanel_StyleBorder
							onToggle={() => handleTogglePanel("Styles", "_StyleBorder", true)}
							initialOpen={
								tabStylesIsPanelOpen === "_StyleBorder" ||
								tabStylesIsPanelOpen === "first"
							}
							opened={tabStylesIsPanelOpen === "_StyleBorder" || undefined}
							//
							setAttr__={(data) => {
								setAttributes({ style_border: data });
							}}
							panelData={style_border}
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

	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
		return {
			uniqueId,
			advance_responsiveCondition,
			advance_zIndex,
			general_general,
			style_border,
			advance_motionEffect,
		};
	}, [
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_general,
		style_border,
		advance_motionEffect,
	]);
	//

	return (
		<MyCacheProvider uniqueKey={clientId}>
			<div
				{...wrapBlockProps}
				className={`${wrapBlockProps?.className} wcb-map__wrap ${uniqueId}`}
				data-uniqueid={uniqueId}
			>
				{/* CONTROL SETTINGS */}
				<HOCInspectorControls
					renderTabPanels={renderTabBodyPanels}
					uniqueId={uniqueId}
				/>

				{/* CSS IN JS */}
				<GlobalCss {...WcbAttrsForSave()} />

				{/* CHILD CONTENT  */}
				<div className="wcb-map__inner">
					<iframe
						width="100%"
						height="100%"
						loading="lazy"
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
						title={general_general.placeQuery || ""}
						src={`https://www.google.com/maps/embed/v1/place
						?key=AIzaSyCLK1ZWtKchh3gykkn2o3i47pVEX5vbKdA
						&maptype=${general_general.mapTypeId}
						&language=${general_general.language}
						&zoom=${general_general.zoom}
						&q=${
							general_general.placeQuery?.replace?.(/ /g, "+") ||
							"Eiffel+Tower,Paris+France"
						}`}
						style={{ pointerEvents: "none" }}
					></iframe>
				</div>
			</div>
		</MyCacheProvider>
	);
};

export default Edit;
