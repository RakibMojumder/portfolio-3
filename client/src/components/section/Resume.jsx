import { HiOutlineDownload } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import ResumeHeader from "../resume/ResumeHeader";
import ResumeSkill from "../resume/ResumeSkill";
import ResumeProject from "../resume/ResumeProject";
import Education from "../resume/Education";
import Language from "../resume/Language";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pb-16 sm:pb-0">
      <div className="w-full lg:w-3/4 mx-auto pt-10 pb-32 px-2 lg:px-0">
        <div className="border border-neutral-800 dark:border-purple-200/10 p-4">
          <ResumeHeader />
          <ResumeSkill />
          <ResumeProject />
          <Education />
          <Language />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-secondary dark:text-white text-lg flex items-center gap-2"
          >
            <BsArrowLeft />
            Back
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1Mg8g6woxuh8fjkAcU2kdtSH0652g7C7d/view"
            className="flex items-center gap-2 bg-secondary dark:bg-primary dark:text-white px-5 py-1 font-semibold rounded-full"
          >
            Download
            <HiOutlineDownload size={24} className="dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
