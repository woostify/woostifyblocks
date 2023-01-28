import { addQueryArgs } from "@wordpress/url";
import apiFetch from "@wordpress/api-fetch";
import { flatten, uniqBy } from "lodash";

export const getProduct = (productId) => {
	return apiFetch({
		path: `/wc/store/v1/products/${productId}`,
	});
};

export const getCategories = (queryArgs = {}) => {
	return apiFetch({
		path: addQueryArgs(`wc/store/v1/products/categories`, {
			per_page: 0,
			...queryArgs,
		}),
	});
};

export const getCategory = (categoryId) => {
	return apiFetch({
		path: `wc/store/v1/products/categories/${categoryId}`,
	});
};

const getProductTagsRequests = ({ selected = [], search = "" }) => {
	const limitTags = !!window.wcSettings?.limitTags;
	const requests = [
		addQueryArgs(`wc/store/v1/products/tags`, {
			per_page: limitTags ? 100 : 0,
			orderby: limitTags ? "count" : "name",
			order: limitTags ? "desc" : "asc",
			search,
		}),
	];

	// If we have a large catalog, we might not get all selected products in the first page.
	if (limitTags && selected.length) {
		requests.push(
			addQueryArgs(`wc/store/v1/products/tags`, {
				include: selected,
			})
		);
	}

	return requests;
};

export const getProductTags = ({ selected = [], search = "" }) => {
	const requests = getProductTagsRequests({ selected, search });

	return Promise.all(requests.map((path) => apiFetch({ path }))).then(
		(data) => {
			return uniqBy(flatten(data), "id");
		}
	);
};

export const formatError = async (error) => {
	if (typeof error.json === "function") {
		try {
			const parsedError = await error.json();
			return {
				message: parsedError.message,
				type: parsedError.type || "api",
			};
		} catch (e) {
			return {
				message: e.message,
				type: "general",
			};
		}
	}

	return {
		message: error.message,
		type: error.type || "general",
	};
};

export const getAttributes = () => {
	return apiFetch({
		path: `wc/store/v1/products/attributes`,
	});
};

export const getTerms = (attribute) => {
	return apiFetch({
		path: `wc/store/v1/products/attributes/${attribute}/terms`,
	});
};
