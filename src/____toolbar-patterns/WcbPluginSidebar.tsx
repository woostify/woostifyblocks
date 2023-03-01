import React, { useMemo } from "react";
import {
	ColorIndicator,
	ColorPalette,
	ColorPicker,
	Panel,
	PanelBody,
	PanelRow,
} from "@wordpress/components";
import { more } from "@wordpress/icons";
import { useState } from "@wordpress/element";
// @ts-ignore
import { withColorContext, useSetting } from "@wordpress/block-editor";

import {
	// @ts-ignore
	__experimentalUseGradient,
	// @ts-ignore
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const WcbPluginSidebar = (props) => {
	const [color, setColor] = useState("#f00");
	const colors = [
		{ name: "red", color: "#f00" },
		{ name: "white", color: "#fff" },
		{ name: "blue", color: "#00f" },
	];

	// const userPalette = useSetting("color.palette.custom");
	const themePalette = useSetting("color.palette.theme");
	const defaultPalette = useSetting("color.palette.default");

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	console.log(11, {
		props,
		themePalette,
		defaultPalette,
		colorGradientSettings,
	});
	return (
		<>
			<Panel header="">
				<PanelBody title="Color Palette" initialOpen={true}>
					<PanelRow>
						<div className="flex flex-col gap-4">
							{colorGradientSettings?.colors?.map((item, index) => {
								return (
									<div key={index} className="flex flex-col gap-2">
										<h2 className="uppercase text-[11px] font-medium m-0">
											{item.name}
										</h2>
										<div className="flex flex-wrap gap-2.5">
											{item.colors?.map((item, j) => (
												<ColorIndicator
													key={j}
													colorValue={item.color}
													name={item.name}
													className="w-[30px] h-[30px]"
													title={item.name}
													as="div"
												/>
											))}
										</div>
									</div>
								);
							})}
						</div>
					</PanelRow>
				</PanelBody>
			</Panel>
		</>
	);
};

export default WcbPluginSidebar;
