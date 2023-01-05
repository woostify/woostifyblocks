import React, { useEffect, useState } from "react";
import apiFetch from "@wordpress/api-fetch";
import { Button, Modal } from "@wordpress/components";
import {
	ArrowTopRightOnSquareIcon,
	KeyIcon,
	LightBulbIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_WCB_BLOCKS } from "./constant";
import { Edge, WcbBlocksRoot } from "./type";

const HeaderToolBarPatterns = () => {
	// STATE
	const [isOpen, setOpen] = useState(false);

	const [currentCategorySelected, setCurrentCategorySelected] =
		useState<string>("");
	const [currentPricingPackage, setCurrentPricingPackage] = useState<
		"free" | "pro"
	>("free");

	// CONSTS

	const [loadGreeting, { called, loading, data }] =
		useLazyQuery<WcbBlocksRoot>(GET_WCB_BLOCKS);

	console.log(11223344, { called, loading, data });

	let patternsEdge: Edge[] = [];
	let categoriesEdge: Edge[] = [];
	if (data) {
		patternsEdge = data.wcbBlocks.edges;
		// categoriesEdge = data.wcbBlocks.edges.map( item => {
		// 	return item.node.wcbBlocksCategories.edges
		// })
	}

	// USEEFFECT
	useEffect(() => {}, []);

	// HANDLE
	const openModal = () => {
		setOpen(true);
		!called && loadGreeting();
	};
	const closeModal = () => setOpen(false);

	// LOGIC API
	const graphqlGetWcbBlocksFromStoreSite = () => {};

	// RENDER
	const renderBadge = (status: "free" | "pro") => {
		if (status === "pro") {
			return (
				<span className="relative bg-red-500 text-white text-[10px] rounded-full px-2 py-0.5 leading-none">
					Pro
				</span>
			);
		}
		return (
			<span className="relative bg-green-500 text-white text-[10px] rounded-full px-2 py-0.5 leading-none">
				Free
			</span>
		);
	};

	const renderCardItem = (value: Edge, index: number) => {
		const post = value.node;
		return (
			<li key={post.id}>
				<div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
					<div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
						{post.featuredImage?.node.sourceUrl && (
							<img
								src={post.featuredImage?.node.sourceUrl}
								srcSet={post.featuredImage?.node.srcSet}
								sizes="550px"
								alt="heroes"
								className="absolute inset-0 h-full w-full object-contain"
							/>
						)}
					</div>
					<h4 className="mt-3.5 text-sm font-medium text-slate-900 group-hover:text-indigo-600 space-x-1">
						<a href="/components/marketing/sections/heroes">
							<span className="absolute -inset-2.5 z-10"></span>
							<span className="relative">{post.title}</span>
						</a>
						{renderBadge("free")}
						{renderBadge("pro")}
					</h4>
					<p className="relative mt-1 text-xs font-medium text-slate-500">
						9 templates
					</p>
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
						currentPricingPackage === "free" ? "bg-white shadow" : ""
					}`}
					id="headlessui-tabs-tab-29"
					role="tab"
					type="button"
					aria-selected={currentPricingPackage === "free" ? "true" : undefined}
					onClick={() => setCurrentPricingPackage("free")}
				>
					<LightBulbIcon className="w-4 h-4" />
					<span className="sr-only lg:not-sr-only lg:ml-2 text-slate-900">
						Free
					</span>
				</button>
				<button
					className={`flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${
						currentPricingPackage === "pro" ? "bg-white shadow" : ""
					}`}
					id="headlessui-tabs-tab-30"
					role="tab"
					type="button"
					aria-selected={currentPricingPackage === "pro" ? "true" : undefined}
					onClick={() => setCurrentPricingPackage("pro")}
				>
					<KeyIcon className="w-4 h-4" />
					<span className="sr-only lg:not-sr-only lg:ml-2 text-slate-600">
						Pro
					</span>
				</button>
			</div>
		);
	};

	const renderSelectCategories = () => {
		return (
			<div className="relative hidden sm:block">
				<select className="form-select h-9 w-full rounded-lg border-0 bg-transparent bg-none p-0 pl-3.5 pr-[1.875rem] font-medium text-slate-900 focus:shadow-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:text-sm">
					<option selected value="">
						All categories
					</option>
					{categories.map((item) => (
						<option key={item} value={item}>
							{item}
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

	const renderContent = () => {
		return (
			<ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
				{patternsEdge.map(renderCardItem)}
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
					<div className="flex min-w-0">
						<h2 className="truncate text-base font-medium leading-7 text-slate-900">
							Woostify Pattern Library
						</h2>
						<p className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 lg:block">
							315 patterns
						</p>
					</div>
					<div className="ml-6 flex items-center">
						{renderFreeProTab()}
						<div className="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block"></div>
						{renderSelectCategories()}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="block relative ml-2 h-9 w-9 items-center justify-center sm:flex"
						>
							<ArrowTopRightOnSquareIcon className="w-5 h-5" />
						</a>
					</div>

					<div className="col-span-2 row-start-2 min-w-0">
						<div className="mt-4 focus:outline-none w-full h-full rounded-lg ring-1 ring-slate-900/10 bg-white p-8">
							{called && loading ? "Loading ..." : renderContent()}
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
				className="wcb-HeaderToolBarPatternsBtn flex-shrink-0 mx-2 "
				variant="primary"
				onClick={openModal}
				icon="editor-paste-word"
			>
				Woostify patterns
			</Button>

			{isOpen && renderModal()}
		</>
	);
};

export default HeaderToolBarPatterns;
