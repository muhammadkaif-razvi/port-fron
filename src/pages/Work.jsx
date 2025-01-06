"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderButtons from "../components/WorkSliderButtons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../components/Tooltip";
import { Link } from "react-router-dom";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Project 1",
    description:
      "This portfolio is a responsive web application designed to showcase my skills and projects. It includes an interactive contact form that allows users to easily send messages. A light and dark mode toggle provides a personalized experience by letting users switch between themes seamlessly. Additionally, subtle sound effects enhance user interaction, making the interface more engaging and dynamic. This project demonstrates my ability to combine functionality and design, using modern web development technologies to create an intuitive and user-friendly experience.",
    Stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongeDB" },
    ],
    Image: "./assets/my-portfolio-site.png",
    links: {
      github: "https://github.com",
      live: "https://google.com",
    },
  },
  {
    num: "02",
    category: "Web Development",
    title: "Project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    Image: "./assets/todo.jpeg",
    links: {
      github: "https://github.com",
      live: "https://google.com",
    },
  },
  {
    num: "03",
    category: "frontend Development",
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    Image: "./assets/todo.jpeg",
    links: {
      github: "https://github.com",
      live: "https://google.com",
    },
  },
];

const Work = () => {
  const [Project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-5"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] pl-4">
              {/*  num  */}
              <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-[#f9b449] to-[#545454] ">
                {Project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none  group-hover:text-accent transition-all duration-500 capitalize">
                {Project.category} project
              </h2>{" "}
              {/*project description  */}
              <p className="text-gray-600 dark:text-gray-400">
                {Project.description}
              </p>
              {/*  stack*/}
              <ul className="flex gap-4">
                {Project.Stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[#f9b449] ">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== Project.Stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-black dark:border-gray-400"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project btn*/}
                <Link to={Project.links.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px]  flex items-center justify-center bg-[#f9b449] group rounded-full">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#545454] " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github btn */}
                <Link to={Project.links.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px]  flex items-center justify-center bg-[#f9b449] group rounded-full">
                        <BsGithub className="text-white text-3xl group-hover:text-[#545454] " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="xl:h-[560px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center dark:bg-gray-900 bg-white border border-black">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full  z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <img
                        src={project.Image}
                        alt=""
                        className="w-full h-full object-contain" // Corrected Tailwind CSS classes
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons
                iconStyles=""
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#f9b449] hover:bg-[#f9b449]-hover text-primary text-[22px w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
