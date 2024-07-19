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
  const [instagram, setInstagram] = useState(
    "https://instagram.com/dravybrands?"
  );

  useEffect(() => {
    if (pathname.includes("zero-to-one")) {
      setWeb("zero");
    } else if (pathname.includes("school")) {
      setWeb("ds");
      setLogo("/school.svg");
      setColor("school");
      setLink("https://tally.so/r/mO0jE7");
      setInstagram(
        "https://www.instagram.com/dravyschool?igsh=dHRweWp1MWJrdHk1&utm_source=website"
      );
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
      <div
        className={
          "px-4 flex flex-col justify-center items-center w-full h-[500px] bg-gradient-to-tl text-center gap-8 footer-gradient-" +
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

      <div className="flex flex-col items-center p-2">
        <p className={"w-full text-center md:text-2xl text-" + color}>
          Officially Recognised By The Startup India
        </p>
        <img src="/startup.png" className="max-w-[300px] " />
      </div>

      <div className="flex justify-evenly items-start md:flex-row gap-8 md:gap-0 flex-col bg-neutral-900 px-8 py-12 w-full text-gray-200">
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
          <Link href="/creators.html">Dravy Creators</Link>
          {/* <Link href="/zero-to-one.html">Zero To One</Link> */}
          <Link href="/school.html">Dravy School</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-neutral-500">Resources</h1>
          <a href="/pp.pdf" target="_blank">
            Privacy Policy
          </a>
          <a href="/refund.pdf" target="_blank">
            Refund Policy
          </a>
          <a href="/tc.pdf" target="_blank">
            Terms & Conditions
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-neutral-500">Social</h1>
          <a href={instagram} target="_blank">
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
