import { useState, useEffect, useRef } from "react";
import roundStar from "../assets/SVG/roundStar.svg";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
} from "lucide-react";
import useScreenSize from "./useScreenSize";
import useFetchLeadership from "../Data/useFetchLeadership.js";

const LeaderShip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Mentor");
  const [selectedCity, setSelectedCity] = useState("SELECT CITY");

  const { leadershipData, loading, error, errorMsg } = useFetchLeadership();

  // Static
  // const cities = ["Chennai", "Coimbatore"];

  // Dynamic
  const cities = [...new Set(leadershipData.map((x) => x.location))];

  const handleOptionClick = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const filteredMembers = leadershipData.filter((member) => {
    return (
      (selectedCity === "SELECT CITY" || member.location === selectedCity) &&
      (selectedType === "SELECT CITY" || member.leaderType === selectedType)
    );
  });

  // SLIDeeer

  const itemsPerPageEvents = 3;

  const [currentIndexEvents, setCurrentIndexEvents] = useState(0);
  const [isHoveredEvents, setIsHoveredEvents] = useState(false);
  const intervalRefEvents = useRef(null);

  const totalItemsEvents = filteredMembers.length;

  const handleNextEvents = () => {
    if (currentIndexEvents < totalItemsEvents - itemsPerPageEvents) {
      setCurrentIndexEvents(currentIndexEvents + 1);
    }
  };

  const handlePrevEvents = () => {
    if (currentIndexEvents > 0) {
      setCurrentIndexEvents(currentIndexEvents - 1);
    }
  };

  useEffect(() => {
    const startSlideshowEvents = () => {
      intervalRefEvents.current = setInterval(() => {
        setCurrentIndexEvents((prevIndex) => {
          if (prevIndex < totalItemsEvents - itemsPerPageEvents) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 4000);
    };

    if (!isHoveredEvents) {
      startSlideshowEvents();
    }

    return () => clearInterval(intervalRefEvents.current);
  }, [
    isHoveredEvents,
    totalItemsEvents,
    itemsPerPageEvents,
    selectedCity,
    selectedType,
  ]);

  useEffect(() => {
    setCurrentIndexEvents(0);
  }, [selectedType, selectedCity]);

  // SLIDeeer

  // bp

  const { width } = useScreenSize();
  const isSmallScreen = width < 640;

  const translateXValue = !isSmallScreen
    ? currentIndexEvents * (102.2 / itemsPerPageEvents)
    : currentIndexEvents * (152 / itemsPerPageEvents);

  return (
    <section
      id="leadership"
      className="flex flex-col items-end justify-between h-full overflow-hidden text-white cursor-default bg-defaultBlue xl:h-screen"
    >
      <div className="relative w-full mb-24 bg-white xl:mb-0 h-14 xl:h-24">
        <img
          src={roundStar}
          alt="roundStar"
          className="absolute scale-90 -translate-x-1/2 left-1/2 top-5 xl:top-16 xl:scale-125"
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full xl:h-[50vh] bg-defaultBlue">
          <LoaderCircle className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center w-full h-[25vh] xl:h-[50vh] xl:text-2xl text-white bg-red-500">
          Error loading events data. Please try again later.
          {errorMsg}
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full px-5 mx-auto mb-16 xl:flex-row">
            <div className="xl:w-[37%] xl:px-32 xl:pr-28 flex flex-col my-auto">
              <div
                className="relative inline-block mb-4 text-xl font-semibold xl:text-3xl md:text-4xl xl:mb-7 font-jost"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                LEADERSHIP
                <span className="custom-border"></span>
              </div>
              <div
                className=" text-sm xl:text-lg md:text-2xl font-semibold xl:font-normal tracking-wider md:leading-[1.7] xl:leading-[1.6] mb-4  xl:mb-7"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                At WoW HR, our leadership team, comprising core members and mentors, embodies the vision of nurturing future leaders by guiding and empowering the HR fraternity and student community through skill development and unparalleled learning experiences.
              </div>

              <div
                className="relative xl:min-w-[60%] md:w-[30%] xl:mb-0 mb-2 w-[60%] xl:w-[60%] "
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <div
                  className={`px-5 xl:px-10 xl:py-3 py-2 md:text-xl text-sm xl:text-base font-semibold text-black bg-white outline-none cursor-pointer
    select-selected ${isOpen ? "select-arrow-active" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedCity}
                </div>
                <div
                  className={`select-items z-20 absolute left-0 right-0  ${
                    isOpen ? "select-show" : "select-hide"
                  }`}
                >
                  {cities.map((city) => (
                    <div
                      key={city}
                      className="px-5 py-1 text-sm font-semibold bg-gray-200 text-black cursor-pointer md:text-xl xl:py-2 xl:text-base xl:px-10 xl:hover:bg-[#089adec1] xl:hover:text-white transition-all duration-300"
                      onClick={() => handleOptionClick(city)}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:mt-0 mt-6 xl:w-[63%] ">
              <div
                className="flex mb-4 xl:mb-3 mx-[.40rem]  gap-7"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <button
                  className={`hover:text-white transition-all duration-300 xl:hover:border-white py-1 md:text-xl text-sm 
                min-w-36 xl:text-xl font-medium text-left border-b-2  md:min-w-52 xl:min-w-72 font-jost ${
                  selectedType === "Mentor"
                    ? "text-white border-white"
                    : "text-gray-500 border-gray-500 "
                } `}
                  onClick={() => handleTypeClick("Mentor")}
                >
                  MENTOR
                </button>
                <button
                  className={`py-1 md:min-w-52 text-sm min-w-36 md:text-xl xl:hover:text-white transition-all duration-300 xl:hover:border-white  xl:text-xl font-medium text-left  border-b-2 border-gray-400 xl:min-w-72 font-jost ${
                    selectedType === "Core Team"
                      ? "text-white border-white"
                      : "text-gray-500 border-gray-500 "
                  } `}
                  onClick={() => handleTypeClick("Core Team")}
                >
                  CORE TEAM
                </button>
              </div>
              <div
                className="relative items-center justify-center overflow-hidden "
                onMouseEnter={() => setIsHoveredEvents(true)}
                onMouseLeave={() => setIsHoveredEvents(false)}
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div
                  className="flex gap-0 transition-transform duration-300 ease-in-out xl:gap-5 "
                  style={{
                    transform: `translateX(-${translateXValue}%)`,
                  }}
                >
                  {filteredMembers.map((member, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 mx-[.27rem] xl:mx-[.3rem] md:mx-[.3rem] overflow-hidden bg-transparent w-40 xl:w-72 md:w-72 group"
                    >
                      <img
                        src={member.profileImg}
                        alt={member.name}
                        className="object-cover w-40 md:w-72 xl:w-72 mb-6 h-[12rem] xl:h-[24rem] md:h-[24rem] transition-all shadow-lg duration-300 group-hover:blur-sm"
                      />

                      <div className="absolute shadow-lg bottom-0 left-0 w-[85%] mx-auto right-0 p-3 xl:p-4 xl:py-5 text-white transition-transform duration-300 ease-in-out bg-darkBlue border-b-4  translate-y-full  group-hover:translate-y-0">
                        <h3 className="mb-1 text-base font-semibold leading-[1.1] text-center xl:leading-normal xl:text-lg line-clamp-2 xl:line-clamp-4">
                          {member.name}
                        </h3>
                        <p className="text-[.6rem] xl:text-[.65rem] mb-2 xl:mb-5 text-center font-medium line-clamp-3">
                          - {member.job} -
                        </p>
                        <p className="text-[.5rem] xl:text-[.65rem] leading-relaxed line-clamp-6">
                          {member.description}
                        </p>
                        <div className="flex justify-between items-center mx-auto mt-2 xl:mt-4 w-[80%]">
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="w-5 h-5 p-2 text-xs transition-all duration-200 rounded-full cursor-pointer bg-darkblue xl:hover:shadow-2xl xl:hover:scale-110 xl:hover:-translate-y-1 xl:hover:bg-white xl:hover:text-darkBlue xl:w-7 xl:h-7 ">
                                <Github className="w-full h-full text-inherit" />
                              </div>
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="w-5 h-5 p-2 text-xs transition-all duration-200 rounded-full cursor-pointer bg-darkblue xl:hover:shadow-2xl xl:hover:scale-110 xl:hover:-translate-y-1 xl:hover:bg-white xl:hover:text-darkBlue xl:w-7 xl:h-7 ">
                                <Instagram className="w-full h-full text-inherit" />
                              </div>
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="w-5 h-5 p-2 text-xs transition-all duration-200 rounded-full cursor-pointer bg-darkblue xl:hover:shadow-2xl xl:hover:scale-110 xl:hover:-translate-y-1 xl:hover:bg-white xl:hover:text-darkBlue xl:w-7 xl:h-7 ">
                                <Linkedin className="w-full h-full text-inherit" />
                              </div>
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="w-5 h-5 p-2 text-xs transition-all duration-200 rounded-full cursor-pointer bg-darkblue xl:hover:shadow-2xl xl:hover:scale-110 xl:hover:-translate-y-1 xl:hover:bg-white xl:hover:text-darkBlue xl:w-7 xl:h-7 ">
                                <Twitter className="w-full h-full text-inherit" />
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="absolute shadow-lg bottom-0 left-0 w-[85%] mx-auto text-center right-0 xl:p-4 p-2 text-white transition-all duration-300 border-b-4 bg-darkBlue group-hover:opacity-0 translate-y-0 group-hover:translate-y-full">
                        <h3 className="mb-1 text-base font-semibold leading-tight text-center xl:leading-normal xl:text-lg line-clamp-2 xl:line-clamp-4">
                          {member.name}
                        </h3>
                        <p className="text-[.65rem] text-center font-medium line-clamp-3">
                          - {member.job} -
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute left-0 flex justify-between px-4 top-[40%]">
                  {currentIndexEvents > 0 && (
                    <button
                      className="p-2 bg-white rounded-full shadow-lg xl:hover:bg-lightBlue xl:hover:text-white xl:hover:scale-[1.15] transition-all text-defaultBlue"
                      onClick={handlePrevEvents}
                    >
                      <ChevronLeft />
                    </button>
                  )}
                </div>

                <div className="absolute right-0 flex justify-between px-4 top-[40%]">
                  {currentIndexEvents <
                    totalItemsEvents - itemsPerPageEvents && (
                    <button
                      className="p-2 bg-white rounded-full shadow-lg xl:hover:bg-lightBlue xl:hover:text-white xl:hover:scale-[1.15] transition-all text-defaultBlue"
                      onClick={handleNextEvents}
                    >
                      <ChevronRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default LeaderShip;
