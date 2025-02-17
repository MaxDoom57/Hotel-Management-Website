import React, { useState } from "react";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";

const Tab = () => {
  const [activeTab, setactiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Dining & Resturant" },
    { id: "tab2", label: "Parking Space" },
    { id: "tab3", label: "Resort & Pool" },
    { id: "tab4", label: "Bedrooms" },
    { id: "tab5", label: "Event Spaces" },
  ];

  const tabContent = {
    tab1: (
      <div className="grid grid-cols-3 gap-4">
        <img src={img1} alt="img1" className="w-full h-[600px]" />
        <img src={img2} alt="img1" className="w-full h-[600px]" />
        <img src={img3} alt="img1" className="w-full h-[600px]" />
      </div>
    ),

    tab2: (
      <div>
        <p>Parking Space Content here...</p>
      </div>
    ),

    tab3: (
      <div>
        <p>Resort & Pool Content here...</p>
      </div>
    ),

    tab4: (
      <div>
        <p>Bedrooms Content here...</p>
      </div>
    ),

    tab5: (
      <div>
        <p>Event Spaces Content here...</p>
      </div>
    ),
  };

  return (
    <div className="flex-col w-full">
      <div className="flex justify-evenly">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 border-b-2 w-full font-inter ${
              activeTab === tab.id
                ? "border-b-4 border-b-red-900 font-semibold"
                : "text-black"
            }`}
            onClick={() => setactiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full my-4">{tabContent[activeTab]}</div>
    </div>
  );
};

export default Tab;
