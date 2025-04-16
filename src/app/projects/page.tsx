import React from "react";

import ProjectsPage from "./ProjectPage";
import { type SearchParams, createLoader, parseAsString } from "nuqs/server";

import Services from "@/services";

const page = async ({
	searchParams,
}: {
	searchParams: Promise<SearchParams>;
}) => {
	const loadSearchParams = createLoader({
		category: parseAsString.withDefault(""),
	});

	const { category } = await loadSearchParams(searchParams);

	console.log({ category });

	const projects = await Services.getProducts({
		config: {
			params: {
				categories: category,
			},
		},
	});
	const categories = await Services.getProductsCategories();

	// console.log(projects);

	return (
		<div>
			<ProjectsPage project={projects} categories={categories} />
		</div>
	);
};

export default page;
