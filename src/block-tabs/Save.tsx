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
        general_tabTitle,
        titles,
        tabContents,
        activeTabIndex,
        style_icon,
        style_container,
        style_title,
        style_body,
        advance_motionEffect,
        general_general,
    } = attributes;

    const newAttrForSave: WcbAttrsForSave = {
        uniqueId,
        advance_responsiveCondition,
        advance_zIndex,
        general_tabTitle,
        titles,
        tabContents,
        activeTabIndex,
        style_icon,
        style_container,
        style_title,
        style_body,
        advance_motionEffect,
        general_general,
    };

    const wrapBlockProps = useBlockProps.save({ className: "wcb-tabs__wrap" });

    const renderIcon = () => {
        if (!general_tabTitle.enableIcon) return null;
        return general_tabTitle.icon ? <MyIconFull className="wcb-tabs__icon" icon={general_tabTitle.icon} /> : null;
    };

    return (
        <SaveCommon {...wrapBlockProps} attributes={newAttrForSave} uniqueId={uniqueId}>
            <div className="wcb-tabs__contents">
                <div className="wcb-tabs__titles">
                    {titles.map((item, index) => (
                        <div className="wcb-tabs__title_inner relative group" key={item.id} data-tab-index={item.dataTabIndex}>
                            {(general_tabTitle.iconPosition === "left" || general_tabTitle.iconPosition === "top") && renderIcon()}
                            <RichText.Content tagName="p" className="wcb-tabs__title" value={item.title} placeholder="Title" />
                            {(general_tabTitle.iconPosition === "right" || general_tabTitle.iconPosition === "bottom") && renderIcon()}
                        </div>
                    ))}
                </div>
                {titles.map((_, index) => (
                    <div
                        key={index}
                        className="wp-block-wcb-tab-child wcb-tab-child__wrap"
                        hidden={index !== activeTabIndex}
                    >
                        <div className="wcb-tab-child__inner">
                            <div dangerouslySetInnerHTML={{ __html: tabContents[index] }} />
                        </div>
                    </div>
                ))}
            </div>
        </SaveCommon>
    );
}
