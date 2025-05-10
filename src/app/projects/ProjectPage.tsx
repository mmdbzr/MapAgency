"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { parseAsString, useQueryState } from "nuqs";

import ProjectModal from "@/components/ProjectModal/ProjectModal";
import { ServicesResponse } from "@/types/ServicesResponse";

interface ProjectDetails {
	client: string;
	date: string;
	services: string[];
	description: string;
	images: string[];
}

// interface Project {
// 	id: number;
// 	title: string;
// 	description: string;
// 	image: string;
// 	type: string;
// 	details: ProjectDetails;
// }

// const Dom_projects: Project[] = [
// 	{
// 		id: 1,
// 		title: "Project 1",
// 		description: "A web development project",
// 		image: "/Images/projects/image 2.png",
// 		type: "طراحی وب و اپلیکیشن",
// 		details: {
// 			client: "مشتری 1",
// 			date: "1402/12/15",
// 			services: ["طراحی وب", "توسعه اپلیکیشن"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 2.png",
// 				"/Images/projects/image 3.png",
// 				"/Images/projects/image 4.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 2,
// 		title: "Project 2",
// 		description: "A mobile app",
// 		image: "/Images/projects/image 3.png",
// 		type: "برندینگ و هویت بصری",
// 		details: {
// 			client: "مشتری 2",
// 			date: "1402/12/16",
// 			services: ["طراحی لوگو", "برندینگ"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 3.png",
// 				"/Images/projects/image 4.png",
// 				"/Images/projects/image 5.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 3,
// 		title: "Project 3",
// 		description: "Another web project",
// 		image: "/Images/projects/image 4.png",
// 		type: "طراحی وب و اپلیکیشن",
// 		details: {
// 			client: "مشتری 3",
// 			date: "1402/12/17",
// 			services: ["طراحی وب", "توسعه اپلیکیشن"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 4.png",
// 				"/Images/projects/image 5.png",
// 				"/Images/projects/image 6.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 4,
// 		title: "Project 4",
// 		description: "An AI project",
// 		image: "/Images/projects/image 5.png",
// 		type: "برندینگ و هویت بصری",
// 		details: {
// 			client: "مشتری 4",
// 			date: "1402/12/18",
// 			services: ["طراحی لوگو", "برندینگ"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 5.png",
// 				"/Images/projects/image 6.png",
// 				"/Images/projects/image 7.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 5,
// 		title: "Project 1",
// 		description: "A web development project",
// 		image: "/Images/projects/image 6.png",
// 		type: "طراحی وب و اپلیکیشن",
// 		details: {
// 			client: "مشتری 5",
// 			date: "1402/12/19",
// 			services: ["طراحی وب", "توسعه اپلیکیشن"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 6.png",
// 				"/Images/projects/image 7.png",
// 				"/Images/projects/image 8.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 6,
// 		title: "Project 2",
// 		description: "A mobile app",
// 		image: "/Images/projects/image 7.png",
// 		type: "تبلیغات و کمپین‌ها",
// 		details: {
// 			client: "مشتری 6",
// 			date: "1402/12/20",
// 			services: ["تبلیغات", "کمپین"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 7.png",
// 				"/Images/projects/image 8.png",
// 				"/Images/projects/IMG_0319 1.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 7,
// 		title: "",
// 		description: "Another web project",
// 		image: "/Images/projects/image 8.png",
// 		type: "تبلیغات و کمپین‌ها",
// 		details: {
// 			client: "مشتری 7",
// 			date: "1402/12/21",
// 			services: ["تبلیغات", "کمپین"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/image 8.png",
// 				"/Images/projects/IMG_0319 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 8,
// 		title: "Project 4",
// 		description: "An AI project",
// 		image: "/Images/projects/IMG_0319 1.png",
// 		type: "برندینگ و هویت بصری",
// 		details: {
// 			client: "مشتری 8",
// 			date: "1402/12/22",
// 			services: ["طراحی لوگو", "برندینگ"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/IMG_0319 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 9,
// 		title: "Project 1",
// 		description: "A web development project",
// 		image: "/Images/projects/IMG_0396 1.png",
// 		type: "تولید محتوای ویدیویی",
// 		details: {
// 			client: "مشتری 9",
// 			date: "1402/12/23",
// 			services: ["تولید محتوا", "ویدیو"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 10,
// 		title: "Project 1",
// 		description: "A web development project",
// 		image: "/Images/projects/catalogue 1.png",
// 		type: "تولید محتوای ویدیویی",
// 		details: {
// 			client: "مشتری 9",
// 			date: "1402/12/23",
// 			services: ["تولید محتوا", "ویدیو"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 11,
// 		title: "Project 1",
// 		description: "A web development project",
// 		image: "/Images/projects/rada 1-2.png",
// 		type: "تولید محتوای ویدیویی",
// 		details: {
// 			client: "مشتری 9",
// 			date: "1402/12/23",
// 			services: ["تولید محتوا", "ویدیو"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 			],
// 		},
// 	},
// 	{
// 		id: 12,
// 		title: "Project 1",
// 		description: "A web development project",
// 		image: "/Images/projects/shabash 1-2.png",
// 		type: "تولید محتوای ویدیویی",
// 		details: {
// 			client: "مشتری 9",
// 			date: "1402/12/23",
// 			services: ["تولید محتوا", "ویدیو"],
// 			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
// 			images: [
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 				"/Images/projects/IMG_0396 1.png",
// 			],
// 		},
// 	},
// ];

