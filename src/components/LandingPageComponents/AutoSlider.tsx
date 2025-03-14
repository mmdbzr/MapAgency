"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import cn from "@/utils/cn";

// Define the slide type
type Slide = {
	id: number;
	backgroundImage: string;
	foregroundImage: string;
};

// Sample slides data
const slides: Slide[] = [
	{
		id: 1,
		backgroundImage: "/Tosan.svg",
		foregroundImage: "/Azki.svg",
	},
	{
		id: 2,
		backgroundImage: "/Tosan.svg",
		foregroundImage: "/pril.svg",
	},
	{
		id: 3,
		backgroundImage: "/Tosan.svg",
		foregroundImage: "/pril.svg",
	},
];

interface AutoSliderProps {
	interval?: number;
	className?: string;
}

export default function AutoSlider({
	interval = 5000,
	className,
}: AutoSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	// Auto-play functionality
	useEffect(() => {
		// Clear any existing timer
		if (timerRef.current) clearInterval(timerRef.current);

		// Set up new timer for auto-sliding
		timerRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, interval);

		// Cleanup on unmount
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [interval]);

	return (
		<div
			className={cn(
				"relative mx-auto h-[15.5rem] w-full max-w-5xl overflow-hidden rounded-lg",
				className,
			)}
		>
			{/* Main slider */}
			<div className="relative h-full w-full">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ type: "spring", stiffness: 100 }}
						className="absolute inset-0 flex items-center justify-center"
					>
						{/* Background image with Next.js Image component */}
						<div className="absolute inset-0 -z-40">
							<Image
								src={slides[currentIndex].backgroundImage || "/PrillBg.png"}
								alt={`Background for ${slides[currentIndex]}`}
								fill
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
							/>
						</div>
						<div
							className="absolute -z-30 h-[247px] w-full bg-cover lg:h-full"
							style={{
								backgroundImage:
									"radial-gradient(50% 50% at 50% 50%, rgba(16, 53, 77, 0) 0%, #10354D 100%)",
							}}
						></div>

						{/* Foreground image with higher z-index */}
						<motion.div
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 100 }}
							className="absolute -z-20 flex h-full w-full items-center justify-center"
						>
							<div className="relative h-[100px] w-[100px]">
								<Image
									src={slides[currentIndex].foregroundImage}
									alt={`Foreground for ${slides[currentIndex]}`}
									fill
									className="h-[72px] w-16 object-contain"
								/>
							</div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
