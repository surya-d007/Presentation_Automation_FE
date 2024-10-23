import React from "react";
import SideBarTest from "../componets/SideBarTest";
import ScreenShare from "../componets/ScreenShare";
function Presentation() {
  return (
    <div className="flex h-screen mb-5">
      {/* Left Sidebar - 25% width */}
      <div className="w-[20vw] bg-gray-300  ">
        <SideBarTest />
      </div>

      {/* Right Section - 75% width */}
      <div className="w-[80vw] p-4 flex flex-col">
        <div className="border border-black mb-8 ">
          <h1>Test Details:</h1>
          <div className="  mb-4 flex">
            <div className="flex flex-row w-full">
              {/* Left Column */}
              <div className="w-1/2 pr-4">
                <div className="flex">
                  <p className="font-bold">Faculty: </p>
                  <p className="ml-2">Prof. ABCXYZ</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Topic: </p>
                  <p className="ml-2">esfvvr egfvrtefgv</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-1/2">
                <div className="flex">
                  <p className="font-bold">Purpose: </p>
                  <p className="ml-2">DA 1 / Knowledge Test</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Attached Document: </p>
                  <p className="ml-2">click here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Sharing Area */}
        <div className=" h-[65vh]  mb-4 ">
          <ScreenShare />
        </div>
        {/* Controls Section */}
      </div>
    </div>
  );
}

export default Presentation;
