const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
	return ({ opacityVariable, opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${cssVar}), ${opacityValue})`;
		}
		if (opacityVariable !== undefined) {
			return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
		}
		return `rgb(var(${cssVar}))`;
	};
}

const safelist = [
	{
		pattern: /shadow/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /flex-(wrap|nowrap|wrap-reverse|row|col)/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /grid-cols-(1|2|3|4|5|6|7|8|12)/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /m-(1|2|3|4|5|6|7|8|10|11|12|13|14)/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /mt-(0|16|24)/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /space-y-(7|16|28)/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /h-(14|16|20|24)/,
		variants: ["sm", "xl"],
	},
	{
		pattern: /w-(2\/5|3\/5|1\/3|2\/3)/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /container/,
		variants: ["sm", "md", "lg", "xl", "2xl"],
	},
	{
		pattern: /text-blue-(100|500)/,
		variants: [],
	},
	//
];

module.exports = {
	important: true,
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
	safelist,
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				"2xl": "128px",
			},
		},
		fontFamily: {
			display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
			body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
		},
		borderRadius: {
			none: "0px",
			sm: "var(--radius-sm)",
			DEFAULT: "var(--radius-DEFAULT)",
			md: "var(--radius-md)",
			lg: "var(--radius-lg)",
			xl: "var(--radius-xl)",
			"2xl": "var(--radius-2xl)",
			"3xl": "var(--radius-3xl)",
			full: "var(--radius-full)",
		},

		extend: {
			colors: {
				primary: {
					50: customColors("--c-primary-50"),
					100: customColors("--c-primary-100"),
					200: customColors("--c-primary-200"),
					300: customColors("--c-primary-300"),
					400: customColors("--c-primary-400"),
					500: customColors("--c-primary-500"),
					6000: customColors("--c-primary-600"),
					700: customColors("--c-primary-700"),
					800: customColors("--c-primary-800"),
					900: customColors("--c-primary-900"),
				},
				secondary: {
					50: customColors("--c-secondary-50"),
					100: customColors("--c-secondary-100"),
					200: customColors("--c-secondary-200"),
					300: customColors("--c-secondary-300"),
					400: customColors("--c-secondary-400"),
					500: customColors("--c-secondary-500"),
					6000: customColors("--c-secondary-600"),
					700: customColors("--c-secondary-700"),
					800: customColors("--c-secondary-800"),
					900: customColors("--c-secondary-900"),
				},
				neutral: {
					50: customColors("--c-neutral-50"),
					100: customColors("--c-neutral-100"),
					200: customColors("--c-neutral-200"),
					300: customColors("--c-neutral-300"),
					400: customColors("--c-neutral-400"),
					500: customColors("--c-neutral-500"),
					6000: customColors("--c-neutral-600"),
					700: customColors("--c-neutral-700"),
					800: customColors("--c-neutral-800"),
					900: customColors("--c-neutral-900"),
				},
			},
		},
	},
	variants: {},
	plugins: [],
};
