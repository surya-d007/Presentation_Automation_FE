import React from "react";
import SideBarTest from "../componets/SideBarTest";

function Presentation() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar - 25% width */}
      <div className="w-[20vw] bg-gray-300  ">
        <SideBarTest />
      </div>

      {/* Right Section - 75% width */}
      <div className="w-[80vw] p-4 flex flex-col">
        {/* Top Rectangle */}
        <div className="bg-gray-200 h-[15vh] mb-4 flex justify-center items-center">
          <p className="text-xl font-bold">Top Content</p>
        </div>

        {/* Screen Sharing Area */}
        <div className="bg-gray-400 h-[65vh] mb-4 flex justify-center items-center">
          <p className="text-lg font-semibold">Screen Sharing Area</p>
        </div>

        {/* Controls Section */}
        <div className="bg-gray-200 h-[20vh] flex justify-center items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Control Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