interface ProjectPageProps {
	project: ServicesResponse["getProducts"];
	categories: ServicesResponse["getProductsCategories"];
}

export default function ProjectPage({ project, categories }: ProjectPageProps) {
	const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
	const [categoryQueryState, setCategoryQueryState] = useQueryState(
		"category",
		parseAsString.withDefault("").withOptions({
			clearOnDefault: true,
			shallow: false,
		}),
	);

	const tabs = useMemo(() => {
		return [
			{ label: "همه پروژه ها", value: "" },
			...categories.map((category) => ({
				label: category.title,
				value: category.slug,
			})),
		];
	}, [categories.length]);

	return (
		<div className="mt-[96px] h-full min-h-[calc(100vh-96px)] px-6 pb-12 lg:px-[117px]">
			<div className="relative -z-10 mt-[45px] flex h-10 w-full flex-col items-center text-center lg:mt-[73px] lg:h-32">
				{/* <p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
					Showcase of Recent Works
				</p> */}
				<p className="font-kaaf absolute top-2 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
					جدیدترین کمپین‌ها و پروژه‌ها
				</p>
			</div>
			<nav>
				<ul className="scrollbar-hide flex w-full cursor-pointer space-x-6 overflow-x-scroll">
					{tabs.map((tab) => (
						<motion.li
							key={tab.value}
							initial={false}
							animate={{
								backgroundColor:
									tab.value === categoryQueryState ? "#0a6f94" : "transparent",
								fontWeight:
									tab.value === categoryQueryState ? "bold" : "normal",
							}}
							onClick={() => {
								if (tab.value === "") {
									setCategoryQueryState("");
								} else {
									setCategoryQueryState(tab.value);
								}
							}}
							className="flex-shrink-0 rounded-tl-[24px] rounded-br-[24px] px-2.5 py-2 text-[10px] lg:p-4 lg:text-[16px]"
						>
							{tab.label}
						</motion.li>
					))}
				</ul>
			</nav>

			<main className="mt-6">
				<AnimatePresence mode="wait">
					<motion.div
						key={categoryQueryState}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="columns-3 gap-1 lg:gap-4">
							{project.results.map((project) => {
								return (
									<div
										key={project.title}
										className="mb-1 break-inside-avoid lg:mb-4"
										onClick={() => {
											setSelectedSlug(project.slug);
										}}
									>
										<Image
											src={
												project.picture?.download_url
													? process.env.NEXT_PUBLIC_API_URL +
														project.picture.download_url
													: ""
											}
											alt={project.title}
											width={1500}
											height={0}
											style={{ height: "auto", width: "100%" }}
											className="cursor-pointer object-cover transition-opacity hover:opacity-90"
											quality={100}
										/>
									</div>
								);
							})}
						</div>
					</motion.div>
				</AnimatePresence>
			</main>
			<ProjectModal
				slug={selectedSlug}
				isOpen={!!selectedSlug}
				onClose={() => setSelectedSlug(null)}
			/>
		</div>
	);
}
