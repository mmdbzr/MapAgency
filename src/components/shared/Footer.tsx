import Link from "next/link";

import { APP_ROUTES } from "@/constants";
import InstagramIcon from "@/public/Instagram.svg";
import LinkedinIcon from "@/public/Linkdine.svg";
import TwitterIcon from "@/public/Twiiter.svg";
import FullLogoIcon from "@/public/logo-full.svg";
import WhatsAppIcon from "@/public/whatsapp.svg";

const Footer: React.FC = (props) => {
	return (
		<footer
			className="relative -z-10 h-[400px] w-full"
			style={{
				clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
			}}
		>
			<div className="bg-primary-800 fixed bottom-0 flex h-[400px] w-full flex-col gap-4 p-4">
				<div className="flex flex-col gap-2">
					<FullLogoIcon />
					<p className="text-xs leading-5">
						شرکت ما با تمرکز بر ارائه خدمات تبلیغاتی و بازاریابی خلاقانه، به
						کسب‌وکارها کمک می‌کند تا حضور پررنگ‌تری در بازار داشته باشند. با
						تیمی حرفه‌ای در زمینه تبلیغات محیطی، تولید محتوا، طراحی وب‌سایت و
						تدوین ویدئو، ما به دنبال راه‌حل‌های نوین برای تبلیغ و معرفی برند شما
						هستیم.
					</p>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="col-span-2 flex flex-col gap-2 text-xs leading-5">
						<h2 className="mb-2 text-sm font-bold">تماس با ما</h2>
						<p>تلفن : 22705061</p>
						<p>آدرس ایمیل : info@kiaads.ir</p>
						<p>
							آدرس : تهران ،دزاشیب ، خیابان کبیری ساختمان دربند ، پلاک 52 ،واحد
							1 و 2
						</p>
					</div>
					<div className="flex flex-col gap-2 text-xs leading-5">
						<h2 className="mb-2 text-sm font-bold">لینک های مفید</h2>
						<Link href={APP_ROUTES.aboutUs}>درباره ما</Link>
						<Link href={APP_ROUTES.projects}>پروژه ها</Link>
						<Link href={APP_ROUTES.contactUs}>تماس با ما</Link>
						<Link href={APP_ROUTES.services}>خدمات</Link>
					</div>
				</div>
				<div className="flex space-x-[4px]">
					<Link href="#">
						<TwitterIcon />
					</Link>

					<Link href="#">
						<LinkedinIcon />
					</Link>
					<Link href="#">
						<InstagramIcon />
					</Link>
					<Link href="#">
						<WhatsAppIcon />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
