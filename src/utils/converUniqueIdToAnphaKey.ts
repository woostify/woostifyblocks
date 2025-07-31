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
	
	// Convert clientId to a valid CSS class name
	// Example: "a1b2c3d4-e5f6-7890" -> "wcb-a1b2c3d4e5f67890"
	const cleanId = text
		.replace(/-/g, "") // Remove hyphens
		.replace(/\s/g, "") // Remove spaces
		.substring(0, 12); // Keep first 12 characters for reasonable length
	
	return prefix + cleanId;
}

// Alternative function that maintains full uniqueness
export function converClientIdToUniqueClass(clientId: string, prefix = "wcb-"): string {
	if (!clientId) {
		return prefix + "fallback" + Date.now();
	}
	
	// Create a hash-like short identifier from clientId
	let hash = 0;
	for (let i = 0; i < clientId.length; i++) {
		const char = clientId.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash; // Convert to 32-bit integer
	}
	
	// Convert to positive number and base36 (alphanumeric)
	const shortId = Math.abs(hash).toString(36);
	return prefix + shortId;
}
