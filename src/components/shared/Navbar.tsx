"use client";

import { forwardRef, useRef } from "react";

import Link from "next/link";

import { useAnimate } from "framer-motion";
import useOnClickOutside from "use-onclickoutside";

import { APP_NAVIGATION_ITEMS } from "@/constants";
import CloseIcon from "@/public/close.svg";
import LogoIcon from "@/public/logo-full.svg";
import MenuIcon from "@/public/menu.svg";

const Navbar = forwardRef<HTMLElement>((props, ref) => {
	const [scope, animate] = useAnimate();
	const menuRef = useRef<HTMLDivElement>(null);

	const handleOpen = async () => {
		await Promise.all([
			animate("#backdrop", {
				display: "block",
			}),
			animate("#menu", {
				width: "200px",
			}),
		]);
	};

	const handleClose = async () => {
		await Promise.all([
			animate("#backdrop", {
				display: "none",
			}),
			animate("#menu", {
				width: "0",
			}),
		]);
	};

	useOnClickOutside(menuRef as any, handleClose);

	return (
		<nav ref={ref} className="fixed top-0 left-0 w-full p-6">
			<div
				ref={scope}
				className="relative flex h-8 w-full items-center justify-center"
			>
				<div
					className="fixed top-0 left-0 z-50 hidden h-screen w-screen bg-black/50"
					id="backdrop"
				>
					<div
						ref={menuRef}
						className="bg-primary-900 absolute top-0 left-0 flex h-full w-0 flex-col gap-10 pt-[90px]"
						id="menu"
					>
						<button
							className="absolute top-[30px] right-6"
							onClick={handleClose}
						>
							<CloseIcon />
						</button>
						{Object.entries(APP_NAVIGATION_ITEMS).map(([path, meta]) => {
							return (
								<Link href={path} key={path}>
									<p className="text-center">{meta.label}</p>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="absolute top-0 left-0 flex h-full items-center">
					<button onClick={handleOpen}>
						<MenuIcon />
					</button>
				</div>
				<LogoIcon />
			</div>
		</nav>
	);
});

Navbar.displayName = "Navbar";

export default Navbar;
