import React, { FC, useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import BlocksPage from "./components/BlocksPage";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import "./types";
import toast, { Toaster } from "react-hot-toast";
import SettingsPage from "./components/SettingsPage";
import { Wcb_theme_layout_global_settings } from "../types";

export interface Wcb_block_Type {
	name: string;
	title: string;
	category: string;
	icon: string;
	description: string;
	parent: unknown;
}
export interface Wcb_blocks_enable_disable_options_Type
	extends Record<string, "enabled" | "disabled"> {}

interface Props {
	wcb_blocks_enable_disable_options: Wcb_blocks_enable_disable_options_Type;
	wcb_blocks_settings_options: typeof window.wcbGlobalVariables;
	wcb_blocks_list: Wcb_block_Type[];
	wcb_layout_global_settings?: Wcb_theme_layout_global_settings;
}

export type Path = "welcome" | "blocks" | "settings";
interface Page {
	name: string;
	path: Path;
}

export const PAGES: Page[] = [
	// { name: "Welcome", path: "welcome" },
	{ name: "Blocks/Extensions", path: "blocks" },
	{ name: "Settings", path: "settings" },
];

const App: FC<Props> = ({
	wcb_blocks_enable_disable_options,
	wcb_blocks_settings_options,
	wcb_blocks_list,
	wcb_layout_global_settings,
}) => {
	//
	const [currentPath, setcurrentPath] = useState<Path>(PAGES[0].path);

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const path = urlParams.get("path");
		const pathCorrect: Path[] = ["blocks", "settings", "welcome"];

		if (path && pathCorrect.includes(path as Path)) {
			setcurrentPath(path as Path);
		}
	}, []);

	const setHistoryStateParams = (path: Path) => {
		let queryParams = new URLSearchParams(window.location.search);
		queryParams.set("path", path);

		if (path !== "settings") {
			queryParams.delete("tab");
		}

		history.replaceState(null, "", `?${queryParams.toString()}`);
	};

	return (
		<div className="">
			<Nav
				currentPath={currentPath}
				onChangePath={(path) => {
					setcurrentPath(path);
					setHistoryStateParams(path);
				}}
			/>

			<div className="container pb-14 px-2">
				{currentPath !== "welcome" && (
					<Heading
						children={
							PAGES.filter((item) => item.path === currentPath)[0]?.name || ""
						}
					/>
				)}
				{/* {currentPath === "settings" && (
					<SettingsPage initData={wcb_blocks_settings_options} />
				)} */}
				{currentPath === "blocks" ? (
					<BlocksPage
						initWcbBlocksList={wcb_blocks_list}
						initWcbBlocksEnableDisable={wcb_blocks_enable_disable_options}
					/>
				) : (
					<SettingsPage
						initData={wcb_blocks_settings_options}
						themeLayoutGlobal={wcb_layout_global_settings}
					/>
				)}
				{/* {currentPath === "welcome" && <WelcomePage />} */}
			</div>
			<Toaster
				position="top-right"
				containerStyle={{ marginTop: "40px" }}
				toastOptions={{
					style: { fontSize: 16, padding: "14px 16px" },
					duration: 4000,
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

//
