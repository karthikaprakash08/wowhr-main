import { useState } from "react";
import CardFrame from "../assets/SVG/cardOuter.jsx";
import CardIcon1 from "../assets/SVG/card1Icon.jsx";
import CardIcon2 from "../assets/SVG/card2Icon.jsx";
import CardIcon3 from "../assets/SVG/card3Icon.jsx";
import CardIcon4 from "../assets/SVG/card4Icon.jsx";

const OurService = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHoveredOther, setIsHoveredOther] = useState(false);

  return (
    <section
      id="our-service"
      className="flex flex-col items-center justify-center h-full p-5 mx-auto overflow-hidden bg-white cursor-default md:h-full xl:h-[92vh] xl:py-0 xl:px-20 max-w-7xl sm:pb-5 md:pb-10"
    >
      <div
        className="mb-3 text-xl font-semibold xl:mt-0 md:mt-10 xl:mb-14 md:text-4xl xl:text-3xl font-jost"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        OUR SERVICES
      </div>
      <div
        className="text-xs xl:text-lg font-semibold text-center md:text-xl tracking-wider xl:leading-[1.9] md:leading-[2] mb-5 md:mb-10 xl:mb-24 mx-3"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Fraternities and Students community through Skill development. We focus
        on the segment of Skill Development which supports the individual&apos;s
        to enhance their professional development and developing future leaders.
        A step forward, we intend to provide exclusive learning experience
        through different learning formats by Industrial experts.
      </div>
      <div className="flex flex-col space-y-8 md:space-y-14 xl:space-y-0 xl:gap-6 xl:flex-row">
        <div
          className=" relative mx-auto w-[148px] h-[160px] xl:w-[230px] xl:h-[275px] md:h-[300px] md:w-[280px]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div
            className={`transition-all duration-300 translate-y-0 cursor-pointer xl:hover:drop-shadow-xl xl:hover:-translate-y-1 xl:-translate-x-0 -translate-x-12 ${
              isHoveredOther && !isHovered ? "xl:scale-90" : "xl:scale-100"
            } `}
            onMouseEnter={() => {
              setIsHovered(true);
              setIsHoveredOther(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsHoveredOther(false);
            }}
          >
            <CardFrame
              filler={
                isHovered2 || isHovered3 || isHovered4 ? "#ffffff" : "#011329"
              }
              // filler={
              //   isHovered || isHovered2 || isHovered3 || isHovered4
              //     ? "#ffffff"
              //     : "#011329"
              // }
              stroker={"#cccccc"}
              className={`object-contain w-full h-full ${
                isHovered2 || isHovered3 || isHovered4
                  ? "drop-shadow-sm"
                  : "drop-shadow-lg"
              }`}
            />
            <div
              className={`absolute mx-5 my-2 md:mx-8 md:my-8 transition-all duration-200 xl:mx-5 xl:my-4 top-1 ${
                isHovered2 || isHovered3 || isHovered4
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <CardIcon1
                filler={
                  isHovered2 || isHovered3 || isHovered4 ? "#1850A8" : "#ffffff"
                }
                className={`w-6 h-6 mb-2 md:w-12 md:h-12 xl:w-auto xl:mb-5 xl:h-auto`}
              />
              <div className="mb-4 text-sm font-bold md:text-2xl xl:text-xl ">
                Network
              </div>
              <div className="md:text-lg text-xs xl:text-base font-semibold text-left xl:leading-[1.5] min-h-[3rem] xl:min-h-[5rem] line-clamp-4">
                Be a part of a community of HR Professionals across India.
              </div>
              <span className="md:text-5xl text-xl xl:text-4xl xl:mt-2 leading-[.5] ">
                &#8594;
              </span>
              <div className=" relative text-black xl:top-1 md:top-8 -top-1 text-xs xl:text-2xl md:left-[6rem] md:text-3xl font-bold xl:left-[5.5rem] left-[3.15rem] w-max">
                1
              </div>
            </div>
          </div>
        </div>
        <div
          className=" relative mx-auto w-[148px] h-[160px] xl:w-[230px] xl:h-[275px] md:h-[300px] md:w-[280px]"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          <div
            className={`transition-all duration-300 translate-y-0 cursor-pointer xl:hover:drop-shadow-xl xl:hover:translate-y-[-4px] 
              xl:translate-x-0 translate-x-12
              ${
                isHoveredOther && !isHovered2
                  ? "xl:scale-90 xl:translate-y-0"
                  : "xl:scale-100 xl:translate-y-6"
              }`}
            onMouseEnter={() => {
              setIsHovered2(true);
              setIsHoveredOther(true);
            }}
            onMouseLeave={() => {
              setIsHovered2(false);
              setIsHoveredOther(false);
            }}
          >
            <CardFrame
              filler={!isHovered2 ? "#ffffff" : "#011329"}
              stroker={!isHovered2 ? "#cccccc" : "#cccccc"}
              className={`object-contain w-full h-full ${
                isHovered2 ? "drop-shadow-sm" : "drop-shadow-md"
              }`}
            />
            <div
              className={`absolute mx-5 my-2 md:mx-8 md:my-8 xl:mx-5 xl:my-4 top-1 ${
                isHovered2 ? "text-white" : "text-black"
              }`}
            >
              <CardIcon2
                filler={isHovered2 ? "#ffffff" : "#1850A8"}
                innerClass={isHovered2 ? "#011329" : "#ffffff"}
                className={`w-6 h-6 mb-2 md:w-12 md:h-12 xl:w-auto xl:mb-5 xl:h-auto`}
              />
              <div className="mb-4 text-sm font-bold md:text-2xl xl:text-xl ">
                Chapters
              </div>
              <div className="md:text-lg text-xs xl:text-base font-semibold text-left xl:leading-[1.5] min-h-[3rem] xl:min-h-[5rem]  line-clamp-4">
                Explore a vast Network of Wow hr Chapters spread across multiple
                cities.
              </div>
              <span className="md:text-5xl text-xl xl:text-4xl xl:mt-2 leading-[.5] ">
                &#8594;
              </span>
              <div className=" relative -top-1 xl:top-3 md:top-8 text-xs xl:text-2xl md:left-[6rem] md:text-3xl font-bold xl:left-[5.5rem] left-[3.15rem] w-max text-black">
                2
              </div>
            </div>
          </div>
        </div>
        <div
          className=" relative mx-auto w-[148px] h-[160px] xl:w-[230px] xl:h-[275px] md:h-[300px] md:w-[280px]"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <div
            className={`transition-all duration-300 translate-y-0 
              xl:-translate-x-0 -translate-x-12 cursor-pointer xl:hover:drop-shadow-xl xl:hover:-translate-y-1 ${
                isHoveredOther && !isHovered3 ? "xl:scale-90" : "xl:scale-100"
              }`}
            onMouseEnter={() => {
              setIsHovered3(true);
              setIsHoveredOther(true);
            }}
            onMouseLeave={() => {
              setIsHovered3(false);
              setIsHoveredOther(false);
            }}
          >
            <CardFrame
              filler={!isHovered3 ? "#ffffff" : "#011329"}
              stroker={!isHovered3 ? "#cccccc" : "#cccccc"}
              className={`object-contain w-full h-full ${
                isHovered3 ? "drop-shadow-sm" : "drop-shadow-md"
              }`}
            />
            <div
              className={`absolute mx-5 my-2 md:mx-8 md:my-8 xl:mx-5 xl:my-4 top-1 ${
                isHovered3 ? "text-white" : "text-black"
              }`}
            >
              <CardIcon3
                filler={isHovered3 ? "#ffffff" : "#1850A8"}
                className={`w-6 h-6 mb-2 md:w-12 md:h-12 xl:w-auto xl:mb-5 xl:h-auto`}
              />
              <div className="mb-4 text-sm font-bold md:text-2xl xl:text-xl ">
                Certification
              </div>
              <div className="md:text-lg text-xs xl:text-base font-semibold text-left xl:leading-[1.5] min-h-[3rem] xl:min-h-[5rem] line-clamp-4">
                Discover a array of courses curated to Certification & polish
                your professional.
              </div>
              <span className="md:text-5xl text-xl xl:text-4xl xl:mt-2 leading-[.5] ">
                &#8594;
              </span>
              <div className=" relative text-black xl:top-0 md:top-8 -top-1 text-xs xl:text-2xl md:left-[6rem] md:text-3xl font-bold xl:left-[5.5rem] left-[3.15rem] w-max">
                3
              </div>
            </div>
          </div>
        </div>
        <div
          className=" relative mx-auto w-[148px] h-[160px] xl:w-[230px] xl:h-[275px] md:h-[300px] md:w-[280px]"
          data-aos="fade-right"
          data-aos-duration="250"
        >
          <div
            className={`transition-all duration-300 translate-y-0 cursor-pointer xl:hover:drop-shadow-xl xl:hover:translate-y-[-4px] 
              xl:translate-x-0 translate-x-12 
              ${
                isHoveredOther && !isHovered4
                  ? "xl:scale-90 xl:translate-y-0"
                  : "xl:scale-100 xl:translate-y-6"
              }`}
            onMouseEnter={() => {
              setIsHovered4(true);
              setIsHoveredOther(true);
            }}
            onMouseLeave={() => {
              setIsHovered4(false);
              setIsHoveredOther(false);
            }}
          >
            <CardFrame
              filler={!isHovered4 ? "#ffffff" : "#011329"}
              stroker={!isHovered4 ? "#cccccc" : "#cccccc"}
              className={`object-contain w-full h-full ${
                isHovered4 ? "drop-shadow-sm" : "drop-shadow-md"
              }`}
            />
            <div
              className={`absolute mx-5 my-2 md:mx-8 md:my-8 xl:mx-5 xl:my-4 top-1 ${
                isHovered4 ? "text-white" : "text-black"
              }`}
            >
              <CardIcon4
                filler={isHovered4 ? "#ffffff" : "#1850A8"}
                innerClass={isHovered4 ? "#011329" : "#ffffff"}
                className={`w-6 h-6 mb-2 md:w-12 md:h-12 xl:w-auto xl:mb-5 xl:h-auto`}
              />
              <div className="mb-4 text-sm font-bold md:text-2xl xl:text-xl ">
                Jobs
              </div>
              <div className="md:text-lg text-xs xl:text-base font-semibold text-left xl:leading-[1.5] min-h-[3rem] xl:min-h-[5rem]  line-clamp-4">
                Presenting a platform where HR Talents meets Recruiters.
              </div>
              <span className="md:text-5xl text-xl xl:text-4xl xl:mt-2 leading-[.5] ">
                &#8594;
              </span>
              <div className=" relative top-3 xl:top-2 md:top-14 text-xs xl:text-2xl md:left-[6rem] md:text-3xl font-bold xl:left-[5.5rem] left-[3.15rem] text-black w-max">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
