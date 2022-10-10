import {
	FlexBlock,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import React from "react";

const WcbDimensions = () => {
	const [values, setValues] = useState({
		top: "50px",
		left: "10%",
		right: "10%",
		bottom: "50px",
	});
	return (
		<div>
			<FlexBlock>
				<BoxControl
					label="Padding"
					values={values}
					onChange={(nextValues) => setValues(nextValues)}
					// sides={ sides }
					// splitOnAxis={ splitOnAxis }
				/>
			</FlexBlock>
		</div>
	);
};

export default WcbDimensions;
