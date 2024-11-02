import React, { useState, useRef, useEffect } from "react";
import Camera from "./Camera";

function ScreenShare() {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [mediaStream, setMediaStream] = useState(null); // Webcam media stream
  const [audioStream, setAudioStream] = useState(null); // Audio stream for recording
  const [isRecording, setIsRecording] = useState(false); // Track if recording is active
  const [audioChunks, setAudioChunks] = useState([]);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const audioRecorderRef = useRef(null);

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

  // Function to start/stop audio recording
  const handlePresentation = async () => {
    if (!isRecording) {
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder = new MediaRecorder(audioStream);
        recorder.ondataavailable = (event) => {
          setAudioChunks((prev) => [...prev, event.data]);
        };
        recorder.start();
        setAudioStream(audioStream);
        audioRecorderRef.current = recorder;
        setIsRecording(true);
      } catch (error) {
        console.error("Error accessing microphone", error);
      }
    } else {
      audioRecorderRef.current.stop();
      audioStream.getTracks().forEach((track) => track.stop());
      setAudioStream(null);
      setIsRecording(false);
      sendAudioToBackend();
    }
  };

  // Send recorded audio to backend
  const sendAudioToBackend = async () => {
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    const formData = new FormData();
    formData.append("audioFile", audioBlob, "recording.webm");

    try {
      const response = await fetch("http://localhost:5000/api/upload-audio", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Audio uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  return (
    <div className="App">
      {/* Video container for responsive design */}
      <div className="relative flex justify-center items-center w-full h-[60vh] md:h-[70vh] lg:h-[75vh] my-7 ">
        <video
          ref={videoRef}
          autoPlay
          className="h-full object-contain border border-green-700 rounded-md border-4"
        ></video>
        <div className="absolute bottom-5 right-5">
          <Camera mediaStream={mediaStream} />
        </div>
      </div>

      {/* Button controls */}
      <div className="controls flex justify-center space-x-4 mt-4">
        <button
          onClick={handlePresentation}
          disabled={!isScreenSharing || !mediaStream}
          className={`px-4 py-2 font-bold text-white rounded transition duration-300 ${
            isRecording ? "bg-red-500" : "bg-[#7204FF]"
          }`}
        >
          {isRecording ? "End Presentation" : "Start Presentation Now"}
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
