"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "../components/Tooltip";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import React from "react";
import { ScrollArea } from "../components/ScrollArea";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in building websites using HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, Bootstrap, Framer, and Next.js. I am also familiar with Figma and have experience in creating wireframes and mockups. I am currently learning the MERN stack to expand my skillset.",
  info: [
    { fieldName: "Name", fieldValue: "Muhammad Kaif Razvi" },
    // { fieldName: "Phone", fieldValue: "" },
    { fieldName: "Experience", fieldValue: "<1 year" },
    // { fieldName: "Skype", fieldValue: "kaif,098" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "muhammadkaifrazawi@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

const experience = {
  icon: "/assets/experience.svg",
  title: "My Experience",
  description:
    "I am a fresher MERN stack developer with experience in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. I am skilled in building responsive interfaces using Tailwind CSS and Bootstrap and have experience with Framer and Figma for UI design. I’m eager to apply my skills in real-world projects and continue learning.",
  items: [
    {
      company: "Company Name",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Company Name",
      position: "Backend Developer",
      duration: "2024 - Present",
    },
    {
      company: "Company Name",
      position: "Frontend Developer",
      duration: "2024 - Present",
    },
    {
      company: "Company Name",
      position: "Backend Developer",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/assets/education.svg",
  title: "My Education",
  description:
    "I completed my 12th grade in Mathematics (Intermediate) from Sri Gitanjali Junior College in Hyderabad, India. Currently, I am expanding my skills by learning the MERN stack through YouTube tutorials.",
  items: [
    {
      degree: "12th Grade (Mathematics)",
      institution: "Gitanjali Junior College",
      duration: "2022 - 2024",
    },
    {
      degree: "Full Stack Development Course",
      institution: "YouTube tutorials",
      duration: "2024 - 2025",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a solid foundation in front-end technologies including HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap, which I use to build responsive and user-friendly websites. On the back-end, I have hands-on experience with Node.js, Express.js, and MongoDB as part of the MERN stack. I am also proficient in designing intuitive user interfaces using Framer and Figma. Additionally, I am familiar with version control using Git and have knowledge of deploying applications on platforms like GitHub, Heroku, and Netlify.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center pt-12 pb-12  xl:px-0 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="flex flex-col w-full h-full mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className=" hover:scale-105 transition-transform duration-300"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className=" hover:scale-105 transition-transform duration-300"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className=" hover:scale-105 transition-transform duration-300"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className=" hover:scale-105 transition-transform duration-300"
            >
              About Me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] max-h-full w-full">
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold text-[#f9b449]">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#545454] dark:bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                      >
                        <span className="text-[#f9b449]">{item.duration}</span>
                        <h3 className="text-xl max-w-[250px] min-h-[60px] text-center lg:text-left text-white">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#f9b449]"></span>
                          <p className="text-white ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-[30px] text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold text-[#ffb15e]">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#545454] dark:bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                      >
                        <span className="text-[#f9b449] ">{item.duration}</span>
                        <h3 className="text-xl max-w-[250px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#f9b449]"></span>
                          <p className="text-white">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-[30px] text-center xl:text-left mb-10 "
              >
                <h3 className="text-4xl font-bold text-[#f9b449]">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 mx-auto  xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full my-2 h-full  bg-[#545454] dark:bg-gray-800 rounded-xl flex justify-center items-center group hover:scale-110 transition-transform duration-300">
                            <div className="text-6xl text-[#f9b449] transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center h-full mb-20 xl:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-[30px] "
              >
                <h3 className="text-4xl font-bold text-[#f9b449]">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4  "
                    >
                      <span className="text-gray-950 dark:text-gray-50">
                        {item.fieldName}
                      </span>
                      <span className="text-black dark:text-white font-bold">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
