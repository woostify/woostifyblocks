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

let IS_TOOLBAR_RENDERED = false;
const myInterval = setInterval(() => {
	if (IS_TOOLBAR_RENDERED) {
		clearInterval(myInterval);
		return;
	}

	const modalRoot = document.querySelector(
		`.edit-post-header__toolbar`
	) as HTMLElement | null;

	if (modalRoot) {
		IS_TOOLBAR_RENDERED = true;
		const newDiv = document.createElement("div");
		modalRoot.appendChild(newDiv);
		ReactDOM.render(
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>,
			newDiv
		);
	}
}, 500);

export default App;
