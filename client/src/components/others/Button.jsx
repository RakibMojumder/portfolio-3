import { Link } from "react-router-dom";

const Button = ({ icon: Icon, label }) => {
  return (
    <Link
      to="/others/resume"
      className="w-[170px] mx-auto md:mx-0 pl-3 pr-4 py-1 border border-secondary dark:border-purple-500 rounded-full inline-flex justify-between items-center relative z-40 after:absolute after:h-full after:w-[27%] after:top-0 after:left-0 after:bg-secondary dark:after:bg-primary after:rounded-full after:-z-10 after:transition-all after:duration-500 hover:after:w-full group"
    >
      <Icon size={20} />
      <span className="text-white group-hover:text-black">{label}</span>
    </Link>
  );
};

export default Button;
