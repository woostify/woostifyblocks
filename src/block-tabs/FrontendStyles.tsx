import { WcbAttrsForSave } from "./Save";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

interface Props extends WcbAttrsForSave {}

// --------------------------- FORM AJAX

// https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery

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

// Handle event click tabs
export function initTabsForWcbTabs(div: Element, props: Props) {
    const handleTabsForWcbTabs = () => {
        const dataUniqueid = div.getAttribute("data-uniqueid") || "";

        const tabWrap = document.querySelector(
            `.wcb-tabs__wrap[data-uniqueid="${dataUniqueid}"]`
        ) as HTMLElement;
        if (!tabWrap) {
            console.warn("No .wcb-tabs__wrap element found for uniqueid:", dataUniqueid);
            return;
        }

        const titles = tabWrap.querySelectorAll(".wcb-tabs__title_inner");
        const contents = tabWrap.querySelectorAll(".wcb-tab-child__wrap");

        if (!titles.length || !contents.length) {
            console.warn("Tabs block: No titles or contents found.");
            return;
        }

        // Init status origin: show tab 1
        contents.forEach((content, index) => {
            content.setAttribute("role", "tabpanel");
            if (index !== 0) {
                content.setAttribute("hidden", "");
            } else {
                content.removeAttribute("hidden");
                titles[0].classList.add("active");
            }
        });

        titles.forEach((title, index) => {
            title.addEventListener("click", () => {
                const tabIndex = title.getAttribute("data-tab-index") !== null
                    ? parseInt(title.getAttribute("data-tab-index") || "")
                    : index;

                if (isNaN(tabIndex) || !contents[tabIndex]) {
                    console.warn("Tabs block: Invalid tab index or content not found.");
                    return;
                }

                // Remove selected classes from all tabs and icons
                titles.forEach((t) => {
                    t.classList.remove("active", "wcb-tabs__title_inner-selected");

                    const icon = t.querySelector(".wcb-tabs__icon");
                    const titleText = t.querySelector(".wcb-tabs__title");

                    icon?.classList.remove("wcb-tabs__icon-selected");
                    titleText?.classList.remove("wcb-tabs__title-selected");
                });

                // Add selected classes to current tab and icon
                title.classList.add("active", "wcb-tabs__title_inner-selected");

                const currentIcon = title.querySelector(".wcb-tabs__icon");
                const currentTitleText = title.querySelector(".wcb-tabs__title");

                currentIcon?.classList.add("wcb-tabs__icon-selected");
                currentTitleText?.classList.add("wcb-tabs__title-selected");

                // Show selected content
                contents.forEach((content) => content.setAttribute("hidden", ""));
                contents[tabIndex].removeAttribute("hidden");
            });
        });

    };

    const domObserver = new MutationObserver(() => {
        if (
            document.querySelector(
                `.wcb-tabs__wrap[data-uniqueid="${div.getAttribute("data-uniqueid")}"]`
            )
        ) {
            domObserver.disconnect();
            setTimeout(() => {
                handleTabsForWcbTabs();
            }, 500);
        }
    });

    domObserver.observe(document.body || document, {
        childList: true,
        subtree: true,
    });
}