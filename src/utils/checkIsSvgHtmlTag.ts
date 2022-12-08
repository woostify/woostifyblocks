function checkIsSvgHtmlTag(str: string) {
	if (typeof str !== "string") {
		return false;
	}
	return /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.test(str);
}

export default checkIsSvgHtmlTag;
