import { WcbAttrs } from "./attributes";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

interface Props extends WcbAttrs {}

// --------------------------- FORM AJAX
export function handleSubmitFormForWcbForm(div: Element, props: Props) {
	// const formId = div.id;
	const dataUniqueid = div.getAttribute("data-uniqueid") || "";

	let $ = jQuery;
	if (typeof jQuery !== "function") {
		return;
	}

	const reCaptchaV2 =
		props.general_gg_recaptcha?.enableReCaptcha &&
		props.general_gg_recaptcha?.version === "v2";
	const reCaptchaV3 =
		props.general_gg_recaptcha?.enableReCaptcha &&
		props.general_gg_recaptcha?.version === "v3";

	if (reCaptchaV2) {
		$(`.${dataUniqueid} .g-recaptcha`).attr(
			"data-sitekey",
			DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v2_site_key || ""
		);
	}

	$("." + dataUniqueid).on("submit", function (event) {
		event.preventDefault();

		// ----------------------------
		const handleAjaxAction = () => {
			let formData = $(this).serializeArray();
			formData = formData.map((item) => {
				const fieldLabel = $(`[data-label-for='${item.name}']`).text();
				return {
					name: fieldLabel,
					value: item.value,
				};
			});

			const mailInfo = {
				subject: props.general_action.subject || "",
				to: props.general_action.main.To.email || "",
				cc: props.general_action.main.CC.email || "",
				bcc: props.general_action.main.BCC.email || "",
			};
			$.ajax({
				type: "post", //Phương thức truyền post hoặc get
				dataType: "json", //Dạng dữ liệu trả về xml, json, script, or html
				url: wcbFrontendAjaxObject.ajaxurl, //Đường dẫn chứa hàm xử lý dữ liệu. Mặc định của WP như vậy
				data: {
					action: "wcbform_action", //Tên action
					formData,
					mailInfo,
				},
				context: this,
				beforeSend: function () {},
				success: function (response) {
					// This is OK code
					console.log(99, "-----------OK", { props, response, formData });
					$(`.${dataUniqueid}` + " .wcb-form__successMessageText").css(
						"display",
						"block"
					);
					$(`.${dataUniqueid}` + " .wcb-form__errorMessageText").css(
						"display",
						"none"
					);
					if (
						props?.general_general?.confirmationType === "url-text" &&
						props?.general_general?.successRedirectUrl
					) {
						window.location.href = props?.general_general?.successRedirectUrl;
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.log(
						"The following error occured: " + textStatus,
						errorThrown
					);
					$(`.${dataUniqueid}` + " .wcb-form__successMessageText").css(
						"display",
						"none"
					);
					$(`.${dataUniqueid}` + " .wcb-form__errorMessageText").css(
						"display",
						"block"
					);
				},
			});
		};

		// ------------------------------------------------------------------------------------
		if (typeof grecaptcha === "object" && reCaptchaV3) {
			grecaptcha.ready(function () {
				grecaptcha
					.execute(DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v3_site_key, {
						action: "submit",
					})
					.then(function (token) {
						console.log(123, {
							token,
							key: DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_v3_site_key,
						});
						handleAjaxAction();
					});
			});
		} else {
			handleAjaxAction();
		}

		return false;
	});
}
