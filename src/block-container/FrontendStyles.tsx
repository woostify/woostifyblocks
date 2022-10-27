import React, { FC } from "react";
import ReactDOM from "react-dom";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";
import { BlockWCBContainerAttrs } from "./attributes";
import GlobalCss from "./GlobalCss";

interface Props extends BlockWCBContainerAttrs {}

const FrontendStyles: FC<Props> = (attrs) => {
	return <GlobalCss {...attrs} />;
};

//
const divsToUpdate = document.querySelectorAll(
	".wcb-container__wrap.wcb-update-div"
);
divsToUpdate.forEach((div) => {
	const preEl = div.querySelector(
		"pre[data-wcb-block-attrs]"
	) as HTMLPreElement;
	const props = JSON.parse(preEl?.innerText || "");
	ReactDOM.render(
		<FrontendStyles {...props} />,
		div.querySelector("div[data-wcb-global-styles]")
	);
	//
	div.classList.remove("wcb-update-div");
	preEl.innerHTML = "";
});
