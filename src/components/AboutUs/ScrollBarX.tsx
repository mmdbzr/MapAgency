import React from "react";

import Image from "next/image";

import cn from "@/utils/cn";

interface ScrollBarX {
	images: string[];
	className?: string;
}

const ScrollBarX: React.FC<ScrollBarX> = ({ images, className }) => {
	return (
		<div
			className={cn(
				"scrollbar-hide flex h-28 w-full snap-x snap-mandatory space-x-4 overflow-x-auto lg:h-[280px]",
				className,
			)}
		>
			{images.map((image, index) => (
				<div
					key={index}
					className="relative h-28 w-28 flex-shrink-0 lg:h-[280px] lg:w-[280px]"
				>
					<Image
						src={image}
						alt={`تصویر ${index}`}
						layout="fill"
						objectFit="cover"
					/>
				</div>
			))}
		</div>
	);
};

export default ScrollBarX;
