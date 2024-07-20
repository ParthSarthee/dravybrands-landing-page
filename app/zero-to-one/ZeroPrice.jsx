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

  const pathname = usePathname();
  const [color, setColor] = useState("zero");
  const [bgColor, setBgColor] = useState("bg-rose-200");
  const [title, setTitle] = useState("Zero To One");
  const [sectionTitle, setSectionTitle] = useState("Program Fee");
  const [link, setLink] = useState("https://rzp.io/l/zero-to-one");
  const [fees, setFees] = useState("699");

  useEffect(() => {
    if (pathname.includes("school")) {
      setColor("school");
      setBgColor("bg-green-200");
      setTitle("Dravy School");
      setSectionTitle("Bootcamp Fee");
      setFees("299");
      setLink("https://tally.so/r/mO0jE7");
    }
  }, [pathname]);

  return (
    <div
      className="bg-neutral-900 text-neutral-900 w-full p-5"
      id="applicationprocess"
    >
      <div className="w-full bg-gray-200 rounded-3xl p-2">
        <div className="w-full bg-neutral-100 rounded-3xl h-[40vh] flex flex-col justify-center items-center max-md:h-[45vh] max-sm:h-[35vh]">
          <h1 className="text-4xl text-center leading-tight mb-8 sm:text-5xl md:text-6xl font-bold">
            Application Process
            <span
              className={
                color === "zero"
                  ? "gradient-animation"
                  : "gradient-animation-green"
              }
            >
              <br /> & {sectionTitle}
            </span>
          </h1>
          <p className="w-2/4 text-center max-md:w-4/5 max-sm:text-sm">
            {color === "school"
              ? "Join the Ultimate 4 days Residential Startup Bootcamp Experience with DravySchool!"
              : title + " is designed to help early-stage startup founders."}
          </p>
        </div>
        <div className="flex pt-2 max-lg:flex-col max-lg:h-auto">
          <div
            className="mb-2 xl:w-1/2 bg-neutral-100 mr-1 rounded-3xl flex md:gap-12 gap-4 items-center justify-center px-24 max-md:p-5 py-12"
            id="scrollTarget"
          >
            <div className="w-3 lg:h-[90%] h-[500px] bg-neutral-300 rounded-full">
              <div className={"rounded-full bg-" + color} id="scrollBar"></div>
            </div>
            {/* Application Submission Section */}
            <div className="flex flex-col gap-12 justify-between h-full">
              <div
                id="div1"
                className={
                  "h-[40%] rounded-3xl border py-5 px-10 flex flex-col justify-evenly max-sm:p-5 border-" +
                  color +
                  " " +
                  (div1V ? bgColor : "bg-neutral-100")
                }
              >
                <h1 className="text-2xl font-medium">Submit Application</h1>
                <p className="text-sm">
                  Submit your application by filling out the form and paying the
                  application fee.
                </p>
                <div
                  className={
                    "mt-2 w-full h-[18vh] rounded-lg p-1  max-sm:h-[20vh] max-sm:mt-0 bg-" +
                    color +
                    " " +
                    (color == "zero" ? "text-neutral-50" : "text-inherit")
                  }
                >
                  <div className="flex justify-between items-center h-[40%] px-5 text-sm font-medium max-sm:flex-col max-sm:justify-start max-sm:items-start">
                    <p className="max-sm:py-1 max-sm:text-xs">
                      Application Fee {fees}/-
                    </p>
                    <p className="max-sm:py-1 max-sm:text-xs">
                      (inclusive of taxes)
                    </p>
                  </div>
                  <div
                    className={
                      "h-[60%] rounded-md text-sm flex flex-col justify-evenly px-5 bg-" +
                      color
                    }
                  >
                    <h4 className="font-bold max-sm:text-xs">Note*</h4>
                    <p className="max-sm:text-xs">
                      Application Close on 15th August, 2024
                    </p>
                  </div>
                </div>
              </div>
              {/* Application Review Section */}
              <div
                id="div2"
                className={
                  "h-[20%] rounded-3xl border py-5 px-10 flex flex-col justify-evenly max-sm:p-5 border-" +
                  color +
                  " " +
                  (div2V ? bgColor : "bg-neutral-100")
                }
              >
                <h1 className="text-2xl font-medium">Application Review</h1>
                <p className="text-sm max-sm:text-xs">
                  After a review by the {title} curation team, shortlisted
                  candidates will be invited for an interview call to understand
                  their ambitions and fit for the program.
                </p>
              </div>
              {/* Enrolment Fee Section */}
              <div
                id="div3"
                className={
                  "h-[20%] rounded-3xl border py-5 px-10 flex flex-col justify-evenly max-sm:p-5 border-" +
                  color +
                  " " +
                  (div3V ? bgColor : "bg-neutral-100")
                }
              >
                <h1 className="text-2xl font-medium">Enrolment Fee</h1>
                <p className="text-sm max-sm:text-xs">
                  If you're offered a spot, complete your {title} enrolment by
                  paying the remaining fee of ₹
                  {color === "zero" ? "14,999" : "8,499"} (Including GST).
                </p>
              </div>
            </div>
          </div>
          {/* Apply Now Section */}
          <div className="mb-2 bg-trii w-1/2 ml-1 rounded-3xl flex justify-center items-center max-xl:w-full max-md:px-10 max-sm:px-1 py-12">
            <div
              className={
                "xl:w-[65%] lg:w-[90%] w-[65%] rounded-lg p-2 max-md:w-full " +
                (color === "zero"
                  ? "bg-gradient-to-r from-zero  to-creators"
                  : "bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500")
              }
            >
              <div className="bg-neutral-900 w-full h-full rounded-lg px-12 py-12 max-sm:px-4">
                <div className="flex justify-center items-end">
                  <img src="/assets/Group 1000004082.svg" alt="" />
                </div>
                <div className="h-40 rounded-2xl bg-neutral-800 p-3 flex flex-col justify-evenly items-center text-neutral-100">
                  <a
                    href={link}
                    className={
                      "h-1/2 w-full rounded-xl flex justify-center items-center bg-" +
                      color +
                      " " +
                      (color === "zero"
                        ? "text-neutral-50"
                        : "text-neutral-800")
                    }
                  >
                    APPLY NOW{" "}
                    <span className="font-bold">@ RS. {fees} ONLY</span>
                  </a>
                  <p className="text-center text-xs h-1/2 flex items-center">
                    * Application fee will be non refundable.
                  </p>
                </div>
                <p className="text-neutral-100 text-xs text-center my-5">
                  *EMI Option Available
                </p>
                <div className="h-40 border border-triib2 rounded-xl p-1">
                  <div className="bg-triibb2 rounded-lg h-2/3 px-5">
                    <div className="h-2/5 flex justify-between items-center">
                      <p className="text-triibbt text-xs">
                        Regular Program Fee
                      </p>
                      <p className="text-neutral-100 line-through text-xs">
                        INR {color === "zero" ? "17,999" : "14,999"}
                      </p>
                    </div>
                    <div className="h-3/5 flex py-3 justify-between">
                      <p className="text-triibbt2 text-xs">
                        {color === "zero"
                          ? "Early Bird Cohort Fee"
                          : "4 Days Startup Bootcamp"}
                      </p>
                      <a
                        href="https://rzp.io/l/zero-to-one"
                        className={
                          "text-xs text-neutral-100 px-2 py-1  rounded-full flex justify-center items-center bg-" +
                          color +
                          " " +
                          (color === "zero"
                            ? "text-neutral-50"
                            : "text-neutral-800")
                        }
                      >
                        Save INR {color === "zero" ? "3,000" : "6,500"}
                      </a>
                    </div>
                  </div>
                  <div className="h-1/3 text-neutral-100 flex justify-center mt-1">
                    <p className="text-xs">INR</p>
                    <h1 className="text-3xl px-5">
                      {color === "zero" ? "14,999" : "8,499"}
                    </h1>
                    {/* <p className="text-xs">(Including GST)</p> */}
                  </div>
                </div>
                <div className="box3 w-full h-[27vh] mt-10 rounded-2xl bg-triib3 px-2 pt-4">
                  <div className="flex h-[25%]">
                    <div className="w-[10%]">
                      <i
                        className={
                          "ml-1 fa-solid fa-circle-check " +
                          (color === "school" ? "text-school" : "text-zero")
                        }
                      ></i>
                    </div>
                    <div className="w-[90%]">
                      <p className="text-xs text-neutral-100">
                        Master a structured approach to <span>Starting-up</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex h-[25%]">
                    <div className="w-[10%]">
                      <i
                        className={
                          "ml-1 fa-solid fa-circle-check " +
                          (color === "school" ? "text-school" : "text-zero")
                        }
                      ></i>
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
                      <i
                        className={
                          "ml-1 fa-solid fa-circle-check " +
                          (color === "school" ? "text-school" : "text-zero")
                        }
                      ></i>
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
                      <i
                        className={
                          "ml-1 fa-solid fa-circle-check " +
                          (color === "school" ? "text-school" : "text-zero")
                        }
                      ></i>
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
