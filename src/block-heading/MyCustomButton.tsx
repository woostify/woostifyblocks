import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { BlockControls } from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import React from "react";

export const WCB_FORMAT_HIGHLIGHT = "my-custom-format/sample-output";

const MyCustomButton = ({ isActive, onChange, value }) => {
	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="editor-textcolor"
					title="Highlight"
					onClick={() => {
						onChange(
							toggleFormat(value, {
								type: WCB_FORMAT_HIGHLIGHT,
							})
						);
					}}
					isActive={isActive}
				/>
			</ToolbarGroup>
		</BlockControls>
	);
};

export default MyCustomButton;
