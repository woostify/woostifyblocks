import React from "react";

export const SelecIcon___old = () => {
	return <div>SelecIcon___old</div>;
};

// import { Dashicon, Dropdown } from "@wordpress/components";
// import { __ } from "@wordpress/i18n";
// import React, { FC } from "react";
// import ResetButton from "../ResetButton";
// import { ICONS_KEYS } from "./types";

// interface Props {
// 	value?: Dashicon.Icon;
// 	onChange: (icon?: Dashicon.Icon) => void;
// 	label?: string;
// }

// const SelecIcon: FC<Props> = ({
// 	onChange,
// 	value,
// 	label = __("Icon:", "wcb"),
// }) => {
// 	return (
// 		<Dropdown
// 			position="middle left"
// 			className="w-full"
// 			renderToggle={({ isOpen, onToggle }) => (
// 				<div className="flex items-center space-x-4">
// 					<button
// 						className="py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg "
// 						onClick={() => {
// 							onToggle();
// 							setTimeout(() => {
// 								const el = document.querySelector(".SelecIcon__item--isActive");
// 								if (!el) return;
// 								el.scrollIntoView({ block: "center", inline: "center" });
// 							}, 200);
// 						}}
// 					>
// 						<span className="mr-3">{label}</span>
// 						{value ? (
// 							<Dashicon size={20} icon={value} />
// 						) : (
// 							<strong>{__("None", "wcb")}</strong>
// 						)}
// 					</button>
// 					<ResetButton
// 						onClick={() => {
// 							onChange(undefined);
// 						}}
// 					/>
// 				</div>
// 			)}
// 			renderContent={({ onToggle, onClose }) => (
// 				<div className="p-2.5 max-h-96 w-72 overflow-auto bg-gray-900 grid grid-cols-3 gap-2">
// 					{ICONS_KEYS.map((item) => (
// 						<div
// 							key={item}
// 							className={`h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer ${
// 								item === value ? "ring-2 SelecIcon__item--isActive" : ""
// 							}`}
// 							onClick={() => {
// 								onChange(item === value ? undefined : item);
// 								// onClose();
// 							}}
// 						>
// 							<div className="grid">
// 								<div className="text-center overflow-hidden ">
// 									<Dashicon size={16} icon={item} />
// 									<p className="block mt-2.5 truncate text-gray-300 text-xs">
// 										{item}
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			)}
// 		/>
// 	);
// };

// export default SelecIcon;
