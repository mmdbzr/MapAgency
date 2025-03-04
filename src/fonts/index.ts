import localFont from "next/font/local";

export const kaaf = localFont({
	src: "./Kaaf/Kaaf.ttf",
	variable: "--font-kaaf-local",
	display: "swap",
});

export const peydaFaNum = localFont({
	src: [
		{
			path: "./PeydaFaNum/PeydaWebFaNum-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-ExtraLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./PeydaFaNum/PeydaWebFaNum-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-peyda-local",
	display: "swap",
});
