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

	getProducts: (params?: { config?: AxiosRequestConfig }) =>
		axiosInstance
			.get<
				ServicesResponse["getProducts"]
			>("/api/v1/products/filter/", params?.config)
			.then((res) => res.data),

	getSingleProduct: (slug: string) =>
		axiosInstance
			.get<ServicesResponse["getSingleProduct"]>(`/api/v1/products/detail/`, {
				params: {
					slug,
				},
			})
			.then((res) => res.data)
			.catch((error) => {
				console.log(" getSingleProduct error : ", error);
				console.log("Request URL:", error.config?.url);
				return null;
			}),

	getProductsCategories: () =>
		axiosInstance
			.get<
				ServicesResponse["getProductsCategories"]
			>("/api/v1/products/categories/")
			.then((res) => res.data),

	getServices: () =>
		axiosInstance
			.get<ServicesResponse["getServices"]>(
				`/api/v1/service-introductions/list/`,
			)
			.then((res) => res.data)
			.catch((error) => {
				console.log(" getServices error : ", error);
				console.log("Request URL:", error.config?.url);
				return null;
			}),
};

export default Services;
