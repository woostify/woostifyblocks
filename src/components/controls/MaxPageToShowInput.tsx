import React, { FC } from "react";
import {
	// @ts-ignore
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import HelpText from "./HelpText";
import { __ } from "@wordpress/i18n";

interface Props {
	value: number;
	onChange: (value) => void;
}

const MaxPageToShowInput: FC<Props> = ({ value, onChange }) => {
	return (
		<div>
			<div>
				<NumberControl
					id={"maxPageInputId"}
					__unstableInputWidth="80px"
					label={__("Max page to show")}
					labelPosition="edge"
					min={0}
					onChange={onChange}
					step="1"
					value={value}
					isDragEnabled={false}
				/>
				<HelpText>
					{__(
						"Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).",
						"wcb"
					)}
				</HelpText>
			</div>
		</div>
	);
};

export default MaxPageToShowInput;
