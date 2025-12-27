import { initCarouselForWcbSliders } from "./FrontendStyles";
// Ensure slick jQuery plugin and styles are available on frontend
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const equalize = (wrap) => {
	if (!wrap) return;

	// 2) Equalize heights of visible slider item wrappers
	const items = wrap.querySelectorAll(".wcb-slider__item-inner");
	if (!items.length) return;

	items.forEach((el) => {
		el.style.height = "auto";
		el.style.display = "flex";
		el.style.alignItems = "center";
		el.style.justifyContent = "center";
	});

	let maxH = 0;
	items.forEach((el) => {
		maxH = Math.max(maxH, el.offsetHeight || 0);
	});
	items.forEach((el) => {
		el.style.height = `${maxH}px`;
	});
};

const bootstrap = () => {
	const wraps = document.querySelectorAll(".wcb-slider__wrap");
	wraps.forEach((wrap) => {
		// Read attributes JSON saved in markup
		const pre = wrap.querySelector("pre[data-wcb-block-attrs]");
		let props = {};
		try {
			props = pre ? JSON.parse(pre.textContent || "{}") : {};
		} catch (e) {
			props = {};
		}

		// Initialize carousel via existing helper
		try {
			initCarouselForWcbSliders(wrap, props);
		} catch (e) {
			// no-op
		}

		// Equalize once after init
		equalize(wrap);

		// Hook slick lifecycle if jQuery present
		if (window.jQuery) {
			const $wrapItems = window.jQuery(wrap).find(".wcb-slider__wrap-items");
			$wrapItems.on("init setPosition afterChange reInit", () => equalize(wrap));
		}

		// Re-equalize on resize/layout changes
		if ("ResizeObserver" in window) {
			const ro = new ResizeObserver(() => equalize(wrap));
			ro.observe(wrap);
		}
	});
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bootstrap);
} else {
	bootstrap();
}


