import React, { FC } from "react";
import * as ReactDOM from "react-dom";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import "./style.scss";
import "./types";

interface Wcb_blocks_enable_disable_options_Type {
	heading: "enabled" | "disabled";
	container: "enabled" | "disabled";
	button: "enabled" | "disabled";
	buttons: "enabled" | "disabled";
	form: "enabled" | "disabled";
	cta: "enabled" | "disabled";
	faq: "enabled" | "disabled";
} // Follow by WCB_DEFAULT_BLOCKS_STATUS

interface Wcb_blocks_settings_options_Type {
	defaultContentWidth: string;
	containerPadding: string;
	containerElementsGap: string;
	enableTemplatesButton: string;
	formReCAPTCHAv2SiteKey: string;
	formReCAPTCHAv2SecretKey: string;
	formReCAPTCHAv3SiteKey: string;
	formReCAPTCHAv3SecretKey: string;
} // Follow by WCB_DEFAULT_BLOCKS_SETTINGS

interface Props {
	wcb_blocks_enable_disable_options: Wcb_blocks_enable_disable_options_Type;
	wcb_blocks_settings_options: Wcb_blocks_settings_options_Type;
}

const App: FC<Props> = ({
	wcb_blocks_enable_disable_options,
	wcb_blocks_settings_options,
}) => {
	console.log(23232, {
		wcb_blocks_enable_disable_options,
		wcb_blocks_settings_options,
	});

	const handleDisableEnableBlocks = () => {
		if (typeof jQuery !== "function") {
			return;
		}
		const data = {
			action: "wcb_dashboard_blocks_disable_enable",
			blocksStatus: {
				image: "enabled",
				form: "disabled",
			},
		};

		jQuery.post(ajaxurl, data, function (response) {
			alert("Got this from the server: " + JSON.stringify(response));
		});
	};

	const handleUpdateSettings = () => {
		if (typeof jQuery !== "function") {
			return;
		}
		const data = {
			action: "wcb_dashboard_blocks_update_settings",
			settings: {
				defaultContentWidth: "1200px",
				containerPadding: "33px",
			},
		};

		jQuery.post(ajaxurl, data, function (response) {
			alert("Got this from the server: " + JSON.stringify(response));
		});
	};

	return (
		<div className="">
			<Nav />
			<Heading />

			<div onClick={handleUpdateSettings} className="container">
				handleUpdateSettings
			</div>
			<div onClick={handleDisableEnableBlocks} className="container">
				handleDisableEnableBlocks
			</div>
		</div>
	);
};

// -------------------------------------------------------------------------------------------
const preEl = document.querySelector(
	`#wcb-dasboard-root`
) as HTMLElement | null;

if (preEl) {
	let componentProps = preEl.getAttribute("data-props")
		? JSON.parse(preEl.getAttribute("data-props") || "")
		: {};
	ReactDOM.render(<App {...componentProps} />, preEl);
}
