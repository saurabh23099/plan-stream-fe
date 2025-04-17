import React, { ForwardedRef, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

type VideoPlayerProps = {
  videoUrl: string;
  poster: string;
  muted: boolean;
  videoRef: ForwardedRef<HTMLVideoElement>;
};

const VideoPlayer: React.FC<VideoPlayerProps> = memo(({
  videoUrl,
  poster,
  muted,
  videoRef,
}) => {
  const isIntractive = useSelector((state: RootState) => state.toggle.isIntractive);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      muted={muted}
      controls={isIntractive}
      playsInline
      preload="metadata"
      poster={poster}
      className="h-full w-full object-cover"
    />
  );
});

export default VideoPlayer;
