"use client";

import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "../hooks/useWindowListener";

const PromoteCard: React.FC = () => {
  const vdoSrc = "/vdo/getvaccine.mp4";
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Prevent right-click context menu
  useWindowListener("contextmenu", (event) => {
    event.preventDefault();
  });

  return (
    <div className="flex flex-row gap-4 p-4 rounded-2xl border bg-slate-50 max-w-[1500px] mx-auto">
      <VideoPlayer vdoSrc={vdoSrc} isPlaying={isPlaying} />
      <div className="flex flex-col gap-2 min-w-[400px] justify-between">
        <h2 className="text-black">Get your vaccine today.</h2>
        <button
          onClick={handlePlayPause}
          className="border p-2 px-5 rounded-full bg-blue-300 font-bold text-white"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default PromoteCard;
