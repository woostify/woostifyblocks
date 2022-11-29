import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
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
import { useSelect } from "@wordpress/data";

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
	const {
		uniqueId,
		answer,
		layout,
		question,
		general_icon,
		headingTag,
		defaultExtend,
		enableSeparator,
	} = attributes;
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

	const blockIndex: number = useSelect(
		(select) => select(blockEditorStore).getBlockIndex(clientId),
		[clientId]
	);

	//

	useEffect(() => {
		console.log(12, "------ FAQ CHILD setAttributes ON useEffect --------");

		setAttributes({
			layout: context["wcb/faq_general"]?.layout,
			headingTag: context["wcb/faq_general"]?.headingTag,
			general_icon: context["wcb/faq_icon"],
			enableSeparator: context["wcb/faq_general"]?.enableSeparator,
			defaultExtend:
				!context["wcb/faq_general"]?.collapseOtherItems ||
				(context["wcb/faq_general"]?.collapseOtherItems &&
					!blockIndex &&
					context["wcb/faq_general"]?.expandFirstItem),
		});
	}, [context["wcb/faq_general"], context["wcb/faq_icon"], blockIndex]);

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

	const ACTIVE = (defaultExtend || isSelected) && layout === "accordion";

	return (
		<CacheProvider value={myCache}>
			<div
				{...wrapBlockProps}
				className={`${
					wrapBlockProps?.className
				} wcb-faq-child__wrap wcb-faq-child__wrap--${layout} ${
					ACTIVE ? "active" : ""
				} ${UNIQUE_ID}`}
				data-uniqueid={UNIQUE_ID}
			>
				<div className="ac-header">
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
				</div>
				{(ACTIVE || layout === "grid") && (
					<div className="ac-panel">
						{enableSeparator && (
							<div className="wcb-faq-child__separator"></div>
						)}
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
					</div>
				)}
			</div>
		</CacheProvider>
	);
};

export default Edit;
