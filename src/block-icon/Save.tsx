import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import "./style.scss";

export interface WcbAttrsForSave
	extends Omit<WcbAttrs, "heading" | "designation" | "description"> { }

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
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
		general_preset
	} = attributes;
	//

	const newAttrForSave: WcbAttrsForSave = {
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
		style_background,
		style_border,
		style_boxshadow,
		style_dimension,
		advance_motionEffect,
		general_preset
	};
	//
	const wrapBlockProps = useBlockProps.save({
		className: "wcb-icon__wrap",
	});

	// Get text alignment values from general_layout
	const textAlignment_Desktop = general_layout.textAlignment.Desktop || "center";
	const textAlignment_tablet = general_layout.textAlignment.Tablet || textAlignment_Desktop;
	const textAlignment_mobile = general_layout.textAlignment.Mobile || textAlignment_tablet;
	
	// Get flex direction values
	const flexDirection_Desktop = general_layout.flexDirection.Desktop || "row";
	const flexDirection_tablet = general_layout.flexDirection.Tablet || flexDirection_Desktop;
	const flexDirection_mobile = general_layout.flexDirection.Mobile || flexDirection_tablet;

	// Calculate alignment based on text alignment
	let ALIGN_ITEMS = {
	Desktop:
		textAlignment_Desktop === "left"
		? "start"
		: textAlignment_Desktop === "right"
			? "end"
			: "center",
	Tablet:
		textAlignment_tablet === "left"
		? "start"
		: textAlignment_tablet === "right"
			? "end"
			: "center",
	Mobile:
		textAlignment_mobile === "left"
		? "start"
		: textAlignment_mobile === "right"
			? "end"
			: "center",
	};

	// Generate class names for layout
	const getLayoutClasses = () => {
	const classes = [`wcb-icon__content ${general_preset.preset}`];
	
	// Add flex direction classes
	if (flexDirection_Desktop === "column") {
		classes.push("wcb-flex-col");
	} else {
		classes.push("wcb-flex-row");
	}
	
	// Add alignment classes
	if (ALIGN_ITEMS.Desktop === "start") {
		classes.push("wcb-justify-start");
	} else if (ALIGN_ITEMS.Desktop === "end") {
		classes.push("wcb-justify-end");
	} else {
		classes.push("wcb-justify-center");
	}
	
	// Add responsive classes
	classes.push("wcb-layout-desktop-" + textAlignment_Desktop);
	if (textAlignment_tablet) classes.push("wcb-layout-tablet-" + textAlignment_tablet);
	if (textAlignment_mobile) classes.push("wcb-layout-mobile-" + textAlignment_mobile);
	
	return classes.join(" ");
	};

	return (
		<SaveCommon
			{...wrapBlockProps}
			attributes={newAttrForSave}
			uniqueId={uniqueId}
		>
			{/* CHILD CONTENT  */}

			<div className={getLayoutClasses()}>
				{general_date.show_day && (
					<div className="wcb-icon__box">
						<div className="wcb-icon__number wcb-icon-day"></div>
						<RichText.Content
							tagName='div'
							value={daylabel}
							className="wcb-icon__label wcb-icon__daylabel"
						/>
					</div>
				)}
				{general_date.show_hour && (
					<div className="wcb-icon__box">
						<div className="wcb-icon__number wcb-icon-hrs"></div>
						<RichText.Content
							tagName='div'
							value={hrslabel}
							className="wcb-icon__label wcb-icon__hrslabel"
						/>
					</div>
				)}
				{general_date.show_minute && (
					<div className="wcb-icon__box">
						<div className="wcb-icon__number wcb-icon-mins"></div>
						<RichText.Content
							tagName='div'
							value={minlabel}
							className="wcb-icon__label wcb-icon__minlabel"
						/>
					</div>
				)}
				<div className="wcb-icon__box">
					<div className="wcb-icon__number wcb-icon-secs"></div>
					<RichText.Content
						tagName='div'
						value={seclabel}
						className="wcb-icon__label wcb-icon__seclabel"
					/>
				</div>
			</div>
		</SaveCommon>
	);
}
