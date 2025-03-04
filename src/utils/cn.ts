import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...values: ClassValue[]) => twMerge(clsx(...values));

export default cn;
