import React, { memo } from "react";

type VideoMetaProps = {
  views: string;
  uploadTime: string;
};

const VideoMeta: React.FC<VideoMetaProps> = memo(({ views, uploadTime }) => (
  <div className="flex text-gray-500 text-[12px]">
    <span>{`${views} views`}</span>
    <span className="mx-1">•</span>
    <span>{uploadTime}</span>
  </div>
));

export default VideoMeta;
