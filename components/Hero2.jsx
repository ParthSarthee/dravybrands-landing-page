import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero2() {
	const customScroll = () => {
		document.getElementById("home_more").scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="hero-div flex flex-col text-center items-center justify-center relative text-gray-200 gap-6 pt-32 pb-16 md:pb-0 md:pt-16 bg-neutral-900">
			<div>
				<p className="gradient-animation md:text-9xl font-extrabold text-6xl px-6 md:px-0">
					Your <br /> Growth <br /> Partner
				</p>
			</div>
			<div>
				<Slider />
				{/* <SliderMobile /> */}
			</div>
			<div className="flex sm:gap-8 gap-5">
				<Link href="https://tally.so/r/nPpVbV">
					<button className="sm:py-3 sm:px-8 py-2.5 px-6 rounded uppercase font-bold text-black bg-white hover:bg-creators active:bg-creators">
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

			<div className="md:max-w-3xl md:text-base text-sm m-4 text-gray-500">
				<p>
					DravyBrands is a company that specializes in acquiring startups and
					established brands with the goal of growing them into successful,
					profitable businesses. We leverage our expertise in brand strategy and
					technology to help our portfolio companies reach new heights.
				</p>
			</div>
		</div>
	);
}

function Slider() {
	return (
		<div className="slider-container text-left font-bold md:text-4xl text-2xl md:flex hidden">
			<p className="slider-p">DravyBrands</p>
			<section className="slider-animation slider-animation-2 text-creators">
				<div className="first">
					<div>Consultancy.</div>
				</div>
				<div className="second">
					<div>Founders Community.</div>
				</div>
				<div className="third">
					<div>Funding Opportunity.</div>
				</div>
			</section>
		</div>
	);
}
