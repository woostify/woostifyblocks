import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
	const {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		daylabel,
		hrslabel,
		minlabel,
		seclabel,
		style_label,
		style_number,
		style_dimension,
		advance_motionEffect,
		general_preset
	} = attributes;

	const newAttrForSave: WcbAttrsForSave = {
		uniqueId,
		advance_responsiveCondition,
		advance_zIndex,
		general_layout,
		general_date,
		style_label,
		style_number,
		style_dimension,
		advance_motionEffect,
		general_preset
	};

	const wrapBlockProps = useBlockProps.save({
		className: "wcb-countdown__wrap",
	});

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>

			{/* CHILD CONTENT  */}
			<div className={`wcb-countdown__content ${general_preset.preset}`}>
				<div className="wcb-countdown__box">
					<div className="wcb-countdown__number wcb-countdown-day"></div>
					<RichText.Content
						tagName='div'
						value={daylabel}
						className="wcb-countdown__label wcb-countdown__daylabel"
					/>
				</div>
				<div className="wcb-countdown__box">
					<div className="wcb-countdown__number wcb-countdown-hrs"></div>

					<RichText.Content
						tagName='div'
						value={hrslabel}
						className="wcb-countdown__label wcb-countdown__hrslabel"
					/>
				</div>
				<div className="wcb-countdown__box">
					<div className="wcb-countdown__number wcb-countdown-mins"></div>

					<RichText.Content
						tagName='div'
						value={minlabel}
						className="wcb-countdown__label wcb-countdown__minlabel"
					/>
				</div>
				<div className="wcb-countdown__box">
					<div className="wcb-countdown__number wcb-countdown-secs"></div>

					<RichText.Content
						tagName='div'
						value={seclabel}
						className="wcb-countdown__label wcb-countdown__seclabel"
					/>
				</div>
			</div>
		</SaveCommon>
	);
}
