// eslint-disable spellcheck
"use client";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Section1 /> */}
			<BrandSlider />
			<Section2 />
			<AboutUs />
			<TestimonialSlider />
			<Footer />
		</>

		// <div className="">Home</div>
	);
}

function Section1() {
	return (
		<div className=" py-32 md:h-screen md:py-0 bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center px-7 gap-20 md:gap-32 md:text-2xl md:font-light md:text-center section-1-gradient">
			<div className="flex flex-col justify-center items-center md:gap-4 gap-2 w-full">
				<h1 className="font-bold text-4xl w-full text-left md:text-center md:text-6xl">
					Wealth Creation
				</h1>
				<p className="md:max-w-2xl w-full">Refer & get rewarded.</p>
			</div>
			<div className="flex justify-evenly flex-col md:flex-row w-full gap-14">
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-regular fa-compass text-primary text-5xl md:text-6xl"></i>

					<p className="md:max-w-xs">
						Enjoy lifetime benefit of referral based income
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-sack-dollar text-primary text-5xl md:text-6xl"></i>

					<p className="md:max-w-xs">
						Build a self growing income with self growing chain of added members
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-hand-holding-dollar text-primary text-5xl md:text-6xl"></i>

					<p className="md:max-w-xs">
						Refer & get rewarded when your peer lands a job
					</p>
				</div>
			</div>
		</div>
	);
}

function Section2() {
	return (
		<div className=" h-screen bg-neutral-900 text-neutral-100 flex flex-col justify-center items-center px-7 gap-20 md:gap-32 md:text-2xl md:font-light md:text-center section-2-gradient">
			<div className="flex flex-col justify-center items-center md:gap-4 gap-2">
				<h1 className="font-bold text-4xl w-full text-left md:text-center md:text-6xl">
					A community specifically <br />{" "}
					<span className="gradient-animation">designed for founders</span>
				</h1>
				<p className="md:max-w-2xl">
					An environment that showcases your expertise and builds your
					credibility among top founders.
				</p>
			</div>
			<div className="flex justify-evenly flex-col md:flex-row w-full gap-14">
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-chart-simple text-primary text-5xl md:text-6xl"></i>
					<p className="md:max-w-[250px] ml-[3px] md:ml-0">
						Boost your professional credibility 10X
					</p>
				</div>
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-users text-primary text-4xl md:text-6xl"></i>

					<p className="md:max-w-[250px]">Elevate valuation by 500%</p>
				</div>
				<div className="flex flex-row md:flex-col items-center gap-4">
					<i className="fa-solid fa-link text-primary text-4xl md:text-6xl"></i>

					<p className="md:max-w-[250px]">Stand out to Senior Executives</p>
				</div>
			</div>
		</div>
	);
}

function BrandSlider() {
	const logos = [];
	for (let i = 0; i < 13; i++) {
		let imgSrc = "/brands/i" + i + ".svg";
		if (i == 12) imgSrc = "/brands/i12.png";
		logos.push(<img src={imgSrc} className="max-w-28 mx-4" key={imgSrc} />);
	}

	return (
		<div>
			<h1 className="md:text-3xl text-lg text-center p-8">
				Founders from the Top 100+ Companies trust DravyBrands for their growth.
			</h1>
			<Marquee speed={200} className="text-white py-8">
				{logos}
			</Marquee>
		</div>
	);
}

