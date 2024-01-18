import { BiHomeSmile } from "react-icons/bi";
import { AiFillFileImage, AiOutlineLogin } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import Profile from "./Profile";
import NavItem from "./NavItem";

const Others = () => {
  return (
    <div
      className={`purple-scroll hidden sm:block h-full sm:min-w-[26%] md:min-w-[210px] xl:max-w-[17%] border-r border-secondary/10 dark:border-slate-700 pt-5 pb-28 overflow-y-auto`}
    >
      <Profile />
      <div className="mt-6">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">Pages</h3>
        <ul className="flex flex-col mt-4 text-sm px-2">
          <NavItem href="/" label="Home" icon={BiHomeSmile} />
          <NavItem
            href="/others/resume"
            label="Resume"
            icon={AiFillFileImage}
          />
          <NavItem href="/others/blog" label="Blog" icon={FaFileSignature} />
          <NavItem href="/others/login" label="Login" icon={AiOutlineLogin} />
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-neutral-400 pl-4 text-xs tracking-widest">Theme</h3>
        <ThemeSwitcher className={"mt-3 pl-10"} />
      </div>
    </div>
  );
};

export default Others;
