import useScreenSize from "./useScreenSize";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import useFetchKnowledge from "../Data/useFetchKnowledge";

const Knowledge = () => {
  const { knowledgeData, loading, error, errorMsg } = useFetchKnowledge();
  // console.log(knowledgeData);

  const [selectedType, setSelectedType] = useState("pepTalks");

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setCurrentIndexHub(0);
  };

  const filteredDataHub = knowledgeData.filter(
    (item) => item.type === selectedType
  );

  // Sliding
  const { width } = useScreenSize();
  const isSmallScreen = width < 640;
  const itemsPerPageHub = !isSmallScreen ? 4 : 2;

  const [currentIndexHub, setCurrentIndexHub] = useState(0);
  const [isHoveredHub, setIsHoveredHub] = useState(false);
  const intervalRefHub = useRef(null);

  const totalItemsHub = filteredDataHub.length;

  const handleNextHub = () => {
    if (currentIndexHub < totalItemsHub - itemsPerPageHub) {
      setCurrentIndexHub(currentIndexHub + 1);
    }
  };

  const handlePrevHub = () => {
    if (currentIndexHub > 0) {
      setCurrentIndexHub(currentIndexHub - 1);
    }
  };

  useEffect(() => {
    const startSlideshowHub = () => {
      intervalRefHub.current = setInterval(() => {
        setCurrentIndexHub((prevIndex) => {
          if (prevIndex < totalItemsHub - itemsPerPageHub) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 3000);
    };

    if (!isHoveredHub) {
      startSlideshowHub();
    }

    return () => clearInterval(intervalRefHub.current);
  }, [isHoveredHub, totalItemsHub, itemsPerPageHub, selectedType]);

  useEffect(() => {
    setCurrentIndexHub(0);
  }, [selectedType]);

  // Sliding

  return (
    <section
      id="knowledge"
      className="flex flex-col h-full p-5 my-0 overflow-hidden bg-white cursor-default xl:mt-14 xl:my-0 md:my-10 xl:p-0 xl:pl-40 xl:pr-24 xl:h-screen "
    >
      <div
        className="max-w-2xl mb-5 md:mb-10 xl:mb-10"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="mb-3 text-xl font-semibold leading-tight text-left md:text-3xl xl:text-3xl xl:mb-9 font-jost">
          KNOWLEGDE HUB
        </div>
        <div className="text-sm xl:text-lg font-semibold text-left md:leading-[1.7] md:text-xl tracking-wider xl:leading-[1.55] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
      </div>
      <div
        className="flex mb-3 xl:mb-4 md:mb-2 gap-0 justify-between xl:justify-normal xl:gap-9 xl:mx-[.15rem]"
        data-aos="fade-up"
        data-aos-duration="750"
      >
        <button
          className={`pb-2 text-xs  pt-1 md:text-2xl xl:text-xl  font-medium text-left border-b-2 xl:hover:text-gray-700 transition-all duration-300 xl:hover:border-gray-700  min-w-20 xl:min-w-40 xl:w-72 md:w-72 font-jost ${
            selectedType === "pepTalks"
              ? "text-black border-black"
              : "text-gray-400 border-gray-400"
          }`}
          onClick={() => handleTypeClick("pepTalks")}
        >
          Pep Talks
        </button>
        <button
          className={`pb-2 text-xs  pt-1 md:text-2xl xl:text-xl  font-medium text-left  border-b-2 xl:hover:text-gray-700 transition-all duration-300 xl:hover:border-gray-700  min-w-20 xl:min-w-40 xl:w-72 md:w-72 font-jost ${
            selectedType === "podcast"
              ? "text-black border-black"
              : "text-gray-400 border-gray-400"
          }`}
          onClick={() => handleTypeClick("podcast")}
        >
          Podcast
        </button>
        <button
          className={`pb-2 text-xs px-1 pt-1 md:text-2xl xl:text-xl  font-medium text-left  border-b-2 xl:hover:text-gray-700 transition-all duration-300 xl:hover:border-gray-700  min-w-20 xl:min-w-40 xl:w-72 md:w-72 font-jost ${
            selectedType === "learningPrograms"
              ? "text-black border-black"
              : "text-gray-400 border-gray-400"
          }`}
          onClick={() => handleTypeClick("learningPrograms")}
        >
          Learning Programs
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[60vh] xl:h-[50vh] bg-black  bg-opacity-70">
          <LoaderCircle className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center w-full h-[25vh] xl:h-[50vh] xl:text-2xl text-white bg-red-500">
          Error loading events data. Please try again later.
          {errorMsg}
        </div>
      ) : (
        <div
          className="relative px-[.1rem] xl:px-[.15rem] overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="750"
        >
          {selectedType === "pepTalks" && (
            <div
              className="flex gap-3 transition-transform duration-300 ease-in-out xl:gap-9 md:gap-9"
              style={{
                transform: `translateX(-${
                  currentIndexHub * (103 / itemsPerPageHub)
                }%)`,
              }}
            >
              {filteredDataHub.map((x, i) => (
                <div
                  key={i}
                  className="w-40 my-4 bg-white shadow-[0_4px_10px_rgb(0,0,0,0.12)] rounded-xl xl:w-72 md:w-72"
                  onMouseEnter={() => setIsHoveredHub(true)}
                  onMouseLeave={() => setIsHoveredHub(false)}
                >
                  <div className="w-40 h-[7rem] xl:h-[13rem] md:h-[13rem] xl:w-72 md:w-72 rounded-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${
                        x.mediaUrl.split("v=")[1]
                      }`}
                      frameBorder="2"
                      className="rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex flex-col h-40 gap-2 p-2 pt-4 xl:p-3 xl:gap-3 xl:h-52">
                    <a
                      href={x.mediaUrl}
                      className="text-xs xl:hover:underline xl:text-xl md:text-lg font-jost leading-[1.1] cursor-pointer duration-300 xl:hover:-translate-y-1 transition-all xl:hover:text-darkBlue xl:leading-[1.1] font-[500] text-defaultBlue line-clamp-3 uppercase"
                    >
                      {x.title}
                    </a>
                    <div className="text-[.65rem] xl:text-xs tracking-wide font-bold leading-[1.1] xl:leading-[1.1]  line-clamp-4">
                      {x.description}
                    </div>
                    <div className="flex items-center gap-2 mt-auto ">
                      {/* href={x.linkedInLink} */}
                      <img
                        src={x.authorPicture}
                        alt="authorImg"
                        className="rounded-full w-7 h-7 xl:w-9 xl:h-9"
                      />
                      <div className="text-[.65rem] xl:text-xs tracking-wide font-bold text-gray-500 ">
                        {x.authorName}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedType === "podcast" && (
            <div className="">
              <div
                className="px-3 py-2 text-xs font-medium text-center text-white rounded-full shadow-lg md:px-4 md:text-lg bg-lightBlue w-max font-jost"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                <span className="text-xs md:text-lg ">&#8226;</span> SERIES :
                WOWHR PEOPLE
              </div>
              <div
                className="flex gap-6 transition-transform duration-300 ease-in-out md:px-5 xl:px-0 xl:gap-9 md:gap-9"
                style={{
                  transform: `translateX(-${
                    currentIndexHub *
                    ((isSmallScreen ? 188 : 103) / itemsPerPageHub)
                  }%)`,
                }}
              >
                {filteredDataHub.map((x, i) => (
                  <div
                    key={i}
                    className="bg-white my-4 shadow-[0_4px_10px_rgb(0,0,0,0.2)] rounded-lg w-72"
                    onMouseEnter={() => setIsHoveredHub(true)}
                    onMouseLeave={() => setIsHoveredHub(false)}
                  >
                    <div className="p-2 w-72 h-28 xl:h-48 md:h-48">
                      <iframe
                        src={`https://open.spotify.com/embed/${
                          x.mediaUrl.includes("/track/") ? "track" : "episode"
                        }/${
                          x.mediaUrl
                            .split(
                              x.mediaUrl.includes("/track/")
                                ? "/track/"
                                : "/episode/"
                            )[1]
                            .split("?")[0]
                        }`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div className="flex flex-col h-24 gap-2 p-2 xl:gap-3 xl:p-3 xl:h-32">
                      <a
                        href={x.mediaUrl}
                        className="text-sm xl:text-xl md:text-lg  font-jost leading-[1.1] duration-300 xl:hover:-translate-y-1 transition-all xl:hover:text-darkBlue  xl:leading-[1.1] cursor-pointer font-[500] text-defaultBlue line-clamp-2 uppercase xl:hover:underline"
                      >
                        {x.title}
                      </a>
                      <div className="text-xs xl:text-sm leading-[1.4] font-bold line-clamp-3">
                        {x.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {selectedType === "learningPrograms" && (
            <div
              className="flex gap-3 transition-transform duration-300 ease-in-out xl:gap-9 md:gap-9"
              style={{
                transform: `translateX(-${
                  currentIndexHub * (103 / itemsPerPageHub)
                }%)`,
              }}
            >
              {filteredDataHub.map((x, i) => (
                <div
                  key={i}
                  className="w-40 my-4 bg-white shadow-[0_4px_10px_rgb(0,0,0,0.2)] rounded-xl xl:w-72 md:w-72"
                  onMouseEnter={() => setIsHoveredHub(true)}
                  onMouseLeave={() => setIsHoveredHub(false)}
                >
                  <div className="w-40 h-24 xl:h-48 md:h-48 xl:w-72 md:w-72">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${
                        x.mediaUrl.split("v=")[1]
                      }`}
                      frameBorder="0"
                      className="rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex flex-col h-32 gap-3 p-3 ">
                    <a
                      href={x.mediaUrl}
                      className="text-sm xl:text-xl xl:hover:underline md:text-lg font-jost leading-[1.1] xl:leading-[1.1] duration-300 xl:hover:-translate-y-1 transition-all xl:hover:text-darkBlue font-[500] text-defaultBlue line-clamp-2 uppercase"
                    >
                      {x.title}
                    </a>
                    <div className="text-xs xl:text-sm leading-[1.4] font-bold line-clamp-3">
                      {x.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="absolute left-0 flex justify-between px-4 xl:-left-[7px] top-1/2">
            {currentIndexHub > 0 && (
              <button
                className="p-2 transition-all bg-white border-2 rounded-full shadow-lg xl:border-l-0 xl:rounded-l-none xl:px-4 xl:scale-125 border-darkBlue xl:hover:bg-lightBlue xl:hover:text-white xl:hover:ml-[2.5px] xl:hover:px-6 text-darkBlue xl:hover:border-white"
                onClick={handlePrevHub}
              >
                <ChevronLeft />
              </button>
            )}
          </div>
          <div className="absolute right-0 flex justify-between px-4 xl:-right-[7px] top-1/2">
            {currentIndexHub < totalItemsHub - itemsPerPageHub && (
              <button
                className="p-2 transition-all bg-white border-2 rounded-full shadow-lg xl:border-r-0 xl:rounded-r-none xl:px-4 xl:scale-125 border-darkBlue xl:hover:bg-lightBlue xl:hover:text-white xl:hover:px-6 xl:hover:mr-[2.5px] text-darkBlue xl:hover:border-white"
                onClick={handleNextHub}
              >
                <ChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Knowledge;