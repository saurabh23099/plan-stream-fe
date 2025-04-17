import React, { memo } from "react";

const VideoAuthor: React.FC<{ author: string }> = memo(({ author }) => (
  <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
    {author}
  </span>
));

export default VideoAuthor;
