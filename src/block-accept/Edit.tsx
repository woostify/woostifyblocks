import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC, useRef } from "react";
import { WcbAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
	INSPECTOR_CONTROLS_TABS,
} from "../components/HOCInspectorControls";
import { EditProps } from "../block-container/Edit";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import WcbAcceptPanelGeneral from "./WcbAcceptPanelGeneral";
import converUniqueId from "../utils/converUniqueId";
import converUniqueIdToAnphaKey from "../utils/converUniqueIdToAnphaKey";

const Edit: FC<EditProps<WcbAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { general_general, uniqueId, label } = attributes;
	//  COMMON HOOKS
	// const { myCache, ref } = useCreateCacheEmotion();
	const ref = useRef<HTMLDivElement>(null);
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_NAME = converUniqueId(uniqueId, "accept");
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
						<WcbAcceptPanelGeneral
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
			className={`${wrapBlockProps?.className} wcb-accept__wrap ${uniqueId}`}
			data-uniqueid={uniqueId}
		>
			{/* CONTROL SETTINGS */}
			<HOCInspectorControls
				tabs={INSPECTOR_CONTROLS_TABS.filter((item) => item.name !== "Styles")}
				uniqueId={uniqueId}
				renderTabPanels={renderTabBodyPanels}
			/>

			{/* CHILD CONTENT  */}
			{general_general.enablePrivacyLink && (
				<div>
					<a
						href={general_general.linkHref}
						target={general_general.openInNewTab ? "_blank" : "_self"}
						rel="noopener noreferrer"
						className="wcb-accept__link"
					>
						{general_general.linkLabel}
					</a>
				</div>
			)}
			<label className="wcb-checkbox__option">
				<input
					type="checkbox"
					className="wcb-checkbox__option-input"
					required={general_general.isRequired}
					name={UNIQUE_NAME}
				/>
				<span
					className={`wcb-checkbox__option-label ${
						general_general.isRequired ? "required" : ""
					}`}
				>
					{general_general.acceptanceText}
				</span>
			</label>
		</div>
		// </CacheProvider>
	);
};

export default Edit;
