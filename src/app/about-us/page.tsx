import React from "react";

import Link from "next/link";

import ImageMarquee from "@/components/AboutUs/ImageMarquee";
import RadiusButton from "@/components/RadiusButton";
import { APP_ROUTES } from "@/constants";
import BlueLineIcon from "@/public/Line.svg";

const Images: { src: string; alt: string }[] = [
	{ src: "/Images/AboutUs/Frame 1000002388-2.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002387-2.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002386.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002385.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002388-2.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002387-2.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002386.png", alt: "About Us" },
	{ src: "/Images/AboutUs/Frame 1000002385.png", alt: "About Us" },
];

const page = () => {
	return (
		<div className="mt-[94px] mb-[93px] lg:px-0">
			<div className="relative -z-10 mt-[45px] flex h-10 w-full flex-col items-center text-center lg:mt-[73px] lg:h-32">
				{/* <p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
					About Us
				</p> */}
				<p className="font-kaaf absolute top-2 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
					درباره ما
				</p>
			</div>
			<section className="mt-7">
				<div className="relative -right-2 flex w-[140px] flex-col items-center justify-center text-center lg:-bottom-16 lg:mr-[50px] lg:w-[418px]">
					{/* <p className="font-kaaf text-secondary-main flex items-center text-[20px] font-black lg:text-6xl lg:opacity-50">
						!? Who We Are{" "}
					</p> */}
					<p className="lg:text-secondary-main flex items-center text-[16px] font-black lg:text-[44px]">
						ما کی{" "}
					</p>
					<p className="text-outline lg:stroke-secondary-man flex items-center text-[16px] text-transparent lg:text-[44px]">
						هستیم؟!
					</p>
				</div>
				<div className="lg:mr-44 lg:flex">
					<div className="relative z-30 flex items-center">
						<BlueLineIcon className="mr-14 h-20 w-2 lg:h-40" />
						<p className="mr-4 text-justify text-[12px] leading-5 lg:w-[500px] lg:text-[23px] lg:leading-7">
							ما شركت مسير بازاريابي و تبليغات به ساخت داستان‌هایی اعتقاد داریم
							که برند شما را به‌ یاد ماندنی و تاثیرگذار می‌سازند. با تیمی از
							متخصصان خلاق و کارشناسان حوزه تبلیغات، ماموریت ما این است که برند
							شما را از رقبا متمایز کنیم.
						</p>
					</div>
					<div className="relative mt-6 max-w-[1000px] lg:-right-16 lg:mt-0">
						<div className="absolute z-20 h-28 w-36 bg-gradient-to-l from-[#10354D] to-transparent lg:h-[280px] lg:w-[280px]" />
						{/* <Marquee>
							{Images.map((image, index) => (
								<Image
									key={index}
									src={image}
									alt="About Us"
									width={280}
									height={280}
									className="mx-2 h-28 w-28 flex-shrink-0 lg:h-[280px] lg:w-[280px]"
								/>
							))}
						</Marquee> */}
						{/* <ScrollBarX
							images={Images}
							className="relative z-10 lg:max-w-[912px]"
						/> */}
						<ImageMarquee images={Images} speed={20} direction="right" />
					</div>
				</div>
			</section>
			<section className="mt-7">
				<div className="relative right-[220px] flex w-[93px] flex-col items-center text-center lg:right-[1250px] lg:-bottom-16 lg:w-72">
					{/* <p className="font-kaaf text-secondary-main flex items-center text-[20px] font-black lg:text-6xl lg:opacity-50">
						Our Team
					</p> */}
					<p className="lg:text-secondary-main flex items-center text-[16px] font-black lg:text-[44px]">
						تیم ما
					</p>
				</div>
				<div className="lg:flex lg:flex-row-reverse">
					<div className="relative flex items-center lg:-right-20">
						<p className="mr-4 text-justify text-[12px] leading-5 lg:mr-0 lg:ml-4 lg:text-[23px] lg:leading-7">
							ما یک تیم چندرشته‌ای از طراحان، استراتژیست‌ها و تولیدکنندگان محتوا
							داریم که هدف مشترک آن‌ها خلق تجربیات برند خاص و تأثیرگذار است.
							اینجا می‌توانید با اعضای اصلی تیم آشنا شوید.
						</p>
						<BlueLineIcon className="mr-4 ml-14 h-20 w-2 lg:mr-0 lg:ml-28 lg:h-40" />
					</div>
					<div className="relative left-0 mt-6 lg:-right-20">
						<div className="absolute left-0 z-20 h-28 w-36 bg-gradient-to-r from-[#10354D] to-transparent lg:h-[280px] lg:w-[280px]" />
						{/* <ScrollBarX
							images={Images}
							className="relative z-10 lg:max-w-[912px]"
						/>{" "} */}
						<ImageMarquee
							images={Images}
							speed={20}
							direction="right"
							className="lg:!w-[1000px]"
						/>
					</div>
				</div>
			</section>
			<section className="mt-12">
				<div className="font-kaaf flex flex-col text-center font-black">
					{/* <p className="text-[20px] text-[#C4C4C7] lg:text-6xl lg:text-[#144B65]">
						? Think We`d Be a Good Match{" "}
					</p> */}
					<p className="relative -top-3 text-[16px] lg:text-5xl">
						آیا فکر می‌کنید می‌توانیم همکاری خوبی داشته باشیم؟
					</p>
				</div>
				<BlueLineIcon className="relative right-[50%] h-10 w-2 lg:h-28" />
				<p className="mt-2 text-center text-[12px] lg:mt-8 lg:text-[23px]">
					اگر به دنبال یک تیم حرفه‌ای برای توسعه و تقویت برند خود هستید، ما
					آماده‌ایم تا به شما کمک کنیم. برای ارتباط با ما از طریق ایمیل، تلفن یا
					آدرس زیر در ارتباط باشید.
				</p>
				<div className="relative mt-6 flex lg:mt-20">
					<div className="absolute left-0 z-20 h-28 w-36 bg-gradient-to-r from-[#10354D] to-transparent lg:h-[280px] lg:w-[280px]" />
					{/* <ScrollBarX images={Images} className="relative z-10 lg:!w-full" /> */}
					<ImageMarquee images={Images} speed={20} direction="right" />

					<div className="absolute right-0 z-20 h-28 w-36 bg-gradient-to-r from-transparent to-[#10354D] lg:h-[280px] lg:w-[280px]" />
				</div>
				<BlueLineIcon className="relative right-[50%] mt-4 h-10 w-2 lg:h-28" />
				<div className="flex w-full justify-center">
					<Link href={APP_ROUTES.contactUs}>
						<RadiusButton className="h-10 w-48 lg:h-16 lg:w-72 lg:text-[14px]">
							همین حالا از مشاوره رایگان بهره‌مند شوید!
						</RadiusButton>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default page;
