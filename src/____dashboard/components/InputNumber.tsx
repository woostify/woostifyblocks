import React, { FC, useState, useEffect } from "react";

interface Props extends Partial<HTMLInputElement> {
	label: string;
	desc: string;
	unit?: string;
	onChange?: (value: number) => void;
}

const InputNumber: FC<Props> = ({
	label,
	desc,
	unit = "px",
	id,
	onChange,
	...props
}) => {
	return (
		<div className="gap-4 flex lg:flex-row flex-col lg:items-center items-start justify-between">
			<div className="flex-1 max-w-2xl">
				<label
					htmlFor={id}
					className="block text-base font-medium text-gray-700 select-none"
				>
					{label}
				</label>
				{desc && (
					<p
						className="mt-1.5 block text-sm text-gray-500"
						dangerouslySetInnerHTML={{ __html: desc }}
					/>
				)}
			</div>
			<div className="min-w-[140px] max-w-[180px] flex-shrink-0 relative mt-1 ml-0 rounded-md">
				{unit && (
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
						<span className="text-gray-500 sm:text-sm">{unit}</span>
					</div>
				)}
				{/* @ts-ignore */}
				<input
					{...props}
					onChange={(e) => {
						onChange && onChange(parseInt(e.currentTarget.value));
					}}
					id={id}
					type="number"
					className="number-hide-arrow block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				/>
			</div>
		</div>
	);
};

export default InputNumber;
