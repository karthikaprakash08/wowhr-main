import useScreenSize from "./useScreenSize";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
import useFetchEvents from "../Data/useFetchEvents.js";

const Events = () => {
  const { eventsData, loading, error, errorMsg } = useFetchEvents();

  // SLIDeeer

  const { width } = useScreenSize();
  const isSmallScreen = width < 640;

  const itemsPerPageEvents = !isSmallScreen ? 3 : 1;

  const intervalRefEvents = useRef(null);
  const [isHoveredEvents, setIsHoveredEvents] = useState(false);
  const [currentIndexEvents, setCurrentIndexEvents] = useState(0);

  const totalItemsEvents = eventsData.length;

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
      }, 30000);
    };

    if (!isHoveredEvents) {
      startSlideshowEvents();
    }

    return () => clearInterval(intervalRefEvents.current);
  }, [isHoveredEvents, totalItemsEvents, itemsPerPageEvents]);

  // SLIDeeer

  return (
    <section
      id="events"
      className="flex flex-col items-center justify-center h-full px-5 overflow-hidden bg-white cursor-default my-14 xl:my-6 md:my-20 xl:h-screen md:h-full xl:justify-between md:justify-between"
    >
      <div
        className="max-w-2xl mb-7 md:mb-12 xl:mb-0"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <div className="mb-5 text-xl font-semibold leading-tight text-center md:text-3xl xl:text-3xl xl:mb-9 font-jost">
          EVENTS
        </div>
        <div className="text-sm md:text-xl xl:text-lg font-semibold text-center tracking-wide xl:leading-[1.55] md:leading-[1.7] mx-auto">
        WoW HR organizes impactful events that bring together industry experts, HR professionals, and students, offering dynamic learning opportunities and fostering skill development that drives professional growth and leadership.
        </div>
      </div>
      <div
        className="relative slider-container xl:h-[73%] w-full xl:w-[81%]  overflow-hidden "
        data-aos="fade-left"
        data-aos-duration="750"
        onMouseEnter={() => setIsHoveredEvents(true)}
        onMouseLeave={() => setIsHoveredEvents(false)}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out "
          style={{
            transform: `translateX(-${
              currentIndexEvents * (100 / itemsPerPageEvents)
            }%)`,
          }}
        >
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
              {eventsData.map((event, index) => (
                <div
                  key={index}
                  className=" w-[24rem] mx-[1.45rem] xl:mx-[.5rem] transition-transform duration-500 shadow-md transform"
                  style={{ transition: "transform 0.5s ease-in-out" }}
                >
                  <img
                    src={event.image}
                    alt={`event${index + 1}`}
                    className="object-cover xl:min-w-[24rem] xl:min-h-[24rem] max-w-[24rem] max-h-[24rem] w-[18rem] h-[18rem] xl:w-[24rem] xl:h-[24rem] "
                  />
                  <div className="bg-lightestBlue h-[9rem] p-2 xl:p-4 space-y-4">
                    <div className="flex items-center gap-2 xl:gap-4 text-[.6rem] xl:text-[.65rem] md:text-[.8rem]">
                      <div className="p-1 px-2 font-bold text-white rounded-r-full bg-defaultBlue xl:px-4">
                        {event.type}
                      </div>
                      <div className="flex items-center gap-2 font-bold text-gray-500">
                        <span className="relative text-base xl:text-xl md:text-lg font-bold tracking-tighter top-[2px] text-defaultBlue">
                          &#8226;
                        </span>{" "}
                        {event.date}
                      </div>
                    </div>
                    <div className="text-sm font-bold xl:tracking-wide xl:text-base md:text-xl line-clamp-3">
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}{" "}
            </>
          )}
        </div>
        <div className="absolute left-0 flex justify-between px-4 xl:-left-[1px] top-1/2">
          {currentIndexEvents > 0 && (
            <button
              className="p-2 transition-all bg-white border-2 rounded-full shadow-lg xl:border-l-0 xl:rounded-l-none xl:px-4 xl:scale-125 border-darkBlue xl:hover:bg-lightBlue xl:hover:text-white xl:hover:ml-[2.5px] xl:hover:px-6 text-darkBlue xl:hover:border-white"
              onClick={handlePrevEvents}
            >
              <ChevronLeft />
            </button>
          )}
        </div>

        <div className="absolute right-0   flex justify-between px-4 xl:-right-[3px] top-1/2">
          {currentIndexEvents < totalItemsEvents - itemsPerPageEvents && (
            <button
              className="p-2 transition-all bg-white border-2 rounded-full shadow-lg xl:border-r-0 xl:rounded-r-none xl:px-4 xl:scale-125 border-darkBlue xl:hover:bg-lightBlue xl:hover:text-white xl:hover:px-6 xl:hover:mr-[2.5px] text-darkBlue xl:hover:border-white"
              onClick={handleNextEvents}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
