export interface WcbPost {
	id: number;
	title: {
		rendered: string;
	};
	"wcb-blocks-cat": number[];
	"wcb-blocks-tag": number[];
	type: "wcb-blocks";
	slug: string;
	link: string;
	content: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
}
