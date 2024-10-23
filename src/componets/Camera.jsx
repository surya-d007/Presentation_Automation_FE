import { useRef, useEffect } from "react";
import styled from "styled-components";

// Styled components
const WebcamContainer = styled.div`
  width: 75%;
  max-width: 350px;
  margin: 0 auto;
`;

const WebcamVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  background: black;
`;

function Camera({ mediaStream }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (mediaStream && videoRef.current) {
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
    }
  }, [mediaStream]);

  return (
    <WebcamContainer>
      <WebcamVideo
        ref={videoRef}
        autoPlay
        muted
        className="border border-violet-500 border-4"
      />
    </WebcamContainer>
  );
}

export default Camera;
