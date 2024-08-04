"use client";

import Link from "next/link";

const MainBtn = (props) => {
	return (
		<Link
			href={props.href}
			className="text-xl sm:text-4xl text-fuchsia-50 font-bold bg-gradient-to-br from-fuchsia-400 to-fuchsia-700 rounded-lg pl-8  sm:pl-20 pr-6 sm:pr-16 py-2 sm:py-5 flex w-fit gap-2 sm:gap-8 items-center border-r-8 sm:border-r-[16px] border-teal-100 z-10"
		>
			{props.text}
			<img
				src="/assets/svg/arrow.svg"
				alt="arrow pointing to the right"
				className="w-10 h-10 sm:w-16 sm:h-16"
			/>
		</Link>
	);
};

export default MainBtn;
