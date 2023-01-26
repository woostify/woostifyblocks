import { Button } from "@wordpress/components";
import React, { useEffect, useState } from "react";

const ProductsQueries = () => {
	const [productHtmls, setProductHtmls] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {}, []);

	const handleAjaxGetProducts = () => {
		setLoading(true);
		const data = {
			action: "wcb_get_product_filters",
			data: "ProductsQueries",
		};
		jQuery.post(ajaxurl, data, function (response) {
			console.log(123, "Got this from the server: ", { data, response });
			setProductHtmls(response.data);
			setLoading(false);
		});
	};

	return (
		<div>
			<Button variant="primary" onClick={handleAjaxGetProducts}>
				ProductsQueries
			</Button>
			<div className="my-5 p-5 border rounded-xl">
				{/* {loading && (
					<h3 className="text-lg underline text-red-500">Loading...</h3>
				)}
				<div dangerouslySetInnerHTML={{ __html: productHtmls }} /> */}
			</div>
		</div>
	);
};

export default ProductsQueries;
