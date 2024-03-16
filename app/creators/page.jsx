// eslint-disable spellcheck
"use client";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";

export default function Home() {
	return (
		<div className="hero2-gradient">
			<Hero2 />
			<Section1 />
			<AboutUs />
			<Footer />
		</div>
	);
}

function Section1() {
	return (
		<div className="section2-t-gradient py-32 md:h-screen md:py-0 text-neutral-100 flex flex-col justify-center items-center px-7 gap-20 md:gap-32 md:text-2xl md:font-light md:text-center dc-section-1-gradient">
			<div className="flex flex-col justify-center items-center md:gap-4 gap-2 w-full">
				<h1 className="font-bold text-4xl w-full text-left md:text-center md:text-6xl">
					Wealth Creation
				</h1>
				<p className="md:max-w-2xl w-full">Refer & get rewarded.</p>
			</div>
			<div className="flex justify-evenly flex-col md:flex-row w-full gap-14">
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-regular fa-compass text-creators text-5xl md:text-6xl"></i>

					<p className="md:max-w-xs">
						Enjoy lifetime benefit of referral based income
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-sack-dollar text-creators text-5xl md:text-6xl"></i>

					<p className="md:max-w-xs">
						Build a self growing income with self growing chain of added members
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-hand-holding-dollar text-creators text-5xl md:text-6xl"></i>

					<p className="md:max-w-xs">
						Refer & get rewarded when your peer lands a job
					</p>
				</div>
			</div>
		</div>
	);
}

function AboutUs() {
	return (
		<div
			id="about"
			className="flex flex-col-reverse md:flex-row md:min-h-screen w-full md:gap-2 p-6 justify-evenly"
		>
			<div className="flex flex-col md:flex-col-reverse w-full md:w-1/2 md:h-auto h-[50vh]">
				<div className="w-full bg-creators rounded-b-xl md:rounded-xl relative md:h-1/2 h-1/2">
					<img
						className="absolute w-full p-4 md:p-0 md:top-[-50%] md:left-[16%] md:w-2/3"
						src="/db_about.svg"
					/>
				</div>
				<div className="w-full hidden md:flex md:h-1/2"></div>
			</div>
			<div className="flex flex-col gap-4 justify-evenly w-full p-8 text-neutral-900 md:w-1/2 bg-neutral-100 rounded-t-xl md:rounded-xl md:px-20">
				<div className="md:text-6xl text-2xl font-bold">
					<h1 className="text-creators">About</h1>
					<h1>Dravy Creators</h1>
				</div>
				<p className="md:text-xl font-light">
					Dravy Creators is dedicated to fostering a supportive and engaging
					community where creators of all backgrounds and levels can thrive.
					<br /> <br />
					We welcome creators at every stage of their journey, from beginners to
					seasoned professionals, fostering an inclusive environment where
					diversity is celebrated.
					<br />
					<br />
					Our platform serves as a dynamic networking hub, connecting creators
					with like-minded individuals, industry experts, and potential
					collaborators.
					<br />
					<br />
					We provide a space for creators to share their ideas, projects, and
					experiences, offering inspiration, feedback, and support to help them
					achieve their goals.
				</p>
				<a
					href="https://dravycreators.dravybrands.com/"
					className="bg-creators p-4 text-center text-white text-lg rounded-xl md:max-w-[250px]"
				>
					Apply Now
				</a>
			</div>
		</div>
	);
}
