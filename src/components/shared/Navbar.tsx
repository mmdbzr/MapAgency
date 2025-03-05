"use client";

import { forwardRef, useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { stagger, useAnimate } from "framer-motion";

import { APP_NAVIGATION_ITEMS, APP_ROUTES } from "@/constants";
import CloseIcon from "@/public/close.svg";
import LogoIcon from "@/public/logo-full.svg";
import MenuIcon from "@/public/menu.svg";
import cn from "@/utils/cn";

const Navbar = forwardRef<HTMLElement>((props, ref) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const [scope, animate] = useAnimate();
	const navigationItems = Object.entries(APP_NAVIGATION_ITEMS);
	const midpoint = Math.floor(navigationItems.length / 2);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isMenuOpen]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") handleClose();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	const handleOpen = async () => {
		setIsMenuOpen(true);
		await Promise.all([
			animate("#backdrop", {
				display: "block",
			}),
			animate("#menu", {
				width: "200px",
			}),
		]);

		await animate(
			"a",
			{
				opacity: 1,
				x: [-20, 0],
			},
			{
				delay: stagger(0.05),
			},
		);
	};

	const handleClose = async () => {
		setIsMenuOpen(false);
		await animate(
			"a",
			{
				opacity: 0,
				x: -20,
			},
			{
				delay: stagger(0.05),
			},
		);

		await Promise.all([
			animate("#backdrop", {
				display: "none",
			}),
			animate("#menu", {
				width: "0",
			}),
		]);
	};

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
						className="bg-primary-900 absolute top-0 left-0 flex h-full w-0 flex-col gap-10 pt-[90px]"
						id="menu"
					>
						<button
							className="absolute top-[30px] right-6 cursor-pointer"
							onClick={handleClose}
						>
							<CloseIcon />
						</button>
						{Object.entries(APP_NAVIGATION_ITEMS).map(([path, meta]) => {
							const isLanding = path === APP_ROUTES.landing;
							const isActive = isLanding
								? pathname === "/"
								: pathname.startsWith(path);

							return (
								<Link
									href={path}
									key={path}
									className="flex items-center justify-center opacity-0"
									onClick={handleClose}
								>
									<p
										className={cn(
											"relative w-fit overflow-visible text-nowrap",
											isActive && "text-secondary-main font-extrabold",
										)}
									>
										{isActive && (
											<div className="bg-secondary-main/50 absolute top-1/2 left-1/2 z-10 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 blur-[15px]" />
										)}
										{meta.label}
									</p>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="absolute top-0 left-0 flex h-full items-center lg:hidden">
					<button onClick={handleOpen}>
						<MenuIcon />
					</button>
				</div>
				<div className="flex justify-center lg:space-x-4">
					<div className="z-50 hidden text-white lg:flex lg:space-x-10">
						{navigationItems.slice(0, midpoint).map(([path, meta]) => {
							const isLanding = path === APP_ROUTES.landing;
							const isActive = isLanding
								? pathname === "/"
								: pathname.startsWith(path);

							return (
								<Link
									href={path}
									key={path}
									className="flex items-center justify-center text-[20px] leading-[25.26px] font-semibold text-white"
								>
									<p
										className={cn(
											"relative w-fit overflow-visible text-nowrap text-white",
											isActive && "text-secondary-main font-extrabold",
										)}
									>
										{isActive && (
											<div className="bg-secondary-main/50 absolute top-1/2 left-1/2 z-10 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 blur-[15px]" />
										)}
										{meta.label}
									</p>
								</Link>
							);
						})}
					</div>
					<LogoIcon className="lg:h-9 lg:w-52" />
					<div className="hidden lg:flex lg:space-x-10">
						{navigationItems.slice(midpoint).map(([path, meta]) => {
							const isLanding = path === APP_ROUTES.landing;
							const isActive = isLanding
								? pathname === "/"
								: pathname.startsWith(path);

							return (
								<Link
									href={path}
									key={path}
									className="flex items-center justify-center text-[20px] leading-[25.26px] font-semibold"
								>
									<p
										className={cn(
											"relative w-fit overflow-visible text-nowrap",
											isActive && "text-secondary-main font-extrabold",
										)}
									>
										{isActive && (
											<div className="bg-secondary-main/50 absolute top-1/2 left-1/2 z-10 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 blur-[15px]" />
										)}
										{meta.label}
									</p>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
});

Navbar.displayName = "Navbar";

export default Navbar;
