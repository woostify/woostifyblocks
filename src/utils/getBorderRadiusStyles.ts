import { css, CSSObject } from "@emotion/react";
import { HasResponsive } from "../components/controls/MyBackgroundControl/types";
import { BorderRadiusSettings } from "../components/controls/MyBorderControl/types";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import getValueFromAttrsResponsives from "./getValueFromAttrsResponsives";
import checkResponsiveValueForOptimizeCSS from "./checkResponsiveValueForOptimizeCSS";

interface Params {
    radius: HasResponsive<BorderRadiusSettings>;
    className: string;
	isWithIframe?: boolean;
}

const getBorderRadiusStyles = ({ className, radius, isWithIframe = false }: Params): CSSObject => {
    const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;

    let {
        value_Desktop: radiusDesktop,
        value_Tablet: radiusTablet,
        value_Mobile: radiusMobile,
    } = getValueFromAttrsResponsives(radius);

    const converttted = (radiusValue?: BorderRadiusSettings | null) => {
        let newradiusValue = radiusValue;
        if (typeof radiusValue === "string") {
            newradiusValue = {
                bottomLeft: radiusValue,
                bottomRight: radiusValue,
                topLeft: radiusValue,
                topRight: radiusValue,
            };
        } else {
            newradiusValue = {
                bottomLeft: radiusValue?.bottomLeft,
                bottomRight: radiusValue?.bottomRight,
                topLeft: radiusValue?.topLeft,
                topRight: radiusValue?.topRight,
            };
        }

        return newradiusValue;
    };

    radiusDesktop = converttted(radiusDesktop);
    radiusTablet = converttted(radiusTablet);
    radiusMobile = converttted(radiusMobile);

    const {
        mobile_v: mobile_v_topLeft,
        tablet_v: tablet_v_topLeft,
        desktop_v: desktop_v_topLeft,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.topLeft,
        tablet_v: radiusTablet?.topLeft,
        desktop_v: radiusDesktop?.topLeft,
    });
    const {
        mobile_v: mobile_v_topRight,
        tablet_v: tablet_v_topRight,
        desktop_v: desktop_v_topRight,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.topRight,
        tablet_v: radiusTablet?.topRight,
        desktop_v: radiusDesktop?.topRight,
    });
    const {
        mobile_v: mobile_v_bottomRight,
        tablet_v: tablet_v_bottomRight,
        desktop_v: desktop_v_bottomRight,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.bottomRight,
        tablet_v: radiusTablet?.bottomRight,
        desktop_v: radiusDesktop?.bottomRight,
    });
    const {
        mobile_v: mobile_v_bottomLeft,
        tablet_v: tablet_v_bottomLeft,
        desktop_v: desktop_v_bottomLeft,
    } = checkResponsiveValueForOptimizeCSS({
        mobile_v: radiusMobile?.bottomLeft,
        tablet_v: radiusTablet?.bottomLeft,
        desktop_v: radiusDesktop?.bottomLeft,
    });

    // Check if className is for iframe
    const applyImportant = isWithIframe ? "!important" : "";

    return {
        [`${className}`]: {
            borderTopLeftRadius: `${mobile_v_topLeft} ${applyImportant}`,
            borderTopRightRadius: `${mobile_v_topRight} ${applyImportant}`,
            borderBottomRightRadius: `${mobile_v_bottomRight} ${applyImportant}`,
            borderBottomLeftRadius: `${mobile_v_bottomLeft} ${applyImportant}`,

            [`@media (min-width: ${media_tablet})`]:
                tablet_v_topLeft ||
                tablet_v_topRight ||
                tablet_v_bottomRight ||
                tablet_v_bottomLeft
                    ? {
                          borderTopLeftRadius: `${tablet_v_topLeft} ${applyImportant}`,
                          borderTopRightRadius: `${tablet_v_topRight} ${applyImportant}`,
                          borderBottomRightRadius: `${tablet_v_bottomRight} ${applyImportant}`,
                          borderBottomLeftRadius: `${tablet_v_bottomLeft} ${applyImportant}`,
                      }
                    : null,
            [`@media (min-width: ${media_desktop})`]:
                desktop_v_topLeft ||
                desktop_v_topRight ||
                desktop_v_bottomRight ||
                desktop_v_bottomLeft
                    ? {
                          borderTopLeftRadius: `${desktop_v_topLeft} ${applyImportant}`,
                          borderTopRightRadius: `${desktop_v_topRight} ${applyImportant}`,
                          borderBottomRightRadius: `${desktop_v_bottomRight} ${applyImportant}`,
                          borderBottomLeftRadius: `${desktop_v_bottomLeft} ${applyImportant}`,
                      }
                    : null,
        },
    };
};

export default getBorderRadiusStyles;