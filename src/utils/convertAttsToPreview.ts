import { AttrsGenericType } from "../block-container/attributes";

export default function convertObjectAttrToPreview(A: AttrsGenericType<{}>) {
	let B = {};
	for (let key in A) {
		if (A.hasOwnProperty(key)) {
			B[key] = A[key].default;
		}
	}
	return B;
}
