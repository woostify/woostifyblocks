import { ScrollSnapSlider } from "./ScrollSnapSlider";

export class CustomPlugin extends ScrollSnapSlider {
	/**
	 * Pass any config here
	 * @param {*} config
	 */
	constructor(element, enabled = true, plugins = []) {
		super(element, enabled, plugins);
	}

	/**
	 * Override this if you need multiple instances of the same plugin on the same slider.
	 * By default, the id will be the plugin's class name.
	 * @return {String}
	 */
	get id() {
		return "lubba-wubba-dub-dub";
	}

	/**
	 * Attach listeners, fetch DOM things, save reference to the slider
	 * @param {ScrollSnapSlider} slider
	 * @override
	 */
	enable(slider) {
		// TODO methods stub
	}

	/**
	 * Free resources, remove listeners, ...
	 * @override
	 */
	disable() {
		// TODO methods stub
	}

	sizingMethod = function (slider: ScrollSnapSlider) {
		const childWidth = (slider.element.firstElementChild as HTMLElement)
			?.offsetWidth;
		const numbChild = slider.element.childElementCount;
		const totalWidth = slider.element.scrollWidth;

		const totalGapWidth = totalWidth - numbChild * childWidth;
		const gap = totalGapWidth / (numbChild - 1 || 1);

		return childWidth + gap;
	};
}
