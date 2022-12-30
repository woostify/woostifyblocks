import React, { FC, useState } from "react";
import {
	CheckIcon,
	HeartIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Wcb_blocks_enable_disable_options_Type } from "../App";
import MyToggle from "./MyToggle";
import toast, { Toaster } from "react-hot-toast";

interface Props {
	initData: Wcb_blocks_enable_disable_options_Type;
}

const BlocksPage: FC<Props> = ({ initData }) => {
	const [blocksStatus, setBlocksStatus] = useState(initData);

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
					className="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={() => {
						const newblocksStatus = Object.keys(blocksStatus).reduce(
							(obj, item) => {
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
					className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
					<LockClosedIcon
						className="-ml-1 mr-2 h-5 w-5 text-gray-500"
						aria-hidden="true"
					/>
					Deactive all
				</button>
			</div>
		);
	};

	const renderCard = (key: string, index: number) => {
		const status = blocksStatus[key];
		return (
			<div
				key={index}
				className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white"
			>
				<div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.blue.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"></div>
				<div className="relative z-10 h-20 p-4 flex items-center gap-x-4">
					<HeartIcon className="w-8 h-8" />
					<div className="flex-1 min-w-0">
						<div className="text-base font-medium text-slate-800 capitalize">
							{key}
						</div>
						<a
							href="#"
							className="focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate"
						>
							View demo
						</a>
					</div>
					<MyToggle
						checked={status === "enabled"}
						onChange={(checked) => {
							handleDisableEnableBlocks({
								[key]: checked ? "enabled" : "disabled",
							});
						}}
					/>
				</div>
			</div>
		);
	};

	return (
		<div>
			{renderButtons()}
			<div className="my-5 grid grid-flow-row auto-rows-min grid-cols-2 gap-6 sm:grid-cols-3">
				{Object.keys(blocksStatus).map(renderCard)}
			</div>
		</div>
	);
};

export default BlocksPage;
