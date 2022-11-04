import React, { FC, ReactNode } from "react";

interface Props {
	className?: string;
	children: ReactNode;
}

const HelpText: FC<Props> = ({ children, className = "my-1" }) => {
	return (
		<p className={`components-form-token-field__help ${className}`}>
			{children}
		</p>
	);
};

export default HelpText;
