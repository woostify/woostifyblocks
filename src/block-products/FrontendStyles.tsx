// @ts-nocheck

import { CustomPlugin } from "./MyScrollSnapSlider";
import { WcbAttrsForSave } from "./Save";
import { getThemeDefaults } from "../utils/themeDefaults";

interface Props extends WcbAttrsForSave {}

/**
 * Initialize carousel for WCB Products block
 * 
 * @param div div element of the block
 * @param props peoperties of the block
 */
export function initCarouselForWcbProducts(div: Element, props: Props) {
	// 1. Handle Wishlist Click
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

	// 2. Handle add style hidden for add to cart button
	const handleAddToCartStyleHidden = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";

		// Only attach listener 1 time / block
		if (!(window as any).__wcbAddToCartLayout2Listeners) {
			(window as any).__wcbAddToCartLayout2Listeners = new Set();
		}
		if ((window as any).__wcbAddToCartLayout2Listeners.has(dataUniqueid)) return;
		(window as any).__wcbAddToCartLayout2Listeners.add(dataUniqueid);

		document.addEventListener("click", (e) => {
			const theme = getThemeDefaults();
			const addToCartBtn = theme?.shop_archive_add_to_cart_btn;

			const target = e.target as HTMLElement;

			// Find button add-to-cart depence on block
			const btnLayoutInsiteImage = target.closest(
				`.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`
			) as HTMLElement | null;

			if (!btnLayoutInsiteImage) return;

			switch (addToCartBtn?.position) {
				case 'bottom-visible':
					btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
					break;
				case 'inside image':
					setTimeout(() => {
						btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
					}, 200);
					break;
				case 'bottom':
					setTimeout(() => {
						btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
					}, 500);
					break;
				case 'icon':
					// Do nothing
					break;
				default:
					// Do nothing
					break;
			}

			// 2. Show view cart trong cùng block
			const parent = btnLayoutInsiteImage.closest(
				`.${dataUniqueid} .wcb-products__product-add-to-cart`
			) as HTMLElement | null;
			if (!parent) return;

			const viewCart = parent.querySelector(".added_to_cart") as HTMLElement | null;
			if (viewCart) {
				viewCart.classList.add("visible");
			}
		});
	};

	/**
	 * Check button add to cart is loading state
	 * 
	 * @param buttonEl HTMLButtonElement
	 * @returns boolean
	 */
	const checkIsLoadingAddToCart = (buttonEl: HTMLElement): boolean => {
		if (!buttonEl) return false;

		const label = buttonEl.querySelector(".wcb-products__add-to-cart-label");
		const text = label?.innerText?.trim();
		
		return text === "Add to cart";
	}

	/**
	 * Check button add to cart has class ajax_add_to_cart
	 * 
	 * @param buttonEl HTMLButtonElement
	 * @returns boolean
	 */
	const hasAjaxAddToCartClass = (buttonEl): boolean => {
		if (!buttonEl) return false;
		return buttonEl.classList.contains("ajax_add_to_cart");
	};

	// 3. Handle add style is loading for add to cart button
	const handleAddToCartIsLoading = () => {
		const dataUniqueid = div.getAttribute("data-uniqueid") || "";

		// Only attach listener 1 time / block
		if (!(window as any).__wcbAddToCartIsLoadingListeners) {
			(window as any).__wcbAddToCartIsLoadingListeners = new Set();
		}
		if ((window as any).__wcbAddToCartIsLoadingListeners.has(dataUniqueid)) return;
		(window as any).__wcbAddToCartIsLoadingListeners.add(dataUniqueid);

		document.addEventListener("click", (e) => {
			const theme = getThemeDefaults();
			const addToCartBtn = theme?.shop_archive_add_to_cart_btn;
			const target = e.target as HTMLElement;

			// Find button add-to-cart depence on block
			const btnLayoutBottomVisible = target.closest(
				// `.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`
				`.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`
			) as HTMLElement | null;

			const btnLayoutTopRightIcon = target.closest(
				`.${dataUniqueid} .wcb-products__product--btnIconAddToCart--item`
			) as HTMLElement | null;

			// 1. Add className loading
			if (btnLayoutBottomVisible || btnLayoutTopRightIcon) {
			
				switch (addToCartBtn?.position) {
					case 'bottom-visible':
						if (checkIsLoadingAddToCart(btnLayoutBottomVisible)){
							btnLayoutBottomVisible.classList.add("add_to_cart_button--loading");
						}
						break;
					case 'inside image':
						if (checkIsLoadingAddToCart(btnLayoutBottomVisible)){
							btnLayoutBottomVisible?.classList.add("add_to_cart_button__insite-image--loading");
						}
						break;
					case 'bottom':
						if (checkIsLoadingAddToCart(btnLayoutBottomVisible)){
							const iconWrapper = btnLayoutBottomVisible.querySelector('.wcb-products__add-to-cart-icon');
							// Delete SVG if have
							if (iconWrapper) {
								const svg = iconWrapper.querySelector("svg");
								if (svg) {
									svg.remove();
								}
								iconWrapper.classList.add("add_to_cart_button__style-bottom-visible--loading");
							}
						}
						break;
					case 'icon':
						// Do nothing
						if (hasAjaxAddToCartClass(btnLayoutTopRightIcon)) {
							btnLayoutTopRightIcon?.classList.add("add_to_cart_button--loading");
						}
						break;
					default:
						// Do nothing
						break;
				}
				
				if (btnLayoutBottomVisible) {
					// 2. Show view cart trong cùng block
					const parent = btnLayoutBottomVisible.closest(
						`.${dataUniqueid} .wcb-products__product-add-to-cart`
					) as HTMLElement | null;
					if (!parent) return;

					const viewCart = parent.querySelector(".added_to_cart") as HTMLElement | null;
					if (viewCart) {
						viewCart.classList.add("visible");
					}
				}

				if (btnLayoutTopRightIcon) {
					// 2. Show view cart trong cùng block
					const parent = btnLayoutTopRightIcon.closest(
						`.${dataUniqueid} .wcb-products__product--topRight`
					) as HTMLElement | null;
					if (!parent) return;

					const viewCart = parent.querySelector(".added_to_cart") as HTMLElement | null;
					if (viewCart) {
						viewCart.classList.add("visible");
					}
				}

				// Delay 500ms
				setTimeout(() => {
					if (btnLayoutBottomVisible) {
						btnLayoutBottomVisible.classList.remove("add_to_cart_button--loading");
					    btnLayoutBottomVisible.classList.remove("add_to_cart_button__style-bottom-visible--loading");
						btnLayoutBottomVisible.classList.remove("add_to_cart_button__insite-image--loading");
					} 
					if (btnLayoutTopRightIcon) {
						btnLayoutTopRightIcon.classList.remove("add_to_cart_button--loading");
					}
				}, 500);
			}
		});
	};

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
				handleAddToCartStyleHidden();
				handleAddToCartIsLoading();
			}, 500);
		}
	});

	domObserver.observe(document.body || document, {
		childList: true,
		subtree: true,
	});
	//
}
