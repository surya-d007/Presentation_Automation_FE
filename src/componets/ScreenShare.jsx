import React, { useState, useRef, useEffect } from "react";
import Camera from "./Camera";

function ScreenShare() {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [mediaStream, setMediaStream] = useState(null); // Webcam media stream
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  // Function to start or stop screen sharing
  const handleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
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

  // Function to start or stop webcam
  const handleWebcam = async () => {
    if (!mediaStream) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setMediaStream(stream);
      } catch (error) {
        console.error("Error accessing webcam", error);
      }
    } else {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [mediaStream]);

  return (
    <div className="App">
      {/* Video container for responsive design */}
      <div className="relative flex justify-center items-center w-full h-[60vh] md:h-[70vh] lg:h-[75vh] my-7 ">
        <video
          ref={videoRef}
          autoPlay
          className=" h-full object-contain  border border-green-700  rounded-md border-4"
        ></video>
        <div className="absolute bottom-5 right-5">
          <Camera mediaStream={mediaStream} />
        </div>
      </div>

      {/* Button controls for screen sharing and webcam */}
      <div className="controls flex justify-center space-x-4 mt-4">
        <button className="px-4 py-2 bg-[#7204FF] text-white font-bold rounded hover:bg-green-700 transition duration-300">
          Start Presentation Now
        </button>

        <button
          onClick={handleScreenShare}
          className="px-4 py-2 bg-[#7204FF] font-bold text-white rounded transition duration-300"
        >
          {isScreenSharing ? "Stop Sharing" : "Share Screen"}
        </button>
        <button
          onClick={handleWebcam}
          className="px-4 py-2 bg-[#7204FF] font-bold text-white rounded hover:bg-green-700 transition duration-300"
        >
          {mediaStream ? "Stop Webcam" : "Start Webcam"}
        </button>
      </div>
    </div>
  );
}

export default ScreenShare;
