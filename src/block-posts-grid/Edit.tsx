import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { WcbBlockPostsGridAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import MyResponsiveConditionControl from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import MyZIndexControl from "../components/controls/MyZIndexControl/MyZIndexControl";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import GlobalCss from "./GlobalCss";
import "./editor.scss";
import WcbPostsGridPanelSortingAndFiltering from "./WcbPostsGridPanelSortingAndFiltering";

const Edit: FC<EditProps<WcbBlockPostsGridAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;

	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });
	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		const {
			general_sortingAndFiltering,
			advance_responsiveCondition,
			advance_zIndex,
			uniqueId,
		} = attributes;
		switch (tab.name) {
			case "General":
				return (
					<>
						<WcbPostsGridPanelSortingAndFiltering
							setAttr__={(data) => {
								setAttributes({ general_sortingAndFiltering: data });
							}}
							panelData={general_sortingAndFiltering}
						/>
					</>
				);
			case "Styles":
				return <></>;
			case "Advances":
				return (
					<>
						<PanelBody
							initialOpen={false}
							title={__("Responsive Conditions", "wcb")}
						>
							<MyResponsiveConditionControl
								responsiveConditionControl={advance_responsiveCondition}
								setAttrs__responsiveCondition={(data) =>
									setAttributes({ advance_responsiveCondition: data })
								}
							/>
						</PanelBody>
						<PanelBody initialOpen={false} title={__("Z-Index", "wcb")}>
							<MyZIndexControl
								zIndexControl={advance_zIndex}
								setAttrs__zIndex={(data) =>
									setAttributes({ advance_zIndex: data })
								}
							/>
						</PanelBody>
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
				<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />

				{/* CSS IN JS */}
				<GlobalCss {...attributes} />

				{/* CHILD CONTENT  */}
				<div className="h-32 bg-slate-200 my-5">CHILD CONTENT </div>
			</div>
		</CacheProvider>
	);
};

export default Edit;
