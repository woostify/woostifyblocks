import React, { useMemo } from "react";
import {
	ColorIndicator,
	Notice,
	Panel,
	PanelBody,
	PanelRow,
	Spinner,
} from "@wordpress/components";
import _ from "lodash";
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
import MyColorPicker from "../components/controls/MyColorPicker/MyColorPicker";
import HelpText from "../components/controls/HelpText";

const WcbPluginSidebar = (props) => {
	const [mycolors, setMyColor] = useState(
		window.wcbGlobalVariables.customColorPallete || []
	);

	const [updateStatus, setUpdateStatus] = useState<
		"ok" | "loading" | "error" | ""
	>("");

	const themePalette = useSetting("color.palette.theme");
	const defaultPalette = useSetting("color.palette.default");

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	console.log(11, "____WcbPluginSidebar____log", {
		props,
		themePalette,
		defaultPalette,
		colorGradientSettings,
		mycolors,
		nweww: window.wcbGlobalVariables.customColorPallete,
	});

	// update save setting to database options via ajax
	const handleUpdateSettings = (newColors: typeof mycolors) => {
		if (typeof jQuery !== "function") {
			return;
		}

		const newSettings: typeof window.wcbGlobalVariables = {
			...window.wcbGlobalVariables,
			customColorPallete: newColors,
		};

		const data = {
			action: "wcb_dashboard_blocks_update_settings",
			settings: newSettings,
		};
		setUpdateStatus("loading");
		jQuery
			// @ts-ignore
			.post(ajaxurl, data, function (response) {
				console.log("Got this from the server: ", response);
			})
			.done(function () {
				setUpdateStatus("ok");
			})
			.fail(function () {
				setUpdateStatus("error");
			});
	};

	const handleChangeCustomColor = (color: string, index: number) => {
		console.log(111111);

		if (!color) {
			const newcolors = mycolors.filter((_, j) => j !== index);
			handleUpdateSettings(newcolors);
			return setMyColor(newcolors);
		}
		const newcolors = mycolors.map((item, j) => {
			if (j !== index) {
				return item;
			}
			return {
				color,
				name: color,
			};
		});
		setMyColor(newcolors);
		handleUpdateSettings(newcolors);
	};

	const addNewCustomColor = () => {
		const newcolors = [...mycolors, { name: "black", color: "#000" }];
		handleUpdateSettings(newcolors);
		return setMyColor(newcolors);
	};

	//
	const debounce_fun = _.debounce(function (e, j) {
		handleChangeCustomColor(e, j);
	}, 600);

	return (
		<>
			<Panel header="">
				<PanelBody title={__("Color Palette", "wcb")} initialOpen={true}>
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

							{/* CUSTOM  */}
							<div className="flex flex-col gap-2">
								<div>
									<h2 className="uppercase text-[11px] font-medium m-0">
										{__("Add custom colors", "wcb")}
									</h2>
									<HelpText>
										{__(
											"The custom colors will show up in your ColorPicker component.",
											"wcb"
										)}
									</HelpText>
								</div>
								<div className="flex flex-wrap gap-2">
									{mycolors?.map((item, j) => (
										<div>
											<MyColorPicker
												color={item.color}
												key={j}
												label=""
												onChange={(e) => {
													debounce_fun(e, j);
												}}
												showDefaultPalette
												showCustomColorOnDefaultPallete={false}
											/>
										</div>
									))}

									<button
										className="p-2 flex items-center justify-center border rounded-lg cursor-pointer hover:border-slate-300 disabled:opacity-40"
										title={
											updateStatus === "loading"
												? "Updating..."
												: "Add new color"
										}
										onClick={addNewCustomColor}
										disabled={updateStatus === "loading"}
									>
										<span className="sr-only">
											{__("Add new color", "wcb")}
										</span>
										{updateStatus === "loading" ? (
											<div className="w-7 h-7 flex items-center justify-center">
												{/* @ts-ignore */}
												<Spinner className="w-5 h-5 !m-0" />
											</div>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-7 h-7"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v12m6-6H6"
												/>
											</svg>
										)}
									</button>
								</div>
								<Notice status="warning" className="m-0" isDismissible={false}>
									<strong>{__("Note: ", "wcb")}</strong>
									{__(
										"After customizing this color you need to reload the page (f5) so that the changes can properly update into the ColorPicker components.",
										"wcb"
									)}
								</Notice>
							</div>
						</div>
					</PanelRow>
				</PanelBody>
			</Panel>
		</>
	);
};

export default WcbPluginSidebar;
