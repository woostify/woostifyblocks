// @ts-nocheck

import { CustomPlugin } from "./MyScrollSnapSlider";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

export function initCarouselForWcbProducts(div: Element, props: Props) {
	const handleCarouselForWcbProducts = () => {
		const sliderMultiElement = document.querySelector(
			`.${div.id} .scroll-snap-slider.-multi`
		);
		if (
			!sliderMultiElement ||
			sliderMultiElement.classList.contains("swithToScrollSnapX--None")
		) {
			return;
		}

		const sliderMulti = new CustomPlugin(sliderMultiElement);
		const arrows = document.querySelector(`.${div.id} .indicators.-multi`);
		const prev = document.querySelector(
			`.${div.id} .indicators.-multi .p-arrow.-prev`
		);
		const next = document.querySelector(
			`.${div.id} .indicators.-multi .p-arrow.-next`
		);

		const updateArrows = function () {
			prev?.classList.toggle("-disabled", sliderMultiElement.scrollLeft === 0);
			next?.classList.toggle(
				"-disabled",
				sliderMultiElement.scrollLeft + sliderMultiElement.offsetWidth ===
					sliderMultiElement.scrollWidth
			);
			arrows?.classList.toggle(
				"-hidden",
				sliderMultiElement.scrollWidth <= sliderMultiElement.clientWidth
			);
		};

		prev?.addEventListener("click", function (event) {
			const prevI = (sliderMulti.slide || 1) - 1;
			sliderMulti.slideTo(prevI);
		});

		next?.addEventListener("click", function () {
			const nextI = (sliderMulti.slide || 0) + 1;
			sliderMulti.slideTo(nextI);
		});

		sliderMulti.addEventListener("slide-pass", updateArrows);
		sliderMulti.addEventListener("slide-stop", updateArrows);

		//
		sliderMulti.slideTo(0);
		window.addEventListener("resize", updateArrows);
		updateArrows();
	};

	//
	const domObserver = new MutationObserver(() => {
		if (
			document.querySelector(
				`[data-block-products-uniqueId=${div.getAttribute("data-uniqueid")}]`
			)
		) {
			domObserver.disconnect();
			setTimeout(() => {
				handleCarouselForWcbProducts();
			}, 500);
		}
	});

	domObserver.observe(document.body || document, {
		childList: true,
		subtree: true,
	});
	//
}
