import React, { FC } from "react";
import * as ReactDOM from "react-dom";
import "./editor.scss";

const App = () => {
	return <div>Test</div>;
};

const preEl = document.querySelector(
	`#wcb-dasboard-root`
) as HTMLElement | null;

if (preEl) {
	ReactDOM.render(<App />, preEl);
}
