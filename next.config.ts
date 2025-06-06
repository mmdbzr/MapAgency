/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		domains: ["preview.kiaads.com"],
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "preview.kiaads.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	webpack(config: any) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule: any) =>
			rule.test?.test?.(".svg"),
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							plugins: ["@svgr/plugin-jsx"],
							svgoConfig: {
								plugins: [
									{
										name: "preset-default",
										params: {
											overrides: {
												removeViewBox: false,
											},
										},
									},
								],
							},
						},
					},
				],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default nextConfig;
