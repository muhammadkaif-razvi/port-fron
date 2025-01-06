import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Corrected component name
import Hiremebtn from "./Hiremebtn";
import Social from "./Social";
import LightDarkbtn from "./LightDarkbtn";
import MuteToggle from "./MuteToggle"; // Corrected component name

const Footer = () => {

  return (
    <footer className="bg-white dark:bg-gray-900 py-6  relative">
      <div className="container mx-auto px-4 mt-1">
        <Logo />
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 py-2 pt-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-lg text-[#545454] dark:text-[#f9b449]">
              I am a passionate web developer dedicated to creating efficient,
              user-friendly, and responsive websites. Let’s build something
              amazing together!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-lg text-[#545454] hover:text-[#f9b449] dark:hover:text-[#545454] dark:text-[#f9b449] font-medium block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-lg text-[#545454] hover:text-[#f9b449] dark:hover:text-[#545454] dark:text-[#f9b449] font-medium block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-lg text-[#545454] hover:text-[#f9b449] dark:hover:text-[#545454] dark:text-[#f9b449] font-medium block"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-lg text-[#545454] hover:text-[#f9b449] dark:hover:text-[#545454] dark:text-[#f9b449] font-medium block"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-lg text-[#545454] hover:text-[#f9b449] dark:hover:text-[#545454] dark:text-[#f9b449] font-medium block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <Social
              linkstyle="text-lg text-[#545454] hover:text-[#f9b449] dark:text-[#f9b449] dark:hover:text-[#545454] hover:scale-150 transition-transform"
              containerstyles="flex gap-8"
            />
          </div>
          {/* Hire Me Button Section */}
          <div>
            <h3 className="my-3">Let's Work Together</h3>
            <div className="flex gap-4">
              <Hiremebtn />
              <LightDarkbtn />
              <MuteToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="relative my-8 flex justify-between items-center">
        {/* Copyright Bar */}
        <div className=" mx-auto py-4 mt-8">
          <div className="container mx-auto text-center text-sm">
            &copy; {new Date().getFullYear()} Muhammad Kaif Razvi. Built with
            passion and creativity. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
