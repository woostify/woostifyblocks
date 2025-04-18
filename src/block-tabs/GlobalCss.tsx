import { Global, CSSObject } from "@emotion/react";
import React, { FC } from "react";
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

    const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
    const TITLE_WRAP_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__titles`;
    const TITLE_CHILD_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner`;
	const TITLE_CHILD_BUTTON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title_inner_btn`;
    const TITLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__title`;
    const BODY_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tab-child__wrap`;
    const ICON_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__icon`;
    const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-tabs__contents`;

    const IconSizeConverted: HasResponsive<string> = {
        Desktop: `${getValueFromAttrsResponsives(style_icon.size).value_Desktop}px`,
        Tablet: `${getValueFromAttrsResponsives(style_icon.size).value_Tablet}px`,
        Mobile: `${getValueFromAttrsResponsives(style_icon.size).value_Mobile}px`,
    };

    const inner_getGridCol = (): CSSObject => {
        const { value_Desktop, value_Tablet, value_Mobile } = getValueFromAttrsResponsives(general_general.columns);
        return {
            [`${INNER_CLASSNAME}`]: {
                gridTemplateColumns: `repeat(${value_Mobile}, minmax(0, 1fr))`,
                [`@media (min-width: ${media_tablet})`]: { gridTemplateColumns: `repeat(${value_Tablet}, minmax(0, 1fr))` },
                [`@media (min-width: ${media_desktop})`]: { gridTemplateColumns: `repeat(${value_Desktop}, minmax(0, 1fr))` },
            },
        };
    };

    if (!uniqueId) return null;

    return (
        <>
            <Global
                styles={[
                    getStyleObjectFromResponsiveAttr({ className: INNER_CLASSNAME, value: style_container.colunmGap, prefix: "columnGap" }),
                    getStyleObjectFromResponsiveAttr({ className: INNER_CLASSNAME, value: style_container.rowGap, prefix: "rowGap" }),
                    { [INNER_CLASSNAME]: { textAlign: general_general.textAlignment } },
                ]}
            />
            {general_general.layout === "grid" && (
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
                            },
                        },
                        {
                            [TITLE_CHILD_CLASSNAME]: {
                                width: "100%",
                                padding: "0.5rem",
                                boxSizing: "border-box",
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
								padding: "0.6rem"
							}
						}
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
                        [TITLE_CLASSNAME]: {
                            color: style_title.color,
                            backgroundColor: style_title.backgroundColor,
                            ":hover, :focus, :active": { color: style_title.colorHover, backgroundColor: style_title.backgroundColorHover },
                        },
                        [`${WRAP_CLASSNAME} .wcb-tabs__title_inner.active .wcb-tabs__title`]: {
                            color: style_title.colorHover,
                            backgroundColor: style_title.backgroundColorHover,
                        },
                    },
                    getTypographyStyles({ className: BODY_CLASSNAME, typography: style_body.typography }),
                    getPaddingMarginStyles({ className: BODY_CLASSNAME, padding: style_body.padding }),
                    { [BODY_CLASSNAME]: { color: style_body.color, backgroundColor: style_body.backgroundColor } },
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
                        [`${WRAP_CLASSNAME} .wcb-tabs__title_inner.active .wcb-tabs__icon`]: { color: style_icon.activeColor },
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
        </>
    );
};

export default React.memo(GlobalCss);
