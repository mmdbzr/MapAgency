import React from "react";

import AutoSlider from "@/components/LandingPageComponents/AutoSlider";
import ScrollBarImageSecivce from "@/components/LandingPageComponents/ScrollBarImageSecivce";
import RadiusButton from "@/components/RadiusButton";
import BlueLineIcon from "@/public/Line 3.svg";

const LandingPage = () => {
	return (
		<div className="mt-[94px] h-[2000px] px-6">
			<section>
				<div className="text-center">
					<p className="font-kaaf h-12 text-[24px] leading-[100%] font-extrabold">
						با <span className="text-secondary-main">ما</span>، تبلیغ شما دیده
						می‌شود
					</p>
					<p className="text-[12px] leading-[20px] font-normal">
						در دنیایی که هر لحظه هزاران پیام تبلیغاتی دیده و شنیده می‌شود، ما
						تضمین می‌کنیم که صدای برند شما به درستی شنیده شود. خلاقیت، استراتژی
						و اجرا؛ هر آنچه برای موفقیت تبلیغات نیاز دارید، در کنار شما هستیم.
					</p>
				</div>

				<AutoSlider className="mt-14" />
			</section>
			<section className="mt-9">
				<div className="text-center">
					<p className="font-kaaf h-20 text-[24px] leading-[40px] font-extrabold">
						تبدیل ایده به موفقیت،
						<br />
						<span className="text-secondary-main"> با خدمات جامع ما</span>
					</p>
					<p className="mt-6 text-[12px] leading-[20px] font-normal">
						ما در کنار شما هستیم تا با طراحی استراتژی‌های هوشمندانه و اجرای
						تبلیغاتی هدفمند، مسیر فروش شما را هموار کنیم. خدمات ما شامل مشاوره
						تخصصی، تحلیل دقیق بازار، بررسی و آنالیز داده‌ها، و خلق ایده‌های
						نوآورانه است. با انتخاب هر بخش، جزئیات بیشتری از این خدمات را کشف
						کنید و مطمئن شوید که برند شما در مسیر رشد قرار دارد.
					</p>
				</div>
				<ScrollBarImageSecivce className="mt-6" />

				<div className="flex flex-col items-center justify-center">
					<BlueLineIcon className="mb-2" />
					<RadiusButton>برای مشاهده تمامی خدمات</RadiusButton>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
