"use client";

import MainBtn from "@/components/MainBtn";
import ModelView from "@/components/ModelView";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const data = [
	{
		img: "abstract1.jpg",
		heading: "UI & UX design",
		text: "We blend creativity and strategy to reflect your brand’s essence, ensuring a memorable and cohesive presence across all touchpoints. Let your brand shine and leave a lasting impression.",
	},
	{
		img: "abstract2.jpg",
		heading: "Motion design",
		text: "We combine creativity and strategic insight to embody your brand’s identity, ensuring a distinctive and cohesive presence at all points of contact. Let your brand illuminate and make a lasting impact.",
	},
	{
		img: "abstract3.jpg",
		heading: "Customized experiences",
		text: "We fuse innovation and strategy to capture your brand’s unique spirit, creating a consistent and impactful presence at every interaction. Make your brand stand out and leave a lasting mark.",
	},
];

const works = [
	{
		img: "abstract3.jpg",
	},
	{
		img: "abstract3.jpg",
	},
	{
		img: "abstract3.jpg",
	},
	{
		img: "abstract3.jpg",
	},
	{
		img: "abstract3.jpg",
	},
];

export default function Home() {
	const main = useRef();

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);
			const cards = gsap.utils.toArray(".card");
			cards.forEach((el, i) => {
				gsap.to(el, {
					y: 0 - i * 240 + i * 100,
					scrollTrigger: {
						trigger: ".section2",
						start: "0% 10%",
						end: "100% 0%",
						scrub: 1,
						// markers: true,
					},
				});
			});

			const flipText = gsap.utils.toArray(".text-flip");
			flipText.forEach((el, i) => {
				gsap.from(el, {
					rotateX: "-45deg",
					rotateY: "-45deg",
					x: 144,
					opacity: 0,
					scrollTrigger: {
						trigger: el,
						start: "center 90%",
						end: "center center",
						scrub: 1,
						// markers: true,
					},
				});
			});

			const works = gsap.utils.toArray(".work");
			works.forEach((el, i) => {
				gsap.to(el, {
					backgroundPositionY: "100%",
					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					},
				});
			});
		},
		{ scope: main.current }
	);

	const width = "50vw";
	const height = "100svh";
	return (
		<main
			ref={main}
			className="bg-zinc-900"
		>
			<section className="w-screen h-screen relative grid grid-cols-2 z-0">
				<img
					src="/assets/svg/pyramid.svg"
					alt="pyramid cut in three parts"
					className="absolute -left-1/4 top-1/2 -translate-y-1/2 -z-10"
					width={1000}
					height={1000}
				/>
				<div className="p-6 lg:p-12 grid content-center">
					<h1 className="text-9xl text-transparent font-heading uppercase text-zinc-100 leading-[1.1] tracking-wider mb-3">
						<div>We Design</div>{" "}
						<div className="flex">
							Kick-Ass{" "}
							<img
								src="/assets/svg/abstract.svg"
								alt="abstract shape"
								width={96}
								height={96}
							/>
						</div>{" "}
						<div>Experiences</div>
					</h1>
					<MainBtn
						text="Our Work"
						href="/"
					/>
				</div>
				<ModelView
					width={width}
					height={height}
				/>
			</section>

			<section className="min-h-screen p-6 lg:p-24 relative grid section2 mb-96">
				<img
					src="/assets/svg/down.svg"
					alt="arrows pointing down"
					width={500}
					height={500}
					className="absolute right-0 lg:right-24 top-0 lg:top-24"
				/>
				<h2 className="text-10xl text-transparent font-heading uppercase text-zinc-100 leading-[1.1] tracking-wider mb-3">
					<div className="text-flip origin-bottom">What</div>
					<div className="text-flip origin-bottom">Can</div>
					<div className="flex gap-8 items-center">
						<span className="text-flip origin-bottom">we</span>{" "}
						<div className="text-7xl  text-fuchsia-200 capitalize font-sans font-black tracking-normal">
							<div className="text-flip origin-bottom">do for</div>{" "}
							<div className="text-flip origin-bottom">you ?</div>
						</div>
					</div>
				</h2>

				<div className="grid grid-cols-3 justify-self-center max-w-[1024px] gap-6 mt-12">
					{data.map((el, i) => {
						return (
							<div
								key={i}
								className={`w-full relative rounded-xl overflow-hidden card ${
									i == 2 && "translate-y-96"
								} ${i == 1 && "translate-y-180"} ${
									i == 0 && "translate-y-[1056px]"
								} before:absolute before:w-full before:h-[164px] before:top-0 before:left-0 before:bg-gradient-to-r before:from-teal-100 before:to-teal-400 before:z-20 clip-parent`}
							>
								<Image
									src={`/assets/img/${el.img}`}
									alt="abstract shapes"
									fill={true}
									className=""
								/>
								<div className="w-full h-full bg-zinc-800 z-10 relative p-6 pt-48 clip">
									<h3 className="text-4xl font-heading text-zinc-300 mb-4">
										{el.heading}
									</h3>
									<p className="text-lg text-zinc-400">{el.text}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="min-h-screen p-6 lg:p-24">
				<h2 className=" text-transparent  text-zinc-100 leading-[1.1] ">
					<div className="font-heading tracking-wider uppercase text-10xl text-flip">
						Featured
					</div>
					<div className=" flex items-center">
						<span className="font-heading text-fuchsia-200 tracking-wider uppercase text-10xl text-flip">
							Work
						</span>
						<div className="text-2xl text-zinc-400 ml-8">
							<p className="text-flip">Explore our projects and</p>
							<p className="text-flip">witness how we elevate brands</p>
							<Link
								href="/"
								className="font-heading tracking-wide bg-teal-100 text-zinc-900 px-10 py-3 inline-block rounded-xl mt-4 text-flip"
							>
								Explore
							</Link>
						</div>
					</div>
				</h2>

				<div className="grid grid-cols-2 gap-8 max-w-5xl mt-24">
					<div className="w-full aspect-square overflow-hidden rounded-xl even:translate-y-1/2 grid content-end relative">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/asia.jpg')] bg-cover bg-top work z-10 rounded-xl"></div>
						<div className="ml-32">
							<h3 className="text-2xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Vintage Vinyl Haven
								<span className="font-mono text-teal-200 ml-auto text-xl font-bold">
									[1]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-lg text-zinc-500">
								Built an interactive e-commerce site, featuring animated vinyl
								records and a nostalgic aesthetic.
							</p>
						</div>
					</div>
					<div className="w-full aspect-square overflow-hidden rounded-xl even:translate-y-1/2 grid content-end relative">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/man.jpg')] bg-cover bg-top work z-10 rounded-xl"></div>
						<div className="ml-32">
							<h3 className="text-2xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Green Threads
								<span className="font-mono text-fuchsia-200 ml-auto text-xl font-bold">
									[2]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-lg text-zinc-500">
								Created a stylish online store showcasing their sustainable
								clothing line with smooth animations and eco-themed visuals.
							</p>
						</div>
					</div>
					<div className=" w-full aspect-square overflow-hidden rounded-xl even:translate-y-1/2 grid content-end relative">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/paint.jpg')] bg-cover bg-top work z-10 rounded-xl"></div>
						<div className="ml-32">
							<h3 className="text-2xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Wanderlust Wonders
								<span className="font-mono text-teal-200 ml-auto text-xl font-bold">
									[3]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-lg text-zinc-500">
								Built an immersive travel blog for incorporating parallax
								scrolling and dynamic maps to enhance storytelling.
							</p>
						</div>
					</div>
					<div className="w-full aspect-square overflow-hidden rounded-xl even:translate-y-1/2 grid content-end relative">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/blob.jpg')] bg-cover bg-top work z-10 rounded-xl"></div>
						<div className="ml-32">
							<h3 className="text-2xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Fit Life Goals
								<span className="font-mono text-fuchsia-200 ml-auto text-xl font-bold">
									[4]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-lg text-zinc-500">
								Designed a motivational website featuring gamified workout plans
								and progress tracking with vibrant, energetic graphics.
							</p>
						</div>
					</div>
					<div className=" w-full aspect-square overflow-hidden rounded-xl even:translate-y-1/2 grid content-end relative">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/abstract2.jpg')] bg-cover bg-top work z-10 rounded-xl"></div>
						<div className="ml-32">
							<h3 className="text-2xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Sugarplum Sweets
								<span className="font-mono text-teal-200 ml-auto text-xl font-bold">
									[5]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-lg text-zinc-500">
								Developped a playful website using pastel colors and interactive
								elements to highlight their custom cake creations.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
