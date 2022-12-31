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
					className="inline-flex items-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
		const enabled = status === "enabled";
		return (
			<div
				key={index}
				className={`relative border rounded-xl bg-white transition-colors ${
					enabled
						? "border-slate-100 text-slate-800 bg-slate-50"
						: "border-slate-200/80 hover:border-slate-300 text-slate-400"
				}`}
			>
				<div className="relative z-10 h-20 p-4 flex items-center gap-x-4">
					<HeartIcon className="w-8 h-8" />
					<div className="flex-1 min-w-0">
						<div className="text-base font-medium text-inherit capitalize">
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
						checked={enabled}
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
			<div className="mt-6 grid grid-flow-row auto-rows-min grid-cols-2 gap-6 sm:grid-cols-3">
				{Object.keys(blocksStatus).map(renderCard)}
			</div>
		</div>
	);
};

export default BlocksPage;
