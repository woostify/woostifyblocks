export default function converUniqueIdToAnphaKey(text: string, prefix = "") {
	if (!text) {
		return prefix + "converniquedreturnnull";
	}
	return prefix + text.replace(/-/g, "").replace(/ /g, "").replace(/\d/g, "");
}
