import React from "react";
import * as ReactDOM from "react-dom";
import "./editor.scss";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
	useQuery,
} from "@apollo/client";
import HeaderToolBarPatterns from "./HeaderToolBarPatterns";

const client = new ApolloClient({
	uri: "https://woostifyblocks.com/graphql",
	cache: new InMemoryCache(),
});

const App = () => {
	if (wcbGlobalVariables?.enableTemplatesButton === "false") {
		return null;
	}
	return (
		<>
			<HeaderToolBarPatterns />
		</>
	);
};

// let IS_TOOLBAR_RENDERED = false;
// const myInterval = setInterval(() => {
// 	if (IS_TOOLBAR_RENDERED) {
// 		clearInterval(myInterval);
// 		return;
// 	}

// 	const modalRoot = document.querySelector(
// 		".edit-post-header__toolbar .edit-post-header-toolbar"
// 	) as HTMLElement | null;
// 	const wpAnchorDiv = document.querySelector(
// 		".edit-post-header__toolbar .edit-post-header-toolbar__left .edit-post-header-toolbar__inserter-toggle"
// 	) as HTMLElement | null;

// 	console.log("____wcb_toolbar_patterns", { modalRoot, wpAnchorDiv });

// 	if (modalRoot && !modalRoot.id && wpAnchorDiv && !wpAnchorDiv.id) {
// 		IS_TOOLBAR_RENDERED = true;
// 		if (!document.getElementById("wcb-block-templates-button-wrap")) {
// 			let newDiv = document.createElement("div");
// 			newDiv.setAttribute("id", "wcb-block-templates-button-wrap");
// 			modalRoot.appendChild(newDiv);
// 			ReactDOM.render(
// 				<ApolloProvider client={client}>
// 					<App />
// 				</ApolloProvider>,
// 				newDiv
// 			);
// 		}
// 	}
// }, 500);

//

const domObserver = new MutationObserver(() => {
	const modalRoot = document.querySelector(
		".edit-post-header__toolbar .edit-post-header-toolbar"
	);
	const wpAnchorDiv = document.querySelector(
		".edit-post-header__toolbar .edit-post-header-toolbar__left .edit-post-header-toolbar__inserter-toggle"
	);

	if (modalRoot && !modalRoot.id && wpAnchorDiv && !wpAnchorDiv.id) {
		domObserver.disconnect();

		if (!document.getElementById("wcb-block-templates-button-wrap")) {
			let newDiv = document.createElement("div");
			newDiv.setAttribute("id", "wcb-block-templates-button-wrap");
			modalRoot.appendChild(newDiv);
			ReactDOM.render(
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>,
				newDiv
			);
		}
	}
});

domObserver.observe(document.body || document, {
	childList: true,
	subtree: true,
});

//

export default App;
