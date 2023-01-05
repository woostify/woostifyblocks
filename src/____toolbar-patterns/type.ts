// WcbBlocksRoot
export interface WcbBlocksRoot {
	wcbBlocks: Root;
}
export interface Root {
	__typename: string;
	edges: Edge[];
}

export interface Edge {
	__typename: string;
	node: Node;
}

export interface Node {
	__typename: string;
	id: string;
	featuredImage?: FeaturedImage;
	wcbBlocksCategories: WcbBlocksTaxonomies;
	wcbBlocksTags: WcbBlocksTaxonomies;
	wcbBlocksPricingPackages: WcbBlocksTaxonomies;
	databaseId: number;
	link: string;
	contentOrigin: string;
	date: string;
	title: string;
}

export interface FeaturedImage {
	__typename: string;
	node: Node2;
}

export interface Node2 {
	__typename: string;
	sourceUrl: string;
	srcSet: string;
	altText: string;
	caption: any;
	id: string;
}

export interface WcbBlocksTaxonomies {
	__typename: string;
	edges: Edge2[];
}

export interface Edge2 {
	__typename: string;
	node: Node3;
}

export interface Node3 {
	__typename: string;
	id: string;
	name: string;
	link: string;
	count: number;
}
