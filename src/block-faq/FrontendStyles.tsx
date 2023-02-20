import { WcbAttrsForSave } from "./Save";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

interface Props extends WcbAttrsForSave {}

// const divsToUpdate = document.querySelectorAll(".wcb-faq__wrap.wcb-update-div");
// divsToUpdate.forEach((div) => {
// 	const preEl = div.querySelector(
// 		`pre[data-wcb-block-attrs=${div.id}]`
// 	) as HTMLElement | null;
// 	const divRenderCssEl = div.querySelector(
// 		`div[data-wcb-global-styles=${div.id}]`
// 	) as HTMLElement | null;
// 	if (!preEl || !preEl.innerText || !divRenderCssEl) {
// 		return;
// 	}
// 	//
// 	const props = JSON.parse(preEl?.innerText);
// 	initCarousel(div.id, props);

// 	//
// 	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
// 	//
// 	div.classList.remove("wcb-update-div");
// 	preEl.remove();
// });

//
// --------------------------- FORM AJAX
export function initCarouselForWcbFaq(
	div: Element,
	{ general_general }: Props
) {
	const id = div.id;

	const container = "#" + id + "> .accordion-container";

	if (!container || general_general.layout !== "accordion") {
		return;
	}

	new Accordion(container, {
		duration: 400,
		showMultiple: general_general?.showMultiple,
		openOnInit: !general_general.collapseOtherItems
			? [...Array(99).keys()]
			: general_general?.expandFirstItem
			? [0]
			: [],
		activeClass: "active",
	});
}
