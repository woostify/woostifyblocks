// @ts-nocheck

import { CustomPlugin } from "./MyScrollSnapSlider";
import { WcbAttrsForSave } from "./Save";

interface Props extends WcbAttrsForSave {}

export function initCarouselForWcbProducts(div: Element, props: Props) {
	// 1> Handle Wishlist Click
	const handleWishlistClick = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";
		
		// Sure every block only register listener one time
		if (!(window as any).__wcbWishlistListeners) {
			(window as any).__wcbWishlistListeners = new Set();
		}
		// Avoid attach multi for the same block
		if (!(window as any).__wcbWishlistListeners.has(dataUniqueid)) {
			(window as any).__wcbWishlistListeners.add(dataUniqueid);
			
			document.addEventListener("click", (e) => {
				const target = e.target as HTMLElement;
				const btnBottomRight = target.closest(
					`.${dataUniqueid} .wcb-products__product--wishlistBottomRight--item`
				);
				const btnTopRight = target.closest(
					`.${dataUniqueid} .wcb-products__product--wishlistTopRight--item`
				);

				if (!btnBottomRight && !btnTopRight) return;
				if (btnTopRight) {
					btnTopRight.classList.add("is-in-wishlist");
				}
				if (btnBottomRight) {
					btnBottomRight.classList.add("is-in-wishlist");
				}
			});
		}
	}

	const handleCarouselForWcbProducts = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";

		// Handle Carousel
		const sliderMultiElement = document.querySelector(
			`.${dataUniqueid} .scroll-snap-slider.-multi`
		);
		if (
			!sliderMultiElement ||
			sliderMultiElement.classList.contains("swithToScrollSnapX--None") ||
			!sliderMultiElement.firstElementChild
		) {
			return;
		}

		const sliderMulti = new CustomPlugin({ element: sliderMultiElement });

		const arrows = document.querySelector(
			`.${dataUniqueid} .indicators.-multi`
		);
		const prev = document.querySelector(
			`.${dataUniqueid} .indicators.-multi .p-arrow.-prev`
		);
		const next = document.querySelector(
			`.${dataUniqueid} .indicators.-multi .p-arrow.-next`
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

	// Observe DOM changes to ensure the block is fully loaded
	const domObserver = new MutationObserver(() => {
		if (
			document.querySelector(
				`[data-block-products-uniqueId=${div.getAttribute("data-uniqueid")}]`
			)
		) {
			domObserver.disconnect();
			setTimeout(() => {
				handleWishlistClick();
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
