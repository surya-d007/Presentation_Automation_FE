import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Home() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleStartClick = () => {
    navigate("/Presentation"); // Programmatically navigate to /Presentation
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen justify-center items-center">
      {/* Left Half */}
      <div className="lg:w-1/2 flex justify-center items-center ">
        <div className="">
          <input
            type="text"
            placeholder="Enter test Link here"
            className="mb-4 p-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <br />
          <button
            onClick={handleStartClick} // Handle button click
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
          >
            + Start Now
          </button>
        </div>
      </div>

      {/* Right Half */}
      <div className="lg:w-1/2 flex justify-center items-center"></div>
    </div>
  );
}

export default Home;
