import f1 from "../assets/Images/f1.png";
import f2 from "../assets/Images/f2.jpg";
import f3 from "../assets/Images/f3.jpg";
import f4 from "../assets/Images/f4.jpg";
import logo from "../assets/Images/WowHRLogo.png";
import {
  MapPin,
  PhoneCall,
  AtSign,
  Github,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="h-full my-auto overflow-hidden text-white bg-black cursor-default xl:min-h-screen "
    >
      <div className="flex w-full h-[10rem] xl:h-[19.5rem] ">
        <img src={f1} alt="f1" className="object-cover w-1/4 xl:w-full " />
        <img src={f2} alt="f2" className="object-cover w-1/4 xl:w-full " />
        <img src={f3} alt="f3" className="object-cover w-1/4 xl:w-full " />
        <img src={f4} alt="f4" className="object-cover w-1/4 xl:w-full " />
      </div>
      <div
        className="h-full pt-8 pb-1 bg-top bg-contain xl:pb-0 xl:pt-16 bg-footer-bg"
        id="footerAnchor"
      >
        <div className="mx-auto xl:max-w-7xl">
          <div className="flex flex-col items-center justify-between px-3 mb-7 xl:flex-row xl:px-10 xl:mb-16 xl:gap-10 ">
            <div
              className="w-[20rem] xl:w-[20rem] md:w-[35rem] "
              data-aos="fade-right"
              data-aos-anchor="#footerAnchor"
              data-aos-duration="500"
            >
              <img
                src={logo}
                alt="logo"
                className="xl:w-[14rem] md:w-[12rem] w-[6rem]  rounded-lg p-2 mb-5 xl:mb-7 bg-white"
              />
              <div className="text-[.65rem] xl:text-[1rem] md:text-[1rem] leading-[1.2] mb-3 md:mb-7 xl:mb-10 tracking-wide">
                WoW HR, a not-for-profit organization intended to create a WoW
                factor among HR Fraternities and Students community through
                Skill development.
              </div>
              <div className="flex justify-between border-b border-gray-500">
                <input
                  type="email"
                  className="w-full p-1 xl:p-2 text-[.65rem] xl:text-sm md:text-sm text-white bg-transparent"
                  placeholder="Your E-Mail"
                />
                <button className="px-2 xl:px-4 py-1 mb-1 text-[.65rem] xl:text-xs font-bold tracking-wide bg-white rounded-full transition-all duration-300 xl:hover:text-white xl:hover:bg-[#089adec1] xl:hover:translate-y-[-.25rem]  text-defaultBlue">
                  <a href="mailto:Connect@wowhr.in" className="font-bold">
                    SUBSCRIBE
                  </a>
                </button>
              </div>
            </div>
            <div className="flex gap-2 mb-auto xl:gap-0 mt-7 xl:mt-2 xl:px-16 ">
              <div
                className="w-24 space-y-1 md:w-44 xl:space-y-2 xl:w-48 xl:max-w-56"
                data-aos="fade-left"
                data-aos-anchor="#footerAnchor"
                data-aos-duration="500"
              >
                <div className="mb-5 text-sm font-semibold xl:text-xl md:text-xl font-jost">
                  QUICK LINKS
                </div>
                <a
                  href="#about-us"
                  className="text-[.65rem] xl:text-sm md:text-sm transition-all duration-300 xl:hover:text-white xl:hover:-translate-y-[2px]  tracking-wider block text-gray-400 w-max translate-y-0"
                >
                  About Us
                </a>
                <a
                  href="#leadership"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  block text-gray-400 w-max translate-y-0"
                >
                  Meet the Team
                </a>
                <a
                  href="#events"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0"
                >
                  Events
                </a>
                <a
                  href="#testimonials"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0"
                >
                  Testimonial
                </a>
                <a
                  href="#footer"
                  className="text-[.65rem] xl:text-sm md:text-sm tracking-wider block transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0"
                >
                  Contact Us
                </a>
              </div>
              <div
                className="w-24 space-y-1 md:w-44 xl:space-y-2 xl:w-48 xl:max-w-56"
                data-aos="fade-left"
                data-aos-anchor="#footerAnchor"
                data-aos-duration="750"
              >
                <div className="mb-5 text-sm font-semibold xl:text-xl md:text-xl font-jost">
                  SERVICE
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0 cursor-pointer">
                  Network
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0 cursor-pointer">
                  Chapters
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0 cursor-pointer">
                  Certification
                </div>
                <div className=" text-[.65rem] xl:text-sm md:text-sm tracking-wider transition-all xl:hover:text-white duration-300 xl:hover:-translate-y-[2px]  text-gray-400 w-max translate-y-0 cursor-pointer">
                  Jobs
                </div>
              </div>
              <div
                className="space-y-1 xl:space-y-2 w-36 xl:w-56 xl:max-w-56"
                data-aos="fade-left"
                data-aos-anchor="#footerAnchor"
                data-aos-duration="1000"
              >
                <div className="mb-5 text-sm font-semibold xl:text-xl md:text-xl font-jost">
                  CONTACT
                </div>
                <a
                  href="https://maps.app.goo.gl/HzWV3bTdR6d19GTGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[.65rem] xl:text-xs transition-all  text-gray-400 translate-y-0 xl:hover:text-white duration-300  xl:hover:-translate-y-[2px]"
                >
                  <MapPin className="w-8 h-8 p-2 mb-auto xl:w-10 xl:h-10" />
                  <div className="">
                    <div className="">Our Address:</div>
                    <div className="">
                      Old Westbury 256, New York 11201, United States
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center w-max text-[.65rem] xl:text-xs transition-all  text-gray-400 translate-y-0 xl:hover:text-white duration-300  xl:hover:-translate-y-[2px]"
                >
                  <PhoneCall className="w-6 h-6 p-2 xl:w-8 xl:h-8 " />
                  +880 123 (4567) 890
                </a>
                <a
                  href="mailto:Connect@wowhr.in"
                  className="flex items-center w-max text-[.65rem] xl:text-xs transition-all  text-gray-400 translate-y-0 xl:hover:text-white duration-300  xl:hover:-translate-y-[2px]"
                >
                  <AtSign className="w-6 h-6 p-2 xl:w-8 xl:h-8" />
                  Connect@wowhr.in
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col justify-between xl:px-12 px-4 py-1 pt-3 xl:flex-row xl:pt-1 text-[.65rem] text-white  border-t border-gray-500">
            <div className="tracking-wider">
              Copyright © 2024 Consalt. Designed & Developed by{" "}
              <a
                href="https://linessoftech.com/"
                className="underline transition-all duration-300 xl:hover:text-gray-400"
              >
                VultureLines
              </a>
            </div>
            <div className="flex gap-2 font-bold xl:gap-4 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="w-6 h-6 p-1 text-xs transition-all xl:hover:-translate-y-[2px] translate-y-0 cursor-pointer md:w-7 md:h-7 xl:w-8 xl:p-2 xl:h-8  xl:hover:text-gray-400 duration-300  ">
                  <Facebook className="w-full h-auto" />
                </div>{" "}
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="w-6 h-6 p-1 text-xs transition-all xl:hover:-translate-y-[2px] translate-y-0 cursor-pointer md:w-7 md:h-7 xl:w-8 xl:p-2 xl:h-8  xl:hover:text-gray-400 duration-300  ">
                  <Twitter className="w-full h-auto" />
                </div>{" "}
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="w-6 h-6 p-1 text-xs transition-all xl:hover:-translate-y-[2px] translate-y-0 cursor-pointer md:w-7 md:h-7 xl:w-8 xl:p-2 xl:h-8  xl:hover:text-gray-400 duration-300  ">
                  <Instagram className="w-full h-auto" />
                </div>{" "}
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="w-6 h-6 p-1 text-xs transition-all xl:hover:-translate-y-[2px] translate-y-0 cursor-pointer md:w-7 md:h-7 xl:w-8 xl:p-2 xl:h-8  xl:hover:text-gray-400 duration-300  ">
                  <Github className="w-full h-auto" />
                </div>{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/wow-hr/ "
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <div className="w-6 h-6 p-1 text-xs transition-all xl:hover:-translate-y-[2px] translate-y-0 cursor-pointer md:w-7 md:h-7 xl:w-8 xl:p-2 xl:h-8  xl:hover:text-gray-400 duration-300  ">
                  <Linkedin className="w-full h-auto" />
                </div>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
