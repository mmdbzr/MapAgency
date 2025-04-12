import React from "react";

import Image from "next/image";
import Link from "next/link";

import BackIcon from "@/public/chevron-left.svg";
import Services from "@/services";

// This is a mock data - in real app you would fetch this from anAPI
const getBlogPost = (id: number) => Services.getSingleBlogPost(id);

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
	const post = await getBlogPost(parseInt(params.id));

	return (
		<div className="mt-[96px] flex flex-col items-center px-4 py-8">
			<div className="relative mb-5 flex h-10 w-full flex-col items-center text-center lg:h-32">
				<p className="font-kaaf absolute text-base font-bold lg:text-6xl lg:leading-[113.93px] lg:text-[#144B65]">
					Articles
				</p>
				<p className="font-kaaf absolute top-3 text-center text-base text-[#b7b7b7] lg:top-9 lg:text-[40px] lg:leading-[78.57px] lg:text-white">
					مقالات
				</p>
			</div>
			<article className="flex w-[327px] flex-col items-center lg:w-[746px]">
				<div className="relative h-[194px] w-[327px] rounded-2xl lg:h-[393px] lg:w-[746px]">
					<Image
						src={post.pictures?.[0] as string}
						alt={post.title}
						fill
						quality={100}
						className="h-full w-full rounded-2xl"
					/>
				</div>
				<div className="mt-4 flex w-[327px] items-center justify-between lg:w-[746px]">
					<h1 className="text-[14px] font-black lg:text-3xl">{post.title}</h1>
					<Link href="/blog" className="text-secondary-main flex items-center">
						<p className="text-[12px]">بازگشت</p>
						<BackIcon />
					</Link>
				</div>
				<div className="prose prose-lg mt-6">
					<p dangerouslySetInnerHTML={{ __html: post.text }} />
				</div>
			</article>
		</div>
	);
};

export default BlogPostPage;
