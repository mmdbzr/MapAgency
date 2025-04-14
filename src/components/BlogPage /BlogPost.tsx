import React from "react";

import Image from "next/image";
import Link from "next/link";

import { APP_ROUTES } from "@/constants";
import EyeIcon from "@/public/fi-sr-eye.svg";

interface BlogPostProps {
	title: string;
	id: number;
	description: string;
	image: string;
}

const BlogPost = ({ title, id, description, image }: BlogPostProps) => {
	return (
		<Link href={APP_ROUTES.singleBlogPost(id)}>
			<div className="bg-secondary-500 flex h-[247px] w-[347px] flex-col rounded-2xl p-2 lg:h-[334px] lg:w-[270px]">
				<div className="relative flex h-full w-full items-center justify-center rounded-2xl lg:h-[176px]">
					<Image
						fill
						quality={100}
						className="h-[141px] w-[331px] rounded-2xl object-cover lg:h-[176px] lg:w-[234px]"
						src={image}
						alt="blog post"
					/>
				</div>
				<p className="mt-2 text-[14px] font-black lg:text-[16px]">{title}</p>
				<p className="my-2 text-[12px] font-normal lg:text-[14px]">
					{description}
				</p>
				<div className="flex items-center gap-2 text-[10px] lg:justify-between">
					<span className="rounded-2xl bg-amber-50/20 p-1 text-white lg:bg-transparent">
						تاریخ : 6 اسفند 1403
					</span>
					<span className="flex items-center gap-1 rounded-2xl bg-white/20 p-1 text-center text-white lg:bg-transparent">
						500
						<EyeIcon />
					</span>
				</div>
			</div>
		</Link>
	);
};

export default BlogPost;
