"use client";

import React, { useState } from "react";

import BlogPost from "./BlogPost";
import PopularPost from "./PopularPost";
import { parseAsIndex, parseAsString, useQueryState } from "nuqs";

import SearchIcon from "@/public/fi-rr-search.svg";
import { ServicesResponse } from "@/types/ServicesResponse";
import cn from "@/utils/cn";

export interface BlogPageProps {
	categories?: ServicesResponse["getBlogCategories"] | null;
	posts?: ServicesResponse["getBlogPosts"] | null;
}

const BlogPage: React.FC<BlogPageProps> = ({
	categories: categoriesData,
	posts,
}) => {
	const [categoryQueryState, setCategory] = useQueryState(
		"category",
		parseAsString.withDefault("").withOptions({
			clearOnDefault: true,
			shallow: false,
		}),
	);
	const [searchQuery, setSearchQuery] = useQueryState(
		"searchQuery",
		parseAsString.withDefault("").withOptions({
			clearOnDefault: true,
			shallow: false,
		}),
	);
	const [pageIndex, setPageIndex] = useQueryState(
		"page",
		parseAsIndex.withDefault(1),
	);
	const [isOpen, setIsOpen] = useState(false);

	const handleCheckboxChange = (key: string) => {
		setCategory(key === categoryQueryState ? "" : key);
	};

	const totalPages = Math.ceil((posts?.count || 0) / 9);

	const renderPageNumbers = () => {
		const pages = [];

		if (totalPages <= 4) {
			// Show all pages if total pages is 4 or less
			for (let i = 1; i <= totalPages; i++) {
				pages.push(
					<button
						key={i}
						onClick={() => setPageIndex(i)}
						className={cn(
							"flex h-12 w-12 items-center justify-center rounded-lg text-lg transition-colors",
							pageIndex === i
								? "border-2 border-white bg-transparent text-white"
								: "bg-[#1E4E6A] text-white hover:bg-[#1E4E6A]/80",
						)}
					>
						{i}
					</button>,
				);
			}
		} else {
			// Show current page, previous page, and last two pages with ellipsis
			if (pageIndex > 1) {
				pages.push(
					<button
						key={pageIndex - 1}
						onClick={() => setPageIndex(pageIndex - 1)}
						className={cn(
							"flex h-12 w-12 items-center justify-center rounded-lg text-lg transition-colors",
							"bg-[#1E4E6A] text-white hover:bg-[#1E4E6A]/80",
						)}
					>
						{pageIndex - 1}
					</button>,
				);
			}

			pages.push(
				<button
					key={pageIndex}
					onClick={() => setPageIndex(pageIndex)}
					className={cn(
						"flex h-12 w-12 items-center justify-center rounded-lg text-lg transition-colors",
						"border-2 border-white bg-transparent text-white",
					)}
				>
					{pageIndex}
				</button>,
			);

			pages.push(
				<span key="ellipsis" className="px-2 text-white">
					...
				</span>,
			);

			// Add last two pages
			pages.push(
				<button
					key={totalPages - 1}
					onClick={() => setPageIndex(totalPages - 1)}
					className={cn(
						"flex h-12 w-12 items-center justify-center rounded-lg text-lg transition-colors",
						"bg-[#1E4E6A] text-white hover:bg-[#1E4E6A]/80",
					)}
				>
					{totalPages - 1}
				</button>,
			);

			pages.push(
				<button
					key={totalPages}
					onClick={() => setPageIndex(totalPages)}
					className={cn(
						"flex h-12 w-12 items-center justify-center rounded-lg text-lg transition-colors",
						"bg-[#1E4E6A] text-white hover:bg-[#1E4E6A]/80",
					)}
				>
					{totalPages}
				</button>,
			);
		}

		return pages;
	};

	return (
		<div className={cn("mt-[96px] mb-16")}>
			<div className="relative mb-5 flex h-10 w-full flex-col items-center text-center lg:h-32">
				<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
					Articles
				</p>
				<p className="font-kaaf absolute top-3 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
					مقالات
				</p>
			</div>
			<div className="flex flex-col lg:flex-row lg:items-start lg:px-[132px]">
				<div className="ml-5 hidden items-center rounded-2xl bg-[#0E4059] p-4 lg:flex lg:h-[800px] lg:w-72 lg:flex-col">
					<div>
						<p className="mb-5 text-[18px] font-extrabold text-white">
							مقالات پرطرفدار
						</p>

						<div className="flex flex-col gap-4">
							<PopularPost />
							<PopularPost />
							<PopularPost />
						</div>
					</div>
					<div className="bg-secondary-500 mt-4 flex h-9 w-full items-center justify-end gap-2 rounded-3xl px-4">
						<input
							className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
							onChange={(e) => {
								setSearchQuery(e.target.value);
							}}
						/>
						<SearchIcon />
					</div>
					<div className="mt-4 flex w-full flex-col">
						<p className="text-[18px] font-extrabold">برچسب ها</p>
						<div className="flex w-full flex-col gap-3 rounded-tl-3xl rounded-br-3xl">
							{categoriesData?.map((item) => (
								<label
									className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2"
									key={item.id}
								>
									<input
										type="checkbox"
										checked={categoryQueryState === item.slug}
										onChange={() => handleCheckboxChange(item.slug)}
										className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
									/>
									<span className="text-[14px]">{item.title}</span>
								</label>
							))}
						</div>
					</div>
				</div>

				<div className="mb-6 flex justify-center lg:hidden">
					<div className="bg-primary-800 mt-4 flex w-[258px] flex-col items-center gap-2 rounded-tl-3xl rounded-br-3xl px-4">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="bg-primary-800 flex h-9 w-full items-center justify-between p-2 text-[12px] font-normal text-white"
						>
							برچسب ها
							<svg
								className={`h-5 w-5 transform transition-transform duration-200 ${
									isOpen ? "rotate-180" : ""
								}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{isOpen && (
							<div className="flex w-full flex-col gap-2 rounded-tl-3xl rounded-br-3xl">
								{categoriesData?.map((category) => (
									<label
										className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2"
										key={category.id}
									>
										<input
											type="checkbox"
											checked={category.slug === categoryQueryState}
											onChange={() => handleCheckboxChange(category.slug)}
											className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
										/>
										<span className="text-[14px]">{category.title}</span>
									</label>
								))}
							</div>
						)}
					</div>
					<div className="bg-primary-800 mt-4 mr-6 flex h-9 items-center justify-center rounded-tl-3xl rounded-br-3xl p-4">
						<SearchIcon />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-6 lg:grid lg:grid-cols-3 lg:gap-6">
					{posts?.results?.length &&
						posts.results.map((post) => (
							<BlogPost
								key={post.id}
								title={post.title}
								id={post.id}
								description={post.short_description}
								image={post.pictures || ""}
							/>
						))}
				</div>
			</div>
			{/* Pagination controls */}
			{/* <div className="mt-8 flex items-center justify-center gap-2">
				<button
					onClick={() => setPageIndex(Math.max(1, pageIndex - 1))}
					disabled={pageIndex === 1}
					className={cn(
						"flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
						pageIndex === 1
							? "bg-gray-400 text-white opacity-50"
							: "bg-[#1E4E6A] text-white hover:bg-[#1E4E6A]/80",
					)}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				{renderPageNumbers()}

				<button
					onClick={() => setPageIndex(Math.min(totalPages, pageIndex + 1))}
					disabled={pageIndex === totalPages}
					className={cn(
						"flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
						pageIndex === totalPages
							? "bg-gray-400 text-white opacity-50"
							: "bg-[#1E4E6A] text-white hover:bg-[#1E4E6A]/80",
					)}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div> */}
		</div>
	);
};

export default BlogPage;
