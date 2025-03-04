"use client";

import { useRef } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export interface ShellProps {
	children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
	const shellRef = useRef<HTMLElement>(null);
	const navbarRef = useRef<HTMLElement>(null);

	return (
		<main
			className="max-h-screen min-h-screen max-w-screen min-w-screen overflow-auto"
			ref={shellRef}
			onScroll={() => {
				if (shellRef.current && navbarRef.current) {
					if (shellRef.current.scrollTop > 160)
						navbarRef.current.classList.add("glossy-bg");
					else navbarRef.current.classList.remove("glossy-bg");
				}
			}}
		>
			<Navbar ref={navbarRef} />
			{children}
			<Footer />
		</main>
	);
};

export default Shell;
