import React, { FC, useState } from "react";
import {
	CheckIcon,
	HeartIcon,
	LockClosedIcon,
	SignalSlashIcon,
	ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Wcb_blocks_enable_disable_options_Type, Wcb_block_Type } from "../App";
import MyToggle from "./MyToggle";
import toast, { Toaster } from "react-hot-toast";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

interface Props {
	initWcbBlocksEnableDisable: Wcb_blocks_enable_disable_options_Type;
	initWcbBlocksList: Wcb_block_Type[];
}

const BlocksPage: FC<Props> = ({
	initWcbBlocksEnableDisable,
	initWcbBlocksList,
}) => {
	const [blocksStatus, setBlocksStatus] = useState(initWcbBlocksEnableDisable);
	// const [blocksList, setBlocksList] = useState(initWcbBlocksList);
	const [blocksList, setBlocksList] = useState(
		(function () {
			return initWcbBlocksList;
		})()
	);

	console.log(211, {
		initWcbBlocksList,
		initWcbBlocksEnableDisable,
		blocksStatus,
		blocksList,
	});

	const handleDisableEnableBlocks = (obj: any) => {
		if (typeof jQuery !== "function") {
			return;
		}
		const newBlocksStatus = {
			...blocksStatus,
			...obj,
		};
		setBlocksStatus(newBlocksStatus);
		const data = {
			action: "wcb_dashboard_blocks_disable_enable",
			blocksStatus: newBlocksStatus,
		};
		toast.promise(
			// @ts-ignore
			jQuery.post(ajaxurl, data, function (response) {
				console.log("Got this from the server: ", response);
			}),
			{
				loading: "Saving...",
				success: <div>Successful saved!</div>,
				error: <div>Could not save.</div>,
			}
		);
	};

	const renderButtons = () => {
		return (
			<div className="flex space-x-3 justify-end">
				<button
					type="button"
					className="inline-flex items-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={() => {
						const newblocksStatus: Wcb_blocks_enable_disable_options_Type =
							Object.keys(blocksStatus).reduce(
								(obj: Wcb_blocks_enable_disable_options_Type, item) => {
									return {
										...obj,
										[item]: "enabled",
									};
								},
								{}
							);
						handleDisableEnableBlocks(newblocksStatus);
					}}
				>
					<CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
					Active all
				</button>
				<button
					type="button"
					className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={() => {
						const newblocksStatus = Object.keys(blocksStatus).reduce(
							(obj, item) => {
								return {
									...obj,
									[item]: "disabled",
								};
							},
							{}
						);
						handleDisableEnableBlocks(newblocksStatus);
					}}
				>
					<SignalSlashIcon
						className="-ml-1 mr-2 h-5 w-5 text-gray-500"
						aria-hidden="true"
					/>
					Deactive all
				</button>
			</div>
		);
	};

	const renderCard3 = (block: Wcb_block_Type, index: number) => {
		if (block.parent) {
			return null;
		}

		const status = blocksStatus[block.name];
		const currentBlock = block;
		const {
			title = "None",
			icon = "none",
			parent,
			name,
			description,
		} = currentBlock || {};

		if (!!parent || !currentBlock) {
			return null;
		}

		const enabled = status !== "disabled";

		return (
			<li
				key={name + title}
				className="overflow-hidden rounded-xl border border-gray-200 flex flex-col"
			>
				<div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 ">
					<div className="h-11 w-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10">
						<i
							className={`text-lg w-6 h-6 text-black dashicon dashicons dashicons-${icon} ${icon}`}
						></i>
					</div>
					<div className="text-sm font-medium leading-6 text-gray-900">
						{title}
					</div>
					<Menu
						as="a"
						href={`https://woostifyblocks.com/${name.replace(/\//g, "-")}`}
						target="_blank"
						rel="noopener noreferrer"
						title="View demo"
						className="relative ml-auto text-slate-700 hover:text-black"
					>
						<ArrowUpRightIcon className="w-5 h-5" />
					</Menu>
				</div>
				<dl className="flex-grow flex flex-col -my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 ">
					<div className="flex justify-between gap-x-4 py-3">
						<p className="text-gray-700">{description}</p>
					</div>
					<div className="mt-auto flex justify-between gap-x-4 py-3">
						<dt className="text-gray-500">Turn on/off</dt>
						<dd className="flex items-start gap-x-2">
							<div className="flex-shrink-0">
								<MyToggle
									checked={enabled}
									id={currentBlock.name}
									name={currentBlock.name}
									onChange={(checked) => {
										handleDisableEnableBlocks({
											[currentBlock.name]: checked ? "enabled" : "disabled",
										});
									}}
								/>
							</div>
						</dd>
					</div>
				</dl>
			</li>
		);
	};
	const renderCard2 = (key: string, index: number) => {
		const status = blocksStatus[key];
		const currentBlock = blocksList.filter((item) => item.name === key)[0];

		const { title = "None", icon = "none", parent, name } = currentBlock || {};

		if (!!parent || !currentBlock) {
			return null;
		}

		const enabled = status === "enabled";
		return (
			<div
				key={key}
				className={`relative border rounded-xl bg-white transition-colors ${
					enabled
						? "border-slate-100 text-slate-800 bg-slate-50"
						: "border-slate-200/80 hover:border-slate-300 text-slate-400"
				}`}
			>
				<div className="relative z-10 h-20 p-4 flex items-center gap-x-5">
					<div className="flex-shrink-0">
						<i
							className={`text-[1.875rem] w-[1.875rem] h-[1.875rem] text-inherit dashicon dashicons dashicons-${icon} ${icon}`}
						></i>
					</div>
					<div className="flex-1 min-w-0">
						<label
							htmlFor={key}
							className="block text-base font-medium text-inherit capitalize select-none"
						>
							{title}
						</label>
						<a
							href={`https://woostifyblocks.com/${name.replace(/\//g, "-")}`}
							target="_blank"
							rel="noopener noreferrer"
							className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate"
						>
							View demo
						</a>
					</div>
					<div className="flex-shrink-0">
						<MyToggle
							checked={enabled}
							id={key}
							name={key}
							onChange={(checked) => {
								handleDisableEnableBlocks({
									[key]: checked ? "enabled" : "disabled",
								});
							}}
						/>
					</div>
				</div>
			</div>
		);
	};

	const renderCard = (key: string, index: number) => {
		const status = blocksStatus[key];
		const currentBlock = blocksList.filter((item) => item.name === key)[0];

		const {
			title = "None",
			icon = "none",
			parent,
			name,
			description,
		} = currentBlock || {};

		if (!!parent || !currentBlock) {
			return null;
		}

		const enabled = status === "enabled";
		return (
			<div
				key={key}
				className={`relative border rounded-xl bg-white transition-colors ${
					enabled
						? "border-slate-100 text-slate-800 bg-slate-50"
						: "border-slate-200/80 hover:border-slate-300 text-slate-400"
				}`}
			>
				<div className="relative z-10 p-6 flex items-start gap-x-5">
					<div className="flex-1 min-w-0 flex flex-col items-start">
						<div className="inline-block flex-shrink-0 rounded-md bg-indigo-500 p-3">
							<i
								className={`text-lg w-6 h-6 text-white dashicon dashicons dashicons-${icon} ${icon}`}
							></i>
						</div>
						<label htmlFor={key} className="text-2xl font-bold my-2 block">
							{title}
						</label>
						<p className="text-xs text-muted-foreground block">{description}</p>
						<a
							href={`https://woostifyblocks.com/${name.replace(/\//g, "-")}`}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs font-medium text-indigo-500 block"
						>
							View demo
						</a>
					</div>
					<div className="flex-shrink-0">
						<MyToggle
							checked={enabled}
							id={key}
							name={key}
							onChange={(checked) => {
								handleDisableEnableBlocks({
									[key]: checked ? "enabled" : "disabled",
								});
							}}
						/>
					</div>
				</div>
			</div>
		);
	};

	const renderGridCards = () => {
		return (
			<ul
				role="list"
				className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8"
			>
				{blocksList.map(renderCard3)}
			</ul>
		);
	};

	return (
		<div>
			{renderButtons()}
			{/* <div className="mt-6 grid grid-flow-row auto-rows-min grid-cols-2 gap-6 sm:grid-cols-4">
				{Object.keys(blocksStatus).map(renderCard)}
			</div> */}
			{renderGridCards()}
		</div>
	);
};

export default BlocksPage;
