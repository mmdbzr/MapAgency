import React from "react";

import Image from "next/image";

const PopularPost = () => {
	return (
		<div className="bg-secondary-main/20 flex h-[104px] w-[250px] rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
			<div className="relative h-full w-[86px]">
				<Image
					src="/image 6.jpg"
					alt="popular post"
					fill
					quality={100}
					className="rounded-tr-2xl rounded-br-2xl"
				/>
			</div>
			<div className="p-2">
				<p className="text-[12px] font-black">
					چگونه تبلیغات محیطی موفق طراحی کنیم؟
				</p>
				<p className="text-[10px] font-normal">
					{" "}
					او توانایی‌ بالایی در به تصویر کشیدن ایده‌ها دارد.
				</p>
				<div className="flex items-center gap-2 text-[10px]">
					<span className="h-5 rounded-2xl bg-amber-50/20 p-1 text-white">
						تاریخ : 6 اسفند 1403
					</span>
					<span className="flex items-center gap-1 rounded-2xl bg-white/20 p-1 text-center text-white">
						500
					</span>
				</div>
			</div>
		</div>
	);
};

export default PopularPost;
