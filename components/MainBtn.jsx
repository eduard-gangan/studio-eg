"use client";

import Link from "next/link";

const MainBtn = (props) => {
	return (
		<Link
			href={props.href}
			className="text-4xl text-fuchsia-50 font-bold bg-gradient-to-br from-fuchsia-400 to-fuchsia-700 rounded-lg pl-20 pr-16 py-5 flex w-fit gap-8 items-center border-r-[16px] border-teal-100"
		>
			{props.text}
			<img
				src="/assets/svg/arrow.svg"
				alt="arrow pointing to the right"
				height={64}
				width={64}
			/>
		</Link>
	);
};

export default MainBtn;
