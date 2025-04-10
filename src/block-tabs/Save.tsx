import React from "react";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { WcbAttrs } from "./attributes";
import SaveCommon from "../components/SaveCommon";
import MyIconFull from "../components/controls/MyIconFull";
import "./style.scss";

export interface WcbAttrsForSave extends Omit<WcbAttrs, "general_preset"> {}

export default function save({ attributes }: { attributes: WcbAttrs }) {
    const {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_preset,
        general_tabTitle,
        titles,
		tabContents,
        activeTabIndex,
        style_icon,
        advance_motionEffect,
    } = attributes;

    const newAttrForSave: WcbAttrsForSave = {
        general_preset,
        general_tabTitle,
        titles,
		tabContents,
        activeTabIndex,
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        style_icon,
        advance_motionEffect,
    };

	//
    const wrapBlockProps = useBlockProps.save({ className: "wcb-tabs__wrap" });
	// INNER BLOCKS
	// const innerBlockProps = useBlockProps.save();
	// const innerBlocksProps = useInnerBlocksProps.save(innerBlockProps);
	// //
	// const innerClassName = `wcb-tabs__inner`;
	//

    const renderIcon = () => {
        if (!general_tabTitle.enableIcon) {
            return null;
        }
        return (
            <>
                {general_tabTitle.icon && (
                    <MyIconFull className="wcb-tabs__icon" icon={general_tabTitle.icon} />
                )}
            </>
        );
    };

    return (
        <SaveCommon
            {...wrapBlockProps}
            attributes={newAttrForSave}
            uniqueId={uniqueId}
        >
            <div className="wcb-tabs__titles">
                {titles.map((item, index) => {
                    return (
                        <div
                            className="wcb-tabs__title_inner relative group"
                            key={item.id}
                            data-tab-index={item.dataTabIndex} // Add data-tab-index
                        >
                            {(general_tabTitle.iconPosition === "left" ||
                                general_tabTitle.iconPosition === "top") &&
                                renderIcon()}
                            <RichText.Content
                                tagName="p"
                                className="wcb-tabs__title"
                                value={item.title}
                                placeholder="Title"
                            />
                            {(general_tabTitle.iconPosition === "right" ||
                                general_tabTitle.iconPosition === "bottom") &&
                                renderIcon()}
                        </div>
                    );
                })}
            </div>
            {titles.map((_, index) => (
                <div
                    key={index}
                    className="wp-block-wcb-tab-child wcb-tab-child__wrap"
                    hidden={index !== activeTabIndex} // hidden item no active
                >
                    <div className="wcb-tab-child__inner">
                        <div dangerouslySetInnerHTML={{ __html: tabContents[index] }} />
                    </div>
                </div>
            ))}
        </SaveCommon>
    );
}