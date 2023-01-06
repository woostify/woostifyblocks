import "jquery";

declare global {
	var wp: any | undefined;
	var grecaptcha: any | undefined;
	var wcbGlobalVariables: {
		media_tablet: string;
		media_desktop: string;
		reCAPTCHA_v3_site_key?: string;
		reCAPTCHA_v3_secret_key?: string;
		reCAPTCHA_v2_site_key?: string;
		reCAPTCHA_v2_secret_key?: string;
		defaultContentWidth?: string;
		enableTemplatesButton?: "true" | "false";
		enableCopyPasteStyles?: "true" | "false";
		// containerElementsGap?: string;
	};
	var wcbFrontendAjaxObject: {
		ajaxurl: string;
		homeUrl: string;
	};
}

const INIT_WCB_GLOBAL_VARIABLES: typeof window.wcbGlobalVariables = {
	media_tablet: "768px",
	media_desktop: "1024px",
	reCAPTCHA_v3_secret_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
	reCAPTCHA_v3_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
	reCAPTCHA_v2_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
	reCAPTCHA_v2_secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
	defaultContentWidth: "1140px",
	enableTemplatesButton: "true",
	enableCopyPasteStyles: "false",
};

export const DEMO_WCB_GLOBAL_VARIABLES = {
	...INIT_WCB_GLOBAL_VARIABLES,
	...(window.wcbGlobalVariables || {}),
};
