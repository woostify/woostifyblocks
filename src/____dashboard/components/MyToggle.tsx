import React, { useState, FC, useEffect } from "react";
import { Switch } from "@headlessui/react";

interface Props {
	checked: boolean;
	disabled?: boolean;
	onChange: (checked: boolean) => void;
	label?: string;
	desc?: string;
	name?: string;
	id?: string;
}

const MyToggle: FC<Props> = ({
	checked,
	onChange,
	desc,
	label,
	name,
	id,
	disabled,
}) => {
	const [enabled, setEnabled] = useState(checked);

	useEffect(() => {
		setEnabled(checked);
	}, [checked]);

	return (
		<div className="flex items-center justify-between space-x-3">
			<div className="flex-1 max-w-2xl">
				<label
					className="block text-base font-medium text-gray-700 select-none"
					htmlFor={id}
				>
					{label}
				</label>
				{desc && (
					<span className="mt-1.5 block text-sm text-gray-500">{desc}</span>
				)}
			</div>
			<Switch
				disabled={disabled}
				checked={enabled}
				onChange={(checked) => {
					setEnabled(checked);
					onChange(checked);
				}}
				className={`${
					enabled ? "bg-blue-600" : "bg-gray-200"
				} flex-shrink-0 relative inline-flex h-6 w-11 items-center rounded-full`}
				name={name}
				id={id}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled ? "translate-x-6" : "translate-x-1"
					} inline-block h-4 w-4 transform rounded-full bg-white transition`}
				/>
			</Switch>
		</div>
	);
};

export default MyToggle;
