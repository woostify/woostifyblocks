import {
	// @ts-ignore
	__experimentalToggleGroupControl as ToggleGroupControl,
	// @ts-ignore
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
	formatCapitalize,
	formatLowercase,
	formatUppercase,
} from "@wordpress/icons";
import React, { FC, CSSProperties } from "react";

const TEXT_TRANSFORMS = [
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
		name: __("Uppercase"),
		value: "uppercase",
		icon: formatUppercase,
	},
	{
		name: __("Lowercase"),
		value: "lowercase",
		icon: formatLowercase,
	},
	{
		name: __("Capitalize"),
		value: "capitalize",
		icon: formatCapitalize,
	},
];

interface Props {
	value: CSSProperties["textTransform"];
	onChange: (value?: CSSProperties["textTransform"]) => void;
}

const MyTextTransformControl: FC<Props> = ({
	value = "none",
	onChange = () => {},
	...props
}) => {
	return (
		<ToggleGroupControl
			{...props}
			__experimentalIsIconGroup
			label={__("Letter case")}
			value={value}
			onChange={onChange}
		>
			{TEXT_TRANSFORMS.map((textTransform) => {
				return (
					<ToggleGroupControlOptionIcon
						key={textTransform.value}
						value={textTransform.value}
						icon={textTransform.icon}
						label={textTransform.name}
					/>
				);
			})}
		</ToggleGroupControl>
	);
};

export default MyTextTransformControl;
