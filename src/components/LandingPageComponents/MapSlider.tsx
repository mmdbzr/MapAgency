"use client";

import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";

const MapSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const controls = useAnimation();
	const [items] = useState([
		{
			id: 1,
			text: "First",
			svg: (
				<svg width="120" height="120">
					<circle
						cx="60"
						cy="60"
						r="55"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			),
		},
		{
			id: 2,
			text: "Second",
			svg: (
				<svg width="120" height="120">
					<rect
						x="10"
						y="10"
						width="100"
						height="100"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			),
		},
		{
			id: 3,
			text: "Third",
			svg: (
				<svg width="120" height="120">
					<polygon
						points="60,10 110,110 10,110"
						stroke="white"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			),
		},
	]);

	useEffect(() => {
		const animate = async () => {
			while (true) {
				// Wait for 2 seconds at center position
				await new Promise((resolve) => setTimeout(resolve, 2000));

				// Animate to left
				await controls.start({
					x: "-100%",
					transition: { duration: 1, ease: "easeInOut" },
				});

				// Reset position to right and update index
				await controls.set({ x: "100%" });
				setCurrentIndex((prev) => (prev + 1) % items.length);

				// Animate back to center
				await controls.start({
					x: "0%",
					transition: { duration: 1, ease: "easeInOut" },
				});
			}
		};

		animate();
	}, []);

	return (
		<div className="relative h-screen w-full overflow-hidden bg-gray-900">
			{/* Glow effect */}
			<motion.div
				className="absolute inset-0 bg-blue-500/20 blur-2xl"
				animate={{ opacity: [0, 1, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
			/>

			<div className="relative flex h-full items-center justify-center">
				<motion.div
					className="absolute flex items-center gap-8"
					animate={controls}
					style={{ x: "0%" }}
				>
					{items.map((item, index) => (
						<motion.div
							key={item.id}
							className="relative flex items-center justify-center"
							initial={{ scale: 1 }}
							animate={{
								scale: index === currentIndex ? 1.2 : 0.8,
								opacity: index === currentIndex ? 1 : 0.5,
							}}
						>
							{/* SVG Container */}
							<div className="relative">
								{item.svg}
								{/* Text inside SVG */}
								<motion.div
									className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white"
									initial={{ opacity: 0 }}
									animate={{ opacity: index === currentIndex ? 1 : 0 }}
								>
									{item.text}
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default MapSlider;
