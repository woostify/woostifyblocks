import { getDocumentHead, JSToCSS, isEditingPost } from '.';

import { head } from 'lodash';
import { loadPromise, models } from '@wordpress/api';

export const convertToResponsiveStyle = () => {
    let responsiveJson = {
        'desktop': {
            'style': []
        },
        'tablet': {
            'breakpoint': '991px',
            'style': []
        },
        'mobile': {
            'breakpoint': '767px',
            'style': []
        }
    }
    let content = '';
    loadPromise.then(() => {
		const settings = new models.Settings();
		settings.fetch().then((response) => {

			const typography = head(response.wcb_global_typography);
			const colors = response.wcb_global_colors;

			for (const selector in typography) {
				//styleContent += `${cssPrefix} ${selector}{${JSToCSS(typo[selector])}}`;
                const attrs = typography[selector];
                let selectorStyle = {[selector]: {}};
                responsiveJson['desktop']['style'].push(selectorStyle)
                responsiveJson['mobile']['style'].push(selectorStyle)
                responsiveJson['tablet']['style'].push(selectorStyle)
                for (const attrName in attrs) {
                    if (attrName.includes('Tablet')) {
                    } else if (attrName.includes('Mobile')) {
                    } else {
                    }
                }
			}
            
            return responsiveJson;
		});
	});

    return content;
}

export const renderGlobalStyle = () => {
	setTimeout(() => {
		const _renderGlobalStyle = (head) => {
			if (head) {
				removeOldStyleTag(head);
				const style = createStyleTagWithGlobalStyleContent();
				head.appendChild(style);
			}
		};
		const headElement = getDocumentHead();
		_renderGlobalStyle(headElement);
		if (headElement !== document.querySelector('head')) {
			_renderGlobalStyle(document.querySelector('head'));
		}
	}, 50);
};

export const createStyleTagWithGlobalStyleContent = () => {
	let cssPrefix = '.woostify-block';
    if ( isEditingPost() ) {
        cssPrefix = '.editor-styles-wrapper .woostify-block';
    }
	const style = document.createElement('style');
	style.classList.add('wcb-global-style');
    style.textContent = convertToResponsiveStyle();

	return style;
};

export const removeOldStyleTag = (head = document.querySelector('head')) => {
	if (!isStyleTagAdded(head)) {
		return;
	}

	const oldTag = head.querySelector('.wcb-global-style');
	oldTag.remove();
};

export const isStyleTagAdded = (head = document.querySelector('head')) => {
	return head.querySelector('.wcb-global-style');
};