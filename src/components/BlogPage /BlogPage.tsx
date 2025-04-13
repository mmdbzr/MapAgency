"use client";

import React, { useEffect, useState } from "react";

import BlogPost from "./BlogPost";
import PopularPost from "./PopularPost";
import { parseAsString, useQueryState } from "nuqs";

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
	const [category, setCategory] = useQueryState(
		"category",
		parseAsString.withDefault(""),
	);

	useEffect(() => {
		console.log({ categories: categoriesData });
	}, []);

	useEffect(() => {
		console.log("posts : ", { posts });
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	const [checkedItems, setCheckedItems] = useState({
		environmental: false,
		football: false,
		tehran: false,
		cities: false,
		media: false,
		strategy: false,
	});

	const handleCheckboxChange = (key: keyof typeof checkedItems) => {
		setCategory(category === key ? "" : key);
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
						<input className="w-full bg-transparent text-white outline-none placeholder:text-white/50" />
						<SearchIcon />
					</div>
					<div className="mt-4 flex w-full flex-col">
						<p className="text-[18px] font-extrabold">برچسب ها</p>
						<div className="flex w-full flex-col gap-3 rounded-tl-3xl rounded-br-3xl">
							<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
								<input
									type="checkbox"
									checked={category === "environmental"}
									onChange={() => handleCheckboxChange("environmental")}
									className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
								/>
								<span className="text-[14px]">تبلیغات محیطی</span>
							</label>
							<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
								<input
									type="checkbox"
									checked={category === "football"}
									onChange={() => handleCheckboxChange("football")}
									className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
								/>
								<span className="text-[14px]">لیگ برتر فوتبال ایران</span>
							</label>
							<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
								<input
									type="checkbox"
									checked={category === "tehran"}
									onChange={() => handleCheckboxChange("tehran")}
									className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
								/>
								<span className="text-[14px]">تبلیغات در تهران</span>
							</label>
							<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
								<input
									type="checkbox"
									checked={category === "cities"}
									onChange={() => handleCheckboxChange("cities")}
									className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
								/>
								<span className="text-[14px]">تبلیغات شهرستان‌ها</span>
							</label>
							<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
								<input
									type="checkbox"
									checked={category === "media"}
									onChange={() => handleCheckboxChange("media")}
									className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
								/>
								<span className="text-[14px]">صدا و سیما</span>
							</label>
							<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
								<input
									type="checkbox"
									checked={category === "strategy"}
									onChange={() => handleCheckboxChange("strategy")}
									className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
								/>
								<span className="text-[14px]">استراتژی تبلیغات</span>
							</label>
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
								{categoriesData?.length &&
									categoriesData.map((category) => (
										<label
											className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2"
											key={category.id}
										>
											<input
												type="checkbox"
												checked={checkedItems.environmental}
												onChange={() => handleCheckboxChange("environmental")}
												className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
											/>
											<span className="text-[14px]">{category.title}</span>
										</label>
									))}

								<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
									<input
										type="checkbox"
										checked={checkedItems.football}
										onChange={() => handleCheckboxChange("football")}
										className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
									/>
									<span className="text-[14px]">لیگ برتر فوتبال ایران</span>
								</label>
								<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
									<input
										type="checkbox"
										checked={checkedItems.tehran}
										onChange={() => handleCheckboxChange("tehran")}
										className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
									/>
									<span className="text-[14px]">تبلیغات در تهران</span>
								</label>
								<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
									<input
										type="checkbox"
										checked={checkedItems.cities}
										onChange={() => handleCheckboxChange("cities")}
										className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
									/>
									<span className="text-[14px]">تبلیغات شهرستان‌ها</span>
								</label>
								<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
									<input
										type="checkbox"
										checked={checkedItems.media}
										onChange={() => handleCheckboxChange("media")}
										className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
									/>
									<span className="text-[14px]">صدا و سیما</span>
								</label>
								<label className="flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2">
									<input
										type="checkbox"
										checked={checkedItems.strategy}
										onChange={() => handleCheckboxChange("strategy")}
										className="h-4 w-4 appearance-none rounded border-2 border-[#038BB7] checked:bg-[#038BB7]"
									/>
									<span className="text-[14px]">استراتژی تبلیغات</span>
								</label>
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
								image={post.pictures?.[0] as string}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
