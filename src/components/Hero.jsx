
"use client";
import { FaChevronDown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import useScrollOnClick from "../utils/useScrollOnClick";
import Photo from "./Photo"; // Import the corrected photo component
import SmallStatCard from "./Stats";

const Hero = () => {
  const { handleScrollClick, isButtonVisible } = useScrollOnClick(100);

  return (
    <section
      id="hero"
      className="relative bg-white dark:bg-gray-900 h-full pt-10 pb-8 xl:py-20"
    >
      <div className="container mx-auto h-full grid grid-cols-1 xl:grid-cols-2 gap-8 items-center px-4 sm:px-8">
        {/* Photo Component */}
        <div>
          <Photo />
        </div>

        {/* Text Content */}
        <div className="text-center xl:text-left">
          <span className="text-lg text-gray-900 dark:text-gray-400">
            Mern Stack Developer
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            I'm <br />
            <span className="text-[#f9b449]">
              Muhammad Kaif Razvi
            </span>
          </h1>
          <p className="max-w-[500px] mt-2 mb-3 text-gray-600 dark:text-gray-300">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and tools.
          
          </p>
          <div className="flex gap-4 xl:mt-6 flex-wrap justify-center xl:justify-start mx-auto xl:mx-0 ">
            <SmallStatCard title="Projects" endValue={4} duration={2.3} />
            <SmallStatCard title="Clients" endValue={0} duration={2.5} />
            <SmallStatCard title="Awards" endValue={3} duration={1.8} />
            <SmallStatCard title="Years" endValue={0} duration={1.5} />
          </div>
          {/* Buttons */}
          <div className="flex flex-col items-center xl:flex-row gap-8 mt-6">
            <button
              className="uppercase flex items-center gap-2 border-2 px-4 py-2 rounded-md 
                         text-[#545454] border-[#545454] 
                         dark:text-[#f9b449] dark:border-[#f9b449] 
                         hover:bg-[#545454] hover:text-white 
                         dark:hover:bg-[#f9b449] dark:hover:text-black transition-colors"
              onClick={() => handleScrollClick("viewCV")}
            >
              <span>DOWNLOAD RESUME</span>
              <FiDownload className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      {isButtonVisible && (
        <div className="absolute right-4 bottom-1/4 flex flex-col items-center">
          <button
            onClick={() => handleScrollClick("learnMoreSection")}
            className="animate-bounce text-[#545454] dark:text-[#f9b449] text-3xl p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-[#545454] hover:text-white transition-colors"
          >
            <FaChevronDown />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;



