import React, { useState, useRef, useEffect } from "react";
import Camera from "./Camera";
function ScreenShare() {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  // Function to start or stop screen sharing
  const handleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: false, // Audio off for screen sharing
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        mediaStreamRef.current = stream;
        setIsScreenSharing(true);
      } catch (error) {
        console.error("Error sharing screen:", error);
      }
    } else {
      // Stop screen sharing
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      setIsScreenSharing(false);
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="App">
      {/* Video element to display the shared screen */}
      <div className="relative flex justify-center items-center">
        <video
          ref={videoRef}
          autoPlay
          className="h-[60%] w-[80%] bg-black mt-28"
        ></video>
      </div>

      {/* Button controls for screen sharing */}
      <div className="controls flex justify-center space-x-4 mt-4">
        <button
          onClick={handleScreenShare}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          {isScreenSharing ? "Stop Sharing" : "Share Screen"}
        </button>
      </div>
      <Camera />
    </div>
  );
}

export default ScreenShare;
