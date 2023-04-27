import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
	INSPECTOR_CONTROLS_TABS,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import WcbTogglePanelGeneral from "./WcbTogglePanelGeneral";
import { FormInputLabelRichText } from "../block-form/FormInputLabelRichText";
import converUniqueId from "../utils/converUniqueId";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { general_general, uniqueId, label } = attributes;
	//  COMMON HOOKS
	// const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps();
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_NAME = converUniqueId(uniqueId, "toggle");
	// make uniqueid
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: converUniqueIdToAnphaKey(UNIQUE_ID),
		});
	}, [UNIQUE_ID]);
	//
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbTogglePanelGeneral
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
			// case "Styles":
			// 	return <></>;
			case "Advances":
				return <></>;

			default:
				return <div></div>;
		}
	};

	return (
		// <CacheProvider value={myCache}>
		<div
			{...wrapBlockProps}
			className={`${wrapBlockProps?.className} wcb-toggle__wrap ${uniqueId}`}
			data-uniqueid={uniqueId}
		>
			{/* CONTROL SETTINGS */}
			<HOCInspectorControls
				tabs={INSPECTOR_CONTROLS_TABS.filter((item) => item.name !== "Styles")}
				renderTabPanels={renderTabBodyPanels}
			/>

			{/* CHILD CONTENT  */}
			<FormInputLabelRichText
				value={label}
				isRequired={general_general.isRequired}
				onChange={(value) => {
					setAttributes({ label: value });
				}}
			/>

			<label className="wcb-toggle__switch">
				<input
					type="hidden"
					className="wcb-toggle__switch-input-hidden"
					data-truestate={attributes.general_general?.trueState}
					data-falsestate={attributes.general_general?.falseState}
					name={UNIQUE_NAME}
				/>
				<input
					type="checkbox"
					name={UNIQUE_NAME}
					checked={attributes.general_general?.isDefaultON}
					onChange={(e) => {
						setAttributes({
							general_general: {
								...attributes.general_general,
								isDefaultON: e.currentTarget.checked,
							},
						});
					}}
					required={attributes.general_general?.isRequired}
				/>
				<span
					className={`wcb-toggle__slider ${
						attributes.general_general?.layout === "round" ? "round" : ""
					}`}
				></span>
			</label>
		</div>
		// </CacheProvider>
	);
};

export default Edit;
