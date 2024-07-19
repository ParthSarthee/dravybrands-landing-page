"use client";
import React, { useEffect, useState } from "react";
import useVisibility from "./Visibility";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ZeroPrice = () => {
	const div1V = useVisibility("div1");
	const div2V = useVisibility("div2");
	const div3V = useVisibility("div3");

	// useEffect(() => {}, [div1V, div2V, div3V]);

	useEffect(() => {
		const aboutSection = document.getElementById("scrollTarget");
		const progressBar = document.getElementById("scrollBar");

		window.addEventListener("scroll", () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight;
			const clientHeight = document.documentElement.clientHeight;
			const sectionTop = aboutSection.offsetTop;
			const sectionHeight = aboutSection.offsetHeight;

			// Calculate the percentage of the section scrolled
			const scrollPercentage =
				((scrollTop - sectionTop + clientHeight) / sectionHeight) * 100;

			// Ensure the progress bar width doesn't exceed 100%
			const progressWidth = Math.min(scrollPercentage, 130);
			console.log(progressWidth);
			progressBar.style.height = progressWidth - 30 + "%";

			// Update the progress bar width based on the percentage
			// progressBar.style.height = scrollPercentage * 100 + "%";
			// console.log(scrollPercentage);
		});
	}, []);

	return (
		<div className="w-full p-5 bg-neutral-900 text-neutral-900">
			<div className="w-full p-2 bg-gray-200 rounded-3xl">
				<div className="w-full bg-neutral-100 rounded-3xl h-[40vh] flex flex-col justify-center items-center max-md:h-[45vh] max-sm:h-[35vh]">
					<h1 className="mb-8 text-4xl font-bold leading-tight text-center sm:text-5xl md:text-6xl">
						Application Process
						<span className="gradient-animation">
							<br /> & Program Fee
						</span>
					</h1>
					<p className="w-2/4 text-center max-md:w-4/5 max-sm:text-sm">
						Zero To One is designed to help early-stage startup founders.
					</p>
				</div>
				<div className="flex pt-2 max-lg:flex-col max-lg:h-auto">
					<div
						className="flex items-center justify-center gap-4 px-24 py-12 mb-2 mr-1 xl:w-1/2 bg-neutral-100 rounded-3xl md:gap-12 max-md:p-5"
						id="scrollTarget"
					>
						<div className="w-3 lg:h-[90%] h-[500px] bg-neutral-300 rounded-full">
							<div className="rounded-full  bg-zero" id="scrollBar"></div>
						</div>
						{/* Application Submission Section */}
						<div className="flex flex-col justify-between h-full gap-12">
							<div
								id="div1"
								className={
									"h-[40%] rounded-3xl border border-zero py-5 px-10 flex flex-col justify-evenly max-sm:p-5 " +
									(div1V ? "bg-rose-200" : "bg-neutral-100")
								}
							>
								<h1 className="text-2xl font-medium">Submit Application</h1>
								<p className="text-sm">
									Submit your application by filling out the form and paying the
									application fee.
								</p>
								<div className="mt-2 w-full h-[18vh] bg-zero rounded-lg p-1 text-neutral-100 max-sm:h-[20vh] max-sm:mt-0">
									<div className="flex justify-between items-center h-[40%] px-5 text-sm font-medium max-sm:flex-col max-sm:justify-start max-sm:items-start">
										<p className="max-sm:py-1 max-sm:text-xs">
											Application Fee 699/-
										</p>
										<p className="max-sm:py-1 max-sm:text-xs">
											(inclusive of taxes)
										</p>
									</div>
									<div className="bg-zero h-[60%] rounded-md text-sm flex flex-col justify-evenly px-5">
										<h4 className="font-bold max-sm:text-xs">Note*</h4>
										<p className="max-sm:text-xs">
											Application Close on 24th August, 2024
										</p>
									</div>
								</div>
							</div>
							{/* Application Review Section */}
							<div
								id="div2"
								className={
									"h-[20%] rounded-3xl border border-zero py-5 px-10 flex flex-col justify-evenly max-sm:p-5 " +
									(div2V ? "bg-rose-200" : "bg-neutral-100")
								}
							>
								<h1 className="text-2xl font-medium">Application Review</h1>
								<p className="text-sm max-sm:text-xs">
									After a review by the Zero To One curation team, shortlisted
									candidates will be invited for an interview call to understand
									their ambitions and fit for the program.
								</p>
							</div>
							{/* Enrolment Fee Section */}
							<div
								id="div3"
								className={
									"h-[20%] rounded-3xl border border-zero py-5 px-10 flex flex-col justify-evenly max-sm:p-5 " +
									(div3V ? "bg-rose-200" : "bg-neutral-100")
								}
							>
								<h1 className="text-2xl font-medium">Enrolment Fee</h1>
								<p className="text-sm max-sm:text-xs">
									If you're offered a spot, complete your Zero To One enrolment
									by paying the remaining fee of ₹1,29,999 (Including GST).
								</p>
							</div>
						</div>
					</div>
					{/* Apply Now Section */}
					<div className="flex items-center justify-center w-1/2 py-12 mb-2 ml-1 bg-trii rounded-3xl max-xl:w-full max-md:px-10 max-sm:px-1">
						<div className="bg-gradient-to-r from-zero  to-creators xl:w-[65%] lg:w-[90%] w-[65%] rounded-lg p-2 max-md:w-full">
							<div className="w-full h-full px-12 py-12 rounded-lg bg-neutral-900 max-sm:px-4">
								<div className="flex items-end justify-center">
									<img src="/assets/Group 1000004082.svg" alt="" />
								</div>
								<div className="flex flex-col items-center h-40 p-3 rounded-2xl bg-neutral-800 justify-evenly text-neutral-100">
									<a
										href="https://tally.so/r/nrl4bR"
										className="flex items-center justify-center w-full h-1/2 rounded-xl bg-zero"
									>
										APPLY NOW <span className="font-bold">@ RS. 699 ONLY</span>
									</a>
									<p className="flex items-center text-xs text-center h-1/2">
										Scholarship of RS. 25000 also available for eligible
										candidates based the profile
									</p>
								</div>
								<p className="my-5 text-xs text-center text-neutral-100">
									*EMI Option Available
								</p>
								<div className="h-40 p-1 border border-triib2 rounded-xl">
									<div className="px-5 rounded-lg bg-triibb2 h-2/3">
										<div className="flex items-center justify-between h-2/5">
											<p className="text-xs text-triibbt">
												Regular Program Fee
											</p>
											<p className="text-xs line-through text-neutral-100">
												INR 1,79,999
											</p>
										</div>
										<div className="flex justify-between py-3 h-3/5">
											<p className="text-xs text-triibbt2">
												Early Bird Cohort Fee
											</p>
											<a
												href="https://tally.so/r/nrl4bR"
												className="flex items-center justify-center px-2 py-1 text-xs rounded-full text-neutral-100 bg-zero"
											>
												Save INR 30,000
											</a>
										</div>
									</div>
									<div className="flex justify-center mt-1 h-1/3 text-neutral-100">
										<p className="text-xs">INR</p>
										<h1 className="px-5 text-3xl">1,49,999</h1>
										{/* <p className="text-xs">(Including GST)</p> */}
									</div>
								</div>
								<div className="box3 w-full h-[27vh] mt-10 rounded-2xl bg-triib3 px-2 pt-4">
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.png" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-neutral-100">
												Master a structured approach to <span>Starting-up</span>
											</p>
										</div>
									</div>
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.png" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-neutral-100">
												<span>Get mentored</span> & coached by more than twenty
												founders & investers
											</p>
										</div>
									</div>
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.png" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-neutral-100">
												<span>Join a community</span> of ambitious peers & a
												thriving alumni community
											</p>
										</div>
									</div>
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.png" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-neutral-100">
												Build your personalised growth plan and{" "}
												<span>start your brand today</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ZeroPrice;
