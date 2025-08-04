import React from "react";
import Save__260523 from "./Save__260523";
import Save__100623 from "./Save__100623";
import blokc1Attrs from "./attributes";
import { DEFAULT_MY_ICON } from "../components/controls/SelectIcon/SelecIcon";
import Save from "./Save";

const v1 = {};
const v2 = {};
const v3 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save__260523,
};
const v4 = {
	attributes: {
		...blokc1Attrs,
		general_icon: {
			type: "object",
			default: {
				enableIcon: true,
				iconPosition: "top",
				icon: {
					...DEFAULT_MY_ICON,
					iconName: "lni-checkmark-circle",
				},
			},
		},
	},
	save: Save__100623,
};

// Migration version - từ single block sang container block
const v5 = {
	attributes: {
		...blokc1Attrs,
		// Thêm lại heading attributes để tương thích với data cũ
		heading_1: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-list__heading",
			default: "List item",
		},
		heading_2: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-list__heading",
			default: "List item",
		},
		heading_3: {
			type: "string",
			source: "html",
			selector: ".wcb-icon-list__heading",
			default: "List item",
		},
	},
	save: ({ attributes }) => {
		const { uniqueId } = attributes;
		return (
			<div className="wcb-icon-list__wrap" data-uniqueid={uniqueId}>
				<div className="wcb-icon-list__icon-wrap">
					{/* Empty container for migration */}
				</div>
			</div>
		);
	},
	migrate: (attributes) => {
		// Loại bỏ heading attributes khi migrate
		const { heading_1, heading_2, heading_3, ...newAttributes } = attributes;
		// Migrate to new container block structure
		return [
			newAttributes,
			[
				// Create default child blocks
				["wcb/icon", {}],
				["wcb/icon", {}],
				["wcb/icon", {}],
			]
		];
	}
};

// Migration version v6 - fix appearance.style array issue
const v6 = {
	attributes: blokc1Attrs,
	save: Save,
	migrate: (attributes) => {
		// Fix appearance.style if it's an array
		const fixTypographyAppearance = (typography) => {
			if (!typography) return typography;
			
			let updatedTypography = { ...typography };
			let needsUpdate = false;

			// Fix appearance.style if it's an array
			if (typography?.appearance?.style && Array.isArray(typography.appearance.style)) {
				updatedTypography.appearance = {
					...typography.appearance,
					style: {},
				};
				needsUpdate = true;
			}

			// Fix lineHeight if it's an array
			if (typography?.lineHeight && Array.isArray(typography.lineHeight)) {
				updatedTypography.lineHeight = { Desktop: undefined };
				needsUpdate = true;
			}

			// Fix letterSpacing if it's an array
			if (typography?.letterSpacing && Array.isArray(typography.letterSpacing)) {
				updatedTypography.letterSpacing = { Desktop: undefined };
				needsUpdate = true;
			}

			return needsUpdate ? updatedTypography : typography;
		};

		const newAttributes = {
			...attributes,
			style_title: {
				...attributes.style_title,
				typography: fixTypographyAppearance(attributes.style_title?.typography),
			},
			style_desination: {
				...attributes.style_desination,
				typography: fixTypographyAppearance(attributes.style_desination?.typography),
			},
			style_description: {
				...attributes.style_description,
				typography: fixTypographyAppearance(attributes.style_description?.typography),
			},
		};

		return newAttributes;
	}
};

const deprecated = [v6, v5, v4, v3, v2, v1];

export default deprecated;
