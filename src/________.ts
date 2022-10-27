declare global {
	var wcbGlobalVariables: {
		media__tabletMinWidth: string;
		media__desktopMinWidth: string;
	};
}

export const DEMO_WCB_GLOBAL_VARIABLES: typeof window.wcbGlobalVariables = {
	media__desktopMinWidth: "1024px",
	media__tabletMinWidth: "768px",
};

// ----------------
export default null;
