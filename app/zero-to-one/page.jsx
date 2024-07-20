"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import React from "react";
import ZeroHero from "./ZeroHero";
import ZeroPrice from "./ZeroPrice";

function Zero() {
	return (
		<>
			<ZeroHero />
			<Hero2 />
			<About />
			<JoinUs />
			<SetOf3 />
			<Speakers />
			<Curriculum />
			<ItsFor />

			<ZeroPrice />

			<WeeklySchedule />
			<ToLife />
			<FAQ />
			<Footer />
		</>
	);
}

const Hero2 = () => {
	return (
		<div className="flex flex-wrap-reverse items-center gap-12 p-5 mb-16 md:flex-nowrap md:gap-4 justify-evenly mt-36">
			<div className="uppercase">
				<div className="text-5xl font-bold sm:text-7xl">
					<p className="">
						Become a <br /> startup <br /> founder <br />
					</p>
					<p className="border-t border-b gradient-animation border-zero">
						in 12 weeks
					</p>
				</div>
				<div className="sm:text-xs text-[9px] text-center mt-4 p-2 rounded border-zero border bg-neutral-800">
					<span>Application Closes in August, 2024.</span>
					{/* <span> Cohort Starts on 3rd May.</span> */}
				</div>
				<div className="flex gap-2 mt-8 text-sm justify-evenly">
					<a
						href="https://tally.so/r/nrl4bR"
						className="uppercase w-full py-2.5 text-neutral-900 text-center bg-neutral-50 rounded"
					>
						Apply Now
					</a>
					<button className="uppercase w-full py-2.5 border border-primary rounded">
						Curriculum
					</button>
				</div>
			</div>
			<div className="w-full sm:w-1/2 lg:p-20">
				<img src="/zero/hero2.png" className="floating" alt="startup" />
			</div>
		</div>
	);
};

