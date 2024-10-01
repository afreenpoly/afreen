import { useState, useEffect } from "react";
import "./backtotop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const mobileBreakpoint = 640; // Tailwind's default 'sm' breakpoint (640px)
    const mobileThreshold = 2800;
    const desktopThreshold = 1400;

    if (window.innerWidth <= mobileBreakpoint) {
      // Mobile screen
      if (window.scrollY > mobileThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      // Desktop screen
      if (window.scrollY > desktopThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed transition-opacity ${
        isVisible ? "visible" : ""
      } back-to-top-btn`}
    >
      <button
        onClick={scrollToTop}
        className="p-2 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-500 focus:outline-none"
      >
        {/* SVG for mobile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 block sm:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>

        {/* Text for PC */}
        <span className="hidden sm:block">Back to Top</span>
      </button>
    </div>
  );
};

export default BackToTop;
