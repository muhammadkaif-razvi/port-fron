"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 234 567 890",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muhammadkaifrazwi@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Hyedrabad, India",
  },
];

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await axios.post(
        "https://port-back-svwp.onrender.com/contact",
        Object.fromEntries(formData),
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        event.target.reset(); // Reset the form after successful submission
      } else {
        toast.error("Failed to submit form.");
        event.target.reset();
      }
    } catch (error) {
      toast.error("An error occurred.");
      event.target.reset();
    }
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-12 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="flex-1 flex flex-col gap-6">
            {info.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow rounded-lg transition-transform duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="text-[#545454] dark:text-[#f9b449] text-2xl"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex-1">
            <form
              className="flex flex-col gap-6 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-black dark:text-[#f9b449]">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We’d love to hear from you! Fill out the form below, and we’ll
                get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f9b449] dark:focus:ring-[#545454]"
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f9b449] dark:focus:ring-[#545454]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f9b449] dark:focus:ring-[#545454]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Select a Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f9b449] dark:focus:ring-[#545454]"
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Frontend Development">
                    Frontend Development
                  </option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                </select>
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f9b449] dark:focus:ring-[#545454]"
                required
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-[#545454] dark:bg-[#f9b449] text-white py-3 px-6 rounded-md hover:bg-[#e89c34] dark:hover:bg-[#e4b966] transition transform duration-300"
              >
                Send Message
              </motion.button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
