import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const ResumeHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div>
        <h1 className="text-4xl font-extrabold text-neutral-300 uppercase">
          Rakib Ahmed
        </h1>
        <h4 className="font-medium text-neutral-400 mt-1 mb-3 ">
          MERN Stack Developer
        </h4>
        <div className="text-slate-200 flex items-center gap-10">
          <a href="">
            <BsGithub size={24} />
          </a>
          <a href="">
            <BsLinkedin size={24} />
          </a>
          <a href="">
            <BsFacebook size={24} />
          </a>
        </div>
      </div>
      <div className="space-y-1.5 mt-3 md:mt-0">
        <p className="flex items-center md:justify-end gap-3 text-neutral-300">
          <span className="text-xs sm:text-sm">Chandpur, Bangladesh</span>
          <MdOutlineLocationOn className="hidden md:block" size={20} />
        </p>
        <p className="flex items-center md:justify-end gap-3 text-neutral-300">
          <span className="text-xs sm:text-sm">+880 1829218489</span>
          <FaPhone className="hidden md:block" size={16} />
        </p>
        <p className="flex items-center md:justify-end gap-3 text-neutral-300">
          <span className="text-xs sm:text-sm">sujonahmed45a4@gmail.com</span>
          <MdEmail className="hidden md:block" size={20} />
        </p>
      </div>
    </div>
  );
};

export default ResumeHeader;
