import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, TabPanel } from "@wordpress/components";
import React, { useState, useEffect, FC } from "react";
import { getDeviceSuffix } from "../utils/get-device-type";
import WoostifyBaseControl from "../components/controls/WCBBaseControl/WCBBaseControl";
import WCBTypographyHelperControl from "../components/controls/WCBTypographyHelperControl/WCBTypographyHelperControl";
import WcbDimensions from "../components/controls/WcbDimensions/WcbDimensions";
import "./editor.scss";
import { Blokc1Attrs } from "./attributes";

export type EditProps<T> = {
	attributes: T;
	setAttributes: (newAttributes: Partial<T>) => void;
	clientId: string;
};

const Edit: FC<EditProps<Blokc1Attrs>> = (props) => {
	const deviceSuffix = getDeviceSuffix();

	const { attributes, setAttributes, clientId } = props;
	const { uniqueId } = attributes;

	//
	useEffect(() => {
		setAttributes({
			uniqueId: clientId.substr(2, 9).replace("-", ""),
		});
	}, []);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("General Settings", "wcb")}>
					<WoostifyBaseControl label={__("Background Color", "wcb")}>
						<ColorPalette
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							value={attributes.bg_color}
							onChange={(val) => {
								setAttributes({ bg_color: val });
							}}
						/>
					</WoostifyBaseControl>
					{/*  */}
					<WoostifyBaseControl label={__("Text Color", "wcb")}>
						<ColorPalette
							colors={[
								{ name: "red", color: "#f00" },
								{ name: "white", color: "#fff" },
								{ name: "blue", color: "#00f" },
							]}
							value={textColor}
							onChange={(val) => {
								setTextColor(val);
								setAttributes({ text_color: val });
							}}
						/>
					</WoostifyBaseControl>
					{/* <WCBTypographyHelperControl
						{...props}
						label={__("Typography", "wcb")}
						popoverHeading={__("Heading", "wcb")}
					/> */}
					<WoostifyBaseControl
						label={__("Padding", "wcb")}
						// responsive={["desktop", "tablet", "mobile"]}
						// units={["px", "em", "rem", "%"]}
						// selectedUnit={attributes["paddingUnit" + deviceSuffix]}
						// onUnitClick={(unit) =>
						// 	setAttributes({
						// 		["paddingUnit" + deviceSuffix]: unit,
						// 	})
						// }
					>
						<WcbDimensions
							{...props}
							type={"padding"}
							attrTop={"paddingTop" + deviceSuffix}
							attrRight={"paddingRight" + deviceSuffix}
							attrBottom={"paddingBottom" + deviceSuffix}
							attrLeft={"paddingLeft" + deviceSuffix}
						/>
					</WoostifyBaseControl>
					<WoostifyBaseControl
						label={__("Margin", "wcb")}
						// responsive={["desktop", "tablet", "mobile"]}
						// units={["px", "rem"]}
						// selectedUnit={attributes["marginUnit" + deviceSuffix]}
						// onUnitClick={(unit) =>
						// 	setAttributes({
						// 		["marginUnit" + deviceSuffix]: unit,
						// 	})
						// }
					>
						<WcbDimensions
							{...props}
							type={"margin"}
							attrTop={"marginTop" + deviceSuffix}
							attrRight={"marginRight" + deviceSuffix}
							attrBottom={"marginBottom" + deviceSuffix}
							attrLeft={"marginLeft" + deviceSuffix}
							labelTop={__("T-Left", "wcb")}
							labelRight={__("T-Right", "wcbs")}
							labelBottom={__("B-Right", "wcb")}
							labelLeft={__("B-Left", "wcb")}
							disableInputs={[
								"marginLeft" + deviceSuffix,
								"marginRight" + deviceSuffix,
							]}
						/>
					</WoostifyBaseControl>
				</PanelBody>
			</InspectorControls>
			<div className="wcb-block-wrapper" id={`wcb-${uniqueId}`}>
				{/* <style>
					{`#wcb-${uniqueId} .wcb-text {
							font-family: ${attributes.fontFamily};
							font-weight: ${attributes.fontWeight};
							text-transform: ${attributes.fontTransform};
							font-style: ${attributes.fontStyle};
							line-height: ${lineHeightCSS};
							font-size: ${fontSizeCSS};
							letter-spacing: ${letterSpacingCSS};
							background-color: ${attributes.bg_color};
							color: ${attributes.text_color};
						}`}
				</style> */}
				<RichText
					tagName="h2"
					className="wcb-text text-red-500"
					value={attributes.message}
					onChange={(val) => setAttributes({ message: val })}
				/>
			</div>
		</div>
	);
};

export default Edit;
