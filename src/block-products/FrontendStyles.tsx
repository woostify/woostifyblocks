import { WcbAttrsForSave } from "./Save";
import { ScrollSnapSlider } from "scroll-snap-slider";

interface Props extends WcbAttrsForSave {}

export function initCarouselForWcbProducts(div: Element, props: Props) {
	const id = div.id;

	const sliderMultiElement = document.querySelector(
		".scroll-snap-slider.-multi"
	);
	const sliderMulti = new ScrollSnapSlider(sliderMultiElement);

	const prev = document.querySelector(".indicators.-multi .arrow.-prev");
	const next = document.querySelector(".indicators.-multi .arrow.-next");

	console.log(11, { sliderMulti, prev, next });

	const updateArrows = function () {
		prev.classList.toggle("-disabled", sliderMultiElement.scrollLeft === 0);
		next.classList.toggle(
			"-disabled",
			sliderMultiElement.scrollLeft + sliderMultiElement.offsetWidth ===
				sliderMultiElement.scrollWidth
		);
	};

	prev.addEventListener("click", function () {
		console.log(222);

		sliderMulti.slideTo(sliderMulti.slide - 1);
	});

	next.addEventListener("click", function () {
		sliderMulti.slideTo(sliderMulti.slide + 1);
	});

	sliderMulti.addEventListener("slide-pass", updateArrows);
	sliderMulti.addEventListener("slide-stop", updateArrows);
}
