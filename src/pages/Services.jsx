"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
  // Array of services
  const services = [
    {
      number: 1,
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      link: "https://example.com/web-development",
    },
    {
      number: 2,
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      link: "https://example.com/web-development",
    },    {
      number: 3,
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      link: "https://example.com/web-development",
    },    {
      number: 4,
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      link: "https://example.com/web-development",
    },    {
      number: 5,
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      link: "https://example.com/web-development",
    },    {
      number: 6,
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      link: "https://example.com/web-development",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900  h-full flex items-center justify-center py-10">
      <div className="container mx-auto px-6 pt-10 lg:px-12 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col gap-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Top Section */}
              <div className="flex justify-between items-center">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f9b449] to-[#545454]">
                  {service.number}
                </div>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#545454] dark:text-[#f9b449] hover:text-[#f9b449] dark:hover:text-[#545454] transition-transform"
                >
                  <BsArrowDownRight className="h-10 w-10 transform group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
                </a>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#545454] dark:group-hover:text-[#f9b449] transition-colors">
                {service.title}
              </h2>
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              {/* Border */}
              <div className="border-b border-gray-300 dark:border-gray-600"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

