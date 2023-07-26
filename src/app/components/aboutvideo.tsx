import React from "react";

const VideoPlayer: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <video
      className="lg:w-2/5 bg-black text-white rounded-xl m-5 shadow-2xl"
      width="100%"
      height="100%"
      poster="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=996&t=st=1689912975~exp=1689913575~hmac=9560db43646d997e2e127ae9e63c516bdaf7bb0931dd6f887854b2e0827a0795"
      controls
      onEnded={handleVideoEnded}
      ref={videoRef}
      id="about-video"
    >
      <source src="/videos/sample_video.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
