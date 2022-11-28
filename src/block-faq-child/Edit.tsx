import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import React, { useEffect, FC } from "react";
import { WcbAttrs } from "./attributes";
import { EditProps } from "../block-container/Edit";
import useCreateCacheEmotion from "../hooks/useCreateCacheEmotion";
import { CacheProvider } from "@emotion/react";
import "./editor.scss";
import useSetBlockPanelInfo from "../hooks/useSetBlockPanelInfo";
import { Dashicon } from "@wordpress/components";
import { WCB_FAQ_PANEL_ICON } from "../block-faq/WcbFaqPanelIcon";
import { WCB_FAQ_PANEL_GENERAL } from "../block-faq/WcbFaqPanelGeneral";

const Edit: FC<
	EditProps<
		WcbAttrs,
		{
			"wcb/faq_icon"?: WCB_FAQ_PANEL_ICON;
			"wcb/faq_general"?: WCB_FAQ_PANEL_GENERAL;
		}
	>
> = (props) => {
	const { attributes, setAttributes, clientId, context, isSelected } = props;
	const { uniqueId, answer, layout, question, general_icon, headingTag } =
		attributes;
	//  COMMON HOOKS
	const { myCache, ref } = useCreateCacheEmotion();
	const wrapBlockProps = useBlockProps({ ref });
	const {
		tabIsOpen,
		tabAdvancesIsPanelOpen,
		tabGeneralIsPanelOpen,
		tabStylesIsPanelOpen,
		handleTogglePanel,
	} = useSetBlockPanelInfo(uniqueId);

	const UNIQUE_ID = wrapBlockProps.id;
	useEffect(() => {
		setAttributes({
			uniqueId: UNIQUE_ID,
		});
	}, [UNIQUE_ID]);
	//

	useEffect(() => {
		setAttributes({
			layout: context["wcb/faq_general"]?.layout,
			headingTag: context["wcb/faq_general"]?.headingTag,
			general_icon: context["wcb/faq_icon"],
		});
	}, [context["wcb/faq_general"], context["wcb/faq_icon"]]);

	const renderIcon = () => {
		if (!general_icon.enableIcon || layout !== "accordion") {
			return null;
		}
		return (
			<>
				{general_icon.iconName && (
					<Dashicon
						className="wcb-faq-child__icon wcb-faq-child__icon--active"
						size={16}
						icon={general_icon.iconName}
					/>
				)}
				{general_icon.inactiveIconName && (
					<Dashicon
						className="wcb-faq-child__icon wcb-faq-child__icon--inactive"
						size={16}
						icon={general_icon.inactiveIconName}
					/>
				)}
			</>
		);
	};

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${
					wrapBlockProps?.className
				} wcb-faq-child__wrap wcb-faq-child__wrap--${layout} ${
					isSelected ? "active" : ""
				} ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				<div
					className={`wcb-faq-child__question wcb-faq-child__question--icon-${general_icon.iconPosition}`}
				>
					{general_icon.iconPosition === "left" && renderIcon()}
					<RichText
						tagName={headingTag || "h4"}
						value={question}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(content) => setAttributes({ question: content })}
						placeholder={__("Question...")}
						className="wcb-faq-child__question-text"
					/>

					{general_icon.iconPosition === "right" && renderIcon()}
				</div>
				{(isSelected || layout === "grid") && (
					<div className="wcb-faq-child__answer">
						<RichText
							tagName="p"
							value={answer}
							allowedFormats={["core/bold", "core/italic"]}
							onChange={(content) => setAttributes({ answer: content })}
							placeholder={__("Answer...")}
							className="wcb-faq-child__answer-text"
						/>
					</div>
				)}
			</div>
		</CacheProvider>
	);
};

export default Edit;
