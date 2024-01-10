import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const ScrollIndicate = ({ className }) => {
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 text-secondary dark:text-primary text-center z-50 hidden lg:flex flex-col justify-center items-center ${className}`}
    >
      <div className="bg-secondary dark:bg-primary text-black dark:text-white h-10 w-10 flex justify-center items-center rounded-full animate-bounce">
        <LiaLongArrowAltDownSolid size={26} />
      </div>
      <p>Scroll</p>
    </div>
  );
};

export default ScrollIndicate;
