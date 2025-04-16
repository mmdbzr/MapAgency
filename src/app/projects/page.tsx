import React from "react";

import ProjectsPage from "./ProjectPage";

import Services from "@/services";

const page = async () => {
	const projects = await Services.getProducts();

	console.log(projects);

	return (
		<div>
			<ProjectsPage />
		</div>
	);
};

export default page;
