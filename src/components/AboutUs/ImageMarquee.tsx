"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion, useAnimationControls } from "framer-motion";

interface ImageMarqueeProps {
	images: {
		src: string;
		alt: string;
	}[];
	speed?: number;
	direction?: "left" | "right";
	gap?: number;
	className?: string;
}

export default function ImageMarquee({
	images,
	speed = 40,
	direction = "left",
	gap = 20,
	className = "",
}: ImageMarqueeProps) {
	const [containerWidth, setContainerWidth] = useState(0);
	const [contentWidth, setContentWidth] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const controls = useAnimationControls();

	useEffect(() => {
		if (!containerRef.current || !contentRef.current) return;

		const updateWidths = () => {
			setContainerWidth(containerRef.current?.offsetWidth || 0);
			setContentWidth(contentRef.current?.offsetWidth || 0);
		};

		// Initial measurement
		updateWidths();

		// Set up resize observer for responsive behavior
		const resizeObserver = new ResizeObserver(updateWidths);
		resizeObserver.observe(containerRef.current);
		resizeObserver.observe(contentRef.current);

		return () => resizeObserver.disconnect();
	}, [images]);

	useEffect(() => {
		if (containerWidth === 0 || contentWidth === 0) return;

		// Calculate duration based on content width and speed
		const duration = contentWidth / speed;

		// Determine the animation distance
		const distance = direction === "left" ? -contentWidth : contentWidth;

		// Start the animation
		controls.start({
			x: distance,
			transition: {
				duration,
				ease: "linear",
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "loop",
			},
		});
	}, [containerWidth, contentWidth, controls, direction, speed]);

	// We need enough duplicates to fill the container twice
	// This ensures seamless looping
	const duplicatedImages = [...images, ...images, ...images, ...images];

	return (
		<div
			ref={containerRef}
			className={`h-28 overflow-hidden lg:h-[280px] lg:w-full ${className}`}
		>
			<motion.div
				ref={contentRef}
				className="flex"
				initial={{ x: 0 }}
				animate={controls}
				style={{ gap: `${gap}px` }}
			>
				{duplicatedImages.map((image, index) => (
					<div
						key={`${image.src}-${index}`}
						className="relative h-28 w-28 flex-shrink-0 lg:h-[280px] lg:w-[280px]"
					>
						<Image
							src={image || "/placeholder.svg"}
							alt="image.alt"
							fill
							className="object-cover"
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
}
