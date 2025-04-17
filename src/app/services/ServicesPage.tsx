"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { ServicesResponse } from "@/types/ServicesResponse";

// Variants for the child cards
const childVariants = {
	hidden: { x: -100, opacity: 0 }, // Start 100px to the left, fully transparent
	show: {
		x: 0,
		opacity: 1, // Fully opaque when entering
		transition: {
			duration: 0.5, // Duration of each child's animation
			ease: "easeInOut", // Smooth easing for a natural feel
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
				{/* Header Section */}
				<div className="relative mt-[45px] mb-5 flex h-10 w-full flex-col items-center text-center lg:mt-[73px] lg:h-32">
					<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
						Services
					</p>
					<p className="font-kaaf absolute top-3 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
						خدمات
					</p>
				</div>

				{/* Services Section with Scroll Animation */}
				<section className="flex w-full flex-col items-center justify-center">
					<div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 lg:my-40 lg:gap-y-20">
						{services?.map((service, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								variants={childVariants}
								className="flex lg:pr-4"
							>
								<div className="font-peyda w-full px-1">
									<h3 className="text-lg text-[14px] font-black lg:text-[43px]">
										{service.title}
									</h3>
									<p className="mt-1 mb-2 text-[10px] leading-[14px] lg:mt-4 lg:mb-8 lg:text-[16px]">
										{service.description}
									</p>
									<div className="grid grid-cols-2 gap-1.5 text-[10px] text-[#B7B7B7] lg:mt-12 lg:gap-y-5"></div>
								</div>
								<div className="relative h-full w-[110px] lg:h-[350px] lg:w-[450px]">
									<Image
										src={
											process.env.NEXT_PUBLIC_API_URL +
											service.image.download_url
										}
										alt={service.title}
										fill
										className="h-full w-full object-cover lg:h-[350px] lg:w-[450px]"
									/>
								</div>
							</motion.div>
						))}
					</div>
				</section>
			</section>
		</div>
	);
};

export default ServicesPage;
