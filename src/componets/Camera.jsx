import { useState, useRef } from "react";
import styled from "styled-components";

// Styled components
const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const WebcamVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  background: black;
`;

const WebcamButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Camera() {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play(); // Play the video stream
      }
      setMediaStream(stream);
    } catch (error) {
      console.error("Error accessing webcam", error);
    }
  };

  const stopWebcam = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  return (
    <WebcamContainer>
      <WebcamVideo ref={videoRef} autoPlay muted />
      {mediaStream ? (
        <WebcamButton onClick={stopWebcam}>Stop Webcam</WebcamButton>
      ) : (
        <WebcamButton onClick={startWebcam}>Start Webcam</WebcamButton>
      )}
    </WebcamContainer>
  );
}

export default Camera;
