import React, { FC } from "react";
import ReactDOM from "react-dom";
import { WcbAttrsForSave } from "./Save";
import GlobalCss from "./GlobalCss";

interface Props extends WcbAttrsForSave {}

const FrontendStyles: FC<Props> = (attrs) => {
	return <GlobalCss {...attrs} />;
};

//
const divsToUpdate = document.querySelectorAll(".wcb-faq__wrap.wcb-update-div");
divsToUpdate.forEach((div) => {
	const preEl = div.querySelector(
		`pre[data-wcb-block-attrs=${div.id}]`
	) as HTMLElement | null;

	const divRenderCssEl = div.querySelector(
		`div[data-wcb-global-styles=${div.id}]`
	) as HTMLElement | null;

	if (!preEl || !preEl.innerText || !divRenderCssEl) {
		return;
	}
	//
	const props = JSON.parse(preEl?.innerText);
	//
	// Handle when submit this Form

	initCarousel(div.id, props);
	//
	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
	//
	div.classList.remove("wcb-update-div");
	preEl.remove();
});

//
// --------------------------- FORM AJAX
function initCarousel(id: string, props: Props) {
	let $ = jQuery;
	if (typeof jQuery !== "function") {
		return;
	}
	if (props?.general_general?.layout === "grid") {
		return;
	}
	//
	const carouselBtn = $(`#${id} .wcb-faq-child__question`);
	carouselBtn.on("click", function () {
		// TOOGLE CAROUSEL
		const parent = $(this).parent();
		parent.toggleClass("active");
		const answer = parent.children(".wcb-faq-child__answer");
		answer.slideToggle();
	});
}
