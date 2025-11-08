import { useState, useEffect } from "react";
import scrollTopIcon from "@/assets/scroll-top-icon.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white shadow-custom-lg hover:scale-110 transition-transform duration-300 animate-fade-in flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <img 
            src={scrollTopIcon} 
            alt="Scroll to top" 
            className="w-8 h-8 object-contain"
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
