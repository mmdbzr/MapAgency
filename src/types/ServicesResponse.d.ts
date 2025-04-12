export interface ServicesResponse {
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
	}>;
	getSingleBlogPost: {
		id: number;
		title: string;
		slug: string;
		text: string;
		short_description: string;
		tags: string;
		categories: unknown[];
		pictures: unknown[];
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
			pictures: unknown[];
			create_date: string;
			start_show_date: string;
			allow_comment: boolean;
		}>;
	};
}
