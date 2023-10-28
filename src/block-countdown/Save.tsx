import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect } from "react";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";
export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "title" | "description" | "general_preset"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		day_label,
		hrs_label,
		min_label,
		sec_label,
		advance_motionEffect,
		general_preset
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		day_label,
		hrs_label,
		min_label,
		sec_label,
		advance_motionEffect,
		general_preset
	};

	const wrapBlockProps = useBlockProps.save({ className: "wcb-countdown__wrap" });

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			<div className="wcb-countdown__inner">
					<div className={`wcb-countdown__content ${ general_preset.preset }`}>
						<div className="wcb-countdown__box">
							<div className="countdown__number wcb-countdown-day"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName='span'
									value={day_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box">
							<div className="countdown__number wcb-countdown-hrs"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName='span'
									value={hrs_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box">
							<div className="countdown__number wcb-countdown-mins"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName='span'
									value={min_label}
									className="wcb-countdown__label"
								/>
							)}
						</div>
						<div className="wcb-countdown__box">
							<div className="countdown__number wcb-countdown-secs"></div>
							{general_date.enableLabel && (
								<RichText.Content
									tagName='span'
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
