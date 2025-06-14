import React from "react";
import Save__260523 from "./Save__260523";
import Save__100623 from "./Save__100623";
import blokc1Attrs from "./attributes";
import { DEFAULT_MY_ICON } from "../components/controls/SelectIcon/SelecIcon";

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

const deprecated = [v5, v4, v3, v2, v1];

export default deprecated;
