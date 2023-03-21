export interface CategoryRoot {
	id: number;
	count: number;
	description: string;
	link: string;
	name: string;
	slug: string;
	taxonomy: string;
	parent: number;
	meta: any[];
	_links: Links;
}

interface Links {
	self: Self[];
	collection: Collection[];
	about: About[];
	"wp:post_type": WpPostType[];
	curies: Cury[];
}

interface Self {
	href: string;
}

interface Collection {
	href: string;
}

interface About {
	href: string;
}

interface WpPostType {
	href: string;
}

interface Cury {
	name: string;
	href: string;
	templated: boolean;
}
