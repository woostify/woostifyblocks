import React, { FC } from "react";

interface Props {
	className?: string;
}

const Logo: FC<Props> = ({ className = "w-12 h-12 text-[#5271ff]" }) => {
	return (
		<svg
			className={className}
			width="188"
			height="188"
			viewBox="0 0 188 188"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_516_2418)">
				<mask
					id="mask0_516_2418"
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="188"
					height="188"
				>
					<path
						d="M0.286438 0.286621H187.286V187.287H0.286438V0.286621Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask0_516_2418)">
					<path
						d="M120.078 151.37L39.177 70.4691L58.875 50.7712L120.078 111.974L178.292 53.7555C163.302 22.141 131.089 0.276367 93.7708 0.276367C56.427 0.276367 24.1979 22.1722 9.21871 53.8232L87.2343 131.839L67.7083 151.37L0.739543 84.4014C0.432251 87.4847 0.276001 90.6097 0.276001 93.7712C0.276001 145.407 42.1354 187.271 93.7708 187.271C145.406 187.271 187.271 145.407 187.271 93.7712C187.271 90.6826 187.115 87.6357 186.823 84.6253L120.078 151.37Z"
						fill="currentColor"
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_516_2418">
					<rect width="188" height="188" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Logo;
