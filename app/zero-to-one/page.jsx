"use client";
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
		<div className="flex md:flex-nowrap flex-wrap-reverse md:gap-4 gap-12 items-center justify-evenly mb-16 mt-36 p-5">
			<div className="uppercase">
				<div className="sm:text-7xl text-5xl font-bold">
					<p className="">
						Become a <br /> startup <br /> founder <br />
					</p>
					<p className="gradient-animation border-t border-b border-zero">
						in 8 weeks
					</p>
				</div>
				<div className="sm:text-xs text-[9px] text-center mt-4 p-2 rounded border-zero border bg-neutral-800">
					<span>Application Closes in August, 2024.</span>
					{/* <span> Cohort Starts on 3rd May.</span> */}
				</div>
				<div className="mt-8 flex justify-evenly gap-2 text-sm">
					<a
						href="https://rzp.io/l/zero-to-one"
						className="uppercase w-full py-2.5 text-neutral-900 text-center bg-neutral-50 rounded"
					>
						Join Waitlist
					</a>
					<button className="uppercase w-full py-2.5 border border-primary rounded">
						Curriculum
					</button>
				</div>
			</div>
			<div className="sm:w-1/2 w-full">
				<img src="/zero/hero2.svg" alt="startup" />
			</div>
		</div>
	);
};

