import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import React, { FC, ReactNode } from "react";
import { InspectorControlsTabTitle } from "./HOCInspectorControls";
import MyResponsiveConditionControl, {
	MyResponsiveConditionControlData,
} from "./controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import MyZIndexControl, {
	MyZIndexControlData,
} from "./controls/MyZIndexControl/MyZIndexControl";
import MyMyMotionEffectControl, {
	MY_MOTION_EFFECT_DEMO,
	MyMotionEffectData,
} from "./controls/MyMotionEffectControl/MyMotionEffectControl";

interface Props {
	handleTogglePanel: (
		tab: InspectorControlsTabTitle,
		panel?: string | undefined,
		initOpenPanel?: boolean | undefined
	) => void;
	tabAdvancesIsPanelOpen: string | undefined;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	advance_zIndex: MyZIndexControlData;
	advance_motionEffect?: MyMotionEffectData;
	setAttributes: (data: any) => void;
	children?: ReactNode;
}

const AdvancePanelCommon: FC<Props> = ({
	handleTogglePanel,
	tabAdvancesIsPanelOpen,
	advance_responsiveCondition,
	advance_zIndex,
	advance_motionEffect,
	setAttributes,
	children,
}) => {
	return (
		<>
			{!!advance_motionEffect ? (
				<PanelBody
					onToggle={() =>
						handleTogglePanel("Advances", "MyMyMotionEffectControl")
					}
					initialOpen={tabAdvancesIsPanelOpen === "MyMyMotionEffectControl"}
					opened={
						tabAdvancesIsPanelOpen === "MyMyMotionEffectControl" || undefined
					}
					title={__("Motion Effect", "boostify-blocks")}
				>
					<MyMyMotionEffectControl
						data={advance_motionEffect}
						onChange={(data) => setAttributes({ advance_motionEffect: data })}
					/>
				</PanelBody>
			) : null}
			<PanelBody
				onToggle={() => handleTogglePanel("Advances", "Responsive Conditions")}
				initialOpen={tabAdvancesIsPanelOpen === "Responsive Conditions"}
				opened={tabAdvancesIsPanelOpen === "Responsive Conditions" || undefined}
				title={__("Responsive Conditions", "boostify-blocks")}
			>
				<MyResponsiveConditionControl
					responsiveConditionControl={advance_responsiveCondition}
					setAttrs__responsiveCondition={(data) =>
						setAttributes({ advance_responsiveCondition: data })
					}
				/>
			</PanelBody>
			<PanelBody
				onToggle={() => handleTogglePanel("Advances", "Z-Index")}
				initialOpen={tabAdvancesIsPanelOpen === "Z-Index"}
				opened={tabAdvancesIsPanelOpen === "Z-Index" || undefined}
				title={__("Z-Index", "boostify-blocks")}
			>
				<MyZIndexControl
					zIndexControl={advance_zIndex}
					setAttrs__zIndex={(data) => setAttributes({ advance_zIndex: data })}
				/>
			</PanelBody>
			{children ? children : null}
		</>
	);
};

export default AdvancePanelCommon;
