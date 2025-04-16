import axiosInstance from "./axiosInstance";
import type { AxiosRequestConfig } from "axios";

import { ServicesResponse } from "@/types/ServicesResponse";

const Services = {
	getBlogCategories: () =>
		axiosInstance
			.get<
				ServicesResponse["getBlogCategories"]
			>("/api/v1/articles/categories/")
			.then((res) => res.data),
	getBlogPosts: (params?: { config?: AxiosRequestConfig }) =>
		axiosInstance
			.get<ServicesResponse["getBlogPosts"]>("/api/v1/articles", params?.config)
			.then((res) => res.data),
	getSingleBlogPost: (id: number) =>
		axiosInstance
			.get<
				ServicesResponse["getSingleBlogPost"]
			>(`/api/v1/articles/detail/${id}`)
			.then((res) => res.data),

	getProducts: () =>
		axiosInstance
			.get<ServicesResponse["getProducts"]>("/api/v1/products/detail")
			.then((res) => res.data),
};

export default Services;
