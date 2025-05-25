import React, { FC } from "react";
import { Global, CSSObject } from "@emotion/react";
import { getAdvanveDivWrapStyles } from "../block-container/getAdvanveStyles";
import getValueFromAttrsResponsives from "../utils/getValueFromAttrsResponsives";
import getBorderStyles from "../utils/getBorderStyles";
import getBackgroundColorGradientStyles from "../utils/getBackgroundColorGradientStyles";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { WcbAttrsForSave } from "./Save";
import getStyleObjectFromResponsiveAttr from "../utils/getStyleObjectFromResponsiveAttr";
import getTypographyStyles from "../utils/getTypographyStyles";
import getPaddingMarginStyles from "../utils/getPaddingMarginStyles";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";

interface Props extends WcbAttrsForSave {}

const getFlexAlignment = (align: string) => {
    switch (align) {
        case "left":
            return "flex-start";
        case "right":
            return "flex-end";
        case "center":
            return "center";
        default:
            return "flex-start";
    }
};

const GlobalCss: FC<Props> = (attrs) => {
    const {
        uniqueId,
        style_icon,
        general_tabTitle,
        style_container,
        style_body,
        style_title,
        advance_responsiveCondition,
        advance_zIndex,
        advance_motionEffect,
        general_general,
    } = attrs;
    const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

    if (!uniqueId) return null;

    const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
    const TITLE_WRAP_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__titles`;
    const TITLE_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner`;
    const TITLE_CHILD_CLASSNAME_SELECTED = `${WRAP_CLASSNAME} .wcb-tabs__title_inner-selected`;
    const TITLE_CHILD_BUTTON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner_btn`;
    const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title`;
    const TITLE_CLASSNAME_SELECTED = `${WRAP_CLASSNAME} .wcb-tabs__title-selected`;
    const BODY_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tab-child__wrap`;
    const BODY_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tab-child__inner`;
    const ICON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__icon`;
    const ICON_CLASSNAME_SELECTED = `${WRAP_CLASSNAME} .wcb-tabs__icon-selected`;
    const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__contents`;

    const IconSizeConverted: HasResponsive<string> = {
        Desktop: `${getValueFromAttrsResponsives(style_icon.size).value_Desktop}px`,
        Tablet: `${getValueFromAttrsResponsives(style_icon.size).value_Tablet}px`,
        Mobile: `${getValueFromAttrsResponsives(style_icon.size).value_Mobile}px`,
    };

    return (
        <>
            <Global
                styles={[
                    getStyleObjectFromResponsiveAttr({ className: INNER_CLASSNAME, value: style_container.colunmGap, prefix: "columnGap" }),
                    getStyleObjectFromResponsiveAttr({ className: INNER_CLASSNAME, value: style_container.rowGap, prefix: "rowGap" }),
                    { [INNER_CLASSNAME]: { textAlign: general_general.textAlignment } },
                ]}
            />

            {(general_general.layout === "grid" ||
                general_general.style === "verticalStyle1" ||
                general_general.style === "verticalStyle2") && (
                <Global
                    styles={[
                        {
                            [INNER_CLASSNAME]: {
                                display: "grid",
                                gridTemplateColumns: "1fr 3fr",
                                gap: "1rem",
                            },
                        },
                        {
                            [TITLE_WRAP_CLASSNAME]: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                justifyContent: getFlexAlignment(general_tabTitle.tabAlignment),
                            },
                        },
                        {
                            [TITLE_CHILD_CLASSNAME]: {
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                padding: "0.5rem",
                                boxSizing: "border-box",
                                justifyContent: getFlexAlignment(general_tabTitle.textAlignment),
                            },
                        },
                        {
                            [BODY_CLASSNAME]: {
                                margin: "0px",
                                padding: "1rem",
                                boxSizing: "border-box",
                            },
                        },
                        {
                            [TITLE_CHILD_BUTTON_CLASSNAME]: {
                                padding: "0.6rem",
                            },
                        },
                    ]}
                />
            )}

            {(general_general.layout === "accordion" ||
                general_general.style === "horizontalStyle1" ||
                general_general.style === "horizontalStyle3") && (
                <Global
                    styles={[
                        {
                            [TITLE_WRAP_CLASSNAME]: {
                                display: "flex",
                                flexDirection: "row",
                                gap: "0.5rem",
                                justifyContent: getFlexAlignment(general_tabTitle.tabAlignment),
                            },
                            [TITLE_CHILD_CLASSNAME]: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: getFlexAlignment(general_tabTitle.textAlignment),
                            },
                        },
                    ]}
                />
            )}

            {general_general.style === "horizontalStyle2" && (
                <Global
                    styles={[
                        {
                            [TITLE_WRAP_CLASSNAME]: {
                                display: "flex",
                                flexDirection: "row",
                                gap: "0.5rem",
                                justifyContent: getFlexAlignment(general_tabTitle.tabAlignment),
                                borderBottom: "2px solid #d1d5db",
                                marginBottom: "0",
                                background: "#fff",
                            },
                            [TITLE_CHILD_CLASSNAME]: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: getFlexAlignment(general_tabTitle.textAlignment),
                                background: "none",
                                border: "none",
                                borderRadius: "0",
                                marginBottom: "-2px",
                                zIndex: 1,
                            },
                            [TITLE_CHILD_CLASSNAME_SELECTED]: {
                                background: style_title.backgroundColorActive || "#fff",
                                border: "none",
                                borderTop: "2px solid #d1d5db",
                                borderRight: "2px solid #d1d5db",
                                borderLeft: "2px solid #d1d5db",
                                borderRadius: "0",
                                marginBottom: "-2px",
                                zIndex: 2,
                            },
                            [BODY_CLASSNAME]: {
                                border: "1px solid #d1d5db",
                                borderTop: "none",
                                marginTop: "0",
                                padding: "2rem",
                            },
                        },
                    ]}
                />
            )}

            <Global
                styles={[
                    getBackgroundColorGradientStyles({ className: BODY_CLASSNAME, background: style_container.background }),
                    getBorderStyles({ border: style_container.border, className: BODY_CLASSNAME, isWithRadius: true }),
                    getTypographyStyles({ className: TITLE_CLASSNAME, typography: style_title.typography }),
                    getPaddingMarginStyles({ className: TITLE_CLASSNAME, padding: style_title.padding }),
                    {
                        [TITLE_CHILD_CLASSNAME]: {
                            backgroundColor: style_title.backgroundColor,
                        },
                        [TITLE_CLASSNAME]: {
                            color: style_title.color,
                        },
                        [TITLE_CHILD_CLASSNAME_SELECTED]: {
                            backgroundColor: style_title.backgroundColorActive,
                        },
                        [TITLE_CLASSNAME_SELECTED]: {
                            color: style_title.colorActive,
                        },
                    },
                    getTypographyStyles({ className: BODY_CLASSNAME, typography: style_body.typography }),
                    getPaddingMarginStyles({ className: BODY_CLASSNAME, padding: style_body.padding, margin: style_body.margin }),
                    {
                        [BODY_CLASSNAME]: {
                            color: style_body.color,
                            backgroundColor: style_body.backgroundColor,
                            "&:hover": {
                                backgroundColor: style_body.backgroundColorHover,
                            },
                        },
                        [BODY_CHILD_CLASSNAME]: {
                            color: style_body.color,
                            "&:hover": {
                                color: style_body.colorHover,
                            },
                        },
                    },
                ]}
            />
            <Global
                styles={[
                    getStyleObjectFromResponsiveAttr({
                        className: `${ICON_CLASSNAME}, ${ICON_CLASSNAME}:before, ${ICON_CLASSNAME} svg`,
                        value: IconSizeConverted,
                        prefix: "fontSize",
                        prefix_2: "height",
                        prefix_3: "width",
                    }),
                    {
                        [ICON_CLASSNAME]: { color: style_icon.color },
                        [ICON_CLASSNAME_SELECTED]: { color: style_icon.activeColor },
                    },
                ]}
            />
            <Global
                styles={getAdvanveDivWrapStyles({
                    advance_motionEffect,
                    advance_responsiveCondition,
                    advance_zIndex,
                    className: WRAP_CLASSNAME,
                })}
            />
            {/* BORDER TITLE */}
            <Global
                styles={[
                    getBorderStyles({
                        className: TITLE_CHILD_CLASSNAME,
                        border: style_title.border,
                        isWithRadius: true,
                    }),
                    getBorderStyles({
                        className: TITLE_CHILD_CLASSNAME_SELECTED,
                        border: style_title.borderActive,
                        isWithRadius: true,
                    }),
                ]}
            />
            {/* BORDER BODY */}
            <Global
                styles={[
                    getBorderStyles({
                        className: BODY_CLASSNAME,
                        border: style_body.border,
                        isWithRadius: true,
                    }),
                ]}
            />
        </>
    );
};

export default React.memo(GlobalCss);
