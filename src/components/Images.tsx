import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

const Images: React.FC<ImageProps> = ({ src, alt = "Logo" }) => (
    <img className="h-[40px] w-[100px] object-contain cursor-pointer" src={src} alt={alt} />
);

export default Images;
