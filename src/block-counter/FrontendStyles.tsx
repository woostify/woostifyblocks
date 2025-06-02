import React, { FC } from "react";
import ReactDOM from "react-dom";
import { WcbAttrsForSave } from "./Save";
import GlobalCss from "./GlobalCss";

interface Props extends WcbAttrsForSave {}

const FrontendStyles: FC<Props> = (attrs) => {
    return <GlobalCss {...attrs} />;
};

// Animation logic for circle and bar layouts
export function animateProgressElements () {
    // Target all circle and bar wrappers
    const circleWrappers = document.querySelectorAll(".wcb-icon-box__progress-circle-wrap");
    const barWrappers = document.querySelectorAll(".wcb-icon-box__progress-bar-wrap");
	const numberWrappers = document.querySelectorAll(".wcb-icon-box__number");

    // Animate circles
    circleWrappers.forEach((wrapper) => {
        const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
        const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
        const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
        const decimalPlaces = parseInt(wrapper.getAttribute("data-decimal-places") || "0");
        const numberSuffix = wrapper.getAttribute("data-number-suffix") || "";

        const circle = wrapper.querySelector(".wcb-icon-box__progress-circle") as SVGCircleElement;
        const numberDisplay = wrapper.querySelector(".wcb-icon-box__number") as HTMLElement;

        if (!circle || !numberDisplay) return;

        const radius = 150 - 5 * 2; // Same as in renderProgressCircle
        const circumference = radius * 2 * Math.PI;
        const maxValue = 100;

        let current = startNumber;
        const incrementTime = animationDuration / (endNumber - startNumber || 1);

        const updateCircle = () => {
            const progress = ((current - startNumber) / (endNumber - startNumber)) * (endNumber / maxValue) * 100;
            const strokeDashoffset = circumference - (progress / 100) * circumference;

            circle.style.strokeDashoffset = strokeDashoffset.toString();
            numberDisplay.textContent = `${current.toFixed(decimalPlaces)}${numberSuffix}`;

            if (current < endNumber) {
                current += 1;
                setTimeout(updateCircle, incrementTime);
            } else {
                numberDisplay.textContent = `${endNumber.toFixed(decimalPlaces)}${numberSuffix}`;
            }
        };

        if (startNumber !== endNumber) {
            updateCircle();
        }
    });

    // Animate bars
    barWrappers.forEach((wrapper) => {
        const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
        const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
        const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");

        const bar = wrapper.querySelector(".wcb-icon-box__progress-bar") as HTMLElement;
        const numberDisplay = wrapper.querySelector(".wcb-icon-box__number") as HTMLElement;
        const numberValue = wrapper.querySelector(".wcb-icon-box__number-value") as HTMLElement;

        if (!bar || !numberDisplay || !numberValue) return;

        numberDisplay.style.marginTop = "12px"
        numberDisplay.style.marginBottom = "12px"

        const maxValue = 100;
        let current = startNumber;
        const incrementTime = animationDuration / (endNumber - startNumber || 1);

        const updateBar = () => {
            const progress = ((current - startNumber) / (endNumber - startNumber)) * endNumber;
            const widthPercentage = (progress / maxValue) * 100;

            bar.style.width = `${widthPercentage}%`;
            numberValue.textContent = `${Math.round(progress)}`;

            if (current < endNumber) {
                current += 1;
                setTimeout(updateBar, incrementTime);
            } else {
                bar.style.width = `${(endNumber / maxValue) * 100}%`;
                numberValue.textContent = `${Math.round(endNumber)}`;
            }
        };

        if (startNumber !== endNumber) {
            numberValue.textContent = `${startNumber}`;
            updateBar();
        }
    });

	// Animate numbers
    numberWrappers.forEach((wrapper) => {
        const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
        const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
        const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
        const decimalPlaces = parseInt(wrapper.getAttribute("data-decimal-places") || "0");

        const numberDisplay = wrapper.querySelector(".wcb-icon-box__number-value") as HTMLElement;

        if (!numberDisplay) return;

        let current = startNumber;
        const incrementTime = animationDuration / (endNumber - startNumber || 1);

        const updateNumber = () => {
            numberDisplay.textContent = `${current.toFixed(decimalPlaces)}`;

            if (current < endNumber) {
                current += 1;
                setTimeout(updateNumber, incrementTime);
            } else {
                numberDisplay.textContent = `${endNumber.toFixed(decimalPlaces)}`;
            }
        };

        if (startNumber !== endNumber) {
            updateNumber();
        }
    });
};

// Run the animation logic after the DOM is updated
const divsToUpdate = document.querySelectorAll(".wcb-counter-box__wrap.wcb-update-div");
divsToUpdate.forEach((div) => {
    const preEl = div.querySelector(`pre[data-wcb-block-attrs=${div.id}]`) as HTMLElement | null;
    const divRenderCssEl = div.querySelector(`div[data-wcb-global-styles=${div.id}]`) as HTMLElement | null;

    if (!preEl || !preEl.innerText || !divRenderCssEl) {
        return;
    }

    const props = JSON.parse(preEl?.innerText);
    ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);

    // Run animation after rendering
    animateProgressElements();

    div.classList.remove("wcb-update-div");
    preEl.remove();
});