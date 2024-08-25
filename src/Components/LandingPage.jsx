import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import pic from "../assets/Images/homePicture.jpg";
import framedStar from "../assets/SVG/framedStar.svg";
import { Facebook, Github, Twitter, Instagram, Linkedin } from "lucide-react";

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="home"
      className="bg-white cursor-default xl:h-[92vh] xl:flex overflow-hidden"
    >
      <div className=" xl:w-1/2">
        <img
          src={framedStar}
          alt="framestr"
          className="w-1/2 xl:w-auto"
          data-aos="zoom-out-down"
          data-aos-duration="500"
        />
        <div
          className=" xl:w-[75%] w-[80%] xl:h-[60%] flex flex-col mx-auto xl:translate-x-10 translate-y-[-8%]"
          id="socialAnchor"
        >
          <div
            className="xl:mb-6 mb-2 font-bold font-jost text-xl md:text-4xl xl:text-5xl tracking-[-0.06em] leading-[1.25]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Welcome to&nbsp;   
            <span className="font-bold text-defaultBlue font-jost">
              WOW HR&nbsp;  
            </span>
            <br />
            Sharing Knowledge, Shaping Future
          </div>
          <div
            className="xl:mb-7 mb-4 text-xs xl:text-lg md:text-base font-semibold tracking-wider leading-[1.2]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            WoW HR, a not-for-profit organization intended to create a WoW factor among HR Fraternities and Students community through Skill development. We focus on the segment of Skill Development which supports the individual's to enhance their professional development and developing future leaders. A step forward, we intend to provide exclusive learning experience through different learning formats by Industrial experts.
          </div>
          <div className="flex-col mt-auto xl:mb-10 mb-7" data-aos="fade-up">
            <a
              href="https://wowhr.in/badge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-darkBlue  font-jost text-white text-[.6rem] md:text-base xl:text-sm xl:hover:shadow-lg px-2 md:px-8 xl:px-6 min-w-24 xl:min-w-36 py-2 xl:py-3 font-medium rounded-md xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-200 xl:hover:scale-[1.02] xl:hover:translate-y-[-.1rem]">
                  JOIN US
              </button>
            </a>
            
            <div className="flex gap-3 mt-7 " >
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="250"
                data-aos-anchor="#socialAnchor"
              >
                <div className="bg-white xl:hover:shadow-2xl xl:hover:border-white cursor-pointer xl:hover:scale-110 xl:hover:-translate-y-2 xl:hover:bg-lightBlue duration-200 xl:hover:text-white transition-all border-gray-300 border-[1px] rounded-full md:w-7 md:h-7 w-6 xl:w-8 p-1 xl:p-2 h-6 xl:h-8 text-xs afterPoint">
                  <Facebook className="w-full h-auto" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/wow-hr/"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="250"
                data-aos-anchor="#socialAnchor"
              >
                <div className="bg-white xl:hover:shadow-2xl xl:hover:border-white cursor-pointer xl:hover:scale-110 xl:hover:-translate-y-2 xl:hover:bg-lightBlue duration-200 xl:hover:text-white transition-all border-gray-300 border-[1px] rounded-full md:w-7 md:h-7 w-6 xl:w-8 p-1 xl:p-2 h-6 xl:h-8 text-xs afterPoint">
                  <Linkedin className="w-full h-auto" />
                </div>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor="#socialAnchor"
              >
                <div className="bg-white xl:hover:shadow-2xl xl:hover:border-white cursor-pointer xl:hover:scale-110 xl:hover:-translate-y-2 xl:hover:bg-lightBlue duration-200 xl:hover:text-white transition-all border-gray-300 border-[1px] rounded-full md:w-7 md:h-7 w-6 xl:w-8 p-1 xl:p-2 h-6 xl:h-8 text-xs afterPoint">
                  <Instagram className="w-full h-auto" />
                </div>
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-anchor="#socialAnchor"
              >
                <div className="bg-white xl:hover:shadow-2xl xl:hover:border-white cursor-pointer xl:hover:scale-110 xl:hover:-translate-y-2 xl:hover:bg-lightBlue duration-200 xl:hover:text-white transition-all border-gray-300 border-[1px] rounded-full md:w-7 md:h-7 w-6 xl:w-8 p-1 xl:p-2 h-6 xl:h-8 text-xs afterPoint">
                  <Github className="w-full h-auto" />
                </div>
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor="#socialAnchor"
              >
                <div className="bg-white xl:hover:shadow-2xl xl:hover:border-white cursor-pointer xl:hover:scale-110 xl:hover:-translate-y-2 xl:hover:bg-lightBlue duration-200 xl:hover:text-white transition-all border-gray-300 border-[1px] rounded-full md:w-7 md:h-7 w-6 xl:w-8 p-1 xl:p-2 h-6 xl:h-8 text-xs afterPoint">
                  <Twitter className="w-full h-auto" />
                </div>
              </a>
            </div>
            </div>
        </div>
      </div>
      <div
        className="relative mt-8 mb-10 md:mb-20  xl:mb-0 xl:mt-0 p-7 xl:p-0 md:w-[90%] md:mx-auto md:p-5 xl:w-1/2"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <div className="w-full h-full transform rotate-[-7deg] xl:overflow-hidden border-[1px] xl:-translate-y-[13%] xl:-translate-x-[-5%] bg-white border-lightBlue rounded-3xl xl:rounded-[3rem]">
          <div className="w-full h-full transform overflow-hidden xl:-translate-y-[3.5%] -translate-y-[5%]  -translate-x-[-4%] xl:-translate-x-[-3.5%] rounded-3xl xl:rounded-bl-[3rem]">
            <img
              src={pic}
              alt="pic"
              className="w-full h-full object-contain transform rotate-[6deg] -translate-x-[6%] scale-[1.275] -translate-y-[-4%] rounded-[2rem] xl:rounded-bl-[4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
