import { Dashicon } from "@wordpress/components";
import { AttrsGenericType } from "../block-container/attributes";
import {
	WCB_FAQ_PANEL_ICON,
	WCB_FAQ_PANEL_ICON_DEMO,
} from "../block-faq/WcbFaqPanelIcon";

export interface WcbAttrs {
	uniqueId: string;
	question: string;
	answer: string;
	//
	headingTag: keyof HTMLElementTagNameMap;
	layout: string;
	//
	general_icon: WCB_FAQ_PANEL_ICON;

	//
}

const blokc1Attrs: AttrsGenericType<WcbAttrs> = {
	uniqueId: {
		type: "string",
		default: "",
	},
	layout: {
		type: "string",
		default: "accordion",
	},
	headingTag: {
		type: "string",
		default: "div",
	},
	general_icon: {
		type: "object",
		default: WCB_FAQ_PANEL_ICON_DEMO,
	},

	// THE ATTRS OF BLOCK HERE
	question: {
		type: "string",
		source: "html",
		selector: ".wcb-faq-child__question-text",
		default: "What is FAQ?",
	},
	answer: {
		type: "string",
		source: "html",
		selector: ".wcb-faq-child__answer-text",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},

	// ADVANCE
};

export default blokc1Attrs;
