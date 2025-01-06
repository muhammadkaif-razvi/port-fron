import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useMenuToggle from "../utils/useMenuToggle";
import useNavbarBehavior from "../utils/useNavbarBehavior";

import Logo from "./Logo";
import Hiremebtn from "./Hiremebtn";
import Social from "./Social";
import MuteToggle from "./MuteToggle";
import LightDarkbtn from "./LightDarkbtn";

const Navbar = () => {
  const { showSocialIcons, isNavSmall } = useNavbarBehavior();
  const { isMenuOpen, toggleMenu, closeMenu, menuRef, toggleButtonRef } =
    useMenuToggle();

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-transform duration-300 ${
        isNavSmall ? "py-0" : "pt-0 pb-2"
      }`}
    >
      {/* Social Media Bar */}
      {showSocialIcons && (
        <div className="bg-[#545454] text-[#f9b449]  dark:bg-[#f9b449] dark:text-[#545454] py-0 flex justify-center space-x-6 animate-fadeIn">
          <Social
            linkstyle="hover:scale-110 transition-transform "
            containerstyles="flex space-x-9"
          />
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={`container mx-auto px-4 flex justify-between items-center ${
          isNavSmall ? "py-1" : "pt-3 pb-3"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 pt-2.5 pb-2">
          <Link
            to="/"
            className="nav-link text-[#545454] dark:hover:text-[#545454] hover:text-[#f9b449] dark:text-[#f9b449]"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link text-[#545454] dark:hover:text-[#545454] hover:text-[#f9b449] dark:text-[#f9b449]"
          >
            Services
          </Link>
          <Link
            to="/resume"
            className="nav-link text-[#545454] dark:hover:text-[#545454] hover:text-[#f9b449] dark:text-[#f9b449]"
          >
            Resume
          </Link>
          <Link
            to="/work"
            className="nav-link text-[#545454] dark:hover:text-[#545454] hover:text-[#f9b449] dark:text-[#f9b449]"
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="nav-link text-[#545454] dark:hover:text-[#545454] hover:text-[#f9b449] dark:text-[#f9b449]"
          >
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            ref={toggleButtonRef}
            onClick={() => {
              toggleMenu();
            }}
            className="md:hidden focus:outline-none"
          >
            <GiHamburgerMenu
              size={30}
              className="text-secondary hover:text-primary transition-transform hover:rotate-90 hover:scale-110 text-[#f9b449] hover:text-[#545454] dark:text-[#545454] dark:hover:text-[#f9b449]"
            />
          </button>

          {/* Light/Dark Toggle */}
          <LightDarkbtn/>

          {/* Mute/Unmute Toggle */}
          <MuteToggle />

          {/* Hire Me Button */}
          <Hiremebtn />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white dark:bg-gray-900 py-4 animate-slideIn"
        >
          <ul className="space-y-4 px-6">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="mobile-link  dark:hover:text-[white] hover:text-[#f9b449] dark:text-[#f9b449]"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/services"
                onClick={closeMenu}
                className="mobile-link  dark:hover:text-[white] hover:text-[#f9b449] dark:text-[#f9b449]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={closeMenu}
                className="mobile-link  dark:hover:text-[white] hover:text-[#f9b449] dark:text-[#f9b449]"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                onClick={closeMenu}
                className="mobile-link  dark:hover:text-[white] hover:text-[#f9b449] dark:text-[#f9b449] "
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mobile-link  dark:hover:text-[white] hover:text-[#f9b449] dark:text-[#f9b449]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
