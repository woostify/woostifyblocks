import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, CSSProperties } from "react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import MyLabelControl from "../components/controls/MyLabelControl/MyLabelControl";
import { ResponsiveDevices } from "../components/controls/MyResponsiveToggle/MyResponsiveToggle";
import MySpacingSizesControl from "../components/controls/MySpacingSizesControl/MySpacingSizesControl";
import MyTextAlignControl, {
	TextAlignment,
} from "../components/controls/MyTextAlignControl/MyTextAlignControl";
import useGetDeviceType from "../hooks/useGetDeviceType";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";

export interface WCB_TESTIMONIALS_PANEL_GENERAL {
	textAlignment: HasResponsive<TextAlignment>;
	numberofTestimonials: number;
	columns: HasResponsive<number>;
	colGap: HasResponsive<string>;
}

export const WCB_TESTIMONIALS_PANEL_GENERAL_DEMO: WCB_TESTIMONIALS_PANEL_GENERAL =
	{
		textAlignment: { Desktop: "center" },
		numberofTestimonials: 3,
		columns: { Desktop: 1, Tablet: 1, Mobile: 1 },
		colGap: { Desktop: "1rem" },
	};

interface Props
	extends Pick<PanelBody.Props, "onToggle" | "opened" | "initialOpen"> {
	panelData: WCB_TESTIMONIALS_PANEL_GENERAL;
	setAttr__: (data: WCB_TESTIMONIALS_PANEL_GENERAL) => void;
}

const WcbTestimonialsPanelGeneral: FC<Props> = ({
	panelData = WCB_TESTIMONIALS_PANEL_GENERAL_DEMO,
	setAttr__,
	initialOpen,
	onToggle,
	opened,
}) => {
	const deviceType: ResponsiveDevices = useGetDeviceType() || "Desktop";

	const { textAlignment, columns, numberofTestimonials, colGap } = panelData;
	const { currentDeviceValue: currentTextAlignment } =
		getValueFromAttrsResponsives(textAlignment, deviceType);
	const { currentDeviceValue: currentColumns } = getValueFromAttrsResponsives(
		columns,
		deviceType
	);
	const { currentDeviceValue: currentColGap } = getValueFromAttrsResponsives(
		colGap,
		deviceType
	);
	//
	const handleChangeTextAlignment = (selected: CSSProperties["textAlign"]) => {
		setAttr__({
			...panelData,
			textAlignment: {
				...textAlignment,
				[deviceType]: selected,
			},
		});
	};
	//

	return (
		<PanelBody
			initialOpen={initialOpen}
			onToggle={onToggle}
			opened={opened}
			title={__("General", "boostify-blocks")}
		>
			<div className={"space-y-5"}>
				<RangeControl
					label={__("Number of Testimonials", "boostify-blocks")}
					value={numberofTestimonials}
					onChange={(value) => {
						setAttr__({ ...panelData, numberofTestimonials: value || 1 });
					}}
					min={1}
					max={50}
				/>

				<RangeControl
					label={
						<MyLabelControl hasResponsive>
							{__("Columns", "boostify-blocks")}
						</MyLabelControl>
					}
					value={currentColumns || 1}
					onChange={(value) => {
						setAttr__({
							...panelData,
							columns: {
								...columns,
								[deviceType]: value,
							},
						});
					}}
					min={1}
					max={numberofTestimonials}
				/>

				<MySpacingSizesControl
					onChange={(value) => {
						setAttr__({
							...panelData,
							colGap: {
								...colGap,
								[deviceType]: value,
							},
						});
					}}
					value={currentColGap || "0"}
					label={"Gap"}
					hasResponsive
				/>

				<MyTextAlignControl
					textAlignment={currentTextAlignment || undefined}
					onChange={handleChangeTextAlignment}
				/>
			</div>
		</PanelBody>
	);
};

export default WcbTestimonialsPanelGeneral;
