import { type SearchParams, createLoader, parseAsString } from "nuqs/server";

import BlogPage from "@/components/BlogPage /BlogPage";

const Page = async ({
	searchParams,
}: {
	searchParams: Promise<SearchParams>;
}) => {
	const loadSearchParams = createLoader({
		categories: parseAsString.withDefault(""),
	});

	const { categories: categoriesSearchParams } =
		await loadSearchParams(searchParams);

	// const categories = await Services.getBlogCategories();
	// const posts = await Services.getBlogPosts();

	return <BlogPage categories={null} posts={null} />;
};

export default Page;
