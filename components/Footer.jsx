"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
	const pathname = usePathname();

	const [web, setWeb] = useState("db"); //db, dc and zero
	const [logo, setLogo] = useState("/logoW.svg");
	const [color, setColor] = useState("primary");
	const [link, setLink] = useState("https://nas.io/db-founders-community");

	useEffect(() => {
		if (pathname.includes("zero-to-one")) {
			setWeb("zero");
		} else if (pathname.includes("school")) {
			setWeb("ds");
		} else if (pathname.includes("creators")) {
			setWeb("dc");
			setLogo("/dc.svg");
			setColor("creators");
			setLink("https://dravycreators.dravybrands.com/");
		} else {
			setWeb("db");
			setLogo("/logoW.svg");
			setColor("primary");
			setLink("https://nas.io/db-founders-community");
		}
	}, [pathname]);

	return (
		<>
			<div
				className={
					"flex flex-col justify-center items-center w-full h-[500px] bg-gradient-to-tl text-center gap-8 footer-gradient-" +
					color
				}
			>
				<h1 className="md:text-6xl sm:text-5xl text-4xl font-bold">
					Ready to get started?
				</h1>
				<p className="md:text-2xl text-neutral-400">
					Lets build another great brand!
				</p>
				<div>
					<a href={link}>
						<button
							className={
								"lg:text-lg font-bold uppercase rounded-full md:px-16 px-12 md:py-3 py-2.5 text-black bg-" +
								color
							}
						>
							Apply Now
						</button>
					</a>
				</div>
			</div>

			<div className="flex justify-evenly items-start md:flex-row gap-8 md:gap-0 flex-col bg-neutral-900 px-4 py-12 w-full text-gray-200">
				<div className="flex flex-col w-32 md:w-40 mt-4">
					<div>
						<img src={logo} alt="Logo" />
					</div>
					<div className="ml-1 mt-2">
						<p>DravyBrands © {new Date().getFullYear()}</p>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h1 className="text-3xl text-neutral-500">Overview</h1>
					<Link href="/">Dravy Brands</Link>
					<Link href="/creators">Dravy Creators</Link>
					<Link href="/zero-to-one">Zero To One</Link>
					<Link href="/school">Dravy School</Link>
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
