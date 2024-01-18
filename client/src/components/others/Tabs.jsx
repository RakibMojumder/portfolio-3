/* eslint-disable react/prop-types */

import Tab from "./Tab";

const Tabs = ({ tabs, activeTab, hoveredTab, setHoveredTab, handler }) => {
  return (
    <div className="mb-5 flex justify-center overflow-x-auto pb-2 tab-scroll w-[90%] mx-auto">
      <div className="ml-36 sm:ml-20 md:ml-10 lg:ml-0 mr-10 sm:mr-5 md:mr-0 inline-flex flex-nowrap items-center justify-center bg-neutral-800 dark:bg-white/[0.07] p-1.5 rounded-full">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            activeTab={activeTab}
            hoveredTab={hoveredTab}
            setHoveredTab={setHoveredTab}
            handler={handler}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
