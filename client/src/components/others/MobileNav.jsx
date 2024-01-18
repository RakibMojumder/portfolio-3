import { AiFillFileImage, AiOutlineLogin } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";

const MobileNav = () => {
  return (
    <div className="text-4xl w-full text-white rounded-b-3xl sm:hidden fixed bottom-2 left-0 z-50">
      <div className="h-full w-[330px] bg-neutral-950 px-8 mx-auto rounded-2xl flex items-center justify-evenly">
        <NavLink
          to={"/"}
          className="w-full flex justify-center items-center py-1"
        >
          {({ isActive }) => (
            <div
              className={`h-12 w-[75px] bg-neutral-950 flex justify-center items-center rounded-t-full transition-all duration-500 ${
                isActive ? "-translate-y-[18px]" : "-translate-y-0"
              }`}
            >
              <div
                className={`h-9 w-9 flex justify-center items-center rounded-full ${
                  isActive
                    ? "bg-secondary dark:bg-primary text-black dark:text-white mt-1"
                    : "text-white"
                }`}
              >
                <BiHomeSmile className="text-2xl" />
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to={"/others/resume"}
          className="w-full flex justify-center items-center py-1"
        >
          {({ isActive }) => (
            <div
              className={`h-12 w-[75px] bg-neutral-950 flex justify-center items-center rounded-t-full transition-all duration-500 ${
                isActive ? "-translate-y-[18px]" : "-translate-y-0"
              }`}
            >
              <div
                className={`h-9 w-9 flex justify-center items-center rounded-full ${
                  isActive
                    ? "bg-secondary dark:bg-primary text-black dark:text-white mt-1"
                    : "text-white"
                }`}
              >
                <AiFillFileImage className="text-2xl" />
              </div>
            </div>
          )}
        </NavLink>

        <NavLink
          to={"/others/blog"}
          className="w-full flex justify-center items-center py-1"
        >
          {({ isActive }) => (
            <div
              className={`h-12 w-[75px] bg-neutral-950 flex justify-center items-center rounded-t-full transition-all duration-500 ${
                isActive ? "-translate-y-[18px]" : "-translate-y-0"
              }`}
            >
              <div
                className={`h-9 w-9 flex justify-center items-center rounded-full ${
                  isActive
                    ? "bg-secondary dark:bg-primary text-black dark:text-white mt-1"
                    : "text-white"
                }`}
              >
                <FaFileSignature className="text-2xl" />
              </div>
            </div>
          )}
        </NavLink>
        <NavLink
          to={"/others/login"}
          className="w-full flex justify-center items-center py-1"
        >
          {({ isActive }) => (
            <div
              className={`h-12 w-[75px] bg-neutral-950 flex justify-center items-center rounded-t-full transition-all duration-500 ${
                isActive ? "-translate-y-[18px]" : "translate-y-0"
              }`}
            >
              <div
                className={`h-9 w-9 flex justify-center items-center rounded-full ${
                  isActive
                    ? "bg-secondary dark:bg-primary text-black dark:text-white mt-1"
                    : "text-white"
                }`}
              >
                <AiOutlineLogin className="text-2xl" />
              </div>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
