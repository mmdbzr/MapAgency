export const APP_ROUTES = {
	landing: "/",
	services: "/services",
	contactUs: "/contact-us",
	projects: "/projects",
	aboutUs: "/about-us",
	blog: "/blog",
} as const;

export const APP_NAVIGATION_ITEMS = {
	[APP_ROUTES.landing]: {
		label: "صفحه نخست",
	},
	[APP_ROUTES.services]: {
		label: "خدمات ما",
	},
	[APP_ROUTES.projects]: {
		label: "پروژه ها",
	},
	[APP_ROUTES.blog]: {
		label: "مقالات",
	},
	[APP_ROUTES.aboutUs]: {
		label: "درباره ما",
	},
	[APP_ROUTES.contactUs]: {
		label: "تماس با ما",
	},
} as const;
