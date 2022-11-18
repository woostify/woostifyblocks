import "jquery";
declare global {
	var wcbGlobalVariables: {
		media__tabletMinWidth: string;
		media__desktopMinWidth: string;
		media_tablet: string;
		media_desktop: string;
	};
	var wcbFrontendAjaxObject: {
		ajaxurl: string;
		homeUrl: string;
	};
}

export const DEMO_WCB_GLOBAL_VARIABLES: typeof window.wcbGlobalVariables = {
	media__desktopMinWidth: "1024px",
	media__tabletMinWidth: "768px",
	media_tablet: "768px",
	media_desktop: "1024px",
};

// ----------------
export default null;
