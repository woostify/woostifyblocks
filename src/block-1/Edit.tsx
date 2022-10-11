import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {
	ColorPicker,
	PanelBody,
	RangeControl,
	TabPanel,
} from "@wordpress/components";
import React, { useState, useEffect, FC } from "react";
import { getDeviceSuffix } from "../utils/get-device-type";
import WoostifyBaseControl from "../components/controls/WCBBaseControl/WCBBaseControl";
import "./editor.scss";
import { Blokc1Attrs } from "./attributes";
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import MyBackgroundControl from "../components/controls/MyBackgroundControl/MyBackgroundControl";

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
				<PanelBody
					className="wcb-inspectorControls__panelBody"
					title={__("General Settings", "wcb")}
				>
					<div className="">
						<MyColorPicker
							onChange={(color) => setAttributes({ color })}
							color={attributes.color}
						/>
					</div>
					<div className="my-8">
						<MyBackgroundControl
						// onChange={(color) => setAttributes({ color })}
						// color={attributes.color}
						/>
					</div>
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
					className="wcb-text p-5 bg-sky-500 rounded-2xl"
					value={attributes.message}
					onChange={(val) => setAttributes({ message: val })}
					style={{
						color: attributes.color,
					}}
				/>
			</div>
		</div>
	);
};

export default Edit;
