import React from "react";

export default function MyFontSizePicker() {
	return <div>MyFontSizePicker</div>;
}

// import { __ } from "@wordpress/i18n";
// import React, { ReactNode, useState, useCallback, FC } from "react";
// import { HasResponsive } from "../MyBackgroundControl/types";
// import MyLabelControl from "../MyLabelControl/MyLabelControl";
// import { Button, CustomSelectControl, IconButton } from "@wordpress/components";
// import ButtonSettings from "../ButtonSettings";

// export interface FontSizes {
// 	size: string;
// 	name: string;
// 	key: string;
// }

// interface Props {
// 	className?: string;
// 	label?: ReactNode;
// 	value?: string;
// 	fontSizes?: FontSizes[];
// 	onChange?: (fontSize: string) => void;
// }

// export const FONT_SIZES_DEMO: FontSizes[] = [
// 	{
// 		name: "Tiny",
// 		key: "8px",
// 		__experimentalHint: "8px",
// 	},
// 	{
// 		name: "Base",
// 		key: "16px",
// 		__experimentalHint: "16px",
// 	},
// 	{
// 		name: "Large",
// 		key: "18px",
// 		__experimentalHint: "18px",
// 	},
// ];

// const MyFontSizePicker: FC<Props> = ({
// 	className = "",
// 	label,
// 	value = "16px",
// 	fontSizes = FONT_SIZES_DEMO,
// 	onChange = () => {},
// }) => {
// 	const [showCustom, setShowCustom] = useState(false);

// 	const handleChangeFontSize = (size: string) => {};

// 	return (
// 		<div className={className}>
// 			<div className="flex items-center justify-between">
// 				{label === undefined ? (
// 					<MyLabelControl className="" hasResponsive>
// 						{__("Size", "boostify-blocks")}
// 					</MyLabelControl>
// 				) : (
// 					label
// 				)}
// 				<ButtonSettings
// 					onClick={() => setShowCustom(!showCustom)}
// 					isActive={showCustom}
// 				/>
// 			</div>

// 			<CustomSelectControl
// 				__nextUnconstrainedWidth
// 				label=""
// 				options={fontSizes}
// 				onChange={({ selectedItem }) =>
// 					handleChangeFontSize(selectedItem?.key || "")
// 				}
// 			/>
// 		</div>
// 	);
// };

// export default MyFontSizePicker;
