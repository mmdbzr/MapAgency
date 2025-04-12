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
			description:
				"ارائه راهکارهای خلاقانه و برنامه‌ریزی دقیق برای دستیابی به اهداف تبلیغاتی و بازاریابی، شامل تحلیل بازار و طراحی کمپین‌های موثر.",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "2",
			title: "تحلیل و تحقیقات بازار",
			description:
				"شناسایی نیازها، رفتار مشتریان و وندهای بازار برای ایجاد تبلیغات هدفمند و بهینه‌سازی استراتژی‌های بازاریابی.",
			imageUrl: "/Landing/mobile.png",
		},
		{
			id: "3",
			title: "راه اندازی و پشتیبانی و بسایت",
			description:
				"طراحی، توسعه و مدیریت وب‌سایت‌های حرفه‌ای با ارائه خدمات پشتیبانی فنی برای تضمین عملکرد بهینه و بروزرسانی مستمر.",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "4",
			title: "تحليل وآناليز گزارشات",

			description:
				"بررسى داده هاى تبليغاتى و عملكرد كميين ها براى ارزيابى موفقيت وارائه راهكارهاى بهبود.",
			imageUrl: "/Images/LandingScrollAssets/1.svg",
		},
		{
			id: "5",
			title: "توليد محتوا",
			description:
				"ايجاد محتواى خلاقانه وجذاب براى جذب مخاطب، افزايش تعامل وتقويت هويت برند در يلتفرم هاى مختلف.",
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
								className="group h-[120] w-[120px] flex-none overflow-hidden shadow-md transition-all hover:shadow-lg lg:w-[307px]"
							>
								<div className="relative h-[120px] w-full overflow-hidden lg:h-[341px]">
									<div className="absolute inset-0 z-10 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>

									<Image
										src={item.imageUrl || "/placeholder.svg"}
										alt={item.title}
										fill
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
									/>

									<div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 lg:px-4 lg:pb-6">
										<h3 className="mb-2 text-[10px] font-black text-white drop-shadow-md lg:text-[18px]">
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
