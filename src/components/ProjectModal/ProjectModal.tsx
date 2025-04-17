"use client";

import { useState } from "react";
import { useEffect } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import CloseIcon from "@/public/Close 2.svg";
import Services from "@/services";
import { ServicesResponse } from "@/types/ServicesResponse";

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

interface ProjectModalProps {
	slug: string | null;
	isOpen: boolean;
	onClose: () => void;
}

const ProjectModal = ({ slug, isOpen, onClose }: ProjectModalProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [project, setProject] = useState<
		ServicesResponse["getSingleProduct"] | null
	>(null);

	console.log("slug : ", slug);

	useEffect(() => {
		if (slug) {
			Services.getSingleProduct(slug)
				.then((project) => {
					console.log(
						"project modal gallery: ",
						project?.gallery[0].download_url,
					);
					setProject(project);
				})
				.catch((error) => {
					console.log("error : ", error);
					setProject(null);
				});
		}
	}, [slug]);

	if (!slug) return null;

	// const nextImage = () => {
	// 	setCurrentImageIndex((prev) =>
	// 		prev === project.details.images.length - 1 ? 0 : prev + 1,
	// 	);
	// };

	// const prevImage = () => {
	// 	setCurrentImageIndex((prev) =>
	// 		prev === 0 ? project.details.images.length - 1 : prev - 1,
	// 	);
	// };

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
								{project?.title}
							</h2>
							<CloseIcon onClick={onClose} />
						</div>
						<div className="flex flex-col gap-6">
							<div className="relative w-full">
								<div className="scrollbar-hide flex h-[95px] w-full gap-4 overflow-x-auto lg:h-[300px]">
									{project?.gallery.map((image, index) => (
										<div
											key={index}
											className="relative h-[94px] min-w-[300px] flex-shrink-0 lg:h-full"
										>
											<Image
												src={
													process.env.NEXT_PUBLIC_API_URL + image.download_url
												}
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
								{/* <div>
									<h3 className="mb-2 font-bold">مشتری:</h3>
									<p>{project.clie}</p>
								</div> */}
								{/* <div>
									<h3 className="mb-2 font-bold">تاریخ:</h3>
									<p>{project.}</p>
								</div> */}
								{/* <div>
									<h3 className="mb-2 font-bold">خدمات:</h3>
									<ul className="list-inside list-disc">
										{project.details.services.map(
											(service: string, index: number) => (
												<li key={index}>{service}</li>
											),
										)}
									</ul>
								</div> */}
								<div>
									<h3 className="mb-2 font-bold">توضیحات:</h3>
									<div
										dangerouslySetInnerHTML={{
											__html: project?.description || "",
										}}
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default ProjectModal;
