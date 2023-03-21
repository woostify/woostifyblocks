export default function converUniqueId(text: string, prefix = "") {
	if (!text) {
		return prefix + "converUniqueIdReturnNull";
	}
	return prefix + text.replace(/-/g, "").replace(/ /g, "");
}
