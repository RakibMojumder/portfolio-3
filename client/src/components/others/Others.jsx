import { BiHomeSmile } from "react-icons/bi";
import { AiFillFileImage } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../../provider/ThemeProvider";
import Profile from "./Profile";
import NavItem from "./NavItem";

const Others = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme ? "green-scroll" : "purple-scroll"
      } hidden sm:block h-full sm:min-w-[26%] md:min-w-[210px] xl:max-w-[17%] border border-teal-800 dark:border-slate-700 pt-5 pb-12 overflow-y-auto`}
    >
      <Profile />
      <div className="mt-10">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">
          Others
        </h3>
        <ul className="flex flex-col mt-4 text-sm gap-y-5">
          <NavItem href="/" label="Home" icon={BiHomeSmile} />
          <NavItem
            href="/others/resume"
            label="Resume"
            icon={AiFillFileImage}
          />
          <NavItem href="/others/blog" label="Blog" icon={FaFileSignature} />
          <ThemeSwitcher />
        </ul>
      </div>
    </div>
  );
};

export default Others;
