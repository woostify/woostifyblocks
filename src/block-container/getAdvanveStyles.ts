import { MyResponsiveConditionControlData } from "../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl";
import { MyZIndexControlData } from "../components/controls/MyZIndexControl/MyZIndexControl";
import { css } from "@emotion/react";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import checkResponsiveValueForOptimizeCSS from "../utils/checkResponsiveValueForOptimizeCSS";
import { MyMotionEffectData } from "../components/controls/MyMotionEffectControl/MyMotionEffectControl";

interface Params {
	advance_motionEffect?: MyMotionEffectData;
	advance_zIndex: MyZIndexControlData;
	advance_responsiveCondition: MyResponsiveConditionControlData;
	className: string;
	defaultDisplay?: React.CSSProperties["display"];
}

export const getAdvanveDivWrapStyles = ({
	advance_motionEffect,
	advance_zIndex,
	advance_responsiveCondition,
	className,
	defaultDisplay,
}: Params) => {
	const { media_desktop, media_tablet } = DEMO_WCB_GLOBAL_VARIABLES;
	//
	//
	try {
		const thisEL = document.querySelector(className);
		if (
			advance_motionEffect &&
			advance_motionEffect.entranceAnimation &&
			thisEL
		) {
			console.log(222, { thisEL });

			// remove old class
			const regex = /\banimate__\S+/g;
			const classRemoved = thisEL?.className.replace(regex, "");
			thisEL.setAttribute("class", classRemoved);

			// add new class
			setTimeout(() => {
				thisEL?.classList.add(
					"animate__animated",
					`animate__${advance_motionEffect?.entranceAnimation}`,
					`animate__${advance_motionEffect?.animationDuration}`,
					`animate__delay-${advance_motionEffect?.animationDelay}ms`,
					`animate__repeat-${advance_motionEffect?.repeat}`
				);
			}, 50);
		}
	} catch (error) {
		console.log(123, "error, advance_motionEffect", error);
	}

	const {
		mobile_v: zIndexMobile,
		tablet_v: zIndexTablet,
		desktop_v: zIndexDesktop,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v:
			advance_zIndex.Mobile || advance_zIndex.Tablet || advance_zIndex.Desktop,
		tablet_v: advance_zIndex.Tablet || advance_zIndex.Desktop,
		desktop_v: advance_zIndex.Desktop,
	});
	//

	const {
		mobile_v: isHiddenOnMobile,
		tablet_v: isHiddenOnTablet,
		desktop_v: isHiddenOnDesktop,
	} = checkResponsiveValueForOptimizeCSS({
		mobile_v: advance_responsiveCondition.isHiddenOnMobile,
		tablet_v: advance_responsiveCondition.isHiddenOnTablet,
		desktop_v: advance_responsiveCondition.isHiddenOnDesktop,
	});

	return css`
		${className} {
			display: ${isHiddenOnMobile ? "none" : defaultDisplay};
			visibility: visible;
			z-index: ${zIndexMobile};
			@media (min-width: ${media_tablet}) {
				z-index: ${zIndexTablet};
				display: ${isHiddenOnTablet !== ""
					? isHiddenOnTablet
						? "none"
						: defaultDisplay
					: ""};
			}
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				display: ${isHiddenOnDesktop !== ""
					? isHiddenOnDesktop
						? "none"
						: defaultDisplay
					: ""};
			}
		}
	`;
};
