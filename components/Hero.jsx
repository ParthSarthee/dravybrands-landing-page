import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
	const customScroll = () => {
		document.getElementById("about").scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="hero-div flex flex-col text-center items-center justify-center relative text-gray-200 gap-6 py-20 md:h-screen md:py-0 bg-neutral-900">
			<div>
				<p className="gradient-animation md:text-9xl font-extrabold text-7xl px-6 md:px-0">
					Your <br /> Growth <br /> Partner
				</p>
			</div>
			<div>
				<Slider />
				{/* <SliderMobile /> */}
			</div>
			<div className="flex sm:gap-8 gap-5">
				<Link href="https://nas.io/db-founders-community">
					<button className="sm:py-3 sm:px-8 py-2.5 px-6 rounded uppercase font-bold text-black bg-white hover:bg-rose-300 active:bg-rose-200">
						Apply Now
					</button>
				</Link>
				<button
					className="sm:py-3 sm:px-8 py-2.5 px-6 rounded uppercase font-bold text-gray-100 bg-gray-700 hover:bg-gray-800 active:bg-gray-900"
					onClick={customScroll}
				>
					Learn More
				</button>
			</div>

			{/* <div className="md:max-w-3xl md:text-base text-sm m-4 text-gray-500">
				<p>
					DravyBrands is a company that specializes in acquiring startups and
					established brands with the goal of growing them into successful,
					profitable businesses. We leverage our expertise in brand strategy and
					technology to help our portfolio companies reach new heights.
				</p>
			</div> */}
		</div>
	);
}

function Slider() {
	return (
		<div className="slider-container text-left font-bold md:text-4xl flex">
			<p className="slider-p md:mb-0 mb-4">DravyBrands</p>
			<section className="slider-animation slider-animation-1 text-rose-300">
				<div className="first">
					<div>Consultancy.</div>
				</div>
				<div className="second">
					<div>Founders Community.</div>
				</div>
				<div className="third">
					<div>Students Community.</div>
				</div>
				<div className="fourth">
					<div>Funding Opportunity.</div>
				</div>
			</section>
		</div>
	);
}
