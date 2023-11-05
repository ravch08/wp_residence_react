import { useEffect, useState } from "react";

import { ScrollTopProps } from "../../types/types";

const ScrollTop = () => {
  const [scroller, setScroller] = useState("");

  const scrollHandler = () => {
    const scrollClass = window.scrollY > 150 ? "show" : "";
    setScroller(scrollClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop: ScrollTopProps = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollClass = `scrollToTop ${scroller}`;

  return (
    <div onClick={scrollToTop} className={scrollClass}>
      <svg
        fill="white"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ScrollTop;
