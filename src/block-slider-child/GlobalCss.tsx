import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";

interface Props {
	uniqueId: string;
}

const GlobalCss: FC<Props> = (attrs) => {
	const { uniqueId } = attrs;

	if (!uniqueId) {
		return null;
	}

	const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

	return (
		<>
			<Global
				styles={[
					{
						[`${WRAP_CLASSNAME} .wcb-star`]: {
							color: "#fbbf24",
							fontSize: "1rem",
						},
						[`${WRAP_CLASSNAME} .wcb-star:not(.active)`]: {
							color: "#d1d5db",
						},
						[`${WRAP_CLASSNAME} .wcb-slider-child__item`]: {
							padding: "1rem",
						},
						[`${WRAP_CLASSNAME} .wcb-slider-child__content`]: {
							marginBottom: "1rem",
						},
						[`${WRAP_CLASSNAME} .wcb-slider-child__name`]: {
							fontWeight: "600",
							marginBottom: "0.25rem",
						},
						[`${WRAP_CLASSNAME} .wcb-slider-child__company`]: {
							color: "#6b7280",
						},
						[`${WRAP_CLASSNAME} .wcb-slider-child__image img`]: {
							width: "60px",
							height: "60px",
							borderRadius: "50%",
							objectFit: "cover",
						},
						[`${WRAP_CLASSNAME} .wcb-slider-child__rating`]: {
							marginBottom: "1rem",
						},
					},
				]}
			/>
		</>
	);
};

export default GlobalCss; 