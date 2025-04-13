"use client";

import { useEffect, useState } from "react";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import KermanIcon from "@/public/Images/LandingProvince/Vector 167-2.svg";
import YazdIcon from "@/public/Images/LandingProvince/Vector-5.svg";
import TehranIcon from "@/public/Images/LandingProvince/Vector-6.svg";
import EsfahanIcon from "@/public/Images/LandingProvince/Vector-7.svg";
import SouthKhorasanIcon from "@/public/Images/LandingProvince/Vector-10.svg";
import MazandaranIcon from "@/public/Images/LandingProvince/Vector-11.svg";
import SemnanIcon from "@/public/Images/LandingProvince/Vector-12.svg";
import GilanIcon from "@/public/Images/LandingProvince/Vector-13.svg";
import SistanIcon from "@/public/Images/LandingProvince/Vector-14.svg";
import cn from "@/utils/cn";

export default function SvgQueueAnimation() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [processedIndices, setProcessedIndices] = useState<number[]>([]);
	const [isAnimating, setIsAnimating] = useState(true);

	// Define SVG items
	const svgItems = [
		{
			id: 1,
			icon: <SistanIcon className="[&_path]:fill-none" />,
			text: "سیستان و بلوچستان",
		},
		{ id: 2, icon: <TehranIcon className="stroke-3" />, text: "تهران" },
		{
			id: 3,
			icon: <EsfahanIcon className="stroke-3" />,
			text: "اصفهان",
		},
		{
			id: 4,
			icon: <YazdIcon className="" />,
			text: "یزد",
		},
		{
			id: 5,
			icon: <KermanIcon className="" />,
			text: "کرمان",
		},
		{
			id: 6,
			icon: <SouthKhorasanIcon className="" />,
			text: "خراسان جنوبی",
		},
		{
			id: 7,
			icon: <MazandaranIcon className="" />,
			text: "مازندران",
		},
		{
			id: 8,
			icon: <SemnanIcon className="" />,
			text: "سمنان",
		},
		{
			id: 9,
			icon: <GilanIcon className="" />,
			text: "گیلان",
		},
	];

	// Animation effect
	useEffect(() => {
		if (!isAnimating) return;

		const startTimeout = setTimeout(() => {
			const interval = setInterval(() => {
				setCurrentIndex((prev) => {
					// Add current index to processed list
					setProcessedIndices((oldProcessed) => [...oldProcessed, prev]);

					const nextIndex = (prev + 1) % svgItems.length;

					// If we've completed a full cycle, reset
					if (nextIndex === 0) {
						setTimeout(() => {
							setProcessedIndices([]);
						}, 800);
					}

					return nextIndex;
				});
			}, 1300);

			return () => clearInterval(interval);
		}, 500);

		return () => clearTimeout(startTimeout);
	}, [isAnimating, svgItems.length]);

	// Calculate positions for all items
	const getItemPosition = (index: number) => {
		const SPACE = window.innerWidth < 1024 ? 230 : 350; // Smaller space below lg breakpoint (1024px)

		if (index === currentIndex) return "-50%"; // Center
		if (index < currentIndex) return `${-SPACE * (currentIndex - index)}px`; // Left of center
		return `${(SPACE + 50) * (index - currentIndex)}px`; // Right of center
	};

	return (
		<div className="relative mt-40 flex h-[300px] w-full items-center justify-center space-x-5">
			<div className="absolute h-[150px] w-[300px] rounded-full bg-[rgba(74,183,230,0.5)] blur-[150px] lg:left-[474px] lg:h-[200px] lg:w-[524px]" />

			<div className="relative flex h-full w-full max-w-[1440px] items-center overflow-x-hidden">
				<AnimatePresence>
					{svgItems.map((item, index) => (
						<motion.div
							key={`item-${item.id}-${index}`}
							initial={{
								x: getItemPosition(index),
								opacity: index === currentIndex ? 1 : 0.7,
								scale: index === currentIndex ? 1 : 0.8,
							}}
							animate={{
								x: getItemPosition(index),
								opacity: index === currentIndex ? 1 : 0.7,
								scale: index === currentIndex ? 1 : 0.8,
							}}
							exit={{
								x: "-100%",
								opacity: 0,
								scale: 0.8,
							}}
							transition={{
								type: "spring",
								stiffness: 100,
								damping: 20,
								duration: 0.8,
							}}
							className="absolute top-[50%] left-[50%] mx-5 -translate-y-1/2"
						>
							<div className="relative z-10 flex flex-col items-center justify-center gap-16">
								<div className="min-h-fit min-w-fit">
									{React.cloneElement(item.icon, {
										className: cn(
											" [&_path]:stroke-[0.5px] lg:[&_path]:stroke-[1px]  w-[150px] h-[150px] lg:w-[230px] lg:h-[150px] ",
											index === currentIndex &&
												"fill-secondary-main/30 scale-100 lg:scale-130 [&_path]:stroke-[1px] lg:[&_path]:stroke-[1.5px] [&_path]:stroke-secondary-main",
										),
									})}
								</div>
								{index === currentIndex && (
									<motion.div
										// className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 text-center"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										<p className="text-[14px] font-black text-white lg:text-[16px]">
											{item.text}
										</p>
									</motion.div>
								)}
								{/* {index === currentIndex && (
										<motion.div
											className="absolute top-0 left-1/4 -z-10 h-full w-full -translate-x-1/2 bg-blend-multiply"
											style={{
												background:
													"radial-gradient(circle, rgba(11,194,235,0.7) 0%, rgba(11,194,235,0) 70%)",
												width: "180px",
												height: "180px",
												padding: "42px",
											}}
											initial={{ scale: 0.8, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{ type: "spring", stiffness: 300 }}
										/>
									)} */}
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}
