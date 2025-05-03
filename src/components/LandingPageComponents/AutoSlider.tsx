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
		backgroundImage: "/Landing/AutoSlider/بیلبورد-ازکی 1.png",
		foregroundImage: "/Landing/AutoSlider/Azki.svg",
	},
	{
		id: 2,
		backgroundImage: "/Landing/AutoSlider/images 1-3.png",
		foregroundImage: "/Landing/AutoSlider/pril.svg",
	},
	{
		id: 3,
		backgroundImage: "/Landing/AutoSlider/اسنوا-1 1.png",
		foregroundImage: "/Landing/AutoSlider/Group 78.svg",
	},
	{
		id: 4,
		backgroundImage: "/Landing/AutoSlider/IMG_0478 2.png",
		foregroundImage: "/Landing/AutoSlider/Group 77.svg",
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
				"relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg",
				className,
			)}
		>
			{/* Main slider with flex column layout */}
			<div className="relative flex w-full flex-col">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: "spring", stiffness: 100 }}
						className="flex flex-col items-center"
					>
						{/* Background image container */}
						<div className="relative h-[15.5rem] w-full overflow-hidden rounded-lg">
							<Image
								src={slides[currentIndex].backgroundImage || "/PrillBg.png"}
								alt={`Background for slide ${slides[currentIndex].id}`}
								fill
								quality={100}
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
								className="object-cover object-center"
							/>
							<div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(16,53,77,0)_0%,#10354D_100%)] bg-cover"></div>
						</div>

						{/* Foreground image as caption below */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							transition={{
								type: "spring",
								stiffness: 100,
								delay: 0.1,
							}}
							className="mt-4 flex h-16 items-center justify-center"
						>
							<div className="relative h-12 w-32">
								<Image
									src={
										slides[currentIndex].foregroundImage || "/placeholder.svg"
									}
									alt={`Logo for slide ${slides[currentIndex].id}`}
									fill
									quality={100}
									className="object-contain"
								/>
							</div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Optional: Slide indicators */}
			<div className="mt-4 flex justify-center space-x-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`h-2 w-2 rounded-full transition-all ${
							index === currentIndex ? "w-4 bg-blue-500" : "bg-gray-300"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
