import React from "react";

function page() {
	return (
		<>
			<section className="mb-20">
				<div className="text-center pt-20 sm:text-left sm:ml-28 sm:mt-10">
					{/*main*/}

					<div className="sm:flex sm:justify-between">
						{/*flex*/}

						<div>
							{/*content*/}
							<h1 className="header">BECOME A</h1>
							<h1 className="header">STARTUP FOUNDER</h1>

							<div className="w-fit ml-40 mt-2 mb-6 sm:ml-0">
								<p className="text-primary text-5xl sm:text-7xl font-bold border-t border-b border-primary">
									IN 12 WEEKS
								</p>
							</div>

							<div className="bg-white bg-opacity-15 border border-primary w-fit sm:h-fit rounded-lg ml-48 sm:ml-0">
								{/*bar*/}

								<div className="p-3 sm:flex sm:justify-between">
									<div className="flex justify-center sm:pr-4">
										<img
											src="/src/images/Isolation_Mode-2.png"
											alt="i2"
											className="w-4"
										/>
										<p className="text-white text-xs font-semibold pl-2">
											APPLICATION CLOSED
										</p>
									</div>

									<div className="flex">
										<img
											src="/src/images/Isolation_Mode-1.png"
											alt="i1"
											className="w-4"
										/>
										<p className="text-white text-xs font-semibold pl-2 pt-2 sm:pt-0">
											PROGRAM STARTS: 24TH FEB 2024
										</p>
									</div>
								</div>
							</div>

							<div className="hidden sm:flex sm:my-8">
								<div className="bg-white sm:rounded-lg sm:mr-5">
									<button className="sm:butn-h sm:px-20 sm:py-4 sm:font-semibold sm:text-sm">
										JOIN WISHLIST
									</button>
								</div>
								<div className="sm:border sm:border-primary sm:rounded-lg">
									<button className="text-primary sm:px-5 sm:py-4 font-semibold sm:text-sm">
										DOWNLOAD CURRICULUM
									</button>
								</div>
							</div>
						</div>

						<div className="text-center mt-7 ml-28 mr-28">
							{/*image*/}
							<img
								src="/src/images/banner-img.svg"
								alt="banner"
								className="w-full sm:w-fit h-full sm:h-fit"
							/>
						</div>
					</div>
				</div>
			</section>

			{/*SECTION-2*/}

			<section>
				<div className="bg-white h-fit w-fit ml-10 mr-10 mb-24 rounded-3xl border-2 border-primary sm:h-fit sm:m-auto">
					{/*heading*/}
					<div>
						<h3 className="text-4xl uppercase text-center pt-9 pb-5 font-semibold sm:text-6xl sm:pt-16 sm:pb-8">
							about <span className="text-primary">founderx</span>
						</h3>
						<p className="text-center pl-2 pr-2 sm:text-2xl">
							The worlds need creativity and ingenuity. Don't put your dreams on
							hold.
						</p>
						<p className="text-center sm:text-2xl sm:pb-8">
							Start your founder's journey today!
						</p>
					</div>

					<div className="sm:flex sm:justify-between sm:mb-14">
						{/*image*/}
						<div className="bg-neutral-900 h-96 m-5 rounded-3xl sm:ml-20 sm:w-fit sm:h-96">
							<img
								src="/src/images/banner-img.svg"
								alt="banner"
								className="w-fit h-96 m-auto sm:ml-24 sm:mr-24 sm:h-96"
							/>
						</div>

						{/*about*/}
						<div className="bg-yellow-100 h-fit m-5 border-2 border-primary rounded-3xl sm:mr-20 sm:w-96 sm:h-96">
							<ul className="m-3 p-4 list-disc sm:text-lg sm:pl-5 sm:pr-0 sm:pb-3">
								<li className="li">
									Master a <b>structured approach</b> to building a tech venture
								</li>
								<li className="li">
									<b>Get coached by</b> India's top 1% founders, operators and
									investors
								</li>
								<li className="li">
									<b>Learn by doing</b>-Work on actual startup ideas in a
									real-world startup team simulation
								</li>
								<li className="li">
									<b>Expand your network</b> in the community of like-minded
									peers
								</li>
								<li className="li">
									<b>Find your co-founder</b> & your core team among the fellows
									and alumni.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/*SECTION-3*/}

			<section>
				<div className="w-fit h-fit mr-20 ml-20 sm:mt-24 sm:ml-14 sm:mr-14">
					<div className="text-center sm:text-center">
						<h3 className="uppercase text-white text-4xl font-semibold mb-7 sm:text-6xl">
							cohort 2 speakers &{" "}
							<span className="text-yellow-200">mentors</span>
						</h3>
						<p className="text-white text-sm mb-10 sm:text-xl">
							Learn from real-world, case-based examples brought to life by
							unicorn founders, serial entrepreneurs and top VCs.
						</p>
					</div>

					<div className="flex flex-wrap justify-center items-center gap-4">
						<PeopleCard />
						<PeopleCard />
						<PeopleCard />
						<PeopleCard />
						<PeopleCard />
						<PeopleCard />
						<PeopleCard />
						<PeopleCard />
					</div>
				</div>
			</section>

			{/*SECTION-4*/}

			<section className="mt-20 mb-20 sm:mr-9 sm:ml-5">
				<div className="bg-white bg-opacity-15 w-fit h-fit mr-12 ml-12 border-2 border-primary rounded-3xl">
					{/*content*/}
					<div className="text-center pb-14 sm:pt-5">
						<p className="text-white uppercase text-4xl font-semibold pt-12 pb-6 pl-5 pr-5 sm:text-6xl sm:pr-28 sm:pl-28">
							what sets <span className="text-primary">founderx apart?</span>
						</p>
						<p className="text-white text-sm pl-4 pr-4 sm:text-xl">
							FounderX is the only program in India to empower aspiring
							entrepreneurs to start their founder's journey.
						</p>
					</div>

					<div className="sm:flex sm:justify-between">
						<div className="text-center pb-7">
							<div className="sm:ml-16 sm:pt-7">
								<p className="uppercase text-white font-semibold text-xl sm:text-3xl">
									learn by doing
								</p>
							</div>
						</div>

						<div className="hidden sm:block">
							<img
								src="/src/images/structured_curicullam.svg"
								alt="structured"
								className="sm:w-9/12 sm:h-min"
							/>
						</div>
					</div>
				</div>
			</section>

			{/*SECTION-5*/}

			<section>
				<div className="bg-white bg-opacity-15 pt-10 pb-10 sm:pt-16">
					{/*content*/}
					{/* <div> */}
					<div className="text-center">
						<h2 className="uppercase text-white text-4xl font-semibold sm:text-6xl">
							weekly <span className="text-primary">Schedule</span>
						</h2>
						<div className="pt-6 pl-44 pr-44 sm:pl-80 sm:pr-80">
							<p className="text-white text-sm sm:text-xl">
								These are weekly recurring sessions and learning activities
								scheduled throughtout the duration of this course.
							</p>
						</div>
					</div>
				</div>

				{/*Schedule*/}
				<div className="ml-14 mt-16 mr-14 sm:flex sm:justify-between sm:ml-20 sm:mr-20 sm:mt-24">
					{/*1*/}
					<div className="sm:w-96 sm:border-primary sm:border-r sm:mr-6 sm:pr-6">
						<div className="sm:border-b sm:border-primary sm:border-dashed">
							<p className="text-primary uppercase text-xl font-semibold pb-3 sm:font-bold">
								core sessions
							</p>
							<p className="text-white pb-4 sm:text-xl">
								Live, Hands-On, Interactive Sessions & Workshops
							</p>
						</div>
						<div>
							<p className="text-primary text-xl font-semibold uppercase sm:pt-3">
								Timings:
							</p>
							<div className="bg-white pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-6">
								Sat, 11:00 AM - 2:00 PM (IST)
							</div>
							<div className="bg-white pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-3">
								Sun, 11:00 AM - 1:00 PM (IST)
							</div>
						</div>
						<div className="border-primary border-b-2 mt-10 mb-10 sm:hidden"></div>
					</div>

					{/*TWO*/}
					<div className="sm:w-96">
						<div className="sm:border-b sm:border-primary sm:border-dashed">
							<p className="text-primary uppercase text-xl font-semibold pb-3 sm:font-bold">
								team huddles & mentorship
							</p>
							<p className="text-white pb-4 sm:text-xl">
								Team Huddles & The Group Mentorship Will Be Held On Weekdays
							</p>
						</div>
						<div>
							<p className="text-primary text-xl font-semibold uppercase sm:pt-3">
								Timings:
							</p>
							<div className="bg-white pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-6">
								Wed, 8:00 PM - 9:30 PM (IST)
							</div>
							<div className="bg-white pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-3">
								Tues/Wed/Thu/Fri, 7:30 AM - 9:00 PM (IST)
							</div>
							<div className="border-primary border-b-2 mt-10 mb-10 sm:hidden"></div>
						</div>
					</div>

					{/*three*/}
					<div className="sm:w-96 sm:border-primary sm:border-l sm:ml-6 sm:pl-6">
						<div className="sm:border-b sm:border-primary sm:border-dashed">
							<p className="text-primary uppercase text-xl font-semibold pb-3 sm:font-bold">
								in-persons sessions
							</p>
							<p className="text-white pb-4 sm:text-xl">
								The Opening Orientation, Startup Tours and Convocation
							</p>
						</div>
						<div>
							<p className="text-primary text-xl font-semibold uppercase sm:pt-3">
								Timings:
							</p>
							<div className="bg-white pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-6">
								Fri, 10:00 AM - 8:00 PM (IST)
							</div>
							<div className="bg-white pt-3 pb-3 pl-9 sm:pl-4 rounded-lg mt-3">
								Sat, 5:00 PM Onwards (IST)
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*SECTION 6*/}

			<section className="mt-10">
				<div className="bg-white bg-opacity-15 pt-10 pb-16 sm:pt-16">
					<div className="">
						{/*content*/}
						<div className="mr-14 ml-14 sm:mr-20 sm:ml-20">
							<div className="text-center">
								<h2 className="uppercase text-white text-3xl font-semibold sm:text-6xl">
									who's <span className="text-primary">it for?</span>
								</h2>
								<p className="text-white text-sm pt-6 sm:text-xl">
									Form startup operators and corporate to professionals to
									B-school students and family business owners-Founderx is for
									anyone who aspires to build tech-driven venture soon.
								</p>
							</div>
						</div>

						{/*card*/}

						<div className="sm:bg-white sm:bg-opacity-10 sm:ml-20 sm:mr-20 sm:mt-28 sm:rounded-3xl sm:border sm:border-primary">
							<div className="mt-16 ml-14 mr-9 sm:mt-2 sm:pt-14 sm:pb-14 sm:pr-8">
								<div className="grid grid-cols-2">
									{/*card 1*/}
									<div className="bg-white w-60 h-44 rounded-2xl mb-7 sm:w-fit sm:h-fit sm:rounded-3xl sm:mb-12 sm:mr-6">
										{/*background*/}
										<div className="p-4 sm:p-14">
											{/*main*/}

											<div className="flex justify-between">
												{/*flex*/}
												<div>
													<p className="font-semibold sm:text-4xl sm:font-bold">
														Startup Operators
													</p>
												</div>
												<div>
													<img
														src="/src/images/Group-4312.svg"
														alt="g"
														className="w-8 h-8 sm:w-24 sm:h-24 pt-1"
													/>
												</div>
											</div>

											{/*content*/}
											<div className="pt-6">
												<p className="text-xs sm:text-2xl">
													Who want to start thinking & executing like a startup
													founder
												</p>
											</div>
										</div>
									</div>

									{/*card 2*/}
									<div className="bg-white w-60 h-44 rounded-2xl sm:w-fit sm:h-fit sm:rounded-3xl sm:ml-6">
										{/*background*/}
										<div className="p-4 sm:p-14">
											{/*main*/}

											<div className="flex justify-between">
												{/*flex*/}
												<div>
													<p className="font-semibold sm:text-4xl sm:font-bold">
														Corporate Professional
													</p>
												</div>
												<div>
													<img
														src="/src/images/Group-4315.svg"
														alt="g"
														className="w-8 h-8 sm:w-24 sm:h-24 pt-1"
													/>
												</div>
											</div>

											{/*content*/}
											<div className="pt-6">
												<p className="text-xs sm:text-2xl">
													Seeking exposure to early stage methods before taking
													the plunge
												</p>
											</div>
										</div>
									</div>

									{/*card 3*/}
									<div className="bg-white w-60 h-44 rounded-2xl sm:w-fit sm:h-fit sm:rounded-3xl sm:mr-6">
										{/*background*/}
										<div className="p-4 sm:p-14">
											{/*main*/}

											<div className="flex justify-between">
												{/*flex*/}
												<div>
													<p className="font-semibold sm:text-4xl sm:font-bold">
														Solopreneurs
													</p>
												</div>
												<div>
													<img
														src="/src/images/Group-4314.svg"
														alt="g"
														className="w-8 h-8 sm:w-24 sm:h-24 pt-1"
													/>
												</div>
											</div>

											{/*content*/}
											<div className="pt-6">
												<p className="text-xs sm:text-2xl">
													Wanting to transform their freelance practice into a
													startup
												</p>
											</div>
										</div>
									</div>

									{/*card 4*/}
									<div className="bg-white w-60 h-44 rounded-2xl sm:w-fit sm:h-fit sm:rounded-3xl sm:ml-6">
										{/*background*/}
										<div className="p-4 sm:p-14">
											{/*main*/}

											<div className="flex justify-between">
												{/*flex*/}
												<div>
													<p className="font-semibold sm:text-4xl sm:font-bold">
														Second-Chance Entrepreneurs
													</p>
												</div>
												<div>
													<img
														src="/src/images/Group-4348.svg"
														alt="g"
														className="w-8 h-8 sm:w-24 sm:h-24 pt-1"
													/>
												</div>
											</div>

											{/*content*/}
											<div className="pt-6">
												<p className="text-xs sm:text-2xl">
													Who are starting over and want to become a methodical
													founder
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*button*/}

			<div className="sm:mt-10 sm:flex sm:justify-center">
				<div className="hidden sm:block sm:bg-primary sm:w-fit sm:border sm:rounded-lg">
					<button className="sm:text-sm sm:font-semibold sm:px-14 sm:py-3">
						JOIN WAITLIST
					</button>
				</div>
			</div>

			{/*SECTION 7*/}

			<section className="mt-10 mb-10">
				<div className="bg-white bg-opacity-15 mr-10 ml-10 rounded-xl border border-primary sm:mr-20 sm:ml-20">
					<div>
						{/*main*/}
						<div className="text-center pt-8 pb-12 sm:pt-16">
							{/*content*/}
							<h2 className="text-primary font-semibold text-3xl sm:text-6xl">
								HOW IS THE 12 WEEK JOURNEY
							</h2>
							<h2 className="text-white text-3xl font-semibold pt-2 sm:text-6xl">
								STRUCTURED?
							</h2>
							<p className="text-white text-sm pr-40 pl-40 pt-3 sm:text-xl sm:pr-96 sm:pl-96 sm:pt-4">
								Each week is crafted to dig deep into a lever of becoming a
								Founder.
							</p>
						</div>

						<div className="bg-white mr-7 ml-7 flex justify-center mb-10 rounded-lg border-2 border-primary sm:ml-96 sm:mr-96">
							<button className="flex pt-3 pb-3">
								<div>
									<img
										src="/src/images/download-icon.svg"
										alt="icon"
										className="h-4 w-4 mt-1"
									/>
								</div>
								<div className="pl-3 font-semibold">
									DOWNLOAD FULL CURRICULUM
								</div>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function PeopleCard() {
	return (
		<div>
			<div className="img-div">
				<img
					src="/src/images/Web_Speaker_Aakrit-Vaish.png"
					alt="img"
					className="s2-img"
				/>
			</div>
			<p className="text-white font-semibold">Aakrit Vaish</p>
			<p className="text-primary">Haptik</p>
		</div>
	);
}

export default page;
