const Hamburger = ({ handleOpen, isOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="flex flex-col justify-center items-center gap-y-1.5 cursor-pointer border border-neutral-600 p-2 rounded"
    >
      <span
        className={`h-0.5 bg-white w-6 inline-block rounded-full transition-all duration-300 ${
          isOpen && "-rotate-45 translate-y-2"
        }`}
      ></span>
      <span
        className={`h-0.5 bg-white w-6 inline-block rounded-full transition-all duration-300 ${
          isOpen && "opacity-0"
        }`}
      ></span>
      <span
        className={`h-0.5 bg-white w-6 inline-block rounded-full transition-all duration-300 ${
          isOpen && "rotate-45 -translate-y-2"
        }`}
      ></span>
    </div>
  );
};

export default Hamburger;
