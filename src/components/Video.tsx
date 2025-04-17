import React, { useRef, useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoAuthor from "./VideoAuthor";
import VideoMeta from "./VideoMeta";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

const Video = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isIntractive = useSelector((state: RootState) => state.toggle.isIntractive);

  // Play video on hover with slight delay
  const handleMouseEnter = () => {
    if (isIntractive) {
      hoverTimeout.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 500);
    }
  };

  // Stop and reset video when hover ends
  const handleMouseLeave = () => {
    if (hoverTimeout.current && isIntractive) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    if (videoRef.current && isIntractive) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  return (
    <div>
      <div
        className="flex flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
          <VideoPlayer
            videoUrl={video?.videoUrl}
            poster={video?.thumbnailUrl}
            muted={muted}
            videoRef={videoRef}
          />
        </div>
        <div className="flex mt-3 space-x-2">
          <div className="flex items-start">
            <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse"></div>
          </div>
          <div>
            <VideoTitle title={video?.title} />
            <VideoAuthor author={video?.author} />
            <VideoMeta views={video?.views} uploadTime={video?.uploadTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;