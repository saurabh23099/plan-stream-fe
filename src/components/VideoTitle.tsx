import React, { memo } from "react";

const VideoTitle: React.FC<{ title: string }> = memo(({ title }) => (
  <span className="text-sm font-bold line-clamp-2">{title}</span>
));

export default VideoTitle;
