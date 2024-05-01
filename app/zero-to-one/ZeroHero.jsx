import React from "react";
import "./ZeroHero.css";

export default function D2cxPage() {
	return (
		<div className="my-16 ZeroHeroDiv">
			{/* Home Content */}
			<div className="flex flex-col justify-center items-center gap-16">
				<div className="hidden justify-center items-center md:flex">
					<img src="/assets/logo2.png" alt="" className="rounded-4xl" />
				</div>
				<div className="flex justify-center items-center">
					<h1 className="ml-5 text-start text-white font-semibold text-4xl leading-tight md:text-6xl md:text-center">
						Master <span className="gran">10X D2C Growth</span>
						<br /> In 12 Weeks
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center gap-8">
					<div className=" text-white flex justify-between items-center flex-col min-[670px]:flex-row gap-4">
						<div className="flex items-center justify-center">
							<img src="/assets/Component 80.svg" alt="" />
							<p className="ml-2">Live & Hybrid</p>
						</div>
						<div className="flex items-center justify-center min-[670px]:justify-start">
							<img src="/assets/assest2.svg" alt="" />
							<p className="ml-2">Applications Closed</p>
						</div>
					</div>
					<button className="bg-btn-back w-full h-12 rounded-xl hover:bg-btn-hover">
						<a href="#" className="text-white">
							JOIN WAITLIST
						</a>
					</button>
				</div>
			</div>

			{/* Slider Container */}
			<div className="mt-20 contain flex overflow-hidden">
				<div className="slider w-fit flex">
					{/* Slider Content (Repeat for multiple slides) */}
					<div className="hlo flex">
						<div className="card flex flex-col justify-between">
							<img src="/assets/C_05.svg" alt="" />
							<img src="/assets/C_06.svg" alt="" />
						</div>
						<div className="card">
							<img src="/assets/C_07.svg" alt="" />
						</div>
						<div className="card flex items-end">
							<img src="/assets/C_08.svg" alt="" />
						</div>
						{/* ... More card components ... */}
						<div className="card flex items-start">
							<img src="/assets/C_01.svg" alt="" />
						</div>
						<div className="card flex flex-col justify-end items-end my-5">
							<img src="/assets/C_02.svg" alt="" />
							<img src="/assets/C_03.svg" alt="" className="mt-10" />
						</div>
						<div className="card flex">
							<img src="/assets/C_04.svg" alt="" />
						</div>
					</div>
					<div className="hlo flex">
						<div className="card flex flex-col justify-between">
							<img src="/assets/C_05.svg" alt="" />
							<img src="/assets/C_06.svg" alt="" />
						</div>
						<div className="card">
							<img src="/assets/C_07.svg" alt="" />
						</div>
						<div className="card flex items-end">
							<img src="/assets/C_08.svg" alt="" />
						</div>
						{/* ... More card components ... */}
						<div className="card flex items-start">
							<img src="/assets/C_01.svg" alt="" />
						</div>
						<div className="card flex flex-col justify-end items-end my-5">
							<img src="/assets/C_02.svg" alt="" />
							<img src="/assets/C_03.svg" alt="" className="mt-10" />
						</div>
						<div className="card flex">
							<img src="/assets/C_04.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
