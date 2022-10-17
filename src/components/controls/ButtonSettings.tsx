import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<{}> {
	iconClass?: string;
	isActive?: boolean;
}

const ButtonSettings: FC<Props> = ({
	iconClass = "w-4 h-4",
	isActive,
	className = "",
	...props
}) => {
	return (
		<button
			className={`w-7 h-7 flex items-center justify-center rounded-md border ${
				isActive
					? "text-sky-500 border-sky-50 bg-sky-50"
					: "border-slate-300 hover:border-slate-400 bg-white text-slate-700"
			} ${className}`}
			{...props}
		>
			<svg className={iconClass} viewBox="0 0 24 24" fill="none">
				<path
					d="M22 6.5H16"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6 6.5H2"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M22 17.5H18"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8 17.5H2"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	);
};

export default ButtonSettings;
