import React from "react";
import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "title" | "description" | "general_preset"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		advance_responsiveCondition,
		advance_zIndex,
		uniqueId,
		general_layout,
		general_date,
		day_label,
		hrs_label,
		min_label,
		sec_label,
		style_label,
		title,
		style_dimension,
		general_preset,
		advance_motionEffect,
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		general_layout,
		general_date,
		day_label,
		hrs_label,
		min_label,
		sec_label,
	};
	//
	const wrapBlockProps = useBlockProps.save({ className: "wcb-countdown__wrap" });

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<div className="wcb-countdown__inner">
					<div className="wcb-countdown__content flex items-center">
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-day"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName={'span'}
									value={day_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-hrs"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName={'span'}
									value={hrs_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-mins"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName={'span'}
									value={min_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box w-150 items-center justify-center">
							<div className="wcb-countdown-secs"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName={'span'}
									value={sec_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
					</div>
				</div>
		</SaveCommon>
	);
}
