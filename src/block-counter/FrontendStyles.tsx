import React, { FC } from "react";
import { WcbAttrsForSave } from "./Save";
import GlobalCss from "./GlobalCss";

interface Props extends WcbAttrsForSave {}

const FrontendStyles: FC<Props> = (attrs) => {
    return <GlobalCss {...attrs} />;
};

// Animation logic for individual counter element
function animateCounterElement(counterBlock: Element) {
    // Check if already animated to prevent re-animation
    if (counterBlock.getAttribute("data-animated") === "true") {
        return;
    }
    
    // Mark as animated
    counterBlock.setAttribute("data-animated", "true");

    // Target circle, bar, and number wrappers within this specific counter block
    const circleWrappers = counterBlock.querySelectorAll(".wcb-icon-box__progress-circle-wrap");
    const barWrappers = counterBlock.querySelectorAll(".wcb-icon-box__progress-bar-wrap");
    const numberWrappers = counterBlock.querySelectorAll(".wcb-icon-box__number[data-start-number]");

    // Animate circles
    circleWrappers.forEach((wrapper) => {
        const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
        const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
        const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
        const decimalPlaces = parseInt(wrapper.getAttribute("data-decimal-places") || "0");
        const numberPrefix = wrapper.getAttribute("data-number-prefix") || "";
        const numberSuffix = wrapper.getAttribute("data-number-suffix") || "";

        const circle = wrapper.querySelector(".wcb-icon-box__progress-circle") as SVGCircleElement;
        const numberDisplay = wrapper.querySelector(".wcb-icon-box__number") as HTMLElement;

        if (!circle || !numberDisplay) return;

        const radius = 150 - 5 * 2; // Same as in renderProgressCircle
        const circumference = radius * 2 * Math.PI;
        const maxValue = 100;

        if (startNumber === endNumber) {
            const progress = (endNumber / maxValue) * 100;
            const strokeDashoffset = circumference - (progress / 100) * circumference;
            circle.style.strokeDashoffset = strokeDashoffset.toString();
            numberDisplay.innerHTML = `${numberPrefix}${endNumber.toFixed(decimalPlaces)}${numberSuffix}`;
            return;
        }

        let current = startNumber;
        const incrementTime = animationDuration / Math.abs(endNumber - startNumber);

        const updateCircle = () => {
            const progress = ((current - startNumber) / (endNumber - startNumber)) * (endNumber / maxValue) * 100;
            const strokeDashoffset = circumference - (progress / 100) * circumference;

            circle.style.strokeDashoffset = strokeDashoffset.toString();
            numberDisplay.innerHTML = `${numberPrefix}${current.toFixed(decimalPlaces)}${numberSuffix}`;

            if ((startNumber < endNumber && current < endNumber) || 
                (startNumber > endNumber && current > endNumber)) {
                current += startNumber < endNumber ? 1 : -1;
                setTimeout(updateCircle, incrementTime);
            } else {
                numberDisplay.innerHTML = `${numberPrefix}${endNumber.toFixed(decimalPlaces)}${numberSuffix}`;
            }
        };

        updateCircle();
    });

    // Animate bars
    barWrappers.forEach((wrapper) => {
        const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
        const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
        const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
        const numberPrefix = wrapper.getAttribute("data-number-prefix") || "";
        const numberSuffix = wrapper.getAttribute("data-number-suffix") || "";

        const bar = wrapper.querySelector(".wcb-icon-box__progress-bar") as HTMLElement;
        const numberDisplay = wrapper.querySelector(".wcb-icon-box__number") as HTMLElement;
        const numberValue = wrapper.querySelector(".wcb-icon-box__number-value") as HTMLElement;

        if (!bar || !numberDisplay || !numberValue) return;

        numberDisplay.style.marginTop = "12px";
        numberDisplay.style.marginBottom = "12px";

        const maxValue = 100;

        if (startNumber === endNumber) {
            const widthPercentage = (endNumber / maxValue) * 100;
            bar.style.width = `${widthPercentage}%`;
            numberValue.innerHTML = `${endNumber}`;
            return;
        }

        let current = startNumber;
        const incrementTime = animationDuration / Math.abs(endNumber - startNumber);

        const updateBar = () => {
            const progress = ((current - startNumber) / (endNumber - startNumber)) * endNumber;
            const widthPercentage = (progress / maxValue) * 100;

            bar.style.width = `${widthPercentage}%`;
            numberValue.innerHTML = `${Math.round(progress)}`;

            if ((startNumber < endNumber && current < endNumber) || 
                (startNumber > endNumber && current > endNumber)) {
                current += startNumber < endNumber ? 1 : -1;
                setTimeout(updateBar, incrementTime);
            } else {
                bar.style.width = `${(endNumber / maxValue) * 100}%`;
                numberValue.innerHTML = `${Math.round(endNumber)}`;
            }
        };

        numberValue.innerHTML = `${startNumber}`;
        updateBar();
    });

    // Animate numbers
    numberWrappers.forEach((wrapper) => {
        const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
        const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
        const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
        const decimalPlaces = parseInt(wrapper.getAttribute("data-decimal-places") || "0");

        const numberDisplay = wrapper.querySelector(".wcb-icon-box__number-value") as HTMLElement;

        if (!numberDisplay) return;

        if (startNumber === endNumber) {
            numberDisplay.innerHTML = `${endNumber.toFixed(decimalPlaces)}`;
            return;
        }

        let current = startNumber;
        const incrementTime = animationDuration / Math.abs(endNumber - startNumber);

        const updateNumber = () => {
            numberDisplay.innerHTML = `${current.toFixed(decimalPlaces)}`;

            if ((startNumber < endNumber && current < endNumber) || 
                (startNumber > endNumber && current > endNumber)) {
                current += startNumber < endNumber ? 1 : -1;
                setTimeout(updateNumber, incrementTime);
            } else {
                numberDisplay.innerHTML = `${endNumber.toFixed(decimalPlaces)}`;
            }
        };

        updateNumber();
    });
}

// Setup Intersection Observer for scroll trigger
export function animateProgressElements() {
    // Function to initialize when DOM is ready
    const initializeAnimation = () => {
        // Use specific selector for counter blocks
        const counterBlocks = document.querySelectorAll(".wcb-counter-box__wrap:not(.wcb-update-div)");
        
        // Check if IntersectionObserver is supported
        if (!window.IntersectionObserver) {
            counterBlocks.forEach(animateCounterElement);
            return;
        }

        // Create intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounterElement(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
                rootMargin: "0px 0px -100px 0px" // Start 100px before element enters viewport
            }
        );

        // Observe all counter blocks
        counterBlocks.forEach((block) => {
            observer.observe(block);
        });
    };
    
    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initializeAnimation, 100); // Small delay to ensure dynamic content is loaded
        });
    } else {
        setTimeout(initializeAnimation, 100);
    }
}

export default FrontendStyles;
