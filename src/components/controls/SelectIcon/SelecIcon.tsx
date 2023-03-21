import { Dropdown, TextareaControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { FC, useState, useEffect } from "react";
import ResetButton from "../ResetButton";
import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import unicodesMap from "../../../../public/lineicons-free-basic/icon-font/unicodesMap.json";
import MyIcon, { MyIconKey } from "../MyIcon";
import { Tab } from "@headlessui/react";
import MyMediaUploadCheck, {
	DEFAULT_MEDIA_UPLOAD,
	MediaUploadData,
} from "../MyMediaUploadCheck";
import "./editor.scss";
import checkIsSvgHtmlTag from "../../../utils/checkIsSvgHtmlTag";
import MyIconFull from "../MyIconFull";

const ICON_KEYS = Object.keys(unicodesMap) as MyIconKey[];

export interface MyIcon {
	type: "icon" | "image" | "svg";
	iconName?: MyIconKey;
	imageData: MediaUploadData;
	svgCode: string;
}

export const DEFAULT_MY_ICON: MyIcon = {
	type: "icon",
	iconName: "lni-heart-filled",
	imageData: DEFAULT_MEDIA_UPLOAD,
	svgCode: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
  </svg>`,
};

interface Props {
	// value: MyIcon;
	iconData: MyIcon;
	onChange: (value: MyIcon) => void;
	label?: string;
}

const SelecIcon: FC<Props> = ({
	onChange,
	iconData,
	label = __("Icon:", "wcb"),
}) => {
	const [query, setQuery] = useState("");
	const [isCorrectSvgCode, setIsCorrectSvgCode] = useState(
		checkIsSvgHtmlTag(iconData.svgCode)
	);
	const [svgCodeState, setSvgCodeState] = useState("");

	useEffect(() => {
		setSvgCodeState(iconData.svgCode);
	}, [iconData.svgCode]);

	const gridRef = React.createRef<Grid<any>>();

	const people = ICON_KEYS;

	const filteredPeople =
		query === ""
			? people
			: people.filter((person) => {
					return person.toLowerCase().includes(query.toLowerCase());
			  });

	const ICONS_KEYS = filteredPeople;

	const scrollToIcon = () => {
		setTimeout(() => {
			if (!iconData.iconName) return;

			const index = filteredPeople.indexOf(iconData.iconName);
			index &&
				gridRef?.current?.scrollToItem({
					rowIndex: Math.ceil(index / 3),
					align: "center",
				});
		}, 1);
	};

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

		const isActive = item === iconData.iconName;

		return (
			<div style={{ ...style, padding: "4px 0px 4px 8px" }}>
				<div
					key={item}
					className={`h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer ${
						isActive ? "ring-2 SelecIcon__item--isActive" : ""
					}`}
					onClick={() => {
						onChange({
							...iconData,
							iconName: isActive ? undefined : item,
						});
					}}
				>
					<div className="grid">
						<div className="text-center overflow-hidden ">
							<MyIcon className="text-lg" size={16} icon={item} />
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
			<div className="relative p-2 mb-2 -mt-2 border-b border-gray-800 text-white ">
				<div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center pl-2.5">
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
					className="block w-full py-1.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-800 border-transparent text-white"
					placeholder={__("Search for an icon...", "wcb")}
					defaultValue={query}
					name="icon-query"
					autoFocus
				/>
			</div>
		);
	};

	const TABS: { name: MyIcon["type"]; icon: string }[] = [
		{ name: "icon", icon: "lni lni-ruler-pencil text-lg" },
		{ name: "image", icon: "lni lni-image text-lg" },
		{ name: "svg", icon: "lni lni-code text-lg" },
	];

	const renderContent = ({ onToggle, onClose }) => (
		<div className="min-w-[310px] min-h-[510px] bg-gray-900 pt-3">
			<div
				className="cursor-pointer absolute -right-0.5 -top-0.5 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-lg ring-1 ring-gray-200/70 hover:ring-gray-300"
				onClick={onClose}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-6 h-6 text-red-500"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
			<Tab.Group
				onChange={(i) => {
					onChange({
						...iconData,
						type: TABS[i].name,
					});
				}}
				defaultIndex={TABS.findIndex((item) => item.name === iconData.type)}
			>
				<Tab.List className="flex p-1.5 bg-slate-700/60 rounded-lg shadow-md mx-2">
					{TABS.map((item) => {
						return (
							<Tab
								key={item.name}
								className={({ selected }) =>
									`flex-1 font-medium whitespace-nowrap px-1 py-2 text-sm focus:outline-none flex flex-col items-center justify-center space-y-1 rounded-lg capitalize ${
										selected
											? "bg-slate-900 text-slate-50 "
											: "text-slate-300 hover:text-slate-100 border-b-transparent"
									}`
								}
							>
								<i className={item.icon}></i>
								<span className="block">{item.name}</span>
							</Tab>
						);
					})}
				</Tab.List>
				<Tab.Panels className="mt-3 pt-3 border-t border-slate-700">
					<Tab.Panel className="">{renderContentDefault()}</Tab.Panel>
					<Tab.Panel className="">{renderContentUploadImage()}</Tab.Panel>
					<Tab.Panel className="">{renderContentUploadSVG()}</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);

	const renderContentUploadSVG = () => {
		return (
			<div className="pt-1 px-3 text-slate-300">
				<TextareaControl
					rows={17}
					label=""
					placeholder={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" ...`}
					className="Wcb-SelectIcon__textarea text-slate-200"
					help={
						!svgCodeState || isCorrectSvgCode ? (
							__("Enter your SVG code here", "wcb")
						) : (
							<p className="text-red-500">
								{__("Please write a valid SVG code", "wcb")}
							</p>
						)
					}
					value={svgCodeState}
					onChange={(value) => {
						setSvgCodeState(value);
						if (checkIsSvgHtmlTag(value)) {
							setIsCorrectSvgCode(true);
							const a =
								/<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.exec(
									value
								);

							onChange({
								...iconData,
								svgCode: a?.[0] || "",
							});
						} else {
							setIsCorrectSvgCode(false);
						}
					}}
				/>
			</div>
		);
	};

	const renderContentUploadImage = () => {
		const imageData = iconData?.imageData;
		return (
			<div className="px-3 pt-1">
				<MyMediaUploadCheck
					className="text-neutral-200"
					btnClass="ring-1 ring-neutral-700"
					defaultBtnClass="hover:bg-black/10"
					onChange={(data) => {
						onChange({
							...iconData,
							imageData: data,
						});
					}}
					imageData={imageData}
				/>
			</div>
		);
	};

	const renderContentDefault = () => {
		return (
			<div>
				<div>{renderInput()}</div>
				<Grid
					ref={gridRef}
					className="hiddenScrollbar"
					columnCount={3}
					columnWidth={100}
					height={380}
					rowCount={Math.ceil(ICONS_KEYS.length / 3)}
					rowHeight={88}
					width={308}
				>
					{Cell}
				</Grid>
			</div>
		);
	};

	return (
		<Dropdown
			position="middle left"
			className="w-full"
			contentClassName="Wcb-SelectIcon z-[100]"
			renderToggle={({ isOpen, onToggle }) => (
				<div className="flex items-center space-x-4">
					<button
						className="py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg "
						onClick={() => {
							onToggle();
							if (iconData.type === "icon") {
								scrollToIcon();
							}
						}}
					>
						<span className="mr-3">{label}</span>
						<MyIconFull
							icon={iconData}
							className="w-6 h-6 text-[24px] flex items-center "
							renderIfNone={<strong>{__("None", "wcb")}</strong>}
						/>
					</button>
					<ResetButton
						onClick={() => {
							onChange(DEFAULT_MY_ICON);
						}}
					/>
				</div>
			)}
			renderContent={renderContent}
		/>
	);
};

export default SelecIcon;
