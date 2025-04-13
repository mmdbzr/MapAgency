"use client";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import CloseIcon from "@/public/Close 2.svg";

interface ProjectDetails {
	client: string;
	date: string;
	services: string[];
	description: string;
	images: string[];
}

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	type: string;
	details: ProjectDetails;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/image 2.png",
		type: "طراحی وب و اپلیکیشن",
		details: {
			client: "مشتری 1",
			date: "1402/12/15",
			services: ["طراحی وب", "توسعه اپلیکیشن"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 2.png",
				"/Images/projects/image 3.png",
				"/Images/projects/image 4.png",
			],
		},
	},
	{
		id: 2,
		title: "Project 2",
		description: "A mobile app",
		image: "/Images/projects/image 3.png",
		type: "برندینگ و هویت بصری",
		details: {
			client: "مشتری 2",
			date: "1402/12/16",
			services: ["طراحی لوگو", "برندینگ"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 3.png",
				"/Images/projects/image 4.png",
				"/Images/projects/image 5.png",
			],
		},
	},
	{
		id: 3,
		title: "Project 3",
		description: "Another web project",
		image: "/Images/projects/image 4.png",
		type: "طراحی وب و اپلیکیشن",
		details: {
			client: "مشتری 3",
			date: "1402/12/17",
			services: ["طراحی وب", "توسعه اپلیکیشن"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 4.png",
				"/Images/projects/image 5.png",
				"/Images/projects/image 6.png",
			],
		},
	},
	{
		id: 4,
		title: "Project 4",
		description: "An AI project",
		image: "/Images/projects/image 5.png",
		type: "برندینگ و هویت بصری",
		details: {
			client: "مشتری 4",
			date: "1402/12/18",
			services: ["طراحی لوگو", "برندینگ"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 5.png",
				"/Images/projects/image 6.png",
				"/Images/projects/image 7.png",
			],
		},
	},
	{
		id: 5,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/image 6.png",
		type: "طراحی وب و اپلیکیشن",
		details: {
			client: "مشتری 5",
			date: "1402/12/19",
			services: ["طراحی وب", "توسعه اپلیکیشن"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 6.png",
				"/Images/projects/image 7.png",
				"/Images/projects/image 8.png",
			],
		},
	},
	{
		id: 6,
		title: "Project 2",
		description: "A mobile app",
		image: "/Images/projects/image 7.png",
		type: "تبلیغات و کمپین‌ها",
		details: {
			client: "مشتری 6",
			date: "1402/12/20",
			services: ["تبلیغات", "کمپین"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 7.png",
				"/Images/projects/image 8.png",
				"/Images/projects/IMG_0319 1.png",
			],
		},
	},
	{
		id: 7,
		title: "",
		description: "Another web project",
		image: "/Images/projects/image 8.png",
		type: "تبلیغات و کمپین‌ها",
		details: {
			client: "مشتری 7",
			date: "1402/12/21",
			services: ["تبلیغات", "کمپین"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/image 8.png",
				"/Images/projects/IMG_0319 1.png",
				"/Images/projects/IMG_0396 1.png",
			],
		},
	},
	{
		id: 8,
		title: "Project 4",
		description: "An AI project",
		image: "/Images/projects/IMG_0319 1.png",
		type: "برندینگ و هویت بصری",
		details: {
			client: "مشتری 8",
			date: "1402/12/22",
			services: ["طراحی لوگو", "برندینگ"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/IMG_0319 1.png",
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
			],
		},
	},
	{
		id: 9,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/IMG_0396 1.png",
		type: "تولید محتوای ویدیویی",
		details: {
			client: "مشتری 9",
			date: "1402/12/23",
			services: ["تولید محتوا", "ویدیو"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
			],
		},
	},
	{
		id: 10,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/catalogue 1.png",
		type: "تولید محتوای ویدیویی",
		details: {
			client: "مشتری 9",
			date: "1402/12/23",
			services: ["تولید محتوا", "ویدیو"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
			],
		},
	},
	{
		id: 11,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/rada 1-2.png",
		type: "تولید محتوای ویدیویی",
		details: {
			client: "مشتری 9",
			date: "1402/12/23",
			services: ["تولید محتوا", "ویدیو"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
			],
		},
	},
	{
		id: 12,
		title: "Project 1",
		description: "A web development project",
		image: "/Images/projects/shabash 1-2.png",
		type: "تولید محتوای ویدیویی",
		details: {
			client: "مشتری 9",
			date: "1402/12/23",
			services: ["تولید محتوا", "ویدیو"],
			description: "توضیحات کامل پروژه در اینجا قرار می‌گیرد...",
			images: [
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
				"/Images/projects/IMG_0396 1.png",
			],
		},
	},
];

