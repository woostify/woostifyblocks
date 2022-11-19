import React, { FC } from "react";
import ReactDOM from "react-dom";
import { WcbAttrs } from "./attributes";
import GlobalCss from "./GlobalCss";
import { DEMO_WCB_GLOBAL_VARIABLES } from "../________";

interface Props extends WcbAttrs {}

const FrontendStyles: FC<Props> = (attrs) => {
	return <GlobalCss {...attrs} />;
};

//
const divsToUpdate = document.querySelectorAll(
	".wcb-form__wrap.wcb-update-div"
);

divsToUpdate.forEach((div) => {
	// Handle CSS IN JS THIS block
	const preEl = div.querySelector(
		`pre[data-wcb-block-attrs=${div.id}]`
	) as HTMLElement | null;

	const divRenderCssEl = div.querySelector(
		`div[data-wcb-global-styles=${div.id}]`
	) as HTMLElement | null;

	if (!preEl || !preEl.innerText || !divRenderCssEl) {
		return;
	}

	const props = JSON.parse(preEl?.innerText);
	//
	// Handle when submit this Form
	handleSubmitForm(div.id, props);
	//
	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
	//
	div.classList.remove("wcb-update-div");
	preEl.remove();
});

// --------------------------- FORM AJAX
function handleSubmitForm(formId: string, props: Props) {
	let $ = jQuery;
	if (typeof jQuery !== "function") {
		return;
	}
	$("#" + formId).on("submit", function (event) {
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
					console.log(99, "-----------OK");
					$(".wcb-form__successMessageText").css("display", "block");
					$(".wcb-form__errorMessageText").css("display", "none");
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.log(
						"The following error occured: " + textStatus,
						errorThrown
					);
					$(".wcb-form__successMessageText").css("display", "none");
					$(".wcb-form__errorMessageText").css("display", "block");
				},
			});
		};

		// ------------------------------------------------------------------------------------
		if (!!grecaptcha) {
			grecaptcha.ready(function () {
				grecaptcha
					.execute(DEMO_WCB_GLOBAL_VARIABLES.reCAPTCHA_site_key, {
						action: "submit",
					})
					.then(function (token) {
						console.log(123, { token });
						handleAjaxAction();
					});
			});
		} else {
			handleAjaxAction();
		}

		return false;
	});
}
