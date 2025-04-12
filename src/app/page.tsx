import React from "react";

import Image from "next/image";

import AutoSlider from "@/components/LandingPageComponents/AutoSlider";
import ScrollBarImageSecivce from "@/components/LandingPageComponents/ScrollBarImageSecivce";
import SvgQueueAnimation from "@/components/LandingPageComponents/SvgQueueAnimation";
import RadiusButton from "@/components/RadiusButton";
import EsteghlalIcon from "@/public/Landing/Esteghlal_Tehran_FC_logo.svg.svg";
import CircularIcon from "@/public/Landing/Group 102-2.svg";
import NaftIcon from "@/public/Landing/Logo.sev.svg.svg";
import LigIcon from "@/public/Landing/Pictoor.com-Lige-Bartar-Khalij-Fars-scaled-1 3.svg";
import SepahanIcon from "@/public/Landing/Sepahan_New_Logo.svg.svg";
import SteelIcon from "@/public/Landing/Steelazinnewlogo.svg";
import TitleIcon from "@/public/Landing/Vector-9.svg";
import ZobIcon from "@/public/Landing/Zob_Ahan_FC_Logo.svg.svg";
import BlueLineIcon from "@/public/Line 3.svg";

const LandingPage = () => {
	return (
		<div className="mt-[94px] mb-14 h-max px-6 lg:mt-0 lg:px-0">
			<section className="relative hidden h-[712px] lg:flex">
				<Image
					src="/Landing/Frame 1000002393.png"
					alt="LandingPageImage"
					fill
					className="absolute -z-20 h-full w-full object-cover"
				/>
				<div className="absolute top-0 z-20 h-[712px] w-full bg-gradient-to-r from-[#144B65] from-[1.18%] to-transparent to-[86.01%] mix-blend-overlay" />

				<TitleIcon className="absolute bottom-[180px] left-[225px] z-20" />
			</section>
			<section className="relative flex flex-col items-center justify-center lg:mt-14 lg:mr-20 lg:flex-row">
				<div className="absolute -right-[300px] h-[530px] w-[524px] rounded-full bg-[rgba(74,183,230,0.2)] blur-[150px]" />
				<div className="text-center lg:text-start">
					<p className="font-kaaf lg:font-peyda h-12 text-2xl leading-[100%] font-extrabold lg:text-[45px]">
						با <span className="text-secondary-main">ما</span>، تبلیغ شما دیده
						می‌شود
					</p>
					<p className="lg:font-peyda text-[12px] leading-[20px] font-normal lg:order-1 lg:mt-2 lg:h-[66px] lg:w-[661px] lg:flex-none lg:flex-grow-0 lg:self-stretch lg:text-right lg:text-[16px] lg:leading-[33px] lg:font-normal lg:text-[#F4F5F9]">
						در دنیایی که هر لحظه هزاران پیام تبلیغاتی دیده و شنیده می‌شود، ما
						تضمین می‌کنیم که صدای برند شما به درستی شنیده شود. خلاقیت، استراتژی
						و اجرا؛ هر آنچه برای موفقیت تبلیغات نیاز دارید، در کنار شما هستیم.
					</p>
				</div>

				<AutoSlider className="mt-14 lg:h-[410px] lg:w-[626px]" />
			</section>
			<section className="relative mt-9 lg:mt-28">
				<div className="absolute top-40 left-[474px] h-[201px] w-[524px] rounded-full bg-[rgba(74,183,230,0.2)] blur-[150px]" />
				<div className="flex flex-col items-center text-center">
					<p className="font-kaaf lg:font-peyda h-20 text-[24px] leading-[40px] font-extrabold lg:h-[59px] lg:text-[45px] lg:leading-[58px] lg:font-black">
						تبدیل ایده به موفقیت،
						<br className="lg:hidden" />
						<span className="text-secondary-main"> با خدمات جامع ما</span>
					</p>
					<p className="lg:font-peyda mt-6 text-[12px] leading-[20px] font-normal lg:h-[99px] lg:w-[886px] lg:text-center lg:text-[16px] lg:leading-[33px] lg:font-normal">
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
					<RadiusButton className="lg:mt-8 lg:h-[70px] lg:w-[217px] lg:text-[14px] lg:font-black">
						برای مشاهده تمامی خدمات
					</RadiusButton>
				</div>
			</section>
			<section className="mt-[70px] lg:mt-28">
				<div className="flex flex-col items-center text-center">
					{" "}
					<p className="font-kaaf lg:font-peyda h-12 text-[24px] leading-[100%] font-extrabold lg:h-[59px] lg:text-center lg:text-[45px] lg:leading-[58px] lg:font-black">
						تبلیغات شما، در
						<span className="text-secondary-main"> هر نقطه از ایران!</span>
					</p>
					<p className="text-[12px] leading-[20px] font-normal lg:h-[66px] lg:w-[886px] lg:text-center lg:text-[16px] lg:leading-[33px] lg:font-normal">
						با شبکه‌ای گسترده از بیلبوردها و تبلیغات محیطی در سراسر کشور، پیام
						برند شما به گوش همه می‌رسد. از کلان‌شهرهای پرتردد تا شهرستان‌های
						کوچک، ما پوششی کامل ارائه می‌دهیم تا دیده شوید. نگاهی به نقشه
						استان‌ها بیندازید؛ هر نقطه فرصتی برای ارتباط با مخاطبان جدید است!
					</p>
				</div>

				<SvgQueueAnimation />
			</section>
			<section className="mt-28 flex w-full flex-col lg:h-[900px] lg:flex-row lg:gap-x-[150px]">
				<div className="relative h-[700px] lg:h-[900px] lg:w-[700px]">
					<CircularIcon className="absolute left-[30px] -z-10 h-[600px] w-[600px] lg:top-0 lg:-right-[100px] lg:block lg:h-[834.78px] lg:w-[834.78px]" />
					<NaftIcon className="absolute top-[26px] h-[60px] w-[60px] lg:top-[30px] lg:right-[260px] lg:h-[99px] lg:w-[99px]" />
					<SteelIcon className="absolute top-[68px] right-[199px] h-[69px] w-[63px] lg:top-[120px] lg:right-[630px] lg:h-[107px] lg:w-[62px]" />
					<ZobIcon className="absolute top-[143px] right-[99px] h-[58px] w-[64px] lg:top-[200px] lg:right-[450px] lg:h-[78px] lg:w-[78px]" />
					<EsteghlalIcon className="absolute bottom-[186px] left-[132px] h-[76px] w-[69px] lg:bottom-[200px] lg:left-[90px] lg:h-[102px] lg:w-[78px]" />
					<SepahanIcon className="absolute right-[-40px] bottom-[64px] h-[70px] w-[70px] lg:right-[250px] lg:bottom-0 lg:h-[99px] lg:w-[99px]" />
					<LigIcon className="absolute top-[210px] left-[180px] h-[170px] w-[170px] lg:top-[25%] lg:left-[30%] lg:h-[333.415px] lg:w-[306.147px]" />
				</div>
				<div className="lg:mt-44">
					<p className="lg:font-peyda text-[24px] leading-[40px] font-extrabold lg:h-[118px] lg:w-[526px] lg:text-right lg:text-[45px] lg:leading-[58px] lg:font-black">
						تبلیغات شما، در قلب
						<br />
						<span className="text-secondary-main">رقابت‌های لیگ برتر</span>!
					</p>
					<p className="lg:font-peyda text-[12px] leading-[20px] font-normal lg:mt-5 lg:h-[132px] lg:w-[526px] lg:text-right lg:text-[16px] lg:leading-[33px] lg:font-normal">
						با شبکه‌ای گسترده از بیلبوردها و تبلیغات محیطی در سراسر کشور، پیام
						برند شما به گوش همه می‌رسد. از کلان‌شهرهای پرتردد تا شهرستان‌های
						کوچک، ما پوششی کامل ارائه می‌دهیم تا دیده شوید. نگاهی به نقشه
						استان‌ها بیندازید؛ هر نقطه فرصتی برای ارتباط با مخاطبان جدید است!
					</p>
				</div>
			</section>
			<section className="mt-14 flex flex-col items-center">
				<div className="relative -z-10 mt-[45px] flex h-10 w-full flex-col items-center text-center lg:mt-[73px] lg:h-32">
					<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
						Our Achievements at a Glance{" "}
					</p>
					<p className="font-kaaf absolute top-2 text-center text-base text-[#b7b7b7] lg:top-12 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
						افتخارات ما در یک نگاه{" "}
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
					<div>
						<p className="font-peyda text-secondary-main text-center text-[32px] leading-[42px] font-black lg:text-[60px] lg:leading-[78px]">
							10+
						</p>
						<p className="font-peyda text-center text-sm leading-[18px] font-normal lg:text-2xl lg:leading-[30px]">
							تعداد بوردهای تبلیغاتی
						</p>
					</div>
					<div>
						<p className="font-peyda text-secondary-main text-center text-[32px] leading-[42px] font-black lg:text-[60px] lg:leading-[78px]">
							10+
						</p>
						<p className="font-peyda text-center text-sm leading-[18px] font-normal lg:text-2xl lg:leading-[30px]">
							تعداد بوردهای تبلیغاتی
						</p>
					</div>
					<div>
						<p className="font-peyda text-secondary-main text-center text-[32px] leading-[42px] font-black lg:text-[60px] lg:leading-[78px]">
							60+
						</p>
						<p className="font-peyda text-center text-sm leading-[18px] font-normal lg:text-2xl lg:leading-[30px]">
							تعداد کمپین‌های اجرا شده{" "}
						</p>
					</div>
					<div>
						<p className="font-peyda text-secondary-main text-center text-[32px] leading-[42px] font-black lg:text-[60px] lg:leading-[78px]">
							150+
						</p>
						<p className="font-peyda text-center text-sm leading-[18px] font-normal lg:text-2xl lg:leading-[30px]">
							تعداد مشتریان راضی{" "}
						</p>
					</div>
					<div>
						<p className="font-peyda text-secondary-main text-center text-[32px] leading-[42px] font-black lg:text-[60px] lg:leading-[78px]">
							50+
						</p>
						<p className="font-peyda text-center text-sm leading-[18px] font-normal lg:text-2xl lg:leading-[30px]">
							تعداد پروژه‌های موفق{" "}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
