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
}
