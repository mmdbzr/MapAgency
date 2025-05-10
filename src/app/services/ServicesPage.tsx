"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { ServicesResponse } from "@/types/ServicesResponse";

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

export interface ServicesPageProps {
	services: ServicesResponse["getServices"] | null;
}
const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
	// const services: Service[] = [
	// 	{
	// 		title: "مشاوره و استراتژی",
	// 		description:
	// 			"با بررسی داده‌ها و گزارش‌های کلیدی، نقاط قوت و ضعف عملکرد کسب‌وکار شما را شناسایی کرده و پیشنهادهای عملی برای بهبود و رشد ارائه می‌دهیم.",
	// 		src: Im,
	// 		textItems: [
	// 			"توسعه استراتژی بازاریابی",
	// 			"نقشه برداری سفر مشتری",
	// 			"استراتژی و جایگاه برند",
	// 			"استراتژی کمپین ",
	// 		],
	// 	},
	// 	{
	// 		title: "تحلیل و تحقیقات بازار",
	// 		description:
	// 			"درک عمیق از نیازهای بازار و رفتار مشتریان، پایه‌ای برای ایجاد استراتژی‌های بازاریابی موفق است. با تحلیل دقیق و تحقیقات جامع، می‌توان مسیر تبلیغات را به سوی بهترین نتایج هدایت کرد.",
	// 		src: Image2,
	// 		textItems: [
	// 			"شناسایی مخاطبان هدف",
	// 			"جمع‌آوری و تفسیر داده‌های بازار",
	// 			"تحلیل رقبا و بررسی روندهای بازار",
	// 			"تدوین استراتژی مبتنی بر داده",
	// 		],
	// 	},
	// 	{
	// 		title: "تحلیل و آنالیز گزارشات",
	// 		description:
	// 			"تصمیم‌گیری آگاهانه، نیازمند داده‌های قابل اعتماد است. تحلیل و آنالیز گزارشات تبلیغاتی به شما کمک می‌کند عملکرد کمپین‌ها را ارزیابی کرده و راهکارهای بهینه‌سازی را شناسایی کنید.",
	// 		src: Image3,
	// 		textItems: [
	// 			"بررسی عملکرد کمپین‌ها",
	// 			"استخراج نقاط قوت و ضعف",
	// 			"تحلیل رفتار مشتریان",
	// 			"ارائه گزارش‌های جامع و کاربردی",
	// 		],
	// 	},
	// ];

	return (
		<div className="mt-[94px] h-min px-6 pb-16">
			<section>
				<div className="relative mb-5 flex h-10 w-full flex-col items-center text-center lg:h-32">
					{/* <p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
						Services
					</p> */}
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
								className="flex w-full flex-col items-center"
							>
								<motion.div
									variants={imageVariants}
									className="relative h-[200px] w-full lg:h-[400px]"
								>
									<Image
										src={
											process.env.NEXT_PUBLIC_API_URL +
											service.image.download_url
										}
										alt={service.title}
										fill
										className="object-cover"
									/>
								</motion.div>
								<motion.div
									variants={textVariants}
									className="font-peyda mt-6 w-full max-w-3xl px-4 text-center"
								>
									<h3 className="text-lg font-black lg:text-[43px]">
										{service.title}
									</h3>
									<p
										className="mt-4 text-[14px] leading-relaxed lg:text-[16px]"
										dangerouslySetInnerHTML={{ __html: service?.description }}
									/>
									<div className="font-peyda mt-8 grid grid-cols-2 items-center justify-center gap-4 text-center lg:mt-12 lg:gap-y-5">
										{service.tags.map((tag, index) => (
											<span
												key={index}
												className="flex items-center justify-center"
											>
												<span className="bg-secondary-main h-1 w-1 lg:h-3 lg:w-3" />
												<p className="mr-1 text-[12px] lg:mr-4 lg:text-sm">
													{tag}
												</p>
											</span>
										))}
									</div>
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
