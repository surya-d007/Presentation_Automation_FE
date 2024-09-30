import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const audioMediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  // Function to start or stop screen sharing
  const handleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: false, // Audio off by default for screen sharing
        });
        videoRef.current.srcObject = stream;
        mediaStreamRef.current = stream;
        setIsScreenSharing(true);
      } catch (error) {
        console.error("Error sharing screen:", error);
      }
    } else {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      setIsScreenSharing(false);
    }
  };

  // Function to start or stop audio recording
  const handleAudioRecording = async () => {
    if (!isRecordingAudio) {
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(audioStream);
        audioMediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        };

        mediaRecorder.start();
        setIsRecordingAudio(true);
        console.log("Audio recording started");
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    } else {
      audioMediaRecorderRef.current.stop();
      audioMediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioElement = new Audio(audioUrl);
        audioElement.play(); // Automatically play the recorded audio after stopping
        console.log("Audio recording stopped and played");
      };
      setIsRecordingAudio(false);
    }
  };

  return (
    <div className="App">
      <h1>Screen Sharing and Audio Recording</h1>

      {/* Video element to display the shared screen */}
      <div className="screen-container">
        <video
          ref={videoRef}
          autoPlay
          style={{ width: "80%", height: "80%", backgroundColor: "black" }}
        ></video>
      </div>

      {/* Buttons for screen sharing and audio recording */}
      <div className="controls">
        <button onClick={handleScreenShare}>
          {isScreenSharing ? "Stop Sharing" : "Share Screen"}
        </button>
        <button onClick={handleAudioRecording}>
          {isRecordingAudio ? "Stop Recording Audio" : "Start Recording Audio"}
        </button>
      </div>
    </div>
  );
}

export default App;
