import React, { Fragment, useState, FC, useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { __ } from "@wordpress/i18n";

interface MyComboboxItem {
	label: string;
	value: string;
}

const people: MyComboboxItem[] = [
	{ value: " 1", label: "Wade Cooper" },
	{ value: " 2", label: "Arlene Mccoy" },
	{ value: "3", label: "Devon Webb" },
	{ value: "4", label: "Tom Cook" },
	{ value: "5", label: "Tanya Fox" },
	{ value: "6", label: "Hellen Schmidt" },
];

interface Props {
	options: MyComboboxItem[];
	value: MyComboboxItem;
	onChange: (value: string) => void;
}

const MyCombobox: FC<Props> = ({
	options = people,
	value = options[0],
	onChange,
}) => {
	const [selected, setSelected] = useState(value);
	const [query, setQuery] = useState("");

	useEffect(() => {
		setSelected(value);
	}, [value]);

	const filteredPeople =
		query === ""
			? options
			: options.filter((person) =>
					person.label
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<Combobox
			value={selected}
			onChange={(e) => {
				setSelected(e);
				onChange && onChange(e.value);
			}}
		>
			<div className="relative mt-1">
				<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm border border-slate-300">
					<Combobox.Input
						className="w-full border-none py-1.5 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
						displayValue={(person) => person?.label}
						onChange={(event) => setQuery(event.target.value)}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							className="h-4 w-4 text-gray-400"
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery("")}
				>
					<Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{filteredPeople.length === 0 && query !== "" ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
								{__("Nothing found.", "wcb")}
							</div>
						) : (
							filteredPeople.map((person) => (
								<Combobox.Option
									key={person.value}
									className={({ active }) =>
										`relative cursor-default select-none py-1 pl-10 pr-3 ${
											active ? "bg-teal-600 text-white" : "text-gray-900"
										}`
									}
									value={person}
								>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{person.label}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-2 ${
														active ? "text-white" : "text-teal-600"
													}`}
												>
													<CheckIcon className="h-4 w-4" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
};

export default MyCombobox;
