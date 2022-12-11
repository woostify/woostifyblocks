import "jquery";
declare global {
	var grecaptcha: any | undefined;
	var wcbGlobalVariables: {
		media__tabletMinWidth: string;
		media__desktopMinWidth: string;
		media_tablet: string;
		media_desktop: string;
		reCAPTCHA_site_key?: string;
		reCAPTCHA_secret_key?: string;
		defaultContentWidth?: string;
	};
	var wcbFrontendAjaxObject: {
		ajaxurl: string;
		homeUrl: string;
	};
}

export const DEMO_WCB_GLOBAL_VARIABLES: typeof window.wcbGlobalVariables =
	window.wcbGlobalVariables || {
		media__desktopMinWidth: "1024px",
		media__tabletMinWidth: "768px",
		media_tablet: "768px",
		media_desktop: "1024px",
		reCAPTCHA_site_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
		reCAPTCHA_secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
		defaultContentWidth: "1140px",
	};

// ----------------
export default null;
