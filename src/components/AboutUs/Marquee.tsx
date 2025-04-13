"use client";

import type React from "react";
import type { ComponentPropsWithoutRef } from "react";

import Image from "next/image";

import cn from "@/utils/cn";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
	/**
	 * Optional CSS class name to apply custom styles
	 */
	className?: string;
	/**
	 * Whether to reverse the animation direction
	 * @default false
	 */
	reverse?: boolean;
	/**
	 * Whether to pause the animation on hover
	 * @default false
	 */
	pauseOnHover?: boolean;
	/**
	 * Whether to animate vertically instead of horizontally
	 * @default false
	 */
	vertical?: boolean;
	/**
	 * Number of times to repeat the content
	 * @default 4
	 */
	repeat?: number;
}

const Images: string[] = [
	"/Images/AboutUs/Frame 1000002388-2.png",
	"/Images/AboutUs/Frame 1000002387-2.png",
	"/Images/AboutUs/Frame 1000002386.png",
	"/Images/AboutUs/Frame 1000002385.png",
	"/Images/AboutUs/Frame 1000002388-2.png",
	"/Images/AboutUs/Frame 1000002387-2.png",
	"/Images/AboutUs/Frame 1000002386.png",
	"/Images/AboutUs/Frame 1000002385.png",
];

export function Marquee({
	className,
	reverse = true,
	pauseOnHover = true,
	vertical = false,
	repeat = 10,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			className={cn(
				"group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
				{
					"flex-row": !vertical,
					"flex-col": vertical,
				},
				className,
			)}
		>
			<style>{`
				@keyframes marquee {
					0% { transform: translateX(0); }
					100% { transform: translateX(calc(-100% - var(--gap))); }
				}
				@keyframes marquee-vertical {
					0% { transform: translateY(0); }
					100% { transform: translateY(calc(-100% - var(--gap))); }
				}
				.animate-marquee {
					animation: marquee var(--duration) linear infinite;
				}
				.animate-marquee-vertical {
					animation: marquee-vertical var(--duration) linear infinite;
				}
			`}</style>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
							"animate-marquee flex-row": !vertical,
							"animate-marquee-vertical flex-col": vertical,
							"group-hover:[animation-play-state:paused]": pauseOnHover,
							"[animation-direction:reverse]": reverse,
						})}
					>
						{Images.map((image, index) => (
							<Image
								key={`${i}-${index}`}
								src={image}
								alt={`Image ${index}`}
								width={280}
								height={280}
								className="mx-2 h-28 w-28 flex-shrink-0 object-cover lg:h-[280px] lg:w-[280px]"
							/>
						))}
					</div>
				))}
		</div>
	);
}
