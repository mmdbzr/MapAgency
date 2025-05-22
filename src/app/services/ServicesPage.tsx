"use client";

import React from "react";

import Image from "next/image";

import Services from "./Services.json";
import { motion } from "framer-motion";

// Variants for the child cards
const childVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
			ease: "easeInOut",
		},
	},
};

// export interface ServicesPageProps {
// 	services: ServicesResponse["getServices"] | null;
// }

interface Service {
	title: string;
	description: string;
	src: string;
	textItems: string[];
}

const ServicesPage = () => {
	const services: Service[] = Services;

	return (
		<div className="mt-[94px] h-min px-6 pb-16">
			<section>
				<div className="relative mb-5 flex h-10 w-full flex-col items-center text-center lg:h-32">
					<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
						Services
					</p>
					<p className="font-kaaf absolute top-3 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
						خدمات
					</p>
				</div>

				{/* Services Section with Scroll Animation */}
				<section className="flex w-full flex-col items-center justify-center">
					<div className="grid w-full grid-cols-1 gap-y-16 lg:my-40">
						{services?.map((service, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								variants={childVariants}
								className="flex w-full items-center lg:justify-between lg:px-32"
							>
								<motion.div
									variants={textVariants}
									className="font-peyda w-full max-w-3xl px-4"
								>
									<h3 className="text-[14px] font-black lg:text-[43px]">
										{service.title}
									</h3>
									<p className="mt-4 text-[10px] leading-relaxed lg:text-[16px]">
										{service.description}
									</p>
									<div className="font-peyda mt-8 grid grid-cols-2 items-center justify-center gap-2 text-center lg:mt-12 lg:gap-y-5">
										{service.textItems.map((tag, index) => (
											<span
												key={index}
												className="flex items-center justify-center text-right"
											>
												<span className="bg-secondary-main !h-2 !w-2 lg:h-3 lg:w-3" />
												<p className="mr-1 !text-[10px] lg:mr-4 lg:!text-sm">
													{tag}
												</p>
											</span>
										))}
									</div>
								</motion.div>
								<motion.div
									variants={imageVariants}
									className="relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
								>
									<Image
										src={service.src}
										alt={service.title}
										fill
										className="object-cover"
									/>
								</motion.div>
							</motion.div>
						))}
					</div>
				</section>
			</section>
		</div>
	);
};

export default ServicesPage;
