import React, { FC, useState, useEffect } from "react";
import dashboardlogo from "../../../public/images/dashboardlogo.svg";
import { CheckIcon, HeartIcon, BellIcon } from "@heroicons/react/24/outline";
import { PAGES, Path } from "../App";

interface Props {
	currentPath: Path;
	onChangePath: (path: Path) => void;
}

const Nav: FC<Props> = ({ currentPath, onChangePath }) => {
	return (
		<nav className="bg-white shadow">
			<div className="container">
				<div className="relative flex justify-between h-16">
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<a
							href="http://localhost/wordpress/wp-admin/options-general.php?page=spectra"
							className="flex-shrink-0 flex items-center"
						>
							<img
								className="lg:block h-[2.6rem] w-auto"
								src={dashboardlogo}
								alt="Workflow"
							/>
						</a>
						<div className="sm:ml-8 sm:flex items-center sm:space-x-2">
							{PAGES.map((item) => {
								const isActive = currentPath === item.path;
								return (
									<a
										key={item.path}
										className={`flex items-center justify-center text-base px-6 py-2.5 rounded-xl font-medium ${
											isActive
												? "bg-blue-50 text-blue-600"
												: "bg-white text-slate-700 hover:bg-slate-100"
										}`}
										href="#"
										onClick={(e) => {
											e.preventDefault();
											if (!isActive) {
												onChangePath(item.path);
											}
										}}
									>
										{item.name}
									</a>
								);
							})}
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
							title="What's New?"
							className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border border-slate-200"
						>
							<BellIcon className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
