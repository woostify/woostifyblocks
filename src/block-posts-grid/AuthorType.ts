export interface AuthorRoot {
	id: number;
	name: string;
	url: string;
	description: string;
	link: string;
	slug: string;
	avatar_urls: AvatarUrls;
	meta: any[];
	_links: Links;
}

interface AvatarUrls {
	"24": string;
	"48": string;
	"96": string;
}

interface Links {
	self: Self[];
	collection: Collection[];
}

interface Self {
	href: string;
}

interface Collection {
	href: string;
}
