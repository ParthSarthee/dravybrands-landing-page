"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Zero To One => https://tally.so/r/nrl4bR

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => setShowNav(!showNav);

	useEffect(() => setShowNav(false), []);

	const pathname = usePathname();
	const [web, setWeb] = useState("db"); //db, dc and zero
	const [logo, setLogo] = useState("/logoW.svg");
	const [color, setColor] = useState("primary");
	const [link, setLink] = useState("https://nas.io/db-founders-community");

	useEffect(() => {
		setShowNav(false);
		if (pathname.includes("zero-to-one")) {
			setWeb("zero");
			setLink("https://tally.so/r/nrl4bR");
		} else if (pathname.includes("school")) {
			setWeb("ds");
		} else if (pathname.includes("creators")) {
			setWeb("dc");
			setLogo("/dc.svg");
			setColor("creators");
			setLink("https://tally.so/r/wa69v9");
		} else {
			setWeb("db");
			setLogo("/logoW.svg");
			setColor("primary");
			setLink("https://nas.io/db-founders-community");
		}
	}, [pathname]);

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="sticky top-0 z-20 w-full">
				<div className="w-full bg-neutral-900 text-neutral-50">
					<div className="flex justify-between max-w-6xl px-4 mx-auto nav-container">
						<div className="nav-logo md:mx-8">
							<Link href="/">
								<img className="h-16 p-3" src={logo} alt="Main Logo" />
							</Link>
						</div>
						<div className="items-center hidden nav-item-container md:flex">
							<div className="nav-item">
								<Link href="/">Dravy Brands</Link>
							</div>

							<div className="nav-item">
								<Link href="/creators.html">Dravy Creators</Link>
							</div>

							{/* {web != "zero" && (
                <div className="nav-item">
                  <Link href="/zero-to-one.html">Zero to One</Link>
                </div>
              )} */}

							<div className="nav-item">
								<Link href="/school.html">Dravy School</Link>
							</div>
						</div>
						<div className="flex items-center justify-end invisible nav-button md:visible bg-">
							<a href={link} target="_blank" rel="noreferrer">
								<button
									className={
										"md:text-sm w-34 text-xs py-2.5 px-6 rounded-full uppercase font-semibold text-black bg-" +
										color
									}
								>
									Apply Now
								</button>
							</a>
						</div>
						<div className="flex items-center justify-center mr-1 md:hidden">
							<i className="text-4xl bx bx-menu" onClick={toggleNav}></i>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<dialog
				open={showNav}
				className="fixed top-0 left-0 z-50 w-full p-0 text-white bg-neutral-900"
			>
				<div className="relative">
					<div className="absolute top-3.5 right-5">
						<i className="text-4xl bx bx-x" onClick={toggleNav}></i>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center h-screen nav-item-container">
					<a href={link} target="_blank" rel="noreferrer">
						<button className="py-2.5 px-6 rounded-full uppercase font-semibold text-black hover:bg-rose-300 hover:text-black active:bg-rose-200 bg-white mb-3.5">
							Apply Now
						</button>
					</a>
					<div className="mobile-nav-item">
						<Link href="/">Dravy Brands</Link>
					</div>
					<div className="mobile-nav-item">
						<Link href="/creators.html">Dravy Creators</Link>
					</div>
					{/* <div className="mobile-nav-item">
            <Link href="/zero-to-one.html">Zero to One</Link>
          </div> */}
					<div className="mobile-nav-item">
						<Link href="/school.html">Dravy School</Link>
					</div>
				</div>
			</dialog>
		</>
	);
}
