"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => setShowNav(!showNav);

	useEffect(() => {
		setShowNav(false);
	}, []); // Empty dependency array to run only on initial render

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="w-full sticky top-0 z-20">
				<div className="w-full bg-neutral-900 text-neutral-50">
					<div className="nav-container flex mx-auto max-w-6xl px-4 justify-between">
						<div className="nav-logo md:mx-8">
							<Link href="/">
								<img className="h-16 p-3" src="/logoW.svg" alt="Main Logo" />
							</Link>
						</div>
						<div className="nav-item-container md:flex items-center hidden">
							<div className="nav-item">
								<Link href="/zero-to-one">Zero to One</Link>
							</div>
							<div className="nav-item">
								<Link href="/zero-to-one">Dravy Creators</Link>
							</div>
							<div className="nav-item">
								<Link href="/school">Dravy School</Link>
							</div>
						</div>
						<div className="nav-button invisible md:visible flex items-center justify-end">
							<a
								href="https://tally.so/r/nPpVbV"
								target="_blank"
								rel="noreferrer"
							>
								<button className="md:text-sm w-34 text-xs py-2.5 px-6 rounded-full uppercase font-semibold hover:bg-rose-400 text-black active:bg-rose-200 bg-rose-300">
									Apply Now
								</button>
							</a>
						</div>
						<div className="md:hidden mr-1 flex items-center justify-center">
							<i className="bx bx-menu text-4xl" onClick={toggleNav}></i>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<dialog
				open={showNav}
				className="fixed top-0 left-0 z-50 w-full p-0 bg-neutral-900 text-white"
			>
				<div className="relative">
					<div className="absolute top-3.5 right-5">
						<i className="bx bx-x text-4xl" onClick={toggleNav}></i>
					</div>
				</div>
				<div className="nav-item-container flex flex-col items-center justify-center h-screen">
					<a href="https://tally.so/r/nPpVbV" target="_blank" rel="noreferrer">
						<button className="py-2.5 px-6 rounded-full uppercase font-semibold text-black hover:bg-rose-300 hover:text-black active:bg-rose-200 bg-white mb-3.5">
							Apply Now
						</button>
					</a>
					<div className="mobile-nav-item">
						<Link href="/zero-to-one">Zero to One</Link>
					</div>
					<div className="mobile-nav-item">
						<Link href="/school">Dravy School</Link>
					</div>
				</div>
			</dialog>
		</>
	);
}
