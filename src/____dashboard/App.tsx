import React, { FC, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import BlocksPage from "./components/BlocksPage";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import "./types";
import toast, { Toaster } from "react-hot-toast";
import SettingsPage from "./components/SettingsPage";
import "../styles/index.scss";

export interface Wcb_blocks_enable_disable_options_Type {
	heading: "enabled" | "disabled";
	container: "enabled" | "disabled";
	button: "enabled" | "disabled";
	buttons: "enabled" | "disabled";
	form: "enabled" | "disabled";
	cta: "enabled" | "disabled";
	faq: "enabled" | "disabled";
} // Follow by WCB_DEFAULT_BLOCKS_STATUS

export interface Wcb_blocks_settings_options_Type {
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

export type Path = "welcome" | "blocks" | "settings";
interface Page {
	name: string;
	path: Path;
}

export const PAGES: Page[] = [
	{ name: "Welcome", path: "welcome" },
	{ name: "Blocks", path: "blocks" },
	{ name: "Settings", path: "settings" },
];

const App: FC<Props> = ({
	wcb_blocks_enable_disable_options,
	wcb_blocks_settings_options,
}) => {
	const [currentPath, setcurrentPath] = useState<Path>(PAGES[0].path);

	return (
		<div className="">
			<Nav currentPath={currentPath} onChangePath={setcurrentPath} />

			<div className="container ">
				<Heading />
				{currentPath === "settings" && <SettingsPage />}
				{currentPath === "blocks" && (
					<BlocksPage initData={wcb_blocks_enable_disable_options} />
				)}
				{currentPath === "welcome" && <WelcomePage />}
			</div>
			<Toaster
				position="top-right"
				containerStyle={{ marginTop: "40px" }}
				toastOptions={{
					style: { fontSize: 16 },
				}}
			/>
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
