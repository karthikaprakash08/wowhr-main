import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 text-white transition-all duration-300 border-2 border-transparent rounded-full shadow-lg xl:hover:border-lightBlue xl:hover:shadow-2xl bg-lightBlue xl:hover:-translate-y-2 xl:hover:bg-white xl:hover:text-lightBlue"
        >
          <ChevronUp className="w-5 h-5 md:w-7 md:h-7 text-inherit" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
