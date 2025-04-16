export interface ServicesResponse {
	getSingleProduct: {
		id: number;
		picture: {
			id: number;
			download_url: string;
			alternative: string;
			title: string;
			priority: number;
			position: string;
			open_in_new_tab: boolean;
			url: string;
			thumbnails: [
				{
					thumb_400x300: string;
				},
				{
					thumb_100x100: string;
				},
				{
					thumb_700x500: string;
				},
			];
		};
		gallery: [
			{
				id: number;
				download_url: string;
				alternative: string;
				title: string;
				priority: number;
				position: string;
				open_in_new_tab: boolean;
				url: string;
				thumbnails: [
					{
						thumb_100x100: string;
					},
					{
						thumb_400x300: string;
					},
					{
						thumb_700x500: string;
					},
				];
			},
		];
		categories: Array<{
			id: number;
			pictures: [];
			title: string;
			title_fa: string;
			title_en: string | null;
			slug: string;
			description: string;
			description_fa: string;
			description_en: string | null;
			priority: number;
			tags: string;
			tags_fa: string;
			tags_en: string | null;
		}>;
		title: string;
		title_fa: string;
		title_en: string | null;
		slug: string;
		description: string;
		description_fa: string;
		description_en: string | null;
		additional_description: string;
		additional_description_fa: string;
		additional_description_en: string | null;
		short_description: string;
		short_description_fa: string;
		short_description_en: string | null;
		tags: string;
		tags_fa: string;
		tags_en: string | null;
		product_code: string;
		visit_count: number;
	};
	getBlogCategories: Array<{
		id: number;
		sub_categories: unknown[];
		title: string;
		title_fa: string;
		title_en: string | null;
		slug: string;
		text: string;
		text_fa: string;
		text_en: string | null;
		image: string;
	}>;
	getSingleBlogPost: {
		id: number;
		title: string;
		slug: string;
		text: string;
		short_description: string;
		tags: string;
		categories: unknown[];
		pictures: any[];
		create_date: string;
		start_show_date: string;
		allow_comment: boolean;
	};
	getBlogPosts: {
		count: number;
		next: string | null;
		previous: string | null;
		total_pages: number;
		results: Array<{
			id: number;
			title: string;
			slug: string;
			text: string;
			short_description: string;
			tags: string;
			categories: unknown[];
			pictures: string;
			create_date: string;
			start_show_date: string;
			allow_comment: boolean;
		}>;
	};
	getBanner: Array<{
		picture: {
			id: number;
			download_url: string;
			alternative: string;
			title: string;
			priority: number;
			position: string;
			open_in_new_tab: boolean;
			url: string;
			thumbnails: Array<{
				thumb_400x300?: string;
				thumb_100x100?: string;
				thumb_700x500?: string;
			}>;
		};
	}>;

	getProductsCategories: Array<{
		id: number;
		children: unknown[];
		pictures: string[];
		title: string;
		title_fa: string;
		title_en: string | null;
		slug: string;
		description: string;
		description_fa: string;
		description_en: string;
		priority: number;
	}>;

	getProducts: {
		count: 1;
		total_pages: 1;
		next: null;
		previous: null;
		results: Array<{
			title: string;
			slug: string;
			short_description: string;
			product_code: string;
			picture: {
				id: number;
				download_url: string;
				alternative: string;
				title: string;
				priority: number;
				position: string;
				open_in_new_tab: boolean;
				url: string;
				thumbnails: [
					{
						thumb_100x100: string;
					},
					{
						thumb_400x300: string;
					},
					{
						thumb_700x500: string;
					},
				];
			};
			visit_count: number;
		}>;
	};
}
