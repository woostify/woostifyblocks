import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import React, { useEffect, FC } from "react";
import { WcbBlokcHeadingAttrs } from "./attributes";
import HOCInspectorControls, {
	InspectorControlsTabs,
} from "../components/HOCInspectorControls";
import "./editor.scss";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import useGetDeviceType from "../hooks/useGetDeviceType";
import MyResponsiveConditionControl from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import MyZIndexControl from "../components/controls/MyZIndexControl/MyZIndexControl";
import { EditProps } from "../block-container/Edit";
import PanelContentControl from "./PanelContentControl";
import GroupPanelStylesControl from "./GroupPanelStylesControl";

const Edit: FC<EditProps<WcbBlokcHeadingAttrs>> = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";
	//
	useEffect(() => {
		setAttributes({
			uniqueId: "wcb-heading-" + clientId.substring(2, 9).replace("-", ""),
		});
	}, []);
	//

	const renderTabBodyPanels = (tab: InspectorControlsTabs[number]) => {
		switch (tab.name) {
			case "General":
				return (
					<>
						<PanelContentControl {...props} />
					</>
				);
			case "Styles":
				return <GroupPanelStylesControl {...props} />;
			case "Advances":
				return (
					<>
						<PanelBody
							initialOpen={false}
							title={__("Responsive Conditions", "wcb")}
						>
							<MyResponsiveConditionControl
								responsiveConditionControl={
									attributes.advance_responsiveCondition
								}
								setAttrs__responsiveCondition={(data) =>
									setAttributes({ advance_responsiveCondition: data })
								}
							/>
						</PanelBody>
						<PanelBody initialOpen={false} title={__("Z-Index", "wcb")}>
							<MyZIndexControl
								zIndexControl={attributes.advance_zIndex}
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
		<div {...useBlockProps({ className: "wcb-heading__wrap" })}>
			<HOCInspectorControls renderTabPanels={renderTabBodyPanels} />

			<RichText
				tagName="h2"
				className="wcb-heading__inner"
				value={attributes.content}
				onChange={(val) => setAttributes({ content: val })}
				allowTransparency
			/>
		</div>
	);
};

export default Edit;
