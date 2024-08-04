"use client";

import MainBtn from "@/components/MainBtn";
import ModelView from "@/components/ModelView";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Loader from "@/components/Loader";

const data = [
	{
		img: "abstract1.jpg",
		heading: "UI & UX design",
		text: "We blend creativity and strategy to reflect your brand’s essence, ensuring a memorable and cohesive presence across all touchpoints. Let your brand shine and leave a lasting impression. ",
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

const socials = [
	{
		title: "Github",
	},
	{
		title: "X",
	},
	{
		title: "Instagram",
	},
	{
		title: "Dribble",
	},
	{
		title: "LinkedIn",
	},
];
export default function Home() {
	const main = useRef();
	const [width, setwidth] = useState("0vw");
	const [height, setheight] = useState("0svh");
	const [progress, setprogress] = useState(0);

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);
			const mm = gsap.matchMedia();
			const cards = gsap.utils.toArray(".card");
			mm.add("(min-width: 768px)", () => {
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

			if (window.innerWidth < 768) {
				setheight("50svh");
				setwidth("100vw");
			} else {
				setheight("100svh");
				setwidth("50vw");
			}
			window.onresize = () => {
				if (window.innerWidth < 768) {
					setheight("50svh");
					setwidth("100vw");
				} else {
					setheight("100svh");
					setwidth("50vw");
				}
			};
		},
		{ scope: main.current }
	);

	return (
		<main
			ref={main}
			className="bg-zinc-900 overflow-x-hidden"
		>
			<Loader progress={progress} />
			<section className="w-screen h-screen relative grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 z-0">
				<div className="circle-teal -top-48 max-md:-left-48 md:-right-0 xl:right-48"></div>
				<div className="circle-fuchsia -bottom-48 -right-96 md:-right-48 xl:right-0"></div>
				<img
					src="/assets/svg/pyramid.svg"
					alt="pyramid cut in three parts"
					className="absolute -left-1/4 top-1/2 -translate-y-1/2 -z-10"
					width={1000}
					height={1000}
				/>
				<div className="p-6 lg:p-12 xl:p-24 grid content-center">
					<h1 className=" text-6xl sm:text-8xl xl:text-9xl font-heading uppercase text-zinc-100 leading-[1.1] tracking-wider mb-3 z-10">
						<div>We Design</div>{" "}
						<div className="flex items-center">
							Kick-Ass{" "}
							<img
								src="/assets/svg/abstract.svg"
								alt="abstract shape"
								className="w-12 h-12 sm:h-16 sm:w-16 xl:w-24 xl:h-24"
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
					setprogress={setprogress}
				/>
			</section>

			<section className="min-h-screen p-6 lg:p-24 relative grid section2 max-md:my-24 md:mb-64">
				<div className="circle-fuchsia -left-48 top-1/2 max-md:-translate-y-1/2"></div>
				<div className="circle-teal -right-48 top-full "></div>
				<img
					src="/assets/svg/down.svg"
					alt="arrows pointing down"
					width={500}
					height={500}
					className="absolute right-0 lg:right-24 top-0 lg:top-24 max-md:w-64"
				/>
				<h2 className="text-6xl sm:text-8xl lg:text-10xl text-transparent font-heading uppercase text-zinc-100 leading-[1.1] tracking-wider mb-3 z-10">
					<div className="text-flip origin-bottom">What</div>
					<div className="text-flip origin-bottom">Can</div>
					<div className="flex gap-5 sm:gap-8 items-center">
						<span className="text-flip origin-bottom">we</span>{" "}
						<div className="text-2xl sm:text-5xl lg:text-7xl leading-none text-fuchsia-200 capitalize font-sans font-black tracking-normal">
							<div className="text-flip origin-bottom">do for</div>{" "}
							<div className="text-flip origin-bottom">you ?</div>
						</div>
					</div>
				</h2>

				<div className="grid md:grid-cols-3 justify-self-center max-w-[1024px] gap-12 md:gap-6 mt-12">
					{data.map((el, i) => {
						return (
							<div
								key={i}
								className={`w-full relative rounded-xl overflow-hidden card ${
									i == 2 && "md:translate-y-96"
								} ${i == 1 && "md:translate-y-180"} ${
									i == 0 && "md:translate-y-[1056px]"
								} before:absolute before:w-full before:h-[164px] before:top-0 before:left-0 before:bg-gradient-to-r before:from-teal-100 before:to-teal-400 before:z-20 clip-parent`}
							>
								<Image
									src={`/assets/img/${el.img}`}
									alt="abstract shapes"
									fill={true}
									className="object-cover w-full h-full"
								/>
								<div className="w-[calc(100%+4px)] h-[calc(100%+4px)] bg-zinc-800 z-10 relative p-6 pt-48 clip">
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

			<section className="min-h-screen p-6 lg:p-24 relative">
				<div className="circle-fuchsia -left-48 top-1/2 -translate-y-1/2"></div>
				<div className="circle-teal -right-96 md:right-0 bottom-0"></div>
				<h2 className=" text-transparent  text-zinc-100 leading-[1.1] ">
					<div className="font-heading tracking-wider uppercase text-6xl sm:text-8xl lg:text-10xl text-flip">
						Featured
					</div>
					<div className=" flex flex-col lg:flex-row lg:items-center">
						<span className="font-heading text-fuchsia-200 tracking-wider uppercase text-6xl sm:text-8xl lg:text-10xl text-flip">
							Work
						</span>
						<div className="text-xl md:text-2xl text-zinc-400 max-lg:mt-4 lg:ml-8">
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

				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mt-24 *:w-full *:aspect-square *:overflow-hidden *:rounded-xl md:even:*:translate-y-1/2 *:grid *:content-end *:relative *:max-w-132">
					<div className="work-parent">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/asia.jpg')] bg-cover bg-center md:bg-top work z-10 rounded-xl"></div>
						<div className="ml-24 sm:ml-48 md:ml-32 lg:ml-40">
							<h3 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Vintage Vinyl Haven
								<span className="font-mono text-teal-200 ml-auto text-lg sm:text-xl font-bold">
									[1]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-sm sm:text-xl md:text-lg lg:text-xl text-zinc-500">
								Built an interactive e-commerce site, featuring animated vinyl
								records and a nostalgic aesthetic.
							</p>
						</div>
					</div>
					<div className="work-parent">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/man.jpg')] bg-cover bg-center md:bg-top work z-10 rounded-xl"></div>
						<div className="ml-24 sm:ml-48 md:ml-32 lg:ml-40">
							<h3 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Green Threads
								<span className="font-mono text-fuchsia-200 ml-auto text-lg sm:text-xl font-bold">
									[2]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-sm sm:text-xl md:text-lg lg:text-xl text-zinc-500">
								Created a stylish online store showcasing their clothing line
								with smooth animations and eco-themed visuals.
							</p>
						</div>
					</div>
					<div className="work-parent ">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/paint.jpg')] bg-cover bg-center md:bg-top work z-10 rounded-xl"></div>
						<div className="ml-24 sm:ml-48 md:ml-32 lg:ml-40">
							<h3 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Wanderlust Wonders
								<span className="font-mono text-teal-200 ml-auto text-lg sm:text-xl font-bold">
									[3]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-sm sm:text-xl md:text-lg lg:text-xl text-zinc-500">
								Built an immersive travel blog for incorporating parallax
								scrolling and dynamic maps to enhance storytelling.
							</p>
						</div>
					</div>
					<div className="work-parent">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/blob.jpg')] bg-cover bg-center md:bg-top work z-10 rounded-xl"></div>
						<div className="ml-24 sm:ml-48 md:ml-32 lg:ml-40">
							<h3 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Fit Life Goals
								<span className="font-mono text-fuchsia-200 ml-auto text-lg sm:text-xl font-bold">
									[4]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-sm sm:text-xl md:text-lg lg:text-xl text-zinc-500">
								Designed a motivational website featuring gamified workout plans
								and progress tracking with vibrant, energetic graphics.
							</p>
						</div>
					</div>
					<div className="work-parent ">
						<div className="absolute w-full h-full top-0 left-0 bg-[url('/assets/img/abstract2.jpg')] bg-cover bg-center md:bg-top work z-10 rounded-xl"></div>
						<div className="ml-24 sm:ml-48 md:ml-32 lg:ml-40">
							<h3 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-heading text-zinc-200 mb-2 opacity-0 translate-x-8 transition-all duration-500 delay-300 w-full flex">
								Sugarplum Sweets
								<span className="font-mono text-teal-200 ml-auto text-lg sm:text-xl font-bold">
									[5]
								</span>
							</h3>
							<p className="opacity-0 translate-x-8 transition-all duration-300 delay-500 text-sm sm:text-xl md:text-lg lg:text-xl text-zinc-500">
								Developped a playful website using pastel colors and interactive
								elements to highlight their custom cake creations.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-32 p-6 lg:p-24 relative">
				<img
					src="/assets/svg/phone.svg"
					alt="an analog phone"
					className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 sm:h-132 sm:w-132 xl:w-192 xl:h-192"
				/>
				<h2 className="text-zinc-100 leading-[1.1] z-10 relative">
					<div className="font-heading tracking-wider uppercase text-6xl sm:text-8xl lg:text-10xl text-flip">
						Have an
					</div>
					<div className=" flex items-center">
						<span className="font-heading text-zinc-100 tracking-wider uppercase text-6xl sm:text-8xl lg:text-10xl text-flip">
							Idea ?
						</span>
						<div className="text-2xl sm:text-5xl lg:text-7xl leading-none font-black font-sans text-fuchsia-200 ml-4 sm:ml-8">
							<p className="text-flip">Let's</p>
							<p className="text-flip">Connect</p>
						</div>
					</div>
				</h2>

				<div className="mt-16 max-w-6xl">
					{socials.map((el, i) => {
						return (
							<Link
								key={i}
								href="/"
								className="w-full border-t-2 last:border-b-2 border-zinc-800 text-2xl text-zinc-300 py-6 px-6 sm:px-12 flex items-center relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-zinc-200 before: before:text-zinc-900 z-0 before:-z-10 before:scale-y-0 before:origin-bottom hover:before:scale-y-100 before:transition-transform before:duration-500 hover:before:origin-top transition-all hover:border-zinc-300 hover:text-zinc-800 hover:px-12 sm:hover:px-16 duration-300 group"
							>
								{el.title}
								<img
									src="/assets/svg/arrow.svg"
									alt="two arrows pointing to the right"
									width={48}
									height={48}
									className="ml-auto group-hover:invert transition-all duration-300"
								/>
							</Link>
						);
					})}
				</div>
			</section>
		</main>
	);
}
