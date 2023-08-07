export default function converUniqueIdToAnphaKey(
	text: string,
	prefix = "wcb-"
) {
	if (!text) {
		return (
			prefix +
			"converniquedreturnnull" +
			Date.now() +
			Math.random()
		).replace(/\./g, "-");
	}
	return (
		prefix + text.replace(/ /g, "").replace(/\d/g, "")
		// text.substring(2, 9).replace(/-/g, "").replace(/ /g, "").replace(/\d/g, "")
	);
}
