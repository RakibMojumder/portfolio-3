import { Outlet } from "react-router-dom";
import Others from "./Others";

const OthersLayout = () => {
  return (
    <div className="flex min-h-screen sm:h-full overflow-y-auto">
      <Others />
      <div className="flex-1 overflow-y-auto purple-scroll">{<Outlet />}</div>
    </div>
  );
};

export default OthersLayout;
