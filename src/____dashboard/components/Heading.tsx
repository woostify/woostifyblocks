import React, { FC } from "react";

interface Props {
	children: string;
}

const Heading: FC<Props> = ({ children }) => {
	return (
		<div className="mt-10 mb-8 font-semibold text-2xl lg:max-w-[80rem] capitalize">
			{children}
		</div>
	);
};

export default Heading;
