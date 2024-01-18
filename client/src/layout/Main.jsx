import MobileNav from "../components/others/MobileNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="dark:bg-purple-200/[.07] bg-white/5 border dark:border-none border-secondary/10 sm:h-[90vh] sm:w-[90%] 2xl:w-[75%] 2xl:mx-auto rounded-xl overflow-hidden font-montserrat w-full">
      <MobileNav />
      <Outlet />
    </div>
  );
};

export default Main;
