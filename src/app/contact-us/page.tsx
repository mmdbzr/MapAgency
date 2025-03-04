const ContactUsPage = () => {
	return (
		<div className="mt-[56px] flex h-[200vh] flex-col items-center px-6">
			<div className="relative mt-[45px] flex flex-col items-center text-center lg:mt-[73px]">
				<p className="font-kaaf absolute w-[98px] text-base font-bold">
					Contact us
				</p>
				<p className="font-kaaf absolute top-2 w-[98px] text-center text-base text-[#b7b7b7]">
					تماس با ما
				</p>
			</div>
			<div className="mt-11 w-full">
				<div
					className="h-[342px]"
					style={{
						backgroundImage:
							"radial-gradient(49.91% 46.58% at 49.91% 53.42%, rgba(16, 53, 77, 0.7) 0%, #10354D 100%),  url('/Images/f1c18d7845e482def13e7645cc379c9c.jpeg')",
						backgroundSize: "cover",
					}}
				>
					<h2 className="font-peyda text-base leading-[23.4px] font-black tracking-normal">
						با ما در تماس باشید!
					</h2>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default ContactUsPage;
