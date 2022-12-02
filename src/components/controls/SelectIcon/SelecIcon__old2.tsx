import { Dashicon, Dropdown } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState } from "react";
import ResetButton from "../ResetButton";
import { ICONS_KEYS as people } from "./types";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";

interface Props {
	value?: Dashicon.Icon;
	onChange: (icon?: Dashicon.Icon) => void;
	label?: string;
}

const SelecIcon: FC<Props> = ({
	onChange,
	value,
	label = __("Icon:", "wcb"),
}) => {
	const [query, setQuery] = useState("");
	const gridRef = React.createRef<Grid<any>>();

	const filteredPeople =
		query === ""
			? people
			: people.filter((person) => {
					return person.toLowerCase().includes(query.toLowerCase());
			  });

	const ICONS_KEYS = filteredPeople;

	const Cell = ({
		columnIndex,
		rowIndex,
		style,
	}: GridChildComponentProps<any>) => {
		const index = rowIndex * 3 + columnIndex;
		const item = ICONS_KEYS[index];

		if (!item) {
			return <div style={{ ...style }}></div>;
		}

		return (
			<div style={{ ...style, padding: "4px 0px 4px 8px" }}>
				<div
					key={item}
					className={`h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer ${
						item === value ? "ring-2 SelecIcon__item--isActive" : ""
					}`}
					onClick={() => {
						onChange(item === value ? undefined : item);
					}}
				>
					<div className="grid">
						<div className="text-center overflow-hidden ">
							<Dashicon size={16} icon={item} />
							<p className="block mt-2.5 truncate text-gray-300 text-xs">
								{item}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const renderInput = () => {
		return (
			<div className="relative mb-2.5 border-b border-gray-700 text-white p-2.5">
				<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center pl-2.5">
					<svg
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
				<input
					onChange={(event) => setQuery(event.target.value)}
					type="text"
					className="block w-full py-2 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-800 border-transparent text-white"
					placeholder={__("Search for an icon...", "wcb")}
					defaultValue={query}
					name="icon-query"
					autoFocus
				/>
			</div>
		);
	};

	return (
		<Dropdown
			position="middle left"
			className="w-full"
			renderToggle={({ isOpen, onToggle }) => (
				<div className="flex items-center space-x-4">
					<button
						className="py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg "
						onClick={() => {
							onToggle();
							setTimeout(() => {
								if (!value) return;
								const index = filteredPeople.indexOf(value);
								index &&
									gridRef?.current?.scrollToItem({
										rowIndex: Math.ceil(index / 3),
										align: "center",
									});
								// const el = document.querySelector(".SelecIcon__item--isActive");
								// if (!el) return;
								// el.scrollIntoView({ block: "center", inline: "center" });
							}, 1);
						}}
					>
						<span className="mr-3">{label}</span>
						{value ? (
							<Dashicon size={20} icon={value} />
						) : (
							<strong>{__("None", "wcb")}</strong>
						)}
					</button>
					<ResetButton
						onClick={() => {
							onChange(undefined);
						}}
					/>
				</div>
			)}
			renderContent={({ onToggle, onClose }) => (
				<div className="bg-gray-900">
					<div>{renderInput()}</div>
					<Grid
						ref={gridRef}
						className="hiddenScrollbar"
						columnCount={3}
						columnWidth={100}
						height={400}
						rowCount={Math.ceil(ICONS_KEYS.length / 3)}
						rowHeight={88}
						width={308}
					>
						{Cell}
					</Grid>
				</div>
			)}
		/>
	);
};

export default SelecIcon;
