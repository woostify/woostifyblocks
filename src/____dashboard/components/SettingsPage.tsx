import React, { useEffect, useState, FC } from "react";
import MyIcon, { MyIconKey } from "../../components/controls/MyIcon";
import {
	Cog6ToothIcon,
	RectangleGroupIcon,
	Squares2X2Icon,
	RocketLaunchIcon,
} from "@heroicons/react/24/outline";

interface Tab {
	name: string;
	label: string;
	icon: any;
}

const TABS: Tab[] = [
	{
		name: "editor-options",
		label: "Editor options",
		icon: Cog6ToothIcon,
	},
	{
		name: "templates",
		label: "Templates",
		icon: RectangleGroupIcon,
	},
	{
		name: "block-settings",
		label: "Block settings",
		icon: Squares2X2Icon,
	},
	{
		name: "performance",
		label: "Performance",
		icon: RocketLaunchIcon,
	},
];

const SettingsPage = () => {
	const [currentTab, setcurrentTab] = useState(TABS[0].name);

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

	const renderLeft = () => {
		return (
			<div className="space-y-1">
				{TABS.map((item) => {
					const isActive = currentTab === item.name;
					return (
						<div
							key={item.name}
							className={`flex items-center space-x-3 text-base font-medium px-3.5 py-3.5 rounded-xl cursor-pointer ${
								isActive
									? "bg-slate-100/80 text-blue-600"
									: "text-slate-800 hover:bg-slate-50"
							}`}
							onClick={() => {
								setcurrentTab(item.name);
							}}
						>
							<item.icon
								className={`w-6 h-6  ${
									isActive ? " text-blue-600" : "text-slate-400"
								}`}
							/>
							<span>{item.label}</span>
						</div>
					);
				})}
			</div>
		);
	};

	const renderRight = () => {
		return <div></div>;
	};

	return (
		<div>
			<div className="lg:grid lg:grid-cols-12 min-h-[36rem] h-full">
				<div className="py-6 sm:px-6 lg:py-6 lg:pr-6 lg:pl-0 lg:col-span-3">
					{renderLeft()}
				</div>
				<div className="lg:col-span-9 border-l p-6">{renderRight()}</div>
			</div>
		</div>
	);
};

export default SettingsPage;