const types = [...new Set(projects.map((project) => project.type))];
const tabs = ["همه پروژه ها", ...types];

interface ProjectModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!project) return null;

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === project.details.images.length - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? project.details.images.length - 1 : prev - 1,
		);
	};

	return (
		<AnimatePresence mode="wait">
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="bg-primary-900/80 fixed inset-0 z-40"
						onClick={onClose}
					/>
					<motion.div
						initial={{ y: "100%", x: "-50%" }}
						animate={{ y: "-50%", x: "-50%" }}
						exit={{ y: "100%", x: "-50%" }}
						transition={{
							type: "spring",
							damping: 25,
							stiffness: 120,
							duration: 0.5,
						}}
						className="bg-primary-900 lg:scrollbar-hide fixed top-1/2 left-1/2 z-50 h-[385px] w-[343px] max-w-4xl overflow-y-auto rounded-3xl border border-solid border-[#038BB7] p-6 lg:h-[728px] lg:w-[1904px]"
					>
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-[14px] font-bold lg:text-2xl">
								{project.title}
							</h2>
							<CloseIcon onClick={onClose} />
						</div>
						<div className="flex flex-col gap-6">
							<div className="relative w-full">
								<div className="scrollbar-hide flex h-[95px] w-full gap-4 overflow-x-auto lg:h-[300px]">
									{project.details.images.map((image, index) => (
										<div
											key={index}
											className="relative h-[94px] min-w-[300px] flex-shrink-0 lg:h-full"
										>
											<Image
												src={image}
												alt={`${project.title} - Image ${index + 1}`}
												fill
												quality={100}
												className="rounded-lg object-cover"
											/>
										</div>
									))}
								</div>
							</div>
							<div className="space-y-4">
								<div>
									<h3 className="mb-2 font-bold">مشتری:</h3>
									<p>{project.details.client}</p>
								</div>
								<div>
									<h3 className="mb-2 font-bold">تاریخ:</h3>
									<p>{project.details.date}</p>
								</div>
								<div>
									<h3 className="mb-2 font-bold">خدمات:</h3>
									<ul className="list-inside list-disc">
										{project.details.services.map(
											(service: string, index: number) => (
												<li key={index}>{service}</li>
											),
										)}
									</ul>
								</div>
								<div>
									<h3 className="mb-2 font-bold">توضیحات:</h3>
									<p>{project.details.description}</p>
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default function Page() {
	const [selectedTab, setSelectedTab] = useState("همه پروژه ها");
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const filteredProjects =
		selectedTab === "همه پروژه ها"
			? projects
			: projects.filter((project) => project.type === selectedTab);

	return (
		<div className="mt-[96px] h-full min-h-[calc(100vh-96px)] px-6 pb-12 lg:px-[117px]">
			<div className="relative -z-10 mt-[45px] flex h-10 w-full flex-col items-center text-center lg:mt-[73px] lg:h-32">
				<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
					Showcase of Recent Works
				</p>
				<p className="font-kaaf absolute top-2 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
					جدیدترین کمپین‌ها و پروژه‌ها
				</p>
			</div>
			<nav>
				<ul className="scrollbar-hide flex w-full cursor-pointer space-x-6 overflow-x-scroll">
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
										width={1500}
										height={0}
										style={{ height: "auto", width: "100%" }}
										className="cursor-pointer object-cover transition-opacity hover:opacity-90"
										quality={100}
										onClick={() => setSelectedProject(project)}
									/>
								</div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</main>
			<ProjectModal
				project={selectedProject}
				isOpen={!!selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</div>
	);
}
