import { type SearchParams, createLoader, parseAsString } from "nuqs/server";

import BlogPage from "@/components/BlogPage /BlogPage";
import Services from "@/services";
import axiosInstance from "@/services/axiosInstance";

const Page = async ({
	searchParams,
}: {
	searchParams: Promise<SearchParams>;
}) => {
	const loadSearchParams = createLoader({
		category: parseAsString.withDefault(""),
		page: parseAsString.withDefault("1"),
		searchQuery: parseAsString.withDefault(""),
	});

	const { category, page, searchQuery } = await loadSearchParams(searchParams);

	const categories = await Services.getBlogCategories();
	const posts = await Services.getBlogPosts({
		config: {
			params: {
				category_slug: category,
				page: page,
				title: searchQuery,
			},
		},
	});

	const postsWithPictures = await Promise.all(
		posts.results.map(async (post) => {
			const fullPost = await Services.getSingleBlogPost(post.id);
			const imageUrl = fullPost?.pictures?.[0]?.download_url;
			const fullImageUrl = imageUrl?.startsWith("http")
				? imageUrl
				: `${axiosInstance.defaults.baseURL}${imageUrl?.startsWith("/") ? imageUrl : `/${imageUrl}`}`;
			return {
				...post,
				pictures: fullImageUrl,
			};
		}),
	);
	posts.results = postsWithPictures;
	console.log(posts);

	return <BlogPage categories={categories} posts={posts} />;
};

export default Page;
