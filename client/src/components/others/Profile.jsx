import { BsFacebook, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import myImage from "../../assets/rakib.png";
import Image from "./Image";

const Profile = () => {
  return (
    <div className="pb-6 border-b border-emerald-500/10 dark:border-slate-600">
      <Image
        src={myImage}
        width={112}
        className="mx-auto rounded-full"
        alt="my image"
      />
      <div className="mt-2 text-neutral-200 text-center">
        <h3 className="text-lg font-semibold">Rakib Ahmed</h3>
        <p className="block sm:hidden md:block text-xs">
          sujonahmed45a4@gmail.com
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-3 text-white mt-5">
        <a
          href="https://www.facebook.com/profile.php?id=100078261521721"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 border flex justify-center items-center rounded-full duration-500 cursor-pointer hover:text-emerald-500 dark:hover:text-purple-400 hover:border-emerald-500 dark:hover:border-purple-400"
        >
          <BsFacebook size={15} />
        </a>
        <a
          href="https://www.linkedin.com/in/rakib-ahmed4554/"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 border flex justify-center items-center rounded-full duration-500 cursor-pointer hover:text-emerald-500 dark:hover:text-purple-400 hover:border-emerald-500 dark:hover:border-purple-400"
        >
          <FaLinkedinIn size={15} />
        </a>
        <a
          href="https://wa.me/8801829218489"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 border flex justify-center items-center rounded-full duration-500 cursor-pointer hover:text-emerald-500 dark:hover:text-purple-400 hover:border-emerald-500 dark:hover:border-purple-400"
        >
          <BsWhatsapp size={15} />
        </a>
        <a
          href="https://github.com/RakibMojumder"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 border flex justify-center items-center rounded-full duration-500 cursor-pointer hover:text-emerald-500 dark:hover:text-purple-400 hover:border-emerald-500 dark:hover:border-purple-400"
        >
          <BsGithub size={15} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