function About() {
	return (
		<div className="w-full flex justify-center items-center md:my-32 my-16 text-neutral-900">
			<div className="sm:w-10/12 m-4 sm:p-16 p-4 sm:m-auto py-8 sm:py-16 bg-neutral-50 rounded-3xl border-2 border-zero flex flex-col justify-center items-center">
				<div className=" max-w-[700px] text-center">
					<h1 className="uppercase sm:text-6xl text-4xl">
						About <span className="gradient-animation">Zero to One</span>
					</h1>
					<p className="sm:text-xl text-base mt-4">
						The worlds need creativity and ingenuity. Don't put your dreams on
						hold. Start your founder's journey today!
					</p>
				</div>
				<div className="flex flex-row lg:flex-nowrap flex-wrap justify-center gap-10 mt-10">
					<img
						src="/zero/about.svg"
						alt="zero1"
						className="border border-zero rounded-3xl p-4 w-full lg:max-w-[400px] bg-neutral-100 lg:w-1/2"
					/>
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

function Speakers() {
	const a = [0, 1, 2, 3, 4, 5, 6, 7];

	return (
		<div className="flex flex-col justify-center items-center gap-10 md:my-32 my-16 px-8">
			<div className="text-center">
				<h1 className="uppercase sm:text-6xl text-4xl">
					cohort <span className="gradient-animation">speakers</span> &{" "}
					<span className="gradient-animation">mentors</span>
				</h1>
				<p className="sm:text-xl text-md mt-4">
					Learn from real-world, case-based examples brought to life by unicorn
					founders, serial entrepreneurs and top VCs.
				</p>
			</div>
			<div className="w-full justify-center items-center">
				<p className="text-3xl sm:text-5xl w-full text-center">Coming Soon</p>
			</div>
			{/* <div className="flex flex-wrap gap-20 max-w-[1000px] justify-center items-center">
				{a.map((i) => (
					<div key={i}>
						<img
							src="/founders/sample.jpeg"
							className="w-40 h-52 border border-zero rounded-2xl bg-neutral-800 object-cover"
						></img>
						<div className="ml-2 mt-2">
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
		<div className="w-full flex justify-center items-center md:my-32 my-16 ">
			<div className="sm:w-10/12 m-4 sm:p-16 p-4 sm:m-auto py-8 sm:py-16 bg-neutral-800 rounded-3xl border-2 border-zero flex flex-col justify-center items-center">
				<div className=" md:max-w-[1000px] text-center">
					<h1 className="uppercase md:text-6xl text-4xl text-zero font-bold">
						how is this 8 week journey structured?
					</h1>
					<p className="sm:text-xl text-md mt-6">
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
			<div className="bg-neutral-800 md:py-32 md:my-32 my-12 py-12 p-8">
				{/* Content */}
				<div className="">
					<div className="text-center">
						<h2 className="uppercase text-neutral-100 text-4xl sm:text-6xl">
							Weekly <span className="gradient-animation">Schedule</span>
						</h2>
						<div className="pt-6">
							<p className="text-neutral-100 text-sm sm:text-xl pb-4">
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
				<p className="text-zero uppercase text-xl font-bold">{title}</p>
				<p className="text-neutral-100 pb-4 sm:text-xl">{description}</p>
			</div>
			<div>
				<p className="text-zero text-xl font-bold uppercase sm:pt-3">
					Timings:
				</p>
				{timings.map((timing) => (
					<div
						key={timing.day}
						className="bg-neutral-100 text-neutral-800 pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-6"
					>
						{timing.day} {timing.time}
					</div>
				))}

				<div className="border-primary border-b-2 mt-10 mb-10 sm:hidden"></div>
			</div>
		</div>
	);
};

function ItsFor() {
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

	return (
		<div className="flex flex-col justify-center items-center md:my-32 my-16 md:gap-20 gap-8 p-4">
			<div className=" max-w-[1000px] text-center">
				<h1 className="uppercase md:text-6xl text-4xl">
					Who's <span className="gradient-animation">It For?</span>
				</h1>
				<p className="md:text-xl text-lg md:mt-6 mt-4">
					Form startup operators and corporate to professionals to B-school
					students and family business owners-ZeroToOne is for anyone who
					aspires to build tech-driven startup soon.
				</p>
			</div>
			<div className="sm:w-10/12 sm:p-16 px-4 sm:m-auto py-8 sm:py-16 bg-neutral-800 rounded-3xl border-2 border-zero grid gap-8 lg:grid-cols-2 grid-cols-1 ">
				{data.map((d, i) => (
					<div
						key={i}
						className=" bg-neutral-100 text-neutral-800 p-10 rounded-2xl flex flex-col lg:gap-10 sm:gap-4 gap-2"
					>
						<h1 className=" md:text-4xl text-3xl font-bold ">{d.title}</h1>
						<p className=" md:text-xl text-lg ">{d.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

function ToLife() {
	return (
		<div className="w-full flex justify-center items-center md:my-32 my-16 text-neutral-900">
			<div className="sm:w-10/12 m-4 sm:p-16 p-4 sm:m-auto py-8 sm:py-16 bg-neutral-800 text-neutral-200 rounded-3xl border-2 border-zero flex flex-col justify-center items-center">
				<div className="flex flex-row md:flex-nowrap flex-wrap-reverse gap-10 justify-between">
					<div className="md:w-1/3 w-full">
						<h1 className="uppercase sm:text-6xl text-4xl text-neutral-400 mb-12">
							Don't wait! It's time to bring your startup dreams <br />
							<span className=" gradient-animation font-bold sm:text-7xl text-5xl">
								to life.
							</span>
						</h1>
						<a
							href="https://rzp.io/l/zero-to-one"
							className="uppercase py-3 px-16 w-full font-bold bg-zero rounded-lg  text-neutral-800"
						>
							Apply Now
						</a>
					</div>
					<img
						src="/zero/cta.svg"
						alt="zero1"
						className="border border-zero rounded-3xl p-4 md:w-1/2 w-full bg-neutral-100"
					/>
				</div>
			</div>
		</div>
	);
}

function SetOf3() {
	return (
		<div className="w-full flex justify-center items-center md:my-32 my-16 text-neutral-900">
			<div className="sm:w-10/12 m-4 sm:p-16 p-4 py-8 sm:py-16 bg-neutral-800 text-neutral-200 rounded-3xl border-2 border-zero flex flex-col justify-center items-center md:gap-28 gap-16">
				<div className="flex flex-col gap-8 justify-center items-start text-center">
					<h1 className="sm:text-6xl text-4xl uppercase">
						WHAT SETS <span className="gradient-animation">Zero-To-One</span>{" "}
						APART?
					</h1>
					<p className="sm:text-xl text-base">
						ZeroToOne is the only program in India to empower aspiring
						entrepreneurs to start their founder's journey.
					</p>
				</div>
				{/* Sec 1 starts */}
				<div className="flex flex-row lg:flex-nowrap flex-wrap-reverse gap-10 justify-evenly w-full">
					<div className="lg:w-1/2 w-full flex flex-col gap-4">
						<h1 className="uppercase sm:text-3xl text-2xl mb-2 font-bold">
							Learn By Doing
							<span className="gradient-animation"></span>
						</h1>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Hands-On Experience
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Industry Project
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Team Mentorship
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Upto 10 Lakhs of Funding Opportunities
						</h2>
					</div>
					<div className="lg:w-1/2 w-full">
						<img
							src="/zero/one.svg"
							alt="zero1"
							className="border w-full h-full border-zero rounded-3xl p-4 bg-neutral-100"
						/>
					</div>
				</div>
				{/* Sec 2 starts */}
				<div className="flex flex-row lg:flex-nowrap flex-wrap gap-10 justify-evenly w-full">
					<div className="lg:w-1/2 w-full">
						<img
							src="/zero/two.svg"
							alt="zero1"
							className="border w-full h-full border-zero rounded-3xl p-4 bg-neutral-100"
						/>
					</div>
					<div className="lg:w-1/2 w-full flex flex-col gap-4">
						<h1 className="uppercase sm:text-3xl text-2xl mb-2 font-bold">
							GET DIRECT ACCESS TO TOP FOUNDERS, OPERATORS & INVESTORS
							<span className="gradient-animation"></span>
						</h1>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Faculty Of India's Top 1%
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Multiple Networking Events
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Grand Convocation & Startup Tour
						</h2>
					</div>
				</div>
				{/* Sec 3 starts */}
				<div className="flex flex-row lg:flex-nowrap flex-wrap-reverse gap-10 justify-evenly w-full">
					<div className="lg:w-1/2 w-full flex flex-col gap-4">
						<h1 className="uppercase sm:text-3xl text-2xl mb-2 font-bold">
							Become part of an exclusive community
							<span className="gradient-animation"></span>
						</h1>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Ambitious Peers & Alumni Group
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Find Your Perfect Co-Founder
						</h2>
						<h2 className="bg-neutral-100 border border-zero text-neutral-800 p-8 rounded-2xl text-lg">
							Unlimited Peer Learning
						</h2>
					</div>
					<div className="lg:w-1/2 w-full">
						<img
							src="/zero/three.svg"
							alt="zero1"
							className="border w-full h-full border-zero rounded-3xl p-4 bg-neutral-100"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function FAQ() {
	return (
		<div className="w-full flex flex-col justify-center items-center md:my-32 my-16 px-8 ">
			<h1 className="text-6xl mb-16">FAQs</h1>
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
		<div className="w-full max-w-screen-lg border-b border-dashed p-4 border-neutral-500 text-neutral-300">
			<div
				className="w-full flex justify-between items-center cursor-pointer"
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
