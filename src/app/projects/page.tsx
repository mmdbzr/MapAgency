"use client";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

const projects = [
	{
		id: 1,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/image 2.png",
		type: "طراحی وب و اپلیکیشن",
	},
	{
		id: 2,
		title: "Project 2",
		description: "A mobile app",
		image: "/Images/projects/image 3.png",
		type: "برندینگ و هویت بصری",
	},
	{
		id: 3,
		title: "Project 3",
		description: "Another web project",
		image: "/Images/projects/image 4.png",
		type: "طراحی وب و اپلیکیشن",
	},
	{
		id: 4,
		title: "Project 4",
		description: "An AI project",
		image: "/Images/projects/image 5.png",
		type: "برندینگ و هویت بصری",
	},
	{
		id: 5,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/image 6.png",
		type: "طراحی وب و اپلیکیشن",
	},
	{
		id: 6,
		title: "Project 2",
		description: "A mobile app",
		image: "/Images/projects/image 7.png",
		type: "تبلیغات و کمپین‌ها",
	},
	{
		id: 7,
		title: "",
		description: "Another web project",
		image: "/Images/projects/image 8.png",
		type: "تبلیغات و کمپین‌ها",
	},
	{
		id: 8,
		title: "Project 4",
		description: "An AI project",
		image: "/Images/projects/IMG_0319 1.png",
		type: "برندینگ و هویت بصری",
	},
	{
		id: 9,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/IMG_0396 1.png",
		type: "تولید محتوای ویدیویی",
	},
];

const types = [...new Set(projects.map((project) => project.type))];
const tabs = ["همه پروژه ها", ...types];

export default function Page() {
	const [selectedTab, setSelectedTab] = useState("همه پروژه ها");

	const filteredProjects =
		selectedTab === "همه پروژه ها"
			? projects
			: projects.filter((project) => project.type === selectedTab);

	return (
		<div className="mt-[96px] h-full px-6 pb-12 lg:px-[117px]">
			<div className="relative -z-10 mt-[45px] flex h-10 w-full flex-col items-center text-center lg:mt-[73px] lg:h-32">
				<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
					Showcase of Recent Works
				</p>
				<p className="font-kaaf absolute top-2 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
					جدیدترین کمپین‌ها و پروژه‌ها
				</p>
			</div>
			<nav>
				<ul className="scrollbar-hide flex w-full space-x-6 overflow-x-scroll">
					{tabs.map((tab) => (
						<motion.li
							key={tab}
							initial={false}
							animate={{
								backgroundColor:
									tab === selectedTab ? "#0a6f94" : "transparent",
								fontWeight: tab === selectedTab ? "bold" : "normal",
							}}
							onClick={() => setSelectedTab(tab)}
							className="flex-shrink-0 rounded-tl-[24px] rounded-br-[24px] px-2.5 py-2 text-[10px] lg:p-4 lg:text-[16px]"
						>
							{tab}
						</motion.li>
					))}
				</ul>
			</nav>

			<main className="mt-6">
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedTab}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
					>
						<div className="columns-3 gap-1 lg:gap-4">
							{filteredProjects.map((project) => (
								<div
									key={project.id}
									className="mb-1 break-inside-avoid lg:mb-4"
								>
									<Image
										src={project.image}
										alt={project.title}
										width={1500} // Adjust based on your needs
										height={0} // Set to 0 to let it scale proportionally
										style={{ height: "auto", width: "100%" }} // Ensures natural height
										className="object-cover"
										quality={100}
									/>
								</div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</main>
		</div>
	);
}
