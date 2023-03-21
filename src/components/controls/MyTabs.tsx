import React, { useState, FC, ReactNode, useEffect } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

interface Props {
	className?: string;
	label?: string;
	children: ReactNode;
	tabs: string[];
	tabSelected: string;
	onChangeSelected?: (index: number) => void;
}

const MyTabs: FC<Props> = ({
	className = "",
	children,
	tabs = [],
	label,
	tabSelected,
	onChangeSelected = () => {},
}) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		setSelectedIndex(tabs.findIndex((el) => el === tabSelected) || 0);
	}, [tabSelected]);

	return (
		<div className={`w-full max-w-md py-2 ${className}`}>
			{label ? <p className="mb-2">{label}</p> : null}
			<Tab.Group
				selectedIndex={selectedIndex}
				onChange={(index) => {
					setSelectedIndex(index);
					onChangeSelected(index);
				}}
			>
				<Tab.List className="flex space-x-1 rounded-xl bg-slate-100 p-1">
					{tabs.map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2.5 text-xs font-medium leading-5 text-blue-700 capitalize",
									"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
									selected ? "bg-white shadow" : "text-slate-700 "
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="relative mt-3 rounded-lg ring-1 ring-offset-4 ring-slate-200 p-2.5 ">
					{children}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};

export default MyTabs;
