export * from './font';

/**
 * Capitalize the first letter in string
 * @param {*} string
 * @returns
 */
export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getDocumentHead = () => {
	let head = document.querySelector('head');

	if (isEditingContent()) {
		head = document
			.querySelector('iframe[name="editor-canvas"]')
			.contentWindow.document.querySelector('head');
	}

	return head;
};

export const isEditingContent = () =>
	!!document.querySelector('iframe[name="editor-canvas"]');
