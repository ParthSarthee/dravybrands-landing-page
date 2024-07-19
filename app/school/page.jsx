import React from "react";
import Footer from "@/components/Footer";
import ZeroPrice from "../zero-to-one/ZeroPrice";
import Link from "next/link";

const SchoolHeroCard = ({ icon, title, description, className }) => {
  return (
    <div className={"py-5 px-3 md:p-10 text-left rounded-lg " + className}>
      <i className={icon + " text-lg md:text-4xl"}></i>
      <h2 className="text-2xl mt-3 mb-3">{title}</h2>
      <p className="md:text-lg font-light">{description}</p>
    </div>
  );
};

const SchoolHero = () => {
  return (
    <div className="w-full school-hero pt-10">
      <div className="container mx-auto p-2 flex flex-col justify-center">
        <div className="min-h-[calc(100vh-200px)] bg-school w-full rounded-xl mb-10 grid lg:grid-cols-2 p-10 xl:min-h-[auto]">
          <div className="flex flex-col lg:pt-40">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl uppercase font-sans font-bold bg-[#2A4858] text-white will-change-transform -rotate-2 p-3 lg:absolute lg:top-[200px] mb-5 lg:mb-0">
              Innovate. Elevate. Succeed.
            </h1>
            <p className="text-2xl lg:text-3xl text-neutral-800 font-semibold lg:leading-9">
              Join the Ultimate 4 Days Startup Bootcamp Experience with
              DravySchool! Dive into the Startup Ecosystem and Unlock Your
              Entrepreneurial Potential.
            </p>

            <a
              href="https://tally.so/r/mO0jE7"
              className="font-medium w-fit p-3 border-neutral-800 text-neutral-800 rounded-lg mt-10 border-2"
            >
              APPLY NOW <i className="fa-solid fa-arrow-right ml-1"></i>
            </a>
            <p className="text-4xl text-neutral-800 mt-10">
              Registration ends on <b>15th August</b>
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="bg-white p-3 rounded-lg h-full flex items-center">
              <img
                src="/school/hero.gif"
                alt="School"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SchoolHeroCard
            className="bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-500 text-neutral-800"
            icon="fa-regular fa-calendar-days"
            title="Date"
            description="22nd August, 25th August, 2024"
          ></SchoolHeroCard>
          <SchoolHeroCard
            className="bg-gradient-to-br to-green-700 via-emerald-400 from-teal-500 text-neutral-800"
            icon="fa-solid fa-user-group"
            title="Inner Circle"
            description="25 Selected Folks"
          ></SchoolHeroCard>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ title, body, className }) => {
  return (
    <div className={className + " p-5 md:py-10 rounded-2xl text-left mb-20"}>
      <div>
        <h1 className="text-4xl font-semibold text-left mb-3">{title}</h1>
        <p className="text-2xl">{body}</p>
      </div>
    </div>
  );
};

function Curriculum() {
  return (
    <div className="w-full flex justify-center items-center md:my-32 my-16 ">
      <div className="sm:w-10/12 m-4 sm:p-16 p-4 sm:m-auto py-8 sm:py-16 bg-neutral-800 rounded-3xl border-2 border-school flex flex-col justify-center items-center">
        <div className=" md:max-w-[1000px] text-center">
          <h1 className="uppercase md:text-6xl text-4xl text-school font-bold">
            Welcome to DravySchool's 4-Day Startup Bootcamp
          </h1>
          <p className="sm:text-xl text-md mt-6">
            Embark on a transformative journey designed for aspiring
            entrepreneurs. Our intensive 4-day bootcamp in Delhi NCR offers a
            unique blend of practical experience, expert mentorship, and
            invaluable networking opportunities.
          </p>
          <a
            href="https://tally.so/r/mO0jE7"
            className="inline-block uppercase py-2.5 px-12 border bg-neutral-200  rounded mt-12 text-neutral-800"
          >
            Apply Now
          </a>
          <a
            href="#"
            className="ml-2 inline-block uppercase py-2.5 px-6 border bg-neutral-200  rounded mt-12 text-neutral-800"
          >
            Download Curriculum
          </a>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ icon, title, body }) {
  return (
    <div className="p-5 md:p-8 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="mb-4 flex justify-center">
        <img
          src={`/school/${icon}`}
          className="w-16 h-16 object-contain transition duration-300 transform hover:rotate-12"
          alt={title}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        {title}
      </h2>
      <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed">
        {body}
      </p>
      <div className="mt-6">
        <Link
          href="#applicationprocess"
          className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

function School() {
  return (
    <>
      <SchoolHero></SchoolHero>
      <div className="container mx-auto p-2">
        <Curriculum></Curriculum>

        {/* What you'll gain */}
        <div className="text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            What you <span className="gradient-animation-green">will gain</span>
          </h2>
          <p className="text-gray-100 text-xl font-light mb-5">
            Join India's first startup school
          </p>

          <div className="mt-10 relative">
            <EventCard
              className="bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 from-33% to-83% sticky top-[100px] text-white"
              title="Be part of India's first Startup School"
              body="Join a pioneering initiative dedicated to nurturing future entrepreneurs from the ground up."
            ></EventCard>
            <EventCard
              className="bg-gradient-to-tr from-sky-400 via-cyan-500 to-blue-600 from-32% to-93% text-white sticky top-[100px] will-change-transform rotate-2"
              title="Gain unparalleled knowledge and experience"
              body="Acquire unique insights and practical skills that are essential for launching and scaling successful startups."
            ></EventCard>
            <EventCard
              className="bg-gradient-to-tr from-lime-300 via-emerald-400 to-teal-500 from-28% to-96% sticky top-[100px] will-change-transform text-black -rotate-2"
              title="Connect with industry leaders and peers"
              body="Network with influential figures and like-minded individuals who can mentor, collaborate, and support your entrepreneurial journey."
            ></EventCard>
            <EventCard
              className="bg-gradient-to-tr from-amber-300 via-orange-400 to-red-500 from-0% to-[108%] sticky top-[100px] will-change-transform text-white rotate-2"
              title="Unlock opportunities for your entrepreneurial journey"
              body="Access pathways to funding, resources, and partnerships that can accelerate the growth of your startup ventures."
            ></EventCard>
          </div>
        </div>

        {/* Exciting highlights */}
        <div className="text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Exciting
            <span className="gradient-animation-green"> Highlights</span>
          </h2>

          <div className="mt-10 relative">
            <EventCard
              className="bg-gradient-to-tr from-[#FFD700] via-[#FFA500] to-[#FF8C00] from-33% to-83% sticky top-[100px] text-black"
              title="Survival Tasks"
              body="Engage in thrilling challenges to earn premium rations versus normal rations."
            ></EventCard>

            <EventCard
              className="bg-gradient-to-tr from-[#4B0082] via-[#8A2BE2] to-[#9370DB] from-32% to-93% text-white sticky top-[100px] will-change-transform rotate-2"
              title="Late-Night Fun Tasks"
              body="Experience surprise late-night activities with twists, featuring influencers and mentors."
            ></EventCard>

            <EventCard
              className="bg-gradient-to-tr from-[#20B2AA] via-[#48D1CC] to-[#AFEEEE] from-28% to-96% sticky top-[100px] will-change-transform text-black -rotate-2"
              title="Interactive Simulation"
              body="Participate in fun and informative activities that provide valuable insights into your entrepreneurial journey."
            ></EventCard>
          </div>
        </div>

        {/* The journey doesn't end here */}
        <div className="py-10 md:py-20">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-5">
            The Journey Doesn't End Here!
          </h1>
          <p className="text-center mb-8">
            The top 8 performers from this bootcamp will be selected for an
            exclusive 20-day bootcamp in Mumbai. They will join the top 8
            performers from our upcoming Bangalore bootcamp, creating a
            powerhouse of talent and innovation.
          </p>

          <div className="grid lg:grid-cols-3 gap-5">
            <TimelineCard
              icon="delhi.png"
              title="Delhi Chapter"
              body="22nd August 2024 to 25th August 2024"
            ></TimelineCard>
            <TimelineCard
              icon="bangalore.png"
              title="Bangalore Chapter"
              body="Dates to be announced"
            ></TimelineCard>
            <TimelineCard
              icon="mumbai.png"
              title="Mumbai Chapter"
              body="The grand finale with top performers from Delhi and Bangalore"
            ></TimelineCard>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-2 text-center py-10">
        <h1 className="mb-5 text-4xl lg:text-5xl font-bold font-sans">
          Our First Cohort Zero to One Launching Soon
        </h1>
        <p className="mb-5 text-base">
          Become a Startup Founder In 8 Weeks Apply now for Early Access
        </p>
        <a
          href="https://tally.so/r/wg4k9K"
          className="w-34 py-3 px-6 rounded-lg uppercase font-semibold text-black bg-school"
        >
          Apply Now
        </a>
      </div>

      <ZeroPrice></ZeroPrice>

      <p className="text-center mt-10 text-2xl">
        For more information, Please Contact us at [
        <a
          href="mailto:contactus@dravybrands.com"
          className="text-blue-500 underline"
        >
          contactus@dravybrands.com
        </a>
        ].
      </p>
      <Footer></Footer>
    </>
  );
}

export default School;
