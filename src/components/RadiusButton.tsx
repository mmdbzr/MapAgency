import React from "react";

import cn from "@/utils/cn";

interface RadiusButton {
	className?: string;
	children?: any;
}

const RadiusButton = ({ children, className }: RadiusButton) => {
	return (
		<button
			className={cn(
				"bg-secondary-700 flex h-12 w-32 cursor-pointer items-center justify-center rounded-tl-[24px] rounded-br-[24px] text-[10px] font-black",
				className,
			)}
		>
			{children}
		</button>
	);
};

export default RadiusButton;
