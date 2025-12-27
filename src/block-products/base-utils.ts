/**
 * The default layout built from the default template.
 */
export const DEFAULT_PRODUCT_LIST_LAYOUT = [
	["core/paragraph"],
	["core/heading"],
	["core/buttons"],
	//
	// ['core/paragraph', { imageSizing: 'cropped' }],
	// [ 'woocommerce/product-title' ],
	// [ 'woocommerce/product-price' ],
	// [ 'woocommerce/product-rating' ],
	// [ 'woocommerce/product-button' ],
];

/**
 * Get product layout config from innerBlocks
 * 
 * @param innerBlocks inner blocks of the products block
 * @returns Inner blocks config array
 */
export const getProductLayoutConfig = (innerBlocks: any) => {
	if (!innerBlocks || innerBlocks.length === 0) {
		return [];
	}

	return innerBlocks.map((block: any) => {
		return [
			block.name,
			{
				...block.attributes,
				product: undefined,
				children:
					block.innerBlocks.length > 0
						? getProductLayoutConfig(block.innerBlocks)
						: [],
			},
		];
	});
};

/**
 * Returns the shopping cart SVG with a specified color.
 *
 * @param color The fill color for the SVG.
 * @returns The SVG string with the specified color.
 */
export const SHOPPING_CART_SVG = (color: string) => {
	return `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" width="17" height="17" viewBox="0 0 17 17" id="svg50" sodipodi:docname="shopping-cart-2.svg" inkscape:version="1.0.2-2 (e86c870879, 2021-01-15)">
				<metadata id="metadata56">
					<rdf:rdf>
					<cc:work rdf:about="">
						<dc:format>image/svg+xml</dc:format>
						<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
						<dc:title></dc:title>
					</cc:work>
					</rdf:rdf>
				</metadata>
				<defs id="defs54"></defs>
				<sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="2400" inkscape:window-height="1271" id="namedview52" showgrid="false" inkscape:zoom="48.823529" inkscape:cx="8.5" inkscape:cy="8.5" inkscape:window-x="2391" inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:current-layer="svg50"></sodipodi:namedview>
				<g id="g46" transform="matrix(-1,0,0,1,16.926,0)"></g>
				<path d="m 14.176,12.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z m -8.5,-2.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z M 3.555,2 3.857,4 H 17 l -1.118,8.036 H 3.969 L 2.931,4.573 2.695,3 H -0.074 V 2 Z M 4,5 4.139,6 H 15.713 L 15.852,5 Z M 15.012,11.036 15.573,7 H 4.278 l 0.561,4.036 z" 
				fill="${color}"
				id="path48"></path>
			</svg>`
}

/**
 * Convert SVG string to data URL
 * 
 * @param svgString The SVG string to convert.
 * @returns Data URL representation of the SVG.
 */
export const svgToDataUrl = (svgString: string): string => {
  const encoded = encodeURIComponent(svgString)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  return `url("data:image/svg+xml,${encoded}")`;
};