function About() {
	return (
		<div className="flex items-center justify-center w-full my-16 md:my-32 text-neutral-900">
			<div className="flex flex-col items-center justify-center p-4 py-8 m-4 border-2 sm:w-10/12 sm:p-16 sm:m-auto sm:py-16 bg-neutral-50 rounded-3xl border-zero">
				<div className=" max-w-[700px] text-center">
					<h1 className="text-4xl uppercase sm:text-6xl">
						About <span className="gradient-animation">Zero to One</span>
					</h1>
					<p className="mt-4 text-base sm:text-xl">
						The worlds need creativity and ingenuity. Don't put your dreams on
						hold. Start your founder's journey today!
					</p>
				</div>
				<div className="flex flex-row flex-wrap justify-center gap-10 mt-10 lg:flex-nowrap">
					<div className="border border-zero rounded-3xl p-4 w-full lg:max-w-[400px] bg-neutral-100 lg:w-1/2">
						<img
							src="/zero/about.svg"
							alt="zero1"
							className="w-full floating"
						/>
					</div>
					<ul className="zero-about-list border border-zero rounded-3xl p-6 w-full lg:max-w-[400px]  lg:w-1/2 list-disc list-inside bg-neutral-100 font-light sm:text-xl text-base ">
						<li>
							Master a <span className="font-bold">structured approach</span> to
							building a tech venture
						</li>
						<li>
							<span className="font-bold">Get coached by</span> India's top 1%
							founders, operators and investors
						</li>
						<li>
							<span className="font-bold">Learn by doing</span> - Work on actual
							startup ideas in a real-world startup team simulation
						</li>
						<li>
							<span className="font-bold">Expand your network</span> in the
							community of like-minded peers
						</li>
						<li>
							<span className="font-bold">Find your co-founder</span> & your
							core team among the fellows and alumni.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

function JoinUs() {
	const data = [
		{
			title: "The Foundation",
			description: "Comprehensive company registration and bank account setup.",
		},
		{
			title: "Brand Presence",
			description: "Professional domain-name and website for your startup",
		},
		{
			title: "Expert Support",
			description:
				"Personal mentorship and legal consultaion to make informed decisions.",
		},
		{
			title: "Let's Launch",
			description:
				"Have a ready-to-sell product/service by the end of the cohort.",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center gap-8 p-4 my-16 md:my-32 md:gap-20">
			<div className=" max-w-[1000px] text-center">
				<h1 className="text-4xl uppercase md:text-6xl">
					Why <span className="gradient-animation">Join Us?</span>
				</h1>
				<p className="mt-4 text-lg md:text-xl md:mt-6">
					From concept to launch, be unstoppable. Zero to One empowers ALL
					aspiring entrepreneurs. Build your tech startup with our guidance:
					register your company, craft a website, get expert advice, and launch
					a ready-to-sell product.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-8 px-4 py-8 border-2 sm:w-10/12 sm:p-16 sm:m-auto sm:py-16 bg-neutral-800 rounded-3xl border-zero lg:grid-cols-2 ">
				{data.map((d, i) => (
					<div
						key={i}
						className="flex flex-col gap-2 p-10 bg-neutral-100 text-neutral-800 rounded-2xl lg:gap-10 sm:gap-4"
					>
						<h1 className="text-3xl font-bold md:text-4xl">{d.title}</h1>
						<p className="text-lg md:text-xl">{d.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

function Speakers() {
	const a = [0, 1, 2, 3, 4, 5, 6, 7];

	return (
		<div className="flex flex-col items-center justify-center gap-10 px-8 my-16 md:my-32">
			<div className="text-center">
				<h1 className="text-4xl uppercase sm:text-6xl">
					cohort <span className="gradient-animation">speakers</span> &{" "}
					<span className="gradient-animation">mentors</span>
				</h1>
				<p className="mt-4 sm:text-xl text-md">
					Learn from real-world, case-based examples brought to life by unicorn
					founders, serial entrepreneurs and top VCs.
				</p>
			</div>
			<div className="items-center justify-center w-full">
				<p className="w-full text-3xl text-center sm:text-5xl">Coming Soon</p>
			</div>
			{/* <div className="flex flex-wrap gap-20 max-w-[1000px] justify-center items-center">
				{a.map((i) => (
					<div key={i}>
						<img
							src="/founders/sample.jpeg"
							className="object-cover w-40 border h-52 border-zero rounded-2xl bg-neutral-800"
						></img>
						<div className="mt-2 ml-2">
							<p className="">Siddharth Jain</p>
							<p className="text-sm font-light">Founder, Brewhouse</p>
						</div>
					</div>
				))}
			</div> */}
		</div>
	);
}

function Curriculum() {
	return (
		<div className="flex items-center justify-center w-full my-16 md:my-32 ">
			<div className="flex flex-col items-center justify-center p-4 py-8 m-4 border-2 sm:w-10/12 sm:p-16 sm:m-auto sm:py-16 bg-neutral-800 rounded-3xl border-zero">
				<div className=" md:max-w-[1000px] text-center">
					<h1 className="text-4xl font-bold uppercase md:text-6xl text-zero">
						how is this 12 week journey structured?
					</h1>
					<p className="mt-6 sm:text-xl text-md">
						Each week focuses on a critical aspect of becoming a founder.
					</p>
					<button className="uppercase py-2.5 px-12 border bg-neutral-200  rounded mt-12 text-neutral-800">
						Download Full Curriculum
					</button>
				</div>
			</div>
		</div>
	);
}

const WeeklySchedule = () => {
	return (
		<section>
			<div className="p-8 py-12 my-12 bg-neutral-800 md:py-32 md:my-32">
				{/* Content */}
				<div className="">
					<div className="text-center">
						<h2 className="text-4xl uppercase text-neutral-100 sm:text-6xl">
							Weekly <span className="gradient-animation">Schedule</span>
						</h2>
						<div className="pt-6">
							<p className="pb-4 text-sm text-neutral-100 sm:text-xl">
								These are weekly recurring sessions and learning activities
								scheduled throughout the duration of this course.
							</p>
						</div>
					</div>
				</div>

				{/* Schedule */}
				<div className="sm:flex sm:justify-between">
					{/* 1 - Core Sessions */}
					<ScheduleCard
						title="Core Sessions"
						description="Live, Hands-On, Interactive Sessions & Workshops"
						timings={[
							{ day: "Sat", time: "11:00 AM - 2:00 PM (IST)" },
							{ day: "Sun", time: "11:00 AM - 1:00 PM (IST)" },
						]}
					/>

					{/* 2 - Team Huddles & Mentorship */}
					<ScheduleCard
						title="Team Huddles & Mentorship"
						description="Team Huddles & The Group Mentorship Will Be Held On Weekdays"
						timings={[
							{ day: "Wed", time: "8:00 PM - 9:30 PM (IST)" },
							{ day: "Tues/Wed/Thu/Fri", time: "7:30 AM - 9:00 PM (IST)" },
						]}
					/>

					{/* 3 - In-Person Sessions */}
					<ScheduleCard
						last={true}
						title="In-Person Sessions"
						description="The Opening Orientation, Startup Tours and Convocation"
						timings={[
							{ day: "Fri", time: "10:00 AM - 8:00 PM (IST)" },
							{ day: "Sat", time: "5:00 PM Onwards (IST)" },
						]}
					/>
				</div>
			</div>
		</section>
	);
};

const ScheduleCard = ({ title, description, timings, last = false }) => {
	let customClass = " sm:border-r sm:border-primary ";
	if (last) customClass = "";

	return (
		<div className={"sm:w-96 sm:mr-6 sm:pr-6" + customClass}>
			<div className="sm:border-b sm:border-primary sm:border-dashed">
				<p className="text-xl font-bold uppercase text-zero">{title}</p>
				<p className="pb-4 text-neutral-100 sm:text-xl">{description}</p>
			</div>
			<div>
				<p className="text-xl font-bold uppercase text-zero sm:pt-3">
					Timings:
				</p>
				{timings.map((timing) => (
					<div
						key={timing.day}
						className="pt-3 pb-3 mt-6 rounded-lg bg-neutral-100 text-neutral-800 pl-9 sm:pl-4"
					>
						{timing.day} {timing.time}
					</div>
				))}

				<div className="mt-10 mb-10 border-b-2 border-primary sm:hidden"></div>
			</div>
		</div>
	);
};

export function ItsFor() {
	const data = [
		{
			title: "Startup Operators",
			description:
				"Who want to start thinking & executing like a startup founder",
		},
		{
			title: "Corporate Professional",
			description:
				"Seeking exposure to early stage methods before taking the plunge",
		},
		{
			title: "Solopreneurs",
			description:
				"Wanting to transform their freelance practice into a startup",
		},
		{
			title: "Studentpreneurs",
			description: "Students who want to start something of their own",
		},
	];

	const pathname = usePathname();
	const [color, setColor] = useState("zero");

	return (
		<div className="flex flex-col items-center justify-center gap-8 p-4 my-16 md:my-32 md:gap-20">
			<div className=" max-w-[1000px] text-center">
				<h1 className="text-4xl uppercase md:text-6xl">
					Who's <span className="gradient-animation">It For?</span>
				</h1>
				<p className="mt-4 text-lg md:text-xl md:mt-6">
					From startup operators and corporate to professionals to B-school
					students and family business owners-Zero To One is for anyone who
					aspires to build tech-driven startup soon.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-8 px-4 py-8 border-2 sm:w-10/12 sm:p-16 sm:m-auto sm:py-16 bg-neutral-800 rounded-3xl border-zero lg:grid-cols-2 ">
				{data.map((d, i) => (
					<div
						key={i}
						className="flex flex-col gap-2 p-10 bg-neutral-100 text-neutral-800 rounded-2xl lg:gap-10 sm:gap-4"
					>
						<h1 className="text-3xl font-bold md:text-4xl">{d.title}</h1>
						<p className="text-lg md:text-xl">{d.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

function ToLife() {
	return (
		<div className="flex items-center justify-center w-full my-16 md:my-32 text-neutral-900">
			<div className="flex flex-col items-center justify-center p-4 py-8 m-4 border-2 sm:w-10/12 sm:p-16 sm:m-auto sm:py-16 bg-neutral-800 text-neutral-200 rounded-3xl border-zero">
				<div className="flex flex-row flex-wrap-reverse justify-between gap-10 md:flex-nowrap">
					<div className="w-full md:w-1/3">
						<h1 className="mb-12 text-4xl uppercase sm:text-6xl text-neutral-400">
							Don't wait! It's time to bring your startup dreams <br />
							<span className="text-5xl font-bold gradient-animation sm:text-7xl">
								to life.
							</span>
						</h1>
						<a
							href="https://tally.so/r/nrl4bR"
							className="w-full px-16 py-3 font-bold uppercase rounded-lg bg-zero text-neutral-800"
						>
							Apply Now
						</a>
					</div>
					<div className="w-full p-4 border border-zero rounded-3xl md:w-1/2 bg-neutral-100">
						<img src="/zero/cta.svg" alt="zero1" className="w-full floating" />
					</div>
				</div>
			</div>
		</div>
	);
}

function SetOf3() {
	return (
		<div className="flex items-center justify-center w-full my-16 md:my-32 text-neutral-900">
			<div className="flex flex-col items-center justify-center gap-16 p-4 py-8 m-4 border-2 sm:w-10/12 sm:p-16 sm:py-16 bg-neutral-800 text-neutral-200 rounded-3xl border-zero md:gap-28">
				<div className="flex flex-col items-start justify-center gap-8 text-center">
					<h1 className="text-4xl uppercase sm:text-6xl">
						WHAT SETS <span className="gradient-animation">Zero-To-One</span>{" "}
						APART?
					</h1>
					<p className="text-base sm:text-xl">
						Zero To One is the only program in India to empower aspiring
						entrepreneurs to start their founder's journey.
					</p>
				</div>
				{/* Sec 1 starts */}
				<div className="flex flex-row flex-wrap-reverse w-full gap-10 lg:flex-nowrap justify-evenly">
					<div className="flex flex-col w-full gap-4 lg:w-1/2">
						<h1 className="mb-2 text-2xl font-bold uppercase sm:text-3xl">
							Learn By Doing
							<span className="gradient-animation"></span>
						</h1>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Hands-On Experience
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Industry Project
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Team Mentorship
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Upto 10 Lakhs of Funding Opportunities
						</h2>
					</div>
					<div className="w-full p-4 border lg:w-1/2 border-zero rounded-3xl bg-neutral-100">
						<img
							src="/zero/one.svg"
							alt="zero1"
							className="w-full h-full floating "
						/>
					</div>
				</div>
				{/* Sec 2 starts */}
				<div className="flex flex-row flex-wrap w-full gap-10 lg:flex-nowrap justify-evenly">
					<div className="w-full p-4 border lg:w-1/2 border-zero rounded-3xl bg-neutral-100">
						<img
							src="/zero/two.svg"
							alt="zero1"
							className="w-full h-full floating"
						/>
					</div>
					<div className="flex flex-col w-full gap-4 lg:w-1/2">
						<h1 className="mb-2 text-2xl font-bold uppercase sm:text-3xl">
							GET DIRECT ACCESS TO TOP FOUNDERS, OPERATORS & INVESTORS
							<span className="gradient-animation"></span>
						</h1>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Faculty Of India's Top 1%
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Multiple Networking Events
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Grand Convocation & Startup Tour
						</h2>
					</div>
				</div>
				{/* Sec 3 starts */}
				<div className="flex flex-row flex-wrap-reverse w-full gap-10 lg:flex-nowrap justify-evenly">
					<div className="flex flex-col w-full gap-4 lg:w-1/2">
						<h1 className="mb-2 text-2xl font-bold uppercase sm:text-3xl">
							Become part of an exclusive community
							<span className="gradient-animation"></span>
						</h1>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Ambitious Peers & Alumni Group
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Find Your Perfect Co-Founder
						</h2>
						<h2 className="p-8 text-lg border bg-neutral-100 border-zero text-neutral-800 rounded-2xl">
							Unlimited Peer Learning
						</h2>
					</div>
					<div className="w-full p-4 border lg:w-1/2 border-zero rounded-3xl bg-neutral-100">
						<img
							src="/zero/three.svg"
							alt="zero1"
							className="w-full h-full floating"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function FAQ() {
	return (
		<div className="flex flex-col items-center justify-center w-full px-8 my-16 md:my-32 ">
			<h1 className="mb-16 text-6xl">FAQs</h1>
			<FAQCard
				question="What is the 'Zero to One' program?"
				answer="The 'Zero to One' program is an intensive 8-week startup acceleration cohort designed to empower aspiring entrepreneurs to turn their ideas into market-ready businesses. Through mentorship, resources, and strategic guidance, participants will navigate the journey from concept to launch, gaining the tools and support needed to succeed in the startup landscape."
			/>
			<FAQCard
				question="Who is the 'Zero to One' program for?"
				answer="The 'Zero to One' program is ideal for individuals with innovative ideas and entrepreneurial aspirations who are ready to take the leap into startup creation. Whether you're a first-time founder, a seasoned entrepreneur, or someone with a passion for problem-solving and innovation, 'Zero to One' provides the guidance and resources to bring your vision to life."
			/>
			<FAQCard
				question="What can participants expect from the 'Zero to One' experience?"
				answer="Participants in the 'Zero to One' program can expect a dynamic and immersive experience tailored to support their journey from idea to market-ready startup. From expert mentorship and strategic consultancy to interactive workshops and networking opportunities, the program equips participants with the knowledge, skills, and connections needed to succeed."
			/>
			<FAQCard
				question="What sets the 'Zero to One' program apart from other startup accelerators?"
				answer="'Zero to One' distinguishes itself through its unique combination of hands-on support, personalized guidance, and a focus on rapid growth and tangible results. With a streamlined 8-week timeline and a comprehensive approach to startup development, the program empowers participants to achieve significant milestones and make meaningful progress in a short timeframe."
			/>
			<FAQCard
				question="How does the application process for the 'Zero to One' program work?"
				answer="The application process for the 'Zero to One' program involves submitting an online application detailing your startup idea, your background and experience, and your goals for participation. Our selection committee will review applications and select a cohort of promising entrepreneurs who demonstrate the potential to benefit from the program."
			/>
			<FAQCard
				question="What support is available to 'Zero to One' participants after the program concludes?"
				answer="'Zero to One' participants receive ongoing support and resources even after the program concludes. This includes access to a network of mentors, alumni, and industry experts, as well as opportunities for continued learning, networking, and growth. Additionally, participants may have the opportunity to showcase their startups to potential investors and partners through DravyBrands network."
			/>
		</div>
	);
}

function FAQCard({ question, answer }) {
	const [show, setShow] = React.useState(false);

	return (
		<div className="w-full max-w-screen-lg p-4 border-b border-dashed border-neutral-500 text-neutral-300">
			<div
				className="flex items-center justify-between w-full cursor-pointer"
				onClick={() => setShow(!show)}
			>
				<h1 className="text-2xl">{question}</h1>{" "}
				<span className="text-2xl">{show ? "-" : "+"}</span>
			</div>
			<p className={"p-1 mr-4 " + (!show && "hidden")}>{answer}</p>
		</div>
	);
}

export default Zero;
