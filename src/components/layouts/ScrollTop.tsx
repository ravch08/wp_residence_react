const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-100 shadow-md transition-colors duration-500 ease-in-out hover:bg-primary-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="h-4 w-4"
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
