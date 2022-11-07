export interface PostRoot {
	id: number;
	date: string;
	date_gmt: string;
	guid: Guid;
	modified: string;
	modified_gmt: string;
	password: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: Title;
	content: Content;
	excerpt: Excerpt;
	author: number;
	featured_media: number;
	comment_status: string;
	ping_status: string;
	sticky: boolean;
	template: string;
	format: string;
	meta: any[];
	categories: number[];
	tags: any[];
	tuan_tag: number[];
	permalink_template: string;
	generated_slug: string;
	uagb_featured_image_src: UagbFeaturedImageSrc;
	uagb_author_info: UagbAuthorInfo;
	uagb_comment_info: number;
	uagb_excerpt: any;
	_links: Links;
	_embedded?: Embedded;
}

interface Guid {
	rendered: string;
	raw: string;
}

interface Title {
	raw: string;
	rendered: string;
}

interface Content {
	raw: string;
	rendered: string;
	protected: boolean;
	block_version: number;
}

interface Excerpt {
	raw: string;
	rendered: string;
	protected: boolean;
}

interface UagbFeaturedImageSrc {
	full: any;
	thumbnail: any;
	medium: any;
	medium_large: any;
	large: any;
	"1536x1536": any;
	"2048x2048": any;
}

interface UagbAuthorInfo {
	display_name: string;
	author_link: string;
}

interface Links {
	self: Self[];
	collection: Collection[];
	about: About[];
	author: Author[];
	replies: Reply[];
	"version-history": VersionHistory[];
	"predecessor-version": PredecessorVersion[];
	"wp:attachment": WpAttachment[];
	"wp:term": WpTerm[];
	"wp:action-publish": WpActionPublish[];
	"wp:action-unfiltered-html": WpActionUnfilteredHtml[];
	"wp:action-sticky": WpActionSticky[];
	"wp:action-assign-author": WpActionAssignAuthor[];
	"wp:action-create-categories": Category[];
	"wp:action-assign-categories": Category2[];
	"wp:action-create-tags": Tag[];
	"wp:action-assign-tags": Tag2[];
	"wp:action-create-tuan_tag": WpActionCreateTuanTag[];
	"wp:action-assign-tuan_tag": WpActionAssignTuanTag[];
	curies: Cury[];
	"wp:featuredmedia"?: Featuredmedum[];
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

interface Author {
	embeddable: boolean;
	href: string;
}

interface Reply {
	embeddable: boolean;
	href: string;
}

interface VersionHistory {
	count: number;
	href: string;
}

interface PredecessorVersion {
	id: number;
	href: string;
}

interface WpAttachment {
	href: string;
}

interface WpTerm {
	taxonomy: string;
	embeddable: boolean;
	href: string;
}

interface WpActionPublish {
	href: string;
}

interface WpActionUnfilteredHtml {
	href: string;
}

interface WpActionSticky {
	href: string;
}

interface WpActionAssignAuthor {
	href: string;
}

interface Category {
	href: string;
}

interface Category2 {
	href: string;
}

interface Tag {
	href: string;
}

interface Tag2 {
	href: string;
}

interface WpActionCreateTuanTag {
	href: string;
}

interface WpActionAssignTuanTag {
	href: string;
}

interface Cury {
	name: string;
	href: string;
	templated: boolean;
}

interface Featuredmedum {
	embeddable: boolean;
	href: string;
}

interface Embedded {
	"wp:featuredmedia": Featuredmedum2[];
}

interface Featuredmedum2 {
	id: number;
	date: string;
	slug: string;
	type: string;
	link: string;
	title: Title2;
	author: number;
	caption: Caption;
	alt_text: string;
	media_type: string;
	mime_type: string;
	media_details: MediaDetails;
}

interface Title2 {
	rendered: string;
}

interface Caption {
	rendered: string;
}

interface MediaDetails {
	width: number;
	height: number;
	file: string;
	filesize: number;
	sizes: Sizes;
}

interface Sizes {
	medium: Medium;
	large: Large;
	thumbnail: Thumbnail;
	medium_large: MediumLarge;
	"1536x1536": N1536x1536;
	full: Full;
}

interface Medium {
	file: string;
	width: number;
	height: number;
	filesize: number;
	mime_type: string;
	source_url: string;
}

interface Large {
	file: string;
	width: number;
	height: number;
	filesize: number;
	mime_type: string;
	source_url: string;
}

interface Thumbnail {
	file: string;
	width: number;
	height: number;
	filesize: number;
	mime_type: string;
	source_url: string;
}

interface MediumLarge {
	file: string;
	width: number;
	height: number;
	filesize: number;
	mime_type: string;
	source_url: string;
}

interface N1536x1536 {
	file: string;
	width: number;
	height: number;
	filesize: number;
	mime_type: string;
	source_url: string;
}

interface Full {
	file: string;
	width: number;
	height: number;
	mime_type: string;
	source_url: string;
}
