import { HiOutlineDownload } from "react-icons/hi";
import ResumeHeader from "../resume/ResumeHeader";
import ResumeSkill from "../resume/ResumeSkill";
import ResumeProject from "../resume/ResumeProject";
import Education from "../resume/Education";
import Language from "../resume/Language";
import { saveAs } from "file-saver";

const Resume = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1Mg8g6woxuh8fjkAcU2kdtSH0652g7C7d/view",
      "resume.pdf"
    );
  };
  return (
    <div className="relative">
      <button
        onClick={saveFile}
        className="h-10 w-10 flex justify-center items-center bg-emerald-500 dark:bg-primary rounded-full cursor-pointer animate-bounce fixed top-7 sm:top-14 md:top-24 right-5 sm:right-14 md:right-24 2xl:right-56"
      >
        <HiOutlineDownload size={26} className="text-white" />
      </button>
      <div className="w-full lg:w-3/4 mx-auto pt-10 pb-32 px-2 lg:px-0">
        <div className="border border-slate-600 p-4">
          <ResumeHeader />
          <ResumeSkill />
          <ResumeProject />
          <Education />
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Resume;
