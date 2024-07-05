import { useState, useEffect } from "react";
import "./backtotop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1400) {
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
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity ${
        isVisible ? "visible" : ""
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-2 rounded-full bg-indigo-600 text-white shadow-md hover:bg-indigo-500 focus:outline-none"
      >
        Back to Top
      </button>
    </div>
  );
};

export default BackToTop;
