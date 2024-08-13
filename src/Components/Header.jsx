import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import {
  Home,
  Info,
  Users,
  Award,
  Briefcase,
  Calendar,
  MessageCircle,
} from "lucide-react";

import logo from "../assets/Images/WowHRLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // scroll ah cleaning panna
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const handleNavClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <header className="bg-white cursor-default text-white flex  justify-between overflow-hidden  max-w-7xl xl:h-[6.6rem] md:h-[6rem] h-[3.5rem] xl:px-9 mx-auto items-center relative z-50">
      <div className="relative flex items-center flex-grow xl:flex-grow-0">
        {/* mobile kaana hamburuger*/}
        <div className="absolute left-3 xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-black rounded-lg focus:outline-none hamburger-button"
          >
            <svg
              className="w-5 h-5 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4L20 20M4 20L20 4"
                />
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h12"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
        <img
          src={logo}
          alt="logo"
          className="xl:w-[14.3rem] md:w-[15rem] mx-auto w-[9rem] h-auto bg-red-900"
        />
      </div>
      {/* lap view*/}
      <nav className="items-center justify-between hidden gap-4 text-base xl:flex">
        <a
          href="#home"
          className="px-4 py-2 font-bold text-center text-black transition-all duration-300 rounded-lg mb-0 hover:shadow-lg hover:text-white hover:bg-[#089adec1] hover:mb-2 min-w-28"
        >
          Home
        </a>

        <a
          href="#about-us"
          className="px-4 py-2 font-bold text-center text-black transition-all duration-300 rounded-lg mb-0 hover:shadow-lg hover:text-white hover:bg-[#089adec1] hover:mb-2 min-w-28"
        >
          About Us
        </a>
        <a
          href="#partners"
          className="px-4 py-2 mb-0 font-bold text-center text-black transition-all duration-300 rounded-lg hover:shadow-lg hover:mb-2 min-w-28 hover:text-white hover:bg-[#089adec1]"
        >
          Network
        </a>
        <a
          href="#leadership"
          className="px-4 py-2 mb-0 font-bold text-center text-black transition-all duration-300 rounded-lg hover:shadow-lg hover:mb-2 min-w-28 hover:text-white hover:bg-[#089adec1]"
        >
          Leadership
        </a>
        <a
          href="#our-service"
          className="px-4 py-2 mb-0 font-bold text-center text-black transition-all duration-300 rounded-lg hover:shadow-lg hover:mb-2 min-w-28 hover:text-white hover:bg-[#089adec1]"
        >
          Our Services
        </a>
        <a
          href="#events"
          className="px-4 py-2 mb-0 font-bold text-center text-black transition-all duration-300 rounded-lg hover:shadow-lg hover:mb-2 min-w-28 hover:text-white hover:bg-[#089adec1]"
        >
          Events
        </a>
        <a
          href="#knowledge"
          className="px-4 py-2 mb-0 font-bold text-center text-black transition-all duration-300 rounded-lg hover:shadow-lg hover:mb-2 min-w-28 hover:text-white hover:bg-[#089adec1]"
        >
          Knowledge Hub
        </a>
      </nav>
      {/* Overlyyy*/}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 w-[60%] lg:w-[55%]  h-full  flex flex-col items-center bg-white p-1 gap-4 lg:gap-7 text-base transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out xl:hidden z-40 overflow-y-auto`}
      >
        <div className="flex items-center justify-between w-full p-1 px-2 bg-whitelg:p-5">
          <img
            src={logo}
            alt="logo"
            className="w-3/4 md:w-[60%] h-auto p-2 bg-white rounded-lg"
          />
          <button
            onClick={toggleMenu}
            className="p-1 px-2 text-white rounded-full bg-lightBlue focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 lg:w-10 lg:h-10" />
          </button>
        </div>
        <div className="flex h-[23.5rem] w-[90%] justify-between flex-col gap-3 p-4 bg-gray-400  shadow-xl bg-opacity-30 rounded-2xl ">
          <a
            href="#home"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Home className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" /> Home
          </a>
          <a
            href="#about-us"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Info className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" /> About Us
          </a>
          <a
            href="#partners"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Users className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" /> Network
          </a>
          <a
            href="#leadership"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Award className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" />{" "}
            Leadership
          </a>
          <a
            href="#our-service"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Briefcase className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" /> Our
            Services
          </a>
          <a
            href="#events"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <Calendar className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" /> Events
          </a>
          <a
            href="#knowledge"
            onClick={handleNavClick}
            className="flex items-center w-full px-4 py-2 text-sm font-bold text-left text-white transition-colors duration-200 rounded-md shadow-xl lg:text-3xl md:py-4 md:text-2xl bg-lightBlue"
          >
            <MessageCircle className="w-5 h-5 mr-2 lg:w-10 lg:h-10 lg:mr-5" />{" "}
            Knowledge Hub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
