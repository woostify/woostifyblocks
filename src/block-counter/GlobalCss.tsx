import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getBorderStyles from "../utils/getBorderStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

const GlobalCss: FC<Props> = (attrs) => {
    const {
        uniqueId,
        general_layout,
        style_description,
        style_desination,
        style_Icon,
        style_title,
        advance_responsiveCondition,
        advance_zIndex,
        general_icon,
        style_dimension,
        advance_motionEffect,
    } = attrs;
    const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

    const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

    // ------------------- WRAP DIV
    const getDivWrapStyles = (): CSSObject[] => {
        return [
            getStyleObjectFromResponsiveAttr({
                className: WRAP_CLASSNAME,
                value: general_layout.textAlignment,
                prefix: "textAlign",
            }),

            {
                [`${WRAP_CLASSNAME}`]: {
                    display:
                        general_icon.iconPosition === "left" ||
                        general_icon.iconPosition === "right"
                            ? "flex"
                            : "block",
                    flexDirection:
                        general_icon.stackOn === "mobile" ||
                        general_icon.stackOn === "tablet"
                            ? general_icon.iconPosition === "right"
                                ? "column-reverse"
                                : "column"
                            : undefined,

                    ".wcb-icon-box__icon-wrap, .wcb-icon-box__content": {
                        alignSelf:
                            general_icon.verticalAlignment === "middle"
                                ? "center"
                                : undefined,
                    },

                    ".wcb-icon-box__content-title-wrap": {
                        display:
                            general_icon.iconPosition === "leftOfTitle" ||
                            general_icon.iconPosition === "rightOfTitle"
                                ? "flex"
                                : "block",
                    },

                    // Styles for circle type
                    ".wcb-icon-box__progress-circle-wrap": {
                        position: "relative",
                        margin:   
                            general_layout.textAlignment.Desktop === "left" ? "" :
                            general_layout.textAlignment.Tablet === "left" ? "" :
                            general_layout.textAlignment.Desktop === "right" ? "0 0 0 auto" :
                            general_layout.textAlignment.Tablet === "right" ? "0 0 0 auto" : "0 auto"
                            
                    },

                    // Styles for bar type
                    ".wcb-icon-box__progress-bar-wrap": {
                        position: "relative",
                        width: "100%",
                        textAlign: 
                            general_layout.textAlignment.Desktop === "left" ? "start" :
                            general_layout.textAlignment.Tablet === "left" ? "start" :
                            general_layout.textAlignment.Desktop === "right" ? "end" :
                            general_layout.textAlignment.Tablet === "right" ? "end" : "center"
                    },

                    ".wcb-icon-box__title": {
                        fontSize: "16px",
                        color: "#666",
                        marginTop: "10px",
                    },

                    ".wcb-icon-box__icon": {
                        fontSize: "20px",
                        marginBottom: "10px",
                    },

                    [`@media (min-width: ${media_tablet})`]: {
                        flexDirection:
                            general_icon.stackOn === "mobile" ? "row" : undefined,
                    },

                    [`@media (min-width: ${media_desktop})`]: {
                        flexDirection: "row",
                    },
                },
            },
        ];
    };

    if (!uniqueId) {
        return null;
    }

    return (
        <>
            <Global styles={getDivWrapStyles()} />
            <Global
                styles={getPaddingMarginStyles({
                    className: WRAP_CLASSNAME,
                    margin: style_dimension?.margin,
                    padding: style_dimension?.padding,
                })}
            />

            {/* --------- ICON --------- */}
            {general_icon.enableIcon ? (
                <Global
                    styles={[
                        getPaddingMarginStyles({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
                            margin: style_Icon.dimensions?.margin,
                        }),
                        getPaddingMarginStyles({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
                            padding: style_Icon.dimensions?.padding,
                        }),
                        getBorderStyles({
                            border: style_Icon.border,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__icon`,
                            isWithRadius: true,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-full`,
                            value: style_Icon.iconSize,
                            prefix: "width",
                            prefix_2: "fontSize",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-full`]: {
                                color: style_Icon.color,
                                ":hover": {
                                    color: style_Icon.hoverColor,
                                },
                            },
                        },
                    ]}
                />
            ) : null}

            {/* --------- DESIGNATION --------- */}
            {general_layout.enablePrefix ? (
                <Global
                    styles={[
                        getTypographyStyles({
                            typography: style_desination.typography,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                            value: style_desination.marginBottom,
                            prefix: "marginBottom",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-box__number`]: {
                                color: style_desination.textColor,
                            },
                        },
                    ]}
                />
            ) : null}

            {/* --------- TITLE --------- */}
            {general_layout.enableTitle ? (
                <Global
                    styles={[
                        getTypographyStyles({
                            typography: style_title.typography,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
                            value: style_title.marginBottom,
                            prefix: "marginBottom",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-box__number`]: {
                                color: style_title.textColor,
                            },
                        },
                    ]}
                />
            ) : null}

            {/* --------- DESCRIPTION --------- */}
            {general_layout.enableDescription ? (
                <Global
                    styles={[
                        getTypographyStyles({
                            typography: style_description.typography,
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__description`,
                        }),
                        getStyleObjectFromResponsiveAttr({
                            className: `${WRAP_CLASSNAME} .wcb-icon-box__description`,
                            value: style_description.marginBottom,
                            prefix: "marginBottom",
                        }),
                        {
                            [`${WRAP_CLASSNAME} .wcb-icon-box__description`]: {
                                color: style_description.textColor,
                            },
                        },
                    ]}
                />
            ) : null}

            {/* ADVANCE */}
            <Global
                styles={getAdvanveDivWrapStyles({
                    advance_responsiveCondition,
                    advance_motionEffect,
                    advance_zIndex,
                    className: WRAP_CLASSNAME,
                })}
            />
        </>
    );
};

export default React.memo(GlobalCss);