"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import cn from "@/utils/cn";

interface ScrollBarX {
	images: string[];
	className?: string;
	automatic?: boolean;
	scrollInterval?: number;
	direction?: "ltr" | "rtl";
}

const ScrollBarX: React.FC<ScrollBarX> = ({
	images,
	className,
	automatic = false,
	scrollInterval = 3000,
	direction = "ltr",
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [duration, setDuration] = useState(scrollInterval);

	useEffect(() => {
		if (!automatic || !containerRef.current || isPaused) return;

		const container = containerRef.current;
		const scrollWidth = container.scrollWidth;
		const clientWidth = container.clientWidth;
		const distance = scrollWidth / 2; // Because we have duplicated images

		// Calculate duration based on distance and speed
		const speed = 50; // pixels per second
		const calculatedDuration = (distance / speed) * 1000;
		setDuration(calculatedDuration);

		const marquee = container.querySelector(".marquee-content") as HTMLElement;
		if (!marquee) return;

		// Reset position
		marquee.style.transform =
			direction === "ltr" ? "translateX(0)" : "translateX(-50%)";

		// Animate
		marquee.style.animation = `marquee-${direction} ${duration}ms linear infinite`;

		return () => {
			marquee.style.animation = "none";
		};
	}, [automatic, scrollInterval, isPaused, direction]);

	const handleMouseEnter = () => {
		setIsHovered(true);
		setIsPaused(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setIsPaused(false);
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative h-28 w-full overflow-hidden lg:h-[280px]",
				className,
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<style>
				{`
					@keyframes marquee-ltr {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-50%);
						}
					}
					@keyframes marquee-rtl {
						0% {
							transform: translateX(-50%);
						}
						100% {
							transform: translateX(0);
						}
					}
					.marquee-content {
						display: flex;
						animation-play-state: ${isPaused ? "paused" : "running"};
					}
				`}
			</style>
			<div className="marquee-content">
				{images.map((image, index) => (
					<motion.div
						key={index}
						className="relative mx-2 h-28 w-28 flex-shrink-0 lg:h-[280px] lg:w-[280px]"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<Image
							src={image}
							alt={`تصویر ${index}`}
							layout="fill"
							objectFit="cover"
						/>
					</motion.div>
				))}
				{/* Duplicate images for seamless marquee */}
				{images.map((image, index) => (
					<motion.div
						key={`duplicate-${index}`}
						className="relative mx-2 h-28 w-28 flex-shrink-0 lg:h-[280px] lg:w-[280px]"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						<Image
							src={image}
							alt={`تصویر ${index}`}
							layout="fill"
							objectFit="cover"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ScrollBarX;
