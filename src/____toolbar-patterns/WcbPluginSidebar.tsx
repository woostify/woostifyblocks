import React, { useMemo } from "react";
import {
	ColorPalette,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import {
	withColorContext,
	useSetting,
	__experimentalColorGradientControl as ColorGradientControl,
} from "@wordpress/block-editor";

import {
	InspectorControls,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseGradient,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
	__experimentalUseBorderProps as useBorderProps,
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
		<div>
			<ColorPalette
				colors={colorGradientSettings?.colors}
				value={color}
				onChange={(color) => setColor(color)}
				__experimentalHasMultipleOrigins
				__experimentalIsRenderedInSidebar
			/>
		</div>
	);
};

export default WcbPluginSidebar;