function TestimonialSlider() {
	const Reviews = [
		<TestimonialCard
			body="It has been a great partnership of growth and experience with a team of very professional and talented people from DravyBrands."
			brand="/brands/alogo.png"
			name="Parth Sarthee"
			pfp="/founders/parth.jpg"
			role="CEO, Aroxbit"
			key={0}
		/>,

		<TestimonialCard
			body="Thank you DravyBrands! You people are brilliantly helping our startup ACD in its growth by improving its business model & always being their guiding us through our problems."
			brand="/brands/acd.png"
			name="Ayush Ghildiyal"
			pfp="/founders/ayush.jpg"
			role="Founder, ACD"
			key={1}
		/>,

		<TestimonialCard
			body="I would highly recommend Dravybrands to any business looking to grow their brand. Their expertise & dedication make them an invaluable partner."
			brand="/brands/grafy.svg"
			name="Gaurav Kwatra"
			pfp="/founders/gaurav.jpeg"
			role="CEO, Grafy"
			key={2}
		/>,

		<TestimonialCard
			body="its been great working with dravybrands. Their team of experts in branding, marketing, and technology work closely with my company to reach its full potential."
			brand="/brands/s7.svg"
			name="Shivam Arora"
			pfp="/founders/shivam.jpg"
			role="Director, S7 Fitness"
			key={3}
		/>,

		<TestimonialCard
			body="From the moment we started working with DravyBrands, their expertise and dedication to our success were evident."
			brand="/brands/raged.svg"
			name="Abhinav Sharma"
			pfp="/founders/user.png"
			role="CEO, Raged Media"
			key={4}
		/>,

		<TestimonialCard
			body="Thank you Namit & Sahil sir for a wonderful partnership with DravyBrand and looking forward to more such partnerships in our future events."
			brand="/brands/iitdelhi.png"
			name="Sanidhya Garg"
			pfp="/founders/user.png"
			role="IIT Delhi"
			key={5}
		/>,
	];

	return (
		<div className="mt-32">
			<h1 className="md:text-4xl font-bold text-2xl text-center px-8">
				What our community has to say
			</h1>
			<Marquee className="text-white py-20">{Reviews}</Marquee>
		</div>
	);
}

function TestimonialCard({ pfp, brand, body, name, role, size = "w-10 h-10" }) {
	return (
		<div className="flex flex-col justify-between bg-neutral-800 w-72 h-64 rounded-xl shadow-xl px-4 py-2 flex-grow sm:flex-grow-0 mx-8">
			<div>
				<i className="fa-solid fa-quote-left text-4xl text-gray-200"></i>
				{/* <p className="unique-para" dangerouslySetInnerHTML={{ __html: body }} /> */}
				<p>{body}</p>
			</div>
			<div className="flex flex-col w-full gap-3 py-3">
				<div>
					<hr className="border border-solid border-gray-200 w-full" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<div className="w-10 h-10">
						<img className="rounded-full" src={pfp} alt={name} />
					</div>
					<div className="text-sm font-medium">
						<h1>
							{name} <br /> {role}
						</h1>
					</div>
					<div className="flex justify-center items-center">
						<img src={brand} alt="Brand Logo" className={size} />
					</div>
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
				<div className="w-full bg-primary rounded-b-xl md:rounded-xl relative md:h-1/2 h-1/2">
					<img
						className="absolute w-full p-4 md:p-0 md:top-[-50%] md:left-[16%] md:w-2/3"
						src="/db_about.svg"
					/>
				</div>
				<div className="w-full hidden md:flex md:h-1/2"></div>
			</div>

			<div className="flex flex-col gap-4 justify-evenly w-full p-8 text-neutral-900 md:w-1/2 bg-neutral-100 rounded-t-xl md:rounded-xl md:px-20">
				<div className="md:text-6xl text-2xl font-bold">
					<h1 className="text-primary">About</h1>
					<h1>Dravy Brands</h1>
				</div>
				<p className="md:text-xl font-light">
					DravyBrands is the community for founders, where we're all about
					making connections and having a blast!
					<br /> <br />
					We organize top-notch events and parties exclusively for founders.
					It's the perfect chance to meet fellow entrepreneurs, share stories,
					and maybe even find your next big collaboration.
					<br /> <br />
					Our mission is simple: to create a supportive environment where
					founders can thrive. Whether you're just starting out or have been in
					the game for years, there's a place for you here.
					<br /> <br />
					At our events, you'll rub elbows with potential partners, investors,
					and mentors who can help take your startup to the next level.
				</p>
				<a
					href="https://nas.io/db-founders-community"
					className="bg-primary text-center p-4 text-white text-lg rounded-xl md:max-w-[250px]"
				>
					Apply Now
				</a>
			</div>
		</div>
	);
}
