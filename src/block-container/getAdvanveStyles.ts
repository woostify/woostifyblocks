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

// Base overlay for hidden preview
const hiddenPreviewOverlay = css`
	position: relative;

	&:before {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: -o-repeating-linear-gradient(
			325deg,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.05) 1px,
			transparent 2px,
			transparent 9px
		);
		background: repeating-linear-gradient(
			125deg,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.05) 1px,
			transparent 2px,
			transparent 9px
		);
		border: 1px solid rgba(0, 0, 0, 0.02);
		background-color: rgba(255, 255, 255, 0.6);
		z-index: 9997;
	}
`;

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
	// Trigger animation only when in viewport
	try {
		if (advance_motionEffect?.entranceAnimation) {
			const thisELs = document.querySelectorAll(className);

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const element = entry.target as HTMLElement;

							// remove old animation classes
							const regex = /\banimate__\S+/g;
							const classRemoved = element?.className.replace(regex, "");
							element.setAttribute("class", classRemoved);

							// add new animation classes
							setTimeout(() => {
								element?.classList.add(
									"animate__animated",
									`animate__${advance_motionEffect?.entranceAnimation}`,
									`animate__${advance_motionEffect?.animationDuration}`,
									`animate__delay-${advance_motionEffect?.animationDelay}ms`,
									`animate__repeat-${advance_motionEffect?.repeat}`
								);
							}, 50);

							// optional: stop observing after first animation
							observer.unobserve(element);
						}
					});
				},
				{
					threshold: 0.2, // trigger when 20% visible
				}
			);

			thisELs.forEach((el) => observer.observe(el));
		}
	} catch (error) {
		console.log("error, advance_motionEffect", error);
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
		// @ts-ignore
		mobile_v: advance_responsiveCondition.isHiddenOnMobile,
		// @ts-ignore
		tablet_v: advance_responsiveCondition.isHiddenOnTablet,
		// @ts-ignore
		desktop_v: advance_responsiveCondition.isHiddenOnDesktop,
	});

	// Helper
	const getHiddenCss = (isHidden: any) => {
		if (isHidden === "") return "";
		return isHidden ? hiddenPreviewOverlay : css`display: ${defaultDisplay};`;
	};

	return css`
		${className} {
			visibility: visible;
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				${getHiddenCss(advance_responsiveCondition.isHiddenOnDesktop)}
			}

			@media (min-width: ${media_tablet}) and (max-width: ${media_desktop}) {
				z-index: ${zIndexTablet};
				${getHiddenCss(advance_responsiveCondition.isHiddenOnTablet)}
			}

			@media (max-width: ${media_tablet}) {
				z-index: ${zIndexMobile};
				${getHiddenCss(advance_responsiveCondition.isHiddenOnMobile)}
			}
		}
	`;
};
