import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { initCarouselForWcbFaq } from "../block-faq/FrontendStyles";
import { handleSubmitFormForWcbForm } from "../block-form/FrontendStyles";
import { initCarouselForWcbTestimonials } from "../block-testimonials/FrontendStyles";
import { initCarouselForWcbProducts } from "../block-products/FrontendStyles";
import { initCountDown } from "../block-countdown/FrontendScript";
import { initTabsForWcbTabs } from "../block-tabs/FrontendStyles";
import { animateProgressElements } from "../block-counter/FrontendStyles";

const classes: {
	D: string;
	C: React.LazyExoticComponent<React.NamedExoticComponent<any>>;
	F?: (el: Element, props: any) => void;
}[] = [
	{
		D: ".wcb-button__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-button/GlobalCss")),
	},
	{
		D: ".wcb-buttons__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-buttons/GlobalCss")),
	},
	{
		D: ".wcb-cta__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-cta/GlobalCss")),
	},
	{
		D: ".wcb-products__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-products/GlobalCss")),
		F: initCarouselForWcbProducts,
	},
	{
		D: ".wcb-posts-grid__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-posts-grid/GlobalCss")),
	},
	{
		D: ".wcb-container__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-container/GlobalCss")),
	},
	{
		D: ".wcb-faq__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-faq/GlobalCss")),
		F: initCarouselForWcbFaq,
	},
	{
		D: ".wcb-form__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-form/GlobalCss")),
		F: handleSubmitFormForWcbForm,
	},
	{
		D: ".wcb-heading__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-heading/GlobalCss")),
	},
	{
		D: ".wcb-icon-box__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-icon-box/GlobalCss")),
	},
	{
		D: ".wcb-image__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-image/GlobalCss")),
	},
	{
		D: ".wcb-map__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-map/GlobalCss")),
	},
	{
		D: ".wcb-team__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-team/GlobalCss")),
	},
	{
		D: ".wcb-testimonials__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-testimonials/GlobalCss")),
		F: initCarouselForWcbTestimonials,
	},
	{
		D: ".wcb-countdown__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-countdown/GlobalCss")),
		F: initCountDown,
	},
	{
		D: ".wcb-tabs__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-tabs/GlobalCss")),
		F: initTabsForWcbTabs,
	},
	{
		D: ".wcb-counter-box__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-counter/GlobalCss")),
		F: animateProgressElements,
	},
	{
		D: ".wcb-icon-list__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-icon-list/GlobalCss")),
	},
	{
		D: ".wcb-icon-list__wrap.wcb-update-div[data-block-type='icon-item']",
		C: React.lazy(() => import("../block-icon-child/GlobalCss")),
	},
	{
		D: ".wcb-icon__wrap.wcb-update-div",
		C: React.lazy(() => import("../block-icon/GlobalCss")),
	},
];

classes.forEach(({ D, C, F }) => {
	const divs = document.querySelectorAll(D);

	if (divs && divs.length) {
		renderToDom(divs, C, F);
	}
});

// ---

function renderToDom(
	divsToUpdate: NodeListOf<Element>,
	GlobalCss: React.LazyExoticComponent<React.NamedExoticComponent<any>>,
	funcRunOnEl?: (el: Element, props: any) => void
) {
	divsToUpdate.forEach((div) => {
		const preEl = div.querySelector(
			`pre[data-wcb-block-attrs=${div.getAttribute("data-uniqueid")}]`
		) as HTMLElement | null;

		const divRenderCssEl = div.querySelector(
			`div[data-wcb-global-styles=${div.getAttribute("data-uniqueid")}]`
		) as HTMLElement | null;

		if (!preEl || !preEl.innerText || !divRenderCssEl) {
			return;
		}
		//
		const props = JSON.parse(preEl?.innerText);
		//

		ReactDOM.render(
			<Suspense fallback={<div />}>
				<GlobalCss {...props} />
			</Suspense>,
			divRenderCssEl
		);

		// run function if exits
		funcRunOnEl && funcRunOnEl(div, props);

		//
		div.classList.remove("wcb-update-div");
		preEl.remove();
	});
}
