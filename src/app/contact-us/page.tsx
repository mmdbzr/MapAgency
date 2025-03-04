import Image from "next/image";
import Link from "next/link";

import BgImage from "@/public/Images/f1c18d7845e482def13e7645cc379c9c.jpeg";
import InstagramIcon from "@/public/Instagram.svg";
import LinkedinIcon from "@/public/Linkdine.svg";
import MailIcon from "@/public/Mail.svg";
import TwitterIcon from "@/public/Twiiter.svg";
import ArrowIcon from "@/public/arrow-up-small.svg";
import LocationIcon from "@/public/location.svg";
import PhoneIcon from "@/public/phone.svg";
import WhatsAppIcon from "@/public/whatsapp.svg";

const ContactUsPage = () => {
	return (
		<div className="mt-[56px] flex flex-col items-center px-6 pb-8">
			<div className="relative mt-[45px] flex flex-col items-center text-center lg:mt-[73px]">
				<p className="font-kaaf absolute w-[98px] text-base font-bold">
					Contact us
				</p>
				<p className="font-kaaf absolute top-2 w-[98px] text-center text-base text-[#b7b7b7]">
					تماس با ما
				</p>
			</div>
			<div className="mt-11 w-full">
				<div className="relative h-[342px] space-y-[16px] p-4">
					<Image
						className="absolute -z-20 !h-[342px]"
						src={BgImage}
						quality={100}
						width={327}
						style={{ objectFit: "cover" }}
						alt="bg"
					/>
					<div
						className="absolute -z-10 h-[342px] w-full"
						style={{
							backgroundImage:
								"radial-gradient(49.91% 46.58% at 49.91% 53.42%, rgba(16, 53, 77, 0.7) 0%, #10354D 100%)",
							backgroundSize: "cover",
						}}
					></div>
					<h2 className="font-peyda text-base leading-[23.4px] font-black tracking-normal">
						با ما در تماس باشید!
					</h2>
					<p className="font-peyda text-[12px] leading-[28px] font-normal tracking-normal">
						تیم ما همیشه آماده پاسخگویی و مشاوره دادن به شما است.
					</p>
					<div className="mt-4 flex flex-col space-y-[16px]">
						<div>
							<div className="flex space-x-[4px]">
								<MailIcon />
								<p className="font-peyda text-base text-[16px] leading-[23.4px] font-black tracking-normal">
									ایمیل
								</p>
							</div>
							<p className="mt-2 text-base leading-[17.15px] font-light tracking-normal">
								info@kiaads.com
							</p>
						</div>
						<div>
							<div className="flex space-x-[4px]">
								<LocationIcon />
								<p className="font-peyda text-base text-[16px] leading-[23.4px] font-black tracking-normal">
									آدرس{" "}
								</p>
							</div>
							<p className="mt-2 text-base leading-[17.15px] font-light tracking-normal">
								هران ،دزاشیب ، خیابان کبیری ساختمان دربند ، پلاک 52 ،واحد 1 و 2
							</p>
						</div>
						<div>
							<div className="flex space-x-[4px]">
								<PhoneIcon />
								<p className="font-peyda text-base text-[16px] leading-[23.4px] font-black tracking-normal">
									تماس
								</p>
							</div>
							<p className="mt-2 text-base leading-[17.15px] font-light tracking-normal">
								021-22705061
							</p>
						</div>
					</div>
					<div className="flex justify-center space-x-[12px] lg:mt-4">
						<Link href="#">
							<TwitterIcon className="h-6 w-6 lg:h-8 lg:w-8" />
						</Link>

						<Link href="#">
							<LinkedinIcon className="h-6 w-6 lg:h-8 lg:w-8" />
						</Link>
						<Link href="#">
							<InstagramIcon className="h-6 w-6 lg:h-8 lg:w-8" />
						</Link>
						<Link href="#">
							<WhatsAppIcon className="h-6 w-6 lg:h-8 lg:w-8" />
						</Link>
					</div>
				</div>
				<div className="mt-6">
					<h2 className="font-peyda text-base leading-[23.4px] font-black tracking-normal">
						کسب و کار خود را ارتقا دهید!{" "}
					</h2>
					<p className="font-peyda mt-4 text-[12px] leading-[28px] font-normal tracking-normal">
						ما اینجا هستیم تا با ایده‌های خلاقانه و راهکارهای حرفه‌ای، برند شما
						را به سطح جدیدی برسانیم.
					</p>
					<div className="mt-4 space-y-[21px]">
						<div>
							<label
								htmlFor="name"
								className="mb-2 pr-1 text-xs leading-[15.6px] font-black tracking-normal"
							>
								نام و نام خانوادگی
							</label>
							<input
								className="h-[39px] w-full gap-[10px] rounded-tl-[24px] rounded-br-[24px] border p-[12px]"
								name="name"
								placeholder="آقای هاتف"
							/>
						</div>
						<div>
							<label
								htmlFor="number"
								className="mb-2 pr-1 text-xs leading-[15.6px] font-black tracking-normal"
							>
								شماره تماس
							</label>
							<input
								className="h-[39px] w-full gap-[10px] rounded-tl-[24px] rounded-br-[24px] border p-[12px]"
								name="number"
								placeholder="0912123456789"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="mb-2 pr-1 text-xs leading-[15.6px] font-black tracking-normal"
							>
								ایمیل{" "}
							</label>
							<input
								className="h-[39px] w-full gap-[10px] rounded-tl-[24px] rounded-br-[24px] border p-[12px]"
								name="email"
								placeholder="Exmp@gmail.com"
							/>
						</div>
						<div>
							<label
								htmlFor="text"
								className="mb-2 pr-1 text-xs leading-[15.6px] font-black tracking-normal"
							>
								چجوری میتونیم کمکتون کنیم؟{" "}
							</label>
							<textarea
								className="h-[131px] w-full gap-[10px] rounded-tl-[24px] rounded-br-[24px] border p-[12px]"
								name="text"
								placeholder="نیاز شدید به تبلیغات هوشمندانه دارم"
							/>
						</div>
					</div>
					<button className="bg-secondary-700 flex h-12 w-32 items-center justify-center space-x-[2px] rounded-tl-[24px] rounded-br-[24px]">
						<p className="text-xs leading-[15.6px] font-black tracking-normal">
							شروع کنیم
						</p>
						<ArrowIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
