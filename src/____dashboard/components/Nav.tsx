import React, { FC, useState, useEffect } from "react";
// import dashboardlogo from "../../../public/images/dashboardlogo.svg";
import { CheckIcon, HeartIcon, BellIcon } from "@heroicons/react/24/outline";
import { PAGES, Path } from "../App";
import Logo from "../../components/Logo";

interface Props {
	currentPath: Path;
	onChangePath: (path: Path) => void;
}

const Nav: FC<Props> = ({ currentPath, onChangePath }) => {
	return (
		<nav className="bg-white px-2 shadow">
			<div className="container relative flex justify-between h-16 space-x-4">
				{/* LOGO */}
				<div className="flex flex-shrink-0 items-center">
					<a
						href="#"
						className="flex-shrink-0 flex items-center text-4xl text-black outline-none ring-0"
					>
						{/* <img
								className="lg:block h-[2.6rem] w-auto"
								src={dashboardlogo}
								alt="Workflow"
							/> */}
						<Logo />
					</a>
				</div>

				{/* MENUS */}
				<div className="sm:flex space-x-3 sm:space-x-8">
					{PAGES.map((item) => {
						const isActive = currentPath === item.path;
						return (
							<a
								key={item.path}
								className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ring-0 shadow-none focus:ring-0 focus:outline-none ${
									isActive
										? "border-indigo-500 text-gray-900"
										: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
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
				{/*  */}

				{/* BUTTON */}
				<div className="flex items-center flex-shrink-0">
					<button
						title="What's New?"
						className="flex items-center justify-center cursor-pointer rounded-full text-slate-700 hover:text-black font-semibold"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path
								d="M5.5 15.5V10C5.5 6.41 8.41 3.5 12 3.5C15.59 3.5 18.5 6.41 18.5 10V14C18.5 16.892 16.611 19.343 14 20.1865"
								stroke="#4E5969"
							/>
							<path
								d="M5.5 10.5H4C3.86739 10.5 3.74021 10.5527 3.64645 10.6464C3.55268 10.7402 3.5 10.8674 3.5 11V14C3.5 14.1326 3.55268 14.2598 3.64645 14.3536C3.74021 14.4473 3.86739 14.5 4 14.5H5.5M18.5 10V14M12 20.5C12.698 20.5 13.37 20.39 14 20.1865V19C14 18.8674 13.9473 18.7402 13.8536 18.6464C13.7598 18.5527 13.6326 18.5 13.5 18.5H10.5C10.3674 18.5 10.2402 18.5527 10.1464 18.6464C10.0527 18.7402 10 18.8674 10 19V20C10 20.1326 10.0527 20.2598 10.1464 20.3536C10.2402 20.4473 10.3674 20.5 10.5 20.5H12ZM18.5 10.5H20C20.1326 10.5 20.2598 10.5527 20.3536 10.6464C20.4473 10.7402 20.5 10.8674 20.5 11V14C20.5 14.1326 20.4473 14.2598 20.3536 14.3536C20.2598 14.4473 20.1326 14.5 20 14.5H18.5V10.5Z"
								stroke="#4E5969"
							/>
						</svg>
						<span className="ml-1.5">Support</span>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
