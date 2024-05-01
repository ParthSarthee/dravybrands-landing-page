import React from "react";
// import "./output.css"; // Import your CSS file here

const ZeroPrice = () => {
	return (
		<div className="bg-black w-full h-screen p-5">
			<div className="w-full h-auto bg-gray-200 rounded-3xl p-2">
				<div className="w-full bg-white rounded-3xl h-[40vh] flex flex-col justify-center items-center max-md:h-[45vh] max-sm:h-[35vh]">
					<h1 className="text-4xl font-semibold text-center leading-tight mb-8 sm:text-5xl md:text-6xl">
						Application Process
						<span className="text-oran">
							<br /> & Program Fee
						</span>
					</h1>
					<p className="w-2/4 text-center max-md:w-4/5 max-sm:text-sm">
						D2CX is designed to help early-stage D2C startup founders, with at
						least INR 5L/m in online revenue, scale up their D2C brand.
					</p>
				</div>
				<div className="flex pt-2 h-[135vh] max-xl:flex-col max-xl:h-auto">
					<div className="mb-2 w-1/2 bg-white mr-1 rounded-3xl flex flex-col justify-evenly px-24 max-xl:w-full max-xl:h-[100vh] max-md:p-5 max-sm:">
						{/* Application Submission Section */}
						<div className="bg-flee h-[40%] rounded-3xl border border-fleeb py-5 px-10 flex flex-col justify-evenly max-sm:p-5">
							<h1 className="text-2xl font-medium">Submit Application</h1>
							<p className="text-sm">
								The application fee for the D2CX program is ₹999 and which will
								be fully refundable in the event that your application is not
								selected.
							</p>
							<div className="mt-2 w-full h-[18vh] bg-fleebox1 rounded-lg p-1 text-white max-sm:h-[20vh] max-sm:mt-0">
								<div className="flex justify-between items-center h-[40%] px-5 text-sm font-medium max-sm:flex-col max-sm:justify-start max-sm:items-start">
									<p className="max-sm:py-1 max-sm:text-xs">
										Application Fee ₹999/-
									</p>
									<p className="max-sm:py-1 max-sm:text-xs">
										(inclusive of taxes)
									</p>
								</div>
								<div className="bg-fleebox h-[60%] rounded-md text-sm flex flex-col justify-evenly px-5">
									<h4 className="font-bold max-sm:text-xs">Note*</h4>
									<p className="max-sm:text-xs">
										Application fee is fully refundable if you’re not selected
										for the Program.
									</p>
								</div>
							</div>
						</div>
						{/* Application Review Section */}
						<div className="bg-flee h-[20%] rounded-3xl border border-fleeb py-5 px-10 flex flex-col justify-evenly max-sm:p-5">
							<h1 className="text-2xl font-medium">Application Review</h1>
							<p className="text-sm max-sm:text-xs">
								After a review by the D2CX curation team, shortlisted candidates
								will be invited for an interview call to understand their
								ambitions and fit for the program.
							</p>
						</div>
						{/* Enrolment Fee Section */}
						<div className="bg-flee h-[20%] rounded-3xl border border-fleeb py-5 px-10 flex flex-col justify-evenly max-sm:p-5">
							<h1 className="text-2xl font-medium">Enrolment Fee</h1>
							<p className="text-sm max-sm:text-xs">
								If you are selected, you will have to pay the remaining fee of ₹
								1,24,999 (+18% GST) to secure a spot in the D2CX cohort.
							</p>
						</div>
					</div>
					{/* Apply Now Section */}
					<div className="mb-2 bg-trii w-1/2 ml-1 rounded-3xl flex justify-center items-center max-xl:w-full max-xl:h-[130vh] max-md:px-10 max-sm:px-1">
						<div className="bg-gradient-to-r from-triib via-triib1 to-triib1g w-[65%] h-[90%] rounded-lg p-2 max-md:w-full">
							<div className="bg-black w-full h-full rounded-lg px-12 max-sm:px-4">
								<div className="flex justify-center h-40 items-end">
									<img src="/assets/Group 1000004082.svg" alt="" />
								</div>
								<div className="h-40 rounded-2xl bg-triibb p-3 flex flex-col justify-evenly items-center text-white">
									<button className="h-1/2 w-full rounded-xl bg-triibbtn">
										<a href="#" className="text-sm">
											APPLY NOW{" "}
											<span className="font-bold">@ RS. 999 ONLY</span>
										</a>
									</button>
									<p className="text-center text-xs h-1/2 flex items-center">
										* Application fee is fully refundable if you’re not selected
										for the Program.
									</p>
								</div>
								<p className="text-white text-xs text-center my-5">
									*EMI Option Available
								</p>
								<div className="h-40 border border-triib2 rounded-xl p-1">
									<div className="bg-triibb2 rounded-lg h-2/3 px-5">
										<div className="h-2/5 flex justify-between items-center">
											<p className="text-triibbt text-xs">
												Regular Program Fee
											</p>
											<p className="text-white line-through text-xs">
												INR 1,49,999
											</p>
										</div>
										<div className="h-3/5 flex py-3 justify-between">
											<p className="text-triibbt2 text-xs">
												Early Bird Cohort Fee
											</p>
											<a
												href="#"
												className="text-xs text-white px-2 py-1 bg-triibbtn rounded-full flex justify-center items-center"
											>
												Save INR 25,000
											</a>
										</div>
									</div>
									<div className="h-1/3 text-white flex justify-center mt-1">
										<p className="text-xs">INR</p>
										<h1 className="text-3xl px-5">1,24,999</h1>
										<p className="text-xs">+GST</p>
									</div>
								</div>
								<div className="box3 w-full h-[27vh] mt-10 rounded-2xl bg-triib3 px-2 pt-4">
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.webp" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-white">
												Master a structured approach to scaling your D2C brand
												across<span>30+ knowledge sessions</span>
											</p>
										</div>
									</div>
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.webp" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-white">
												<span>Get mentored</span> & coached by India’s top 1% Of
												D2C founders.
											</p>
										</div>
									</div>
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.webp" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-white">
												<span>Join a community</span> of ambitious peers & a
												thriving alumni community
											</p>
										</div>
									</div>
									<div className="flex h-[25%]">
										<div className="w-[10%]">
											<img src="/assets/icn-circle.webp" alt="" />
										</div>
										<div className="w-[90%]">
											<p className="text-xs text-white">
												Build your personalised growth plan and Master{" "}
												<span>10x growth for your D2C brand</span>
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
