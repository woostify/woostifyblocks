import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "@wordpress/components";
import {
	ArrowDownOnSquareIcon,
	ArrowDownOnSquareStackIcon,
	ArrowTopRightOnSquareIcon,
	ArrowUpRightIcon,
	CheckIcon,
	ClipboardIcon,
	KeyIcon,
	LightBulbIcon,
	LinkIcon,
} from "@heroicons/react/24/outline";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_WCB_BLOCKS } from "./constant";
import { Edge, Edge2, Node, WcbBlocksRoot } from "./type";
import * as copy from "copy-to-clipboard";
import { useTimeoutFn } from "react-use";
import { useSelect, useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from "@wordpress/block-editor";
import { rawHandler } from "@wordpress/blocks";
import Logo from "../components/Logo";

const HeaderToolBarPatterns = () => {
	// STATE
	let [indexCopying, setIndexCopying] = useState("");
	let [, , resetIsCopying] = useTimeoutFn(() => setIndexCopying(""), 1500);

	const [isOpen, setOpen] = useState(false);

	const [currentCategorySelected, setCurrentCategorySelected] =
		useState<string>("");
	const [currentPricingPackage, setCurrentPricingPackage] = useState<
		"free" | "pro" | "all"
	>("all");

	// CONSTS
	const [loadGreeting, { called, loading, data }] =
		useLazyQuery<WcbBlocksRoot>(GET_WCB_BLOCKS);

	let patternsEdge: Edge[] = [];
	let categoriesEdge: Record<string, Edge2["node"]> = {};
	if (data) {
		patternsEdge = data.wcbBlocks.edges;
		data.wcbBlocks.edges.forEach((element) => {
			element.node.wcbBlocksCategories.edges.map((item) => {
				categoriesEdge[item.node.id] = item.node;
			});
		});
	}

	// HOOKS
	const { selectedBlockClientIndex, selectedBlockClientId } = useSelect(
		(select) => {
			// @ts-ignore
			const { getSelectedBlockClientId, getBlockIndex } =
				select(blockEditorStore);
			const selectedBlockClientId = getSelectedBlockClientId();
			return {
				selectedBlockClientId,
				selectedBlockClientIndex: getBlockIndex(selectedBlockClientId),
			};
		},
		[]
	);
	const { insertBlocks } = useDispatch(blockEditorStore);

	// HANDLE
	const openModal = () => {
		setOpen(true);
		!called && loadGreeting();
	};
	const closeModal = () => {
		setOpen(false);
	};

	const insertWcbBlocks = (content: string) => {
		setOpen(false);
		const newBlocks = rawHandler({
			HTML: content,
		});
		const newIndex =
			selectedBlockClientIndex === -1
				? undefined
				: (selectedBlockClientIndex || 0) + 1;

		insertBlocks(newBlocks, newIndex);
	};

	// RENDER
	const renderBadge = (value: Edge2, index: number) => {
		const name = value.node.name;

		return (
			<div
				key={value.node.id}
				className={`relative text-white text-[10px] rounded-full px-2 py-0.5 leading-none capitalize font-medium flex items-center justify-center ${
					name === "pro" ? "bg-red-500" : "bg-green-500"
				}`}
			>
				<span>{name}</span>
			</div>
		);
	};

	const renderImportBtns = (post: Node) => {
		return (
			<div className="space-x-2 absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
				<button
					type="button"
					className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={(e) => {
						e.preventDefault();
						insertWcbBlocks(post.contentOrigin);
					}}
				>
					<ArrowDownOnSquareIcon
						className="-ml-1 mr-2 h-5 w-5"
						aria-hidden="true"
					/>
					Import
				</button>

				<button
					type="button"
					className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					onClick={(e) => {
						e.preventDefault();
						copy(post.contentOrigin, {
							format: "text/plain",
						});
						setIndexCopying(post.id);
						resetIsCopying();
					}}
				>
					{indexCopying !== post.id ? (
						<ClipboardIcon
							className="-ml-1 mr-2 h-5 w-5 text-gray-500"
							aria-hidden="true"
						/>
					) : (
						<CheckIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
					)}
					{indexCopying !== post.id ? "Copy" : "Copied!"}
				</button>
			</div>
		);
	};

	const renderCardItem = (value: Edge, index: number) => {
		const post = value.node;
		const isIncludeCategorySelected = !currentCategorySelected
			? true
			: post.wcbBlocksCategories.edges.some(
					(item) => item.node.id === currentCategorySelected
			  );

		let isIncludePricingPackage = false;
		if (!currentPricingPackage || currentPricingPackage === "all") {
			isIncludePricingPackage = true;
		} else {
			isIncludePricingPackage = post.wcbBlocksPricingPackages.edges.some(
				(item) => item.node.name === currentPricingPackage
			);
		}

		// CHECK FILTER
		if (!isIncludeCategorySelected || !isIncludePricingPackage) {
			return null;
		}

		return (
			<li key={post.id}>
				<div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-100/60 before:opacity-0 hover:before:opacity-100">
					<div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
						{renderImportBtns(post)}

						{post.featuredImage?.node.sourceUrl && (
							<img
								src={post.featuredImage?.node.sourceUrl}
								srcSet={post.featuredImage?.node.srcSet}
								sizes="550px"
								alt="heroes"
								className="absolute inset-0 h-full w-full object-contain group-hover:opacity-60 transition-opacity"
							/>
						)}
					</div>
					<div className="flex space-x-2 mt-3.5 ">
						<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600">
							<span className="relative">{post.title}</span>
						</h4>
						{post.wcbBlocksPricingPackages?.edges?.map(renderBadge)}
					</div>
					<a
						href={post.link}
						target="_blank"
						rel="noopener noreferrer"
						className="relative mt-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center space-x-2"
					>
						<span>View demo</span>
						<ArrowUpRightIcon className="w-3 h-3" />
					</a>
				</div>
			</li>
		);
	};

	const renderFreeProTab = () => {
		return (
			<div
				className="flex space-x-1 rounded-lg bg-slate-100 p-0.5"
				role="tablist"
				aria-orientation="horizontal"
			>
				<button
					className={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
						currentPricingPackage === "all" ? "bg-white shadow" : ""
					}`}
					id="headlessui-tabs-tab-all"
					role="tab"
					type="button"
					aria-selected={currentPricingPackage === "all" ? "true" : undefined}
					onClick={() => setCurrentPricingPackage("all")}
				>
					<LinkIcon className="w-4 h-4" />
					<span className="ml-2 text-slate-900">All</span>
				</button>
				<button
					className={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
						currentPricingPackage === "free" ? "bg-white shadow" : ""
					}`}
					id="headlessui-tabs-tab-free"
					role="tab"
					type="button"
					aria-selected={currentPricingPackage === "free" ? "true" : undefined}
					onClick={() => setCurrentPricingPackage("free")}
				>
					<LightBulbIcon className="w-4 h-4" />
					<span className="ml-2 text-slate-900">Free</span>
				</button>
				{/* <button
					className={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
						currentPricingPackage === "pro" ? "bg-white shadow" : ""
					}`}
					id="headlessui-tabs-tab-pro"
					role="tab"
					type="button"
					aria-selected={currentPricingPackage === "pro" ? "true" : undefined}
					onClick={() => setCurrentPricingPackage("pro")}
				>
					<KeyIcon className="w-4 h-4" />
					<span className="ml-2 text-slate-600">Pro</span>
				</button> */}
			</div>
		);
	};

	const renderSelectCategories = () => {
		return (
			<div className="relative block">
				<select
					className="form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 text-sm"
					onChange={(e) => {
						setCurrentCategorySelected(e.currentTarget.value);
					}}
				>
					<option selected value="">
						All categories
					</option>
					{Object.values(categoriesEdge).map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>

				<svg
					aria-hidden="true"
					viewBox="0 0 8 6"
					width="8"
					height="6"
					fill="none"
					className="pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500"
				>
					<path
						d="M7 1.5l-3 3-3-3"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</div>
		);
	};

	const renderEmpty = () => {
		return (
			<div className="text-center">
				<svg
					className="mx-auto h-12 w-12 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						vectorEffect="non-scaling-stroke"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
					/>
				</svg>
				<h3 className="mt-2 text-sm font-semibold text-gray-900">No items!</h3>
				<p className="mt-1 text-sm text-gray-500">
					Please try filtering another way.
				</p>
			</div>
		);
	};

	const renderContent = () => {
		return (
			<ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
				{patternsEdge && patternsEdge.length
					? patternsEdge.map(renderCardItem)
					: renderEmpty()}
			</ul>
		);
	};

	const renderModal = () => {
		return (
			<Modal
				onRequestClose={closeModal}
				// @ts-ignore
				isFullScreen
				__experimentalHideHeader
			>
				<div className="grid grid-cols-[1fr,auto] items-center">
					<div className="col-span-2 md:col-span-1 flex min-w-0">
						<h2 className="truncate text-base font-medium leading-7 text-slate-900">
							Woostify Pattern Library
						</h2>
						<p className="ml-3 whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 block">
							{data ? patternsEdge.length : ""} patterns
						</p>
					</div>
					<div className="pt-5 md:pt-0 col-span-2 md:col-span-1 md:ml-6 flex items-center">
						{renderFreeProTab()}
						<div className="ml-6 mr-3 h-5 w-px bg-slate-900/10 block"></div>
						{renderSelectCategories()}
						<a
							href="https://woostifyblocks.com/wcb-blocks/"
							target="_blank"
							rel="noopener noreferrer"
							className="relative ml-2 h-9 w-9 items-center justify-center flex"
						>
							<ArrowTopRightOnSquareIcon className="w-4 h-4" />
						</a>
					</div>

					<div className="col-span-2 min-w-0">
						<div className="mt-5 pt-6 border-t border-slate-200 focus:outline-none w-full h-full ">
							{called && loading ? <Spinner /> : renderContent()}
						</div>
					</div>
				</div>
			</Modal>
		);
	};

	// MAIN RETURN
	return (
		<>
			<Button
				className="wcb-HeaderToolBarPatternsBtn flex-shrink-0 mx-2 button button-primary leading-none h-[33px] text-[13px] flex items-center justify-center"
				onClick={openModal}
			>
				<Logo className="w-4 h-4 text-white" />
				<span className="ml-2">Woostify patterns</span>
			</Button>

			{isOpen && renderModal()}
		</>
	);
};

export default HeaderToolBarPatterns;
