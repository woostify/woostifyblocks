import { gql, useQuery } from "@apollo/client";
export const GET_WCB_BLOCKS = gql`
	query NewQuery {
		wcbBlocks(where: { status: PUBLISH }, first: 400) {
			edges {
				node {
					id
					featuredImage {
						node {
							sourceUrl
							srcSet
							altText
							caption
							id
						}
					}
					wcbBlocksCategories {
						edges {
							node {
								id
								name
								link
								count
							}
						}
					}
					wcbBlocksTags {
						edges {
							node {
								id
								name
								link
								count
							}
						}
					}
					wcbBlocksPricingPackages {
						edges {
							node {
								id
								name
								link
								count
							}
						}
					}
					databaseId
					link
					contentOrigin
					date
					title
				}
			}
		}
	}
`;
