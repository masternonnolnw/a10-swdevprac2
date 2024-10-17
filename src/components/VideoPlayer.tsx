import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  vdoSrc: string;
  isPlaying: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ vdoSrc, isPlaying }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      width="400"
      controls
      className="rounded-md"
      autoPlay
      muted
    >
      <source src={vdoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
