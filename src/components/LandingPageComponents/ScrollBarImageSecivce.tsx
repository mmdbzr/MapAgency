import Image from "next/image";

import cn from "@/utils/cn";

interface Item {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
}

interface ScrollBarImageSecivce {
	items: Item[];
	className?: string;
}

export default function ScrollBarImageSecivce({
	items = [
		{
			id: "1",
			title: "مشاوره و استراتژی",
			description: "A peaceful getaway surrounded by nature's beauty",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "2",
			title: "مشاوره و استراتژی",
			description:
				"Experience the calming sounds of waves crashing on the shore",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "3",
			title: "مشاوره و استراتژی",
			description: "Explore the vast landscapes and stunning sunsets",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "4",
			title: "مشاوره و استراتژی",

			description: "Get lost among ancient trees and discover hidden trails",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "5",
			title: "مشاوره و استراتژی",
			description: "Immerse yourself in the vibrant energy of urban life",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "6",
			title: "مشاوره و استراتژی",
			description: "Wake up to stunning views and peaceful mornings",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
	],
	className,
}: ScrollBarImageSecivce) {
	return (
		<div className={cn("w-full", className)}>
			<div className="relative">
				<div className="scrollbar-hide overflow-x-auto pb-6">
					<div className="flex space-x-4 px-4 md:px-6">
						{items.map((item) => (
							<div
								key={item.id}
								className="group !h-[120] !w-[120px] flex-none overflow-hidden shadow-md transition-all hover:shadow-lg"
							>
								<div className="relative h-[120px] w-full overflow-hidden">
									<div className="absolute inset-0 z-10 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>

									<Image
										src={item.imageUrl || "/placeholder.svg"}
										alt={item.title}
										fill
										className="h-full object-cover transition-transform duration-300 group-hover:scale-110"
									/>

									<div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent pr-2">
										<h3 className="mb-2 text-[10px] font-black text-white drop-shadow-md">
											{item.title}
										</h3>

										<p className="h-0 overflow-hidden text-sm text-white/90 opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
