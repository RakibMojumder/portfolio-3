const Hamburger = ({ handleOpen, isOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="flex flex-col justify-center items-center gap-y-1 cursor-pointer"
    >
      <span
        className={`h-0.5 bg-white w-6 inline-block rounded-full transition-all duration-300 ${
          isOpen && "-rotate-45 translate-y-1.5"
        }`}
      ></span>
      <span
        className={`h-0.5 bg-white w-6 inline-block rounded-full transition-all duration-300 ${
          isOpen && "opacity-0"
        }`}
      ></span>
      <span
        className={`h-0.5 bg-white w-6 inline-block rounded-full transition-all duration-300 ${
          isOpen && "rotate-45 -translate-y-1.5"
        }`}
      ></span>
    </div>
  );
};

export default Hamburger;
