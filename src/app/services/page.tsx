import React from "react";

import ServicesPage from "./ServicesPage";

import Services from "@/services";

const page = async () => {
	const services = await Services.getServices();
	return <ServicesPage services={services} />;
};

export default page;
