import { WcbAttrsForSave } from "./Save";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

interface Props extends WcbAttrsForSave {}

// --------------------------- FORM AJAX
export function initCarouselForWcbFaq(
	div: Element,
	{ general_general }: Props
) {
	const collection = div.children;
	for (let i = 0; i < collection.length; i++) {
		const el = collection[i];
		if (el.classList.contains("accordion-container")) {
			handleAccordion(el, general_general);
		}
	}
	//
}

function handleAccordion(
	container: Element,
	general_general: Props["general_general"]
) {
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
