import React, { FC } from "react";
import ReactDOM from "react-dom";
import { WcbAttrs } from "./attributes";
import GlobalCss from "./GlobalCss";

interface Props extends WcbAttrs {}

const FrontendStyles: FC<Props> = (attrs) => {
	return <GlobalCss {...attrs} />;
};

//
const divsToUpdate = document.querySelectorAll(
	".wcb-form__wrap.wcb-update-div"
);

divsToUpdate.forEach((div) => {
	// Handle when submit this Form
	handleSubmitForm(div.id);

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
	//
	const props = JSON.parse(preEl?.innerText);
	//
	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
	//
	div.classList.remove("wcb-update-div");
	preEl.remove();
});

// --------------------------- FORM AJAX
function handleSubmitForm(formId: string) {
	let $ = jQuery;
	if (typeof jQuery !== "function") {
		return;
	}
	$("#" + formId).on("submit", function (event) {
		const formData = $(this).serializeArray();
		console.log(123, { formData });
		event.preventDefault();
		return;
		$.ajax({
			type: "post", //Phương thức truyền post hoặc get
			dataType: "json", //Dạng dữ liệu trả về xml, json, script, or html
			url: wcbFrontendAjaxObject.ajaxurl, //Đường dẫn chứa hàm xử lý dữ liệu. Mặc định của WP như vậy
			data: {
				action: "thongbao", //Tên action
				formData: "levantoan.com", //Biến truyền vào xử lý. $_POST['website']
			},
			context: this,
			beforeSend: function () {
				//Làm gì đó trước khi gửi dữ liệu vào xử lý
			},
			success: function (response) {
				//Làm gì đó khi dữ liệu đã được xử lý
				if (response.success) {
					alert(response.data);
				} else {
					alert("Đã có lỗi xảy ra");
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				//Làm gì đó khi có lỗi xảy ra
				console.log("The following error occured: " + textStatus, errorThrown);
			},
		});
		return false;
	});
}
