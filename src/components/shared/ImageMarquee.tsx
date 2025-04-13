"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import cn from "@/utils/cn";

interface ImageMarqueeProps {
	images: string[];
	className?: string;
	automatic?: boolean;
	direction?: "ltr" | "rtl";
	speed?: number;
}

const ImageMarquee: React.FC<ImageMarqueeProps> = ({
	images,
	className,
	automatic = false,
	direction = "ltr",
	speed = 1,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [position, setPosition] = useState(0);

	useEffect(() => {
		if (!automatic || isHovered) return;

		const interval = setInterval(() => {
			setPosition((prev) => {
				const newPosition = prev + (direction === "ltr" ? -1 : 1) * speed;
				if (Math.abs(newPosition) >= 100) {
					return 0;
				}
				return newPosition;
			});
		}, 16); // 60fps

		return () => clearInterval(interval);
	}, [automatic, direction, speed, isHovered]);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			ref={containerRef}
			className={cn("relative w-full overflow-hidden", className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className="flex"
				style={{
					transform: `translateX(${position}%)`,
					transition: "transform 0.016s linear",
				}}
			>
				{images.map((image, index) => (
					<div key={index} className="relative mx-2 flex-shrink-0">
						<Image
							src={image}
							alt={`Image ${index}`}
							width={300}
							height={200}
							className="rounded-lg object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageMarquee;
