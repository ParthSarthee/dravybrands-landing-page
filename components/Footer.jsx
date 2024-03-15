"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
	const router = useRouter();

	return (
		<>
			<div className="flex flex-col justify-center items-center w-full h-[500px] bg-gradient-to-tl footer-gradient text-center gap-8">
				<h1 className="md:text-6xl sm:text-5xl text-4xl font-bold">
					Ready to get started?
				</h1>
				<p className="md:text-2xl text-rose-200">
					Lets build another great brand!
				</p>
				<div>
					<a href="https://tally.so/r/nPpVbV">
						<button className="lg:text-lg font-bold uppercase rounded-full bg-rose-300 md:px-16 px-12 md:py-3 py-2.5 text-black">
							Apply Now
						</button>
					</a>
				</div>
			</div>

			<div className="flex justify-evenly items-start md:flex-row gap-8 md:gap-0 flex-col bg-neutral-900 px-4 py-12 w-full text-gray-200">
				<div className="flex flex-col w-32 md:w-40 mt-4">
					<div>
						<img src="/logoW.svg" alt="Logo" />
					</div>
					<div className="ml-1 mt-2">
						<p>DravyBrands © {new Date().getFullYear()}</p>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h1 className="text-3xl text-neutral-500">Overview</h1>
					<Link href="/">Home</Link>
					<Link href="/zero-to-one">Zero To One</Link>
					<a href="https://tally.so/r/nPpVbV">Dravy Creators</a>
					<a href="">About Us</a>
				</div>

				<div className="flex flex-col gap-4">
					<h1 className="text-3xl text-neutral-500">Resources</h1>
					<a href="https://dravybrands.com/pp.pdf" target="_blank">
						Privacy Policy
					</a>
					<a href="https://dravybrands.com/refund.pdf" target="_blank">
						Refund Policy
					</a>
					<a href="https://dravybrands.com/tc.pdf" target="_blank">
						Terms & Conditions
					</a>
				</div>

				<div className="flex flex-col gap-4">
					<h1 className="text-3xl text-neutral-500">Social</h1>
					<a href="https://instagram.com/dravybrands?" target="_blank">
						<i className="bx bxl-instagram-alt text-3xl"></i>
					</a>
					<a href="https://www.linkedin.com/company/dravy/" target="_blank">
						<i className="bx bxl-linkedin-square text-3xl"></i>
					</a>
				</div>
			</div>
		</>
	);
}
