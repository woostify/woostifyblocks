export default 1;
// import { __ } from "@wordpress/i18n";
// import { useBlockProps } from "@wordpress/block-editor";
// import React, { useEffect, FC, useCallback, useState } from "react";
// import { WcbAttrs } from "./attributes";
// import HOCInspectorControls, {
// 	InspectorControlsTabs,
// } from "../components/HOCInspectorControls";
// import { EditProps } from "../block-container/Edit";
// import GlobalCss from "./GlobalCss";
// import "./editor.scss";
// import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
// import AdvancePanelCommon from "../components/AdvancePanelCommon";
// import WcbMapPanelGeneral from "./WcbMapPanelGeneral";
// import MyCacheProvider from "../components/MyCacheProvider";
// import { WcbAttrsForSave } from "./Save";
// import Map from "./Map";
// import Marker from "./Marker";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { DEMO_LATLNG } from "./types";
// import WcbMapPanel_StyleBorder from "./WcbMapPanel_StyleBorder";
// import { useTimeoutFn } from "react-use";

// const Edit: FC<EditProps<WcbAttrs>> = (props) => {
// 	const { attributes, setAttributes, clientId } = props;
// 	const {
// 		advance_responsiveCondition,
// 		advance_zIndex,
// 		uniqueId,
// 		general_general,
// 		style_border,
// 	} = attributes;
// 	//  COMMON HOOKS
// 	const wrapBlockProps = useBlockProps();
// 	const {
// 		tabIsOpen,
// 		tabAdvancesIsPanelOpen,
// 		tabGeneralIsPanelOpen,
// 		tabStylesIsPanelOpen,
// 		handleTogglePanel,
// 	} = useSetBlockPanelInfo(uniqueId);

// 	const UNIQUE_ID = wrapBlockProps.id;
// 	useEffect(() => {
// 		setAttributes({
// 			uniqueId: UNIQUE_ID,
// 		});
// 	}, [UNIQUE_ID]);
// 	//

// 	// let [isShowing, setIsShowing] = useState(true);
// 	// let [, , resetIsShowing] = useTimeoutFn(() => {
// 	// 	setIsShowing(true);
// 	// }, 500);
// 	// useEffect(() => {
// 	// 	// window.google.maps = {};
// 	// 	setIsShowing(false);
// 	// 	resetIsShowing();
// 	// }, [general_general.language]);

// 	//

// 	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
// 		switch (tab.name) {
// 			case "General":
// 				return (
// 					<>
// 						<WcbMapPanelGeneral
// 							onToggle={() => handleTogglePanel("General", "General", true)}
// 							initialOpen={
// 								tabGeneralIsPanelOpen === "General" ||
// 								tabGeneralIsPanelOpen === "first"
// 							}
// 							opened={tabGeneralIsPanelOpen === "General" || undefined}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ general_general: data });
// 							}}
// 							panelData={general_general}
// 						/>
// 					</>
// 				);
// 			case "Styles":
// 				return (
// 					<>
// 						<WcbMapPanel_StyleBorder
// 							onToggle={() => handleTogglePanel("Styles", "_StyleBorder", true)}
// 							initialOpen={
// 								tabStylesIsPanelOpen === "_StyleBorder" ||
// 								tabStylesIsPanelOpen === "first"
// 							}
// 							opened={tabStylesIsPanelOpen === "_StyleBorder" || undefined}
// 							//
// 							setAttr__={(data) => {
// 								setAttributes({ style_border: data });
// 							}}
// 							panelData={style_border}
// 						/>
// 					</>
// 				);
// 			case "Advances":
// 				return (
// 					<>
// 						<AdvancePanelCommon
// 							advance_responsiveCondition={
// 								attributes.advance_responsiveCondition
// 							}
// 							advance_zIndex={attributes.advance_zIndex}
// 							handleTogglePanel={handleTogglePanel}
// 							setAttributes={setAttributes}
// 							tabAdvancesIsPanelOpen={tabAdvancesIsPanelOpen}
// 						/>
// 					</>
// 				);

// 			default:
// 				return <div></div>;
// 		}
// 	};

// 	const WcbAttrsForSave = useCallback((): WcbAttrsForSave => {
// 		return {
// 			uniqueId,
// 			advance_responsiveCondition,
// 			advance_zIndex,
// 			general_general,
// 			style_border,
// 		};
// 	}, [
// 		uniqueId,
// 		advance_responsiveCondition,
// 		advance_zIndex,
// 		general_general,
// 		style_border,
// 	]);
// 	//

// 	const onClick = (e: google.maps.MapMouseEvent) => {
// 		setAttributes({
// 			general_general: {
// 				...general_general,
// 				latLngs: [
// 					...general_general.latLngs,
// 					{
// 						lat: e.latLng?.lat() || 0,
// 						lng: e.latLng?.lng() || 0,
// 					},
// 				],
// 			},
// 		});
// 	};

// 	const onIdle = (m: google.maps.Map) => {
// 		console.log("onIdle");
// 		const center = m.getCenter()!?.toJSON();
// 		setAttributes({
// 			general_general: {
// 				...general_general,
// 				center: center || general_general.center,
// 				zoom: m.getZoom()!,
// 			},
// 		});
// 	};

// 	const render = (status: Status) => {
// 		if (status === Status.LOADING) return <h3>{status} ..</h3>;
// 		if (status === Status.FAILURE) return <h3>{status} ...</h3>;
// 		return <div></div>;
// 	};

// 	console.log(1212, { a: general_general.language });

// 	return (
// 		<MyCacheProvider uniqueKey={clientId}>
// 			<div
// 				{...wrapBlockProps}
// 				className={`${wrapBlockProps?.className} wcb-map__wrap ${UNIQUE_ID}`}
// 				data-uniqueid={UNIQUE_ID}
// 			>
// 				{/* CONTROL SETTINGS */}
// 				<HOCInspectorControls
// 					renderTabPanels={renderTabBodyPanels}
// 					uniqueId={uniqueId}
// 				/>

// 				{/* CSS IN JS */}
// 				<GlobalCss {...WcbAttrsForSave()} isFrontent={false} />

// 				{/* CHILD CONTENT  */}
// 				<div className="wcb-map__inner">
// 					<Wrapper
// 						apiKey={`AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY`}
// 						render={render}
// 						language={general_general.language}
// 						libraries={["places"]}
// 					>
// 						<Map
// 							language={general_general.language}
// 							center={general_general.center}
// 							zoom={general_general.zoom}
// 							style={{
// 								height: "100%",
// 								width: "100%",
// 							}}
// 							onClick={onClick}
// 							onIdle={onIdle}
// 							//
// 							mapTypeControl
// 							mapTypeId={general_general.mapTypeId}
// 						>
// 							{general_general.latLngs.map((latLng, i) => (
// 								<Marker key={i} position={latLng} />
// 							))}
// 						</Map>
// 					</Wrapper>
// 				</div>
// 			</div>
// 		</MyCacheProvider>
// 	);
// };

// export default Edit;
