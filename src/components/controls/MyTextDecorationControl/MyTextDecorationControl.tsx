import {
	// @ts-ignore
	__experimentalToggleGroupControl as ToggleGroupControl,
	// @ts-ignore
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";
import {
	formatStrikethrough,
	formatUnderline,
	lineSolid,
} from "@wordpress/icons";
import React, { FC, CSSProperties } from "react";
import { __ } from "@wordpress/i18n";

const TEXT_DECORATIONS = [
	{
		name: __("None"),
		value: "none",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-6 h-6"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M7 11.5h10V13H7z"></path>
			</svg>
		),
	},
	{
		name: __("Underline"),
		value: "underline",
		icon: formatUnderline,
	},
	{
		name: __("Strikethrough"),
		value: "line-through",
		icon: formatStrikethrough,
	},
];

interface Props {
	value: CSSProperties["textDecoration"];
	onChange: (value?: CSSProperties["textDecoration"]) => void;
}

const MyTextDecorationControl: FC<Props> = ({
	value = "none",
	onChange = () => {},
	...props
}) => {
	return (
		<ToggleGroupControl
			{...props}
			__experimentalIsIconGroup
			label={__("Decoration")}
			value={value}
			onChange={onChange}
		>
			{TEXT_DECORATIONS.map((textDecoration) => {
				return (
					<ToggleGroupControlOptionIcon
						key={textDecoration.value}
						value={textDecoration.value}
						icon={textDecoration.icon}
						label={textDecoration.name}
						title={textDecoration.name}
					/>
				);
			})}
		</ToggleGroupControl>
	);
};

export default MyTextDecorationControl;
