import Link from "next/link";

import { APP_ROUTES } from "@/constants";
import EtehadiehIcon from "@/public/Images/Etehadie.svg";
import NeshanIcon from "@/public/Images/Neshan.svg";
import NezamMohandesiIcon from "@/public/Images/NezamMohandesi.svg";
import InstagramIcon from "@/public/Instagram.svg";
import LinkedinIcon from "@/public/Linkdine.svg";
import TwitterIcon from "@/public/Twiiter.svg";
import FullLogoIcon from "@/public/logo-full.svg";
import WhatsAppIcon from "@/public/whatsapp.svg";

const Footer: React.FC = (props) => {
	return (
		<footer
			className="col bottom-0 flex h-[400px] w-full flex-col items-center justify-center lg:mt-16 lg:mb-28"
			// style={{
			// 	clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
			// }}
		>
			<div className="bg-primary-800 bottom-0 flex h-[400px] w-full flex-col gap-4 p-4 lg:grid lg:max-h-[284px] lg:max-w-[1182px] lg:grid-cols-9 lg:justify-center lg:gap-x-6">
				<div className="flex flex-col gap-2 lg:col-span-3 lg:p-4">
					<FullLogoIcon className="lg:mt-6 lg:h-[47px] lg:w-[258px]" />
					<p className="text-justify text-xs leading-5 lg:text-sm lg:leading-[27px] lg:font-normal lg:tracking-normal">
						شرکت ما با تمرکز بر ارائه خدمات تبلیغاتی و بازاریابی خلاقانه، به
						کسب‌وکارها کمک می‌کند تا حضور پررنگ‌تری در بازار داشته باشند. با
						تیمی حرفه‌ای در زمینه تبلیغات محیطی، تولید محتوا، طراحی وب‌سایت و
						تدوین ویدئو، ما به دنبال راه‌حل‌های نوین برای تبلیغ و معرفی برند شما
						هستیم.
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4 lg:col-span-3">
					<div className="col-span-2 flex flex-col gap-2 text-xs leading-5 lg:px-4 lg:text-sm lg:leading-[18.2px] lg:font-normal">
						<h2 className="mb-2 text-sm font-bold lg:mt-10 lg:flex lg:text-center lg:text-2xl lg:tracking-normal">
							تماس با ما
						</h2>
						<p>تلفن : ٢-٢٢٧٠٥٠٦١</p>
						<p>آدرس ایمیل : info@mapagency.co</p>
						<p>
							آدرس : تهران،تجريش، خيابان كبيري (دزاشيب)،ساختمان دربند، پلاك ٥٢
							واحد ١ و ٢
						</p>
					</div>
					<div className="col-span-1 flex flex-col gap-2 text-xs leading-5 lg:w-[170px] lg:text-sm lg:leading-[18.2px] lg:font-normal">
						<h2 className="lg:leading-md mb-2 text-sm font-bold lg:mt-10 lg:flex lg:text-center lg:text-2xl lg:tracking-normal">
							لینک های مفید
						</h2>
						<Link className="cursor-pointer" href={APP_ROUTES.aboutUs}>
							درباره ما
						</Link>
						<Link className="cursor-pointer" href={APP_ROUTES.projects}>
							پروژه ها
						</Link>
						<Link className="cursor-pointer" href={APP_ROUTES.contactUs}>
							تماس با ما
						</Link>
						<Link className="cursor-pointer" href={APP_ROUTES.services}>
							خدمات
						</Link>
					</div>
				</div>
				<div className="flex flex-col lg:col-span-3 lg:h-full lg:items-center lg:px-4">
					<p className="leading-md hidden text-2xl font-bold tracking-normal lg:mt-10 lg:flex lg:text-center">
						شبکه های اجتماعی
					</p>
					<div className="flex space-x-[4px] lg:mt-4">
						<Link href="#">
							<TwitterIcon className="lg:h-8 lg:w-8" />
						</Link>

						<Link href="#">
							<LinkedinIcon className="lg:h-8 lg:w-8" />
						</Link>
						<Link href="#">
							<InstagramIcon className="lg:h-8 lg:w-8" />
						</Link>
						<Link href="#">
							<WhatsAppIcon className="lg:h-8 lg:w-8" />
						</Link>
					</div>
					<div className="mt-4 flex space-x-[8px] lg:mt-10">
						<NeshanIcon className="lg:h-[60px] lg:w-[60px]" />
						<EtehadiehIcon className="lg:h-[60px] lg:w-[60px]" />
						<NezamMohandesiIcon className="lg:h-[60px] lg:w-[60px]" />
						<EtehadiehIcon className="lg:h-[60px] lg:w-[60px]" />
					</div>
				</div>
			</div>
			<p className="mt-4 hidden text-[14px] lg:flex" dir="ltr">
				©MAPAGENCY. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
